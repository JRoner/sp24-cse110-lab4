function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    return;
}

setInterval(printTime, 1000);