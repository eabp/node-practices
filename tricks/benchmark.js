console.time("benchmark.js");
let suma = 0;

const asyncFuncTest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("finished async process");
        resolve();
      });
    });
  };

console.time("loop 1");
for (let index = 0; index < 1000000000; index++) {
  suma += 1;
}
console.timeEnd("loop 1");

console.time("loop 2");
for (let index = 0; index < 1000000000; index++) {
  suma += 1;
}
console.timeEnd("loop 2");

console.time('async process');
asyncFuncTest().then(() => {
    console.timeEnd('async process');
});

console.timeEnd("benchmark.js");


