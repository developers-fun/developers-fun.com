const { join, extname, basename } = require('path');
const fs = require('fs');

for (const File of readdirSync(GameImgs)) {
    const name = basename(oldFile, extension);
    if (name.includes("-")) {
        name.replaceAll("-", "")
    }
}