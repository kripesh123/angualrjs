(function(){
	var app = angular.module('store',[]);
	var gems = [
	{
		name: 'Kitchen Store',
		price:2.90,
		description:'Hello this is Kitchen store',
		canPurchase:false,
		soldOut:false,
		images:[
			{
				full:'ratm.jpg',
				thumb:'gem-01.gif'
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com",
				terms:true,
				color:'red'
			},
			{
				stars: 1,
				body: "This product sucks.",
				author: "tim@hater.com",
				terms:false,
				color:'blue'
			}
		]
	},
	{
		name: 'Mutton Store',
		price:4.90,
		description:'Hello this is Mutton store',
		canPurchase:false,
		soldOut:false,
		images:[
			{	
				full:'audioslave.jpg',
				thumb:'gem-02.gif'
			}
		],
		reviews: [
			{
				stars: 2,
				body: "I like this foo!",
				author: "cris@thomas.com",
				terms:false,
				color:'green'
			},
			{
				stars: 4,
				body: "This foo is hard.",
				author: "tony@hater.com",
				terms:true,
				color:'red'
			}
		]
	}
	]

	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller('PanelController',function(){
		this.tab=0;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	app.controller('ReviewController',function(){
		this.review={};

		this.addReview =function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});

	app.directive('productTitle',function(){
		return {
			restrict:'A',
			templateUrl:'product-title.html'
		};
	})

})();