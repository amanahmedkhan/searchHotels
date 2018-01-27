// HTMLs Pages
import './index.html'

// JS
import './assets/scripts/functions'

// CSS
import './assets/stylus/app.styl'

// Angular 1
import angular from 'angular'
import routes from './routes'
import searchForm from './components/searchForm/'
import searchHotel from './components/hotels/'
const angularRoute = require('angular-route')
const app = angular.module('hotalsApp', [angularRoute])
	.component('searchForm', searchForm)
	.component('searchHotel', searchHotel)

// Route
routes(app)