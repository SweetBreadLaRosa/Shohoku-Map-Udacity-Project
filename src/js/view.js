// View
(function() {

    this.View = {

        mapElement: null,
        googleMapObject: null,
        markers: [],
        infoWindow: null,
        styles: null,

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
                    animation: google.maps.Animation.DROP,
                    icon: this.createMarkerImage(Model.markerColor)
                });

                //to help link marker to filtered list
                marker.locationData = locationsCollection[i];

                // push into markers array
                this.markers.push(marker);
            }
        },

        createMarkerImage: function (color) {
            return new google.maps.MarkerImage(
                'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ color +
                '|40|_|%E2%80%A2',
                new google.maps.Size(26, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34),
                new google.maps.Size(26, 34));
        },

        showMarkers: function (arrayOfMarkers) {
            for(var i = 0; i < arrayOfMarkers.length; ++i) {
                arrayOfMarkers[i].setVisible(true);
            }
        },

        hideMarkers: function (arrayOfMarkers) {
            for(var i = 0; i < arrayOfMarkers.length; ++i) {
                arrayOfMarkers[i].setVisible(false);
            }
        }

        // going to need to hide and show markers as well
    }

    // using the function call to attach the view to the window so I can grab it globally
}).call(window);