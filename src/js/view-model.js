// View-Model
(function() {

    // create a ViewModel object/class
    var ViewModel = function() {

        // First this should initialize the whole app
        function initializeApp() {

            // Create Map
            View.createMap({
                center: Model.initLocation,
                zoom: Model.initZoom
            });

            // Create Markers
            View.createMarkers(Model.hoopLocations);

            // Add Marker Info Windows
            View.markers.forEach(function(markerItem) {
                markerItem.addListener('click', function() {
                    populateInfoWindow(this, View.infoWindow);
                });
            });

        }

        function populateInfoWindow(marker, infoWindow) {

            // clear marker property if the infoWindow is closed
            infoWindow.addListener('closeclick', function() {
                infoWindow.marker = null;
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