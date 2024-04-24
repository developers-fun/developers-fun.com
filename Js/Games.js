var json = `
{
    "games":[
        {
            "name": "1v1.lol"
            ,"img": "/Games/files/1v1.lol/logo.png"
            ,"url": "/Games/1v1.lol.html"
        },
        {
            "name": "2048"
            ,"img": "/Images/Images/2048.png"
            ,"url": "/Games/"
        },
        {
            "name": "amoungus"
            ,"img": "/Images/Images/amongus.jpg"
            ,"url": "/Games/files/amongus/"
        },
        {
            "name": "basketbros"
            ,"img": "/Games/files/basketbros/favicon.png"
            ,"url": "/Games/files/basketbros/"
        },
        {
            "name": "Boxing Random"
            ,"img": "/Games/files/Boxing-Random-main/512x512.jpg"
            ,"url": "/Games/files/Boxing-Random-main/"
        },
        {
            "name": "Boxing Random"
            ,"img": "/Games/files/Boxing-Random-main/512x512.jpg"
            ,"url": "/Games/files/Boxing-Random-main/"
        },
    ]
}
`


var gameObject = JSON.parse(json);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "gameframe";
  document.getElementById("gameid").appendChild(elem1);
  let elem2 = document.createElement("a");
  elem2.href = gameObject.games[i].url;
  elem1.appendChild(elem2);
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].img;
  elem3.alt = gameObject.games[i].name;
  elem2.appendChild(elem3);
  let elem4 = document.createElement("d1");
  elem4.innerHTML = gameObject.games[i].name;
  elem4.className = "Imgtext"
  elem2.appendChild(elem4);
}