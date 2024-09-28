function message() {
  let name = document.getElementById("Input1").value;
  let message = document.getElementById("Input2").value;

  if (name.trim() === "" || message.trim() === "") {
    alert("Please fill in both fields.");
    return;
  }

  const payload = {
    text: `A user wanted the game: ${name}`,
    Creator: `With the URL: ${message} <@760521438326554634>`
  };

  const request = new XMLHttpRequest();
  request.open("POST", "https://developers-fun-com-api-u0yp.onrender.com/api", true);
  request.setRequestHeader('Content-Type', 'application/json');

  // Handle success or error response
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      alert('Webhook sent successfully!');
    } else {
      alert('Error sending webhook.');
    }
  };

  request.onerror = function () {
    alert('Request failed. Please try again.');
  };

  // Send the payload to the backend
  request.send(JSON.stringify(payload));
}
