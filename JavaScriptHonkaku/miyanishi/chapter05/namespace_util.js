function namespace(ns) {
    let names = ns.split('.');
    let parent = window;

    for (let name of names) {
        parent[name] = parent[name] || {};
        parent = parent[name];
    }
    return parent;
}

let my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function() { }
let p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);