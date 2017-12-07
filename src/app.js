// anonymous self invoking function to start the app when loaded
(function() {
    this.loadMap = function () {
        {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 47.6062, lng: -122.3321},
                zoom: 14
            });
        }
    }
})();