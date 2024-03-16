function validateEmail(string) {
    const regext = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
        
      return regext.test(string)
    }

module.exports = validateEmail;
