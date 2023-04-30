let items = {1: '食費', 2: '給料', 3: '教養娯楽費', 4: '交際費', 5: '水道光熱費', 6: '通信費', 7: '居住費'};
function createTd(formId) {
    let td = document.createElement('td');
    let text = null;
    if (formId == 'item') {
        text = document.createTextNode(items[document.getElementById(formId).value]);
    } else {
        text = document.createTextNode(document.getElementById(formId).value);
    }
    td.append(text);
    return td;
}
function createItemPulldown() {
    let itemMenu = document.getElementById('item');
    for (let code in items) {
        let option = document.createElement('option');
        option.value = code;
        let text = document.createTextNode(items[code]);
        option.appendChild(text);
        itemMenu.appendChild(option)
    }
}

function validate(ids) {
    let errors = [];
    let eventDate = document.getElementById('eventDate');
    let item = document.getElementById('item');
    let memo = document.getElementById('memo');
    let income = document.getElementById('income');
    let expense = document.getElementById('expense');

    if (eventDate.value.trim() === '') {
        errors.push('日付は必須入力です。');
    }
    if (item.value.trim() === '') {
        errors.push('費目は必須選択です。');
    } else {
        if (item.value == 2) {
            if (!(income.value > 0 && expense.value == 0)) {
                errors.push('給料の場合、入金額に0以上、出金額に0を入力してください。');
            }
        } else {
            if (!(expense.value > 0 && income.value == 0)) {
                errors.push('給料以外の場合、出金額に0以上、入金額に0を入力してください。');
            }
        }
    }
    return errors;
}
/*
function printErrors(errors) {
    let error_list = document.getElementById('error-summary');
    error_list.textContent = '';
    for (let i = 0, len = errors.length; i < len; i++) {
        let li = document.createElement('li');
        let text = document.createTextNode(errors[i]);
        li.appendChild(text);
        error_list.appendChild(li);
    }
}
*/

const printErrors = (errors) => {
    let error_list = document.getElementById('error-summary');
    error_list.textContent = '';
    for (let i = 0, len = errors.length; i < len; i++) {
        let li = document.createElement('li');
        let text = document.createTextNode(errors[i]);
        li.appendChild(text);
        error_list.appendChild(li);
        error_list.appendChild(li);
    }
};

function clearForm(ids) {
    for (let id of ids) {
        let formElement = document.getElementById(id);
        formElement.value = '';
    }
    document.getElementById('eventDate').focus();
}

document.addEventListener('DOMContentLoaded', function() {
    createItemPulldown();
    document.getElementById('create').addEventListener('click', function() {
        let ids = ['eventDate', 'item', 'memo', 'income', 'expense'];
        let errors = validate();
        if (errors.length > 0) {
            printErrors(errors);
            return;
        }
        let tbody = document.getElementById('detail');
        let tr = document.createElement('tr');
        for (let id of ids) {
            tr.appendChild(createTd(id));
        }
        tbody.appendChild(tr);
        clearForm(ids);
    }); 
});
