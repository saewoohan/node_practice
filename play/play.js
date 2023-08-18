const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is cdone!');
    fetchData().then(done => {
        console.log(done);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hello!');