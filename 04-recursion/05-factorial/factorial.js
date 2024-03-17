// function factorial(num) {
//     if (num < 2) {
//         return 1
//     }

//     return num * factorial(num - 1)
// }


const factorial = (num) => num < 2 ? 1 : num * factorial(num -1)


module.exports = factorial;
