const fs = require("fs").promises;

const read = async (pathToFile, cb) => {
  await fs.readFile(pathToFile).then((buffer) => cb(buffer.toString()));
};

const write = async (pathToSaved, content, cb) => {
  await fs
    .writeFile(pathToSaved, content)
    .then((saved) => cb("file was saved!", saved))
    .catch((err) => cb("the file couldnt be create", err));
};

const remove = async (pathToDelete, cb) => {
  await fs
    .unlink(pathToDelete)
    .then((deleted) => cb("file was deleted"))
    .catch((err) => cb("an error has occurred!", err));
};

const main = async () => {
  await write(__dirname + "/file.txt", "this a new file!", console.log);
  await read(__dirname + "/file.txt", console.log);
  await remove(__dirname + "/file.txt", console.log);
};

main();
