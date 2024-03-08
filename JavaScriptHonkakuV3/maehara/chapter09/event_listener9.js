document.addEventListener('DOMContentLoaded', () => {
    const fire_event_button = document.querySelector('#fire_event');
    const stop_event_button = document.querySelector('#stop_event');
    const box = document.querySelector('#box');

    function myAlert() {
        window.alert('今日は出勤日です');
    }

    fire_event_button.addEventListener('click', () => {
        box.style.backgroundColor = 'navy';
        box.style.color = 'white';
        console.log('背景色を追加');
    });
    fire_event_button.addEventListener('click', myAlert);

    stop_event_button.addEventListener('click', () => {
        fire_event_button.removeEventListener('click', myAlert);
    })
})