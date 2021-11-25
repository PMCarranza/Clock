'use strict';

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio  + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

setRotation(secondHand, secondsRatio);
setRotation(minuteHand, minutesRatio);
setRotation(hourHand, hoursRatio);

}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();

const todaysDate = new Date()

let day = todaysDate.getDay();

const date = todaysDate.getDate();

console.log(`today is ${day}`);
console.log (`the date is ${date}`);

switch(day){
    case 0:
        day = 'SUN';
        console.log(`today is ${day}`);
        break;
    case 1:
        day = 'MON';
        console.log(`today is ${day}`);
        break;
    case 2:
        day = 'TUE';
        console.log(`today is ${day}`);
        break;
    case 3:
        day = 'WED';
        console.log(`today is ${day}`);
        break;
    case 4:
        day = 'THU';
        console.log(`today is ${day}`);
        break;
    case 5:
        day = 'FRI';
        console.log(`today is ${day}`);
        break;
    case 6:
        day = 'SAT';
        console.log(`today is ${day}`);
}