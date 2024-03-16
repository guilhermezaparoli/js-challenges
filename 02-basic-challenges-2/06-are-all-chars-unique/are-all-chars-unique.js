// function areAllCharactersUnique(char) {
//     const arrChar = char.split("")
//     let newSet = new Set(arrChar)
    
//       if(Array.from(newSet).length < arrChar.length){
//           return false
//       }
  
//       return true
//   }

function areAllCharactersUnique(char) {
    const objChar = {}
    
    for(let i = 0; i < char.length; i++){
      let letter = char[i]
      
      if(objChar[letter]){
        return false
      }
      
      objChar[letter] = true;
    }
      
      return true
    }
module.exports = areAllCharactersUnique;
