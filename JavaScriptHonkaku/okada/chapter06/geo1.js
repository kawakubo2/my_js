const success = pos => {
    console.log('%o', pos);
    let crd = pos.coords;
    console.log('緯度:' + crd.latitude);
    console.log('経度:' + crd.longitude);
};

const error = err => {
    console.log(`${err.code}:${err.message}`);
};

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

navigator.geolocation.getCurrentPosition(success, error, options);