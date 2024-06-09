var LocalGames = `{
  "games": [
    {
      "name": "1v1.lol",
      "creator": "JustPlay.LOL",
      "path": "files/1v1.lol.html",
      "image": "Images/1v1lol.jpg"
    },
    {
      "name": "Boxing Random",
      "creator": "RHM Interactive",
      "path": "files/boxingrandom.html",
      "image": "Images/boxingrandom.jpg"
    },
    {
      "name": "Among Us",
      "creator": "InnerSloth",
      "path": "files/amongus.html",
      "image": "Images/amongus.jpg"
    },
    {
      "name": "Basketball Bros",
      "creator": "Mad Puffers",
      "path": "files/basketbros.html"
    },
    {
      "name": "Clicker Heroes",
      "creator": "Playsaurus",
      "path": "files/ClickerHeroes.html",
      "image": "Images/clicker-heroes.png"
    },
    {
      "name": "Color switch",
      "creator": "Fortafy Games",
      "path": "files/ColorSwitch.html",
      "image": "Images/colorswitch.jpeg"
    },
    {
      "name": "Cookie clickers",
      "creator": "RedBit Games",
      "path": "files/CookieClicker.html",
      "image": "Images/CookieClicker.png"
    },
    {
      "name": "Coreball",
      "creator": "Gamedistribution.com",
      "path": "files/Coreball.html",
      "image": "Images/Coreball.png"
    },
    {
      "name": "Dadish",
      "creator": "Thomas K. Young",
      "path": "files/Dadish.html",
      "image": "Images/Dadish.png"
    },
    {
      "name": "Dadish 3",
      "creator": "Thomas K. Young",
      "path": "files/Dadish3.html",
      "image": "Images/Dadish3.png"
    },
    {
      "name": "Doodle Jump",
      "creator": "Lima Sky",
      "path": "files/doodlejump.html",
      "image": "Images/Doodlejump.png"
    },
    {
      "name": "Drift boss",
      "creator": "MarketJS",
      "path": "files/driftboss.html",
      "image": "Images/drift-boss.png"
    },
    {
      "name": "Drive mad",
      "creator": "Fancade",
      "path": "files/Drive-mad.html",
      "image": "Images/DriveMad.jpg"
    },
    {
      "name": "Fruit Ninja",
      "creator": "Halfbrick Studios",
      "path": "files/FruitNinja.html",
      "image": "Images/Fruit.jiff"
    },
    {
      "name": "Hextris",
      "creator": "Hextris",
      "path": "files/hextris.html",
      "image": "Images/hextris.png"
    },
    {
      "name": "Jetpack Joyride",
      "creator": "Halfbrick Studios",
      "path": "files/Jetpackjoyride.html",
      "image": "Images/Jetpack.png"
    },
    {
      "name": "L2F",
      "creator": "MarketJS",
      "path": "files/L2f.html",
      "image": "Images/L2F.jpeg"
    },
    {
      "name": "L2f2",
      "creator": "MarketJS",
      "path": "files/L2f2.html",
      "image": "Images/L2F2.jpeg"
    },
    {
      "name": "L2F3",
      "creator": "MarketJS",
      "path": "files/L2f3.html",
      "image": "Images/L2F3.jpeg"
    },
    {
      "name": "Minecraft",
      "creator": "Mojang Studios",
      "path": "files/Minecraft.html",
      "image": "Images/minecraft.png"
    },
    {
      "name": "MotoX3M",
      "creator": "Mad Puffers",
      "path": "files/MotoX3m.html",
      "image": "Images/moto-x3m.png"
    },
    {
      "name": "MotoX3M Pool",
      "creator": "Mad Puffers",
      "path": "files/MotoX3mpool.html"
    },
    {
      "name": "Slope",
      "creator": "Y8",
      "path": "files/Slope.html",
      "image": "Images/Slope.jiff"
    },
    {
      "name": "Soccer Random",
      "creator": "RHM Interactive",
      "path": "files/SoccerRandom.html",
      "image": "Images/SoccerRandom.jiff"
    },
    {
      "name": "Table Tennis World Tour",
      "creator": "Yakuto",
      "path": "files/TableTennisWorldTour.html",
      "image": "Images/TableTennisWorldTour.jiff"
    }
  ]
}`;
var gameObject = JSON.parse(LocalGames);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "gameframe";
  document.getElementById("gameid").appendChild(elem1);
  let elem2 = document.createElement("a");
  elem2.href = gameObject.games[i].url;
  elem1.appendChild(elem2);
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].image;
  elem3.alt = gameObject.games[i].title;
  elem2.appendChild(elem3);
  let elem4 = document.createElement("p");
  elem4.innerHTML = gameObject.games[i].title;
  elem2.appendChild(elem4);
  let elem5 = document.createElement("d3");
  elem5.innerHTML = gameObject.games[i].Creator;
  elem2.appendChild(elem5);
}