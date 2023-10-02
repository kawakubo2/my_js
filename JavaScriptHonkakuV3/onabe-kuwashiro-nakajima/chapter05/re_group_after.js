const re = /<a href="tel:(.+?)">.+?<\/a>/u;
const msg = 'お問い合わせは<a href="tel:09057890681">haruプログラミング教室</a>まで！';

document.write(msg.match(re)[0]);
