# Cloudflare Admin Dashboard with Dynamic Content & Storage

A complete guide to building an admin dashboard for managing website content, including string parametrization, database options, and image storage solutions - all using free tier services.

## Table of Contents
- [Overview](#overview)
- [Architecture Options](#architecture-options)
- [String Parametrization](#string-parametrization)
- [Database Options](#database-options)
- [Image Storage Solutions](#image-storage-solutions)
- [Authentication](#authentication)
- [Implementation Examples](#implementation-examples)

---

## Overview

**Goal:** Create an admin dashboard that allows non-technical users to update website content (text, images) without editing code.

**Components Needed:**
1. **Storage** - Where content is stored (JSON, KV, Database)
2. **API Layer** - Cloudflare Pages Functions to read/write content
3. **Admin UI** - Simple React dashboard for editing
4. **Authentication** - Protect admin routes
5. **Image Storage** - Object storage for media files

---

## Architecture Options

### Option A: Simple Sites (Recommended for Tree4Less)
**Best for:** Small business sites with <100 content strings

```
Storage: Cloudflare KV (JSON)
API: Pages Functions
Images: Cloudflare R2
Auth: Simple password or Cloudflare Access
```

**Pros:** Simple, fast, all-Cloudflare, free tier generous
**Cons:** Not ideal for complex relational data

### Option B: Advanced Sites
**Best for:** Sites with user-generated content, complex data relationships

```
Storage: MongoDB Atlas (Free tier) or Cloudflare D1
API: Pages Functions
Images: Cloudflare R2 or Cloudinary
Auth: Auth0 or Clerk
```

**Pros:** Powerful querying, scalable
**Cons:** More complex setup

---

## String Parametrization

### 1. Content Structure

Create a JSON structure for all site content:

**`content.json`**
```json
{
  "site": {
    "name": "Tree4Less",
    "tagline": "Professional Tree Service",
    "phone": "831-710-9655",
    "email": "Erik24Pacheco@gmail.com",
    "license": "Lic. # 67789"
  },
  "home": {
    "hero": {
      "title": "PROFESSIONAL <b>TREE SERVICE</b>",
      "subtitle": "Expert tree care with over a decade of experience...",
      "cta1": "Free Estimate",
      "cta2": "Our Services"
    },
    "features": [
      {
        "icon": "fa6-regular:certificate",
        "title": "Licensed & Insured",
        "description": "Fully licensed (Lic. # 67789) and insured..."
      }
    ]
  },
  "services": {
    "items": [
      {
        "id": "tree-trimming",
        "name": "Tree Trimming",
        "description": "Professional tree trimming and pruning...",
        "image": "/images/tree-trimming.jpg"
      }
    ]
  },
  "contact": {
    "title": "Get In Touch",
    "address": "Monterey Bay Area, CA",
    "hours": "Mon-Sat: 7am-6pm"
  }
}
```

### 2. React Context Provider

**`src/contexts/ContentContext.jsx`**
```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content');
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (newContent) => {
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent)
      });

      if (response.ok) {
        setContent(newContent);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to update content:', error);
      return false;
    }
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
```

### 3. Usage in Components

**Before (hardcoded):**
```javascript
<h1>PROFESSIONAL TREE SERVICE</h1>
<p>Call us at 831-710-9655</p>
```

**After (dynamic):**
```javascript
import { useContent } from '../contexts/ContentContext';

function Hero() {
  const { content } = useContent();

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.home.hero.title}</h1>
      <p>Call us at {content.site.phone}</p>
    </div>
  );
}
```

---

## Database Options

### Option 1: Cloudflare KV (Recommended for Simple Sites)

**Free Tier:**
- 100,000 reads/day
- 1,000 writes/day
- 1 GB storage

**Setup:**

1. Create KV namespace in Cloudflare dashboard
2. Bind to Pages project

**`/functions/api/content.js`**
```javascript
// GET - Read content
export async function onRequestGet(context) {
  try {
    const content = await context.env.CONTENT_KV.get('site_content', 'json');

    return new Response(JSON.stringify(content || {}), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// PUT - Update content (admin only)
export async function onRequestPut(context) {
  try {
    // Check authentication (see Authentication section)
    const isAuthenticated = await verifyAuth(context);
    if (!isAuthenticated) {
      return new Response('Unauthorized', { status: 401 });
    }

    const newContent = await context.request.json();

    // Validate content structure
    if (!newContent.site || !newContent.home) {
      return new Response('Invalid content structure', { status: 400 });
    }

    // Save to KV
    await context.env.CONTENT_KV.put('site_content', JSON.stringify(newContent));

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

**Pros:** Simple, fast, integrated with Cloudflare, no external dependencies
**Cons:** Key-value only, not ideal for complex queries

---

### Option 2: Cloudflare D1 (SQL Database)

**Free Tier:**
- 5 GB storage
- 5 million reads/day
- 100,000 writes/day

**Setup:**

```bash
# Create D1 database
npx wrangler d1 create content-db

# Create schema
npx wrangler d1 execute content-db --file=./schema.sql
```

**`schema.sql`**
```sql
CREATE TABLE content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**`/functions/api/content.js` with D1:**
```javascript
export async function onRequestGet(context) {
  const { results } = await context.env.DB.prepare(
    'SELECT key, value FROM content'
  ).all();

  const content = {};
  results.forEach(row => {
    content[row.key] = JSON.parse(row.value);
  });

  return new Response(JSON.stringify(content), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPut(context) {
  const isAuthenticated = await verifyAuth(context);
  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  const updates = await context.request.json();

  for (const [key, value] of Object.entries(updates)) {
    await context.env.DB.prepare(
      'INSERT OR REPLACE INTO content (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)'
    ).bind(key, JSON.stringify(value)).run();
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

**Pros:** SQL queries, relational data, good for complex sites
**Cons:** More setup than KV

---

### Option 3: MongoDB Atlas (Free Tier)

**Free Tier:**
- 512 MB storage
- Shared cluster
- No credit card required

**Setup:**

1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string
4. Add to Cloudflare env vars

**`/functions/api/content.js` with MongoDB:**
```javascript
import { MongoClient } from 'mongodb';

let cachedClient = null;

async function connectToDatabase(uri) {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function onRequestGet(context) {
  const client = await connectToDatabase(context.env.MONGODB_URI);
  const db = client.db('website');
  const content = await db.collection('content').findOne({ _id: 'site_content' });

  return new Response(JSON.stringify(content?.data || {}), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPut(context) {
  const isAuthenticated = await verifyAuth(context);
  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  const newContent = await context.request.json();
  const client = await connectToDatabase(context.env.MONGODB_URI);
  const db = client.db('website');

  await db.collection('content').updateOne(
    { _id: 'site_content' },
    { $set: { data: newContent, updatedAt: new Date() } },
    { upsert: true }
  );

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

**Install MongoDB driver:**
```bash
npm install mongodb
```

**Pros:** Flexible, powerful queries, generous free tier, familiar to many devs
**Cons:** External service, requires network calls (slightly slower than KV/D1)

---

### Option 4: Upstash Redis (Serverless Redis)

**Free Tier:**
- 10,000 commands/day
- 256 MB storage

**Setup:**

1. Sign up at [upstash.com](https://upstash.com)
2. Create Redis database
3. Get REST API URL and token

**`/functions/api/content.js` with Upstash:**
```javascript
export async function onRequestGet(context) {
  const response = await fetch(
    `${context.env.UPSTASH_REDIS_URL}/get/site_content`,
    {
      headers: {
        Authorization: `Bearer ${context.env.UPSTASH_REDIS_TOKEN}`
      }
    }
  );

  const data = await response.json();
  const content = data.result ? JSON.parse(data.result) : {};

  return new Response(JSON.stringify(content), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPut(context) {
  const isAuthenticated = await verifyAuth(context);
  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  const newContent = await context.request.json();

  await fetch(
    `${context.env.UPSTASH_REDIS_URL}/set/site_content`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${context.env.UPSTASH_REDIS_TOKEN}`
      },
      body: JSON.stringify([JSON.stringify(newContent)])
    }
  );

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

**Pros:** Redis-compatible, fast, REST API (no special drivers needed)
**Cons:** Limited free tier requests

---

## Image Storage Solutions

### Option 1: Cloudflare R2 (Recommended)

**Free Tier:**
- 10 GB storage
- 1 million Class A operations/month
- 10 million Class B operations/month
- No egress fees

**Setup:**

1. Create R2 bucket in Cloudflare dashboard
2. Bind to Pages project
3. Configure public access domain

**Upload Function - `/functions/api/upload.js`**
```javascript
export async function onRequestPost(context) {
  const isAuthenticated = await verifyAuth(context);
  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const formData = await context.request.formData();
    const file = formData.get('file');

    if (!file) {
      return new Response('No file provided', { status: 400 });
    }

    // Generate unique filename
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${crypto.randomUUID()}.${ext}`;

    // Upload to R2
    await context.env.IMAGES_BUCKET.put(filename, file.stream(), {
      httpMetadata: {
        contentType: file.type
      }
    });

    // Return public URL
    const publicUrl = `https://images.yourdomain.com/${filename}`;

    return new Response(JSON.stringify({
      success: true,
      url: publicUrl,
      filename
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Upload failed'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

**React Upload Component:**
```javascript
function ImageUploader({ onUploadComplete }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        onUploadComplete(data.url);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
    </div>
  );
}
```

**Pros:** Cloudflare-native, fast CDN, no egress fees, generous free tier
**Cons:** Requires Cloudflare domain or custom domain

---

### Option 2: Cloudinary (Free Tier)

**Free Tier:**
- 25 GB storage
- 25 GB bandwidth/month
- Advanced transformations included

**Setup:**

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get cloud name, API key, and secret
3. Add to Cloudflare env vars

**Upload Function:**
```javascript
export async function onRequestPost(context) {
  const isAuthenticated = await verifyAuth(context);
  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  const formData = await context.request.formData();
  const file = formData.get('file');

  // Convert file to base64
  const arrayBuffer = await file.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
  const dataUrl = `data:${file.type};base64,${base64}`;

  // Upload to Cloudinary
  const timestamp = Math.round(Date.now() / 1000);
  const signature = await generateCloudinarySignature(timestamp, context.env);

  const uploadFormData = new FormData();
  uploadFormData.append('file', dataUrl);
  uploadFormData.append('timestamp', timestamp);
  uploadFormData.append('api_key', context.env.CLOUDINARY_API_KEY);
  uploadFormData.append('signature', signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${context.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: uploadFormData
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify({
    success: true,
    url: data.secure_url
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function generateCloudinarySignature(timestamp, env) {
  const message = `timestamp=${timestamp}${env.CLOUDINARY_API_SECRET}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
```

**Pros:** Image transformations, CDN, generous free tier
**Cons:** External service, requires API key management

---

### Option 3: Imgur (Free, No Account Required)

**Free Tier:** Unlimited uploads (with rate limits)

**Upload Function:**
```javascript
export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const file = formData.get('file');

  const arrayBuffer = await file.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      'Authorization': `Client-ID ${context.env.IMGUR_CLIENT_ID}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: base64 })
  });

  const data = await response.json();

  return new Response(JSON.stringify({
    success: true,
    url: data.data.link
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

**Pros:** Simple, free, no storage limits
**Cons:** Not designed for production use, rate limits, images may be removed

---

## Authentication

### Option 1: Simple Password (For Single Admin)

**`/functions/api/_middleware.js`**
```javascript
export async function onRequest(context) {
  // Only protect PUT/POST/DELETE requests
  if (['PUT', 'POST', 'DELETE'].includes(context.request.method)) {
    const authHeader = context.request.headers.get('Authorization');

    if (!authHeader || authHeader !== `Bearer ${context.env.ADMIN_TOKEN}`) {
      return new Response('Unauthorized', { status: 401 });
    }
  }

  return context.next();
}
```

**Frontend:**
```javascript
function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    localStorage.setItem('adminToken', password);
    onLogin();
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Admin password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// In API calls:
fetch('/api/content', {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(content)
});
```

---

### Option 2: Cloudflare Access (Recommended)

**Free Tier:** 50 users

1. Enable Cloudflare Access in dashboard
2. Create access policy for `/admin/*`
3. Choose authentication method (Google, GitHub, email OTP)

**No code changes needed** - Cloudflare handles authentication before requests reach your app.

---

### Option 3: Clerk (Authentication as a Service)

**Free Tier:** 5,000 monthly active users

**Setup:**
```bash
npm install @clerk/clerk-react
```

**`src/main.jsx`**
```javascript
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
);
```

**Protected Admin Route:**
```javascript
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function AdminDashboard() {
  return (
    <>
      <SignedIn>
        <AdminPanel />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
```

---

## Implementation Examples

### Complete Admin Dashboard

**`src/Pages/Admin/Dashboard.jsx`**
```javascript
import React, { useState } from 'react';
import { useContent } from '../../contexts/ContentContext';

export default function AdminDashboard() {
  const { content, updateContent } = useContent();
  const [editedContent, setEditedContent] = useState(content);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    const success = await updateContent(editedContent);
    if (success) {
      alert('Content updated successfully!');
    } else {
      alert('Failed to update content');
    }
    setSaving(false);
  };

  const updateField = (path, value) => {
    const pathArray = path.split('.');
    const newContent = { ...editedContent };
    let current = newContent;

    for (let i = 0; i < pathArray.length - 1; i++) {
      current = current[pathArray[i]];
    }

    current[pathArray[pathArray.length - 1]] = value;
    setEditedContent(newContent);
  };

  return (
    <div className="admin-dashboard">
      <h1>Content Management</h1>

      <section>
        <h2>Site Information</h2>
        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            value={editedContent?.site?.name || ''}
            onChange={(e) => updateField('site.name', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={editedContent?.site?.phone || ''}
            onChange={(e) => updateField('site.phone', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={editedContent?.site?.email || ''}
            onChange={(e) => updateField('site.email', e.target.value)}
          />
        </div>
      </section>

      <section>
        <h2>Home Page Hero</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={editedContent?.home?.hero?.title || ''}
            onChange={(e) => updateField('home.hero.title', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Subtitle</label>
          <textarea
            value={editedContent?.home?.hero?.subtitle || ''}
            onChange={(e) => updateField('home.hero.subtitle', e.target.value)}
            rows="4"
          />
        </div>
      </section>

      <button onClick={handleSave} disabled={saving}>
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
}
```

---

## Recommended Stack for Tree4Less

For a small business site like Tree4Less, I recommend:

```
Content Storage: Cloudflare KV (simple, fast, free)
API Layer: Pages Functions (built-in, no extra setup)
Image Storage: Cloudflare R2 (generous free tier, fast CDN)
Authentication: Cloudflare Access or simple token (1-2 admins)
```

**Total Cost:** $0/month (free tier)

**Benefits:**
- All Cloudflare ecosystem (single dashboard)
- Fast performance (edge network)
- Simple setup and maintenance
- No external dependencies
- Easy to understand and modify

---

## Comparison Table

| Feature | Cloudflare KV | Cloudflare D1 | MongoDB Atlas | Upstash Redis |
|---------|---------------|---------------|---------------|---------------|
| **Free Storage** | 1 GB | 5 GB | 512 MB | 256 MB |
| **Free Reads** | 100K/day | 5M/day | Unlimited | 10K/day |
| **Free Writes** | 1K/day | 100K/day | Unlimited | Included |
| **Querying** | Key-value only | SQL | MongoDB queries | Redis commands |
| **Best For** | Simple content | Relational data | Complex data | Caching, sessions |
| **Setup Complexity** | Easy | Medium | Medium | Easy |

| Feature | Cloudflare R2 | Cloudinary | Imgur |
|---------|---------------|------------|-------|
| **Free Storage** | 10 GB | 25 GB | Unlimited |
| **Free Bandwidth** | Unlimited egress | 25 GB/month | Rate limited |
| **Transformations** | No | Yes | Basic |
| **Best For** | Production sites | Image-heavy sites | Quick prototypes |
| **Setup Complexity** | Medium | Easy | Very Easy |

---

## Next Steps

1. **Start Simple:** Use Cloudflare KV for content and R2 for images
2. **Build Admin UI:** Create basic CRUD interface in React
3. **Add Authentication:** Start with simple token, upgrade to Access later
4. **Migrate Content:** Convert hardcoded strings to JSON structure
5. **Test Thoroughly:** Ensure content updates work before going live
6. **Scale as Needed:** Move to D1 or MongoDB if requirements grow

---

## Resources

- [Cloudflare KV Documentation](https://developers.cloudflare.com/kv/)
- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [MongoDB Atlas Free Tier](https://www.mongodb.com/cloud/atlas/register)
- [Upstash Redis](https://upstash.com/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Clerk Authentication](https://clerk.com/docs)
