function SelectionSort(arr){
    let sample = [...arr]
    let result = []
    for(let i = 0; i < arr.length; i++){ 
        let min = Math.min(...sample);
        result.push(min)
        sample.splice(sample.lastIndexOf(min), 1)
    }
    console.log(result);
}
SelectionSort([7, 12, 9, 11, 3])
SelectionSort([81, 54, 32, 1, 98, 43]);
SelectionSort([43, 54, 90, 100, 12, 2, 0, 190]);
SelectionSort([980, 234, 2142, 5432, 123, 9834]);
SelectionSort([12, 34, 54, 76, 89]);
SelectionSort([90, 86, 56, 34, 12, 5]);
SelectionSort([124, 452, 5234, 123, 34]);