export function toQueryString(obj : {}) : string {

    let str : string = ""
    let Key : string[] = Object.keys(obj)
    let Val = Object.values(obj)
    if(Key.length === 0 || Val.length === 0) return "Invalid input"

    for(let i : number = 0; i < Key.length; i++){
        if(typeof((Key[i]) !== 'number' && typeof(Key[i]) !== 'string' ) && (typeof(Val[i]) !== 'number' && typeof(Val[i]) !== "string")) return 'Invalid input'
        str += Key[i]+"="+Val[i]
        if(i+1 < Key.length) str += "&"
    }
    return str
}

// console.log(toQueryString({name : "John", age: 30}))
// console.log(toQueryString({name : "Joseph", age : 43, isEmployee : "yes"}))