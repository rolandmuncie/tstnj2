var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require("pg");

var conString = "postgres://admin:admin@localhost/DSSTracker";


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

/* GET home page. */
router.get('/ui', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'ui.html'));
});

/* GET home page. */
router.get('/ag', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'ag.html'));
});


router.get('/profile', function(req, res) {
    var user = process.env.USERNAME;

    for(var attributename in process.env){
        console.log(attributename+": "+process.env[attributename]);
    }
    //you probably also want to pass this to your view
    res.json(user);
});


router.get('/dssdata', function(req,res, next){

    // pg.connect(conString, function (err, client, done) {
    //     if (err) {
    //         return console.error('error fetching client from pool', err);
    //     }
    //     client.query('SELECT * from dss.dss_trial', function (err, result) {
    //
    //         if (err) {
    //             return console.error('error running query', err);
    //         }
    //
    //         console.log(result.rows);
    //         res.json(result.rows);
    //     });
    //
    // });

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

    res.json(rowData);

});

module.exports = router;
