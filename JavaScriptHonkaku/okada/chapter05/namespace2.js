function namespace(ns) {
    let names = ns.split('.');
    var parent = window;
    for (let i = 0, len = names.length; i < len; i++) {
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    }
    return parent;
}

let my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function() {}
let p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.Wings.Person);