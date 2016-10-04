angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController ($scope) {
    $scope.userRows = 12;
    $scope.userCols = 12;

    $scope.getRows = function (){
        return R.range(1, $scope.userRows+1);
    }   

    $scope.getCols = function () {
        return R.range(1, $scope.userCols+1);
    }
}



