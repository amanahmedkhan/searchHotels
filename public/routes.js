export default myApplication =>
myApplication.config(($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true)
    $routeProvider
    .when('/', {
        templateUrl: './views/home.html'
    })
    .when('/hotels', {
        templateUrl: './views/search-hotel.html'
    })
})