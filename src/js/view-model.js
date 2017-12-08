// View-Model
(function() {

    // create a ViewModel object/class
    var ViewModel = function() {

        var self = this;

        // or else its undefined in the window
        this.filterAndListLocations = filterAndListLocations;
        this.locationsList = ko.observableArray(Model.hoopLocations.slice(0));
        this.filterSearchText = ko.observable('');

        // First this should initialize the whole app
        function initializeApp() {

            // Create Map
            View.createMap({
                center: Model.initLocation,
                zoom: Model.initZoom,
                styles: Model.mapStyles
            });

            // add closeclick event
            View.infoWindow.addListener('closeclick', function() {
                if (View.infoWindow.marker) {
                View.infoWindow.marker.setAnimation(null);
                }
                View.infoWindow.marker = null;
            });

            // Create Markers
            View.createMarkers(Model.hoopLocations);

            // Add Marker Info Windows
            View.markers.forEach(function(markerItem) {
                markerItem.addListener('click', function() {
                    populateInfoWindow(this, View.infoWindow);
                    // make it bounce also haha
                    markerItem.setAnimation(google.maps.Animation.BOUNCE);
                });
            });
        }

        // list and filter locations
        // ids for # and classes are .
        function filterAndListLocations() {
            // grab the text from the dom, grab in the view
            var text = self.filterSearchText();
            var filteredAreas = [];

            // for loop to match or not?
            for (var i = 0; i < Model.hoopLocations.length; ++i) {
                if (Model.hoopLocations[i].title.toLowerCase().includes(text)) {
                    filteredAreas.push(Model.hoopLocations[i]);
                }
            }
            self.locationsList(filteredAreas);
        }

        function populateInfoWindow(marker, infoWindow) {

            // clear marker property if the infoWindow is closed
            infoWindow.addListener('closeclick', function() {
                if (infoWindow.marker) {
                    infoWindow.marker.setAnimation(null);
                }
                infoWindow.marker = null;
            });

            // add title of court to content string and render in UI
            // todo: maybe we should move this to the view
            infoWindow.setContent('<div>' + marker.title + '</div>');
            infoWindow.open(View.googleMapObject, marker);

            if (infoWindow.marker) {
                infoWindow.marker.setAnimation(null);
            }

            infoWindow.marker = marker;
        }

        // created vm class in order to invoke when loaded
        initializeApp();

    };

    // using the function call to attach the ViewModel to the window so I can grab it globally
    this.ViewModel = ViewModel;

}).call(window);