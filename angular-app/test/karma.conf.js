// Karma configuration
// Generated on Thu May 14 2015 00:01:04 GMT-0500 (Hora est. Pacífico, Sudamérica)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/lib/angular/angular.min.js',
      'www/lib/angular-route/angular-route.min.js',
      'www/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/lib/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js',
      'www/lib/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js',
      'www/js/**/*.js',
      'test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
