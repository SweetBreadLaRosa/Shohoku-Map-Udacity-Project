// View
(function() {

    this.View = {

        mapElement: null,

        renderGoogleMap: null,

        createMap: function(mapObject) {

            // grab map id from dom
            this.mapElement = document.getElementById('map');

            // render map object
            console.log('map object', mapObject);
            this.renderGoogleMap = new google.maps.Map(this.mapElement, mapObject || {});
        }
    }

    // using the function call to attach the view to the window so I can grab it globally
}).call(window);