angular.module('milestones', ['ui.bootstrap', 'ui.utils', 'ui.router', 'wu.masonry']);

angular.module('milestones').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
        name: 'Dashboard',
        url: '/dashboard',
        views: {
            '@' : {
                templateUrl: 'partial/layout/layout.html',
                controller: function($scope) {
                    $scope.name = "Dashboard";
                }

            },
            'header@dashboard' : { templateUrl: 'partial/header/header.html'},
            'sidebar@dashboard' : { templateUrl: 'partial/sidebar/sidebar.html'},
            'main@dashboard' : {

                templateUrl: 'partial/dashboard/dashboard.html',
                controller: 'DashboardCtrl'},
            'footer@dashboard' : { templateUrl: 'partial/footer/footer.html'}
        }

    });
    $stateProvider.state('categories', {
        url: '/categories',
        views: {
            '@' : {
                templateUrl: 'partial/layout/layout.html',
                controller: function($scope) {
                    $scope.name = "Categories";
                }

            },
            'header@categories' : { templateUrl: 'partial/header/header.html'},
            'sidebar@categories' : { templateUrl: 'partial/sidebar/sidebar.html'},
            'main@categories' : {

                templateUrl: 'partial/categories/categories.html',
                controller: 'CategoriesCtrl'},
            'footer@categories' : { templateUrl: 'partial/footer/footer.html'}
        }

    });
    $stateProvider.state('goals', {
        url: '/goals',
        views: {
            '@' : {
                templateUrl: 'partial/layout/layout.html',
                controller: function($scope) {
                    $scope.name = "Goals";
                }

            },
            'header@goals' : { templateUrl: 'partial/header/header.html'},
            'sidebar@goals' : { templateUrl: 'partial/sidebar/sidebar.html'},
            'main@goals' : {

                templateUrl: 'partial/goals/goals.html',
                controller: 'GoalsCtrl'},
            'footer@categories' : { templateUrl: 'partial/footer/footer.html'}
        }

    });
    $stateProvider.state('milestones', {
        url: '/milestones',
        views: {
            '@' : {
                templateUrl: 'partial/layout/layout.html',
                controller: function($scope) {
                    $scope.name = "Milestones";
                }

            },
            'header@milestones' : { templateUrl: 'partial/header/header.html'},
            'sidebar@milestones' : { templateUrl: 'partial/sidebar/sidebar.html'},
            'main@milestones' : {

                templateUrl: 'partial/milestones/milestones.html',
                controller: 'MilestonesCtrl'},
            'footer@milestones' : { templateUrl: 'partial/footer/footer.html'}
        }

    });
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });



    $stateProvider.state('root', {
        url: '',
        abstract: true,
        views: {
            'header': {
                templateUrl: 'header.html',
                controller: 'HeaderCtrl'
            },
            'footer': {
                templateUrl: 'footer.html',
                controller: 'FooterCtrl'
            }
        }
    });
    $stateProvider.state('root.home', {
        url: '/',
        views: {
            'container@': {
                templateUrl: 'homePage.html'
            }
        }
    });
    $stateProvider.state('root.other', {
        url: '/other',
        views: {
            'container@': {
                templateUrl: 'other.html'
            }
        }
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partial/login/login.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home ');

}).constant('URL', {
    'DOMAIN': 'http://milestonesapi.tehdev.com/public'
});

angular.module('milestones').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
