
function Counter(n) {
    let i = n
    
    return function(){
        return n++
    }
    
}
let couterSet = Counter(5)
console.log(couterSet())
console.log(couterSet())
console.log(couterSet())