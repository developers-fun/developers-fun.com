fetch('/Games.json')
.then(response => response.json())
.then(gameObject => {
    // Handle Hot Games section
    const hotGamesContainer = document.getElementById('Boxes');
    if (hotGamesContainer) {
        const hotGames = gameObject.games.filter(game => 
            game.Visible && game.Hot
        );
        
        hotGames.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            const gameLink = document.createElement('a');
            gameLink.href = game.path;
            
            const gameImage = document.createElement('img');
            gameImage.src = game.image;
            gameImage.alt = game.name;
            
            gameLink.appendChild(gameImage);
            gameCard.appendChild(gameLink);
            
            hotGamesContainer.appendChild(gameCard);
        });
    }

    // Handle category sections
    const categories = ['sports', 'action', 'puzzle', 'arcade', 'strategy', 'racing'];
    
    categories.forEach(category => {
        const categoryGames = gameObject.games.filter(game => 
            game.Visible && game.category === category
        );

        const categorySection = document.getElementById(category);
        if (categorySection && categoryGames.length > 0) {
            const gameRow = categorySection.querySelector('.game-row');
            
            categoryGames.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                
                const gameLink = document.createElement('a');
                gameLink.href = game.path;
                
                const gameImage = document.createElement('img');
                gameImage.src = game.image;
                gameImage.alt = game.name;
                
                gameLink.appendChild(gameImage);
                gameCard.appendChild(gameLink);
                
                gameRow.appendChild(gameCard);
            });
        }
    });
});