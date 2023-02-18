const fs = require("fs/promises");

async function test() {
  try {
    const content = "this is a sample text";
    const data = await fs.readFile("./test.txt", "utf8");
    console.log("dat is : ", data)
    console.log("done");
  } catch (err) {
    console.log(err);
  }
}
test();
// fs.writeFile("./test.txt", content, (err) => {
//   if (err) {
//     console.log("error", err);
//   }
// });
