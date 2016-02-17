(function() {
  'use strict';

  angular
    .module('prototypehorse')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log, webDevTec) {

    $log.info('I hate you');

  }
})();
