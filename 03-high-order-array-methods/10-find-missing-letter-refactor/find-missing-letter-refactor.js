// function findMissingLetter(letters) {
//   const letterMissing = letters.filter((letter, index) => {
//     const current = letter.charCodeAt(0)
//     const previous = letters[index + 1]?.charCodeAt(0)


//     if((previous - current) > 1){
//       return current
//     }
//   })

//   const numberFinded = letterMissing[0].charCodeAt(0) + 1

//   return numberFinded ? String.fromCharCode(numberFinded) : ""
// }
function findMissingLetter(letters) {
  let start = letters[0].charCodeAt(0)


  const missingLetter = letters.map((letter) => letter.charCodeAt(0)).find((curr) => {
    if(curr - start > 1 ){
      return true
    }
    start = curr
    return false
  } )

  return missingLetter ? String.fromCharCode(missingLetter - 1) : ""
}



module.exports = findMissingLetter;

console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

