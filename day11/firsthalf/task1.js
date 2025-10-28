function calculateTotal(billAmount, taxPercentage = 20){
      let taxAmount = billAmount * (taxPercentage / 100);
      return billAmount + taxAmount;
}
console.log(calculateTotal(58))                                                 // output -> 69.6
console.log(calculateTotal(100, 13))                                            // output -> 113
console.log(calculateTotal(532, 78))                                            // output -> 946.96
console.log(calculateTotal(100))                                                // output -> 120
console.log(calculateTotal(12))                                                 // output -> 14.4
console.log(calculateTotal(45, 12))                                             // output -> 50.4
console.log(calculateTotal(893, 2))                                             // output -> 910.86



// 