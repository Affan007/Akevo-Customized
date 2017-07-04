/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      scope: {
          ngSrc: "@", //Text Binding
        },
        controller: function($scope, User,$window,$http,$location) {
           $scope.logOut = function() {
          var getObject=function(key) {
    				return JSON.parse($window.sessionStorage[key] || '{}');
    			};
          var ServerAdress = 'http://kubox-api-dev.azurewebsites.net';

          $scope.recivedData=getObject('encrypteddata');
          $scope.token=$scope.recivedData;
          $http.get(ServerAdress+'/user/logout',{
           headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':$scope.token}
         }).success(function(data){
           console.log(data);
           sessionStorage.removeItem('encrypteddata');
           $location.path('/');
         });
       }



      //     $scope.logOut = function() {
      //
      //     User.logOut()
      //         .success(function(data) {
      //            console.log(data)
      //
      //         })
      //         .error(function(data) {
      //             console.log(data)
      //         })
      // }
        },
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();
