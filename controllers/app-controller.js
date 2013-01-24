(function( ng, app ){

	//"use strict"; //take this part out to make it work

	app.controller(
	"AppController",
	function( $scope, $route, $routeParams ) {
		render = function(){
			var renderAction = $route.current.action;
			var renderPath = renderAction.split( "." );
			var username = ($routeParams.username || "");
			var isHome = (renderPath[ 0 ] == "home");
			var isFriends = (renderPath[ 0 ] == "friends");
			var isContact = (renderPath[ 0 ] == "contact");

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

})( angular, App );