const members = [
    'Taro Yamada,35,75,172',
    'Hanako Yokoyama,48,58,160',
    'Ichiro Tanaka,55,80,181',
    'Kumiko Yamamoto,28,60,170',
];
/*
Taro Yamada,35,75,172 -> 172,75,Yamada Taro,35
*/

const pattern = /^([a-z]+) ([a-z]+),(\d{1,3}),(\d{1,3}),(\d{1,3})$/i;
for (const member of members) {
    console.log(member.replace(pattern, 
        function(match, p1, p2, p3, p4, p5, offset, string) {
            return `${p5},${p4},${p2.toUpperCase()} ${p1},${p3},${(p4 / (p5 / 100) ** 2).toFixed(1)}`;
        }
    ));
}