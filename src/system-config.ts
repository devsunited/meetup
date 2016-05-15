/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  '@ngrx': 'vendor/@ngrx',
  'firebase': 'vendor/firebase/lib/firebase-web.js',
  'angularfire2': 'vendor/angularfire2'
};

/** User packages configuration. */
const materialPackages:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'radio',
  'checkbox'
];
const packages: any = Object.assign(
  {},
  createCustomConfig('@angular2-material',materialPackages),
  {
  '@ngrx/store': {
    format: 'cjs',
    main: 'index.js'
  },
  angularfire2: {
    format: 'cjs',
    main: 'angularfire2.js'
  }
});

function createCustomConfig(packageRoot: string, packages: string[]): any {
  return packages.reduce((packageConfig: any, packageName: string) => {
    packageConfig[`${packageRoot}/${packageName}`] = {
      format: 'cjs',
      main: packageName
    };
    return packageConfig;
  }, {});
}

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/reducers',
  'app/components',
  'app/containers',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
