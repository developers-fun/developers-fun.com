var LocalGames = `{
    "games":[
    {
        "url": "/Games/1v1.lol.html",
        "image": "/Games/files/1v1.lol/logo.png",
        "title": "1v1.lol",
        "Creator": "JustPlay.LOL"
    },
    {
        "url": "/Games/boxingrandom.html",
        "image": "/Games/files/Boxing-Random-main/512x512.jpg",
        "title": "Boxing Random",
        "Creator": "RHM Interactive"
    },
    {
        "url": "/Games/amongus.html",
        "image": "/Images/Images/amongus.jpg",
        "title": "Among Us",
        "Creator": "Innersloth"
    },
    {
        "url": "/Games/basketbros.html",
        "image": "/Games/files/basketbros/thumb.jpg",
        "title": "Basketball Bros",
        "Creator": "Blue Wizard Digital"
    },
    {
        "url": "/Games/ClickerHeroes.html",
        "image": "/Games/files/Clicker-Heroes-main/clicker-heroes.png",
        "title": "Clicker Heroes",
        "Creator": "Playsaurus"
    },
    {
        "url": "/Games/ColorSwitch.html",
        "image": "/Games/files/Color-Switch-main/download.jpeg",
        "title": "Color switch",
        "Creator": "Fortafy Games"
    },
    {
        "url": "/Games/CookieClicker.html",
        "image": "/Games/files/Cookie-Clicker-main/Favicon.PNG",
        "title": "Cookie clickers",
        "Creator": "Julien 'Orteil' Thiennot"
    },
    {
        "url": "/Games/Coreball.html",
        "image": "/Images/Images/Coreball.png",
        "title": "Coreball",
        "Creator": "Unknown"
    },
    {
        "url": "/Games/Dadish.html",
        "image": "/Games/files/Dadish/favicon.png",
        "title": "Dadish",
        "Creator": "Thomas K. Young"
    },
    {
        "url": "/Games/Dadish3.html",
        "image": "/Games/files/Dadish3/splash.png",
        "title": "Dadish 3",
        "Creator": "Thomas K. Young"
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