var config = {
    style:  'mapbox://styles/hl927/clo3ovxgu00f301oz4mjf34nd',
    accessToken: 'pk.eyJ1IjoiaGw5MjciLCJhIjoiY2xtd3NuZ3liMHduZDJqbzZmYzRpZXJocSJ9.sdGw0-C3DPzn_-AN_V6Qww',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The Title Text of this Story',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By Houpu Li',
    para1: 'As the remnants of Hurricane Sandy dissipate over northern Canada, the full scale of the damage left in her wake is becoming apparent. At least 56 people in the U.S. were killed and another 67 in the Caribbean. Cost estimates have ranged as high as $60 billion so far. More than 4 million people remain without power, as crews from across the country converge on the Northeast to restore electricity. Hard-hit sections of New York and New Jersey have begun cleanup, with some restoration of transit and services. The morning commute into Manhattan today was chaotic, as many New Yorkers attempted to return to work by car -- many were turned back due to an order that inbound cars carry at least three people. Collected here are images of Sandy trail of destruction in New York and New Jersey.',
    para2: 'Homes, flooded after Hurricane Sandy made landfall on the southern New Jersey coastline, on October 30, 2012 in Tuckerton, New Jersey.',
    footer: 'Source: Mapbox GLJS. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Research Background',
            image: 'images/Sandy_2012-10-29_2015Z.png',
            description: 'New York was severely affected by Hurricane Sandy on October 29–30, 2012, particularly New York City, its suburbs, and Long Island. Sandy impacts included the flooding of the New York City Subway system, of many suburban communities, and of all road tunnels entering Manhattan except the Lincoln Tunnel. The New York Stock Exchange closed for two consecutive days. Numerous homes and businesses were destroyed by fire, including over 100 homes in Breezy Point, Queens. Large parts of the city and surrounding areas lost electricity for several days. Several thousand people in midtown Manhattan were evacuated for six days due to a crane collapse at Extell One57. Bellevue Hospital Center and a few other large hospitals were closed and evacuated. Flooding at 140 West Street and another exchange disrupted voice and data communication in lower Manhattan.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Flood Risk of Red Hook Houses',
            image: 'images/Image-USA-flood.jpg',
            description: 'The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. Before Hurricane Sandy in 2012, various city reports had outlined the need for increased flood protection, projecting floods as high as 5 feet during storm surges. NYCHA officials responded that they did not anticipate storm surges that strong.When Hurricane Sandy struck, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that hurt many residents health.',
            location: {
                center: [-74.00915, 40.67551],
                zoom: 12,
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 14.84,
              pitch: 48,
              bearing: 142.44,
            },
        }, 
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Final Influence',
            image: 'images/2050-Flood-Map-East-Village.jpg',
            description: 'At least 43 people died in New York City as a result of the storm, and 53 in the state. Thousands of homes and an estimated 250,000 vehicles were destroyed during the storm, and the economic losses in New York City were estimated to be roughly $19 billion with an estimated $32.8 billion required for restoration across the state.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
