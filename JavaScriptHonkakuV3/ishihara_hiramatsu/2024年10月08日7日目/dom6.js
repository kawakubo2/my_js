const languages = ['JavaScript', 'Java', 'Python', 'C#', 'TypeScript', 'PHP', 'C']

const result = document.querySelector('#result');
// ul要素ノード
const ul = document.createElement('ul');
for (const lang of languages) {
    const li = document.createElement('li');
    li.textContent = lang;
    ul.append(li);
}
result.append(ul);

/*
#category1のp要素のテキストを取り出し
#result2にulとして表示
<ul>
    <li>ひまわり</li>
    <li>かぼちゃ</li>
    ・・・
</ul>
*/
