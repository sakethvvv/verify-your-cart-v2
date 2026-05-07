const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replacements = [
  { regex: /background:\s*'white'/g, replacement: "background: 'var(--card-bg)'" },
  { regex: /background:\s*'(#ffffff|#fff)'/gi, replacement: "background: 'var(--card-bg)'" },
  { regex: /color:\s*'#0f172a'/g, replacement: "color: 'var(--text-color)'" },
  { regex: /color:\s*'#334155'/g, replacement: "color: 'var(--text-color)'" },
  { regex: /background:\s*'#f8fafc'/g, replacement: "background: 'var(--bg-secondary)'" },
  { regex: /background:\s*'#f1f5f9'/g, replacement: "background: 'var(--bg-secondary)'" },
  { regex: /background-color:\s*'(#ffffff|white)'/g, replacement: "backgroundColor: 'var(--card-bg)'" }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Done!');
