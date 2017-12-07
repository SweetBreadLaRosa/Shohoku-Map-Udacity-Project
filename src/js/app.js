// anonymous self invoking function to start the app when loaded
(function() {

    this.loadMap = function () {
        {
            map = new google.maps.Map(document.getElementById('map'), {
                center: Model.initLocation,
                zoom: Model.initZoom
            });
        }
    }
})();