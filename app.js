var characters = 'abcdef0123456789'
var val = ""
var outCode = ""

function genCode(lenCode) {
    for(var i = 0; i < lenCode; i++){
        let count = Math.floor(Math.random()*16)
        val = characters.charAt(count)
        //console.log(count)
        //console.log(val)
        outCode = outCode + val
    }
    return outCode
}

console.log(genCode(6))

// Listen for Click
// Generate Hexcode
// Assign the Hexcode to the background color of the body div