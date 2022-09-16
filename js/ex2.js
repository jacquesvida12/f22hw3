const n = prompt("Please enter your name");
const g = prompt("Please enter the number of units you have taken");

if(isNaN(g)){
    console.log("The number you entered is not a number, please try again");
} else if (g >= 0 && g <= 30){
    console.log(`Hello ${n}`);
    console.log(`Your grade standing is Freshman`);
}else if (g > 30 && g <= 60){
    console.log(`Hello ${n}`);
    console.log(`Your grade standing is Sophomore`);
}else if (g > 60 && g <= 90){
    console.log(`Hello ${n}`);
    console.log(`Your grade standing is Junior`);
}else if (g > 90 && g <= 120){
    console.log(`Hello ${n}`);
    console.log(`Your grade standing is Senior`);
}