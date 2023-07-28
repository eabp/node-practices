const asyncFunc = (cb) => {
    setTimeout(() => {
        try {
            const result = 2 + b;
            cb(null, result);
        } catch(e) {
            cb(e);
        }
    }, 1000);
}

try {
    asyncFunc((err, data) => {
        if (err) console.error('An error has ocurred', err)
        console.log('the data will be undefined', data);
        /** 
         * This code will never be executed because from an asynchronous function 
         * you can not call throw since it is not in the same thread 
         * */
        // throw new Error(err);
        return false;
    });
} catch (error) {
    console.log('This code will never be executed');
    console.error(error);
}