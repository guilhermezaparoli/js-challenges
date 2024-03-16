// function highestScoringWord(string) {
//   const words = string.split(' ');

//   const scores = words.map((word) => {
//     let score = 0;
//     for(let letter of word){
//         score += letter.charCodeAt(0) - 96
//     }
//     return score
//   });

//   highestScore = 0;
//   highestIndex= 0;

//   for(let i = 0; i < scores.length; i++){
//     if(highestScore < scores[i]){
//         highestScore = scores[i]
//         highestIndex = i
//     }
//   }

//   return words[highestIndex]
// }

function highestScoringWord(string) {
  const words = string.split(' ');

  const scores = words.map((word) =>
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    )
  );

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

module.exports = highestScoringWord;

console.log(highestScoringWord('hello my name is xavier'));
