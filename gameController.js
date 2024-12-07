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

// Function to create proper file name
function createFileName(gamePath) {
    // Remove any leading slashes, 'G/', and hyphens from the entire path
    const cleanPath = gamePath.replace(/^\/?(G\/)?/, '').replace(/[-\s]/g, '');
    
    // If the path doesn't end in .html, add it
    const fileName = cleanPath.endsWith('.html') ? cleanPath : `${cleanPath}.html`;

    console.log(cleanPath)
    
    // Convert to lowercase
    const finalFileName = fileName.toLowerCase();
    
    console.log(`Creating file name for ${gamePath} -> ${finalFileName}`); // Debug log
    
    return finalFileName;
}

// Function to get related games from the same category
function getRelatedGames(currentGame, allGames) {
    try {
        const relatedGames = allGames.filter(game => 
            game.Visible && 
            game.category === currentGame.category && 
            game.name !== currentGame.name
        ).slice(0, 6);

        let relatedGamesHtml = '';
        if (relatedGames.length > 0) {
            let categoryName = currentGame.Category || currentGame.category || 'Similar';
            categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            
            relatedGamesHtml = `
            <div class="related-games">
                <h2>More ${categoryName} Games</h2>
                <div class="games-grid">
                    ${relatedGames.map(game => {
                        // Use the stored file path mapping
                        const fileName = gameFilePaths.get(game.name.replace(/-/g, '')) || "";
                        const cleanPath = game.name.replace(/^\/?(G\/)?/, '').replace(/[-\s]/g, '').toLowerCase();
                        console.log(fileName)
                        return `
                        <a href="/G/${cleanPath}.html" class="game-card">
                            <img src="${game.image}" alt="${game.name}">
                            <div class="game-info">
                                <h3>${game.name}</h3>
                                <p>by ${game.creator}</p>
                            </div>
                        </a>
                        `;
                    }).join('')}
                </div>
            </div>`;
        }
        return relatedGamesHtml;
    } catch (error) {
        console.error(`Error generating related games for ${currentGame.name}:`, error);
        return '';
    }
}

// Generate game pages and store file paths
const gameFilePaths = new Map();

// First pass: Generate files and store paths
gamesData.games.forEach(game => {
    try {
        if (game.Visible) {
            // Remove hyphens from game.name before creating fileName
            const fileName = createFileName(game.name.replace(/-/g, ''));
            const filePath = path.join(gamesDir, fileName);
            
            console.log(`Processing game: ${game.name}`);
            // Remove hyphens from game.path when storing
            const cleanPath = game.path.replace(/-/g, '');
            console.log(`Original path: ${cleanPath}`);
            console.log(`Generated fileName: ${fileName}`);
            console.log(`Full filePath: ${filePath}`);
            
            // Store the mapping using clean path
            gameFilePaths.set(cleanPath, fileName);
            
            // Get related games HTML
            const relatedGamesSection = getRelatedGames(game, gamesData.games);
            
            // Replace placeholders in template
            let gameHtml = template
                .replace('Game - use-fun', `${game.name} - use-fun`)
                .replace('id="game-frame"', `id="game-frame" src="${game.IframePath}"`)
                .replace('id="game-thumbnail" alt="Game Thumbnail"', `id="game-thumbnail" src="${game.image}" alt="${game.name}"`)
                .replace('<h1 class="game-title"></h1>', `<h1 class="game-title">${game.name}</h1>`)
                .replace('<p class="game-creator"></p>', `<p class="game-creator">${game.creator}</p>`);

            // Add related games section before the closing body tag
            gameHtml = gameHtml.replace('</body>', `${relatedGamesSection}</body>`);

            fs.writeFileSync(filePath, gameHtml);
            console.log(`Generated page for ${game.name} at ${filePath}`);
        }
    } catch (error) {
        console.error(`Error generating page for ${game.name}:`, error);
    }
});

// Update index.html with correct paths
try {
    const indexPath = path.join(__dirname, 'index.html');
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    gameFilePaths.forEach((newPath, oldPath) => {
        // Simplified regex since we're already handling clean paths
        const oldPathRegex = new RegExp(`href=["']/G/${oldPath}["']`, 'gi');
        indexContent = indexContent.replace(oldPathRegex, `href="/G/${newPath}"`);
    });
    
    fs.writeFileSync(indexPath, indexContent);
    console.log('Updated index.html with correct paths');
} catch (error) {
    console.error('Error updating index.html:', error);
}

console.log('Game page generation complete!');