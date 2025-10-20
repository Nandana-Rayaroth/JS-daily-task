
function swap() {
    let a = -3
    let b = 10

    console.log("value of a before swap", a)
    console.log("value of b before swap", b)

    swapOfa(a,b)
    function swapOfa(a, b) {
        a = (a+b)-a
        console.log("values of a after swap", a)
    }
    swapOfb(a,b)
    function swapOfb(a,b){
        b = (b+a) - b
        console.log("value of b after swap", b)
    }
}
swap()