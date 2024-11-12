fetch('./members.json')
    .then(res => res.json())
    .then(data => {
        for (const member of data['members']) {
            console.log(member);
        }
    });