# Tree Images Setup Guide

## ✅ What I've Done

1. **Created `/public/assets/img/tree/` directory** - Ready for your tree images
2. **Updated all pages** to reference tree images (with temporary fallbacks)
3. **Updated content** - Changed garden/landscape references to tree service content
4. **Created image guide** - See `/public/assets/img/tree/README.md` for complete list

## 📸 How to Add Tree Images

### Step 1: Add Your Images
Place your tree service images in `/public/assets/img/tree/` with these exact filenames:

**Hero Section (4 images):**
- `hero-trimming.jpg`
- `hero-removal.jpg`
- `hero-stump.jpg`
- `hero-equipment.jpg`

**Services (4 images):**
- `service-trimming.jpg`
- `service-removal.jpg`
- `service-stump.jpg`
- `service-emergency.jpg`

**Projects (3+ images):**
- `project-removal.jpg`
- `project-trimming.jpg`
- `project-stump.jpg`
- `project-emergency.jpg`

**Gallery (8 images):**
- `gallery-1.jpg` through `gallery-8.jpg`

**Page Headers:**
- `about-heading-bg.jpg`
- `service-heading-bg.jpg`
- `gallery-heading-bg.jpg`
- `project-heading-bg.jpg`

**Other:**
- `feature-crew.jpg` (HomePage)
- `feature-about.jpg` (About page)
- `cta-bg.jpg` (HomePage CTA)
- `cta-about.jpg` (About page CTA)
- `cta-services.jpg` (Services page CTA)
- `video-bg.jpg` (About page video)
- `card-bg.jpg` (Card sections)
- `faq-img.jpg` (FAQ section)
- `brother-1.jpg` (Team member)
- `brother-2.jpg` (Team member)

### Step 2: Update Code Paths
Once you've added the images, update the code to use them. Currently, the code uses temporary images from `/assets/img/`. 

**To switch to tree images**, search for comments like:
```javascript
// Replace with: /assets/img/tree/service-trimming.jpg
```

And change the path from the temporary image to the tree image path.

### Step 3: Test
Run `npm run build` to verify everything works.

## 📝 Current Status

- ✅ All pages updated to reference tree images
- ✅ Temporary images in place (site works now)
- ✅ Content updated for tree service
- ✅ Directory structure ready
- ⏳ Waiting for you to add actual tree images

## 🎯 Quick Start

1. Add your tree images to `/public/assets/img/tree/`
2. Use the exact filenames listed above
3. The site will automatically use them (once paths are updated)
4. See `/public/assets/img/tree/README.md` for detailed specifications

## 💡 Tips

- **Image sizes**: Hero images should be 1920x1080 or larger
- **Format**: JPG recommended, optimized for web (<500KB each)
- **Naming**: Use exact filenames - case sensitive!
- **Testing**: Check each page after adding images to ensure they display correctly
