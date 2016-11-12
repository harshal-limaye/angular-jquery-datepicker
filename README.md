# Angular jQuery Datepicker
A simple directive to use jQuery UI datepicker within your AngularJS applications

## Dependencies
* jQuery
* jQuery UI
* AngularJS

## Install
```
bower install angular-jquery-datepicker
```

## Setup
### Include jQuery UI stylesheet
```
<link rel="stylesheet" type="text/css" href="bower_components/jquery-ui/themes/smoothness/jquery-ui.min.css">
```

### Include jQuery, jQuery UI, AngularJS and angular-jquery-datepicker Scripts
```
<script src="bower_components/jquery/dist/jquery.min.js "></script>
<script src="bower_components/jquery-ui/jquery-ui.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-jquery-datepicker/angular-jquery-datepicker.js"></script>
```

## Usage
### Inject dependency 
```
var app = angular.module('myApp', ['angular-jquery-datepicker']);
```

### Create an input element and use the attribute to initiate the datepicker
```
<input type="text" ngjqdatepicker ng-model="date">
```

### Optionally, you can also use jquery ui parameters
```
<input type="text" ngjqdatepicker ng-model="date" options="options">
```
You can create this options object inside your controller
```
var app = angular.module('app',['angular-jquery-datepicker']);

app.controller('AppCtrl', function($scope){
  $scope.options = {
    dateFormat: 'DD, d  MM, yy'
  }
});
```
## For More Information
jQuery UI documentation: http://api.jqueryui.com/datepicker/
