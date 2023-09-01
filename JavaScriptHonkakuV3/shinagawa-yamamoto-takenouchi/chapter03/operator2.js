const age = 18;

console.log(age >= 20 ? "成人": "未成年");

let result;
if (age >= 20) {
    result = "成人";
} else {
    result = "未成年";
}
console.log(result);

const item = 'liquor';
const price = 1000;
console.log(item === "liquor" ? Math.floor(price * 1.1) : Math.floor(price * 1.08));

/*
JavaのJSPの例
<span style="color: <%=score >= 60: 'blue': 'red'; %>"><%=score %></span>
*/

let name = null;
console.log(name ?? '名無しの権兵衛');
name = '山田太郎';
console.log(name ?? '名無しの権兵衛');