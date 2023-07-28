const bcrypt = require("bcrypt");

const password = "123S4cur3!";

bcrypt.hash(password, 4, (err, hash) => {
    console.log('hash', hash);

    bcrypt.compare(password, hash, (err, isEqual) => {
        console.log('isEqual', isEqual);
    })
});

const main = async () => {
  const hash = await bcrypt.hash(password, 3).then((hash) => {
    console.log("hash", hash);
    return hash;
  });
  await bcrypt.compare(password, hash).then(console.log).catch(console.log);
};

// main();
