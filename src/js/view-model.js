// View-Model
(function() {

    // create a ViewModel object/class
    var ViewModel = function() {

        var self = this;

        // or else its undefined in the window
        this.filterAndListLocations = filterAndListLocations;
        this.locationsList = ko.observableArray(Model.hoopLocations.slice(0));
        this.filterSearchText = ko.observable('');
        this.onLocationClick = onLocationClick;
        this.locationAddress = '';

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
                markerItem.addListener('click', displayMarker.bind(this, markerItem));
            });
        }

        function displayMarker(marker) {
                populateInfoWindow(marker, View.infoWindow);
                // make it bounce also haha
                marker.setAnimation(google.maps.Animation.BOUNCE);
        }

        // list and filter locations
        // ids for # and classes are .
        function filterAndListLocations() {
            // grab the text from the dom, grab in the view
            var text = self.filterSearchText();
            var filteredAreas = [];
            var filteredMarkers = [];

            // for loop to match or not?
            for (var i = 0; i < View.markers.length; ++i) {
                if (View.markers[i].locationData.title.toLowerCase().includes(text)) {
                    filteredAreas.push(View.markers[i].locationData);
                    filteredMarkers.push(View.markers[i]);
                }
            }

            // hide first
            View.hideMarkers(View.markers);

            // show the filtered ones
            View.showMarkers(filteredMarkers);

            // filter areas
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

            // lets try adding the address we get from 4 square

            console.log('this should be different everytime', marker.locationData.location);
            get4SquareLocationData(
                marker.locationData.location,
                marker.locationData.title,
                function(data) {
                    infoWindow.setContent('<div>' + data.name + '</div><br><div>' + 'Address: ' + data.location.address + '</div>');
                    infoWindow.open(View.googleMapObject, marker);
            });

            if (infoWindow.marker) {
                infoWindow.marker.setAnimation(null);
            }

            infoWindow.marker = marker;
        }

        function onLocationClick(title) {
            for (var i = 0; i < View.markers.length; ++i) {
                if (View.markers[i].locationData.title === title) {
                    displayMarker(View.markers[i]);
                    return;
                }
            }
        }

        // { lat: 47.6173, lng: -122.3195 } testing

        // foursquare time!
        function get4SquareLocationData(location, name, callback) {
            $.ajax({
                url: buildUrlForAjaxReq(location, name),
                dataType: 'json',
                async: true,
                success: function (data) {
                    console.log('success', data.response.venues[0]);
                    callback(data.response.venues[0]);
                },
                error: function (e) {
                    console.log('error in ajax req', JSON.stringify(e));
                    callback = null;
                }
            });
        }

        function buildUrlForAjaxReq(latlng, name) {
            return 'https://api.foursquare.com/v2/venues/search?' +
            'll=' + latlng.lat + ',' + latlng.lng +
            '&intent=match&name=' + name +
            '&client_id=JX12DKPHUV2M2MFYK14QO50JMNLWCDPLHMO4EAQ3YON5EZSS' +
            '&client_secret=JXJBAZ4AOCPWRPCY4JNSUCTXM4A54ZLUI0I0Y1B0BV04H3HI' +
            '&v=20170801&m=foursquare'
        }

        // created vm class in order to invoke when loaded
        initializeApp();

    };

    // using the function call to attach the ViewModel to the window so I can grab it globally
    this.ViewModel = ViewModel;

}).call(window);