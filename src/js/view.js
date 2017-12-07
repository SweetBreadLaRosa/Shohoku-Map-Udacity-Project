// View
(function() {

    this.View = {

        mapElement: null,
        googleMapObject: null,
        markers: [],

        createMap: function (mapObject) {

            // grab map id from dom
            this.mapElement = document.getElementById('map');

            // render map object
            console.log('map object', mapObject);
            this.googleMapObject = new google.maps.Map(this.mapElement, mapObject || {});
        },

        createMarkers: function (locationsCollection) {
            var marker;
            for (var i = 0; i < locationsCollection.length; ++i) {

                var locationPosition = locationsCollection[i].location;
                var locationTitle = locationsCollection[i].title;

                marker = new google.maps.Marker({
                    position: locationPosition,
                    map: this.googleMapObject,
                    title: locationTitle,
                    animation: google.maps.Animation.DROP
                });

                // push into markers array
                this.markers.push(marker);
            }
        }
    }

    // using the function call to attach the view to the window so I can grab it globally
}).call(window);