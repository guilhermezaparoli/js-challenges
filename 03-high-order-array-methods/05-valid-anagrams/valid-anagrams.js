// function validAnagrams(fisrtStr, secondStr) {
//   const firstArr = [];
//   for (const letterSecond of secondStr) {
//     firstArr.push(letterSecond.charCodeAt(0));
//   }

//   for (const letterFirst of fisrtStr) {
//     if (!firstArr.includes(letterFirst.charCodeAt(0))) {
//       return false;
//     }
//   }

//   return true;
// }'

function validAnagrams(fisrtStr, secondStr) {
  const sequence1 = fisrtStr.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const sequence2 = secondStr.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(sequence1).every(
    (item) => sequence1[item] === sequence2[item]
  );
}

module.exports = validAnagrams;

validAnagrams('listenppp', 'silent');
