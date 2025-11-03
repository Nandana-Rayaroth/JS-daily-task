
function Validity(str) {
  if (typeof(str)!=='string' || !str || str.includes(" ")) return false;

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

let TestCase = [
  {
    id : 1,
    input : "user@domain",
    output : false
  },
  {
    id : 2,
    input : "user@domain.com",
    output : true
  },
  {
    id : 3,
    input : "user@123.in",
    output : true
  },
  {
    id : 4,
    input : "user@1213.",
    output : false
  },
  {
    id : 5,
    input : "user123.com",
    output : false
  },
  {
    id : 6,
    input : "user 123@.com",
    output: false
  },
  {
    id : 7,
    input : 'user@23com',
    output : false
  },
  {
    id : 8,
    input : "uer.name.1213@gmail.com",
    output : true
  },
  {
    id : 9,
    input : "user.name@gmailcom",
    output : false
  },
  {
    id : 10,
    input : "user@name@gmail.com",
    output: true
  },
  {
    id : 11,
    input : "",
    output: false
  },
  {
    id : 12,
    input : " user@123gmail.com",
    output: false
  },
  {
    id : 13,
    input : [12, 34],
    output : false
  },
  {
    id : 14,
    input : 134,
    output : false
  },
  {
    id : 15,
    input : undefined,
    output : false
  }
]

TestCase.forEach(({input, output}) => {
  let result = Validity(input)
  if(result === output) console.log("Passed")
  else console.log("Failed")
})

// 