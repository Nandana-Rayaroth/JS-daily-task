export function ArrayUtility(arr1, arr2) {
    // if((!Array.isArray(arr1)) || (!Array.isArray(arr2)) || (arr1.length <= 0) || (arr2.length <= 0)) return "Failed"
    if(Array.isArray(arr1)&&Array.isArray(arr2)){
      if (arr1.length !== arr2.length) return;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return "Failed";
      }
      return "Passed";
    }
    else{
        if(arr1 === arr2) return "Passed"
        else return "Failed"
    }
}
