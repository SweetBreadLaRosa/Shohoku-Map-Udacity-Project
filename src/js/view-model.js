// View-Model
(function() {

    // create a ViewModel object/class
    var ViewModel = function() {

        // First this should initialize the whole app
        function initializeApp() {

            View.createMap({
                center: Model.initLocation,
                zoom: Model.initZoom
            });

        }

        // start the app!
        initializeApp();

    };

    // using the function call to attach the ViewModel to the window so I can grab it globally
    this.ViewModel = ViewModel;

}).call(window);