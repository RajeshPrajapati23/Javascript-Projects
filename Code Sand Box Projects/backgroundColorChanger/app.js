const bg = document.getElementById("canvas")
const button = document.getElementById("button")

function generatCode() {
    let hash = "#"
    let nubmer = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        hash = hash + nubmer[Math.floor(Math.random() * 16)]
    }
    return hash
}

function bgColorApply() {
    button.addEventListener("click", function () {
        bg.style.backgroundColor = generatCode()
    })
}
bgColorApply()