const fs = require('fs');
const path = require('path');

const distHtml = path.join(__dirname, 'dist', 'index.html');
if (!fs.existsSync(distHtml)) {
  console.error('dist/index.html not found');
  process.exit(1);
}

let html = fs.readFileSync(distHtml, 'utf8');
html = html.replace(/src="assets\/([^"]+)"/g, (match, filename) => {
  const filePath = path.join(__dirname, 'assets', filename);
  if (fs.existsSync(filePath)) {
    let mime = 'image/png';
    if (filename.endsWith('.svg')) mime = 'image/svg+xml';
    else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) mime = 'image/jpeg';
    const b64 = fs.readFileSync(filePath).toString('base64');
    return `src="data:${mime};base64,${b64}"`;
  }
  return match;
});

// Add target="_blank" and rel="noopener noreferrer" to external links so clicking them opens in a new tab
html = html.replace(/<a\s+href="(https?:\/\/[^"]+)"(?![^>]*target=)/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');

fs.writeFileSync(distHtml, html);
console.log('✓ Post-processed dist/index.html');
