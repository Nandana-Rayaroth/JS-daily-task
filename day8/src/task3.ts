let StrArr : string[] = ["firstElement", "secondelement", "item3"]

function StringUpper(arr : string[]) : void{
    for(let i : number = 0; i < arr.length; i++){
        console.log(arr[i]?.toUpperCase())
    }
}
StringUpper(StrArr)