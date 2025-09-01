document.addEventListener('DOMContentLoaded', () => {
    // 要素を生成
    const btn = document.createElement('button');
    btn.textContent = 'クリック';

    // 生成した段階でイベントを登録
    btn.addEventListener('click', () => {
        alert('ボタンがクリックされました');
    });

    // DOMに追加
    document.getElementById('container').appendChild(btn);
});
