agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs19_July_2017__MTUwMDQxODgwMDAwMA==c8fa1c094c7bd76cddf4297f92d5f8da");
agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module('tracker', ['ui.router', 'agGrid']);

module.config(function($stateProvider) {

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl:"views/home.html"
    //     template: '<h1>Home</h1>'
    //    template: '<br><br><h1>{{msg}}</h1><div ng-controller="dssInputCtrl" style="height: 100%;"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
    //    controller: 'dssInputCtrl'

    }
    var dssinputState = {
        name: 'dssinput',
        url: '/dssinput',
        //templateUrl:"views/home.html",
        // template: '<h1>{{msg}}</h1>',
        template: '<br><br><h1>{{msg}}</h1><div ng-controller="dssInputCtrl" style="height: 100%;"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
        controller: 'dssInputCtrl'

    }

    var ecoainputState = {
        name: 'ecoainput',
        url: '/ecoainput',
        template: '<br><br><h1>{{msg}}</h1><div ng-controller="ecoaInputCtrl" style="height: 100%;"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
        //   template: '<h1>{{msg}}</h1>',
        controller: 'ecoaInputCtrl'
    }

    var dssoutputState = {
        name: 'dssoutput',
        url: '/dssoutput',
        //templateUrl:"views/home.html",
        // template: '<h1>{{msg}}</h1>',
        template: '<br><br><h1>{{msg}}</h1><div ng-controller="dssoutputCtrl" style="height: 100%;"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
        controller: 'dssoutputCtrl'

    }

    var ecoaoututState = {
        name: 'ecoaoutput',
        url: '/ecoaoutput',
        template: '<br><br><h1>{{msg}}</h1><div ng-controller="ecoaoutputCtrl" style="height: 100%;"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
        //   template: '<h1>{{msg}}</h1>',
        controller: 'ecoaoutputCtrl'
    }
    $stateProvider.state(homeState);
    $stateProvider.state(dssinputState);
    $stateProvider.state(ecoainputState);
    $stateProvider.state(dssoutputState);
    $stateProvider.state(ecoaoututState);
});

module.controller("dssInputCtrl", function($scope) {
    var columnDefs = [{ headerName: "Trial Number", field: "TrialNumber", enableRowGroup: true,  cellStyle: {'background-color': 'Gainsboro'} },
        { headerName: "Thrptc Area Cdr", field: "ThrptcAreaCdr",enableRowGroup: true, cellStyle: {'background-color': 'Gainsboro'} },
        { headerName: "LY", field: "LY", enableRowGroup: true, cellStyle: {'background-color': 'Gainsboro'} },
        { headerName: "Trial Alias", field: "TrialAlias", enableRowGroup: true, cellStyle: {'background-color': 'Gainsboro'} },
        { headerName: "Cmpnd Desc", field: "CmpndDesc", enableRowGroup: true, cellStyle: {'background-color': 'Gainsboro'} },
        { headerName: "Manager", field: "Manager", enableRowGroup: true, editable: true },
        { headerName: "Data Management System", field: "DataManagementSystem", enableRowGroup: true, editable: true },
        { headerName: "Data Management TPO", field: "DataManagementTPO", enableRowGroup: true, editable: true },
        { headerName: "Data Management TPO Code", field: "DataManagementTPOCode",enableRowGroup: true, editable: true },
        { headerName: "Design Hub CDA", field: "DesignHubCDA", enableRowGroup: true, editable: true, editable: true },
        { headerName: "Clinical Data Associate", field: "ClinicalDataAssociate", enableRowGroup: true, editable: true },
        { headerName: "TPO CDM Name", field: "TPOCDMName", enableRowGroup: true, editable: true },
        { headerName: "Comments", field: "Comments", enableRowGroup: true, editable: true },
        { headerName: "CDI Model", field: "CDIModel", enableRowGroup: true, editable: true },
        { headerName: "CDI Comments", field: "CDIComments", enableRowGroup: true, editable: true },
        { headerName: "eCOA (Y/N)", field: "eCOA",enableRowGroup: true, editable: true } ];

    var rowData = [

    ];



    for(var j=0;j<40000;j++) {


        var i = j%10;
        rowData.push({
            "TrialNumber" : 'TrialNumber' + i,
            "ThrptcAreaCdr" : 'ThrptcAreaCdr' + i,
            "LY" : 'LY' + i,
            "TrialAlias": 'TrialAlias' + i,
            "CmpndDesc": 'CmpndDesc' + i,
            "Manager": 'Manager' + i,
            "DataManagementSystem" : 'DataManagementSystem' + i,
            "DataManagementTPO": 'DataManagementTPO' + i,
            "DataManagementTPOCode": 'DataManagementTPOCode' + i,
            "DesignHubCDA": 'DesignHubCDA' + i,
            "ClinicalDataAssociate": 'ClinicalDataAssociate' + i,
            "TPOCDMName": 'TPOCDMName' + i,
            "Comments": 'Comments' + i,
            "CDIModel": 'CDIModel' + i,
            "CDIComments": 'CDIComments' + i,
            "eCOA": true
        });
    }
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        animateRows: true,
        showToolPanel: true,
        rowGroupPanelShow: 'always',
        editType: 'fullRow',
        onCellValueChanged: function(event) {
            console.log('onCellValueChanged: ' + event.colDef.field + ' = ' + event.newValue);
        },
        onRowValueChanged: function(event) {
            var data = event.data;
            console.log('onRowValueChanged: (' + data.TrialNumber + ')');
        },
        onGridReady: function(event) {
            event.api.sizeColumnsToFit();
        }
    };

    $scope.msg='DSS Trials Input';

});

module.controller("ecoaInputCtrl", function($scope) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];
    var rowData = [
        {make: "RedToyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    $scope.msg='ECOA Trials Input';

});

module.controller("dssoutputCtrl", function($scope) {
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

    $scope.msg='DSS Trials Output';

});

module.controller("ecoaoutputCtrl", function($scope) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];
    var rowData = [
        {make: "RedToyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    $scope.msg='ECOA Trials Output';

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