const fs = require('fs');

//code from solution is not working
module.exports = (fileName, done) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      done(data);
    }
  });
};

// const regex = /[a-z]+$/;
// const arg = require('./bash');

// module.exports = function () {
//   //const cmd = data.toString().trim();
//   if (arg.includes('cat')) {
//     fs.readfile(`/${cmd.match(regex)[0]}`, 'utf8', (err, code) => {
//       if (err) {
//         throw err;
//       } else {
//         process.stdout.write(code);
//         process.stdout.write('\nprompt > ');
//       }
//     });
//   }
// };

// module.exports = function (arg) {
//   process.stdin.on("data", (data) => {
//     //const cmd = data.toString().trim();
//     if (arg.includes("cat")) {
//       fs.readfile(`/${cmd.match(regex)[0]}`, "utf8", (err, code) => {
//         if (err) {
//           throw err;
//         } else {
//           process.stdout.write(code);
//           process.stdout.write("\nprompt > ");
//         }
//       });
//     }
//   });
// };
