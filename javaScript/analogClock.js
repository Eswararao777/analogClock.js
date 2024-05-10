let hrHand = document.getElementById("hour-hand");
let minHand = document.getElementById("minute-hand");
let secHand = document.getElementById("second-hand");

function clockTick(){
    const date = new Date();
    let sec = date.getSeconds()/60;
    let min = (sec + date.getMinutes())/60;
    let hr = (min + date.getHours())/12;

    rotateClockHand(secHand, sec);
    rotateClockHand(minHand, min);
    rotateClockHand(hrHand, hr);
}

function rotateClockHand(element,rotation){
   element.style.setProperty('--rotate',  rotation * 360);
}
setInterval(clockTick,1000);