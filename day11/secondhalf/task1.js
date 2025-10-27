
function IncreassOrder(arr){
    if(arr.length <= 50){
      let unique = [];
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
          unique.push(arr[i]);
        }
      }
      let min = Math.min(...unique);
      result.push(min);

      let indMin = unique.indexOf(min);

      if (unique.slice(indMin + 1).length >= 3) {
        unique = unique.slice(indMin + 1);
      }

      for (let i = 0; i <= unique.length; i++) {
        if (!result.includes(unique[i])) {
          if (result.length > 3) {
            break;
          }
          if (unique[i] > min) {
            result.push(unique[i]);
            min = unique[i];
          }
        }
      }
      console.log(result);
    }
    else{
        console.log("Maximum 50 input")
    }
}
IncreassOrder([6, 9, 2, 0, 5, 7, 8, 2, 8])
IncreassOrder([10, 20, 15, 30, 22, 40])
IncreassOrder([8, 3, 12, 89, 0, 6])
IncreassOrder([23, 79, 34, 89, 45, 90, 45, 67])
IncreassOrder([56, 98, 23, 10, 0, 20, 50, 45, 103, 678])
IncreassOrder([45, 67, 12, 45, 90, 76, -4])
IncreassOrder([-65, 0, 56, 20, 34, 56, 78, 50])
IncreassOrder([45, 34, 56, 98, 23])
IncreassOrder([654, -89, 0, 45, 82, 54])
IncreassOrder([56, 89, 132, 56, 34, 65])
IncreassOrder([56, 65, 32, 89, 34])
IncreassOrder([56, 24, 65, 78, 12, 345])
IncreassOrder([45, 67, 23, 56, 89])
IncreassOrder([65, 23, 475, 678, 988])
IncreassOrder([67, 244, 675, 890, 2342])

