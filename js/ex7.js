var hour = prompt("Please enter the current hour (0-23)");
var min = prompt ("Please enter the current minute(0-59)");
var sec = prompt("Please enter the current second(0-59)");

const a = 23;
const b = 59;
const c = 0;

if (hour > a || hour < 0){
    console.log("Please enter the right hour");}
else if(min > b || min < 0){
    console.log("Please enter the correct minute");
}else if(sec > b || sec < 0){
    console.log("Please enter the correct seconds");
}
else if (hour == a && min == b && sec == b){
    console.log(`Time input: ${hour}h${min}m${sec}`);
    console.log("One second later: 0h0m0s");
}else if(min == b && sec == b){
    console.log(`Time input: ${hour}h${min}m${sec}`);
    min = 0;
    sec = 0;
    hour++;
    console.log(`One Second Later: ${hour}h${min}m${sec}`);
    
}
else if(sec == b){
    console.log(`Time input: ${hour}h${min}m${sec}`);
    sec = 0;
    min++;
    console.log(`One Second Later: ${hour}h${min}m${sec}`);
}