const body = document.querySelector(".body");

document.getElementById('submit-btn').onclick = function () {
    var userInput = document.getElementById('user-input').value;
    let strLen = userInput.length
    console.log(strLen);

    if(strLen != 6) {
        alert("Enter a valid hex code!");
    }
    else{
        for(let i = 0; i < 6; i++){
            '0123456789abcdef'.includes(userInput[i]);
        }
    }
}