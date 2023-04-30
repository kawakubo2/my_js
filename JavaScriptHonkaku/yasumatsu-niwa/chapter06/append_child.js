document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        const name = document.getElementById('name');
        const url = document.getElementById('url');

        // anchor要素の作成
        const anchor = document.createElement('a');
        // anchor要素にhref属性、target属性を追加
        anchor.href = url.value;
        anchor.target = '_blank';
        // テキストを生成
        const text = document.createTextNode(name.value);
        // anchorの要素内容としてテキストを追加
        anchor.appendChild(text);
        const br = document.createElement('br');
        const list = document.getElementById('list');
        list.appendChild(anchor);
        list.appendChild(br);

        name.value = '';
        url.value = '';
        name.focus();
    });
});