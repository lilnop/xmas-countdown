const dayDisplay  = document.querySelector(".day");
const hoursDisplay = document.querySelector(".hours");
const minsDisplay  = document.querySelector(".mins");
const secsDisplay  = document.querySelector(".secs");
const monthDisplay  = document.querySelector(".months");
const yearDisplay  = document.querySelector(".years");


countdown = () => {
    let currentDate = dayjs();
let xmasDay = dayjs("2022-12-25");;
let finalDay = xmasDay - currentDate;
    // let date = new Date();
    
    let days = Math.floor(finalDay /(24 * 60 * 60 * 1000));
    let hours = Math.floor(finalDay / (60 * 60 *1000));
    let mins = Math.floor(finalDay / (60 * 1000));
    let secs = Math.floor(finalDay / 1000);
    let months = Math.floor(days / 30);
    let years = dayjs().format("YYYY");

    
    dayDisplay .textContent = days;
    hoursDisplay.textContent = hours;
    minsDisplay.textContent = mins;
    secsDisplay.textContent = secs;
    yearDisplay.textContent = years;
    monthDisplay.textContent = months;
}


setInterval(() => {
    countdown();
}, 1000);