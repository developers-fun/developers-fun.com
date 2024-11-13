const fs = require('fs');
const path = require('path');
const gamesDir = path.join(__dirname, 'G');
if (!fs.existsSync(gamesDir)) {
    fs.mkdirSync(gamesDir);
}

// Delete files with spaces in the G directory
const files = fs.readdirSync(gamesDir);
files.forEach(file => {
    if (file.includes(' ')) {
        const filePath = path.join(gamesDir, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted file with spaces: ${file}`);
    }
});
