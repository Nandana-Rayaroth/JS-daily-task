export function objectEquality(obj1, obj2){
  if(typeof obj1 !== "object" || typeof obj2 !== "object") {
    if(obj1 === obj2) return "Passed"
    else return "Failed"
  }
   let first = [];
   let second = [];
   for (let [keys, values] of Object.entries(obj1)) {
     if ((keys || values) === "") return "Failed";
     first.push(`${keys}, ${values}`);
   }
   for (let [keys, values] of Object.entries(obj2)) {
     if ((keys || values) === "") return "Failed";
     second.push(`${keys}, ${values}`);
   }

   first = first.sort();
   second = second.sort();
   let flag = [];
   if (first.length <= 0 || second.length <= 0) return "Failed";
   if (first.length === second.length) {
     for (let i = 0; i < first.length; i++) {
       if (first[i] === second[i]) {
         flag.push("Equal");
       } else {
         return "Not Equal";
       }
     }
     let final;
     for (let j = 0; j < flag.length; j++) {
       if (flag[j] === "Equal") {
         final = "Passed";
       } else {
         return "Failed";
       }
     }
     return final;
   } else return "Failed";
}

// console.log(
//   objectEquality({name: "JavaScript", country: "US", dataTypes: ["string", "number", "boolean", "object", "null", "undefined"]},{name: "JavaScript", country: "US", dataTypes: ["string", "number", "boolean", "object", "null", "undefined"]})
// );

// console.log(objectEquality({name: "Nandana", age : 12}, {name : "Nandana", age : 12}))
// console.log(objectEquality({ a: 1, b: 2 }, { a: 1, b: 2 }));
// console.log(objectEquality({ a: 1, b: 2 }, { b: 3, c: 4 }));
// console.log(objectEquality({ a: 1, b: 2 }, { b: 2, a: 1 }));
// console.log(objectEquality({ a: 1, b: 2 }, { a: 1, b: 2, d: 3 }));