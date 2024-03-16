function findMaxNumber(arr) {
let greatestNumber = Number.NEGATIVE_INFINITY;

for(const item of arr){
    if(item >= greatestNumber){
        greatestNumber = item
    }
}
return greatestNumber
}

module.exports = findMaxNumber;
