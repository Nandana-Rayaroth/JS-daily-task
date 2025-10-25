
let obj = {
  name: "JavaScript",
  country: "US",
  dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
};

let newObj = JSON.parse(JSON.stringify(obj))
newObj.statu = "hello"
console.log(newObj)
console.log(obj)

// 