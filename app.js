(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";

    $scope.check = function () {
      console.log($scope.dishes);
      if ($scope.dishes == "") {
        $scope.message = "Please enter data first";
        $scope.style = {"border-color":"red"};
        return;
      }

      var dishes = $scope.dishes.split(',');

      var counter = 0;
      for (var i in dishes) {
        console.log(dishes[i]);
        if (dishes[i] != "") {
          counter++;
        }
      }

      $scope.style = {"border-color":"green"};
      if (counter <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }

    };
  }

})();
