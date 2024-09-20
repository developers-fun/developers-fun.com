require('dotenv').config();

function message() {

  let name = document.getElementById("Input1").value;
  let message = document.getElementById("Input2").value;

  if (name.trim() === "" || message.trim() === "") {
    alert("Please fill in both fields.");
    return;
  }

  const webhook = process.env.webhook; // Replace with actual webhook URL
  const contents = `A user wanted the game: ${name}\nWith the URL: ${message} <@760521438326554634>`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    content: contents
  };

  request.send(JSON.stringify(params));
}
