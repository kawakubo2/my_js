const processes = ['エアコンの電源を入れる', '冷房ボタンを押す', '温度を27℃に設定する',
                 '風速を弱にする', 'お休みタイマーを1時間に設定する'];
document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const ol = document.createElement('ol');
    for (const process of processes) {
        const li = document.createElement('li');
        const text = document.createTextNode(process);
        li.appendChild(text);
        ol.appendChild(li)
    }
    result.appendChild(ol);
});