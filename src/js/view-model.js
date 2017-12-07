// View-Model
(function() {

    // create a ViewModel object/class
    var ViewModel = function() {

        // First this should initialize the whole app
        function initializeApp() {

            // Create Map
            View.createMap({
                center: Model.initLocation,
                zoom: Model.initZoom,
                styles: Model.mapStyles
            });

            // Create Markers
            View.createMarkers(Model.hoopLocations);

            // Add Marker Info Windows
            View.markers.forEach(function(markerItem) {
                markerItem.addListener('click', function() {
                    populateInfoWindow(this, View.infoWindow);
                    // make it bounce also haha
                    toggleBounce(markerItem);
                });
            });
        }

        function toggleBounce(marker) {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        function populateInfoWindow(marker, infoWindow) {

            // clear marker property if the infoWindow is closed
            infoWindow.addListener('closeclick', function() {
                infoWindow.marker = null;
                infoWindow.marker.animation = null;
            });

            // add title of court to content string and render in UI
            infoWindow.setContent('<div>' + marker.title + '</div>');
            infoWindow.open(View.googleMapObject, marker);
        }

        // created vm class in order to invoke when loaded
        initializeApp();

    };

    // using the function call to attach the ViewModel to the window so I can grab it globally
    this.ViewModel = ViewModel;

}).call(window);