(function () {
  'use strict';

  angular.module('LunchChecker', [])

 .controller('LunchCheckerController', LunchCheckerController);

 //LunchCheckerController.$injection = ['$scope'];
 function LunchCheckerController ($scope){
   $scope.foods;
   $scope.stateOfBeing;

   $scope.validateFood = function(){
     if($scope.foods == undefined)
      $scope.stateOfBeing = "Enter the data First";
      else {
        var foods = ($scope.foods).split(',');
        var len = foods.length;
        for(var i=0; i<= foods.length-1; i++){
          if(!foods[i] || 0 === foods[i].length)
            len--;
        }

        if(len <= 3)
          $scope.stateOfBeing = "Enjoy!";
        else {
          $scope.stateOfBeing = "Too Much!";
        }
      }
   };

   $scope.feedAjeet = function () {
     $scope.stateOfBeing = "fed";
   };
}

})();
