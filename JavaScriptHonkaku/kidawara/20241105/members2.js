const members = [
    'Taro Yamada,35,75,172',
    'Hanako Yokoyama,48,58,160',
    'Ichiro Tanaka,55,80,181',
    'Kumiko Yamamoto,28,60,170',
];
/*
Taro Yamada,35,75,172 -> 172,75,Yamada Taro,35
*/

const pattern = /^(?<firstname>[a-z]+) (?<lastname>[a-z]+),(?<age>\d{1,3}),(?<weight>\d{1,3}),(?<height>\d{1,3})$/i;
for (const member of members) {
    // const result = member.match(pattern);
    // console.log(`${result.groups.height},${result.groups.weight},${result.groups.lastname.toUpperCase()} ${result.groups.firstname},${result.groups.age}`);    
    const result = member.match(pattern);
    const r = result.groups;
    console.log(`${r.height},${r.weight},${r.lastname.toUpperCase()} ${r.firstname},${r.age}`);    
}