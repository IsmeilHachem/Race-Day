// race numbers assigned randomly, up to 1000
let raceNumber = Math.floor(Math.random() * 1000);
// changeable variable indicating runner's registration
let earlyReg = true;
// changeable variable indicating runner's age
let age = Math.random() * 36;

// adults with early registration have a number in the 1000 group
if (age > 18 && earlyReg === true){
    raceNumber += 1000;
}

// check age and regiustration to determine race time
if (age > 18 && earlyReg === true){
    console.log(`Race number: ${raceNumber} will race at 9:30am`);
}
else if(age > 18 && earlyReg !== true){
    console.log(`Race number: ${raceNumber} will race at 11:00am.`);
}
else if(age < 18){
    console.log(`Race number: ${raceNumber} will race at 12:30pm.`);
}
else{
    console.log("See the registration desk.");
}