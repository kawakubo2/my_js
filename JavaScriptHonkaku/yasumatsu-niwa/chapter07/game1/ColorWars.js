document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const color_list = ['yellow', 'green', 'blue', 'red'];
    const colorbox_list = ['yellow', 'green', 'blue'];

    const create_colorbox = color => {
        const div = document.createElement('div');
        div.className = color;
        return div;
    };

    const init = () => {
        for (const color of colorbox_list) {
            const colorbox = create_colorbox(color);
            container.appendChild(colorbox);
        }
    };

    init();

    const get_color = () => {
        return color_list[Math.floor(Math.random() * color_list.length)];
    }

    const disable_color_without_red = () => {
        let colorboxes = document.querySelectorAll('div#container > div');
        for (let i = 0; i < colorboxes.length; i++) {
            if (colorboxes[i].className !== 'red') {
                colorboxes[i].disabled = true;
            }
        }
    }

    container.addEventListener('click', function(event) {
        const target = event.target;
        if (target.className === 'yellow') {
            container.removeChild(target);
        }
        if (target.className === 'green') {
            const random_colorbox1 = create_colorbox(get_color());
            container.appendChild(random_colorbox1);
            const random_colorbox2 = create_colorbox(get_color());
            container.appendChild(random_colorbox2);
            disable_color_without_red();
        }
        if (target.className === 'blue') {
            let deletebox = null;
            do {
                let deleteboxes = document.querySelectorAll('div#container > div');
                deletebox = deleteboxes[Math.floor(Math.random() * deleteboxes.length)];
                console.log("★");
            } while (deletebox === target);
            container.removeChild(target);
            container.removeChild(deletebox);
        }
        if (target.className === 'red') {
            const colorboxes = document.querySelectorAll('div#container > div');
            for (let i = 0; i < 3 || i < colorboxes.lenth; i++) {
                container.removeChild(colorboxes[i]);
            }
        }

    });
});