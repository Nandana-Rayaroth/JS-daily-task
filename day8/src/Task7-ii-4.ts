function freqCounter(str : string) : void{

    let arr : string[] = str.split("")
    let freq : any = {}
    for(let i of arr){
        if(i in freq){
            freq[i]++
        }
        else{
            freq[i] = 1
        }
    }
    console.log(freq)
}
freqCounter("hello")
freqCounter("programming")