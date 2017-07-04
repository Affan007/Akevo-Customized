/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.signin')
      .controller('SignInCtrl', SignInCtrl);
  function SignInCtrl($scope, $state, $window, $timeout,User,$location) {
    console.log("hi");


    $scope.Login = function() {
        var userdata={
          'username': $scope.UserName,
          'password': $scope.Password

        };

        // console.log(userdata);
        User.Login(userdata)
            .success(function(data) {
              // User.SetUser(data.);
                    $location.path('/dashboard');

            })
            .error(function(data) {
                // console.log(data)
            })

  }

    // $scope.Login = function() {
    //
    //   if ($scope.UserName=='Owner'&& $scope.Password=='Owner'){
    //        User.SetUser($scope.UserName);
    //        $location.path('/reseller/resellerMod');
    //   }
    //   else if($scope.UserName=='Partner'&& $scope.Password=='Partner'){
    //      User.SetUser($scope.UserName);
    //   $location.path('/reseller/resellerMod');
    //   }
    //   else if($scope.UserName=='Reseller'&& $scope.Password=='Reseller'){
    //      User.SetUser($scope.UserName);
    //   $location.path('/reseller/resellerMod');
    //   }
    //   else{
    //       $location.path('/signin');
    //   }
    //
    //   }



    }
  /** @ngInject */


})();
