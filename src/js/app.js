// anonymous self invoking function to start the app when loaded
(function() {

    this.loadMap = function() {
        ko.applyBindings(new ViewModel());
    };

    this.errorLoadingGoogleApi = function() {
        alert('Oooooh No! Google Maps has failed to load. Try reloading the page!');
    }

}).call(window);