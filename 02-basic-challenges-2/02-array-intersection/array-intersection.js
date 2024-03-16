// function arrayIntersection(arr1, arr2) {
//     let newArray = [];
//     let amountLoops = arr1.length > arr2.length ? arr1.length  : arr2.length

//     for(let i = 0; i < amountLoops; i++){

//         let item = arr1.find((item) =>  item === arr2[i])

//         if(item){
//             newArray.push(item)
          
//         }
//     }

//     return newArray
// }


// function arrayIntersection(arr1, arr2){

//     let intersection = [];

//     for (let index = 0; index < arr1.length; index++) {
//         const element = arr1[index];
      
//         if(arr2.includes(element) && !intersection.includes(element)){
//             intersection.push(element)
//         }
//     }
// return intersection        
// }

module.exports = arrayIntersection;
