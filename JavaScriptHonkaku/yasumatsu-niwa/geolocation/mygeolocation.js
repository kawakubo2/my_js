document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(`緯度: ${position.coords.latitude} 経度: ${position.coords.longitude}`);
        document.getElementById('latitude').textContent = position.coords.latitude;
        document.getElementById('longitude').textContent = position.coords.longitude;
    })
});