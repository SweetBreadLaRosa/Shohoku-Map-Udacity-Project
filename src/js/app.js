// anonymous self invoking function to start the app when loaded
(function() {

    this.loadMap = function() {
        ko.applyBindings(new ViewModel());
    };

    this.errorLoadingGoogleApi = function() {
        // todo: show error message
    }

}).call(window);