import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import http from 'http';
import mime from 'mime-types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in dist folder");
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Copy for 404 fallback
fs.writeFileSync(path.join(distDir, '404.html'), indexContent);

// Generate static routes for SEO and to prevent 404 on GitHub Pages
const routes = [
  {
    path: '/',
    localPath: 'index',
    title: 'FeinWebsites',
    description: 'Grow your business with FeinWebsites...',
    url: 'https://feinwebsites.com/'
  },
  {
    path: '/pricing',
    localPath: 'pricing',
    title: 'Pricing | FeinWebsites',
    description: 'Affordable, transparent pricing for fast, efficient, and AI-assisted website development. Find the right plan to grow your business.',
    url: 'https://feinwebsites.com/pricing'
  },
  {
    path: '/contact',
    localPath: 'contact',
    title: 'Contact Us | FeinWebsites',
    description: 'Get in touch with FeinWebsites to discuss your project and learn how our AI-assisted web development can help you succeed.',
    url: 'https://feinwebsites.com/contact'
  }
];

const PORT = 54321;
const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
  // fallback to index.html for SPA routing
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    filePath = indexPath;
  }
  const ext = path.extname(filePath);
  const contentType = mime.lookup(ext) || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

async function prerender() {
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Static server running on port ${PORT}...`);
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Prerender each route
  for (const route of routes) {
    console.log(`Prerendering ${route.path}...`);
    // load the page
    await page.goto(`http://localhost:${PORT}${route.path}`, { waitUntil: 'networkidle0' });
    
    // allow extra time for animations
    await new Promise(r => setTimeout(r, 500));
    
    let content = await page.content();

    // Replace Title
    content = content.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // Replace Meta Description
    content = content.replace(/<meta name="description"[^>]*content="([^"]*)"[^>]*>/i, 
        (match) => match.replace(/content="[^"]*"/, `content="${route.description}"`));
        
    // Replace OG:Title
    content = content.replace(/<meta property="og:title"[^>]*content="([^"]*)"[^>]*>/i, 
        (match) => match.replace(/content="[^"]*"/, `content="${route.title}"`));

    // Replace OG:Description
    content = content.replace(/<meta property="og:description"[^>]*content="([^"]*)"[^>]*>/i, 
        (match) => match.replace(/content="[^"]*"/, `content="${route.description}"`));

    // Replace OG:URL
    content = content.replace(/<meta property="og:url"[^>]*content="([^"]*)"[^>]*>/i, 
        (match) => match.replace(/content="[^"]*"/, `content="${route.url}"`));

    // Replace Twitter:Title
    content = content.replace(/<meta name="twitter:title"[^>]*content="([^"]*)"[^>]*>/i, 
        (match) => match.replace(/content="[^"]*"/, `content="${route.title}"`));

    // Replace Twitter:Description
    content = content.replace(/<meta name="twitter:description"[^>]*content="([^"]*)"[^>]*>/i, 
        (match) => match.replace(/content="[^"]*"/, `content="${route.description}"`));

    fs.writeFileSync(path.join(distDir, `${route.localPath}.html`), content);
    console.log(`Generated ${route.localPath}.html for SEO`);
  }
  
  await browser.close();
  server.close();
  console.log('Postbuild prerendering completed successfully.');
}

prerender().catch(err => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
