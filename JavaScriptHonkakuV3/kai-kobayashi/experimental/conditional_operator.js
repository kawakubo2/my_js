let x = 0;
let y = '';
let z = null;
let w = undefined;

x ||= '規定値';
y ||= '規定値';
z ||= '規定値';
w ||= '規定値';

console.log(`x=${x} y=${y} z=${z} w=${z}`);

x = 0;
y = '';
z = null;
w = undefined;

x ??= '規定値';
y ??= '規定値';
z ??= '規定値';
w ??= '規定値';

console.log(`x=${x} y=${y} z=${z} w=${z}`);