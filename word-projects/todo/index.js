let inputText = document.querySelector(".input");
let containerDiv = document.querySelector(".container");
let addButton = document.querySelector(".addButton");

addButton.addEventListener("click", () => {
  if (inputText.value.trim()) {
    let divContainer = document.createElement("div")
    divContainer.className = "text-btn-continer"

    divContainer.innerHTML =
      `<span class= "spanTodo">${inputText.value}</span>
     <button class= "deleteBtn btn">Delete</button>
     <button class= "copyBtn btn">Copy</button>
     <button class= "editBtn btn">Edit</button>
   `

    containerDiv.appendChild(divContainer)
    inputText.value = ""

  } else {
    inputText.style.border = "3px solid red"
    setTimeout(() => {
      inputText.style.border = "none"
    }, 1000)
  }
})

containerDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove()
  }
  if (event.target.classList.contains("copyBtn")) {
    let copyText = event.target.parentElement.querySelector(".spanTodo").textContent
    navigator.clipboard.writeText(copyText)
  }
  if (event.target.classList.contains("editBtn")) {
    let editText = event.target.parentElement.querySelector(".spanTodo").innerText
    inputText.value = editText
    event.target.parentElement.remove()
  }

})

