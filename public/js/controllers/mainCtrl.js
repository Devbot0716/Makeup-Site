angular.module('app')
  .controller('mainCtrl', function($scope, mainSvc){

    $scope.recieveInfo = function(){ //receiving api call data
      mainSvc.getInfo().then(function(response) {
         $scope.style = response.data; //.data
         console.log($scope.style)
      })
    }

    $scope.recieveInfo();

  })
