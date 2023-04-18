let hr = 0;
let min = 0;
let sec = 0;
let counter = 0;

let timer = false;

function start() {
    if (timer == false) {
        timer = true;
        stopWatch()
    }

}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    counter = 0;
    document.getElementById("Hr").innerHTML = hr
    document.getElementById("Min").innerHTML = min
    document.getElementById("Sec").innerHTML = sec
    document.getElementById("count").innerHTML = counter
}

function stopWatch() {
    if (timer == true) {
        counter = counter + 1;

        if (counter == 100) {
            sec += 1;
            counter = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
        }
        document.getElementById("Hr").innerHTML = hr
        document.getElementById("Min").innerHTML = min
        document.getElementById("Sec").innerHTML = sec
        document.getElementById("count").innerHTML = counter
        setTimeout("stopWatch()", 10)
    }
}

