agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs19_July_2017__MTUwMDQxODgwMDAwMA==c8fa1c094c7bd76cddf4297f92d5f8da");

agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module('helloworld', ['agGrid']);



module.controller("GreenCtrl", function($scope) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];
    var rowData = [
        {make: "GreenToyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

});




//var myApp = angular.module('helloworld', ['ui.router', 'agGrid']);


// agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs19_July_2017__MTUwMDQxODgwMDAwMA==c8fa1c094c7bd76cddf4297f92d5f8da");
// agGrid.initialiseAgGridWithAngular1(angular);
// var myApp = angular.module('helloworld', ['agGrid']);

// myApp.config(function($stateProvider) {
//     var helloState = {
//         name: 'hello',
//         url: '/hello',
//      //   templateUrl:"views/home.html",
//         template: '<br><br><h1>uu</h1><div ng-controller="GreenCtrl"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
//         controller: 'GreenCtrl'
//
//     }
//
//     var aboutState = {
//         name: 'about',
//         url: '/about',
//         templateUrl:"views/red.html",
//         controller: 'RedCtrl'
//     }
//
//     $stateProvider.state(helloState);
//     $stateProvider.state(aboutState);
// });

// myApp.controller('GreenCtrl', function($scope) {
//     var columnDefs = [
//         {headerName: "Make", field: "make"},
//         {headerName: "Model", field: "model"},
//         {headerName: "Price", field: "price"}
//     ];
//     var rowData = [
//         {make: "Toyota", model: "Celica", price: 35000},
//         {make: "Ford", model: "Mondeo", price: 32000},
//         {make: "Porsche", model: "Boxter", price: 72000}
//     ];
//     $scope.gridOptions = {
//         columnDefs: columnDefs,
//         rowData: rowData
//     };
//
// });

// myApp.controller('RedCtrl', function($scope, $http) {
//
//     var columnDefs = [
//         {headerName: "TrialNumber", field: "TrialNumber"},
//         {headerName: "TrialAlias", field: "TrialAlias"},
//         {headerName: "LY", field: "LY"}
//     ];
//
//     $scope.gridOptions
//         = {
//         columnDefs: columnDefs
//     };
//
//     var rowData = [];
//
//     var request = $http.get('/dssdata');
//     request.success(function(data) {
//         $scope.data = data;
//         $scope.gridOptions.api.setRowData(data);
//     });
//     request.error(function(data){
//         console.log('Error: ' + data);
//     });
/*
    var rowData = [];

    var request = $http.get('/dssdata');
    request.success(function(data) {
        $scope.data = data;
        $scope.gridOptions.api.setRowData(data);
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
*/
//});
/*
// if you're using ag-Grid-Enterprise, you'll need to provide the License Key before doing anything else
// not necessary if you're just using ag-Grid
agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs19_July_2017__MTUwMDQxODgwMDAwMA==c8fa1c094c7bd76cddf4297f92d5f8da");
agGrid.initialiseAgGridWithAngular1(angular);


var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope, $http) {


    var columnDefs = [
        {headerName: "TrialNumber", field: "TrialNumber"},
        {headerName: "TrialAlias", field: "TrialAlias"},
        {headerName: "LY", field: "LY"}
    ];

    $scope.gridOptions
        = {
        columnDefs: columnDefs
    };

    var rowData = [];

    var request = $http.get('/dssdata');
    request.success(function(data) {
        $scope.data = data;
        $scope.gridOptions.api.setRowData(data);
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });




});

*/