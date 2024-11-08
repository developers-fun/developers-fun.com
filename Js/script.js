document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    fetch('Games.json')
        .then(response => response.json())
        .then(data => {
            const game = data.games.find(g => g.name === decodeURIComponent(gameId));
            if (game) {
                initializeGame(game);
            }
        })
        .catch(error => console.error('Error loading game:', error));
});

function initializeGame(game) {
    // Update page title
    document.title = `${game.name} - Your Game Site`;
    
    // Update game frame
    const gameFrame = document.getElementById('game-frame');
    gameFrame.src = game.path;
    
    // Update game info
    document.querySelector('.game-title').textContent = game.name;
    document.querySelector('.game-creator').textContent = `by ${game.creator}`;
    document.getElementById('game-thumbnail').src = game.image;
    
    // Setup fullscreen button
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    fullscreenBtn.addEventListener('click', toggleFullscreen);
}

function toggleFullscreen() {
    const iframe = document.getElementById('game-frame');
    const gameContainer = document.querySelector('.game-frame-wrapper');

    // Try iframe fullscreen first
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    } 
    // Fallback to container fullscreen if iframe fullscreen fails
    else if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
    } else if (gameContainer.webkitRequestFullscreen) {
        gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.mozRequestFullScreen) {
        gameContainer.mozRequestFullScreen();
    } else if (gameContainer.msRequestFullscreen) {
        gameContainer.msRequestFullscreen();
    }
}

// Update fullscreen button icon when fullscreen state changes
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
document.addEventListener('mozfullscreenchange', updateFullscreenButton);
document.addEventListener('MSFullscreenChange', updateFullscreenButton);

function updateFullscreenButton() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const icon = fullscreenBtn.querySelector('i');
    
    if (document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement || 
        document.msFullscreenElement) {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
    } else {
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    }
}
