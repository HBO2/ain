(function() {
    'use strict';

    angular
        .module('app.examples.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/authentication');

        $stateProvider
        .state('authentication', {
            abstract: true,
            templateUrl: 'app/examples/authentication/layouts/authentication.tmpl.html'
        })
        .state('triangular.admin-default.login', {
            url: '/login',
            templateUrl: 'app/examples/authentication/login/login.tmpl.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.signup', {
            url: '/signup',
            templateUrl: 'app/examples/authentication/signup/signup.tmpl.html',
            controller: 'SignupController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.lock', {
            url: '/lock',
            templateUrl: 'app/examples/authentication/lock/lock.tmpl.html',
            controller: 'LockController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.forgot', {
            url: '/forgot',
            templateUrl: 'app/examples/authentication/forgot/forgot.tmpl.html',
            controller: 'ForgotController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.profile', {
            url: '/profile',
            templateUrl: 'app/examples/authentication/profile/profile.tmpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'MENU.AUTH.AUTH',
            icon: 'icon-person',
            type: 'dropdown',
            priority: 4.1,
            children: [{
                name: 'MENU.AUTH.LOGIN',
                state: 'triangular.admin-default.login',
                type: 'link'
            },{
                name: 'MENU.AUTH.SIGN_UP',
                state: 'triangular.admin-default.signup',
                type: 'link'
            },{
                name: 'MENU.AUTH.FORGOT',
                state: 'triangular.admin-default.forgot',
                type: 'link'
            },{
                name: 'MENU.AUTH.LOCK',
                state: 'triangular.admin-default.lock',
                type: 'link'
            },{
                name: 'MENU.AUTH.PROFILE',
                state: 'triangular.admin-default.profile',
                type: 'link'
            }]
        });
    }
})();
