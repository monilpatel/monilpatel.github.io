//$(document).ready(function () {
//    $('#toggle').click(function () {
//        $(this).toggleClass('active');
//        $('#fullnav').addClass('open');
//        //$('.navbar').toggleClass('off');
//
//    });
//    
//    
//    $('#close_menu').click(function(){
//        $('#fullnav').removeClass('open');
//    })
//});
//


$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 768) {
        $(".navbar").removeClass("off");
        $("#fullnav").removeClass("open");

    }
});


var app = angular.module("myApp", ["ngRoute"]);


app.controller('profileCtrl', function ($scope) {
    $scope.title = "Profile "
})

.controller('MainController', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.class = "close";
    $scope.toggleShade = function () {
        console.log($scope.class);
        if ($scope.class === "open") {
            $scope.class = "close";
        } else {
            $scope.class = "open";
        }
    }

    $scope.initPhotos = function () {
//        function getRandomSize(min, max) {
//            return Math.round(Math.random() * (max - min) + min);
//        }
//
//        for (var i = 0; i < 2; i++) {
//            var width = getRandomSize(200, 400);
//            var height = getRandomSize(200, 400);
//            $('#photos').append('<img src="//www.lorempixel.com/' + width + '/' + height + '/cats" alt="pretty kitty">');
//        }

    }

})

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../pages/profile.html"
            , controller: "profileCtrl"
        })
        .when("/profile", {
            templateUrl: "../pages/profile.html"
        })
        .when("/portfolio", {
            templateUrl: "../pages/portfolio_index.html"
        })
        .when("/resume", {
            templateUrl: "../pages/resume.html"
        })

});

app.run(function ($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
});