let input = document.querySelector("#input");
let submitBtn = document.querySelector(".submit");
let img = document.querySelector("#img");
function generateQrCode() {

    if (input.value.length > 0) {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        img.style.display = "block"
    } else {
        img.style.display = "none"
    }
}
submitBtn.addEventListener("click", generateQrCode)

