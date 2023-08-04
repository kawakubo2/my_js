const dt = new Date('2023-08-04T15:00:00');
const fmt = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'short',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    dayPeriod: 'short'
});
console.log(fmt.format(dt));