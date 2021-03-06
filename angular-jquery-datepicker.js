(function() {
	'use strict';
	var app = angular.module('angular-jquery-datepicker',[])

	app.directive('ngjqdatepicker', function(){
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				options: '='
			},
			link: function(scope, element, attrs, ngModel){
		        scope.defaultOptions = {
		            onSelect: function (date) {
		                scope.$apply(function(){
		                	ngModel.$setViewValue(date);
		                });
		            }
		        };
		        if(scope.options){
		        	scope.defaultOptions = angular.merge(
		        						scope.options,
		        						scope.defaultOptions
		        					);
		        }
		        element.datepicker(scope.defaultOptions);
			}
		}
	});
})();