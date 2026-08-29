const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== 'dist' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md') || file.endsWith('.yml') || file.endsWith('.env.example') || file.endsWith('.env')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const files = walkSync(__dirname);
let totalReplaced = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Replacements
  newContent = newContent.replace(/Meridian Courier & Logistics/g, 'RK Courier Services');
  newContent = newContent.replace(/Meridian Courier/g, 'RK Courier Services');
  
  // Replace standalone "Meridian" but avoid @meridian, meridian-logistics, admin@meridian.com, etc.
  // We use a regex that looks for Meridian not preceded by @, -, or immediately followed by -, or inside an email.
  newContent = newContent.replace(/(?<![@a-z-])Meridian(?![a-z0-9-@])/g, 'RK Courier Services');
  
  // Also handle lowercase 'meridian' in emails if we want, but let's just do the admin email
  newContent = newContent.replace(/admin@meridian\.com/g, 'admin@rkcourier.com');
  newContent = newContent.replace(/support@meridian\.com/g, 'support@rkcourier.com');
  newContent = newContent.replace(/sales@meridian\.com/g, 'sales@rkcourier.com');
  newContent = newContent.replace(/no-reply@meridian\.com/g, 'no-reply@rkcourier.com');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated: ${file}`);
    totalReplaced++;
  }
}

console.log(`Replaced text in ${totalReplaced} files.`);
