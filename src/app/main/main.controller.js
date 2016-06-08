(function() {
  'use strict';

  angular
    .module('prototypehorse')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $log, $window, webDevTec) {

    $scope.grid = false;

    $log.info('I hate you');
    var reFuckinSize = function() {
      $(function() {
        var $youTubeIframes = $('.youtubeIframe');
        var $mobileIframes = $('.mobileIframe');
        var $fuckHorses = $('.fuckHorse');
        var $smallFuckHorses = $('.smallFuckHorse');
        var $smallFuckHorseTalls = $('.smallFuckHorseTall');
        var $tinyFuckHorses = $('.tinyFuckHorse');
        $youTubeIframes.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.5625 * width));
        });
        $mobileIframes.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.5625 * width));
        });
        $fuckHorses.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.5625 * width));
        });
        $smallFuckHorses.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.75 * width));
        });
        $smallFuckHorseTalls.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.90 * width));
        });
        $tinyFuckHorses.each( function(index, value) {
          var width = $(this).width();
          $(this).css('height', (0.75 * width));
        });
      });
      $log.info('fuck you');
    };

    var runResizer = function() {
      $timeout(function(){
        $log.info('this is awful');
        reFuckinSize();
        runResizer();
      }, 3000);
    };
    runResizer();

    $(window).resize(function(){
      $scope.$apply(function(){
        reFuckinSize();
      });
    });
  }
})();
