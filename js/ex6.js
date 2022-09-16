const a = prompt("Please enter a number for the times table");
for (i=0; i<11; i++){
    console.log(`${a} * ${i} = ${Number(a)*Number(i)}`);
}