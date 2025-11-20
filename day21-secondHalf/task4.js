function flattObj(obj) {
    var Key = [];
    var Val = [];
    Key.push(Object.keys(obj));
    Val.push(Object.values(obj));
    console.log(Key);
    console.log(Val);
}
flattObj({ a: { b: { c: 1 } }, d: 2 });
// {"a.b.c":1, "d":2}
