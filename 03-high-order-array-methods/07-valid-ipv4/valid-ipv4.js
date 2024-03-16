const isValidIPv4 = (str) => {
  const strArr = str.split('.');
  if (strArr.length === 4) {
    const isGreater = strArr.every((item) => {
      const num = parseInt(item);
      
     return item >= 0 && item <= 255 && item == num.toString();
    });
    console.log(isGreater)
    return isGreater;
  } else {
    return false;
  }
};

module.exports = isValidIPv4;
 

console.log(isValidIPv4('1.2.3.4'))