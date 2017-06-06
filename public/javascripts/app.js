


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
        templateUrl:"views/dssinput.html",
        // template: '<h1>{{msg}}</h1>',
        //template: '<br><br><h1>{{msg}}</h1><div ng-controller="dssInputCtrl" style="height: 100%;"> <div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;"></div></div>',
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
    var columnDefs = [{ headerName: "Trial Number", field: "TrialNumber",   minWidth: 120, pinned: true, cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName: "Thrptc Area Cdr", field: "ThrptcAreaCdr",   minWidth: 140,cellStyle: {'background-color': 'rgba(0,255,0,.1)'},enableRowGroup: true },
        { headerName: "LY", field: "LY",  minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1)'},enableRowGroup: true },
        { headerName: "Trial Alias", field: "TrialAlias",  minWidth: 140, cellStyle: {'background-color': 'rgba(0,255,0,.1)'},enableRowGroup: true },
        { headerName: "Cmpnd Desc", field: "CmpndDesc",  minWidth: 140, cellStyle: {'background-color': 'rgba(0,255,0,.1)'},enableRowGroup: true },
        { headerName: "Manager", field: "Manager",  minWidth: 140, editable: true,enableRowGroup: true },
        { headerName: "Data Management System",  minWidth: 190,field: "DataManagementSystem", editable: true,enableRowGroup: true },
        { headerName: "Data Management TPO",  minWidth: 180,field: "DataManagementTPO", editable: true,enableRowGroup: true },
        { headerName: "Data Management TPO Code",  minWidth: 190,field: "DataManagementTPOCode", editable: true,enableRowGroup: true },
        { headerName: "Design Hub CDA",  minWidth: 140,field: "DesignHubCDA", editable: true, editable: true,enableRowGroup: true },
        { headerName: "Clinical Data Associate",  minWidth: 190,field: "ClinicalDataAssociate", editable: true,enableRowGroup: true },
        { headerName: "TPO CDM Name",  minWidth: 140,field: "TPOCDMName", editable: true,enableRowGroup: true },
        { headerName: "Comments",  minWidth: 140,field: "Comments", editable: true,enableRowGroup: true },
        { headerName: "CDI Model",  minWidth: 140,field: "CDIModel", editable: true,enableRowGroup: true },
        { headerName: "CDI Comments",  minWidth: 140,field: "CDIComments", editable: true,enableRowGroup: true },
        { headerName: "eCOA (Y/N)",  minWidth: 140,field: "eCOA", editable: true,enableRowGroup: true, cellEditor: 'select', cellEditorParams: {
            values: ['true', 'false']}  }];



    var rowData =


    [
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAG",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16492
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAJ",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16504
        },
        {
            "ThrptcAreaCdr": "CV",
            "TrialAlias": "I1V-MC-EIBR",
            "CmpndDesc": "Evacetrapib (LY2484595)",
            "TrialNumber": 16167
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H8L-MC-IQBA",
            "CmpndDesc": "None-device only",
            "TrialNumber": 14342
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H8L-MC-IQBE",
            "CmpndDesc": "None-device only",
            "TrialNumber": 14839
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H8L-MC-IQBP",
            "CmpndDesc": "None-device only",
            "TrialNumber": 15044
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-CR-GBDK",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13439
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-IN-B012",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 16164
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBCG",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11991
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBDP",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13990
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBDQ",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13991
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBDY",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 14359
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBGF",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15803
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B001",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15364
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B002",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15367
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B009",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15813
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCM",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11547
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDA",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11373
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDN",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13631
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDZ",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15053
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBGC",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 14171
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBGG",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 16280
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-FH-O307",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 11908
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-FP-B009",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 8818
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-FP-O295",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 9869
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-MC-X302",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 11606
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-SB-O328",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13397
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-US-X320",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 14458
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-CA-O040",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13157
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-EW-B041",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14153
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-JE-DL05",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 16508
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-JE-HMGX",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14375
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-JE-HMHE",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 15726
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-B038",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13496
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-B052",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 15129
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-B056",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 16238
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-I005",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 10854
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-O034",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12498
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X019",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 10676
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X053",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13264
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X055",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13612
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X057",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13812
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X061",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14336
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X063",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14712
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-XB-O024",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11608
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-XM-B042",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14154
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-XM-O054",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14753
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F3Z-CA-O077",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13954
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "H6U-US-O012",
            "CmpndDesc": "Exploratory studies, cns",
            "TrialNumber": 13485
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-BP-O030",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11726
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CA-O029",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11469
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CA-O083",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 16121
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-O039",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12218
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-S125",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13034
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-S133",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14079
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-FR-O046",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12870
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-FR-O056",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13444
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-FR-O076",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15204
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-GH-B015",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14662
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-KL-O049",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13043
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-KL-O068",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14449
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-KL-O074",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15040
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-MC-V156",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14446
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-OE-B017",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15287
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SB-O047",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13030
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SB-O072",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14726
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I1F-MC-RHCA",
            "CmpndDesc": "Ixekizumab",
            "TrialNumber": 16202
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-JE-AMAD",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16172
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAA",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 15039
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAC",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 15829
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAE",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16455
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAF",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16481
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAH",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16491
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I8K-MC-JPDF",
            "CmpndDesc": "BTK Inhibitor (LY3337641)",
            "TrialNumber": 16298
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-EW-GBDL",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 12925
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBCZ",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 12840
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B013",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15811
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCF",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11422
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCI",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11371
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCK",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 12565
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCO",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11552
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCQ",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11555
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCS",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11549
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDG",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13193
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDH",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13194
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDT",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 14142
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDW",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 14361
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDX",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13798
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-AY-O323",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13237
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-GH-O333",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13607
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-JE-CS10",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 14508
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-MC-I042",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 12990
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-MC-X249",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 9055
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-SB-O314",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 12105
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-TW-O322",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13045
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-US-X318",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13067
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-UT-O320",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 12493
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-XM-O098",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13206
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-CA-O037",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13150
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-CA-O039",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13156
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-JE-B043",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14488
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-HMGF",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12866
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-I011",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11601
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-PH-B025",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11856
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-SZ-O035",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12782
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-SZ-O052",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14301
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-HMGO",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12875
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X043",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11691
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X050",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12573
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X052",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13152
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X059",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14152
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X062",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14451
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-UT-O033",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12494
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-AY-JMIW",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14718
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CA-O081",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 16060
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CR-JMIT",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14034
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-JMIP",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13621
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-S128",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13099
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-FR-O045",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12869
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-FR-O075",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15158
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-MC-JMIY",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15386
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SB-O015",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10620
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SB-O070",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14491
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-I016",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11292
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-S126",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13121
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X060",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11062
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBL",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15362
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBO",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15450
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBY",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15805
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBZ",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15804
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPCG",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 16339
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAK",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16505
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6T-MC-AMAL",
            "CmpndDesc": "IL-23 Antibody II (LY3074828)",
            "TrialNumber": 16542
        },
        {
            "ThrptcAreaCdr": "BI",
            "TrialAlias": "I1F-JE-RHAM",
            "CmpndDesc": "Ixekizumab",
            "TrialNumber": 13625
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H8L-MC-IQBD",
            "CmpndDesc": "None-device only",
            "TrialNumber": 14837
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H8L-MC-IQBO",
            "CmpndDesc": "None-device only",
            "TrialNumber": 15043
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-B005",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15604
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-JE-GBGI",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 16457
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B003",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15368
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBCR",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11550
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDD",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11376
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDI",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13195
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDR",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13989
        },
        {
            "ThrptcAreaCdr": "ND",
            "TrialAlias": "I7S-MC-HBEG",
            "CmpndDesc": "D1 Potentiator (LY3154207)",
            "TrialNumber": 16437
        },
        {
            "ThrptcAreaCdr": "ND",
            "TrialAlias": "I8D-MC-AZES",
            "CmpndDesc": "BACE Inhibitor (AZD3293) (LY3314814)",
            "TrialNumber": 16023
        },
        {
            "ThrptcAreaCdr": "ND",
            "TrialAlias": "I8D-MC-AZET",
            "CmpndDesc": "BACE Inhibitor (AZD3293) (LY3314814)",
            "TrialNumber": 16024
        },
        {
            "ThrptcAreaCdr": "ND",
            "TrialAlias": "I8D-MC-AZFD",
            "CmpndDesc": "BACE Inhibitor (AZD3293) (LY3314814)",
            "TrialNumber": 16557
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-CA-O191",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 7357
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-FR-HGMZ",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13080
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-GV-O234",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 8316
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-MC-HGMX",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 12117
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-MC-X311",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 12441
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-CA-O049",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14092
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-CA-O050",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14234
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-CA-O053",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14711
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-EW-HMGQ",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13084
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-KL-B028",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11836
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-KL-B033",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 12667
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X025",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11039
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X037",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 11561
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-US-X064",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14931
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-BP-JMIK",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13069
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-BP-O042",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12640
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-BX-B003",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11286
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-BX-O014",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10498
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CA-O077",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15218
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CR-S131",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13021
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-B012",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13095
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-EW-B014",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14577
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-FR-O067",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14445
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-GH-B019",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15501
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-GH-O048",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13044
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-GH-O079",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15727
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-IT-O060",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13949
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-IT-O061",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13951
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-JE-O062",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14041
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-JE-O064",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14043
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-KL-O080",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15824
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SB-O016",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10627
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SB-O069",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14490
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SZ-O057",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13585
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-I026",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12069
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-I029",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13290
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-S047",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 9031
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X059",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10980
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X073",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12173
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O009",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10050
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O071",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14719
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O085",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 16160
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-XM-O013",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 9902
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPCD",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 16244
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPCF",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 16338
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPCI",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 16341
        },
        {
            "ThrptcAreaCdr": "PD",
            "TrialAlias": "F1D-JE-O339",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 15299
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I1F-MC-B005",
            "CmpndDesc": "Ixekizumab",
            "TrialNumber": 16497
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I1F-MC-RHBN",
            "CmpndDesc": "Ixekizumab",
            "TrialNumber": 15371
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I1F-MC-RHBU",
            "CmpndDesc": "Ixekizumab",
            "TrialNumber": 16126
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I6Q-MC-BIFA",
            "CmpndDesc": "No Lilly Drug",
            "TrialNumber": 14911
        },
        {
            "ThrptcAreaCdr": "AIIMIN",
            "TrialAlias": "I8K-MC-JPDE",
            "CmpndDesc": "BTK Inhibitor (LY3337641)",
            "TrialNumber": 16297
        },
        {
            "ThrptcAreaCdr": "BI",
            "TrialAlias": "I1F-JE-RHAL",
            "CmpndDesc": "Ixekizumab",
            "TrialNumber": 13061
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H8L-MC-IQBF",
            "CmpndDesc": "None-device only",
            "TrialNumber": 14865
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-EW-GBDM",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13598
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-EW-GBDO",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13765
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-KL-B017",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 16445
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B004",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15369
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B010",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15812
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-B016",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15690
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDB",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11374
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDC",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11375
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDE",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 11377
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBDJ",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 13438
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBGA",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15054
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBGB",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 14169
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBGE",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 15361
        },
        {
            "ThrptcAreaCdr": "END",
            "TrialAlias": "H9X-MC-GBGH",
            "CmpndDesc": "Dulaglutide",
            "TrialNumber": 16456
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-CA-O211",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 7963
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-CA-O312",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 12090
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-IT-B038",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 11942
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-JE-CS08",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 14219
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-SB-O331",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 13587
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-SZ-O283",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 10351
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1D-XB-O335",
            "CmpndDesc": "Olanzapine",
            "TrialNumber": 14084
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-AY-O011",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 10397
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-JE-B053",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 15015
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-JE-HMHD",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 15611
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-B037",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13435
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-B040",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14228
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-B044",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 14534
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-I003",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 10626
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-MC-X022",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 10876
        },
        {
            "ThrptcAreaCdr": "NS",
            "TrialAlias": "F1J-SZ-O036",
            "CmpndDesc": "Duloxetine",
            "TrialNumber": 13128
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-BL-O027",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11287
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-CA-O058",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13616
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-IT-O031",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11721
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-MC-B016",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 15235
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-PL-O071",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14694
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-S130",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13258
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X003",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 9302
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X083",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13742
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X087",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14394
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X090",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 16273
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O028",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11392
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O065",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14290
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O066",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14291
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-XM-O020",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12328
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-CR-JPBQ",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15530
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBH",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15252
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I5B-MC-JGDO",
            "CmpndDesc": "Olaratumab",
            "TrialNumber": 15843
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SO-O017",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10743
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-SZ-O006",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 10140
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-I017",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 11397
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-I027",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12172
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-I033",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13834
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X004",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 9344
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X075",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12388
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X076",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 12623
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X086",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14314
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X088",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 16224
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-US-X089",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 16271
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-UT-O003",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 8908
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-XM-O054",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 13227
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "H3E-XM-O073",
            "CmpndDesc": "Pemetrexed",
            "TrialNumber": 14832
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBM",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15417
        },
        {
            "ThrptcAreaCdr": "ONC",
            "TrialAlias": "I3Y-MC-JPBN",
            "CmpndDesc": "Abemaciclib",
            "TrialNumber": 15419
        }
    ];


    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        animateRows: true,
        enableColResize:true,
        enableFilter:true,
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
        {headerName: "Test1", field: "make"},
        {headerName: "Test2", field: "model"},
        {headerName: "Test3", field: "price"}
    ];
    var rowData = [
        {make: "A1", model: "B1", price: 14000},
        {make: "A2", model: "B2", price: 31400},
        {make: "A3", model: "B3", price: 71400}
    ];
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    $scope.msg='ECOA Trials Input';

});

module.controller("dssoutputCtrl", function($scope) {
    var columnDefs = [
        { headerName:'Trial Number', field: "TrialNumber",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName:'Thrptc Area Cde', field: "ThrptcAreaCde",   minWidth: 120,  cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName:'LY', field: "LY",   minWidth: 120,  cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName:'Trial Alias', field: "TrialAlias",   minWidth: 120,  cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName:'Cmpnd Desc',field: "CmpndDesc",   minWidth: 120,  cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName:'DSS Status',field: "DSSStatus",   minWidth: 120,  cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName:'Phase Cde', field: "PhaseCde",   minWidth: 120,   cellStyle: {'background-color': 'rgba(0,255,0,.1)'}, enableRowGroup: true},
        { headerName: 'Pln Entr Trt', field: "PlnEntrTrt",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Cfm Entr Trt', field: "CfmEntrTrt",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Cntrys Pln', field: "CntrysPln",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Sites Pln', field: "SitesPln",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'PA (Fct)', field: "PAFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'PA Act', field: "PAAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'FPV (Fct)', field: "FPVFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'FPV Act', field: "FPVAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'LPV (Fct)', field: "LPVFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'LPV Act', field: "LPVAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Primary Outcome DB Fct', field: "PrimaryOutcomeDBFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Primary Outcome DB Act', field: "PrimaryOutcomeDBAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'DBF Fct', field: "DBFFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'DBF Act', field: "DBFAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'FRC Fct', field: "FRCFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'FRC Act', field: "FRCAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Pub Fct', field: "PubFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Pub Act', field: "PubAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Manager', field: "Manager",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Data Management System', field: "DataManagementSystem",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Data Management TPO', field: "DataManagementTPO",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Data Management TPO Code', field: "DataManagementTPOCode",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Clinical Data Associate', field: "ClinicalDataAssociate",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'TPO CDM Name', field: "TPOCDMName",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Comments', field: "Comments",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'CDI Model', field: "CDIModel",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'CDI Comments', field: "CDIComments",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'MMU Cd', field: "MMUCd",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'DMU Cd', field: "DMUCd",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'FMU Cd', field: "FMUCd",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Reg Category', field: "RegCategory",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Funding', field: "Funding",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'TR Canc Stp Flg', field: "TRCancStpFlg",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Trial Status Desc Cancel/Stop', field: "TrialStatusCancel",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Hld Canc Stp Date', field: "HldCancStpDate",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'CRF Agreement/TG 3 Fct', field: "CRFAgreementTG3Fct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'CRF Agreement/TG 3 Act', field: "CRFAgreementTG3Act",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'CRF Aprvl Fct', field: "CRFAprvlFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'CRF Aprvl Act', field: "CRFAprvlAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Sys in Prod Fct', field: "SysinProdFct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'Sys in Prod Act', field: "SysinProdAct",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'TR Trial Desc', field: "TRTrialDesc",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'TR Critical Path', field: "TRCriticalPath",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'eCOA (Y/N)', field: "eCOA",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'eCOA Vendor', field: "eCOAVendor",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true},
        { headerName: 'eCOA Device Type', field: "eCOADeviceType",   minWidth: 120, cellStyle: {'background-color': 'rgba(0,255,0,.1'}, enableRowGroup: true}
    ];
    var rowData = 
        [
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I",
                "PAAct": "6/30/2005",
                "DBFFct": "11/17/2005",
                "FRCFct": "7/1/2010",
                "PubAct": "1/22/2010",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10050,
                "TrialAlias": "H3E-UT-O009"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/29/2004",
                "DBFFct": "12/6/2005",
                "FRCFct": "NULL",
                "PubAct": "12/18/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10140,
                "TrialAlias": "H3E-SZ-O006"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/2/2004",
                "DBFFct": "4/18/2006",
                "FRCFct": "NULL",
                "PubAct": "9/23/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 10351,
                "TrialAlias": "F1D-SZ-O283"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/7/2004",
                "DBFFct": "6/19/2004",
                "FRCFct": "NULL",
                "PubAct": "5/4/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 10397,
                "TrialAlias": "F1J-AY-O011"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "4/14/2005",
                "DBFFct": "2/14/2006",
                "FRCFct": "1/30/2011",
                "PubAct": "7/12/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10498,
                "TrialAlias": "H3E-BX-O014"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "5/23/2005",
                "DBFFct": "2/11/2009",
                "FRCFct": "7/31/2017",
                "PubAct": "10/31/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10620,
                "TrialAlias": "H3E-SB-O015"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "5/20/2005",
                "DBFFct": "3/26/2007",
                "FRCFct": "NULL",
                "PubAct": "2/28/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 10626,
                "TrialAlias": "F1J-MC-I003"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/30/2005",
                "DBFFct": "12/6/2005",
                "FRCFct": "7/1/2014",
                "PubAct": "4/14/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10627,
                "TrialAlias": "H3E-SB-O016"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/13/2005",
                "DBFFct": "1/18/2006",
                "FRCFct": "3/1/2013",
                "PubAct": "3/8/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 10676,
                "TrialAlias": "F1J-US-X019"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "8/24/2005",
                "DBFFct": "1/9/2006",
                "FRCFct": "NULL",
                "PubAct": "5/22/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10743,
                "TrialAlias": "H3E-SO-O017"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "5/11/2006",
                "DBFFct": "10/10/2006",
                "FRCFct": "NULL",
                "PubAct": "11/28/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 10854,
                "TrialAlias": "F1J-MC-I005"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "8/19/2005",
                "DBFFct": "2/1/2007",
                "FRCFct": "NULL",
                "PubAct": "1/16/2017",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 10876,
                "TrialAlias": "F1J-MC-X022"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I",
                "PAAct": "10/27/2005",
                "DBFFct": "2/4/2009",
                "FRCFct": "NULL",
                "PubAct": "6/10/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 10980,
                "TrialAlias": "H3E-US-X059"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "11/28/2005",
                "DBFFct": "4/18/2006",
                "FRCFct": "NULL",
                "PubAct": "9/30/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11039,
                "TrialAlias": "F1J-US-X025"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "12/1/2005",
                "DBFFct": "6/30/2006",
                "FRCFct": "NULL",
                "PubAct": "10/28/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11062,
                "TrialAlias": "H3E-US-X060"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "5/4/2006",
                "DBFFct": "3/25/2005",
                "FRCFct": "4/24/2013",
                "PubAct": "7/23/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11286,
                "TrialAlias": "H3E-BX-B003"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "10/26/2006",
                "DBFFct": "4/2/2008",
                "FRCFct": "12/3/2011",
                "PubAct": "3/13/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11287,
                "TrialAlias": "H3E-BL-O027"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I",
                "PAAct": "3/30/2006",
                "DBFFct": "4/16/2008",
                "FRCFct": "NULL",
                "PubAct": "7/23/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11292,
                "TrialAlias": "H3E-US-I016"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "7/17/2008",
                "DBFFct": "2/14/2011",
                "FRCFct": "3/14/2012",
                "PubAct": "10/19/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11371,
                "TrialAlias": "H9X-MC-GBCI"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "10/7/2009",
                "DBFFct": "2/8/2010",
                "FRCFct": "4/19/2013",
                "PubAct": "7/15/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11373,
                "TrialAlias": "H9X-MC-GBDA"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "10/6/2009",
                "DBFFct": "3/3/2010",
                "FRCFct": "4/19/2013",
                "PubAct": "7/3/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11374,
                "TrialAlias": "H9X-MC-GBDB"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "1/19/2010",
                "DBFFct": "5/10/2010",
                "FRCFct": "1/17/2013",
                "PubAct": "6/14/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11375,
                "TrialAlias": "H9X-MC-GBDC"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "3/23/2010",
                "DBFFct": "10/27/2010",
                "FRCFct": "4/19/2013",
                "PubAct": "7/11/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11376,
                "TrialAlias": "H9X-MC-GBDD"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III/IV",
                "PAAct": "3/19/2012",
                "DBFFct": "6/20/2012",
                "FRCFct": "2/5/2014",
                "PubAct": "6/10/2014",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11377,
                "TrialAlias": "H9X-MC-GBDE"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IIIB",
                "PAAct": "2/15/2007",
                "DBFFct": "11/19/2007",
                "FRCFct": "7/17/2017",
                "PubAct": "3/31/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11392,
                "TrialAlias": "H3E-UT-O028"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I/II",
                "PAAct": "4/27/2006",
                "DBFFct": "4/10/2007",
                "FRCFct": "NULL",
                "PubAct": "7/23/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11397,
                "TrialAlias": "H3E-US-I017"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "II/III",
                "PAAct": "4/15/2008",
                "DBFFct": "8/27/2008",
                "FRCFct": "4/29/2013",
                "PubAct": "7/9/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11422,
                "TrialAlias": "H9X-MC-GBCF"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "10/17/2006",
                "DBFFct": "5/29/2009",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11469,
                "TrialAlias": "H3E-CA-O029"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "10/13/2009",
                "DBFFct": "3/15/2010",
                "FRCFct": "9/12/2011",
                "PubAct": "5/11/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11547,
                "TrialAlias": "H9X-MC-GBCM"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "8/8/2011",
                "DBFFct": "9/13/2011",
                "FRCFct": "3/13/2012",
                "PubAct": "7/26/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11549,
                "TrialAlias": "H9X-MC-GBCS"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "7/21/2011",
                "DBFFct": "9/20/2011",
                "FRCFct": "2/29/2012",
                "PubAct": "7/17/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11550,
                "TrialAlias": "H9X-MC-GBCR"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "2/11/2011",
                "DBFFct": "3/28/2011",
                "FRCFct": "1/5/2012",
                "PubAct": "8/16/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11552,
                "TrialAlias": "H9X-MC-GBCO"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "8/17/2011",
                "DBFFct": "10/19/2011",
                "FRCFct": "6/12/2012",
                "PubAct": "9/24/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11555,
                "TrialAlias": "H9X-MC-GBCQ"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/22/2006",
                "DBFFct": "5/21/2009",
                "FRCFct": "NULL",
                "PubAct": "4/14/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11561,
                "TrialAlias": "F1J-US-X037"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/20/2006",
                "DBFFct": "4/20/2007",
                "FRCFct": "12/28/2012",
                "PubAct": "5/16/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11601,
                "TrialAlias": "F1J-MC-I011"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "10/8/2006",
                "DBFFct": "9/20/2007",
                "FRCFct": "NULL",
                "PubAct": "8/13/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 11606,
                "TrialAlias": "F1D-MC-X302"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/21/2006",
                "DBFFct": "7/9/2007",
                "FRCFct": "2/2/2011",
                "PubAct": "9/28/2011",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11608,
                "TrialAlias": "F1J-XB-O024"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "8/24/2006",
                "DBFFct": "7/12/2007",
                "FRCFct": "NULL",
                "PubAct": "6/30/2014",
                "DSSStatus": "Trial Cancelled - First Pt. Enter Treatment",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11691,
                "TrialAlias": "F1J-US-X043"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "3/15/2007",
                "DBFFct": "9/11/2008",
                "FRCFct": "NULL",
                "PubAct": "4/30/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11721,
                "TrialAlias": "H3E-IT-O031"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "5/2/2006",
                "DBFFct": "3/31/2008",
                "FRCFct": "NULL",
                "PubAct": "11/30/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 11726,
                "TrialAlias": "H3E-BP-O030"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "4/7/2008",
                "DBFFct": "7/13/2009",
                "FRCFct": "9/3/2013",
                "PubAct": "10/29/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11836,
                "TrialAlias": "F1J-KL-B028"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "4/27/2005",
                "DBFFct": "4/3/2006",
                "FRCFct": "1/25/2013",
                "PubAct": "4/12/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 11856,
                "TrialAlias": "F1J-PH-B025"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/20/2006",
                "DBFFct": "11/14/2007",
                "FRCFct": "1/30/2013",
                "PubAct": "10/8/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 11908,
                "TrialAlias": "F1D-FH-O307"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/20/2006",
                "DBFFct": "2/27/2008",
                "FRCFct": "NULL",
                "PubAct": "5/24/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 11942,
                "TrialAlias": "F1D-IT-B038"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "9/1/2011",
                "DBFFct": "7/26/2012",
                "FRCFct": "11/4/2014",
                "PubAct": "3/28/2015",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 11991,
                "TrialAlias": "H9X-JE-GBCG"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "5/3/2007",
                "DBFFct": "12/1/2008",
                "FRCFct": "NULL",
                "PubAct": "9/4/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12069,
                "TrialAlias": "H3E-US-I026"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/17/2007",
                "DBFFct": "10/28/2008",
                "FRCFct": "NULL",
                "PubAct": "4/29/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 12090,
                "TrialAlias": "F1D-CA-O312"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/21/2007",
                "DBFFct": "4/10/2008",
                "FRCFct": "7/31/2010",
                "PubAct": "8/26/2010",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 12105,
                "TrialAlias": "F1D-SB-O314"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/3/2009",
                "DBFFct": "9/30/2009",
                "FRCFct": "6/12/2013",
                "PubAct": "11/5/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 12117,
                "TrialAlias": "F1D-MC-HGMX"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I/II",
                "PAAct": "6/14/2007",
                "DBFFct": "12/1/2008",
                "FRCFct": "NULL",
                "PubAct": "12/1/2018",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12172,
                "TrialAlias": "H3E-US-I027"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/14/2007",
                "DBFFct": "2/16/2009",
                "FRCFct": "NULL",
                "PubAct": "4/1/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12173,
                "TrialAlias": "H3E-US-X073"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "12/12/2007",
                "DBFFct": "11/27/2008",
                "FRCFct": "1/15/2019",
                "PubAct": "9/28/2019",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12218,
                "TrialAlias": "H3E-EW-O039"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/20/2008",
                "DBFFct": "2/18/2010",
                "FRCFct": "4/30/2015",
                "PubAct": "7/20/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12328,
                "TrialAlias": "H3E-XM-O020"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "10/11/2007",
                "DBFFct": "9/19/2008",
                "FRCFct": "NULL",
                "PubAct": "10/28/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12388,
                "TrialAlias": "H3E-US-X075"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "2/21/2007",
                "DBFFct": "9/1/2009",
                "FRCFct": "NULL",
                "PubAct": "9/27/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 12441,
                "TrialAlias": "F1D-MC-X311"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/19/2006",
                "DBFFct": "4/15/2007",
                "FRCFct": "NULL",
                "PubAct": "7/5/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 12493,
                "TrialAlias": "F1D-UT-O320"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "10/16/2007",
                "DBFFct": "12/12/2011",
                "FRCFct": "NULL",
                "PubAct": "3/27/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12494,
                "TrialAlias": "F1J-UT-O033"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/25/2008",
                "DBFFct": "3/23/2009",
                "FRCFct": "NULL",
                "PubAct": "6/30/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12498,
                "TrialAlias": "F1J-MC-O034"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "II",
                "PAAct": "7/1/2008",
                "DBFFct": "11/17/2008",
                "FRCFct": "4/15/2010",
                "PubAct": "2/27/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 12565,
                "TrialAlias": "H9X-MC-GBCK"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/12/2008",
                "DBFFct": "10/30/2008",
                "FRCFct": "NULL",
                "PubAct": "8/9/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12573,
                "TrialAlias": "F1J-US-X050"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "2/12/2008",
                "DBFFct": "8/8/2008",
                "FRCFct": "NULL",
                "PubAct": "2/10/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12623,
                "TrialAlias": "H3E-US-X076"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "9/24/2007",
                "DBFFct": "9/28/2009",
                "FRCFct": "NULL",
                "PubAct": "11/20/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12640,
                "TrialAlias": "H3E-BP-O042"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/27/2009",
                "DBFFct": "8/31/2009",
                "FRCFct": "3/2/2012",
                "PubAct": "4/9/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12667,
                "TrialAlias": "F1J-KL-B033"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "2/21/2008",
                "DBFFct": "4/26/2010",
                "FRCFct": "NULL",
                "PubAct": "1/23/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12782,
                "TrialAlias": "F1J-SZ-O035"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "II",
                "PAAct": "8/18/2009",
                "DBFFct": "10/28/2009",
                "FRCFct": "1/10/2013",
                "PubAct": "3/14/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 12840,
                "TrialAlias": "H9X-JE-GBCZ"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/26/2010",
                "DBFFct": "11/2/2010",
                "FRCFct": "2/15/2013",
                "PubAct": "4/8/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12866,
                "TrialAlias": "F1J-MC-HMGF"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "9/25/2008",
                "DBFFct": "3/30/2010",
                "FRCFct": "7/23/2014",
                "PubAct": "6/21/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12869,
                "TrialAlias": "H3E-FR-O045"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "9/25/2008",
                "DBFFct": "4/20/2009",
                "FRCFct": "3/30/2014",
                "PubAct": "1/31/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 12870,
                "TrialAlias": "H3E-FR-O046"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/30/2009",
                "DBFFct": "1/18/2010",
                "FRCFct": "5/8/2013",
                "PubAct": "8/13/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 12875,
                "TrialAlias": "F1J-US-HMGO"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "10/30/2009",
                "DBFFct": "8/28/2012",
                "FRCFct": "10/28/2014",
                "PubAct": "2/2/2015",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 12925,
                "TrialAlias": "H9X-EW-GBDL"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/5/2008",
                "DBFFct": "4/8/2009",
                "FRCFct": "NULL",
                "PubAct": "10/1/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 12990,
                "TrialAlias": "F1D-MC-I042"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "8/3/2009",
                "DBFFct": "11/23/2009",
                "FRCFct": "11/28/2014",
                "PubAct": "3/30/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13021,
                "TrialAlias": "H3E-CR-S131"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "7/24/2009",
                "DBFFct": "9/15/2009",
                "FRCFct": "1/26/2015",
                "PubAct": "6/23/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13030,
                "TrialAlias": "H3E-SB-O047"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "5/4/2009",
                "DBFFct": "10/14/2009",
                "FRCFct": "12/18/2013",
                "PubAct": "3/28/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13034,
                "TrialAlias": "H3E-EW-S125"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "8/14/2008",
                "DBFFct": "7/9/2009",
                "FRCFct": "7/10/2013",
                "PubAct": "11/15/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13043,
                "TrialAlias": "H3E-KL-O049"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "8/14/2008",
                "DBFFct": "2/3/2009",
                "FRCFct": "8/1/2014",
                "PubAct": "8/19/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13044,
                "TrialAlias": "H3E-GH-O048"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/4/2007",
                "DBFFct": "4/13/2009",
                "FRCFct": "NULL",
                "PubAct": "10/12/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13045,
                "TrialAlias": "F1D-TW-O322"
            },
            {
                "ThrptcAreaCde": "BI",
                "PhaseCde": "IB",
                "PAAct": "1/25/2010",
                "DBFFct": "5/13/2010",
                "FRCFct": "3/14/2012",
                "PubAct": "8/8/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Ixekizumab",
                "TrialNumber": 13061,
                "TrialAlias": "I1F-JE-RHAL"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "III/IV",
                "PAAct": "7/23/2008",
                "DBFFct": "8/13/2010",
                "FRCFct": "NULL",
                "PubAct": "1/20/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13067,
                "TrialAlias": "F1D-US-X318"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "1/29/2009",
                "DBFFct": "4/7/2009",
                "FRCFct": "9/15/2011",
                "PubAct": "6/7/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13069,
                "TrialAlias": "H3E-BP-JMIK"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/15/2008",
                "DBFFct": "4/27/2009",
                "FRCFct": "3/16/2012",
                "PubAct": "6/23/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13080,
                "TrialAlias": "F1D-FR-HGMZ"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "III/IV",
                "PAAct": "4/8/2009",
                "DBFFct": "3/4/2010",
                "FRCFct": "12/15/2011",
                "PubAct": "5/24/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13084,
                "TrialAlias": "F1J-EW-HMGQ"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "12/15/2008",
                "DBFFct": "4/17/2009",
                "FRCFct": "8/14/2012",
                "PubAct": "3/27/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13095,
                "TrialAlias": "H3E-EW-B012"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "5/28/2009",
                "DBFFct": "10/29/2009",
                "FRCFct": "8/9/2013",
                "PubAct": "12/5/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13099,
                "TrialAlias": "H3E-EW-S128"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "12/18/2008",
                "DBFFct": "10/5/2009",
                "FRCFct": "10/20/2015",
                "PubAct": "10/31/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13121,
                "TrialAlias": "H3E-US-S126"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/31/2009",
                "DBFFct": "1/18/2010",
                "FRCFct": "NULL",
                "PubAct": "6/20/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13128,
                "TrialAlias": "F1J-SZ-O036"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "10/23/2008",
                "DBFFct": "6/11/2009",
                "FRCFct": "NULL",
                "PubAct": "9/2/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13150,
                "TrialAlias": "F1J-CA-O037"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "4/1/2008",
                "DBFFct": "2/5/2009",
                "FRCFct": "NULL",
                "PubAct": "6/10/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13152,
                "TrialAlias": "F1J-US-X052"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "10/23/2008",
                "DBFFct": "8/7/2009",
                "FRCFct": "NULL",
                "PubAct": "8/26/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13156,
                "TrialAlias": "F1J-CA-O039"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "11/26/2008",
                "DBFFct": "7/22/2009",
                "FRCFct": "NULL",
                "PubAct": "5/3/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13157,
                "TrialAlias": "F1J-CA-O040"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IIIB",
                "PAAct": "9/27/2012",
                "DBFFct": "1/25/2013",
                "FRCFct": "2/9/2015",
                "PubAct": "5/11/2015",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13193,
                "TrialAlias": "H9X-MC-GBDG"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III/IV",
                "PAAct": "10/17/2012",
                "DBFFct": "10/19/2016",
                "FRCFct": "6/21/2018",
                "PubAct": "10/2/2018",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13194,
                "TrialAlias": "H9X-MC-GBDH"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IIIB",
                "PAAct": "1/30/2014",
                "DBFFct": "5/28/2014",
                "FRCFct": "11/18/2015",
                "PubAct": "2/24/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13195,
                "TrialAlias": "H9X-MC-GBDI"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/11/2008",
                "DBFFct": "1/1/2009",
                "FRCFct": "11/30/2014",
                "PubAct": "5/13/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13206,
                "TrialAlias": "F1D-XM-O098"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I/II",
                "PAAct": "2/12/2009",
                "DBFFct": "1/26/2010",
                "FRCFct": "NULL",
                "PubAct": "3/30/2017",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13227,
                "TrialAlias": "H3E-XM-O054"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/1/2008",
                "DBFFct": "3/10/2009",
                "FRCFct": "12/12/2011",
                "PubAct": "6/20/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13237,
                "TrialAlias": "F1D-AY-O323"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "6/15/2009",
                "DBFFct": "9/1/2009",
                "FRCFct": "7/17/2017",
                "PubAct": "7/17/2017",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13258,
                "TrialAlias": "H3E-US-S130"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "1/15/2009",
                "DBFFct": "10/2/2009",
                "FRCFct": "NULL",
                "PubAct": "8/31/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13264,
                "TrialAlias": "F1J-US-X053"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "2/26/2009",
                "DBFFct": "9/2/2009",
                "FRCFct": "NULL",
                "PubAct": "12/12/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13290,
                "TrialAlias": "H3E-US-I029"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/5/2009",
                "DBFFct": "3/5/2010",
                "FRCFct": "NULL",
                "PubAct": "2/4/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13397,
                "TrialAlias": "F1D-SB-O328"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/15/2010",
                "DBFFct": "12/15/2010",
                "FRCFct": "4/29/2013",
                "PubAct": "9/20/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13435,
                "TrialAlias": "F1J-MC-B037"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "3/2/2011",
                "DBFFct": "7/22/2011",
                "FRCFct": "6/18/2019",
                "PubAct": "3/31/2020",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13438,
                "TrialAlias": "H9X-MC-GBDJ"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "9/1/2011",
                "DBFFct": "7/24/2012",
                "FRCFct": "3/13/2015",
                "PubAct": "6/23/2015",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13439,
                "TrialAlias": "H9X-CR-GBDK"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/4/2009",
                "DBFFct": "4/10/2010",
                "FRCFct": "2/28/2019",
                "PubAct": "1/29/2020",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13444,
                "TrialAlias": "H3E-FR-O056"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/23/2009",
                "DBFFct": "6/21/2010",
                "FRCFct": "11/30/2012",
                "PubAct": "1/31/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Exploratory studies, cns",
                "TrialNumber": 13485,
                "TrialAlias": "H6U-US-O012"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/25/2011",
                "DBFFct": "3/25/2011",
                "FRCFct": "7/26/2012",
                "PubAct": "7/26/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13496,
                "TrialAlias": "F1J-MC-B038"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "1/21/2010",
                "DBFFct": "11/9/2010",
                "FRCFct": "9/28/2018",
                "PubAct": "12/13/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13585,
                "TrialAlias": "H3E-SZ-O057"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/29/2009",
                "DBFFct": "3/23/2010",
                "FRCFct": "NULL",
                "PubAct": "4/24/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13587,
                "TrialAlias": "F1D-SB-O331"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "6/7/2010",
                "DBFFct": "9/14/2010",
                "FRCFct": "11/10/2011",
                "PubAct": "6/7/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13598,
                "TrialAlias": "H9X-EW-GBDM"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "8/12/2009",
                "DBFFct": "5/30/2011",
                "FRCFct": "12/31/2012",
                "PubAct": "8/21/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 13607,
                "TrialAlias": "F1D-GH-O333"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/23/2009",
                "DBFFct": "6/14/2010",
                "FRCFct": "NULL",
                "PubAct": "1/8/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13612,
                "TrialAlias": "F1J-US-X055"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "NOPHASE",
                "PAAct": "9/10/2009",
                "DBFFct": "9/6/2011",
                "FRCFct": "NULL",
                "PubAct": "8/20/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13616,
                "TrialAlias": "H3E-CA-O058"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "4/27/2010",
                "DBFFct": "11/16/2010",
                "FRCFct": "4/22/2016",
                "PubAct": "7/26/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13621,
                "TrialAlias": "H3E-EW-JMIP"
            },
            {
                "ThrptcAreaCde": "BI",
                "PhaseCde": "IB",
                "PAAct": "7/2/2010",
                "DBFFct": "12/2/2010",
                "FRCFct": "5/9/2013",
                "PubAct": "9/12/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Ixekizumab",
                "TrialNumber": 13625,
                "TrialAlias": "I1F-JE-RHAM"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "II",
                "PAAct": "3/5/2010",
                "DBFFct": "6/22/2010",
                "FRCFct": "4/4/2013",
                "PubAct": "6/21/2013",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13631,
                "TrialAlias": "H9X-MC-GBDN"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/19/2009",
                "DBFFct": "3/1/2010",
                "FRCFct": "NULL",
                "PubAct": "7/15/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13742,
                "TrialAlias": "H3E-US-X083"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "5/5/2010",
                "DBFFct": "11/25/2010",
                "FRCFct": "3/12/2012",
                "PubAct": "8/8/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13765,
                "TrialAlias": "H9X-EW-GBDO"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "12/14/2011",
                "DBFFct": "7/2/2012",
                "FRCFct": "2/9/2017",
                "PubAct": "5/5/2017",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13798,
                "TrialAlias": "H9X-MC-GBDX"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "11/18/2009",
                "DBFFct": "2/25/2011",
                "FRCFct": "NULL",
                "PubAct": "12/7/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13812,
                "TrialAlias": "F1J-US-X057"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "2/2/2010",
                "DBFFct": "7/30/2011",
                "FRCFct": "NULL",
                "PubAct": "4/30/2018",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13834,
                "TrialAlias": "H3E-US-I033"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "8/29/2011",
                "DBFFct": "8/27/2012",
                "FRCFct": "NULL",
                "PubAct": "2/1/2017",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13949,
                "TrialAlias": "H3E-IT-O060"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "11/1/2010",
                "DBFFct": "3/21/2011",
                "FRCFct": "NULL",
                "PubAct": "3/16/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 13951,
                "TrialAlias": "H3E-IT-O061"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "II/III",
                "PAAct": "6/23/2010",
                "DBFFct": "1/31/2014",
                "FRCFct": "NULL",
                "PubAct": "2/12/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 13954,
                "TrialAlias": "F3Z-CA-O077"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "12/21/2010",
                "DBFFct": "2/28/2011",
                "FRCFct": "11/15/2011",
                "PubAct": "5/2/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13989,
                "TrialAlias": "H9X-MC-GBDR"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "11/13/2011",
                "DBFFct": "3/17/2012",
                "FRCFct": "7/28/2014",
                "PubAct": "10/31/2014",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13990,
                "TrialAlias": "H9X-JE-GBDP"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "8/25/2011",
                "DBFFct": "11/19/2011",
                "FRCFct": "3/7/2014",
                "PubAct": "6/6/2014",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 13991,
                "TrialAlias": "H9X-JE-GBDQ"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/8/2011",
                "DBFFct": "2/2/2012",
                "FRCFct": "11/6/2017",
                "PubAct": "2/26/2018",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14034,
                "TrialAlias": "H3E-CR-JMIT"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "7/17/2010",
                "DBFFct": "10/6/2010",
                "FRCFct": "12/31/2016",
                "PubAct": "9/30/2018",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14041,
                "TrialAlias": "H3E-JE-O062"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "2/21/2011",
                "DBFFct": "3/14/2012",
                "FRCFct": "12/31/2020",
                "PubAct": "5/31/2021",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14043,
                "TrialAlias": "H3E-JE-O064"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/20/2011",
                "DBFFct": "12/1/2011",
                "FRCFct": "12/10/2013",
                "PubAct": "5/8/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14079,
                "TrialAlias": "H3E-EW-S133"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "4/30/2009",
                "DBFFct": "5/1/2010",
                "FRCFct": "3/31/2017",
                "PubAct": "3/30/2017",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 14084,
                "TrialAlias": "F1D-XB-O335"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "6/8/2010",
                "DBFFct": "11/15/2010",
                "FRCFct": "NULL",
                "PubAct": "5/28/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14092,
                "TrialAlias": "F1J-CA-O049"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "12/1/2011",
                "DBFFct": "3/14/2012",
                "FRCFct": "8/14/2012",
                "PubAct": "11/9/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 14142,
                "TrialAlias": "H9X-MC-GBDT"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/28/2010",
                "DBFFct": "2/5/2011",
                "FRCFct": "NULL",
                "PubAct": "5/21/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14152,
                "TrialAlias": "F1J-US-X059"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "7/28/2011",
                "DBFFct": "6/5/2012",
                "FRCFct": "7/17/2012",
                "PubAct": "10/25/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14153,
                "TrialAlias": "F1J-EW-B041"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "11/30/2011",
                "DBFFct": "6/7/2012",
                "FRCFct": "9/13/2013",
                "PubAct": "1/11/2014",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14154,
                "TrialAlias": "F1J-XM-B042"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "5/1/2014",
                "DBFFct": "11/30/2015",
                "FRCFct": "8/30/2017",
                "PubAct": "10/30/2017",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 14169,
                "TrialAlias": "H9X-MC-GBGB"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "2/24/2016",
                "DBFFct": "12/29/2016",
                "FRCFct": "8/19/2022",
                "PubAct": "11/23/2022",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 14171,
                "TrialAlias": "H9X-MC-GBGC"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/14/2012",
                "DBFFct": "5/1/2012",
                "FRCFct": "8/28/2015",
                "PubAct": "3/4/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 14219,
                "TrialAlias": "F1D-JE-CS08"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "1/14/2013",
                "DBFFct": "1/14/2013",
                "FRCFct": "6/28/2013",
                "PubAct": "6/28/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14228,
                "TrialAlias": "F1J-MC-B040"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/6/2010",
                "DBFFct": "3/10/2012",
                "FRCFct": "NULL",
                "PubAct": "3/1/2015",
                "DSSStatus": "Trial Cancelled - First Pt. Enter Treatment",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14234,
                "TrialAlias": "F1J-CA-O050"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "3/31/2011",
                "DBFFct": "6/25/2010",
                "FRCFct": "NULL",
                "PubAct": "12/31/2018",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14290,
                "TrialAlias": "H3E-UT-O065"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "NOPHASE",
                "PAAct": "3/31/2011",
                "DBFFct": "10/1/2010",
                "FRCFct": "NULL",
                "PubAct": "5/1/2014",
                "DSSStatus": "Trial Cancelled - Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14291,
                "TrialAlias": "H3E-UT-O066"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "11/8/2011",
                "DBFFct": "9/30/2014",
                "FRCFct": "NULL",
                "PubAct": "1/15/2015",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14301,
                "TrialAlias": "F1J-SZ-O052"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "1/12/2011",
                "DBFFct": "12/6/2011",
                "FRCFct": "NULL",
                "PubAct": "10/9/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14314,
                "TrialAlias": "H3E-US-X086"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "10/1/2010",
                "DBFFct": "8/22/2011",
                "FRCFct": "NULL",
                "PubAct": "9/24/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14336,
                "TrialAlias": "F1J-US-X061"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "NOPHASE",
                "PAAct": "8/12/2011",
                "DBFFct": "9/22/2011",
                "FRCFct": "1/10/2012",
                "PubAct": "4/16/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "None-device only",
                "TrialNumber": 14342,
                "TrialAlias": "H8L-MC-IQBA"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "1/6/2012",
                "DBFFct": "4/25/2012",
                "FRCFct": "2/12/2014",
                "PubAct": "6/5/2014",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 14359,
                "TrialAlias": "H9X-JE-GBDY"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "I",
                "PAAct": "6/28/2011",
                "DBFFct": "8/3/2011",
                "FRCFct": "8/14/2012",
                "PubAct": "11/12/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 14361,
                "TrialAlias": "H9X-MC-GBDW"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "III",
                "PAAct": "8/20/2014",
                "DBFFct": "9/25/2014",
                "FRCFct": "7/22/2015",
                "PubAct": "10/27/2015",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14375,
                "TrialAlias": "F1J-JE-HMGX"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "12/6/2010",
                "DBFFct": "8/30/2010",
                "FRCFct": "NULL",
                "PubAct": "4/30/2019",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14394,
                "TrialAlias": "H3E-US-X087"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "10/18/2010",
                "DBFFct": "5/15/2011",
                "FRCFct": "9/30/2017",
                "PubAct": "12/31/2017",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14445,
                "TrialAlias": "H3E-FR-O067"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I",
                "PAAct": "5/5/2010",
                "DBFFct": "NULL",
                "FRCFct": "NULL",
                "PubAct": "7/26/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14446,
                "TrialAlias": "H3E-MC-V156"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "3/7/2011",
                "DBFFct": "3/5/2012",
                "FRCFct": "12/10/2016",
                "PubAct": "4/15/2017",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14449,
                "TrialAlias": "H3E-KL-O068"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/9/2011",
                "DBFFct": "7/11/2011",
                "FRCFct": "NULL",
                "PubAct": "11/20/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14451,
                "TrialAlias": "F1J-US-X062"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/19/2009",
                "DBFFct": "11/7/2011",
                "FRCFct": "NULL",
                "PubAct": "10/31/2017",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 14458,
                "TrialAlias": "F1D-US-X320"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "3/27/2012",
                "DBFFct": "8/20/2012",
                "FRCFct": "7/31/2013",
                "PubAct": "11/25/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14488,
                "TrialAlias": "F1J-JE-B043"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "7/11/2011",
                "DBFFct": "11/22/2012",
                "FRCFct": "11/30/2017",
                "PubAct": "4/30/2018",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14490,
                "TrialAlias": "H3E-SB-O069"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/23/2011",
                "DBFFct": "8/31/2013",
                "FRCFct": "NULL",
                "PubAct": "11/30/2015",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14491,
                "TrialAlias": "H3E-SB-O070"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "4/1/2012",
                "DBFFct": "7/4/2012",
                "FRCFct": "6/12/2015",
                "PubAct": "12/16/2015",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 14508,
                "TrialAlias": "F1D-JE-CS10"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "8/9/2011",
                "DBFFct": "8/9/2011",
                "FRCFct": "9/28/2012",
                "PubAct": "9/28/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14534,
                "TrialAlias": "F1J-MC-B044"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "8/13/2012",
                "DBFFct": "8/13/2012",
                "FRCFct": "6/2/2014",
                "PubAct": "6/2/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14577,
                "TrialAlias": "H3E-EW-B014"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "2/15/2012",
                "DBFFct": "7/23/2012",
                "FRCFct": "11/16/2015",
                "PubAct": "4/14/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14662,
                "TrialAlias": "H3E-GH-B015"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "4/1/2011",
                "DBFFct": "10/3/2011",
                "FRCFct": "NULL",
                "PubAct": "1/29/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14694,
                "TrialAlias": "H3E-PL-O071"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "1/25/2012",
                "DBFFct": "3/5/2012",
                "FRCFct": "NULL",
                "PubAct": "2/28/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14711,
                "TrialAlias": "F1J-CA-O053"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/30/2011",
                "DBFFct": "2/27/2012",
                "FRCFct": "NULL",
                "PubAct": "7/26/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14712,
                "TrialAlias": "F1J-US-X063"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "4/27/2011",
                "DBFFct": "1/1/2013",
                "FRCFct": "NULL",
                "PubAct": "12/1/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14718,
                "TrialAlias": "H3E-AY-JMIW"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "10/3/2011",
                "DBFFct": "10/3/2011",
                "FRCFct": "9/15/2014",
                "PubAct": "4/16/2015",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14719,
                "TrialAlias": "H3E-UT-O071"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "NOPHASE",
                "PAAct": "5/9/2011",
                "DBFFct": "NULL",
                "FRCFct": "NULL",
                "PubAct": "11/30/2014",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14726,
                "TrialAlias": "H3E-SB-O072"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "5/25/2011",
                "DBFFct": "12/2/2011",
                "FRCFct": "9/4/2013",
                "PubAct": "9/4/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14753,
                "TrialAlias": "F1J-XM-O054"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "2/13/2012",
                "DBFFct": "11/30/2012",
                "FRCFct": "NULL",
                "PubAct": "4/15/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 14832,
                "TrialAlias": "H3E-XM-O073"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "NOPHASE",
                "PAAct": "4/5/2012",
                "DBFFct": "5/15/2012",
                "FRCFct": "6/21/2012",
                "PubAct": "9/17/2012",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "None-device only",
                "TrialNumber": 14837,
                "TrialAlias": "H8L-MC-IQBD"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "NOPHASE",
                "PAAct": "10/26/2012",
                "DBFFct": "12/3/2012",
                "FRCFct": "5/15/2013",
                "PubAct": "7/2/2013",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "None-device only",
                "TrialNumber": 14839,
                "TrialAlias": "H8L-MC-IQBE"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "NOPHASE",
                "PAAct": "10/23/2012",
                "DBFFct": "11/5/2012",
                "FRCFct": "2/18/2013",
                "PubAct": "4/1/2013",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "None-device only",
                "TrialNumber": 14865,
                "TrialAlias": "H8L-MC-IQBF"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "1/28/2013",
                "DBFFct": "4/29/2013",
                "FRCFct": "11/15/2013",
                "PubAct": "2/28/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "No Lilly Drug",
                "TrialNumber": 14911,
                "TrialAlias": "I6Q-MC-BIFA"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "III",
                "PAAct": "5/10/2012",
                "DBFFct": "8/1/2013",
                "FRCFct": "NULL",
                "PubAct": "3/30/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 14931,
                "TrialAlias": "F1J-US-X064"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/6/2013",
                "DBFFct": "2/13/2014",
                "FRCFct": "4/28/2016",
                "PubAct": "8/31/2017",
                "DSSStatus": "Database Finalized",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 15015,
                "TrialAlias": "F1J-JE-B053"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "7/12/2013",
                "DBFFct": "10/24/2013",
                "FRCFct": "5/29/2015",
                "PubAct": "1/21/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 15039,
                "TrialAlias": "I6T-MC-AMAA"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/26/2012",
                "DBFFct": "4/4/2013",
                "FRCFct": "10/31/2016",
                "PubAct": "6/1/2017",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15040,
                "TrialAlias": "H3E-KL-O074"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "NOPHASE",
                "PAAct": "4/7/2015",
                "DBFFct": "5/13/2015",
                "FRCFct": "9/2/2015",
                "PubAct": "1/15/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "None-device only",
                "TrialNumber": 15043,
                "TrialAlias": "H8L-MC-IQBO"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "NOPHASE",
                "PAAct": "10/24/2016",
                "DBFFct": "10/31/2016",
                "FRCFct": "10/30/2017",
                "PubAct": "11/30/2017",
                "DSSStatus": "Created",
                "CmpndDesc": "None-device only",
                "TrialNumber": 15044,
                "TrialAlias": "H8L-MC-IQBP"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IIIB",
                "PAAct": "7/17/2013",
                "DBFFct": "10/24/2013",
                "FRCFct": "2/25/2014",
                "PubAct": "6/11/2014",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15053,
                "TrialAlias": "H9X-MC-GBDZ"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "III",
                "PAAct": "10/11/2013",
                "DBFFct": "1/20/2014",
                "FRCFct": "11/21/2014",
                "PubAct": "2/16/2015",
                "DSSStatus": "Trial Cancelled - Created",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15054,
                "TrialAlias": "H9X-MC-GBGA"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "2/14/2012",
                "DBFFct": "2/14/2012",
                "FRCFct": "12/4/2012",
                "PubAct": "7/2/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 15129,
                "TrialAlias": "F1J-MC-B052"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "1/21/2013",
                "DBFFct": "1/2/2014",
                "FRCFct": "NULL",
                "PubAct": "6/30/2019",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15158,
                "TrialAlias": "H3E-FR-O075"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/24/2012",
                "DBFFct": "1/1/2014",
                "FRCFct": "NULL",
                "PubAct": "2/28/2018",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15204,
                "TrialAlias": "H3E-FR-O076"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IB",
                "PAAct": "3/11/2013",
                "DBFFct": "1/14/2014",
                "FRCFct": "NULL",
                "PubAct": "2/28/2017",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15218,
                "TrialAlias": "H3E-CA-O077"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "4/30/2013",
                "DBFFct": "4/30/2013",
                "FRCFct": "8/6/2014",
                "PubAct": "8/6/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15235,
                "TrialAlias": "H3E-MC-B016"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IB",
                "PAAct": "11/26/2013",
                "DBFFct": "3/10/2014",
                "FRCFct": "8/16/2018",
                "PubAct": "11/15/2018",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15252,
                "TrialAlias": "I3Y-MC-JPBH"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "NOPHASE",
                "PAAct": "2/18/2013",
                "DBFFct": "3/21/2013",
                "FRCFct": "12/16/2016",
                "PubAct": "9/26/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15287,
                "TrialAlias": "H3E-OE-B017"
            },
            {
                "ThrptcAreaCde": "PD",
                "PhaseCde": "III",
                "PAAct": "NULL",
                "DBFFct": "7/1/2014",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Trial Cancelled - Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 15299,
                "TrialAlias": "F1D-JE-O339"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IIIB",
                "PAAct": "7/29/2015",
                "DBFFct": "11/24/2015",
                "FRCFct": "3/9/2017",
                "PubAct": "5/23/2017",
                "DSSStatus": "Last Patient Visit",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15361,
                "TrialAlias": "H9X-MC-GBGE"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "4/1/2014",
                "DBFFct": "7/22/2014",
                "FRCFct": "3/31/2020",
                "PubAct": "4/30/2020",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15362,
                "TrialAlias": "I3Y-MC-JPBL"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "5/28/2015",
                "DBFFct": "NULL",
                "FRCFct": "1/31/2031",
                "PubAct": "3/31/2032",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15364,
                "TrialAlias": "H9X-MC-B001"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "11/2/2015",
                "DBFFct": "11/15/2015",
                "FRCFct": "1/8/2016",
                "PubAct": "3/4/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15367,
                "TrialAlias": "H9X-MC-B002"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "4/1/2017",
                "DBFFct": "5/15/2017",
                "FRCFct": "6/27/2017",
                "PubAct": "8/25/2017",
                "DSSStatus": "PRC1",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15368,
                "TrialAlias": "H9X-MC-B003"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "4/1/2021",
                "DBFFct": "5/15/2021",
                "FRCFct": "6/29/2021",
                "PubAct": "8/27/2021",
                "DSSStatus": "PRC1",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15369,
                "TrialAlias": "H9X-MC-B004"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "5/10/2016",
                "DBFFct": "3/30/2017",
                "FRCFct": "8/20/2019",
                "PubAct": "12/20/2019",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Ixekizumab",
                "TrialNumber": 15371,
                "TrialAlias": "I1F-MC-RHBN"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/30/2014",
                "DBFFct": "9/30/2014",
                "FRCFct": "9/29/2017",
                "PubAct": "11/30/2017",
                "DSSStatus": "Trial Cancelled - Created",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15386,
                "TrialAlias": "H3E-MC-JMIY"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "9/3/2014",
                "DBFFct": "11/6/2014",
                "FRCFct": "8/23/2021",
                "PubAct": "11/21/2021",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15417,
                "TrialAlias": "I3Y-MC-JPBM"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "2/21/2014",
                "DBFFct": "6/10/2014",
                "FRCFct": "5/30/2017",
                "PubAct": "12/20/2016",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15419,
                "TrialAlias": "I3Y-MC-JPBN"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "11/11/2014",
                "DBFFct": "4/20/2015",
                "FRCFct": "2/1/2018",
                "PubAct": "5/1/2018",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15450,
                "TrialAlias": "I3Y-MC-JPBO"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "NOPHASE",
                "PAAct": "1/17/2014",
                "DBFFct": "9/15/2014",
                "FRCFct": "1/16/2017",
                "PubAct": "6/16/2017",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15501,
                "TrialAlias": "H3E-GH-B019"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "1/28/2016",
                "DBFFct": "12/5/2016",
                "FRCFct": "2/26/2020",
                "PubAct": "6/8/2020",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15530,
                "TrialAlias": "I3Y-CR-JPBQ"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "2/4/2015",
                "DBFFct": "5/16/2016",
                "FRCFct": "3/31/2022",
                "PubAct": "9/30/2022",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15604,
                "TrialAlias": "H9X-JE-B005"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "III",
                "PAAct": "10/29/2014",
                "DBFFct": "1/23/2015",
                "FRCFct": "4/7/2016",
                "PubAct": "6/1/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 15611,
                "TrialAlias": "F1J-JE-HMHD"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "1/11/2017",
                "DBFFct": "6/1/2017",
                "FRCFct": "10/30/2020",
                "PubAct": "4/30/2021",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15690,
                "TrialAlias": "H9X-MC-B016"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "I",
                "PAAct": "11/14/2015",
                "DBFFct": "1/31/2016",
                "FRCFct": "5/30/2016",
                "PubAct": "7/10/2016",
                "DSSStatus": "Trial Cancelled - Created",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 15726,
                "TrialAlias": "F1J-JE-HMHE"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "9/8/2014",
                "DBFFct": "1/5/2015",
                "FRCFct": "7/5/2020",
                "PubAct": "7/5/2020",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15727,
                "TrialAlias": "H3E-GH-O079"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "4/1/2016",
                "DBFFct": "8/30/2016",
                "FRCFct": "9/28/2018",
                "PubAct": "12/4/2018",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15803,
                "TrialAlias": "H9X-JE-GBGF"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "10/5/2015",
                "DBFFct": "5/23/2016",
                "FRCFct": "7/25/2019",
                "PubAct": "9/25/2019",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15804,
                "TrialAlias": "I3Y-MC-JPBZ"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "3/27/2015",
                "DBFFct": "8/25/2015",
                "FRCFct": "4/18/2017",
                "PubAct": "7/18/2017",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 15805,
                "TrialAlias": "I3Y-MC-JPBY"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "NULL",
                "DBFFct": "8/31/2019",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Created",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15811,
                "TrialAlias": "H9X-MC-B013"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "6/7/2016",
                "DBFFct": "3/31/2016",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15812,
                "TrialAlias": "H9X-MC-B010"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "6/7/2016",
                "DBFFct": "9/30/2015",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 15813,
                "TrialAlias": "H9X-MC-B009"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "3/11/2014",
                "DBFFct": "5/1/2015",
                "FRCFct": "NULL",
                "PubAct": "8/1/2017",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 15824,
                "TrialAlias": "H3E-KL-O080"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "II",
                "PAAct": "7/17/2015",
                "DBFFct": "12/9/2015",
                "FRCFct": "3/27/2020",
                "PubAct": "8/19/2020",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 15829,
                "TrialAlias": "I6T-MC-AMAC"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IB/II",
                "PAAct": "10/3/2016",
                "DBFFct": "1/26/2017",
                "FRCFct": "2/15/2021",
                "PubAct": "5/7/2021",
                "DSSStatus": "Trial Cancelled - Created",
                "CmpndDesc": "Olaratumab",
                "TrialNumber": 15843,
                "TrialAlias": "I5B-MC-JGDO"
            },
            {
                "ThrptcAreaCde": "ND",
                "PhaseCde": "II/III",
                "PAAct": "8/14/2014",
                "DBFFct": "9/30/2014",
                "FRCFct": "2/1/2020",
                "PubAct": "1/10/2022",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "BACE Inhibitor (AZD3293) (LY3314814)",
                "TrialNumber": 16023,
                "TrialAlias": "I8D-MC-AZES"
            },
            {
                "ThrptcAreaCde": "ND",
                "PhaseCde": "III",
                "PAAct": "2/5/2016",
                "DBFFct": "7/1/2016",
                "FRCFct": "9/10/2021",
                "PubAct": "11/22/2021",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "BACE Inhibitor (AZD3293) (LY3314814)",
                "TrialNumber": 16024,
                "TrialAlias": "I8D-MC-AZET"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "12/10/2014",
                "DBFFct": "5/26/2015",
                "FRCFct": "NULL",
                "PubAct": "6/28/2019",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 16060,
                "TrialAlias": "H3E-CA-O081"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "2/24/2015",
                "DBFFct": "10/31/2016",
                "FRCFct": "NULL",
                "PubAct": "12/31/2030",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 16121,
                "TrialAlias": "H3E-CA-O083"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "8/25/2016",
                "DBFFct": "12/22/2016",
                "FRCFct": "2/5/2018",
                "PubAct": "5/8/2018",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Ixekizumab",
                "TrialNumber": 16126,
                "TrialAlias": "I1F-MC-RHBU"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "3/3/2015",
                "DBFFct": "6/8/2016",
                "FRCFct": "NULL",
                "PubAct": "6/15/2020",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 16160,
                "TrialAlias": "H3E-UT-O085"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "11/9/2015",
                "DBFFct": "12/1/2016",
                "FRCFct": "2/14/2019",
                "PubAct": "3/14/2019",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 16164,
                "TrialAlias": "H9X-IN-B012"
            },
            {
                "ThrptcAreaCde": "CV",
                "PhaseCde": "III",
                "PAAct": "11/2/2015",
                "DBFFct": "3/1/2016",
                "FRCFct": "2/7/2018",
                "PubAct": "5/2/2018",
                "DSSStatus": "Trial Cancelled - PRC1",
                "CmpndDesc": "Evacetrapib (LY2484595)",
                "TrialNumber": 16167,
                "TrialAlias": "I1V-MC-EIBR"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "8/11/2015",
                "DBFFct": "11/4/2015",
                "FRCFct": "5/22/2017",
                "PubAct": "7/20/2017",
                "DSSStatus": "Last Pt. Enter Treatment",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16172,
                "TrialAlias": "I6T-JE-AMAD"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "7/29/2015",
                "DBFFct": "9/9/2015",
                "FRCFct": "2/5/2016",
                "PubAct": "7/1/2016",
                "DSSStatus": "Final Report Complete",
                "CmpndDesc": "Ixekizumab",
                "TrialNumber": 16202,
                "TrialAlias": "I1F-MC-RHCA"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/16/2015",
                "DBFFct": "3/2/2016",
                "FRCFct": "NULL",
                "PubAct": "12/31/2020",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 16224,
                "TrialAlias": "H3E-US-X088"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "10/5/2015",
                "DBFFct": "NULL",
                "FRCFct": "12/12/2016",
                "PubAct": "3/31/2017",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 16238,
                "TrialAlias": "F1J-MC-B056"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "2/18/2016",
                "DBFFct": "1/12/2017",
                "FRCFct": "1/15/2018",
                "PubAct": "3/15/2018",
                "DSSStatus": "First Patient Visit",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 16244,
                "TrialAlias": "I3Y-MC-JPCD"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "7/7/2015",
                "DBFFct": "6/30/2016",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Trial Cancelled - Protocol Approved",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 16271,
                "TrialAlias": "H3E-US-X089"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "7/7/2015",
                "DBFFct": "NULL",
                "FRCFct": "NULL",
                "PubAct": "NULL",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 16273,
                "TrialAlias": "H3E-US-X090"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IIIB",
                "PAAct": "3/28/2017",
                "DBFFct": "12/14/2017",
                "FRCFct": "3/29/2019",
                "PubAct": "6/30/2020",
                "DSSStatus": "Trial on Hold ��RC2",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 16280,
                "TrialAlias": "H9X-MC-GBGG"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "7/12/2016",
                "DBFFct": "9/29/2016",
                "FRCFct": "1/26/2017",
                "PubAct": "12/15/2017",
                "DSSStatus": "Database Finalized",
                "CmpndDesc": "BTK Inhibitor (LY3337641)",
                "TrialNumber": 16297,
                "TrialAlias": "I8K-MC-JPDE"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "1/9/2017",
                "DBFFct": "4/4/2017",
                "FRCFct": "7/25/2017",
                "PubAct": "10/25/2017",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "BTK Inhibitor (LY3337641)",
                "TrialNumber": 16298,
                "TrialAlias": "I8K-MC-JPDF"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "III",
                "PAAct": "2/24/2017",
                "DBFFct": "6/28/2017",
                "FRCFct": "7/26/2027",
                "PubAct": "9/25/2027",
                "DSSStatus": "PRC1",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 16338,
                "TrialAlias": "I3Y-MC-JPCF"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "4/11/2016",
                "DBFFct": "1/24/2016",
                "FRCFct": "9/16/2019",
                "PubAct": "11/18/2019",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 16339,
                "TrialAlias": "I3Y-MC-JPCG"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "6/20/2017",
                "DBFFct": "10/20/2017",
                "FRCFct": "3/17/2023",
                "PubAct": "5/12/2023",
                "DSSStatus": "Created",
                "CmpndDesc": "Abemaciclib",
                "TrialNumber": 16341,
                "TrialAlias": "I3Y-MC-JPCI"
            },
            {
                "ThrptcAreaCde": "ND",
                "PhaseCde": "I",
                "PAAct": "2/18/2016",
                "DBFFct": "5/2/2018",
                "FRCFct": "8/17/2018",
                "PubAct": "11/21/2018",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "D1 Potentiator (LY3154207)",
                "TrialNumber": 16437,
                "TrialAlias": "I7S-MC-HBEG"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "4/22/2016",
                "DBFFct": "12/13/2016",
                "FRCFct": "5/25/2021",
                "PubAct": "8/25/2021",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 16445,
                "TrialAlias": "H9X-KL-B017"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "4/21/2017",
                "DBFFct": "7/5/2017",
                "FRCFct": "11/14/2017",
                "PubAct": "2/16/2018",
                "DSSStatus": "Created",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16455,
                "TrialAlias": "I6T-MC-AMAE"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IIIB",
                "PAAct": "3/15/2018",
                "DBFFct": "3/30/2018",
                "FRCFct": "12/5/2019",
                "PubAct": "3/10/2020",
                "DSSStatus": "Trial on Hold ��RC2",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 16456,
                "TrialAlias": "H9X-MC-GBGH"
            },
            {
                "ThrptcAreaCde": "END",
                "PhaseCde": "IV",
                "PAAct": "6/22/2018",
                "DBFFct": "9/28/2018",
                "FRCFct": "12/30/2020",
                "PubAct": "2/27/2023",
                "DSSStatus": "Trial on Hold ��reated",
                "CmpndDesc": "Dulaglutide",
                "TrialNumber": 16457,
                "TrialAlias": "H9X-JE-GBGI"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "II",
                "PAAct": "5/24/2016",
                "DBFFct": "9/14/2016",
                "FRCFct": "9/17/2019",
                "PubAct": "11/8/2019",
                "DSSStatus": "First Pt. Enter Treatment",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16481,
                "TrialAlias": "I6T-MC-AMAF"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "III",
                "PAAct": "12/7/2017",
                "DBFFct": "9/14/2018",
                "FRCFct": "6/23/2022",
                "PubAct": "9/7/2022",
                "DSSStatus": "Created",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16491,
                "TrialAlias": "I6T-MC-AMAH"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "II",
                "PAAct": "7/21/2016",
                "DBFFct": "12/14/2016",
                "FRCFct": "5/20/2021",
                "PubAct": "7/20/2021",
                "DSSStatus": "First Patient Visit",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16492,
                "TrialAlias": "I6T-MC-AMAG"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "IV",
                "PAAct": "9/30/2016",
                "DBFFct": "NULL",
                "FRCFct": "12/19/2017",
                "PubAct": "4/19/2018",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "Ixekizumab",
                "TrialNumber": 16497,
                "TrialAlias": "I1F-MC-B005"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "III",
                "PAAct": "11/20/2017",
                "DBFFct": "3/26/2018",
                "FRCFct": "2/5/2020",
                "PubAct": "5/18/2020",
                "DSSStatus": "Created",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16504,
                "TrialAlias": "I6T-MC-AMAJ"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "III",
                "PAAct": "11/20/2017",
                "DBFFct": "3/26/2018",
                "FRCFct": "2/5/2020",
                "PubAct": "5/18/2020",
                "DSSStatus": "Created",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16505,
                "TrialAlias": "I6T-MC-AMAK"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "1/23/2017",
                "DBFFct": "3/1/2017",
                "FRCFct": "2/29/2020",
                "PubAct": "9/30/2020",
                "DSSStatus": "Created",
                "CmpndDesc": "Duloxetine",
                "TrialNumber": 16508,
                "TrialAlias": "F1J-JE-DL05"
            },
            {
                "ThrptcAreaCde": "AIIMIN",
                "PhaseCde": "I",
                "PAAct": "11/9/2016",
                "DBFFct": "4/5/2017",
                "FRCFct": "11/13/2017",
                "PubAct": "2/2/2018",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "IL-23 Antibody II (LY3074828)",
                "TrialNumber": 16542,
                "TrialAlias": "I6T-MC-AMAL"
            },
            {
                "ThrptcAreaCde": "ND",
                "PhaseCde": "III",
                "PAAct": "11/16/2016",
                "DBFFct": "3/5/2017",
                "FRCFct": "9/1/2020",
                "PubAct": "11/2/2020",
                "DSSStatus": "Protocol Approved",
                "CmpndDesc": "BACE Inhibitor (AZD3293) (LY3314814)",
                "TrialNumber": 16557,
                "TrialAlias": "I8D-MC-AZFD"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "III",
                "PAAct": "6/12/2002",
                "DBFFct": "1/17/2003",
                "FRCFct": "NULL",
                "PubAct": "7/8/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 7357,
                "TrialAlias": "F1D-CA-O191"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "9/6/2002",
                "DBFFct": "12/11/2002",
                "FRCFct": "NULL",
                "PubAct": "3/24/2016",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 7963,
                "TrialAlias": "F1D-CA-O211"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "11/12/2002",
                "DBFFct": "6/1/2003",
                "FRCFct": "12/31/2007",
                "PubAct": "6/30/2010",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 8316,
                "TrialAlias": "F1D-GV-O234"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "2/11/2005",
                "DBFFct": "6/13/2005",
                "FRCFct": "11/5/2009",
                "PubAct": "4/22/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 8818,
                "TrialAlias": "F1D-FP-B009"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "12/17/2003",
                "DBFFct": "6/15/2004",
                "FRCFct": "12/26/2010",
                "PubAct": "1/24/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 8908,
                "TrialAlias": "H3E-UT-O003"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I/II",
                "PAAct": "11/19/2004",
                "DBFFct": "6/28/2005",
                "FRCFct": "1/18/2012",
                "PubAct": "6/29/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 9031,
                "TrialAlias": "H3E-US-S047"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "8/11/2003",
                "DBFFct": "6/28/2006",
                "FRCFct": "NULL",
                "PubAct": "6/1/2014",
                "DSSStatus": "Trial Cancelled - First Pt. Enter Treatment",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 9055,
                "TrialAlias": "F1D-MC-X249"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "I",
                "PAAct": "11/11/2004",
                "DBFFct": "10/31/2005",
                "FRCFct": "NULL",
                "PubAct": "2/25/2014",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 9302,
                "TrialAlias": "H3E-US-X003"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "II",
                "PAAct": "12/2/2004",
                "DBFFct": "12/31/2005",
                "FRCFct": "NULL",
                "PubAct": "7/22/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 9344,
                "TrialAlias": "H3E-US-X004"
            },
            {
                "ThrptcAreaCde": "NS",
                "PhaseCde": "IV",
                "PAAct": "12/30/2004",
                "DBFFct": "3/24/2006",
                "FRCFct": "NULL",
                "PubAct": "2/20/2012",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Olanzapine",
                "TrialNumber": 9869,
                "TrialAlias": "F1D-FP-O295"
            },
            {
                "ThrptcAreaCde": "ONC",
                "PhaseCde": "IV",
                "PAAct": "2/28/2005",
                "DBFFct": "6/10/2005",
                "FRCFct": "NULL",
                "PubAct": "5/9/2013",
                "DSSStatus": "Trial File Closed",
                "CmpndDesc": "Pemetrexed",
                "TrialNumber": 9902,
                "TrialAlias": "H3E-XM-O013"
            }

    ];
    $scope.gridOptions = {
        enableSorting: true,
        animateRows: true,

        rowGroupPanelShow: 'always',
        enableStatusBar: true,
        enableRangeSelection: true,
        columnDefs: columnDefs,
        rowData: rowData
    };

    $scope.msg='DSS Trials Output';

});

module.controller("ecoaoutputCtrl", function($scope) {
    var columnDefs = [
        {headerName: "Test1", field: "make"},
        {headerName: "Test2", field: "model"},
        {headerName: "Test3", field: "price"}
    ];
    var rowData = [
        {make: "A1", model: "B1", price: 14000},
        {make: "A2", model: "B2", price: 31400},
        {make: "A3", model: "B3", price: 71400}
    ];
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    $scope.msg='ECOA Trials Output';

});

module.controller("dssUser", function($scope, $http) {

    var request = $http.get('/profile');
    request.success(function(data) {
        $scope.user = data;

    });
    request.error(function(data){
        console.log('Error: ' + data);
    });


});

function onFilterChanged(value) {
    gridOptions.api.setQuickFilter(value);
}


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
//         templateUrl:"views/dssinput.html",
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
//         {make: "Toyota", model: "Celica", price: 14000},
//         {make: "Ford", model: "Mondeo", price: 31400},
//         {make: "Porsche", model: "Boxter", price: 71400}
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