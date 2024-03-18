function flattenArray(arr) {

    let result = []


    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item))
        } else {
            result.push(item)
        }
    }

    return result
}

module.exports = flattenArray;


console.log(flattenArray([1, [2, 3], [4, 5, [6]]]));