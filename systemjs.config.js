/**
 * PLUNKER VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      'main':       'app/app',

      'angular':        'npm:angular@1.6.2/angular.js',
      'angular-route':  'npm:angular-route@1.6.2/angular-route.js',
      'ts':             'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript':     'npm:typescript@2.2.1/lib/typescript.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './app/app.ts',
        defaultExtension: 'ts'
      }
    }
  });
})(this);