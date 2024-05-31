var LocalGames = `{
    "games":[
            {
                "url": "/Games/1v1.lol.html",
                "image": "/Games/files/1v1.lol/logo.png",
                "title": "1v1.lol"
            },
            {
                "url": "/Games/boxingrandom.html",
                "image": "/Games/files/Boxing-Random-main/512x512.jpg",
                "title": "Boxing Random"
            },
            {
                "url": "/Games/amongus.html",
                "image": "/Images/Images/amongus.jpg",
                "title": "Among Us"
            },
            {
                "url": "/Games/basketbros.html",
                "image": "/Games/files/basketbros/thumb.jpg",
                "title": "Basketball Bros"
            },
            {
                "url": "/Games/ClickerHeroes.html",
                "image": "/Games/files/Clicker-Heroes-main/clicker-heroes.png",
                "title": "Clicker Heroes"
            },
            {
                "url": "/Games/ColorSwitch.html",
                "image": "/Games/files/Color-Switch-main/download.jpeg",
                "title": "Color switch"
            },
            {
                "url": "/Games/CookieClicker.html",
                "image": "/Games/files/Cookie-Clicker-main/Favicon.PNG",
                "title": "Cookie clickers"
            },
            {
                "url": "/Games/Coreball.html",
                "image": "/Images/Images/Coreball.png",
                "title": "Coreball"
            },
            {
                "url": "/Games/Dadish.html",
                "image": "/Games/files/Dadish/favicon.png",
                "title": "Dadish"
            },
            {
                "url": "/Games/Dadish3.html",
                "image": "/Games/files/Dadish3/splash.png",
                "title": "Dadish 3"
            },
            {
                "url": "/Games/doodlejump.html",
                "image": "/Games/files/Doodle-Jump-main/Favicon.png",
                "title": "Doodle Jump"
            },
            {
                "url": "/Games/driftboss.html",
                "image": "/Games/files/Drift-Boss-main/drift-boss.png",
                "title": "Drift boss"
            },
            {
                "url": "/Games/Drive-mad.html",
                "image": "/Games/files/drive-mad-main/webapp/cover.jpg",
                "title": "Drive mad"
            },
            {
                "url": "/Games/FruitNinja.html",
                "image": "/Images/Images/Fruit.jfif",
                "title": "Fruit Ninja"
            },
            {
                "url": "/Games/hextris.html",
                "image": "/Games/files/Hextris-main/favicon.ico",
                "title": "Hextris"
            },
            {
                "url": "/Games/Jetpackjoyride.html",
                "image": "/Images/Images/Jetpack.png",
                "title": "Jetpack Joyride"
            },
            {
                "url": "/Games/L2f.html",
                "image": "/Games/files/Learn-2-Fly-main/OIP (2).jpeg",
                "title": "L2F"
            },
            {
                "url": "/Games/L2f2.html",
                "image": "/Games/files/Learn-2-fly-2-main/1024x1024bb.jpeg",
                "title": "L2f2"
            },
            {
                "url": "/Games/L2f3.html",
                "image": "/Games/files/Learn-2-Fly-3-main/maxresdefault.jpeg",
                "title": "L2F3"
            },
            {
                "url": "/Games/Minecraft.html",
                "image": "/Games/files/minecraft/splash.png",
                "title": "Minecraft"
            },
            {
                "url": "/Games/MotoX3m.html",
                "image": "/Games/files/MotoX3M-main/moto-x3m.jpg",
                "title": "MotoX3M"
            },
            {
                "url": "/Games/Motox3mpool.html",
                "image": "/Games/files/motox3m-pool/splash.jpg",
                "title": "MotoX3M Pool"
            },
            {
                "url": "/Games/Slope.html",
                "image": "/Images/Images/Slope.jfif",
                "title": "Slope"
            },
            {
                "url": "/Games/SoccerRandom.html",
                "image": "/Images/Images/SoccerRandom.jfif",
                "title": "Soccer Random"
            },
            {
                "url": "/Games/TableTennisWorldTour.html",
                "image": "/Images/Images/TableTennisWorldTour.jfif",
                "title": "Table Tennis World Tour"
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
}