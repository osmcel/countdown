const newYear = '1 Jan 2023';
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("min");
const secEl = document.getElementById("sec");

function countdown() {
    const newYearsDate = new Date(newYear);
    const currtentDate = new Date();


    const totalseconds = (newYearsDate - currtentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;


    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
countdown();