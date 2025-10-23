function WordCounter(str : string) : void{
    let arr :string[] = str.split(" ")
    console.log(arr.length)
}

WordCounter("hello world")
WordCounter("This is a sample semtence")