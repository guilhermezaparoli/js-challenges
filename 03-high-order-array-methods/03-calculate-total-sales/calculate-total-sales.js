function calculateTotalSalesWithTax(products, tax) {

    const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity  ,0)

    const amountTax = (totalPrice * tax)  / 100
    
    console.log(totalPrice, amountTax)

    return totalPrice + amountTax
}

module.exports = calculateTotalSalesWithTax;




  console.log(calculateTotalSalesWithTax(  [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
  ],
  8))
