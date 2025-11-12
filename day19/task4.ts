function MultiFieldSort(arr:object[], sortKey: object[]){

    let fsVal = []
    for(let i = 0; i < sortKey.length; i++){
        fsVal.push(Object.values(sortKey[i]))
    }
    let temp = []
    
    // for(let i = 0; i < arr.length; i++){
    //     temp.push(arr)
    // }
    // console.log(arr.sort((a, b) => a.name - b.name))
}

let data = [
  { name: "Charlie", age: 25, joinDate: "2022-06-01" },
  { name: "alice", age: 30, joinDate: "2020-03-15" },
  { name: "Bob", age: 30, joinDate: "2021-05-10" },
  { name: "bob", age: 30, joinDate: "2019-01-12" },
]

let sortKeys = [
  { key: "age", order: "desc" },
  { key: "joinDate", order: "asc" },
  { key: "name", order: "asc" },
]

MultiFieldSort(data, sortKeys)
//NOT COMPLETED