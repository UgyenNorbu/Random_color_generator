const body = document.querySelector(".body");
var element = document.getElementById('user-input');

element.addEventListener('focus', function() {
  element.setAttribute('placeholder', '')

})

element.addEventListener('blur', function() {
  element.setAttribute('placeholder', 'Enter hex code here!!!')

})

document.getElementById('submit-btn').onclick = function () {
    var userInput = document.getElementById('user-input').value;
    let strLen = userInput.length

    if(strLen != 6) {
        alert("Enter a valid hex code!");
    }
    else{
        for(let i = 0; i < 6; i++){
            if(!'0123456789abcdef'.includes(userInput[i])){
                alert("Enter a valid hex code!");
            }
        }
        body.style.backgroundColor = '#' + userInput;
    }
}

