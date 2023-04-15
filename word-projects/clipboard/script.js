let submitBtn = document.querySelector(".submit");
let text = document.getElementById("text-area");

function clipboard() {
    submitBtn.addEventListener("click", () => {
        if (text.value == "") {
            alert("Please Enter Text")
        } else {
            text.value
            text.select()
            document.execCommand("copy")
            alert('copied to clipboard')
        }
    })
}
clipboard()