let countries = [];
let countriesList = document.querySelector("#country-list");
let input = document.querySelector("#auto-comlete-input");

function fetchCountries() {

    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
            countries = data.map((x) => x.name.common)
            countries.sort();
            // loadData(countries, countriesList)

        })
}

// load took two para and first para for countries stored and second para for dispalay that countries on page
function loadData(country, element) {
    if (country) {
        element.innerHTML = "";
        let innerElement = "";
        country.forEach((item) => {
            innerElement += `<li class= "rajesh">${item}</li>`;
        })
        element.innerHTML = innerElement;

        // click on any country it will print that country in input
        let raj = document.querySelectorAll(".rajesh");
        function clickPrintEvent() {
            return Array.prototype.map.call(raj, function (val) {
                return val.addEventListener("click", function (item) {
                    return input.value = item.currentTarget.innerText
                })
            })
        }

        clickPrintEvent();
    }
}

// it will convert text into lower case of countries ans input and it will match same texts 
function filterData(data, searchText) {
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()))
}

fetchCountries()

//
input.addEventListener("input", function () {
    // filterdData stored match countries and it will assign to courseList 
    const filterdData = filterData(countries, input.value)
    // console.log(filterdData); // it will show match value
    loadData(filterdData, countriesList)
})





