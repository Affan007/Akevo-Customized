/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dash/dash.html',
            redirectTo: 'dashboard.form.inputs',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 800,
          },
          // resolve: {
          //           security: function(User) {
          //               return User.getMessage();
          //           }
          //       }
        })

        .state('reseller', {
          url: '/reseller',
          templateUrl: 'app/pages/sides/sides.html',
            redirectTo: '/reseller/resellerMod',
          title: 'Reseller',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1100,
          },
        });

  }

})();
