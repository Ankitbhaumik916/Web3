# Samarth Agarwal - Contemporary Artist Portfolio

A custom Three.js depth-scrolling image gallery portfolio showcasing contemporary artworks with immersive visual experiences. Built on the Atmospheric Depth Gallery framework with customizations for artist portfolio presentation.

## Features

- **Immersive Gallery**: Interactive 3D depth-scrolling gallery with mood-driven GLSL backgrounds
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern Navigation**: Smooth scroll navigation between landing, gallery, and contact sections
- **Contact Integration**: Direct email and Instagram links with QR code
- **Artist Bio Section**: Welcome section highlighting artistic philosophy
- **Call-to-Action**: Prominent "Explore My Work" button on landing page

## Installation

```
npm install
npm run dev
```

For production build:

```
npm run build
npm run preview
```

## Tech Stack

- Node.js >= 18
- [Vite](https://vite.dev/)
- [Three.js](https://threejs.org/)
- Vanilla JavaScript (ES Modules)
- GLSL (via vite-plugin-glsl)
- CSS3 with responsive design

## Project Structure

```
├── index.html                 # Main HTML with sections (landing, home, gallery, contact)
├── src/
│   ├── main.js               # Entry point
│   ├── css/
│   │   ├── landing.css       # Landing page styles
│   │   ├── homepage.css      # About/welcome section styles
│   │   ├── pages.css         # Navigation, gallery, contact, footer
│   │   ├── canvas.css        # 3D gallery canvas styles
│   │   └── base.css          # Base styles
│   ├── Experience/
│   │   ├── index.js          # Main experience manager
│   │   ├── Gallery.js        # Gallery plane management
│   │   ├── Label.js          # Artwork labels and metadata
│   │   ├── Scroll.js         # Scroll handling
│   │   └── [other files]
│   ├── Shaders/              # GLSL shader files
│   └── data/
│       └── galleryData.js    # Artwork data and configuration
├── resources/                # Images and assets
└── public/                   # Static files

```

## Deployment

### Prerequisites
- Node.js 18+
- npm or yarn

### Deployment Steps

1. **Build the project**:
   ```
   npm run build
   ```
   This generates a `dist/` folder with optimized production files.

2. **Deploy to hosting**:
   
   **Option A: Vercel (Recommended)**
   ```
   npm install -g vercel
   vercel
   ```
   
   **Option B: GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Set branch to `gh-pages` and folder to `/(root)`
   
   **Option C: Netlify**
   - Connect GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   
   **Option D: Traditional Hosting**
   - Upload contents of `dist/` folder to your web server
   - Ensure the server supports single-page applications (SPA)

## Customization

### Update Artist Information
Edit `index.html` to update:
- Artist name and bio
- Contact email
- Social media links

### Update Gallery Images
1. Replace images in `resources/` folder (images 1-5)
2. Update image references in `src/data/galleryData.js`
3. Modify artwork titles and descriptions

### Update Colors & Theme
- Landing gradient: `src/css/landing.css` line 10
- Accent color (#feca4f): Search and replace throughout CSS files
- Gallery header gradient: `src/css/pages.css` line 112

## Environment Variables

Create a `.env` file if needed (currently not required for basic deployment):

```
VITE_APP_TITLE=Samarth Agarwal - Contemporary Artist
```

## Performance Optimization

- All images are optimized and compressed
- Vite's code splitting reduces initial bundle size
- GLSL shaders are pre-compiled
- Lazy loading for non-critical assets

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android latest

## Credits

- **Original Framework**: [Codrops Atmospheric Depth Gallery](https://tympanus.net/codrops/?p=111409)
- **Built with**: [Three.js](https://threejs.org/)
- **Development Tool**: [Vite](https://vite.dev/)
- **Artist Portfolio for**: Samarth Agarwal

## License

[MIT](LICENSE)
