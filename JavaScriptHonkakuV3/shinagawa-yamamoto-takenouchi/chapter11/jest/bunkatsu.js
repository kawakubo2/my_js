const member = {
	name: "山田太郎",
	age: 38,
	weight: 75,
	height: 170
};

// 関数定義
/**
 * @classdesc 体重(kg) / (身長(m) / 100) ** 2
 * @param {map} weight 身長 height 体重 
 * @returns BMI値
 */
function bmi({weight, height}) {
    return  weight / (height / 100) ** 2;
}

console.log(bmi(member));

const {weight, height} =  { name: "山田太郎", age: 38, weight: 75, height: 170 };