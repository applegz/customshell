// module.exports = function () {
//   process.stdin.on("data", (data) => {
//     const cmd = data.toString().trim();
//     if (cmd === "pwd") {
//       process.stdout.write(__dirname);
//     }
//     process.stdout.write("\nprompt > ");
//   });
// };

module.exports = (done) => {
  done(process.cwd());
};
