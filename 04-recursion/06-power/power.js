// function power(base, exponent) {
//     if (exponent == 1) {
//         return base
//     }

//     return power(base, exponent - 1) * base
// }


const power = (base, exponent) => exponent == 1 ? base : power(base, exponent - 1) * base

module.exports = power;
