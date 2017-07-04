/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .directive('notFeed', notFeed);

  /** @ngInject */
  function notFeed() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl',
      templateUrl: 'app/pages/dash/blurFeed/blurFeed.html'
    };
  }
})();
