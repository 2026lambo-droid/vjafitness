# Cloudflare Pages Functions - Contact Form Implementation

A complete guide to implementing serverless contact forms using Cloudflare Pages Functions.

## Table of Contents
- [Overview](#overview)
- [Setup](#setup)
- [Implementation](#implementation)
- [Email Service Options](#email-service-options)
- [Security & Validation](#security--validation)
- [Testing](#testing)

---

## Overview

**What are Pages Functions?**
- Serverless functions that run on Cloudflare Workers
- Automatically deployed with your Pages site
- No separate deployment needed
- Same domain (no CORS issues)
- Free tier: 100,000 requests/day

**Use Cases:**
- Contact forms
- Newsletter signups
- Form validation
- API integrations
- Email notifications

---

## Setup

### 1. Project Structure

Add a `/functions` directory to your repo root:

```
your-project/
├── src/
├── public/
├── functions/           # Cloudflare Pages Functions
│   └── api/
│       └── contact.js   # Handles POST /api/contact
├── package.json
└── vite.config.js
```

### 2. Create Contact Form Function

**`/functions/api/contact.js`**

```javascript
export async function onRequestPost(context) {
  try {
    // Parse the form data
    const formData = await context.request.json();
    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid email format'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send email using your preferred service (see Email Service Options below)
    await sendEmail({
      to: context.env.CONTACT_EMAIL,
      from: context.env.FROM_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }, context.env);

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully!'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to send message. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

---

## Email Service Options

### Option 1: Resend (Recommended - Free Tier: 3,000 emails/month)

**Setup:**
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to Cloudflare Pages environment variables

**`/functions/api/contact.js` with Resend:**

```javascript
async function sendEmail(emailData, env) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html
    })
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return response.json();
}

export async function onRequestPost(context) {
  // ... form validation code ...

  await sendEmail({
    to: context.env.CONTACT_EMAIL,
    from: context.env.FROM_EMAIL, // Must be verified domain
    subject: `New Contact Form Submission from ${name}`,
    html: `...`
  }, context.env);

  // ... response ...
}
```

### Option 2: SendGrid (Free Tier: 100 emails/day)

```javascript
async function sendEmail(emailData, env) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: emailData.to }]
      }],
      from: { email: emailData.from },
      subject: emailData.subject,
      content: [{
        type: 'text/html',
        value: emailData.html
      }]
    })
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }
}
```

### Option 3: Mailgun (Free Tier: 5,000 emails/month for 3 months)

```javascript
async function sendEmail(emailData, env) {
  const formData = new FormData();
  formData.append('from', emailData.from);
  formData.append('to', emailData.to);
  formData.append('subject', emailData.subject);
  formData.append('html', emailData.html);

  const response = await fetch(
    `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`,
    {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`api:${env.MAILGUN_API_KEY}`)
      },
      body: formData
    }
  );

  if (!response.ok) {
    throw new Error('Failed to send email');
  }
}
```

---

## Implementation

### Frontend React Component

**`src/Components/Contact/ContactForm.jsx`**

```javascript
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (Optional)"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
      </div>

      {status.message && (
        <div className={`alert alert-${status.type}`}>
          {status.message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

---

## Security & Validation

### Environment Variables

Add to Cloudflare Pages settings (Settings → Environment Variables):

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=erik24pacheco@gmail.com
FROM_EMAIL=noreply@yourdomain.com
```

### Rate Limiting (Optional)

Use Cloudflare KV to prevent spam:

```javascript
async function checkRateLimit(ip, env) {
  const key = `ratelimit:${ip}`;
  const count = await env.RATE_LIMIT_KV.get(key);

  if (count && parseInt(count) > 5) {
    throw new Error('Too many requests. Please try again later.');
  }

  const newCount = count ? parseInt(count) + 1 : 1;
  await env.RATE_LIMIT_KV.put(key, newCount.toString(), {
    expirationTtl: 3600 // 1 hour
  });
}

export async function onRequestPost(context) {
  const ip = context.request.headers.get('CF-Connecting-IP');
  await checkRateLimit(ip, context.env);

  // ... rest of the code ...
}
```

### Input Sanitization

```javascript
function sanitizeInput(input) {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim()
    .slice(0, 500); // Limit length
}

const name = sanitizeInput(formData.name);
const message = sanitizeInput(formData.message);
```

---

## Testing

### Local Testing

```bash
# Install Wrangler CLI
npm install -g wrangler

# Run locally with Pages Functions
npx wrangler pages dev dist --binding RESEND_API_KEY=your_key
```

### Test with cURL

```bash
curl -X POST https://your-site.pages.dev/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

---

## Deployment

1. Commit the `/functions` directory to your repo
2. Push to GitHub
3. Cloudflare Pages automatically deploys the functions
4. Set environment variables in Cloudflare dashboard
5. Test the live endpoint

**That's it!** Your contact form is now powered by serverless functions at `/api/contact`.

---

## Troubleshooting

**Issue: Function not found (404)**
- Ensure `/functions` is in repo root
- Check file path matches URL: `/functions/api/contact.js` → `/api/contact`

**Issue: Environment variables not working**
- Set them in Cloudflare Pages settings (not in code)
- Redeploy after adding env vars

**Issue: CORS errors**
- Pages Functions run on same domain - no CORS needed
- If using custom domain, ensure DNS is configured

**Issue: Email not sending**
- Check API key is correct
- Verify sender domain is verified (Resend/SendGrid)
- Check function logs in Cloudflare dashboard

---

## Resources

- [Cloudflare Pages Functions Docs](https://developers.cloudflare.com/pages/platform/functions/)
- [Resend Documentation](https://resend.com/docs)
- [SendGrid API Docs](https://docs.sendgrid.com/api-reference)
