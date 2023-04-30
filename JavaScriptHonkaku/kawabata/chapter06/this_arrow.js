document.addEventListener('DOMContentLoaded', function() {
    const Counter = function(elem) { 
        this.count = 0;
        this.elem = elem;
        elem.addEventListener('click', () => {
            this.count++;
            this.show();
        });
    };

    Counter.prototype.show = function() {
        console.log(this.elem.id + 'は' + this.count + '回クリックされました。');
    }

    let c = new Counter(document.getElementById('btn'));
});