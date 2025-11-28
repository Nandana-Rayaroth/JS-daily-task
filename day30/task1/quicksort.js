function QuickSort(arr){

    let sample = [...arr]
    let Pivot = sample[sample.length - 1];
    let Left = []
    let Right = []
    for(let i = 0; i < sample.length; i++){
        if(sample[i] < Pivot) Left.push(sample[i])
        else Right.push(sample[i])
    }
    console.log(Left, Right)
}

QuickSort([9, -3, 5, 2, 6, 8, -6, 1, 3])