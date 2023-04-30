self.addEventListener('message', function(e) {
    console.log(`e.target.x=${e.target.x}`);
    let count = 0;
    for (let i = 1, len = e.data.target; i < len; i++) {
        if (i % e.data.x === 0) count++;
    }
    this.postMessage(count);
});
