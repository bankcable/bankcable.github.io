const app = angular.module('myApp', ['ngRoute']);
app.config(($routeProvider) => {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/profile.html'
		})
		.when('/SignIn', {
			templateUrl: 'templates/signin.html'
		});
});

$(document).ready(() => {
	$('.navbar-nav>li>a').on('click', () => {
		$('.navbar-collapse').collapse('hide');
	});
});