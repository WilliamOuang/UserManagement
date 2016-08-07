<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="customersCtrl">

<table >
  <tr ng-repeat="x in names">
    <td>{{ x.name }}</td>
   
  </tr>
</table>
<p>Status : {{statuscode}}</p>
<p>StatusText : {{statustext}}</p>
<p>Status : {{names}}</p>
<p>myWelcome : {{myWelcome}}</p>
</div>

<script>


var app = angular.module('myApp', []);
app.config(function ($routeProvider, $httpProvider) {
	//$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

});
app.config(function($sceDelegateProvider) {
	  $sceDelegateProvider.resourceUrlWhitelist([
	    'http://localhost:3000/**'
	  ]);
	});
app.controller('customersCtrl', function($scope, $http,$log) {
 

    
    $http({
        method : "GET",
        url : "http://localhost:3000/api/users"
    }).then(function mySucces(response) {
    	$log.info("ffffffff");
        $scope.names = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
</script>

</body>
</html>