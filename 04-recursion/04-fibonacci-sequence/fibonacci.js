function fibonacci(position) {
    
    if(position < 2){
        return position
    }

    return fibonacci(position -1) + fibonacci(position - 2)
}

module.exports = fibonacci;


console.log(fibonacci(9))