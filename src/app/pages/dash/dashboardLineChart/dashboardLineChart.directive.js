/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .directive('dashLineChart', dashLineChart);

  /** @ngInject */
  function dashLineChart() {
    return {
      restrict: 'E',
      controller: 'DashLineChartCtrl',
      templateUrl: 'app/pages/dash/dashboardLineChart/dashboardLineChart.html'
    };
  }
})();
