


const dayDisplay  = document.querySelector(".day");
const hoursDisplay = document.querySelector(".hours");
const minsDisplay  = document.querySelector(".mins");
const secsDisplay  = document.querySelector(".secs");
const monthDisplay  = document.querySelector(".months");
const yearDisplay  = document.querySelector(".years");


countdown = () => {
    
    let date = new Date();
    let currentDate = new Date().getTime();
    
    let xmasDay = new Date("25 Dec 2022");
    
    let finalDay = xmasDay - currentDate;

    
    
    
    
    
    
    let days = Math.floor(finalDay /(24 * 60 * 60 * 1000));
    let hours = Math.floor(finalDay / (60 * 60 *1000));
    let mins = Math.floor(finalDay / (60 * 1000));
    let secs = Math.floor(finalDay / 1000);
    let months = Math.floor(days / 30);
    let years = date.getFullYear();

    
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