function SortByKey(arr: object[], key:string, order:string = 'asc'){
    let Values = []
    let result = []
    for(let i of arr){
        Object.keys(i).forEach((element) => {
            if(element === key){
                Values.push(i[key])
            }
        })
        
    }
    if(Values.length === 0) return 'Invalid input'
    
    if(order === 'asc') Values.sort()
    else if(order === 'desc') Values.sort((a, b) => b - a)
\

    for(let i = 0; i < Values.length; i++){
        result.push({[key]: Values[i]})
    }
    return(result)
}

// console.log(SortByKey([{age : 30}, {age : 20}],'age', 'asc'))
let TestCase = [
    {
        id : 1,
        InputArray : [{age : 30}, {age : 20}],
        key : 'age',
        order : 'asc'
        output : [{age : 20}, {age : 30}]
    },
    {
        id : 2,
        InputArray : [{age : 43}, {greet : 'hello'}, {greet : 'hello', age : 23}],
        key : 'age',
        order : 'asc',
        output : [{age : 23}, {age : 43}]
    },
    {
        id : 3,
        InputArray : [{age : 23}, {age : 12}],
        key : 'name',
        order : 'asc',
        output : 'Invalid input'
    },
    {
        id : 4,
        InputArray : [{name : 'Thomas'}, {name : 'Joseph'}, {name : 'Abhin'}],
        key : 'name',
        order : 'asc',
        output : [{name : 'Abhin'}, {name: 'Joseph'},{name: 'Thomas'}]
    }
]

TestCase.forEach(({InputArray, key, order, output, id}) => {
    let result = SortByKey(InputArray, key, order)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})