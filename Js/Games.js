var LocalGames = `{
    "games": [
      {
        "name": "1v1.lol",
        "creator": "JustPlay.LOL",
        "path": "Games/1v1.lol.html",
        "image": "Images/Images/1v1lol.jpg"
      },
      {
        "name": "Boxing Random",
        "creator": "RHM Interactive",
        "path": "Games/boxingrandom.html",
        "image": "Images/Images/BoxingRandom.jfif"
      },
      {
        "name": "Among Us",
        "creator": "InnerSloth",
        "path": "Games/amongus.html",
        "image": "Images/Images/amongus.jpg"
      },
      {
        "name": "Basketball Bros",
        "creator": "Mad Puffers",
        "path": "Games/basketbros.html",
        "image": "Images/Images/basketballstars.jpg"
      },
      {
        "name": "Clicker Heroes",
        "creator": "Playsaurus",
        "path": "Games/ClickerHeroes.html",
        "image": "Images/Images/clicker-heroes.png"
      },
      {
        "name": "Color switch",
        "creator": "Fortafy Games",
        "path": "Games/ColorSwitch.html",
        "image": "Images/Images/colorswitch.jpeg"
      },
      {
        "name": "Cookie clickers",
        "creator": "RedBit Games",
        "path": "Games/CookieClicker.html",
        "image": "Images/Images/CookieClicker.png"
      },
      {
        "name": "Coreball",
        "creator": "Gamedistribution.com",
        "path": "Games/Coreball.html",
        "image": "Images/Images/Coreball.png"
      },
      {
        "name": "Dadish",
        "creator": "Thomas K. Young",
        "path": "Games/Dadish.html",
        "image": "Images/Images/Dadish.png"
      },
      {
        "name": "Dadish 3",
        "creator": "Thomas K. Young",
        "path": "Games/Dadish3.html",
        "image": "Images/Images/Dadish3.png"
      },
      {
        "name": "Doodle Jump",
        "creator": "Lima Sky",
        "path": "Games/doodlejump.html",
        "image": "Images/Images/Doodlejump.png"
      },
      {
        "name": "Drift boss",
        "creator": "MarketJS",
        "path": "Games/driftboss.html",
        "image": "Images/Images/drift-boss.png"
      },
      {
        "name": "Drive mad",
        "creator": "Fancade",
        "path": "Games/Drive-mad.html",
        "image": "Images/Images/DriveMad.jpg"
      },
      {
        "name": "Fruit Ninja",
        "creator": "Halfbrick Studios",
        "path": "Games/FruitNinja.html",
        "image": "Images/Images/Fruit.jfif"
      },
      {
        "name": "Hextris",
        "creator": "Hextris",
        "path": "Games/hextris.html",
        "image": "Images/Images/hextris.png"
      },
      {
        "name": "Jetpack Joyride",
        "creator": "Halfbrick Studios",
        "path": "Games/Jetpackjoyride.html",
        "image": "Images/Images/Jetpack.png"
      },
      {
        "name": "L2F",
        "creator": "MarketJS",
        "path": "Games/L2f.html",
        "image": "Images/Images/L2F.jpeg"
      },
      {
        "name": "L2f2",
        "creator": "MarketJS",
        "path": "Games/L2f2.html",
        "image": "Images/Images/L2F2.jpeg"
      },
      {
        "name": "L2F3",
        "creator": "MarketJS",
        "path": "Games/L2f3.html",
        "image": "Images/Images/L2F3.jpeg"
      },
      {
        "name": "Minecraft",
        "creator": "Mojang Studios",
        "path": "Games/Minecraft.html",
        "image": "Images/Images/minecraft.png"
      },
      {
        "name": "MotoX3M",
        "creator": "Mad Puffers",
        "path": "Games/MotoX3m.html",
        "image": "Images/Images/moto-x3m.jpg"
      },
      {
        "name": "Slope",
        "creator": "Y8",
        "path": "Games/Slope.html",
        "image": "Images/Images/Slope.jfif"
      },
      {
        "name": "Soccer Random",
        "creator": "RHM Interactive",
        "path": "Games/SoccerRandom.html",
        "image": "Images/Images/SoccerRandom.jfif"
      },
      {
        "name": "Table Tennis World Tour",
        "creator": "Yakuto",
        "path": "Games/TableTennisWorldTour.html",
        "image": "Images/Images/TableTennisWorldTour.jfif"
      }
    ]
  }`;
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
  elem2.appendChild(elem4);
  let elem5 = document.createElement("d3");
  elem5.innerHTML = gameObject.games[i].creator;
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
        if (gameName.includes(query)) {
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