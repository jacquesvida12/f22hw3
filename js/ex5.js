const pass = 'secret';
let passguess = prompt(`Please enter the password:`)
let count = 0;

while (passguess != pass && ++count < 3){
    passguess = prompt('Please enter your password')
}
if (count == 3) {
    alert(`Your account it locked. You failed to guess ${count} times`);
}else {
    alert(`You guessed correctly after ${count} attempts`);
}