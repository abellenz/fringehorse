(function() {
  'use strict';

  angular
    .module('prototypehorse')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log, webDevTec) {

    $log.info('I hate you');
    $(function() {
      var $youTubeIframes = $('.youtubeIframe');
      var fuck = $('#fuck');
      console.log(fuck);
      $youTubeIframes.each( function(index, value) {
        var width = $(this).width();
        $(this).css('height', (0.5625 * width));
      } );

      // for (i=0; i < youTubeIframes.length; i++) {
      //   var width = youTubeIframes[i].width();
      //   youTubeIframes[i].css('height', (0.5625 * width));
      // }
    });

  }
})();
