export function ToSingleObject (arr: {}[]){
let Obj = {}
    for(let i = 0; i < arr.length; i++){
        let value = Object.values(arr[i])
        for(let i = 0; i < value.length; i = i+2){
            if(typeof(value[i]) === 'string' && value[i].trim() === "") return "Invalid input"
            if(typeof(value[i+1]) === 'string' && value[i+1].trim() === "") return "Invalid input"
            Obj[value[i]] = value[i+1]
        }
    }
    return Obj
}