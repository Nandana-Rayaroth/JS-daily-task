function calculateTotal(billAmount, taxPercentage = 0.2){
    if (taxPercentage === 0.2){
        return billAmount + taxPercentage
    }
    else{
      let taxAmount = billAmount * (taxPercentage / 100);
      return billAmount + taxAmount;
    }

}
console.log(calculateTotal(58))
console.log(calculateTotal(100, 13))
console.log(calculateTotal(532, 78))
console.log(calculateTotal(100))

// 