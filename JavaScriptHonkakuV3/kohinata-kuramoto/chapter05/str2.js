let name = '川久保智晴';

for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i) + ': ' + name.codePointAt(i));
}