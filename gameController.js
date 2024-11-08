const fs = require('fs');
const path = require('path');

// Read the template file
const template = fs.readFileSync('game-template.html', 'utf8');

// Read Games.json
const gamesData = JSON.parse(fs.readFileSync('Games.json', 'utf8'));

// Create games directory if it doesn't exist
const gamesDir = path.join(__dirname, 'G');
if (!fs.existsSync(gamesDir)) {
    fs.mkdirSync(gamesDir);
}

// Generate game pages
gamesData.games.forEach(game => {
    if (game.Visible) {
        const fileName = game.path.split('/').pop();
        const filePath = path.join(gamesDir, fileName);
        
        // Replace placeholders in template
        let gameHtml = template
            .replace('Game - Proxy.site', `${game.name} - Proxy.site`)
            .replace('id="game-frame"', `id="game-frame" src="${game.IframePath}"`)
            .replace('id="game-thumbnail" alt="Game Thumbnail"', `id="game-thumbnail" src="${game.image}" alt="Game Thumbnail"`)
            .replace('<h1 class="game-title"></h1>', `<h1 class="game-title">${game.name}</h1>`)
            .replace('<p class="game-creator"></p>', `<p class="game-creator">${game.creator}</p>`);
        fs.writeFileSync(filePath, gameHtml);
        console.log(`Generated page for ${game.name}`);
    }
}); 