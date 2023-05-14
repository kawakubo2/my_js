window.addEventListener('DOMContentLoaded', event => {
    const target = document.getElementById('target');
    const show_case = document.getElementById('show-case');
    const table_items = document.getElementById('items');
    const grand_total = document.getElementById('grand-total');
    const dragstart_handler = event => {
        event.dataTransfer.setData("text", event.target.id);
        console.log(`event.target.id: ${event.target.id}`);
        event.dataTransfer.effectAllowed = "move";
    };
    const dragover_handler = event => {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = "move";
    };

    const extract_int = unitPriceText => {
        let ary = unitPriceText.substring(0, unitPriceText.indexOf('円')).split(',');
        let result = 0;
        for (let i = 0; i < ary.length; i++) {
            result = result * 1000 + Number.parseInt(ary[i]);
        }
        return result;
    };

    const create_tr = item => {
        const tr = document.createElement('tr');
        tr.id = 'item-' + item.id;
        const itemNameTd = document.createElement('td');
        const itemNameText = document.createTextNode(item.querySelector('.product-name').textContent);
        itemNameTd.appendChild(itemNameText);
        tr.appendChild(itemNameTd);
        const unitPriceTd = document.createElement('td');
        unitPriceTd.className = 'unit-price';
        const unitPriceText = document.createTextNode(item.querySelector('.unit-price').textContent);
        const unitPrice = extract_int(unitPriceText.textContent);        
        unitPriceTd.appendChild(unitPriceText);
        tr.appendChild(unitPriceTd);
        const quantityTd = document.createElement('input');
        quantityTd.type = 'number';
        quantityTd.value = 1;
        quantityTd.min = 1;
        quantityTd.className = 'update-quantity';
        tr.appendChild(quantityTd);
        const subTotalTd = document.createElement('td');
        subTotalTd.className = 'subtotal';
        const subTotalText = document.createTextNode(unitPrice * Number.parseInt(quantityTd.value));
        subTotalTd.appendChild(subTotalText);
        tr.appendChild(subTotalTd);
        return tr;
    }
    /*
    ショーケースから買い物かごにドラッグしたときの処理
    ショーケースのSetから削除し、買い物かごに追加
    合計金額を計算し直す。
    */
    const target_set = new Set();
    const target_drop_handler = event => {
        const data = event.dataTransfer.getData("text");
        const item = document.getElementById(data);
        event.target.appendChild(item);
        if (target_set.has(data)) {
            return;
        }
        show_case_set.delete(data);
        target_set.add(data);
        table_items.appendChild(create_tr(item));
        update_grand_total();
    };
    const show_case_set = new Set();
    const show_case_drop_handler = event => {
        const data = event.dataTransfer.getData("text");
        const item = document.getElementById(data);
        event.target.appendChild(item);
        if (show_case_set.has(data)) {
            return;
        }
        table_items.removeChild(table_items.querySelector('#item-' + data));
        show_case_set.add(data);
        target_set.delete(data);
        update_grand_total();
    };
    const update_grand_total = event => {
        const subtotals = document.querySelectorAll('.subtotal');
        let sum = 0;
        for (const subtotal of subtotals) {
            sum += Number.parseInt(subtotal.textContent);
        }
        grand_total.textContent = sum;
    };
    const update_quantity = event => {
        const quantity_button = event.target;
        const parentTd = quantity_button.parentNode;
        const unit_price = parentTd.querySelector('.unit-price');
        const subtotal = parentTd.querySelector('.subtotal');
        subtotal.textContent = extract_int(unit_price.textContent) * quantity_button.value;
        update_grand_total();
    };
    table_items.addEventListener('change', update_quantity);

    const items = document.getElementsByClassName('item');
    for (const item of items) {
        item.addEventListener('dragstart', dragstart_handler);
    }
    target.addEventListener('drop', target_drop_handler);
    target.addEventListener('dragover', dragover_handler);
    show_case.addEventListener('drop', show_case_drop_handler);
    show_case.addEventListener('dragover', dragover_handler);
});