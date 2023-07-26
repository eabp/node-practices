const { exec, spawn } = require("child_process");

exec("ls -la", (err, stdout, stderr) => {
  if (err) {
    console.log("An error has ocurred", err);
    console.log(stdout, stderr);
    return false;
  }

  console.log(stdout);
});

const process = spawn("ls", ["-la"]);
process.stdout.on("data", (info) => console.log(info.toString()));
process.on("exit", (_) => console.log("process is exit"));
process.on("close", (_) => console.log("process is end"));
