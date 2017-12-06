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
  });
