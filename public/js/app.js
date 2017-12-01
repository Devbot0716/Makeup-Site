angular.module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider)=>{

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('intro', {
        url: '/intro',
        templateUrl: './views/intro.html'
      })

      .state('home', {
        url: '/home',
        templateUrl: './views/home.html'
      })
  });
