let string = "";
let input = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.innerHTML == '=') {
            try {
                string = eval(string)
                input.value = string
            } catch (error) {
                alert("Invalid")
            }
        } else if (event.target.innerHTML == "AC") {
            string = ""
            input.value = string
        }
        else if (event.target.innerHTML == "DEL") {
            string = string.slice(0, -1);
            input.value = string
        }
        else {
            string = string + event.target.innerHTML;
            input.value = string
        }

    });
});


