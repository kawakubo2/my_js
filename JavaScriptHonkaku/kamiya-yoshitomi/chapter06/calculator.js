document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calc').addEventListener('click', () => {
        const x = Number.parseInt(document.getElementById('x').value);
        const y = Number.parseInt(document.getElementById('y').value);
        const op = document.getElementById('op').value;
        if (op === '') return;
        let answer;
        switch(op) {
            case "+":
                answer = x + y;
                break;
            case "-":
                answer = x - y;
                break;
            case "*":
                answer = x * y;
                break;
            case "/":
                answer = x / y;
                break;
        }
        document.getElementById('result').textContent = answer;
    })
});