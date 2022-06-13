// Listen for Click

const button = document.querySelector('.btn');
const body = document.querySelector('.body');
const hex = document.querySelector('.hex');

// Generate Hexcode

var characters = 'abcdef0123456789';

function genCode(lenCode) {
    var val = "";
    var outCode = "#";
    for(var i = 0; i < lenCode; i++){
        let count = Math.floor(Math.random()*16);
        val = characters.charAt(count);
        //console.log(count)
        //console.log(val)
        outCode = outCode + val;
    }
    return outCode;
}
// Assign the Hexcode to the background color of the body div

button.addEventListener('click', e => {
    body.style.backgroundColor = genCode(6);
    hex.innerText = genCode(6);
});