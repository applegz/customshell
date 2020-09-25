const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

cat();
process.stdin.on("data", (data) => {
  module.exports = data;
});

ls();
pwd();
