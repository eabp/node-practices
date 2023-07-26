console.log(global);

let i = 0;

const intervalTest = setInterval(() => {
    i++;
    console.log('intento', i);
    if (i === 3) {
        clearInterval(intervalTest);
        console.log('finalizo');
    }
}, 1000);

global.TEST = 'Esto es una prueba, no usar';

console.log(TEST);