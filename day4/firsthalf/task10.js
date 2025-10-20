
// function Validity(str) {
    
//     let splitted = str.split("")

//     if(splitted.includes('@')&&splitted.includes('.')){
//         return true
//     }
//     else{
//         return false
//     }
// }

function Validity(str) {
  if (!str || str.includes(" ")) return false;

  const atIndex = str.indexOf("@");
  const dotIndex = str.lastIndexOf(".");
  if (atIndex === -1 || dotIndex === -1) return false;

  if (atIndex > dotIndex) return false;

  if (atIndex === 0 || atIndex === str.length - 1) return false;

  if (dotIndex === 0 || dotIndex === str.length - 1) return false;

  if (dotIndex - atIndex < 2) return false;

  const extensionPart = str.slice(dotIndex + 1)
  if (extensionPart.length < 2) return false


  return true;
}

console.log(Validity("user@domain"))
console.log(Validity("user@domain.com"))
console.log(Validity("user@123.in"))

// 