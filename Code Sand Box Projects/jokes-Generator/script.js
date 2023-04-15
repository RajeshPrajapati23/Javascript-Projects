let divJoke = document.getElementById("joke");
let jokeBtn = document.getElementById("jokeBtn");

function generateJoke() {

  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => divJoke.innerText = data.value)
}

generateJoke()

jokeBtn.addEventListener("click", generateJoke)
