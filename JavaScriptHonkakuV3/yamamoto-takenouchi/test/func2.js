// 単価(100gあたりの単価)
const prices = {
    beef: 500,
    poke: 200
};

function calc_item(cart) { // {beef: 100, poke: 400}
    let total = 0;
    for (const key in cart) { // keyの中にbeefやpokeは入る
        const unit_price = prices[key];
        total += cart[key] / 100 * unit_price;
    }
    return total;
}

const cart = {beef: 100, poke: 400};
const total_price = calc_item(cart);
console.log(`合計金額: ${total_price}円`);