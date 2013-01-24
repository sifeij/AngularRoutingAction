var App = angular.module( "App", [] );

App.config(
	function( $routeProvider ) {
		$routeProvider
			.when("/home", { action: "home.default" })
			.when("/friends", { action: "friends.list"})
			.when("/contact/:username", { action: "contact.form" })
			.otherwise({ redirectTo: "/dashboard" });
	}
);