(function() {
  'use strict';

  angular
    .module('prototypehorse')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
