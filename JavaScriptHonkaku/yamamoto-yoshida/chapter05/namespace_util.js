function namespace(ns) {
    const names = ns.split('.');
    let parent = window;
    for (let i = 0, len = names.length; i < len; i++) {
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    }
    return parent;
}

const my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function() {}
const p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);

console.log(Wings);