const add = (a, b, callback) => {
    setTimeout(() => {
        const data = a + b;
        callback(data);
    }, 200);
}

add(4, 1, (data) => {
    console.log(data);
})