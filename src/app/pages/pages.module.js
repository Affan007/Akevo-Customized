/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    'BlurAdmin.sides.form',
    'BlurAdmin.sides.reseller',
    // 'BlurAdmin.sides.box'
    // 'BlurAdmin.pages.tables',
    // 'BlurAdmin.pages.charts',
    // 'BlurAdmin.pages.maps',
    // 'BlurAdmin.pages.profile'

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/signin');
//     $urlRouterProvider.otherwise( function($injector) {
//   var $state = $injector.get("$state");
//   $state.go('/signin');
// });

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'dashboard',
    //   icon: 'ion-document',
    //   url: '/dashboard',
    //   templateUrl: 'app/pages/tickets/tickets.html',
    //     sidebarMeta: {
    //       order: 10,
    //     },
    //     // resolve: {
    //     //     security: function(User,$location) {
    //     //         //  return User.SetUser();
    //     //         if(User.SetUser=='Owner'){
    //     //           $location.path('/supportTickets');
    //     //           title:''
    //     //         }
    //     //         else{
    //     //           $location.path('/');
    //     //         }
    //     //
    //     //         // console.log ();
    //     //     }
    //     // },
    //   controller: 'ticketsCtrl'
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Menu Level 1',
    //   icon: 'ion-ios-more',
    //   subMenu: [{
    //     title: 'Menu Level 1.1',
    //     disabled: true
    //   }, {
    //     title: 'Menu Level 1.2',
    //     subMenu: [{
    //       title: 'Menu Level 1.2.1',
    //       disabled: true
    //     }]
    //   }]
    // });
  }

})();
