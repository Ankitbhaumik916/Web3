# Deployment Guide

This guide covers deploying the Samarth Agarwal portfolio to various hosting platforms.

## Quick Start - Build for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The build output is in the 'dist/' folder
```

## Deployment Options

### 1. GitHub Pages (Recommended for GitHub repositories)

**Setup**:
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml` with the provided workflow

**Benefits**:
- Free hosting
- Automatic deployment on push
- Custom domain support

### 2. Vercel (Easy & Recommended)

**Setup**:
```bash
npm install -g vercel
vercel
```

**Features**:
- One-command deployment
- Preview deployments on pull requests
- Automatic HTTPS
- Custom domain support

### 3. Netlify

**Manual Deploy**:
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the `dist/` folder
4. Your site is live!

**Connect GitHub**:
1. Connect your GitHub account
2. Select repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy

### 4. Traditional Hosting (FTP/cPanel)

1. Build the project: `npm run build`
2. Upload `dist/` folder contents to your web server
3. Ensure proper routing for single-page app (SPA)

**For Apache (.htaccess)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Pre-Deployment Checklist

- [ ] All images are in `resources/` folder (1.jpeg - 5.jpeg)
- [ ] Instagram QR code is at `resources/instagram-qr.png`
- [ ] Contact email is correct: `samarthaga143@gmail.com`
- [ ] Instagram link is correct: `https://www.instagram.com/sam.art.h.143`
- [ ] Project builds without errors: `npm run build`
- [ ] No console errors in production build
- [ ] Tested on multiple devices (desktop, tablet, mobile)
- [ ] All external links open correctly
- [ ] Page title and meta tags are accurate

## Performance Optimization

The project is already optimized for production:
- ✅ Code splitting enabled (Vite)
- ✅ Images compressed
- ✅ Minified CSS/JS
- ✅ GLSL shaders pre-compiled
- ✅ Base path configured for relative URLs

## Troubleshooting

### Build fails with image copy error
```bash
# Ensure resources folder exists
mkdir -p resources

# Ensure all required images are present
ls resources/
# Should show: 1.jpeg, 2.jpeg, 3.jpeg, 4.jpeg, 5.jpeg, instagram-qr.png
```

### Routes don't work after deployment
- Make sure hosting supports SPA routing
- Check base path in `vite.config.js` (should be `./`)
- Enable URL rewriting on your server

### Images don't load
- Verify image paths are relative: `./` instead of `/`
- Check that all images are in `resources/` folder
- Verify file names match exactly (case-sensitive on Linux servers)

## Domain Configuration

### Add Custom Domain

**For Vercel/Netlify**:
- Go to Settings → Domains
- Add your domain
- Update DNS records as instructed

**For GitHub Pages**:
- Go to Settings → Pages
- Enter custom domain
- Update DNS records

## SSL Certificate

- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic
- Traditional Hosting: Use Let's Encrypt (free) or your hosting provider

## Environment

The project doesn't require environment variables for basic deployment.
All configuration is in static files and CSS.

## Support & Maintenance

- Check browser console for errors
- Monitor Google Analytics (if added)
- Test all links regularly
- Update dependencies periodically: `npm update`

---

For more information, see [README.md](README.md)
