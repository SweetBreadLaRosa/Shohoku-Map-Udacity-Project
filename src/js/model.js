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
        ]
    };

    // using the function call to attach the model to the window so I can grab it globally
}).call(window);