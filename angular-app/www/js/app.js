'use strict';

var application = angular.module('VNoteBookApp', ['ngRoute']);

application.config( function($routeProvider) {
    $routeProvider
        .when('/bibliotecas', {
            templateUrl: 'templates/libraries.html',
            controller: 'LibrariesController'
        })
        .when('/cuadernos/:libraryId', {
            templateUrl: "templates/notebooks.html",
            controller: 'NotebooksController'
        })
        .when('/cuaderno/:notebookId', {
            templateUrl: "templates/notebook.html",
            controller: "NotebookController"
        })
        .when('/configuracion', {
            templateUrl: 'templates/config.html',
            controller: 'ConfigurationController'
        })
        .otherwise({
            redirectTo: '/bibliotecas'
        });
});