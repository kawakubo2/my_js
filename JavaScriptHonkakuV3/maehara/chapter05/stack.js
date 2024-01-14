function print_stack(stack1, stack2) {
    console.log('戻る用' + stack1.toString());
    console.log('進む用' + stack2.toString());
}


const history1 = [];
const history2 = [];
history1.push('https://www.amazon.co.jp');
print_stack(history1, history2);
history1.push('https://www.yahoo.co.jp');
print_stack(history1, history2);

let url = history1.pop();
history2.push(url);
print_stack(history1, history2);
url = history1.pop();
history2.push(url);
print_stack(history1, history2);