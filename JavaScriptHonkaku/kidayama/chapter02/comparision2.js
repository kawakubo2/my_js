let x = 0.2;
let y = 0.6;

// 左結合
if (x * 10 * 3 === y * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

let z = 0;
z = !!x; // 右結合
console.log(typeof z)