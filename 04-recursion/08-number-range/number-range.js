function numberRange(startNum, endNum) {
    if (startNum == endNum) {
        return [endNum]
    }
    
    const numbers = numberRange(startNum + 1, endNum)
    numbers.unshift(startNum)

    return numbers
}

module.exports = numberRange;


console.log(numberRange(1, 5))

