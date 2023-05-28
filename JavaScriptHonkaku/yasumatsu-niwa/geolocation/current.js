document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    const mapLink = document.getElementById('map-link');
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');
    const accuracyText = document.getElementById('accuracy');

    const findMe = () => {

        mapLink.href = '';
        mapLink.textContent = '';
        latitude.textContent = '';
        longitude.textContent = '';
        accuracyText.textContent = '';

        const success = position => {
            latitude.textContent = position.coords.latitude;
            longitude.textContent = position.coords.longitude;
            accuracyText.textContent = position.coords.accuracy;
            mapLink.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
            mapLink.textContent = '地図';
            status.textContent = '';
        };
        const error = () => {
            status.textContent = '位置情報を取得に失敗しました。';            
        }

        if (!navigator.geolocation) {
            status.textContent = 'ブラウザは位置情報機能をサポートしていません';
        } else {
            status.textContent = '位置情報取得中...';
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };
    document.getElementById('find-me').addEventListener('click', findMe);
});