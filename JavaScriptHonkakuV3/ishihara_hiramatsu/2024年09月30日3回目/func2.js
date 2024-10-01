/*
レギュラーガソリン(1リットルあたりx円)をyリットル給油した時の料金を返す
*/
function calcGas(unitPrice, litter, member) {
    if (member) {
        unitPrice -= 3;
    }
    return unitPrice * litter;
}

const pricePerLitter = 169;
const chargeLitter = 30;

console.log(`${pricePerLitter}円のレギュラーガソリンを${chargeLitter}リットル給油した場合、\
${calcGas(pricePerLitter, chargeLitter, false)}円となります。`);
console.log(`${pricePerLitter}円のレギュラーガソリンを${chargeLitter}リットル給油した場合、\
${calcGas(pricePerLitter, chargeLitter, true)}円となります。`);