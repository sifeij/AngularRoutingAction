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


// Define our root-level controller for the application.
App.controller(
	"AppController",
	function( $scope, $route, $routeParams ){

		// Update the rendering of the page.
		render = function(){

			// Pull the "action" value out of the
			// currently selected route.
			var renderAction = $route.current.action;

			// Also, let's update the render path so that
			// we can start conditionally rendering parts
			// of the page.
			var renderPath = renderAction.split( "." );

			var username = ($routeParams.username || "");

			// Reset the booleans used to set the class for the navigation.
			var isHome = (renderPath[ 0 ] == "home");
			var isFriends = (renderPath[ 0 ] == "friends");
			var isContact = (renderPath[ 0 ] == "contact");

			// Store the values in the model.
			$scope.renderAction = renderAction;
			$scope.renderPath = renderPath;
			$scope.username = username;
			$scope.isHome = isHome;
			$scope.isFriends = isFriends;
			$scope.isContact = isContact;
		};

		$scope.$on(
			"$routeChangeSuccess",
			function( $currentRoute, $previousRoute ){
				render();
			}
		);
	}
);