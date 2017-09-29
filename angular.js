var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.numberOfNames = 0;
    $scope.nameList= [];
    $scope.errorMessage = "";
    $scope.addNames = function(){
        if ($scope.firstName != "" && $scope.lastName != ""){
            $scope.nameList.push([$scope.firstName, $scope.lastName]);
            $scope.numberOfNames += 1;
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.errorMessage = "";
        }
        else{
            $scope.errorMessage = "The first name and last name field must be filled"
        }
    }
});