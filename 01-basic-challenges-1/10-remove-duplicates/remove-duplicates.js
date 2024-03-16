function removeDuplicates(arr) {
    let newArrayWithoutDuplicates = [];

    for (let i = 0; i < arr.length; i++) {
        
        if(!newArrayWithoutDuplicates.includes(arr[i])){
            newArrayWithoutDuplicates.push(arr[i])
        }
    }

    return newArrayWithoutDuplicates;
}

module.exports = removeDuplicates;
