// anonymous self invoking function to start the app when loaded
(function() {

    this.loadMap = function() {
        {
            ko.applyBindings(new ViewModel());
        }
    };

}).call(window);