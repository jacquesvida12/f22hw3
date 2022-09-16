const a = prompt("Please enter a number 1-100");
if (isNaN(a)){
    console.log(`Sorry, ${a} is not a valid entry`);
}else if(a > 100 || a < 0) {
    console.log(`Sorry, ${a} is not a valid entry`);
}else{
    console.log(`Thank you! You entered ${a}, a valid number`);
}
