// function titleCase(phrase) {
//     let string = ""
//    for(let i = 0; i < phrase.length; i++){
     
//     if(phrase[i] === " "){
//         i++
//       string += " "
//          string += phrase[i].toUpperCase() 
//     } else {
//       i == 0 ? string += phrase[i].toUpperCase() : string += phrase[i]
//     }
     
//    }
  
//   return string
//   }

function titleCase(phrase) {
    const words = phrase.toLowerCase().split(" ")

    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join(" ")
}
module.exports = titleCase;
