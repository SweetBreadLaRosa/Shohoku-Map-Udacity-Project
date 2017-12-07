// Model
(function() {

    this.Model = {

        initLocation: { lat: 47.6062, lng: -122.3321 },

        initZoom: 14,

        hoopLocations: [
            {
                title: 'Cal Anderson', location: { lat: 47.6173, lng: -122.3195 }
            },
            {
                title: 'YMCA Downtown', location: { lat: 47.6055, lng: -122.3328 }
            },
            {
                title: 'Seattle Central College', location: { lat: 47.6163, lng: -122.3216 }
            },
            {
                title: 'First Baptist Church Gym', location: { lat: 47.6122, lng: -122.3218 }
            },
            {
                title: 'Seattle Athletics Club', location: { lat: 47.6108, lng: -122.3439 }
            }
        ],

        mapStyles: [
            {
                featureType: 'water',
                stylers: [
                    { color: '#19a0d8' }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'labels.text.stroke',
                stylers: [
                    { color: '#ffffff' },
                    { weight: 6 }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [
                    { color: '#e85113' }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    { color: '#efe9e4' },
                    { lightness: -40 }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'transit.station',
                stylers: [
                    { weight: 9 },
                    { hue: '#e85113' }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.icon',
                stylers: [
                    { visibility: 'off' }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [
                    { lightness: 100 }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {lightness: 100}
                ]
            }
        ],

        markerColor: '8aacb8'
    };

    // using the function call to attach the model to the window so I can grab it globally
}).call(window);