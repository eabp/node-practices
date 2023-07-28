const os = require("os");

console.log("Architecture:", os.arch());
console.log("Platform:", os.platform());
console.table(os.cpus());
console.log("cpus length", os.cpus().length);
console.log(os.constants);
// memory info
const SIZE = 1024;

kb = (bytes) => bytes / SIZE;
mb = (bytes) => kb(bytes) / SIZE;
gb = (bytes) => mb(bytes) / SIZE;

console.log("memory free", os.freemem());
console.log("memory", kb(os.freemem()));
console.log("memory", mb(os.freemem()));
console.log("memory", gb(os.freemem()));
console.log("total memory", gb(os.totalmem()));

console.log('homedir', os.homedir());
console.log('tmp', os.tmpdir());
console.log('hostname', os.hostname());

console.log(os.networkInterfaces());
console.table(os.networkInterfaces());