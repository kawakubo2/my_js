let members = ['山田太郎', '横山花子', '田中一郎', '山本久美子'];

let year = 2022;
let month = 3

for (let name of members) {
    let template = name + "様\n";
    template += year + "年" + month + "月号発売中！";
    console.log(template);
}
