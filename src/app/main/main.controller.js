(function() {
  'use strict';

  // don't even think about ading dependencies here - instead use index.module.js - fuck you
  angular
    .module('prototypehorse' )
    .controller('MainController', MainController)
    .controller('GalleryCtrl', function ($scope, Lightbox) {
      $scope.images = [
        {
          'url': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Kamp_Alexisdorf_3.jpg',
          'thumbUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kamp_Alexisdorf_3.jpg/120px-Kamp_Alexisdorf_3.jpg'
        },

      ];

      $scope.Lightbox = Lightbox;
    });

  /** @ngInject */
  function MainController($scope, $timeout, $log, $window) {

    $scope.grid = false;

    $log.info('I hate you');

    $log.info('fuck you');

  }
})();
