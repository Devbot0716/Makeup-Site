angular.module('app', ['ui.router'])
  .config(function( $stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    //HOME
      .state('home', {
        url: '/home',
        templateUrl: './views/home.html'
      })
    //PORTFOLIO
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: './views/portfolio.html'
      })
    //PRICING
      .state('pricing', {
        url: '/pricing',
        templateUrl: './views/pricing.html'
      })
    //REVIEWS
      .state('reviews', {
        url: '/reviews',
        templateUrl: './views/reviews.html'
      })
    //CONTACT
      .state('contact', {
        url: '/contact',
        templateUrl: './views/contact.html'
      })

      .state('images', {
        url: '/images/:Type',
        templateUrl: './views/images.html',
        controller: 'imagesCtrl'
      })

      // .state('details', {
      //   url: '/details/:id',
      //   templateUrl: './views/details.html',
      //   controller: 'detailsCtrl'
      // })

  });

  // //Portfolio > makeupphotos
  //   .state('makeup_photos', {
  //     url: '/makeup_photos',
  //     templateUrl: './views/makeup_photos.html'
  //   })
  // //Portfolio > hair_photos
  //   .state('hair_photos', {
  //     url: '/hair_photos',
  //     templateUrl: './views/hair_photos.html'
  //   })
  // //Portfolio > before_after_photos
  //   .state('before_after_photos', {
  //     url: '/before_after_photos',
  //     templateUrl: './views/before_after_photos.html'
  //   })
  // //Portfolio > brows_photos
  //   .state('brows_photos', {
  //     url: '/brows_photos',
  //     templateUrl: './views/brows_photos.html'
  //   })
