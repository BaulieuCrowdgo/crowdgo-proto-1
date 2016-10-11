'use strict';

/**
 * @ngdoc overview
 * @name crowdgoProto1App
 * @description
 * # crowdgoProto1App
 *
 * Main module of the application.
 */
angular
  .module('crowdgoProto1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/business', {
        templateUrl: 'views/business.html',
        controller: 'BusinessCtrl',
        controllerAs: 'business'
      })
      .when('/investor', {
        templateUrl: 'views/investor.html',
        controller: 'InvestorCtrl',
        controllerAs: 'investor'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
