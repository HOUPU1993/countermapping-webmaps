
mapboxgl.accessToken = 'pk.eyJ1IjoiaGw5MjciLCJhIjoiY2xtd3NuZ3liMHduZDJqbzZmYzRpZXJocSJ9.sdGw0-C3DPzn_-AN_V6Qww'

const map = new mapboxgl.Map({
    container: 'houpu',
    style: 'mapbox://styles/hl927/clo3om5el00f201oz3k3k5cfh',
    // center: [-122.40980, 37.80380],
    center: [-122.40897, 37.80636],
    zoom: 15,
    pitch: 30,
    // bearing: 20,
    minZoom:16,
});

map.on("load", function() {
    // console.log('This is Houpu')
    map.addSource('resturantSource', {
        'type': 'vector',
        'url': 'mapbox://hl927.3rbkxvix',
    });

    // add a sky layer that will show when the map is highly pitched
    // map.addLayer({
    //     'id': 'resturantLayer',
    //     'type': 'circle',
    //     'source': 'resturantSource',
    //     'source-layer': 'Restaurant_Scores-98035l',
    //     'paint': {
    //         'circle-color': '#008F8C'

    //     }
    // });
    map.addLayer({
        'id': 'resturantLayer',
        'type': 'circle',
        'source': 'resturantSource',
        'source-layer': 'Restaurant_Scores-98035l',
        'paint': {
            'circle-color': [
                'case',
                ['all', ['>=', ['get', 'inspection_score'], 45], ['<', ['get', 'inspection_score'], 80]], '#440154',
                ['all', ['>=', ['get', 'inspection_score'], 80], ['<', ['get', 'inspection_score'], 85]], '#3b528b',
                ['all', ['>=', ['get', 'inspection_score'], 85], ['<', ['get', 'inspection_score'], 90]], '#21908d',
                ['all', ['>=', ['get', 'inspection_score'], 90], ['<', ['get', 'inspection_score'], 95]], '#5dc963',
                ['all', ['>=', ['get', 'inspection_score'], 95], ['<=', ['get', 'inspection_score'], 100]], '#fde725',
                '#FFFFFF' // default color
            ]

        }
    });

    map.on('mouseenter', 'resturantLayer', (e) => {
    // console.log(e.features[0]['properties']['business_name']);
    var name = e.features[0]['properties']['business_name'];
    var textField = document.getElementById('restText');
    textField.innerHTML = name;
    });

})