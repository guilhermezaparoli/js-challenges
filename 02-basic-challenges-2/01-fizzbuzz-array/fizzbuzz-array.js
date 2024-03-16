function fizzBuzzArray(numb) {
    let newArrayNumb = [];

    for (let i = 1; i <= numb; i++) {
    const isDividedFor3 = i % 3 === 0;
    const isDividedFor5 = i % 5 === 0;
      
        if (isDividedFor3 && isDividedFor5) {
            newArrayNumb.push("FizzBuzz");
        } else if (isDividedFor3) {
            newArrayNumb.push("Fizz");
        } else if (isDividedFor5) {
            newArrayNumb.push("Buzz");
        } else {
            newArrayNumb.push(i);
        }
    }

    return newArrayNumb;
}

module.exports = fizzBuzzArray;
