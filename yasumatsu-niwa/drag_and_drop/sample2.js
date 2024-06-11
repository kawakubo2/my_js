window.addEventListener('DOMContentLoaded', event => {
    const target = document.getElementById('target');
    const show_case = document.getElementById('show-case');
    const total = document.getElementById('total');

    const sources = new Set([1, 2, 3, 4, 5, 6]);
    const targets = new Set();

    const dragstart_handler = event => {
        event.dataTransfer.setData("text", event.target.id);
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
        // console.log(`item=${item}`);
        const tr = document.createElement('tr');
        const itemNameTd = document.createElement('td');
        const itemNameText = document.createTextNode(item.querySelector('.product-name').textContent);
        itemNameTd.appendChild(itemNameText);
        tr.appendChild(itemNameTd);
        const unitPriceTd = document.createElement('td');
        unitPriceTd.classList.add('unit-price');
        const unitPriceText = document.createTextNode(item.querySelector('.unit-price').textContent);
        const unitPrice = extract_int(unitPriceText.textContent);        
        unitPriceTd.appendChild(unitPriceText);
        tr.appendChild(unitPriceTd);
        const quantityTd = document.createElement('td');
        const quantity = document.createElement('input');
        quantity.type = 'number';
        quantity.value = 1;
        quantity.classList.add('quantity');
        quantity.addEventListener('blur', (e) => {
            const parentTr = e.target.parentNode.parentNode;
            const unitPrice = extract_int(parentTr.querySelector('.unit-price').textContent);
            parentTr.querySelector('.subtotal').textContent = unitPrice * e.target.value;
        });
        quantityTd.append(quantity);
        tr.appendChild(quantityTd);
        const subTotalTd = document.createElement('td');
        subTotalTd.classList.add('subtotal');
        const subTotalText = document.createTextNode(unitPrice * Number.parseInt(quantity.value));
        subTotalTd.appendChild(subTotalText);
        tr.appendChild(subTotalTd);
        return tr;
    }
    const drop_handler = event => {
        event.preventDefault();
        event.stopPropagation();
        const data = event.dataTransfer.getData("text");
        console.log(`data=${data}`);
        const item = document.getElementById(data);
        if (targets.has(item)) return;
        sources.delete(item);
        targets.add(item);
        console.log(`item=${item}`);
        event.target.appendChild(item);
        total.appendChild(create_tr(item));
    };
    const items = document.querySelectorAll('.item');
    for (const item of items) {
        item.addEventListener('dragstart', dragstart_handler);
    }
    target.addEventListener('drop', drop_handler);
    target.addEventListener('dragover', dragover_handler);
    show_case.addEventListener('drop', drop_handler);
    show_case.addEventListener('dragover', dragover_handler);
});