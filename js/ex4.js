const a = prompt("Please enter a number");
const b = prompt("Please enter a second number");

if(isNaN(a) || isNaN(b)){
    console.log("Please refresh and try again with an actual number");
}else{
    console.log(`${a} + ${b} = ${Number(a)+Number(b)}`);
    console.log(`${a} - ${b} = ${Number(a)-Number(b)}`);
    console.log(`${a} * ${b} = ${Number(a)*Number(b)}`);
    console.log(`${a} / ${b} = ${Number(a)/Number(b)}`);
    console.log(`${a} % ${b} = ${Number(a)%Number(b)}`);
}