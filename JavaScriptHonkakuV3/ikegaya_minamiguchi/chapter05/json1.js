fetch('member.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("ｘｘｘｘｘ");
    })
    .then(data => {
        for (const member of data.members) {
            console.log('----------------------');
            console.log(`名前: ${member.name}`);
            console.log(`身長: ${member.height}`);
            console.log(`体重: ${member.weight}`);
        }
    })