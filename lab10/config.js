var config = {
    style: 'mapbox://styles/hl927/clo3ovxgu00f301oz4mjf34nd',
    accessToken: 'pk.eyJ1IjoiaGw5MjciLCJhIjoiY2xtd3NuZ3liMHduZDJqbzZmYzRpZXJocSJ9.sdGw0-C3DPzn_-AN_V6Qww',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Insight into the 2050 and 2100 Flood Risk Predicted in New York City',
    byline: 'By Houpu.Li',
    footer: 'Source: Mapbox GLJS. <br> Created using <a href="https://docs.mapbox.com/mapbox-gl-js/example/" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Research Background',
            image: 'images/2050-Flood-Map-East-Village.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-74.00879, 40.70759],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f (1)',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    // layer: 'pluto-hous-type-master-featu-7b5u7f (1)',
                    // opacity: 0.5,
                    // duration: 500
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Flood Risk of Red Hook Houses',
            image: 'images/Image-USA-flood.jpg',
            description: 'The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. Before Hurricane Sandy in 2012, various city reports had outlined the need for increased flood protection, projecting floods as high as 5 feet during storm surges. NYCHA officials responded that they did not anticipate storm surges that strong.When Hurricane Sandy struck, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that hurt many residents health.',
            location: {
                center: [-74.00879, 40.70759],
                zoom: 15.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f (1)',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    // layer: 'pluto-hous-type-master-featu-7b5u7f (1)',
                    // opacity: 0.3
                }
            ]
        }
    ]
};
