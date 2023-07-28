// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 4]);
let buffer = Buffer.from('Hola');

console.log(buffer);

buffer = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    buffer[i] = i + 97;
}

console.log('buffer', buffer);
console.log('abc', buffer.toString());