// function SortByKey(arr, key, order='asc'){
//     let temp = []
//     let KeyArr = Object.keys(arr)
//     if(order === 'asc'){
//         console.log(KeyArr)
//     }
    
    
// }
// SortByKey([{age:20}, {age: 30}, {age: 25}], key='age', order='asc')


// function DeepEqual(a, b) {
//     if(a.length !== b.length) return 'Invalid input'
//     for(let i = 0; i < a.length; i++){

//     }
// }

// console.log(DeepEqual({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 2 } }));

function Once(fn){
    let i = 0;

    return (function (){
        if (i === 0) {
          i = i + 1;
          return fn;
        } else return "";
    })
    
}
const initial = Once(() => console.log("Initialized"))
initial()
initial()