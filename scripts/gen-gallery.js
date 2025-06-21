const fs = require('fs');
const path = require('path');

const folders = ['img', 'media']; // Ajoute d'autres dossiers ici
const galleryIndex = {};

folders.forEach(folder => {
  const dirPath = path.join(__dirname, '..', folder);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath)
      .filter(file => /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(file));
    galleryIndex[folder] = files;
  }
});

fs.writeFileSync(
  path.join(__dirname, '..', 'gallery-index.json'),
  JSON.stringify(galleryIndex, null, 2)
);

console.log('✅ gallery-index.json generated');
