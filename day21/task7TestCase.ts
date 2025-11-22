import { validEmail } from "./task7.ts";

let TestCase = [
  {
    id: 1,
    Input: ["test@mail.com", "abc@", "ok@gmail.com"],
    output: ["test@mail.com", "ok@gmail.com"],
  },
  {
    id: 2,
    Input: ["he@llo@gamil.com", "hi@gmail.com"],
    output: ["hi@gmail.com"],
  },
  {
    id: 3,
    Input: ["@gmail.com", "hello@gmail.com"],
    output: ["hello@gmail.com"],
  },
  {
    id: 4,
    Input: [
      "hello2.-_3@gmail.com",
      "hello!!!@gmail.com",
      "hello#gmail.com",
      "hi&hello@gamail.com",
    ],
    output: ["hello2.-_3@gmail.com"],
  },
  {
    id: 5,
    Input: [".hello@gmail.com", "hi@gmail.com.", "ok.ay@gmail.com"],
    output: ["ok.ay@gmail.com"],
  },

];

TestCase.forEach(({Input, output, id}) => {
    let result = validEmail(Input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected: ", output, "Got : ", result)
})