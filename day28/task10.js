function deepEqual(a, b){
    if(a === b) return true

    let key1 = Object.keys(a)
    let key2 = Object.keys(b)

    for(let key of key1){
        if(!key2.includes(key) || !deepEqual(a[key], b[key]))
            return false
    }

    return true
}

// console.log(deepEqual({a: 1, b : {c: 2}}, {a: 1, b: {c: 2}}))
console.log(
  deepEqual(
    { a: 43, b: { d: 4, c: { e: 12, f: { h: 24 } } } },
    { a: 43, b: { d: 4, c: { e: 12, f: { h: 22 } } } }
  )
);