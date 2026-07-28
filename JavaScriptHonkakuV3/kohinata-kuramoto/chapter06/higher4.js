function myconsole(name) {
  return function(message) {
    console.log(`[${name} (${new Date().toLocaleTimeString()})] ${message}`);
  }
}

const myconsole2 = (name) => (message) => console.log(`[${name}]: ${message}`);

const user1 = myconsole('田中');
const user2 = myconsole('鈴木');

user1('先輩、例の資料徹夜して作りました！');
user2('あ、あの会議中止ね。');
user1('それは。。。( ；∀；)');
user2('ふふふ');