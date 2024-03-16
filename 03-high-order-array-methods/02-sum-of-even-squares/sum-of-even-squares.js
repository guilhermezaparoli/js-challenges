function sumOfEvenSquares(arrNumbers) {
    
    
    
    return arrNumbers
        .filter((number) => number % 2 === 0)
        .map((evenNumbers) => evenNumbers ** 2)
        .reduce((acc, number) => acc + number, 0);
}


module.exports = sumOfEvenSquares;





