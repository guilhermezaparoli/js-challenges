function isPalindrome(string) {
    const stringLower = string.toLowerCase()
      let stringReverse = stringLower.split("").reverse().join("").replace(/[^a-z0-9]/g, '')
      
  
      return stringLower.replace(/[^a-z0-9]/g, '') === stringReverse
  }
module.exports = isPalindrome;
