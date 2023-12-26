/*
<select name="sports" id="sports">
    <option value="baseball">野球</option>
    <option value="tennis">テニス</option>
    <option value="swimming">水泳</option>
    <option value="basketball">バスケットボール</option>
    <option value="karate">空手</option>
</select>
*/
const sports = {baseball: "野球", tennis: "テニス", swimming: "水泳",
                basketball: "バスケットボール", karate: "空手"};

function createSelect(assoc_array, attrs) {
    const select = document.createElement('select');
    select.name = attrs['name'];
    select.id = attrs['id'];
    for (const key in assoc_array) {
        const value = assoc_array[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        select.appendChild(option);
    }
    return select;
}
const form = document.querySelector('#form');
form.appendChild(createSelect(sports, {name: 'sports', id: 'sports'}));
