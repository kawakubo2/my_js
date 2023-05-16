document.addEventListener('DOMContentLoaded', () => {
    const setOption = (id, value) => {
        const opts = document.getElementById(id).options;
        for (const opt of opts) {
            if (opt.value === value) {
                opt.selected = true;
                break;
            }
        }
    }

    setOption('sport', 'baseball');
});