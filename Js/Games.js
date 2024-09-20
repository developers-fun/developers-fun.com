fetch('/Games.json')
.then(response => response.json())
.then(gameObject => {
  if (document.getElementById("gameid")) {
    for (i in gameObject.games) {
        if (gameObject.games[i].Visible && document.getElementById("gameid")) {
            let elem1 = document.createElement("div");
            elem1.className = "gameimg";
            document.getElementById("gameid").appendChild(elem1);
            let elem2 = document.createElement("a");
            elem2.href = gameObject.games[i].path;
            elem1.appendChild(elem2);
            let elem3 = document.createElement("img");
            elem3.src = gameObject.games[i].image;
            elem3.alt = gameObject.games[i].name;
            elem3.className = "GameImgs";
            elem2.appendChild(elem3);
        } else {
            console.log('The game: ', gameObject.games[i].name, 'hasnt been loaded due to it not having needed bool')
        }
        if (gameObject.games[i].Hot) {
            // Create anchor element for the hot game link
            let elem1 = document.createElement("a");
            elem1.href = gameObject.games[i].path;
        
            // Create the container div for the hot game
            let elem2 = document.createElement("div");
            elem2.className = "SmallBox";
            elem1.appendChild(elem2); // Append div to the anchor
        
            // Create and append the image element
            let elem3 = document.createElement("img");
            elem3.src = gameObject.games[i].image;
            elem3.className = "Box-Image";
            elem2.appendChild(elem3); // Append image to the div
        
            // Create the text container div
            let elem4 = document.createElement("div");
            elem4.className = "text-container";
            elem2.appendChild(elem4); // Append text container to the div
        
            // Create and append the game name element
            let elem5 = document.createElement("d2");
            elem5.className = "GameName";
            elem5.innerHTML = gameObject.games[i].name;
            elem4.appendChild(elem5); // Append game name to the text container
        
            // Create and append the author name element
            let elem6 = document.createElement("d3");
            elem6.className = "AuthorName";
            elem6.innerHTML = gameObject.games[i].creator;
            elem4.appendChild(elem6); // Append creator name to the text container
        
            // Finally, append the anchor element to the "Boxes" container
            document.getElementById("Boxes").appendChild(elem1);
        
            console.log(gameObject.games[i].name);
        }
  }
    
  const gamesContainer = document.getElementById("gameid");
  const searchBar = document.getElementById("game-search");
  searchBar.addEventListener('input', (e) => {
    const query = searchBar.value.trim().toLowerCase();
    for (let game of gamesContainer.children) {
      if (game instanceof Element) {
        if (query) {
          const gameName = game.querySelector('p').innerText.trim().toLowerCase();
          const gameCreate = game.querySelector('d3').innerText.trim().toLowerCase();
          if (gameName.includes(query) || gameCreate.includes(query)) {
            game.removeAttribute('hidden');
          } else {
            game.setAttribute('hidden', '');
          }
        } else {
          game.removeAttribute('hidden');
        }
      }
    }
  });
  }
})