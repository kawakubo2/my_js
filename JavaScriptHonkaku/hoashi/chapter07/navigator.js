const agent = window.navigator.userAgent.toLowerCase();

let browser;
if (agent.indexOf('chrome') !== -1) {
    if (agent.indexOf('edg') !== -1) {
        browser = 'Microsoft Edge';
    } else if (agent.indexOf('opr') !== -1) {
        brower = 'Opera';
    } else {
        browser = 'Google Chrome';
    }
    console.log('お使いのブラウザは' + browser + 'です。');
} else {
    console.log('Chrome, Edge, Opera以外のブラウザです。');
}