/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .controller('DashboardOverviewCtrl', DashboardOverviewCtrl);

  /** @ngInject */
  function DashboardOverviewCtrl($scope, baConfig, User) {

    $scope.stats={
      Commission: 239,
      Payments: 339,
      Balance: 100
    }


    $scope.Overview= function() {

        User.OverviewSales()
            .success(function(data) {
               console.log(data)
               $scope.SalesOverview=data
               User.OverviewParteners()
                   .success(function(dataParteners) {
                      console.log(dataParteners)
                      $scope.partenersOverview=dataParteners
                      User.OverviewResellers()
                          .success(function(dataResellers) {
                             console.log(dataResellers)
                             $scope.resselersOverview=dataResellers

                             User.OverviewProspects()
                                 .success(function(dataProspects) {
                                    console.log(dataProspects)
                                    $scope.prospectsOverview=dataProspects

                                 })
                                 .error(function(data) {
                                     console.log(data)
                                 })

                          })
                          .error(function(data) {
                              console.log(data)
                          })

                   })
                   .error(function(data) {
                       console.log(data)
                   })
            })
            .error(function(data) {
                console.log(data)
            })
    }



  }
})();
