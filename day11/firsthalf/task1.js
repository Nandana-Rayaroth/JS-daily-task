function calculateTotal(billAmount, taxPercentage = 20){
      if(typeof(billAmount) !== "number" || typeof(taxPercentage) !== "number") return "Invalid input"
      
      let taxAmount = billAmount * (taxPercentage / 100);
      return billAmount + taxAmount;
}
// console.log(calculateTotal(58))                                                 // output -> 69.6
// console.log(calculateTotal(100, 13))                                            // output -> 113
// console.log(calculateTotal(532, 78))                                            // output -> 946.96
// console.log(calculateTotal(100))                                                // output -> 120
// console.log(calculateTotal(12))                                                 // output -> 14.4
// console.log(calculateTotal(45, 12))                                             // output -> 50.4
// console.log(calculateTotal(893, 2))                                             // output -> 910.86

const TestCase = [
      {
            id : 1,
            input : 58,
            output : 69.6
      },
      {
            id : 2,
            input : 100,
            tax : 13,
            output : 113
      },
      {
            id : 3,
            input : 532,
            tax : 78,
            output : 946.96
      },
      {
            id : 4,
            input : 100,
            output : 120
      },
      {
            id : 5,
            input : 12,
            output : 14.4
      },
      {
            id : 6,
            input : 45,
            tax : 12,
            output : 50.4
      },
      {
            id : 7,
            input : 893,
            tax : 2,
            output : 910.86 
      },
      {
            id : 8,
            input : "hello",
            output : 'Invalid input'
      },
      {
            id : 9,
            input : 123,
            tax : "hello",
            output : 'Invalid input'
      },
      {
            id : 10,
            input : "hello",
            tax : "hi",
            output : 'Invalid input'
      },
      {
            id : 11,
            input : {},
            output : 'Invalid input'
      },
      {
            id : 12,
            input : [{}],
            output : 'Invalid input'
      },
      {
            id : 13,
            input : [" ", " ", " "],
            output : 'Invalid input'
      },
      {
            id : 14,
            input : undefined,
            output : 'Invalid input'
      },
      {
            id : 15,
            input : null,
            output : 'Invalid input'
      }
]

TestCase.forEach(({input, output, tax}) => {
      let result = calculateTotal(input, tax)
      if(result === output) console.log("Passed")
      else console.log("Failed"); 
})

// 