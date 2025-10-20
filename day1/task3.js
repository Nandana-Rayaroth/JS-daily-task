
const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

function Recreater() {
    const created = [];

    for (let i = 0; i < students.length; i++) {
      created[i] = students[i];
      if (students[i].marks < 50) {
        created[i].status = "Fail";
      } else {
        created[i].status = "Pass";
      }
      delete created[i].marks;
    }
    return created
}


console.log(Recreater())