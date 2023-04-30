import MyApp from './lib/MyApp.js';

const app = new MyApp('secret string');
for (const key in app) {
    console.log(key);
}

console.log(JSON.stringify(app));
console.log(app.checkValue('secret string'));