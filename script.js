mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5nYXJ6YSIsImEiOiJja3YwNmJyN3g3amF2MnBtbmd4dWVnNXE2In0.Rob8irjTgeQ7YgXUb83ucQ'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() { }

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left')





}


