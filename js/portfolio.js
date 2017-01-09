/*
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/test", {
        templateUrl : "../pages/p_home.html"
    })
     .when("/home", {
        templateUrl : "../pages/index.html"
    })
    .when("/nis", {
        templateUrl : "../pages/nis_index.html"
    })
    .when("/rgi", {
        templateUrl : "../pages/rgi_index.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    })
     .when("/home", {
        templateUrl : "../pages/index.html"
    });
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});*/