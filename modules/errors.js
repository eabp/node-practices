const willBeBroken = () => {
    console.log(2 + z);
}

try {
    willBeBroken();
} catch (error) {
    console.error('An error has ocurred: ', error.message);
}

console.info('finish lesson!');