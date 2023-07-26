console.time('lesson');

console.log("This is a simple log", 1);
console.info("This is a info message");
console.warn("This is a warning!");
console.error("Oww, this is an error");

const employees = [
  {
    name: "Ezequiel",
    lastname: "Bermudez",
    age: 27,
    genre: "M",
  },
  {
    name: "Ana",
    lastname: "Bermudez",
    age: 28,
    genre: "F",
  },
  {
    name: "Isaias",
    lastname: "Perez",
    age: 18,
    genre: "M",
  },
  {
    name: "Alirio",
    lastname: "Mieres",
    age: 20,
    genre: "M",
  },
];

console.table(employees);

console.group("team 1");
console.log("team 1.1");
console.log("team 1.12");
console.log("team 1.13");
console.log("team 1.14");
console.groupEnd("team 1");

console.count('time');
console.count('time');
console.countReset('time');
console.count('time');
console.count('time');
console.count('time');
console.count('time');
console.count('time');
console.countReset('time');

console.timeLog('lesson');