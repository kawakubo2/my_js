let ary = ['JavaScript', 'Ajax', 'ASP.NET'];

delete ary[0];
console.log(ary);

for (let e of ary) {
    console.log(e);
}

let ary2 = ['JavaScript', 'Ajax', 'ASP.NET'];
ary2.splice(0, 1);
console.log(ary2);