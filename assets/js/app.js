(function () {
    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [ ];

        $http.get('/assets/js/product.json').then(function(success){
        	store.products = success.data;
        },function(error){
        	alert(error.statusText)
        });
    }]);

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();