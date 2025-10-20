function deepClone(obj1) {
    let result = JSON.parse(JSON.stringify(obj1))
    return result
}

let obj = {
  name: "JavaScript",
  country: "US",
  dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
};

console.log(deepClone(obj))

// 