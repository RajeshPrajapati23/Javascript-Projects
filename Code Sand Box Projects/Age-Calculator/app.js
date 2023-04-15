
function calcAge() {

    let dob = document.getElementById("dob").value;
    let descAgeIs = document.querySelector(".desc");

    let yearSpan = document.getElementById("years");
    let monthSpan = document.getElementById("months");
    let daySpan = document.getElementById("days");


    let birthTime = new Date(dob);
    let today = new Date();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let birthDate = birthTime.getDate();
    let birthMonth = birthTime.getMonth() + 1;
    let birthYear = birthTime.getFullYear();

    let todayDate = today.getDate();
    let todayMonth = 1 + today.getMonth();
    let todayYear = today.getFullYear();

    if (birthDate > todayDate) {
        todayDate = todayDate + month[todayMonth - 1];
        todayMonth = todayMonth - 1

    }
    if (birthMonth > todayMonth) {
        todayMonth = todayMonth + 12;
        todayYear = todayYear - 1;
    }

    let finalDate = todayDate - birthDate;
    let finalMonth = todayMonth - birthMonth;
    let finalYear = todayYear - birthYear;

    descAgeIs.textContent = `Your Age is :${finalYear}`;

    daySpan.innerText = finalDate;
    monthSpan.innerText = finalMonth;
    yearSpan.innerText = finalYear;

}

