function permutations(str) {
    
let result = []

    for(const [letter] in str){
        console.log(str[letter])
    }
}

module.exports = permutations;



console.log(permutations("abc"))