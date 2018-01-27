# Search Hotels Application

## Features
* ES6 syntax
* Angular 1 and React
* CSS
* Scss
* Stylus
* Autoprefix
* Auto Reload
* Remove `console.log` for production build

## Getting Started

### How it works
Just define some object literals in `config/config.js`

* `port:` Assign port for your project
* `basePath:` Its a path which will have entire project files and folders
* `entryFile:` Define name of file which will import entire project files using `import` or `require`
* `outputJS:` This will be js file which will have all minimized javascript code of project. This file will be generated automatically
* `outputCSS:` CSS file which will have minimized CSS code of project. This file will be generated automatically

### Example
```
port: 1500,
basePath: "public",
entryFile: "./index",
outputJS: "index.min.js",
outputCSS: "index.css"
```

### Installation
* `npm install`
* `npm install webpack-dev-server -g`

### Development
* `npm start`

### Production Build
* `npm run prod`

### Run React
* Install all react dependencies
* Edit `.babelrc` file
```
{
	"presets": ['es2015', 'react']
}
```
* `import` or `require` everything in your entry file by default entry file is `index.js`
* Ready to rock!

### Run Angular 1
* Install all angular dependencies
* `import` or `require` everything in your entry file by default entry file is `index.js`
* Ready to rock!

## Next Release
Next release going to have `typescript`, `elm` and other suggested features.