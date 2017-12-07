// View
(function() {

    this.View = {

        mapElement: null,
        googleMapObject: null,
        markers: [],
        infoWindow: null,

        createMap: function (mapObject) {

            // grab map id from dom
            this.mapElement = document.getElementById('map');

            // render map object
            this.googleMapObject = new google.maps.Map(this.mapElement, mapObject || {});

            // initialize info window
            this.infoWindow = new google.maps.InfoWindow();
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