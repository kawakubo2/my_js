let ranks = ['A', 'B', 'C', 'D'];

for (const rank of ranks) {
    switch(rank) {
        case 'A':
        case 'B':
        case 'C':
            console.log('合格！');
            break;
        case 'D':
            console.log('不合格...');
            break;
    }
}