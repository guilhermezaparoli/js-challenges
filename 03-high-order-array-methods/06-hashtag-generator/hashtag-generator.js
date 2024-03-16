function generateHashtag(str) {
  if (!str || str.length > 140) {
    return false;
  }

  const words = str.split(' ').reduce((acc, cur) => {

    acc = acc + cur.charAt(0).toUpperCase() + cur.slice(1);
    console.log(cur.charAt(0).toUpperCase());
    return acc;
  }, '#');

  return words;
}

module.exports = generateHashtag;

console.log(generateHashtag('JavaScript is awesome'));
