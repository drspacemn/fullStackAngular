app.controller('mainController', ['$scope', '$http', 'mainFactory', function($scope, $http, mainFactory){
	$scope.view = {};
	$scope.view.test = 'Hello World';
	$scope.view.test2 = mainFactory.all().then(function(data){
		$scope.view.arr = data.data.pirates_response;
	});
}])
