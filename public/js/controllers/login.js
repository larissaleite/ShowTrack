angular.module('showTrack')
  .controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {

  	$scope.login = function() {
		var username = $scope.username;
		var password = $scope.password;

		var data = {
                'username': username,
                'password': password
            };

            console.log("Data " + JSON.stringify(data));

            $http.post('/api/login', data)
            .success(function(data) {
                console.log("angularjs success");
                console.log(data);
                if (!data.length)
                	window.location = '/login';
                else
                	window.location = '/home';
            });
	}

}]);