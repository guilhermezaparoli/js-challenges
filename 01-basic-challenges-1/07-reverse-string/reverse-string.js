// function reverseString(string) {
//     let newString = "";
//     for(let i = string.length - 1; i >= 0; i--){
//         newString += string[i]
//     }

//     return newString
// }



function reverseString(string) {
    let newString = string.split("").reverse()
    
    return newString.join("")
 }

module.exports = reverseString;
