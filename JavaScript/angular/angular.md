### Hello AngularJS II

In app.js, we created a new module named myApp. A module contains the different components of an AngularJS app.
Then, in index.html we added <body ng-app="myApp">. The ng-app is called a directive. It tells AngularJS that the myApp module will live within the <body> element, termed the application’s scope. In other words, we used the ng-app directive to define the application scope.
In MainController.js we created a new controller named MainController. A controller manages the app’s data. Here we use the property title to store a string, and attach it to $scope.
Then, in index.html, we added <div class="main" ng-controller="MainController">. Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within <div class="main">.
Inside <div class="main"> we accessed $scope.title using {{ title }}. This is called an expression. Expressions are used to display values on the page.
The value of title showed up when we viewed the app in the browser.

### Workflow

Create a module, and use ng-app in the view to define the application scope.
Create a controller, and use ng-controller in the view to define the controller scope.
Add data to $scope in the controller so they can be displayed with expressions in the view.

### Filters

{{ product.price | currency }} renders price of product in currency format (pipe)

AngularJS gets the value of product.price.

It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and “pipes” it to the right.
The filter outputs a formatted currency with the dollar sign and the correct decimal places.
In this way, filters help to separate the content in the controller from its presentation in the view.