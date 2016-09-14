(function() {
  'use strict';

  angular.module('module1Solution', [])
    .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    $scope.dishes = "";

    $scope.check = function () {
      console.log($scope.dishes);
      if ($scope.dishes == "") {
        $scope.message = "Please enter data first";
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

      if (counter <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }

    };
  }

})();
