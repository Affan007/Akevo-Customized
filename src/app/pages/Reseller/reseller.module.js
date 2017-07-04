(function () {
  'use strict';

  angular.module('BlurAdmin.sides.reseller', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('reseller.resellerMod', {
        url: '/resellerMod',
        templateUrl: 'app/pages/Reseller/reseller.html',
          title: 'Summary',
          sidebarMeta: {
            order: 10,
          },
        controller: 'resellerCtrl'
    })
    .state('reseller.addReseller', {
        url: '/addReseller',
        templateUrl: 'app/pages/Reseller/addReseller.html',
          title: 'Add New Reseller',
          sidebarMeta: {
            order: 11,
          },
        controller: 'resellerCtrl'
    })
  }

})();
