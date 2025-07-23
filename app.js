(function (){
'use Strict';


  angular.module('myFirstApp', [])

  .controller('myFirstController',function($scope) {
       $scope.name = "chandu";
       $scope.sayHello = function () {
          return "Hello chandu!";
       };
  });
})();
