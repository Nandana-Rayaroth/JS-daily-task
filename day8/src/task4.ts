function formId(arg : number | string): string{
    let id : string = "ID"
    return `"${id}-${arg}"`
}

console.log(formId(123))
console.log(formId("A7B"))