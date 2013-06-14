/*(function(){

	var Backbone = this.Backbone || require('backbone');

	var Browser = Backbone.Model.extend({

	});

	if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
		define(function(){
			return Browser;
		});
	} else if(typeof module != 'undefined'){
		module.exports = Browser;
	} else {
		window.Browser = Browser;
	}

})();*/

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({});