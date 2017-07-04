/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .directive('dashOverview', dashOverview);

  /** @ngInject */
  function dashOverview() {
    return {
      restrict: 'EA',
      controller: 'DashboardOverviewCtrl',
      templateUrl: 'app/pages/dash/dashOverview/dashboardOverView.html'
    };
  }
})();
