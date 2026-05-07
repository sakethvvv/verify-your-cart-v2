const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  { regex: /'#0f172a'/gi, replacement: "'var(--text-color)'" },
  { regex: /'#475569'/gi, replacement: "'var(--text-secondary)'" },
  { regex: /'#64748b'/gi, replacement: "'var(--text-secondary)'" },
  { regex: /'#1e293b'/gi, replacement: "'var(--card-bg)'" },
  { regex: /'#f8fafc'/gi, replacement: "'var(--bg-secondary)'" },
  { regex: /'white'/gi, replacement: "'var(--card-bg)'" },
  { regex: /'#ffffff'/gi, replacement: "'var(--card-bg)'" },
  { regex: /'#e2e8f0'/gi, replacement: "'var(--card-border)'" },
  { regex: /'rgba\(0,\s*0,\s*0,\s*0\.05\)'/gi, replacement: "'var(--card-border)'" },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
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
        console.log(`Cleaned ${file}`);
      }
    }
  }
}
processDirectory(dir);
