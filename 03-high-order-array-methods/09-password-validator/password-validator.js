// function validatePassword(password) {
//   const arrPassw = password.split('');
//   if (arrPassw.length < 8) {
//     return false;
//   }

//   const hasUpperCase = arrPassw.some(
//     (letter) => letter.toUpperCase() === letter && isNaN(letter)
//   );
//   const hasLowerCase = arrPassw.some(
//     (letter) => letter.toLowerCase() === letter && isNaN(letter)
//   );
//   const hasNumber = arrPassw.some((letter) => !isNaN(letter));

//   return hasUpperCase && hasLowerCase && hasNumber;
// }


function validatePassword(password) {
    const arrPassw = password.split('');
    if (arrPassw.length < 8) {
      return false;
    }
  
    const hasUpperCase = arrPassw.some(
      (letter) => char.toUpperCase() === letter && isNaN(letter)
    );
    const hasLowerCase = arrPassw.some(
      (letter) => letter.toLowerCase() === letter && isNaN(letter)
    );
    const hasNumber = arrPassw.some((letter) => !isNaN(letter));
  
    return hasUpperCase && hasLowerCase && hasNumber;
  }
module.exports = validatePassword;

console.log(validatePassword('Abc12345'));
