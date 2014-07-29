angular.module('showTrack')
  .controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {

  	$scope.registerUser = function() {
		var username = $scope.username;
		var password = $scope.password;

		var data = {
                'username': username,
                'password': password
            };

            console.log("Data " + JSON.stringify(data));

            $http.post('/api/signup', data)
            .success(function(data) {
                console.log("angularjs success");
                window.location = '/login';
            });
	}

}]);