

let url = "https://api.quotable.io/random?maxLength=50"

function generateQuote() {
    try {
        let content = document.querySelector(".content");
        let author = document.querySelector(".author");
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(content.innerHTML = data.content);
                console.log(author.innerHTML = `By ` + data.author);
            })
            .catch()
    } catch (err) {
        alert(err.message);
    }
}
