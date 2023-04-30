class Person {
    constructor ( fullname,age,gender){
        this.fullname  = fullname;
        this.age = age;
        this.gender = gender;
    }
}
const taro = new Person("太郎",18,"男");
const jiro = new Person( "次郎", 15, "男"); 
const saburo = new Person( "三郎", 10, "男"); 
const hanako = new Person( "花子", 23, "女"); 
const hanayo = new Person( "花代", 18, "女");

const friends = new Map();

//1
friends.set(taro,new Set([jiro,hanayo]));
console.log(friends);
friends.set(hanako ,new Set([hanayo,taro,saburo]));
console.log(friends);
friends.set(taro,friends.get(taro).add(hanako)); //taro key
console.log(friends);

let taroFriends = friends.get(taro);
taroFriends = Array.from(taroFriends); // SetからArrayへの変換方法
taroFriends.sort((f1, f2) => f1.age - f2.age);
console.log(taroFriends);

let count = 0;
for (const friend of taroFriends) {
    if (friend.gender !== taro.gender) {
        count++;
    }
}
console.log(`太郎さんの異性の友達は${count}人です。`);

const STEP = 1;
let count2 = taroFriends.filter(f => f.gender !== taro.gender).length;
console.log(`太郎さんの異性の友達は${count2}人です。`);