const fs = require("fs");
const stream = require("stream");

let data = "";

const readableStream = fs.createReadStream(__dirname + "/input.txt");
// readableStream.setEncoding("utf-8");
// readableStream.on("data", (chunk) => {
//   data += chunk;
// });

// readableStream.on('close', () => {
//     console.log(data);
// })

// process.stdout.write('hey');
// process.stdout.write('2');

const upperCaseTransform = new stream.Transform({
  transform(chunk, _encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readableStream.pipe(upperCaseTransform).pipe(process.stdout)