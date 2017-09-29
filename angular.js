var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstNameList= [];
    $scope.lastNameList= [];
    $scope.errorMessage = "";
    $scope.addNames = function(){
        if ($scope.firstName != "" && $scope.lastName != ""){
            $scope.firstNameList.push($scope.firstName);
            $scope.lastNameList.push($scope.lastName);
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.errorMessage = "";
        }
        else{
            $scope.errorMessage = "The first name and last name field must be filled"
        }
    }
});