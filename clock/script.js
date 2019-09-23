function getTime() {
    let request = new XMLHttpRequest();

    request.open("GET", "http://worldclockapi.com/api/json/utc/now");

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const resp = JSON.parse(this.responseText);
            const timeText = resp.currentDateTime;
            console.log(timeText);
            changeUtc(timeText);
        }
    };
    request.send();
}

getTime();
setInterval(getTime, 60 * 1000);

let clock = {
    utc: new Date(),
    time: "",
    date: "",
    timezone: "Europe/Moscow",
    format: 12
};

function changeUtc(timeText) {
    console.log("utc");
    clock.utc = new Date(timeText);
    setClock();
    updateHtmlClock();
}

function setClock() {
    console.log("set");
    let date = clock.utc;
    let tztime = date.toLocaleString("en", {timeZone: clock.timezone});
    let tzdate = new Date(tztime);
    let hours = tzdate.getHours();
    let am = '';
    if (clock.format === 12) {
        am = " AM";
        if (hours > 12){
            hours -= 12
        }
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    let min = tzdate.getMinutes();
    if (min < 10) {
        min = '0' + min
    }
    clock.time = hours + ":" + min + am;
    clock.date = tzdate.getDate() + " " + tzdate.toLocaleString('en', {month: 'long'}) + " " + tzdate.getFullYear();

}

function changeTimezone() {
    clock.timezone = document.getElementById("timezone").value;
    console.log("timezone", clock.timezone);
    setClock();
    updateHtmlClock();
}

function changeFormat() {
    if (document.getElementById("format12").checked === true) {
        clock.format = 12
    } else {
        clock.format = 24
    }
    console.log("timezone", clock.timezone);
    setClock();
    updateHtmlClock();
}

function updateHtmlClock() {
    console.log("update");
    document.getElementById("time").innerHTML = clock.time;
    document.getElementById("date").innerHTML = clock.date;
}
