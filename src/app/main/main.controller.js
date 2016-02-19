(function() {
  'use strict';

  angular
    .module('prototypehorse')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $log, $window, webDevTec) {

    $log.info('I hate you');
    var reFuckinSize = function() {
      $(function() {
        var $youTubeIframes = $('.youtubeIframe');
        $youTubeIframes.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.5625 * width));
        });
      });
    };
    reFuckinSize();
    $(window).resize(function(){
      $scope.$apply(function(){
        reFuckinSize();
      });
    });
  }
})();
