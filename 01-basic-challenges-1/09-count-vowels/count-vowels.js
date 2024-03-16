function countVowels(string) {
    const arrCountVowels = string.match(/[aeiou]/gi)
    const amountVowels = arrCountVowels.length
    
    
    return amountVowels
}


module.exports = countVowels;
