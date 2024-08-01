var LocalGames = fetch("/Games.json")
var gameObject = JSON.parse(LocalGames);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "gameframe";
  document.getElementById("gameid").appendChild(elem1);
  let elem2 = document.createElement("a");
  elem2.href = gameObject.games[i].path;
  elem1.appendChild(elem2);
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].image;
  elem3.alt = gameObject.games[i].name;
  elem2.appendChild(elem3);
  let elem4 = document.createElement("p");
  elem4.innerHTML = gameObject.games[i].name;
  elem4.className = "Imgtext"
  elem2.appendChild(elem4);
  let elem5 = document.createElement("d3");
  elem5.innerHTML = gameObject.games[i].creator;
  elem5.className = "CreatorText"
  elem2.appendChild(elem5);
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