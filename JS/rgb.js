// Listen for Click

const button = document.querySelector('.btn');
const body = document.querySelector('.body');
const hex = document.querySelector('.hex');

// Generate RGB code

function genCode() {
    var r_code = Math.floor(Math.random()*256);
    var g_code = Math.floor(Math.random()*256);
    var b_code = Math.floor(Math.random()*256);
    var outCode = "rgb(" + r_code + ", " + g_code + ", " + b_code + ")";
    
    return outCode;
}

// Assign the Hexcode to the background color of the body div

button.addEventListener('click', e => {
    body.style.backgroundColor = genCode();
    hex.innerText = genCode();
});