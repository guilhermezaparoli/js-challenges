function countOccurrences(string, char) {
    let isIqual = 0

    for(const letter of string.toLowerCase()){
        if(letter === char){
            isIqual += 1
        }
    }
    
    return isIqual
}

module.exports = countOccurrences;
