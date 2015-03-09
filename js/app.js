var app = angular.module("gameCollection", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "homeController"
    })
    .when("/wow", {
      templateUrl: "views/wow.html",
      controller: "wowController"
    })
    .when("/warframe", {
      templateUrl: "views/warframe.html",
      controller: "warframeController"
    })
    .otherwise({
      redirectTo: "/"
    });

    $locationProvider.html5Mode(true);
}]);
