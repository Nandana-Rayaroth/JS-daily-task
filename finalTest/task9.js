function ComputeObj(obj1, obj2) {
    var Keys1 = Object.keys(obj1);
    var Keys2 = Object.keys(obj2);
    var Val1 = Object.values(obj1);
    var Val2 = Object.values(obj2);
    for (var i = 0; i < Keys1.length; i++) {
        if (Keys1[i] !== Keys2[i]) {
            console.log(Keys1[i], Keys2[i]);
        }
    }
}
ComputeObj({ x: 1, y: 2, z: 3 }, { x: 1, y: 4, w: 5 });
