// anonymous self invoking function to start the app when loaded
(function() {

    this.loadMap = function() {
        {
            new ViewModel();
        }
    };

}).call(window);