import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
    path: 'pricing',
    title: 'Pricing | FeinWebsites',
    description: 'Affordable, transparent pricing for fast, efficient, and AI-assisted website development. Find the right plan to grow your business.',
    url: 'https://feinwebsites.com/pricing'
  },
  {
    path: 'contact',
    title: 'Contact Us | FeinWebsites',
    description: 'Get in touch with FeinWebsites to discuss your project and learn how our AI-assisted web development can help you succeed.',
    url: 'https://feinwebsites.com/contact'
  }
];

routes.forEach(route => {
  let content = indexContent;

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

  // Write to dist/route.html
  // GitHub pages clean URLs will serve route.html for /route requests with a 200 HTTP status code.
  fs.writeFileSync(path.join(distDir, `${route.path}.html`), content);
  console.log(`Generated ${route.path}.html for SEO`);
});

console.log('Postbuild completed successfully.');
