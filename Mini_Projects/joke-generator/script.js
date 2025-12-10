const jokeText = document.getElementById("jokeText");
const jokeBtn = document.getElementById("jokeBtn");

function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      const joke = data.value.replace(/Chuck Norris/gi, "Jayraj");
      jokeText.textContent = joke;
    })
    .catch(() => {
      jokeText.textContent = "Something went wrong 😅";
    });
}

// Fetch first joke automatically
getJoke();

// Button event
jokeBtn.addEventListener("click", getJoke);