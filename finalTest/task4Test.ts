import { templateParser } from "./task4.js";

let TestCase = [
  {
    id: 1,
    input: "Hello {{name}}, you have {{count}} new messages.",
    obj: {
      name: "John",
      count: 3,
    },
    output: "Hello John, you have 3 new messages.",
  },
  {
    id: 2,
    input:
      "Welcome to {{name}}, You have so many {{item}} here, also we arranged {{complement}}",
    obj: { name: "Wonderland", item: "fun", complement: "food" },
    output:
      "Welcome to Wonderland, You have so many fun here, also we arranged food",
  },
  {
    id: 3,
    input: "Happy {{event}} {{person}}",
    obj: { event: "birthday", person: "ABC" },
    output: "Happy birthday ABC",
  },
  {
    id: 4,
    input: "Hi hello {event} {{person}}",
    obj: { event: "birthday", person: "ABC" },
    output: "Hi hello {event} ABC",
  },
  {
    id: 5,
    input: "Happy {{evn}} {{person}}",
    obj: { event: "birthday", person: "ABC" },
    output: "Happy {{evn}} ABC",
  },
];

TestCase.forEach(({id, input, obj, output}) => {
    let result = templateParser(input, obj)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
}) 