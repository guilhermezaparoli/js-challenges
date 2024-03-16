function findMissingNumber(arrNumber) {
    let numberMissing
        if(arrNumber){
    
            for(let i = 1; i < Math.max(...arrNumber); i++){
    
                if(!arrNumber.includes(i)) {
                    return numberMissing = i
                }
              
               numberMissing = -1
            }
    
        } else {
            return numberMissing = undefined 
      
    }
          return numberMissing
    }

module.exports = findMissingNumber;
