process.on('uncaughtException', (err, origin) => {
    console.log('oww, I did not catch this error');
    console.error(err);
    console.info('origin', origin);
    setTimeout(() => {
        console.log('this log is from exception');
    }, 10);
})

process.on("beforeExit", () => {
  console.log("the process is about to close");
});

process.on("exit", () => {
  console.log("the process was closed");
  setTimeout(() => {
    console.log('this log is from exit');
}, 10);
});

// 2 + z;

console.log('after of the error');