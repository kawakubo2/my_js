document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#member-list');
    fetch('members.json')
        .then(res => res.json())
        .then(data => {
            for (const member of data['members']) {
                const tr = document.createElement('tr');
                const idTd = document.createElement('td');
                idTd.textContent = member.id;
                const nameTd = document.createElement('td');
                nameTd.textContent = member.name;
                const ageTd = document.createElement('td');
                ageTd.textContent = member.age;
                tr.append(idTd);
                tr.append(nameTd);
                tr.append(ageTd);
                tbody.append(tr);
            }
        })

});