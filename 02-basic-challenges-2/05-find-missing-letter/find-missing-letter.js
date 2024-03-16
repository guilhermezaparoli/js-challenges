function findMissingLetter(arrLetters) {
    
    for(let i = 0; i < arrLetters.length; i++){

        if(arrLetters[i]?.charCodeAt() + 1 !== arrLetters[i + 1]?.charCodeAt(0)){
            return String.fromCharCode(arrLetters[i].charCodeAt() + 1)
        }
    }

    return ""
}

module.exports = findMissingLetter;
