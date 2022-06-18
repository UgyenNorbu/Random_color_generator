// Listen for Click

const button = document.querySelector('.btn');
const body = document.querySelector('.body');
const hex = document.querySelector('.hex');

// Generate Hexcode

var characters = 'abcdef0123456789';

function genCode() {
    var outCode = "#";
    for(var i = 0; i < 6; i++){
        let count = Math.floor(Math.random()*16);
        let val = characters.charAt(count);
        console.log(count)
        console.log(val)
        outCode = outCode + val;
        console.log(outCode);
    }
    return outCode;
}
// Assign the Hexcode to the background color of the body div

button.addEventListener('click', e => {
    let colorCode = genCode();
    body.style.backgroundColor = colorCode;
    hex.innerText = colorCode;
});