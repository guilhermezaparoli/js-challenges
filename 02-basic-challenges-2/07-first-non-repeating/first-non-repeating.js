// function findFirstNonRepeatingCharacter(str) {

//     for(let i = 0; i < str.length; i++) {

//         if(str[i] === str[i + 1]) {
//             i++
//         } else {
//             return str[i]
//         }
//     }

//     return null
// }

function findFirstNonRepeatingCharacter(str) {

    const objStr = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i]

        objStr[char] = (objStr[char] || 0) + 1

    }

    for(const item of str){
        
        if( objStr[item] === 1) {
            return item
        }
    }
    return null
}
module.exports = findFirstNonRepeatingCharacter;
