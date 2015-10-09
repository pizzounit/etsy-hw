// the router

import Backbone from "backbone";
import Listing from "./models/listing.js";
import HomeView from "./views/homeView.js";


var Router = Backbone.Router.extend({
	routes: {
		"": "showHome",
		"details/:id": "showDetails",
	},

	initialize: function () {
		console.log("initialize");
		Backbone.history.start();
	},

	showHome: function () {
		let listing = new Listing();
		let homeView = new HomeView({ model: listing});
		homeView.render();
	},

	showDetails: function () {
		console.log("showDetails");
	}

});
export default Router;
