angular.module("script1", ["script2"])
.controller("Script1Ctrl", ["$scope", function($scope) {
    $scope.message = "Succesfully asynchronously ootstrapped";
}]);