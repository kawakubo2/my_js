self.addEventListener('message', event => {
    let count = 0;
    for (let i = 1, len = event.data.target; i < len; i++) {
        if (i % event.data.x === 0) count++;
    }
    postMessage(count);
});