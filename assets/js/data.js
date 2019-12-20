//years range
var start_year=1961
var end_year=2017
var years = [...Array(end_year-start_year+1).keys()].map(x => x+start_year)

var country_correspondance={
  'USA' : 'United States of America',
  'Russia' : ['Russian Federation','USSR'],
  'Venezuela' : 'Venezuela (Bolivarian Republic of)',
  'South Korea' : 'Republic of Korea',
  'Niger' : 'Nigeria',
  'Bolivia' : 'Bolivia (Plurinational State of)',
  'England':'United Kingdom',
  'Syrian Arab Republic':'Syria',
  'Vietnam':'Viet Nam'
}

var continent_beehives=[
    {
        "Year": 1961,
        "Africa": 6845050,
        "Europe": 21097615,
        "America": 10019254,
        "Asia": 10704894,
        "Oceania": 506660
    },
    {
        "Year": 1962,
        "Africa": 6986195,
        "Europe": 21182265,
        "America": 10038371,
        "Asia": 10901851,
        "Oceania": 530345
    },
    {
        "Year": 1963,
        "Africa": 7291050,
        "Europe": 21758651,
        "America": 9388825,
        "Asia": 11040696,
        "Oceania": 491061
    },
    {
        "Year": 1964,
        "Africa": 7365275,
        "Europe": 21159899,
        "America": 9261154,
        "Asia": 11305317,
        "Oceania": 533889
    },
    {
        "Year": 1965,
        "Africa": 7822375,
        "Europe": 20966688,
        "America": 8221129,
        "Asia": 12831637,
        "Oceania": 526280
    },
    {
        "Year": 1966,
        "Africa": 7950264,
        "Europe": 21215962,
        "America": 8287992,
        "Asia": 14118065,
        "Oceania": 511103
    },
    {
        "Year": 1967,
        "Africa": 7717458,
        "Europe": 21473087,
        "America": 8335563,
        "Asia": 14240893,
        "Oceania": 521193
    },
    {
        "Year": 1968,
        "Africa": 7667631,
        "Europe": 21553536,
        "America": 8366840,
        "Asia": 14421992,
        "Oceania": 563801
    },
    {
        "Year": 1969,
        "Africa": 7874429,
        "Europe": 21657465,
        "America": 8706947,
        "Asia": 14737413,
        "Oceania": 502423
    },
    {
        "Year": 1970,
        "Africa": 8150830,
        "Europe": 21111815,
        "America": 8958470,
        "Asia": 15229994,
        "Oceania": 568802
    },
    {
        "Year": 1971,
        "Africa": 8276850,
        "Europe": 21438088,
        "America": 8380990,
        "Asia": 15496242,
        "Oceania": 582030
    },
    {
        "Year": 1972,
        "Africa": 8391825,
        "Europe": 21276848,
        "America": 8664193,
        "Asia": 15548537,
        "Oceania": 600620
    },
    {
        "Year": 1973,
        "Africa": 8452865,
        "Europe": 21668169,
        "America": 8782846,
        "Asia": 15790608,
        "Oceania": 616047
    },
    {
        "Year": 1974,
        "Africa": 8627907,
        "Europe": 21067973,
        "America": 9051772,
        "Asia": 15817587,
        "Oceania": 630436
    },
    {
        "Year": 1975,
        "Africa": 8894825,
        "Europe": 21062925,
        "America": 9214843,
        "Asia": 15968566,
        "Oceania": 709965
    },
    {
        "Year": 1976,
        "Africa": 8960050,
        "Europe": 20660367,
        "America": 9416066,
        "Asia": 15986723,
        "Oceania": 717077
    },
    {
        "Year": 1977,
        "Africa": 8758450,
        "Europe": 20837161,
        "America": 9567827,
        "Asia": 16326440,
        "Oceania": 714689
    },
    {
        "Year": 1978,
        "Africa": 9066075,
        "Europe": 21940586,
        "America": 9567208,
        "Asia": 16423198,
        "Oceania": 708957
    },
    {
        "Year": 1979,
        "Africa": 9232100,
        "Europe": 21731227,
        "America": 9897600,
        "Asia": 16886254,
        "Oceania": 744613
    },
    {
        "Year": 1980,
        "Africa": 9373150,
        "Europe": 21420093,
        "America": 10029356,
        "Asia": 18614607,
        "Oceania": 761222
    },
    {
        "Year": 1981,
        "Africa": 9707975,
        "Europe": 21726143,
        "America": 10580414,
        "Asia": 19465522,
        "Oceania": 768807
    },
    {
        "Year": 1982,
        "Africa": 10009600,
        "Europe": 21834699,
        "America": 10592211,
        "Asia": 20369194,
        "Oceania": 816996
    },
    {
        "Year": 1983,
        "Africa": 10009500,
        "Europe": 22054026,
        "America": 10943341,
        "Asia": 20847873,
        "Oceania": 816643
    },
    {
        "Year": 1984,
        "Africa": 10507125,
        "Europe": 22405275,
        "America": 11086138,
        "Asia": 21240135,
        "Oceania": 821617
    },
    {
        "Year": 1985,
        "Africa": 10972200,
        "Europe": 23005170,
        "America": 11191497,
        "Asia": 21411964,
        "Oceania": 877692
    },
    {
        "Year": 1986,
        "Africa": 11454325,
        "Europe": 23242102,
        "America": 10136840,
        "Asia": 21392778,
        "Oceania": 903547
    },
    {
        "Year": 1987,
        "Africa": 11786125,
        "Europe": 23471899,
        "America": 9889730,
        "Asia": 21575806,
        "Oceania": 719696
    },
    {
        "Year": 1988,
        "Africa": 12022625,
        "Europe": 22398798,
        "America": 10007266,
        "Asia": 23132048,
        "Oceania": 717024
    },
    {
        "Year": 1989,
        "Africa": 12694622,
        "Europe": 22694857,
        "America": 10166748,
        "Asia": 22929232,
        "Oceania": 751148
    },
    {
        "Year": 1990,
        "Africa": 13185854,
        "Europe": 22466656,
        "America": 9713442,
        "Asia": 23130582,
        "Oceania": 741379
    },
    {
        "Year": 1991,
        "Africa": 13759094,
        "Europe": 21740465,
        "America": 9916445,
        "Asia": 23821268,
        "Oceania": 714945
    },
    {
        "Year": 1992,
        "Africa": 14051600,
        "Europe": 17804191,
        "America": 9856679,
        "Asia": 25089994,
        "Oceania": 689246
    },
    {
        "Year": 1993,
        "Africa": 13739700,
        "Europe": 17301276,
        "America": 9799190,
        "Asia": 25184585,
        "Oceania": 679266
    },
    {
        "Year": 1994,
        "Africa": 14069000,
        "Europe": 16418600,
        "America": 9705044,
        "Asia": 25135172,
        "Oceania": 774772
    },
    {
        "Year": 1995,
        "Africa": 14062337,
        "Europe": 16090198,
        "America": 9545575,
        "Asia": 25663970,
        "Oceania": 801786
    },
    {
        "Year": 1996,
        "Africa": 14395882,
        "Europe": 15851960,
        "America": 9192806,
        "Asia": 25779529,
        "Oceania": 772568
    },
    {
        "Year": 1997,
        "Africa": 14158420,
        "Europe": 15340291,
        "America": 9078162,
        "Asia": 26563613,
        "Oceania": 793185
    },
    {
        "Year": 1998,
        "Africa": 14057474,
        "Europe": 15278716,
        "America": 9525451,
        "Asia": 27030317,
        "Oceania": 715637
    },
    {
        "Year": 1999,
        "Africa": 14429620,
        "Europe": 15165580,
        "America": 10602785,
        "Asia": 26193849,
        "Oceania": 680292
    },
    {
        "Year": 2000,
        "Africa": 15915322,
        "Europe": 15144609,
        "America": 10624656,
        "Asia": 26818529,
        "Oceania": 796939
    },
    {
        "Year": 2001,
        "Africa": 16667411,
        "Europe": 15364135,
        "America": 10568543,
        "Asia": 27051227,
        "Oceania": 742207
    },
    {
        "Year": 2002,
        "Africa": 17453211,
        "Europe": 15356163,
        "America": 10616187,
        "Asia": 27688189,
        "Oceania": 715258
    },
    {
        "Year": 2003,
        "Africa": 16917261,
        "Europe": 15359545,
        "America": 10560767,
        "Asia": 28464727,
        "Oceania": 706800
    },
    {
        "Year": 2004,
        "Africa": 16909639,
        "Europe": 15547345,
        "America": 10571994,
        "Asia": 29245255,
        "Oceania": 699359
    },
    {
        "Year": 2005,
        "Africa": 17358849,
        "Europe": 15765899,
        "America": 10430400,
        "Asia": 30019437,
        "Oceania": 701881
    },
    {
        "Year": 2006,
        "Africa": 17150721,
        "Europe": 16053566,
        "America": 10729023,
        "Asia": 30874995,
        "Oceania": 709101
    },
    {
        "Year": 2007,
        "Africa": 16363017,
        "Europe": 15940670,
        "America": 10545057,
        "Asia": 31386690,
        "Oceania": 731769
    },
    {
        "Year": 2008,
        "Africa": 16339675,
        "Europe": 15711366,
        "America": 10577999,
        "Asia": 32723600,
        "Oceania": 767269
    },
    {
        "Year": 2009,
        "Africa": 15927464,
        "Europe": 15532658,
        "America": 10771747,
        "Asia": 34103511,
        "Oceania": 759678
    },
    {
        "Year": 2010,
        "Africa": 16083587,
        "Europe": 15881398,
        "America": 11019940,
        "Asia": 35933821,
        "Oceania": 764941
    },
    {
        "Year": 2011,
        "Africa": 15922478,
        "Europe": 16272212,
        "America": 10953504,
        "Asia": 36564559,
        "Oceania": 690847
    },
    {
        "Year": 2012,
        "Africa": 16616932,
        "Europe": 17065826,
        "America": 10931644,
        "Asia": 37729639,
        "Oceania": 714277
    },
    {
        "Year": 2013,
        "Africa": 16421472,
        "Europe": 17151268,
        "America": 11124950,
        "Asia": 39150980,
        "Oceania": 1006024
    },
    {
        "Year": 2014,
        "Africa": 16801350,
        "Europe": 17758810,
        "America": 11277745,
        "Asia": 40515487,
        "Oceania": 1060651
    },
    {
        "Year": 2015,
        "Africa": 16940506,
        "Europe": 18295324,
        "America": 11273221,
        "Asia": 41425956,
        "Oceania": 1050401
    },
    {
        "Year": 2016,
        "Africa": 17290628,
        "Europe": 18668671,
        "America": 11363990,
        "Asia": 42093232,
        "Oceania": 1076920
    },
    {
        "Year": 2017,
        "Africa": 17507222,
        "Europe": 18764349,
        "America": 11139203,
        "Asia": 42372690,
        "Oceania": 1216267
    }
]

var beehives_world=[
    {
        "x": 1961,
        "y": 49173473.0
    },
    {
        "x": 1962,
        "y": 49639027.0
    },
    {
        "x": 1963,
        "y": 49970283.0
    },
    {
        "x": 1964,
        "y": 49625534.0
    },
    {
        "x": 1965,
        "y": 50368109.0
    },
    {
        "x": 1966,
        "y": 52083386.0
    },
    {
        "x": 1967,
        "y": 52288194.0
    },
    {
        "x": 1968,
        "y": 52573800.0
    },
    {
        "x": 1969,
        "y": 53478677.0
    },
    {
        "x": 1970,
        "y": 54019911.0
    },
    {
        "x": 1971,
        "y": 54174200.0
    },
    {
        "x": 1972,
        "y": 54482023.0
    },
    {
        "x": 1973,
        "y": 55310535.0
    },
    {
        "x": 1974,
        "y": 55195675.0
    },
    {
        "x": 1975,
        "y": 55851124.0
    },
    {
        "x": 1976,
        "y": 55740283.0
    },
    {
        "x": 1977,
        "y": 56204567.0
    },
    {
        "x": 1978,
        "y": 57706024.0
    },
    {
        "x": 1979,
        "y": 58491794.0
    },
    {
        "x": 1980,
        "y": 60198428.0
    },
    {
        "x": 1981,
        "y": 62248861.0
    },
    {
        "x": 1982,
        "y": 63622700.0
    },
    {
        "x": 1983,
        "y": 64671383.0
    },
    {
        "x": 1984,
        "y": 66060290.0
    },
    {
        "x": 1985,
        "y": 67458523.0
    },
    {
        "x": 1986,
        "y": 67129592.0
    },
    {
        "x": 1987,
        "y": 67443256.0
    },
    {
        "x": 1988,
        "y": 68277761.0
    },
    {
        "x": 1989,
        "y": 69236607.0
    },
    {
        "x": 1990,
        "y": 69237913.0
    },
    {
        "x": 1991,
        "y": 69952217.0
    },
    {
        "x": 1992,
        "y": 67491710.0
    },
    {
        "x": 1993,
        "y": 66704017.0
    },
    {
        "x": 1994,
        "y": 66102588.0
    },
    {
        "x": 1995,
        "y": 66163866.0
    },
    {
        "x": 1996,
        "y": 65992745.0
    },
    {
        "x": 1997,
        "y": 65933672.0
    },
    {
        "x": 1998,
        "y": 66607596.0
    },
    {
        "x": 1999,
        "y": 67072126.0
    },
    {
        "x": 2000,
        "y": 69300054.0
    },
    {
        "x": 2001,
        "y": 70393523.0
    },
    {
        "x": 2002,
        "y": 71829008.0
    },
    {
        "x": 2003,
        "y": 72009100.0
    },
    {
        "x": 2004,
        "y": 72973593.0
    },
    {
        "x": 2005,
        "y": 74276467.0
    },
    {
        "x": 2006,
        "y": 75517406.0
    },
    {
        "x": 2007,
        "y": 74967203.0
    },
    {
        "x": 2008,
        "y": 76119908.0
    },
    {
        "x": 2009,
        "y": 77095057.0
    },
    {
        "x": 2010,
        "y": 79683687.0
    },
    {
        "x": 2011,
        "y": 80403600.0
    },
    {
        "x": 2012,
        "y": 83058317.0
    },
    {
        "x": 2013,
        "y": 84854694.0
    },
    {
        "x": 2014,
        "y": 87414044.0
    },
    {
        "x": 2015,
        "y": 88985408.0
    },
    {
        "x": 2016,
        "y": 90493440.0
    },
    {
        "x": 2017,
        "y": 90999730.0
    }
]

var beehives={
    "1961": {
        "Albania": {
            "beehives": 95100.0,
            "population": 1685.936,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 100000.0,
            "population": 11336.339,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 5531.472,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 650000.0,
            "population": 20817.266,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 323447.0,
            "population": 10445.837,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 466619.0,
            "population": 7111.142,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 50717.0,
            "population": 9542.848,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3176.0,
            "population": 94.703,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 53850.0,
            "population": 3728.964,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 310000.0,
            "population": 74311.343,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 625527.0,
            "population": 7953.467,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 95000.0,
            "population": 2852.438,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 225000.0,
            "population": 5285.017,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 336910.0,
            "population": 18233.964,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 300000.0,
            "population": 1526.066,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 100000.0,
            "population": 3060.368,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 426660.0,
            "population": 8303.811,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3356000.0,
            "population": 685523.498,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 55000.0,
            "population": 16567.811,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 18.383,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1381.183,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 100000.0,
            "population": 7291.2,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 9800.0,
            "population": 576.395,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 886715.0,
            "population": 13834.562,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 28000.0,
            "population": 3406.28,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 23000.0,
            "population": 4674.172,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 634000.0,
            "population": 27366.237,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 50000.0,
            "population": 2846.6,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2400000.0,
            "population": 23704.519,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 407.249,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 20000.0,
            "population": 4467.773,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 890000.0,
            "population": 46266.981,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 280.0,
            "population": 80.706,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1997000.0,
            "population": 73928.082,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 680000.0,
            "population": 8314.005,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 32.471,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 500.0,
            "population": 281.31,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 68.072,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 180000.0,
            "population": 4336.143,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3552.065,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 622.761,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 2110.0,
            "population": 589.274,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 36000.0,
            "population": 3941.944,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 14000.0,
            "population": 2096.409,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 402585.0,
            "population": 10030.48,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 5000000.0,
            "population": 459642.165,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 350000.0,
            "population": 22480.372,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 48000.0,
            "population": 2144.641,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 620000.0,
            "population": 50052.172,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 61000.0,
            "population": 1651.073,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 136000.0,
            "population": 94560.709,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 11100.0,
            "population": 973.988,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 500000.0,
            "population": 8377.696,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 29000.0,
            "population": 1864.619,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 10200.0,
            "population": 1498.071,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1064.0,
            "population": 16.893,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 5223.568,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 28000.0,
            "population": 5322.266,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 288.485,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1985000.0,
            "population": 38966.056,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 650.0,
            "population": 982.178,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 360000.0,
            "population": 12710.581,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 7342.111,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 75000.0,
            "population": 11606.402,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 400.0,
            "population": 80.584,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 179953.0,
            "population": 2424.066,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 500.0,
            "population": 4.875,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 53000.0,
            "population": 46065.231,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 61000.0,
            "population": 1954.548,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1204000.0,
            "population": 30015.601,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 200000.0,
            "population": 8869.986,
            "land_size": 9212.0
        },
        "Republic of Korea": {
            "beehives": 115213.0,
            "population": 26084.031,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 653000.0,
            "population": 18780.202,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 250.0,
            "population": 2998.325,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 1000.0,
            "population": 112.105,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3295.278,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 45000.0,
            "population": 17524.533,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 728100.0,
            "population": 30729.652,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 10665.087,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 200000.0,
            "population": 7530.181,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 281388.0,
            "population": 5377.767,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 54431.0,
            "population": 4721.896,
            "land_size": 18518.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 63.715,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6500.0,
            "population": 864.818,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 45000.0,
            "population": 4238.142,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1487400.0,
            "population": 28146.91,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 37600.0,
            "population": 6983.818,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 220800.0,
            "population": 52727.768,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 560000.0,
            "population": 10346.697,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 5514000.0,
            "population": 189569.843,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 54548.0,
            "population": 2571.681,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 10250000.0,
            "population": 217357.73,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 38000.0,
            "population": 8439.261,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 15000.0,
            "population": 33666.11,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 300.0,
            "population": 8.276,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 39300.0,
            "population": 5393.036,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 550000.0,
            "population": 18726.796,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3164.329,
            "land_size": 75261.0
        }
    },
    "1962": {
        "Albania": {
            "beehives": 92800.0,
            "population": 1737.686,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 105000.0,
            "population": 11619.828,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 5608.539,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 650000.0,
            "population": 21153.052,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 347092.0,
            "population": 10643.417,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 448670.0,
            "population": 7156.833,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 47371.0,
            "population": 9604.243,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3100.0,
            "population": 97.384,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 59200.0,
            "population": 3802.99,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 301600.0,
            "population": 76514.328,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 669633.0,
            "population": 8022.158,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 100000.0,
            "population": 2907.321,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 230000.0,
            "population": 5398.729,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 340470.0,
            "population": 18596.846,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 300000.0,
            "population": 1551.91,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 102000.0,
            "population": 3121.236,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 433330.0,
            "population": 8476.897,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3460000.0,
            "population": 697164.518,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 57000.0,
            "population": 17092.918,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 18.455,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1433.335,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 100000.0,
            "population": 7453.54,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 10600.0,
            "population": 577.691,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 843725.0,
            "population": 13940.264,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 29000.0,
            "population": 3521.018,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 23000.0,
            "population": 4809.201,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 706045.0,
            "population": 28112.256,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 62500.0,
            "population": 2931.192,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2400000.0,
            "population": 24281.875,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 421.665,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 20000.0,
            "population": 4498.817,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 900000.0,
            "population": 46907.042,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 320.0,
            "population": 83.655,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1761000.0,
            "population": 74489.454,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 966000.0,
            "population": 8350.885,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 33.73,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 500.0,
            "population": 286.526,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 69.604,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 188000.0,
            "population": 4464.249,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3611.429,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 628.883,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 2171.0,
            "population": 606.285,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 4019.173,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 18500.0,
            "population": 2155.647,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 388086.0,
            "population": 10062.505,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 5000000.0,
            "population": 469077.19,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 362000.0,
            "population": 23071.315,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 50000.0,
            "population": 2234.199,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 620000.0,
            "population": 50442.339,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 60000.0,
            "population": 1676.501,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 95458.524,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 11100.0,
            "population": 1010.658,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 520000.0,
            "population": 8647.011,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 30000.0,
            "population": 1925.297,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 10200.0,
            "population": 1550.813,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1080.0,
            "population": 17.289,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 5352.503,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 28000.0,
            "population": 5381.368,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 294.968,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2000000.0,
            "population": 40195.319,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 700.0,
            "population": 1011.324,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 380000.0,
            "population": 13094.888,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 7507.303,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 70000.0,
            "population": 11766.726,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 400.0,
            "population": 83.218,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 179953.0,
            "population": 2477.199,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 500.0,
            "population": 4.931,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 53000.0,
            "population": 47198.878,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 63000.0,
            "population": 2006.67,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1192000.0,
            "population": 30389.347,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 200000.0,
            "population": 8888.513,
            "land_size": 9212.0
        },
        "Republic of Korea": {
            "beehives": 125266.0,
            "population": 26812.086,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 726000.0,
            "population": 18924.157,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 250.0,
            "population": 3052.936,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 1000.0,
            "population": 115.776,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3386.806,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 46000.0,
            "population": 17965.725,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 744100.0,
            "population": 31075.477,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 10955.164,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 67000.0,
            "population": 7579.566,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 275000.0,
            "population": 5487.043,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 58485.0,
            "population": 4875.422,
            "land_size": 18518.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 66.235,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6000.0,
            "population": 879.441,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 46000.0,
            "population": 4305.481,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1498400.0,
            "population": 28832.827,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 37700.0,
            "population": 7215.796,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 224800.0,
            "population": 53109.399,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 570000.0,
            "population": 10651.962,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 5506000.0,
            "population": 192313.746,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 40000.0,
            "population": 2603.882,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 10250000.0,
            "population": 220785.914,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 38000.0,
            "population": 8742.777,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 20000.0,
            "population": 34683.407,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 300.0,
            "population": 8.398,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 39300.0,
            "population": 5473.671,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 675000.0,
            "population": 18916.726,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3260.65,
            "land_size": 75261.0
        }
    },
    "1963": {
        "Albania": {
            "beehives": 83500.0,
            "population": 1790.573,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 110000.0,
            "population": 11912.803,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 5679.458,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 640000.0,
            "population": 21488.912,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 303347.0,
            "population": 10845.178,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 437232.0,
            "population": 7205.994,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 49140.0,
            "population": 9664.536,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3176.0,
            "population": 100.164,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 50500.0,
            "population": 3879.192,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 300000.0,
            "population": 78772.657,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 636834.0,
            "population": 8090.703,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 103000.0,
            "population": 2964.427,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 235000.0,
            "population": 5518.104,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 360060.0,
            "population": 18943.229,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 400000.0,
            "population": 1579.37,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 104000.0,
            "population": 3183.572,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 440000.0,
            "population": 8650.387,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3519000.0,
            "population": 709900.098,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 59000.0,
            "population": 17629.979,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 18.503,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1486.553,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 100000.0,
            "population": 7623.294,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 12000.0,
            "population": 577.913,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 773771.0,
            "population": 14041.044,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 29900.0,
            "population": 3638.109,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 24000.0,
            "population": 4948.986,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 764800.0,
            "population": 28871.383,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 68750.0,
            "population": 3019.224,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2500000.0,
            "population": 24887.284,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 436.293,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 19000.0,
            "population": 4526.746,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 920000.0,
            "population": 47560.826,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 360.0,
            "population": 86.847,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1743000.0,
            "population": 75080.748,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 901321.0,
            "population": 8385.449,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 35.043,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 500.0,
            "population": 291.109,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 71.286,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 188000.0,
            "population": 4595.51,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3672.556,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 635.011,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 2239.0,
            "population": 622.575,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 32000.0,
            "population": 4097.755,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 18500.0,
            "population": 2216.704,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 300853.0,
            "population": 10096.968,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 5000000.0,
            "population": 478825.608,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 373000.0,
            "population": 23680.258,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 52500.0,
            "population": 2325.148,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 640000.0,
            "population": 50856.405,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 60000.0,
            "population": 1703.651,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 189000.0,
            "population": 96389.424,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 11550.0,
            "population": 1050.213,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 540000.0,
            "population": 8928.511,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 30000.0,
            "population": 1985.001,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 10200.0,
            "population": 1607.171,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1100.0,
            "population": 17.719,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 5486.319,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 28000.0,
            "population": 5441.613,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 300.954,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1300000.0,
            "population": 41462.369,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 700.0,
            "population": 1042.383,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 380000.0,
            "population": 13478.423,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 7679.458,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 65000.0,
            "population": 11928.361,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 400.0,
            "population": 85.905,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 183874.0,
            "population": 2530.173,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 500.0,
            "population": 4.983,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 55000.0,
            "population": 48387.301,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 65000.0,
            "population": 2060.339,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1202000.0,
            "population": 30736.494,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 200000.0,
            "population": 8896.272,
            "land_size": 9212.0
        },
        "Republic of Korea": {
            "beehives": 140594.0,
            "population": 27517.544,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 714000.0,
            "population": 19059.938,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 250.0,
            "population": 3105.419,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 1500.0,
            "population": 119.559,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3481.654,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 46000.0,
            "population": 18423.161,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 736100.0,
            "population": 31432.771,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 11257.874,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 100000.0,
            "population": 7631.457,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 268000.0,
            "population": 5601.807,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 70652.0,
            "population": 5034.646,
            "land_size": 18518.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 68.981,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6200.0,
            "population": 891.944,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 47000.0,
            "population": 4380.068,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1522400.0,
            "population": 29531.365,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 37800.0,
            "population": 7461.634,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 229800.0,
            "population": 53500.716,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 580000.0,
            "population": 10968.195,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 5528000.0,
            "population": 194932.403,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 45000.0,
            "population": 2635.126,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 10986000.0,
            "population": 224111.524,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 38000.0,
            "population": 9052.635,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 25000.0,
            "population": 35721.217,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 300.0,
            "population": 8.53,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 39300.0,
            "population": 5556.766,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 752000.0,
            "population": 19104.322,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3360.104,
            "land_size": 75261.0
        }
    },
    "1964": {
        "Albania": {
            "beehives": 96500.0,
            "population": 1843.634,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 115000.0,
            "population": 12221.675,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 5735.044,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 650000.0,
            "population": 21824.425,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 339609.0,
            "population": 11065.415,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 421750.0,
            "population": 7256.091,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 45389.0,
            "population": 9721.658,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3801.0,
            "population": 103.069,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 56500.0,
            "population": 3957.757,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 311400.0,
            "population": 81064.571,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 663638.0,
            "population": 8157.833,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 105000.0,
            "population": 3026.29,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 240000.0,
            "population": 5643.036,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 382240.0,
            "population": 19284.224,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1608.616,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 106000.0,
            "population": 3246.523,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 453330.0,
            "population": 8821.858,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3658000.0,
            "population": 724319.9,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 61000.0,
            "population": 18175.185,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 18.63,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1539.941,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 100000.0,
            "population": 7793.262,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 17500.0,
            "population": 578.625,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 782359.0,
            "population": 14127.799,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 29000.0,
            "population": 3757.132,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 24000.0,
            "population": 5093.854,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 673200.0,
            "population": 29644.875,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 70000.0,
            "population": 3109.563,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2500000.0,
            "population": 25515.181,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 450.542,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 19000.0,
            "population": 4550.239,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 931518.0,
            "population": 48184.418,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 90.139,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1689600.0,
            "population": 75677.307,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 972163.0,
            "population": 8419.296,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 36.445,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 295.509,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 73.051,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 121000.0,
            "population": 4730.54,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3735.916,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 641.812,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 2283.0,
            "population": 637.845,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 4177.637,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 18500.0,
            "population": 2280.048,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 311138.0,
            "population": 10132.967,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 5000000.0,
            "population": 488848.135,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 384000.0,
            "population": 24307.86,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 59500.0,
            "population": 2411.787,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 690000.0,
            "population": 51273.231,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 60000.0,
            "population": 1730.738,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 190000.0,
            "population": 97379.402,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 15100.0,
            "population": 1102.399,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 560000.0,
            "population": 9222.692,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 31186.0,
            "population": 2041.229,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 8000.0,
            "population": 1667.825,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1144.0,
            "population": 18.168,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 5625.164,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 29000.0,
            "population": 5503.752,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 306.371,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1100000.0,
            "population": 42771.079,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 750.0,
            "population": 1074.514,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 400000.0,
            "population": 13857.649,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 7857.104,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 70000.0,
            "population": 12089.385,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 500.0,
            "population": 88.579,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 190000.0,
            "population": 2580.53,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 500.0,
            "population": 5.045,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 58000.0,
            "population": 49627.623,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 66000.0,
            "population": 2115.567,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1164000.0,
            "population": 31059.455,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 200000.0,
            "population": 8888.225,
            "land_size": 9212.0
        },
        "Republic of Korea": {
            "beehives": 110707.0,
            "population": 28209.731,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 723000.0,
            "population": 19207.135,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 375.0,
            "population": 3164.263,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 2000.0,
            "population": 123.342,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3580.239,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 48000.0,
            "population": 18896.307,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 685000.0,
            "population": 31791.941,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 11573.733,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 134000.0,
            "population": 7686.73,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 268000.0,
            "population": 5712.707,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 78976.0,
            "population": 5200.336,
            "land_size": 18518.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 71.741,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6300.0,
            "population": 902.613,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 47800.0,
            "population": 4461.114,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1632298.0,
            "population": 30244.261,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 37900.0,
            "population": 7719.104,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 194700.0,
            "population": 53882.751,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 590000.0,
            "population": 11295.681,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 5601000.0,
            "population": 197408.505,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 52000.0,
            "population": 2665.388,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 10325000.0,
            "population": 227269.969,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 38000.0,
            "population": 9369.096,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 30000.0,
            "population": 36779.999,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 300.0,
            "population": 8.63,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 39300.0,
            "population": 5641.597,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 772000.0,
            "population": 19284.867,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3463.213,
            "land_size": 75261.0
        }
    },
    "1965": {
        "Albania": {
            "beehives": 109800.0,
            "population": 1896.171,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 120000.0,
            "population": 12550.885,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 5770.57,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 700000.0,
            "population": 22159.65,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 326000.0,
            "population": 11313.195,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 419560.0,
            "population": 7305.158,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 47246.0,
            "population": 9774.1,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 5603.0,
            "population": 106.119,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 57500.0,
            "population": 4038.872,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 316200.0,
            "population": 83373.53,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 657868.0,
            "population": 8222.589,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 110000.0,
            "population": 3094.379,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 242000.0,
            "population": 5773.543,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 413030.0,
            "population": 19627.98,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 800000.0,
            "population": 1639.706,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 108000.0,
            "population": 3309.586,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 346660.0,
            "population": 8989.621,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3757000.0,
            "population": 740790.571,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 63000.0,
            "population": 18725.245,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 18.894,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1592.841,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 110000.0,
            "population": 7958.169,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 40200.0,
            "population": 580.966,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 830000.0,
            "population": 14194.829,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 29000.0,
            "population": 3877.765,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 25000.0,
            "population": 5243.977,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 688000.0,
            "population": 30433.022,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 72000.0,
            "population": 3201.313,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2600000.0,
            "population": 26161.815,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 463.968,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 20000.0,
            "population": 4568.598,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 969314.0,
            "population": 48746.652,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 93.438,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1720600.0,
            "population": 76258.032,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 958000.0,
            "population": 8453.821,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 37.964,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 1200.0,
            "population": 300.056,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 74.83,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 145000.0,
            "population": 4869.716,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3801.705,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 649.79,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1902.0,
            "population": 651.868,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 25000.0,
            "population": 4258.732,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 18500.0,
            "population": 2346.015,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 350000.0,
            "population": 10169.799,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 6300000.0,
            "population": 499123.324,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 395000.0,
            "population": 24954.873,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 61000.0,
            "population": 2490.317,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 640000.0,
            "population": 51677.257,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 60000.0,
            "population": 1756.511,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 239000.0,
            "population": 98447.002,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 15550.0,
            "population": 1173.606,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 580000.0,
            "population": 9530.173,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 37889.0,
            "population": 2092.375,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 6000.0,
            "population": 1733.306,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1100.0,
            "population": 18.649,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 5769.218,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 29000.0,
            "population": 5568.484,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 311.127,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 920934.0,
            "population": 44123.853,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 800.0,
            "population": 1107.124,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 400000.0,
            "population": 14230.163,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 8039.215,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 65000.0,
            "population": 12248.344,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 500.0,
            "population": 91.2,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 195000.0,
            "population": 2626.645,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 500.0,
            "population": 5.098,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 50917.975,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 69000.0,
            "population": 2172.306,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1174000.0,
            "population": 31360.907,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 210000.0,
            "population": 8862.28,
            "land_size": 9212.0
        },
        "Republic of Korea": {
            "beehives": 102000.0,
            "population": 28895.558,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 824000.0,
            "population": 19379.568,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 375.0,
            "population": 3235.531,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 3000.0,
            "population": 127.054,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3682.876,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 48000.0,
            "population": 19384.841,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 721500.0,
            "population": 32146.263,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 11903.247,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 134000.0,
            "population": 7745.673,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 268000.0,
            "population": 5812.851,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 86898.0,
            "population": 5373.137,
            "land_size": 18518.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 74.345,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6600.0,
            "population": 911.737,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 48000.0,
            "population": 4547.941,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1661000.0,
            "population": 30972.994,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38000.0,
            "population": 7986.066,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 203700.0,
            "population": 54240.85,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 600000.0,
            "population": 11634.832,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4718000.0,
            "population": 199733.676,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 50000.0,
            "population": 2694.536,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9930000.0,
            "population": 230218.374,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 37000.0,
            "population": 9692.278,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 36000.0,
            "population": 37858.951,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 300.0,
            "population": 8.724,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 39300.0,
            "population": 5727.751,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 713000.0,
            "population": 19455.329,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3570.464,
            "land_size": 75261.0
        }
    },
    "1966": {
        "Albania": {
            "beehives": 105800.0,
            "population": 1947.83,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 125000.0,
            "population": 12902.627,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 950000.0,
            "population": 5781.214,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 700000.0,
            "population": 22494.035,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 310223.0,
            "population": 11593.413,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 430183.0,
            "population": 7352.24,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 33488.0,
            "population": 9821.172,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 5478.0,
            "population": 109.347,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 58750.0,
            "population": 4122.517,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 317000.0,
            "population": 85696.505,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 632169.0,
            "population": 8284.446,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 114664.0,
            "population": 3170.49,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 245000.0,
            "population": 5909.882,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 429860.0,
            "population": 19975.694,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 850000.0,
            "population": 1673.019,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 110000.0,
            "population": 3372.189,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 400000.0,
            "population": 9152.844,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3849000.0,
            "population": 759495.967,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 65300.0,
            "population": 19279.74,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 19.328,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1645.083,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 100000.0,
            "population": 8115.487,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 26700.0,
            "population": 585.309,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 882641.0,
            "population": 14239.268,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 28750.0,
            "population": 3999.796,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 25000.0,
            "population": 5399.422,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 752000.0,
            "population": 31237.6,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 71772.0,
            "population": 3293.952,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2600000.0,
            "population": 26819.919,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 476.404,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 19500.0,
            "population": 4581.115,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 977426.0,
            "population": 49232.539,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 96.716,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1758900.0,
            "population": 76819.577,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 951749.0,
            "population": 8489.863,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 39.61,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 1300.0,
            "population": 304.854,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 76.607,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 169000.0,
            "population": 5013.153,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3870.203,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 658.994,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1984.0,
            "population": 664.521,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18500.0,
            "population": 4341.318,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 19000.0,
            "population": 2414.803,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 370846.0,
            "population": 10208.227,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 7500000.0,
            "population": 509631.5,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 407000.0,
            "population": 25624.373,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 66000.0,
            "population": 2558.712,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 700000.0,
            "population": 52062.754,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 60000.0,
            "population": 1780.518,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 242000.0,
            "population": 99596.069,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 15600.0,
            "population": 1267.062,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 600000.0,
            "population": 9851.444,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 37115.0,
            "population": 2136.617,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 4000.0,
            "population": 1803.683,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1000.0,
            "population": 19.152,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 5918.595,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 5635.859,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 315.173,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 966980.0,
            "population": 45519.737,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 850.0,
            "population": 1139.961,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 420000.0,
            "population": 14595.35,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 8225.921,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 61000.0,
            "population": 12404.193,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 600.0,
            "population": 93.686,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 194500.0,
            "population": 2667.082,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 500.0,
            "population": 5.151,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 52260.189,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 46759.0,
            "population": 2230.741,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1263000.0,
            "population": 31641.038,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 210000.0,
            "population": 8814.786,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 36000.0,
            "population": 2537.57,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 123848.0,
            "population": 29572.556,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 916022.0,
            "population": 19582.335,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 500.0,
            "population": 3321.679,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 4000.0,
            "population": 130.673,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3789.383,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 48000.0,
            "population": 19888.25,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 576400.0,
            "population": 32491.644,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 12247.141,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 134000.0,
            "population": 7809.086,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 270138.0,
            "population": 5899.483,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 82996.0,
            "population": 5553.246,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 7500.0,
            "population": 529.327,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 76.771,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6800.0,
            "population": 919.217,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 48000.0,
            "population": 4641.0,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1620456.0,
            "population": 31717.507,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38100.0,
            "population": 8263.439,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 200700.0,
            "population": 54568.868,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 610000.0,
            "population": 11985.44,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4646000.0,
            "population": 201895.76,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 46759.0,
            "population": 2722.875,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 10004000.0,
            "population": 232931.727,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 37000.0,
            "population": 10022.592,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 39000.0,
            "population": 38958.048,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 300.0,
            "population": 8.77,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40000.0,
            "population": 5816.247,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 717000.0,
            "population": 19614.627,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3681.955,
            "land_size": 75261.0
        }
    },
    "1967": {
        "Albania": {
            "beehives": 98100.0,
            "population": 1998.74,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 127000.0,
            "population": 13275.026,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 900000.0,
            "population": 5774.243,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 750000.0,
            "population": 22828.869,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 318913.0,
            "population": 11899.639,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 429457.0,
            "population": 7397.171,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 31174.0,
            "population": 9863.269,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 5414.0,
            "population": 112.692,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 40000.0,
            "population": 4208.676,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 292000.0,
            "population": 88035.814,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 651663.0,
            "population": 8343.488,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 99633.0,
            "population": 3253.218,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 246000.0,
            "population": 6052.42,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 445070.0,
            "population": 20324.779,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 600000.0,
            "population": 1708.302,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 111000.0,
            "population": 3434.825,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 366660.0,
            "population": 9312.095,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3850000.0,
            "population": 780172.786,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 67300.0,
            "population": 19837.51,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 19.893,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 28000.0,
            "population": 1696.732,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 100000.0,
            "population": 8266.38,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 37300.0,
            "population": 591.308,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 926534.0,
            "population": 14265.666,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 29150.0,
            "population": 4123.092,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 28000.0,
            "population": 5560.012,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 759000.0,
            "population": 32056.51,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 70592.0,
            "population": 3387.383,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2600000.0,
            "population": 27490.434,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 487.981,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 19800.0,
            "population": 4588.656,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 972093.0,
            "population": 49651.083,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 99.995,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1650700.0,
            "population": 77357.255,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 961433.0,
            "population": 8528.03,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 41.361,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 750.0,
            "population": 309.766,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 78.404,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 170000.0,
            "population": 5160.609,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 3941.053,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 669.237,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1998.0,
            "population": 675.871,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 4425.303,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 23000.0,
            "population": 2486.415,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 459187.0,
            "population": 10248.704,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 7500000.0,
            "population": 520400.576,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 420000.0,
            "population": 26317.783,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 70000.0,
            "population": 2619.105,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 740000.0,
            "population": 52433.489,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 80000.0,
            "population": 1803.319,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 255000.0,
            "population": 100822.291,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 15625.0,
            "population": 1378.998,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 620000.0,
            "population": 10187.478,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 36334.0,
            "population": 2174.738,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 4000.0,
            "population": 1878.877,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 983.0,
            "population": 19.691,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 300000.0,
            "population": 6073.526,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 5706.199,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 318.504,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1015329.0,
            "population": 46956.208,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 890.0,
            "population": 1173.191,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 420000.0,
            "population": 14954.031,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 28000.0,
            "population": 8417.702,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 65000.0,
            "population": 12556.839,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 600.0,
            "population": 96.071,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 194600.0,
            "population": 2702.676,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 700.0,
            "population": 5.208,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 53655.789,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 44500.0,
            "population": 2290.798,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1327000.0,
            "population": 31901.689,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 210000.0,
            "population": 8750.858,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 31000.0,
            "population": 2561.04,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 130802.0,
            "population": 30236.697,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1055083.0,
            "population": 19810.615,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 625.0,
            "population": 3420.895,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 5000.0,
            "population": 134.177,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 3899.644,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 50000.0,
            "population": 20406.864,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 565180.0,
            "population": 32830.187,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 12606.062,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 187000.0,
            "population": 7875.907,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 268000.0,
            "population": 5973.945,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 83042.0,
            "population": 5740.71,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 31000.0,
            "population": 538.909,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 79.029,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6800.0,
            "population": 925.235,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 49000.0,
            "population": 4740.511,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1667900.0,
            "population": 32477.992,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38200.0,
            "population": 8550.443,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 183700.0,
            "population": 54866.534,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 660000.0,
            "population": 12348.189,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4635000.0,
            "population": 203905.08,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 50000.0,
            "population": 2750.086,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9901000.0,
            "population": 235428.232,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 35000.0,
            "population": 10359.745,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 43000.0,
            "population": 40072.948,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.799,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40000.0,
            "population": 5907.874,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 770000.0,
            "population": 19765.042,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": null,
            "population": 3797.873,
            "land_size": 75261.0
        }
    },
    "1968": {
        "Albania": {
            "beehives": 86000.0,
            "population": 2049.21,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 130000.0,
            "population": 13663.583,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 830000.0,
            "population": 5771.652,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 750000.0,
            "population": 23168.267,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 360238.0,
            "population": 12215.701,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 417619.0,
            "population": 7439.579,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 30873.0,
            "population": 9901.429,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 5016.0,
            "population": 116.061,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 25000.0,
            "population": 4297.517,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 282000.0,
            "population": 90387.079,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 711204.0,
            "population": 8400.013,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 81706.0,
            "population": 3336.927,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 248000.0,
            "population": 6201.413,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 415000.0,
            "population": 20675.007,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 400000.0,
            "population": 1744.194,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 112000.0,
            "population": 3499.362,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 360000.0,
            "population": 9468.845,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 3957000.0,
            "population": 802167.626,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 69400.0,
            "population": 20393.699,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 20.489,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 25000.0,
            "population": 1747.694,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 120000.0,
            "population": 8413.552,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 30800.0,
            "population": 598.495,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 985874.0,
            "population": 14284.766,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 29400.0,
            "population": 4247.558,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 28000.0,
            "population": 5725.459,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 754000.0,
            "population": 32881.848,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 70000.0,
            "population": 3481.624,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2700000.0,
            "population": 28187.025,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 498.94,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 21000.0,
            "population": 4594.024,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 954213.0,
            "population": 50024.582,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 103.342,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1562700.0,
            "population": 77847.179,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 990977.0,
            "population": 8569.141,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 43.097,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 700.0,
            "population": 314.497,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 80.217,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 172000.0,
            "population": 5311.615,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4013.055,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 680.432,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1743.0,
            "population": 686.146,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 21000.0,
            "population": 4509.813,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 27000.0,
            "population": 2560.727,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 483288.0,
            "population": 10289.766,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 7500000.0,
            "population": 531513.824,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 432000.0,
            "population": 27032.571,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 73000.0,
            "population": 2676.968,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 52794.523,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 75000.0,
            "population": 1825.879,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 268000.0,
            "population": 102124.005,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 7800.0,
            "population": 1500.163,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 640000.0,
            "population": 10539.894,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 43663.0,
            "population": 2210.772,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 4000.0,
            "population": 1958.914,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 950.0,
            "population": 20.235,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 320000.0,
            "population": 6234.465,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 5780.835,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 321.178,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1185581.0,
            "population": 48431.972,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 925.0,
            "population": 1207.104,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 430000.0,
            "population": 15307.273,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 8614.447,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 65000.0,
            "population": 12706.787,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 700.0,
            "population": 98.609,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 194213.0,
            "population": 2736.827,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1270.0,
            "population": 5.237,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 55102.684,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 41000.0,
            "population": 2351.925,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1351000.0,
            "population": 32149.543,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 210000.0,
            "population": 8687.876,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 29000.0,
            "population": 2581.387,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 126713.0,
            "population": 30891.965,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1096431.0,
            "population": 20055.971,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 625.0,
            "population": 3529.843,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 6000.0,
            "population": 137.487,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 4014.103,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 50000.0,
            "population": 20942.145,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 581657.0,
            "population": 33168.775,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 12980.262,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 167000.0,
            "population": 7942.322,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 268000.0,
            "population": 6038.333,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 76564.0,
            "population": 5935.86,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 548.825,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 81.079,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7000.0,
            "population": 930.795,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 50000.0,
            "population": 4845.219,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1737527.0,
            "population": 33256.464,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38300.0,
            "population": 8841.153,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 163750.0,
            "population": 55132.596,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 700000.0,
            "population": 12725.522,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4539000.0,
            "population": 205805.754,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 52000.0,
            "population": 2774.759,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9831000.0,
            "population": 237762.972,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 35000.0,
            "population": 10702.291,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 48000.0,
            "population": 41193.601,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.819,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40000.0,
            "population": 6001.852,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 825000.0,
            "population": 19911.114,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 50000.0,
            "population": 3918.872,
            "land_size": 75261.0
        }
    },
    "1969": {
        "Albania": {
            "beehives": 88600.0,
            "population": 2099.729,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 140000.0,
            "population": 14061.722,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 780000.0,
            "population": 5803.254,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 800000.0,
            "population": 23517.611,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 301073.0,
            "population": 12518.937,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 428832.0,
            "population": 7479.346,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 31422.0,
            "population": 9937.218,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 2979.0,
            "population": 119.261,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 15000.0,
            "population": 4389.246,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 272000.0,
            "population": 92746.614,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 718696.0,
            "population": 8454.586,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 88279.0,
            "population": 3413.904,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 250000.0,
            "population": 6357.092,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 419060.0,
            "population": 21025.265,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 450000.0,
            "population": 1778.861,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 113000.0,
            "population": 3568.398,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 362660.0,
            "population": 9625.312,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4160000.0,
            "population": 824557.722,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 71400.0,
            "population": 20942.456,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 20.988,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 23000.0,
            "population": 1797.893,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 124600.0,
            "population": 8561.384,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 52600.0,
            "population": 606.116,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1046674.0,
            "population": 14311.48,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 38150.0,
            "population": 4373.124,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 30000.0,
            "population": 5895.367,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 796000.0,
            "population": 33703.139,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 72000.0,
            "population": 3576.838,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2800000.0,
            "population": 28928.832,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 509.704,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 21000.0,
            "population": 4601.033,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1097900.0,
            "population": 50387.448,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 106.82,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1612442.0,
            "population": 78260.755,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 970689.0,
            "population": 8614.036,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 44.699,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 700.0,
            "population": 318.622,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 82.04,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 175000.0,
            "population": 5465.512,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4084.6,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 692.407,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1638.0,
            "population": 695.745,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18500.0,
            "population": 4593.669,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 31000.0,
            "population": 2637.513,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 398594.0,
            "population": 10329.354,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 7500000.0,
            "population": 543084.336,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 445000.0,
            "population": 27764.924,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 74000.0,
            "population": 2740.068,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 53154.573,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 78000.0,
            "population": 1849.662,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 283088.0,
            "population": 103496.035,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 7800.0,
            "population": 1617.428,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 660000.0,
            "population": 10910.675,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 46950.0,
            "population": 2250.447,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 40000.0,
            "population": 2043.818,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 920.0,
            "population": 20.766,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 330000.0,
            "population": 6401.921,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 5861.412,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 323.319,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1580060.0,
            "population": 49945.279,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 960.0,
            "population": 1242.214,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 440000.0,
            "population": 15656.843,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 8816.057,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 68000.0,
            "population": 12855.007,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 700.0,
            "population": 101.62,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 191000.0,
            "population": 2774.367,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1270.0,
            "population": 5.218,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 56598.144,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 39000.0,
            "population": 2413.396,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1381000.0,
            "population": 32393.143,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 210000.0,
            "population": 8649.253,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 28000.0,
            "population": 2603.712,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 124555.0,
            "population": 31543.835,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 977846.0,
            "population": 20305.354,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 750.0,
            "population": 3643.237,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 7000.0,
            "population": 140.5,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 4133.322,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 50000.0,
            "population": 21496.075,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 579100.0,
            "population": 33517.683,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 13369.986,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 140000.0,
            "population": 8003.185,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 268000.0,
            "population": 6096.436,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 79846.0,
            "population": 6139.048,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 24000.0,
            "population": 559.626,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 82.855,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7200.0,
            "population": 937.186,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 49000.0,
            "population": 4953.39,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1786614.0,
            "population": 34055.39,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38400.0,
            "population": 9127.857,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 167750.0,
            "population": 55367.947,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 700000.0,
            "population": 13120.58,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4433000.0,
            "population": 207659.263,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 50000.0,
            "population": 2795.042,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9847000.0,
            "population": 240016.825,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 32000.0,
            "population": 11048.262,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 52000.0,
            "population": 42307.146,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.839,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40000.0,
            "population": 6097.035,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 853000.0,
            "population": 20059.084,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 4045.74,
            "land_size": 75261.0
        }
    },
    "1970": {
        "Albania": {
            "beehives": 99800.0,
            "population": 2150.707,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 150000.0,
            "population": 14464.985,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 820000.0,
            "population": 5890.365,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 800000.0,
            "population": 23880.561,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 367943.0,
            "population": 12793.034,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 412038.0,
            "population": 7516.239,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 30201.0,
            "population": 9971.848,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 2087.0,
            "population": 122.182,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 6000.0,
            "population": 4484.004,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 253000.0,
            "population": 95113.265,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 727994.0,
            "population": 8507.551,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 85455.0,
            "population": 3479.074,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 251000.0,
            "population": 6519.762,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 407560.0,
            "population": 21374.326,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1811.144,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 114000.0,
            "population": 3643.604,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 380000.0,
            "population": 9783.134,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4165000.0,
            "population": 846620.967,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 73500.0,
            "population": 21480.065,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 21.302,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 20000.0,
            "population": 1847.394,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 123100.0,
            "population": 8712.541,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 42800.0,
            "population": 613.618,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1060538.0,
            "population": 14356.51,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 37800.0,
            "population": 4499.72,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 30000.0,
            "population": 6069.376,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 807000.0,
            "population": 34513.85,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 73000.0,
            "population": 3673.068,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2900000.0,
            "population": 29726.022,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 520.562,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 22000.0,
            "population": 4612.366,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1073900.0,
            "population": 50763.92,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 110.495,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1496784.0,
            "population": 78578.385,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 988799.0,
            "population": 8663.571,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 46.074,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 650.0,
            "population": 321.883,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 83.877,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 176340.0,
            "population": 5621.792,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4154.605,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 704.939,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1640.0,
            "population": 704.934,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 17500.0,
            "population": 4676.23,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 35000.0,
            "population": 2716.654,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 382719.0,
            "population": 10366.105,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8000000.0,
            "population": 555189.792,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 462000.0,
            "population": 28513.866,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 58800.0,
            "population": 2813.749,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 53518.969,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 69000.0,
            "population": 1875.642,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 273000.0,
            "population": 104929.251,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 7800.0,
            "population": 1721.323,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 680000.0,
            "population": 11301.394,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 62413.0,
            "population": 2297.434,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 4000.0,
            "population": 2133.526,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 870.0,
            "population": 21.266,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 340000.0,
            "population": 6576.305,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 5949.045,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 325.011,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1665700.0,
            "population": 51493.565,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1000.0,
            "population": 1278.825,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 460000.0,
            "population": 16004.731,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 9022.741,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 60000.0,
            "population": 13001.943,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 700.0,
            "population": 105.324,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 190000.0,
            "population": 2818.387,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1279.0,
            "population": 5.135,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 58142.06,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 39000.0,
            "population": 2474.763,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1385000.0,
            "population": 32639.258,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 210000.0,
            "population": 8651.34,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 30000.0,
            "population": 2631.707,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 111817.0,
            "population": 32195.681,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 975712.0,
            "population": 20548.911,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 875.0,
            "population": 3757.358,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 7500.0,
            "population": 143.149,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9000.0,
            "population": 4257.505,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51000.0,
            "population": 22069.776,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 497700.0,
            "population": 33883.749,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 13775.704,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 100000.0,
            "population": 8054.916,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 266000.0,
            "population": 6150.852,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 77594.0,
            "population": 6350.541,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 17000.0,
            "population": 571.565,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 84.351,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7500.0,
            "population": 945.36,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 50000.0,
            "population": 5063.809,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1794070.0,
            "population": 34876.303,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38500.0,
            "population": 9405.6,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 160760.0,
            "population": 55573.453,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 750000.0,
            "population": 13535.481,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4634000.0,
            "population": 209513.341,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 44093.0,
            "population": 2809.793,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9515000.0,
            "population": 242251.448,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 30000.0,
            "population": 11396.393,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 56000.0,
            "population": 43404.793,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.853,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40700.0,
            "population": 6193.384,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 896000.0,
            "population": 20213.539,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 4179.067,
            "land_size": 75261.0
        }
    },
    "1971": {
        "Albania": {
            "beehives": 99800.0,
            "population": 2202.189,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 150000.0,
            "population": 14872.25,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 770000.0,
            "population": 6040.777,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 800000.0,
            "population": 24259.561,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 375570.0,
            "population": 13033.133,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 421765.0,
            "population": 7550.34,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 30083.0,
            "population": 10005.55,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3219.0,
            "population": 124.793,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 6000.0,
            "population": 4581.74,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 242376.0,
            "population": 97482.92,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 763905.0,
            "population": 8559.031,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 85000.0,
            "population": 3529.997,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 253000.0,
            "population": 6689.662,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 396420.0,
            "population": 21723.46,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1840.518,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 115000.0,
            "population": 3726.189,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 404000.0,
            "population": 9942.727,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4370000.0,
            "population": 868190.202,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 75500.0,
            "population": 22003.98,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 21.398,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 15000.0,
            "population": 1896.077,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 115800.0,
            "population": 8868.083,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 40700.0,
            "population": 620.859,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1060538.0,
            "population": 14422.779,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 37450.0,
            "population": 4627.21,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 33000.0,
            "population": 6247.418,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 882000.0,
            "population": 35311.91,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 78000.0,
            "population": 3770.059,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 2900000.0,
            "population": 30595.819,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 531.635,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 22000.0,
            "population": 4629.38,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1000000.0,
            "population": 51162.568,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 114.382,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1484901.0,
            "population": 78789.939,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 950865.0,
            "population": 8716.873,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 47.186,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 750.0,
            "population": 324.18,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 85.726,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 176000.0,
            "population": 5780.48,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4223.051,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 718.364,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1675.0,
            "population": 713.684,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 17000.0,
            "population": 4757.182,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 39000.0,
            "population": 2798.123,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 394151.0,
            "population": 10398.169,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8000000.0,
            "population": 567868.018,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 481000.0,
            "population": 29281.591,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 52800.0,
            "population": 2900.02,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 53888.874,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 69500.0,
            "population": 1904.276,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 279000.0,
            "population": 106427.103,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 10000.0,
            "population": 1809.182,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 700000.0,
            "population": 11713.048,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 61163.0,
            "population": 2354.047,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 5000.0,
            "population": 2228.146,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 850.0,
            "population": 21.728,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 340000.0,
            "population": 6757.85,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6044.53,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 326.333,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1618000.0,
            "population": 53076.373,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1100.0,
            "population": 1317.05,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 476000.0,
            "population": 16350.881,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 9232.655,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 55000.0,
            "population": 13147.932,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 800.0,
            "population": 109.83,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 195000.0,
            "population": 2870.822,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1280.0,
            "population": 4.964,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 59734.481,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 37000.0,
            "population": 2535.873,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1381000.0,
            "population": 32890.383,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 215000.0,
            "population": 8699.997,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 21000.0,
            "population": 2666.162,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 110000.0,
            "population": 32850.72,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1011270.0,
            "population": 20783.546,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1000.0,
            "population": 3871.439,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 8000.0,
            "population": 145.413,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 10000.0,
            "population": 4387.54,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51250.0,
            "population": 22665.271,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 512200.0,
            "population": 34267.466,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 14197.372,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 140000.0,
            "population": 8095.793,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 266000.0,
            "population": 6202.949,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 87817.0,
            "population": 6570.857,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 23000.0,
            "population": 585.251,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 85.499,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7800.0,
            "population": 955.741,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 50000.0,
            "population": 5176.295,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1815962.0,
            "population": 35720.599,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38600.0,
            "population": 9671.86,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 154760.0,
            "population": 55748.531,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 800000.0,
            "population": 13971.695,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4107000.0,
            "population": 211384.068,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 50000.0,
            "population": 2818.281,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9765000.0,
            "population": 244487.287,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27500.0,
            "population": 11745.945,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 63000.0,
            "population": 44484.035,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.893,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40700.0,
            "population": 6290.365,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 959000.0,
            "population": 20375.827,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 30000.0,
            "population": 4319.224,
            "land_size": 75261.0
        }
    },
    "1972": {
        "Albania": {
            "beehives": 89900.0,
            "population": 2254.056,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 160000.0,
            "population": 15285.99,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 680000.0,
            "population": 6248.552,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 850000.0,
            "population": 24653.175,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 384000.0,
            "population": 13244.171,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 406215.0,
            "population": 7581.117,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 29881.0,
            "population": 10037.949,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3542.0,
            "population": 127.15,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 6000.0,
            "population": 4682.39,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 237000.0,
            "population": 99859.383,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 764994.0,
            "population": 8608.664,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 85000.0,
            "population": 3569.666,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 255000.0,
            "population": 6867.178,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 417300.0,
            "population": 22072.194,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1867.782,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 116000.0,
            "population": 3815.26,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 420000.0,
            "population": 10103.674,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4375000.0,
            "population": 889295.073,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 78000.0,
            "population": 22516.425,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 21.306,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 20000.0,
            "population": 1944.169,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 119600.0,
            "population": 9025.345,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 34700.0,
            "population": 627.998,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1073768.0,
            "population": 14506.938,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 37100.0,
            "population": 4755.459,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 33000.0,
            "population": 6429.379,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 937000.0,
            "population": 36102.659,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 78000.0,
            "population": 3867.309,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3000000.0,
            "population": 31525.601,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 542.844,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 30000.0,
            "population": 4651.172,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 731000.0,
            "population": 51573.265,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 360.0,
            "population": 118.44,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1486914.0,
            "population": 78901.818,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 982377.0,
            "population": 8774.514,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 48.077,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 500.0,
            "population": 325.635,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 87.587,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 176000.0,
            "population": 5941.567,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4290.534,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 732.523,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1751.0,
            "population": 721.948,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 17000.0,
            "population": 4837.332,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 43000.0,
            "population": 2882.113,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 377541.0,
            "population": 10426.086,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8000000.0,
            "population": 581087.256,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 500000.0,
            "population": 30075.297,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 48800.0,
            "population": 2996.482,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 54258.741,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 72600.0,
            "population": 1935.1,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 280000.0,
            "population": 107976.027,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 10000.0,
            "population": 1883.935,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 700000.0,
            "population": 12146.068,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 61682.0,
            "population": 2417.836,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 13000.0,
            "population": 2327.49,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 846.0,
            "population": 22.151,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 343000.0,
            "population": 6946.62,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6147.458,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2000.0,
            "population": 327.3,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1821000.0,
            "population": 54689.943,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1100.0,
            "population": 1356.67,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 470000.0,
            "population": 16696.891,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 9446.24,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 31000.0,
            "population": 13291.873,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 800.0,
            "population": 114.984,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 204000.0,
            "population": 2929.686,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1280.0,
            "population": 4.724,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 61381.987,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 37000.0,
            "population": 2597.154,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1418000.0,
            "population": 33147.072,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 215000.0,
            "population": 8789.102,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 21500.0,
            "population": 2705.834,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 99900.0,
            "population": 33506.523,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1043552.0,
            "population": 21011.137,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1125.0,
            "population": 3987.224,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 9000.0,
            "population": 147.296,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 10000.0,
            "population": 4522.893,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51000.0,
            "population": 23281.508,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 504100.0,
            "population": 34664.234,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 14636.062,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 140000.0,
            "population": 8127.034,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 264000.0,
            "population": 6251.288,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 82700.0,
            "population": 6800.141,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 25000.0,
            "population": 600.192,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 86.323,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7800.0,
            "population": 968.136,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 52000.0,
            "population": 5291.338,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1858955.0,
            "population": 36587.261,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38700.0,
            "population": 9929.636,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 159760.0,
            "population": 55892.418,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 850000.0,
            "population": 14428.34,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4085000.0,
            "population": 213269.802,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 52000.0,
            "population": 2821.461,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9822000.0,
            "population": 246716.673,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27500.0,
            "population": 12097.694,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 70000.0,
            "population": 45548.479,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.932,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 40700.0,
            "population": 6390.574,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 956000.0,
            "population": 20544.906,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 10000.0,
            "population": 4466.174,
            "land_size": 75261.0
        }
    },
    "1973": {
        "Albania": {
            "beehives": 90000.0,
            "population": 2306.29,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 170000.0,
            "population": 15709.825,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 750000.0,
            "population": 6496.962,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 850000.0,
            "population": 25056.478,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 395393.0,
            "population": 13431.794,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 409923.0,
            "population": 7607.065,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 28107.0,
            "population": 10068.934,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3748.0,
            "population": 129.294,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 0.0,
            "population": 4785.923,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 188000.0,
            "population": 102259.497,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 748236.0,
            "population": 8655.709,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 85000.0,
            "population": 3605.126,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 256307.0,
            "population": 7052.849,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 437910.0,
            "population": 22415.322,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1894.853,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 119608.0,
            "population": 3907.889,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 424000.0,
            "population": 10265.829,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4180000.0,
            "population": 909655.35,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 80000.0,
            "population": 23024.517,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 21.056,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 30000.0,
            "population": 1992.514,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 127700.0,
            "population": 9178.804,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 27800.0,
            "population": 635.107,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1047087.0,
            "population": 14605.47,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 44500.0,
            "population": 4884.461,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 40000.0,
            "population": 6614.843,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 918000.0,
            "population": 36896.554,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 80000.0,
            "population": 3964.27,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3020000.0,
            "population": 32460.423,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 554.138,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 30000.0,
            "population": 4675.456,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1096000.0,
            "population": 51979.527,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 360.0,
            "population": 122.643,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1452825.0,
            "population": 78932.455,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 993083.0,
            "population": 8840.315,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 48.738,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 500.0,
            "population": 326.565,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 89.464,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 188000.0,
            "population": 6104.53,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4357.357,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 746.173,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1488.0,
            "population": 729.916,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 17500.0,
            "population": 4918.625,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 47000.0,
            "population": 2968.989,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 457540.0,
            "population": 10453.655,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8300000.0,
            "population": 594770.134,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 525000.0,
            "population": 30905.707,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 50800.0,
            "population": 3098.791,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 54619.237,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 72600.0,
            "population": 1966.974,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 295000.0,
            "population": 109528.512,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 12200.0,
            "population": 1948.442,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 730000.0,
            "population": 12600.797,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 94798.0,
            "population": 2481.943,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 4000.0,
            "population": 2430.755,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 900.0,
            "population": 22.563,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 360000.0,
            "population": 7142.627,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6256.187,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2200.0,
            "population": 327.897,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1876000.0,
            "population": 56324.303,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1100.0,
            "population": 1397.304,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 476000.0,
            "population": 17048.518,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 9668.657,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 16000.0,
            "population": 13431.182,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 900.0,
            "population": 120.432,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 207944.0,
            "population": 2989.409,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1270.0,
            "population": 4.449,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60000.0,
            "population": 63099.406,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 40000.0,
            "population": 2659.421,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1395000.0,
            "population": 33411.589,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 218000.0,
            "population": 8907.926,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 17200.0,
            "population": 2749.855,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 105271.0,
            "population": 34154.087,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 988613.0,
            "population": 21232.621,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1250.0,
            "population": 4106.407,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 9000.0,
            "population": 148.864,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 10000.0,
            "population": 4660.725,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51000.0,
            "population": 23913.099,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 564200.0,
            "population": 35069.431,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 15094.708,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 213000.0,
            "population": 8151.598,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 264905.0,
            "population": 6292.533,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 89239.0,
            "population": 7037.851,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 36000.0,
            "population": 614.253,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 86.962,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 8000.0,
            "population": 982.01,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 53000.0,
            "population": 5409.343,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1897000.0,
            "population": 37472.336,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38700.0,
            "population": 10186.455,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 165750.0,
            "population": 56006.296,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 780000.0,
            "population": 14902.263,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4124000.0,
            "population": 215178.797,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 55000.0,
            "population": 2822.117,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9963000.0,
            "population": 248939.811,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27500.0,
            "population": 12453.718,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 75000.0,
            "population": 46603.525,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 8.997,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 41400.0,
            "population": 6500.816,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 776000.0,
            "population": 20720.095,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 10000.0,
            "population": 4619.546,
            "land_size": 75261.0
        }
    },
    "1974": {
        "Albania": {
            "beehives": 90000.0,
            "population": 2358.846,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 175000.0,
            "population": 16149.025,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 750000.0,
            "population": 6761.38,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 850000.0,
            "population": 25462.302,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 409238.0,
            "population": 13605.57,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 361624.0,
            "population": 7626.29,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 26918.0,
            "population": 10098.209,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 4219.0,
            "population": 131.307,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 165000.0,
            "population": 104706.198,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 728063.0,
            "population": 8699.176,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 86000.0,
            "population": 3646.431,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 260000.0,
            "population": 7247.287,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 473570.0,
            "population": 22745.903,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 504173.0,
            "population": 1924.388,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 3999.921,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 424000.0,
            "population": 10428.798,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4185000.0,
            "population": 928998.074,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 80000.0,
            "population": 23538.386,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 20.687,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 40000.0,
            "population": 2042.241,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 133900.0,
            "population": 9320.945,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 18500.0,
            "population": 642.332,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1050569.0,
            "population": 14712.387,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 51250.0,
            "population": 5014.189,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 40000.0,
            "population": 6803.28,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1076000.0,
            "population": 37708.146,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 81000.0,
            "population": 4060.26,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3130000.0,
            "population": 33325.335,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 565.415,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 30000.0,
            "population": 4698.779,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1039282.0,
            "population": 52356.796,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 400.0,
            "population": 126.924,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1326174.0,
            "population": 78909.807,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1003000.0,
            "population": 8919.244,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 49.234,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 520.0,
            "population": 327.422,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 70.0,
            "population": 91.377,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 194000.0,
            "population": 6268.707,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4424.03,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 757.674,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 1942.0,
            "population": 737.847,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5003.71,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 50771.0,
            "population": 3059.239,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 355143.0,
            "population": 10486.183,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8300000.0,
            "population": 608802.6,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 552000.0,
            "population": 31786.471,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 53800.0,
            "population": 3200.53,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 750000.0,
            "population": 54957.794,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 73300.0,
            "population": 1998.309,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 295000.0,
            "population": 111022.689,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 15550.0,
            "population": 2007.735,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 760000.0,
            "population": 13077.341,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 95000.0,
            "population": 2536.778,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 13672.0,
            "population": 2536.888,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 950.0,
            "population": 22.983,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 366700.0,
            "population": 7345.78,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6368.348,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 2600.0,
            "population": 328.072,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1996000.0,
            "population": 57966.804,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1150.0,
            "population": 1438.425,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 480000.0,
            "population": 17413.144,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 9906.965,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 31000.0,
            "population": 13562.438,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 900.0,
            "population": 125.642,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 208448.0,
            "population": 3042.177,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1270.0,
            "population": 4.191,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 60800.0,
            "population": 64905.998,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 42000.0,
            "population": 2723.812,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1361000.0,
            "population": 33685.777,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 220000.0,
            "population": 9039.975,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 16200.0,
            "population": 2796.663,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 125400.0,
            "population": 34780.882,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 866000.0,
            "population": 21450.41,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 625.0,
            "population": 4231.578,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 9000.0,
            "population": 150.198,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 7500.0,
            "population": 4797.187,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51000.0,
            "population": 24552.54,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 616000.0,
            "population": 35476.423,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 15577.062,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 166000.0,
            "population": 8173.968,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 295500.0,
            "population": 6322.013,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 86987.0,
            "population": 7283.177,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 624.555,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 87.582,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 8000.0,
            "population": 996.493,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 53500.0,
            "population": 5530.975,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1887000.0,
            "population": 38370.283,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38737.0,
            "population": 10453.037,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 178750.0,
            "population": 56092.066,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 620000.0,
            "population": 15388.936,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4210000.0,
            "population": 217114.909,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 68000.0,
            "population": 2824.095,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9783000.0,
            "population": 251148.576,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27500.0,
            "population": 12816.955,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 80000.0,
            "population": 47657.561,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 9.124,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 41400.0,
            "population": 6629.999,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 789000.0,
            "population": 20899.931,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 15000.0,
            "population": 4778.724,
            "land_size": 75261.0
        }
    },
    "1975": {
        "Albania": {
            "beehives": 90000.0,
            "population": 2411.732,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 180000.0,
            "population": 16607.707,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 750000.0,
            "population": 7024.0,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 850000.0,
            "population": 25865.776,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 491354.0,
            "population": 13773.288,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 375512.0,
            "population": 7637.689,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 25782.0,
            "population": 10125.569,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 5836.0,
            "population": 133.26,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 200000.0,
            "population": 107216.205,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 712657.0,
            "population": 8738.392,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 86000.0,
            "population": 3700.88,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 262000.0,
            "population": 7451.054,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 508450.0,
            "population": 23059.265,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1958.367,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 4088.564,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 444000.0,
            "population": 10592.307,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4190000.0,
            "population": 947156.395,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 82607.0,
            "population": 24065.507,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 20.234,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 46000.0,
            "population": 2094.188,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 142200.0,
            "population": 9446.442,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 7500.0,
            "population": 649.751,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1072521.0,
            "population": 14822.495,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 48650.0,
            "population": 5144.637,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 46000.0,
            "population": 6994.334,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1155000.0,
            "population": 38549.142,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 82000.0,
            "population": 4154.692,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3200000.0,
            "population": 34072.293,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 576.626,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 31000.0,
            "population": 4718.749,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 970000.0,
            "population": 52688.576,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 350.0,
            "population": 131.233,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1588177.0,
            "population": 78856.039,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 998000.0,
            "population": 9014.085,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 49.586,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 328.493,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 100.0,
            "population": 93.352,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 198000.0,
            "population": 6433.728,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4491.248,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 765.989,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3000.0,
            "population": 745.841,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5094.577,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 52000.0,
            "population": 3153.253,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 349116.0,
            "population": 10526.78,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8400000.0,
            "population": 623102.897,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 579000.0,
            "population": 32729.772,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 55800.0,
            "population": 3296.935,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 800000.0,
            "population": 55265.284,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 80000.0,
            "population": 2028.016,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 280000.0,
            "population": 112413.359,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 21100.0,
            "population": 2065.913,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 780000.0,
            "population": 13575.907,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 67000.0,
            "population": 2575.749,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 20000.0,
            "population": 2645.139,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1000.0,
            "population": 23.438,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 373300.0,
            "population": 7556.026,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6482.278,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 3000.0,
            "population": 327.838,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2037000.0,
            "population": 59607.953,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1200.0,
            "population": 1479.651,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 451000.0,
            "population": 17796.164,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 10165.215,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 31000.0,
            "population": 13683.291,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1000.0,
            "population": 130.264,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 204551.0,
            "population": 3082.633,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1500.0,
            "population": 3.976,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 61600.0,
            "population": 66816.877,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 43000.0,
            "population": 2791.241,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1327400.0,
            "population": 33970.724,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 220000.0,
            "population": 9172.241,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 14800.0,
            "population": 2844.927,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 157800.0,
            "population": 35378.661,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 759000.0,
            "population": 21665.643,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1125.0,
            "population": 4364.706,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 151.359,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9600.0,
            "population": 4929.846,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51000.0,
            "population": 25195.187,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 586000.0,
            "population": 35879.209,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 16085.753,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8197.34,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 300000.0,
            "population": 6337.025,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 86066.0,
            "population": 7535.714,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 629.227,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 700.0,
            "population": 88.318,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 8000.0,
            "population": 1010.936,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 57000.0,
            "population": 5656.914,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 1973000.0,
            "population": 39277.258,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38800.0,
            "population": 10737.403,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 192760.0,
            "population": 56152.333,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 710000.0,
            "population": 15885.229,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4206000.0,
            "population": 219081.251,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 68000.0,
            "population": 2830.176,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9597000.0,
            "population": 253339.331,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27500.0,
            "population": 13189.509,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 27000.0,
            "population": 48718.189,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 9.32,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 41500.0,
            "population": 6784.695,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 856000.0,
            "population": 21083.037,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 30000.0,
            "population": 4943.283,
            "land_size": 75261.0
        }
    },
    "1976": {
        "Albania": {
            "beehives": 90000.0,
            "population": 2464.983,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 182000.0,
            "population": 17085.801,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 750000.0,
            "population": 7279.509,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 850000.0,
            "population": 26264.681,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 497037.0,
            "population": 13935.731,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 344883.0,
            "population": 7640.749,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 23780.0,
            "population": 10151.341,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 6705.0,
            "population": 135.147,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 220000.0,
            "population": 109790.938,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 709982.0,
            "population": 8772.557,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 86000.0,
            "population": 3770.871,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 264000.0,
            "population": 7664.406,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 530930.0,
            "population": 23354.586,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 500000.0,
            "population": 1997.014,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 121000.0,
            "population": 4173.135,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 469000.0,
            "population": 10756.878,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4195000.0,
            "population": 964005.563,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 85219.0,
            "population": 24608.113,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 19.692,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 46000.0,
            "population": 2148.677,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 142900.0,
            "population": 9554.188,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 21400.0,
            "population": 657.527,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1056201.0,
            "population": 14936.267,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 40400.0,
            "population": 5275.77,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 46000.0,
            "population": 7187.787,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1093000.0,
            "population": 39422.73,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 125000.0,
            "population": 4247.502,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3250000.0,
            "population": 34676.124,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 587.557,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 30000.0,
            "population": 4734.437,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1061650.0,
            "population": 52969.317,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 200.0,
            "population": 135.549,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1489471.0,
            "population": 78781.733,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1035000.0,
            "population": 9127.049,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 49.78,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 330.009,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 130.0,
            "population": 95.385,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 200000.0,
            "population": 6599.214,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4559.242,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 770.421,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3000.0,
            "population": 754.101,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5191.632,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 52000.0,
            "population": 3251.145,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 367000.0,
            "population": 10577.951,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8300000.0,
            "population": 637630.087,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 608000.0,
            "population": 33733.961,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 55800.0,
            "population": 3387.049,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 790000.0,
            "population": 55537.956,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 80000.0,
            "population": 2055.365,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 280000.0,
            "population": 113679.191,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 26700.0,
            "population": 2123.18,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 800000.0,
            "population": 14096.263,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 60000.0,
            "population": 2596.406,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 20000.0,
            "population": 2754.696,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1100.0,
            "population": 23.931,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 380000.0,
            "population": 7773.449,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6596.728,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 4000.0,
            "population": 327.166,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2059012.0,
            "population": 61242.19,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1300.0,
            "population": 1520.865,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 460000.0,
            "population": 18198.844,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 10443.953,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 150000.0,
            "population": 13793.11,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1000.0,
            "population": 134.173,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 205500.0,
            "population": 3108.57,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1700.0,
            "population": 3.807,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 62400.0,
            "population": 68834.326,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 47000.0,
            "population": 2861.867,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1120000.0,
            "population": 34266.1,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 220000.0,
            "population": 9302.298,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 13500.0,
            "population": 2894.674,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 150955.0,
            "population": 35942.029,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 855300.0,
            "population": 21879.086,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1250.0,
            "population": 4506.109,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 152.367,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 12000.0,
            "population": 5057.378,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 51000.0,
            "population": 25836.888,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 588000.0,
            "population": 36276.752,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 16620.198,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8223.249,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 300000.0,
            "population": 6335.974,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 100868.0,
            "population": 7794.662,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 627.251,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 89.234,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 8000.0,
            "population": 1025.107,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 61000.0,
            "population": 5786.478,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2027000.0,
            "population": 40189.567,
            "land_size": 78535.0
        },
        "Uganda": {
            "beehives": 38800.0,
            "population": 11042.974,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 187000.0,
            "population": 56188.348,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 750000.0,
            "population": 16390.159,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4269000.0,
            "population": 221086.429,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 72000.0,
            "population": 2841.372,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9241000.0,
            "population": 255514.016,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27600.0,
            "population": 13572.208,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 35000.0,
            "population": 49785.282,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 9.589,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 42300.0,
            "population": 6967.941,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 820000.0,
            "population": 21268.702,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 5112.823,
            "land_size": 75261.0
        }
    },
    "1977": {
        "Albania": {
            "beehives": 100000.0,
            "population": 2518.685,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 185000.0,
            "population": 17582.904,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 750000.0,
            "population": 7533.735,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 900000.0,
            "population": 26661.398,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 492942.0,
            "population": 14092.548,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 369801.0,
            "population": 7636.576,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 23744.0,
            "population": 10175.664,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 6627.0,
            "population": 136.989,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 220000.0,
            "population": 112425.392,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 702151.0,
            "population": 8801.904,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 86000.0,
            "population": 3854.445,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 265000.0,
            "population": 7887.56,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 546490.0,
            "population": 23634.387,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 440000.0,
            "population": 2039.919,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 121000.0,
            "population": 4255.248,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 499000.0,
            "population": 10922.779,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4300000.0,
            "population": 979633.74,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 80000.0,
            "population": 25164.545,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 19.07,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 52000.0,
            "population": 2205.615,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 148500.0,
            "population": 9646.142,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 27100.0,
            "population": 665.525,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1025748.0,
            "population": 15053.229,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 48450.0,
            "population": 5407.5,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 52000.0,
            "population": 7383.724,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 949000.0,
            "population": 40329.589,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 105900.0,
            "population": 4338.458,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3167000.0,
            "population": 35168.862,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 598.296,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 30000.0,
            "population": 4746.932,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 814000.0,
            "population": 53208.554,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 250.0,
            "population": 139.891,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1506747.0,
            "population": 78687.323,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1108000.0,
            "population": 9254.978,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 49.844,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 900.0,
            "population": 331.908,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 150.0,
            "population": 97.477,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 200000.0,
            "population": 6765.516,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4628.877,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 771.737,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3200.0,
            "population": 762.424,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5294.619,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 52000.0,
            "population": 3352.825,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 366814.0,
            "population": 10636.562,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8300000.0,
            "population": 652408.776,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 639000.0,
            "population": 34803.045,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 55800.0,
            "population": 3472.118,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 790000.0,
            "population": 55777.88,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 80000.0,
            "population": 2080.831,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 326025.0,
            "population": 114827.832,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 34340.0,
            "population": 2179.363,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 950000.0,
            "population": 14638.89,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 55000.0,
            "population": 2601.74,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 30000.0,
            "population": 2865.637,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1156.0,
            "population": 24.448,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 196000.0,
            "population": 7998.164,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6712.267,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 5200.0,
            "population": 326.19,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2080060.0,
            "population": 62869.903,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1400.0,
            "population": 1562.209,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 478000.0,
            "population": 18620.093,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 10738.533,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 77000.0,
            "population": 13892.917,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1100.0,
            "population": 137.47,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 207237.0,
            "population": 3122.406,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1500.0,
            "population": 3.686,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 63200.0,
            "population": 70958.169,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 44000.0,
            "population": 2935.712,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1248700.0,
            "population": 34571.226,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 220000.0,
            "population": 9431.043,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 13100.0,
            "population": 2945.851,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 159354.0,
            "population": 36475.413,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 955300.0,
            "population": 22087.896,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1250.0,
            "population": 4655.383,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 153.224,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 14400.0,
            "population": 5181.514,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 26480.913,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 629000.0,
            "population": 36666.767,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 17179.179,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8250.695,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 300000.0,
            "population": 6321.815,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 116221.0,
            "population": 8060.649,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 619.816,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 90.273,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7400.0,
            "population": 1039.212,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 65000.0,
            "population": 5919.965,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2146000.0,
            "population": 41108.297,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 0.0,
            "population": 6.65,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 38800.0,
            "population": 11368.615,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 180000.0,
            "population": 56203.595,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 800000.0,
            "population": 16905.214,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4323000.0,
            "population": 223135.663,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 60000.0,
            "population": 2856.958,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9429000.0,
            "population": 257685.505,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 22000.0,
            "population": 13964.379,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 40000.0,
            "population": 50861.162,
            "land_size": 32957.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 400.0,
            "population": 9.926,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 43000.0,
            "population": 7178.675,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 780000.0,
            "population": 21456.609,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 50000.0,
            "population": 5287.548,
            "land_size": 75261.0
        }
    },
    "1978": {
        "Albania": {
            "beehives": 100000.0,
            "population": 2572.85,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 187000.0,
            "population": 18102.266,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 800000.0,
            "population": 7790.707,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1000000.0,
            "population": 27061.047,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 478617.0,
            "population": 14249.401,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 396846.0,
            "population": 7627.759,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 20115.0,
            "population": 10197.887,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 7499.0,
            "population": 138.965,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 257000.0,
            "population": 115121.153,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 682974.0,
            "population": 8828.026,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 86000.0,
            "population": 3949.266,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 268000.0,
            "population": 8121.084,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 566900.0,
            "population": 23901.717,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 525000.0,
            "population": 2087.663,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 122000.0,
            "population": 4337.291,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 11089.165,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4356919.0,
            "population": 994379.125,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 82000.0,
            "population": 25733.673,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 18.441,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 52000.0,
            "population": 2264.946,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 154800.0,
            "population": 9724.044,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 27400.0,
            "population": 673.247,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1031620.0,
            "population": 15166.116,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 60000.0,
            "population": 5539.59,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 55000.0,
            "population": 7582.353,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 894000.0,
            "population": 41275.736,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 118600.0,
            "population": 4426.675,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3330000.0,
            "population": 35630.07,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 609.383,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 30200.0,
            "population": 4758.252,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1153638.0,
            "population": 53423.112,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 250.0,
            "population": 144.277,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1580848.0,
            "population": 78573.586,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1079000.0,
            "population": 9388.728,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 49.86,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 900.0,
            "population": 333.913,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 180.0,
            "population": 99.63,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 190000.0,
            "population": 6933.906,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4702.376,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 772.142,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3500.0,
            "population": 770.125,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5404.019,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 55000.0,
            "population": 3458.095,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 415000.0,
            "population": 10693.323,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8300000.0,
            "population": 667499.806,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 671000.0,
            "population": 35960.805,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 55800.0,
            "population": 3552.298,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 800000.0,
            "population": 55988.981,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 80000.0,
            "population": 2105.907,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 323253.0,
            "population": 115879.211,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 33520.0,
            "population": 2237.943,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1000000.0,
            "population": 15205.374,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 75000.0,
            "population": 2597.205,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 30000.0,
            "population": 2979.093,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1147.0,
            "population": 24.975,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 167000.0,
            "population": 8230.218,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 6831.085,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 5000.0,
            "population": 325.286,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2142300.0,
            "population": 64494.869,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1600.0,
            "population": 1603.906,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 482000.0,
            "population": 19059.77,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 11041.204,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 77000.0,
            "population": 13984.06,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1100.0,
            "population": 140.273,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 215000.0,
            "population": 3128.956,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1200.0,
            "population": 3.599,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 64000.0,
            "population": 73197.258,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 46000.0,
            "population": 3013.282,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2000600.0,
            "population": 34885.803,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 225000.0,
            "population": 9552.604,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 13000.0,
            "population": 2996.828,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 238356.0,
            "population": 36992.188,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 948600.0,
            "population": 22285.507,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1375.0,
            "population": 4812.872,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 153.987,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 15200.0,
            "population": 5306.681,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 27138.965,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 658000.0,
            "population": 37040.396,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 17763.504,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8277.414,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 272998.0,
            "population": 6302.044,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 119650.0,
            "population": 8336.418,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 610.054,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 91.335,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7209.0,
            "population": 1053.558,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 69000.0,
            "population": 6060.151,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2047000.0,
            "population": 42039.992,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 0.0,
            "population": 7.014,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 37500.0,
            "population": 11712.53,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 182000.0,
            "population": 56205.913,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 850000.0,
            "population": 17432.757,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4090000.0,
            "population": 225223.303,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 60000.0,
            "population": 2875.728,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9206000.0,
            "population": 259873.06,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 12500.0,
            "population": 14364.727,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 46000.0,
            "population": 51959.015,
            "land_size": 32957.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 10.323,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 43700.0,
            "population": 7414.158,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 899000.0,
            "population": 21646.137,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 30000.0,
            "population": 5468.262,
            "land_size": 75261.0
        }
    },
    "1979": {
        "Albania": {
            "beehives": 100000.0,
            "population": 2627.505,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 188000.0,
            "population": 18647.815,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 800000.0,
            "population": 8058.067,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1100000.0,
            "population": 27471.036,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 501153.0,
            "population": 14413.0,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 399357.0,
            "population": 7617.884,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 17363.0,
            "population": 10217.166,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 6700.0,
            "population": 141.305,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 291000.0,
            "population": 117878.411,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 652746.0,
            "population": 8853.201,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 86000.0,
            "population": 4051.234,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 270000.0,
            "population": 8365.567,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 577200.0,
            "population": 24161.124,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 634000.0,
            "population": 2140.777,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 124000.0,
            "population": 4422.745,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 470000.0,
            "population": 11254.877,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 4429315.0,
            "population": 1008732.454,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 87000.0,
            "population": 26312.994,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 17.902,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 52000.0,
            "population": 2326.464,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 145700.0,
            "population": 9790.851,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 33400.0,
            "population": 680.005,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1014936.0,
            "population": 15265.749,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 65000.0,
            "population": 5671.797,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 56000.0,
            "population": 7784.072,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 897000.0,
            "population": 42267.435,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 125000.0,
            "population": 4511.129,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3330000.0,
            "population": 36171.738,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 621.585,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 32000.0,
            "population": 4771.345,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1350000.0,
            "population": 53637.069,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 400.0,
            "population": 148.741,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1533953.0,
            "population": 78438.164,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1094000.0,
            "population": 9515.746,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 49.946,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 335.593,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 180.0,
            "population": 101.844,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 185000.0,
            "population": 7106.145,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4782.495,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 774.726,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3600.0,
            "population": 776.254,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5520.187,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 56000.0,
            "population": 3566.654,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 563000.0,
            "population": 10735.502,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 8500000.0,
            "population": 682995.354,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 704000.0,
            "population": 37237.137,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 60800.0,
            "population": 3628.308,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 800000.0,
            "population": 56177.851,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2132.785,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 326292.0,
            "population": 116867.356,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 40755.0,
            "population": 2303.122,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1054100.0,
            "population": 15797.776,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 75000.0,
            "population": 2590.902,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 30000.0,
            "population": 3096.729,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1172.0,
            "population": 25.459,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 113000.0,
            "population": 8469.672,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 31000.0,
            "population": 6956.402,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 5000.0,
            "population": 324.929,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2254800.0,
            "population": 66123.897,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1800.0,
            "population": 1646.291,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 485000.0,
            "population": 19516.942,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 11341.402,
            "land_size": 79938.0
        },
        "Netherlands": {
            "beehives": 62000.0,
            "population": 14068.593,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1200.0,
            "population": 142.768,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 226870.0,
            "population": 3135.297,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1200.0,
            "population": 3.511,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": 2046.0,
            "population": 1091.852,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 65000.0,
            "population": 75561.131,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 52000.0,
            "population": 3095.145,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2121600.0,
            "population": 35209.25,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 225000.0,
            "population": 9660.746,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 10000.0,
            "population": 3045.6,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 260102.0,
            "population": 37511.315,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1046100.0,
            "population": 22463.308,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1500.0,
            "population": 4978.817,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 12000.0,
            "population": 154.739,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 16000.0,
            "population": 5439.066,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 27827.32,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 733000.0,
            "population": 37386.81,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 18374.017,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8300.003,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 271000.0,
            "population": 6286.915,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 122344.0,
            "population": 8625.69,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 602.358,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 92.268,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7200.0,
            "population": 1068.64,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 73000.0,
            "population": 6210.756,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2145000.0,
            "population": 42994.041,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 0.0,
            "population": 7.358,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 37500.0,
            "population": 12071.145,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 184000.0,
            "population": 56205.083,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 900000.0,
            "population": 17976.222,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4163000.0,
            "population": 227339.318,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 90000.0,
            "population": 2895.688,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8465000.0,
            "population": 262100.476,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 6600.0,
            "population": 14771.271,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 56000.0,
            "population": 53095.408,
            "land_size": 33161.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 10.762,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 44400.0,
            "population": 7669.694,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 885000.0,
            "population": 21836.652,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 5656.139,
            "land_size": 75261.0
        }
    },
    "1980": {
        "Albania": {
            "beehives": 110000.0,
            "population": 2682.69,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 190000.0,
            "population": 19221.665,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 800000.0,
            "population": 8341.289,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1100000.0,
            "population": 27896.528,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 510812.0,
            "population": 14588.405,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 394000.0,
            "population": 7609.752,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 18044.0,
            "population": 10233.033,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 7400.0,
            "population": 144.155,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 280000.0,
            "population": 120694.009,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 621946.0,
            "population": 8878.791,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 87000.0,
            "population": 4157.298,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 272000.0,
            "population": 8621.406,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 607800.0,
            "population": 24416.886,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 644000.0,
            "population": 2199.356,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 4514.43,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 475000.0,
            "population": 11419.348,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 5552809.0,
            "population": 1023101.506,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 87000.0,
            "population": 26900.506,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 17.512,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 50000.0,
            "population": 2389.977,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 146400.0,
            "population": 9849.459,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 33700.0,
            "population": 685.405,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 992702.0,
            "population": 15345.814,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 65000.0,
            "population": 5803.927,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 62000.0,
            "population": 7989.186,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 858000.0,
            "population": 43309.063,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 126000.0,
            "population": 4591.134,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3420000.0,
            "population": 36875.128,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 635.307,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 33000.0,
            "population": 4788.243,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1100000.0,
            "population": 53868.009,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 400.0,
            "population": 153.301,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1528800.0,
            "population": 78283.1,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1128000.0,
            "population": 9627.002,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 50.179,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 336.685,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 190.0,
            "population": 104.133,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 180600.0,
            "population": 7283.459,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4871.435,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 781.677,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3700.0,
            "population": 780.153,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5643.173,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 57000.0,
            "population": 3678.279,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 605000.0,
            "population": 10754.286,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9000000.0,
            "population": 698952.844,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 739000.0,
            "population": 38650.246,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 60800.0,
            "population": 3700.919,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 830000.0,
            "population": 56349.349,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2162.846,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 320171.0,
            "population": 117816.94,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 26915.0,
            "population": 2377.995,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1084000.0,
            "population": 16417.197,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 75000.0,
            "population": 2588.929,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 30000.0,
            "population": 3219.466,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1201.0,
            "population": 25.879,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 102400.0,
            "population": 8716.553,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 31000.0,
            "population": 7090.126,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 5000.0,
            "population": 325.454,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2380600.0,
            "population": 67761.372,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1900.0,
            "population": 1689.622,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 487000.0,
            "population": 19990.012,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 24000.0,
            "population": 11630.194,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 400.0,
            "population": 34224.313,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 39000.0,
            "population": 14148.415,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1200.0,
            "population": 145.144,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 233810.0,
            "population": 3146.619,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1200.0,
            "population": 3.404,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": 3148.0,
            "population": 1154.377,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 65200.0,
            "population": 78054.343,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 41000.0,
            "population": 3181.625,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2208000.0,
            "population": 35539.72,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 228000.0,
            "population": 9750.964,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 9251.0,
            "population": 3090.691,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 244764.0,
            "population": 38045.607,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1097400.0,
            "population": 22615.639,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1250.0,
            "population": 5153.312,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 12000.0,
            "population": 155.525,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 17000.0,
            "population": 5583.165,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 28556.769,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 797000.0,
            "population": 37698.196,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 19010.072,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8316.338,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 272000.0,
            "population": 6283.832,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 134700.0,
            "population": 8930.774,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 599.905,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 92.971,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 7000.0,
            "population": 1084.744,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 75000.0,
            "population": 6374.039,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2226000.0,
            "population": 43975.971,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 0.0,
            "population": 7.637,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 32500.0,
            "population": 12442.334,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 186000.0,
            "population": 56209.171,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 950000.0,
            "population": 18538.259,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4141000.0,
            "population": 229476.354,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 103305.0,
            "population": 2915.389,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8189000.0,
            "population": 264383.012,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 5500.0,
            "population": 15182.611,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 65000.0,
            "population": 54281.846,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 11.231,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 45100.0,
            "population": 7941.898,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 861000.0,
            "population": 22027.061,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 30000.0,
            "population": 5851.825,
            "land_size": 75261.0
        }
    },
    "1981": {
        "Albania": {
            "beehives": 106000.0,
            "population": 2737.026,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 193000.0,
            "population": 19824.301,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 800000.0,
            "population": 8640.446,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1300000.0,
            "population": 28338.515,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 530907.0,
            "population": 14777.243,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 397400.0,
            "population": 7604.513,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 15566.0,
            "population": 10245.373,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 9560.0,
            "population": 147.566,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 300000.0,
            "population": 123570.327,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 619362.0,
            "population": 8905.094,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 87000.0,
            "population": 4266.52,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 274000.0,
            "population": 8888.535,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 633500.0,
            "population": 24668.167,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 712000.0,
            "population": 2264.442,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 4612.849,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 480000.0,
            "population": 11582.014,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6155564.0,
            "population": 1037429.004,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 88000.0,
            "population": 27496.617,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 10.0,
            "population": 17.304,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 50000.0,
            "population": 2455.588,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 165900.0,
            "population": 9898.889,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 41300.0,
            "population": 689.173,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 958451.0,
            "population": 15402.865,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 65000.0,
            "population": 5935.909,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 60000.0,
            "population": 8197.652,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 947000.0,
            "population": 44400.113,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 150000.0,
            "population": 4666.364,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3500000.0,
            "population": 37769.089,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 651.021,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 35000.0,
            "population": 4809.813,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 54121.013,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 600.0,
            "population": 157.953,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1550800.0,
            "population": 78107.857,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1191000.0,
            "population": 9719.841,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 50.584,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 336.941,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 190.0,
            "population": 106.485,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 182560.0,
            "population": 7466.488,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 4969.592,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 793.806,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3800.0,
            "population": 781.732,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18000.0,
            "population": 5773.366,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 57000.0,
            "population": 3792.919,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 644000.0,
            "population": 10746.481,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9000000.0,
            "population": 715384.993,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 776000.0,
            "population": 40199.906,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 63800.0,
            "population": 3770.688,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 850000.0,
            "population": 56505.478,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2196.921,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 315489.0,
            "population": 118732.841,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 31070.0,
            "population": 2464.867,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1112000.0,
            "population": 17063.876,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 70000.0,
            "population": 2594.302,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 33000.0,
            "population": 3347.781,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1164.0,
            "population": 26.238,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 118000.0,
            "population": 8971.345,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 31000.0,
            "population": 7234.728,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 5000.0,
            "population": 326.993,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2532200.0,
            "population": 69407.624,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2000.0,
            "population": 1733.475,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 492000.0,
            "population": 20479.715,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 25000.0,
            "population": 11913.088,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 1000.0,
            "population": 34976.462,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 39000.0,
            "population": 14223.763,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1300.0,
            "population": 147.405,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 222000.0,
            "population": 3164.828,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 1200.0,
            "population": 3.269,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": 3305.0,
            "population": 1220.585,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 65500.0,
            "population": 80680.459,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 45000.0,
            "population": 3272.912,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2226500.0,
            "population": 35878.454,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 230000.0,
            "population": 9820.872,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 10094.0,
            "population": 3131.499,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 314694.0,
            "population": 38602.289,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1116900.0,
            "population": 22737.209,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 875.0,
            "population": 5329.252,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 156.407,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 18000.0,
            "population": 5740.444,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 29333.103,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1013000.0,
            "population": 37971.972,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 19673.737,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8325.493,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 272000.0,
            "population": 6295.925,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 142000.0,
            "population": 9252.851,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 603.842,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 93.409,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6800.0,
            "population": 1101.983,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 79600.0,
            "population": 6551.231,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2348000.0,
            "population": 44988.414,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 0.0,
            "population": 7.827,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 27500.0,
            "population": 12825.082,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 188000.0,
            "population": 56220.735,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1000000.0,
            "population": 19120.68,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4213000.0,
            "population": 231636.058,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 130000.0,
            "population": 2934.613,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8000000.0,
            "population": 266707.707,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 4200.0,
            "population": 15597.886,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 70000.0,
            "population": 55522.803,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 11.756,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 45800.0,
            "population": 8231.91,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 892000.0,
            "population": 22215.555,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 6055.366,
            "land_size": 75261.0
        }
    },
    "1982": {
        "Albania": {
            "beehives": 100000.0,
            "population": 2790.275,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 195000.0,
            "population": 20452.902,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 850000.0,
            "population": 8952.95,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1200000.0,
            "population": 28794.548,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 551518.0,
            "population": 14979.205,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 399700.0,
            "population": 7602.181,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 15260.0,
            "population": 10254.922,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 9900.0,
            "population": 151.5,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 300000.0,
            "population": 126498.314,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 580782.0,
            "population": 8930.707,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 87000.0,
            "population": 4379.724,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 276000.0,
            "population": 9166.816,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 663450.0,
            "population": 24916.542,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 779000.0,
            "population": 2335.333,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 4718.162,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 480000.0,
            "population": 11743.911,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6347365.0,
            "population": 1051735.68,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 89000.0,
            "population": 28101.819,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 11.0,
            "population": 17.263,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 50000.0,
            "population": 2523.354,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 183500.0,
            "population": 9940.317,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 28200.0,
            "population": 691.702,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 948185.0,
            "population": 15439.144,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 65000.0,
            "population": 6067.77,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 56000.0,
            "population": 8409.397,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1039000.0,
            "population": 45539.296,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 160000.0,
            "population": 4737.257,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3500000.0,
            "population": 38832.071,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 668.28,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 64000.0,
            "population": 4835.1,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 54391.471,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 500.0,
            "population": 162.685,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1563100.0,
            "population": 77926.011,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1165049.0,
            "population": 9796.829,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 51.157,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 336.609,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 190.0,
            "population": 108.906,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 185400.0,
            "population": 7654.819,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5077.082,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 810.405,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3900.0,
            "population": 781.246,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 18500.0,
            "population": 5910.227,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 58000.0,
            "population": 3910.64,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 650000.0,
            "population": 10715.847,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9400000.0,
            "population": 732239.504,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 815000.0,
            "population": 41869.236,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 65800.0,
            "population": 3838.113,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 860000.0,
            "population": 56644.863,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2234.057,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 307334.0,
            "population": 119605.25,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 31020.0,
            "population": 2563.534,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1140000.0,
            "population": 17736.326,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 75000.0,
            "population": 2606.139,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 36000.0,
            "population": 3480.454,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1123.0,
            "population": 26.536,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 117000.0,
            "population": 9234.129,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 7388.668,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 329.445,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2532200.0,
            "population": 71058.654,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2200.0,
            "population": 1777.727,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 496000.0,
            "population": 20984.009,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 26000.0,
            "population": 12189.824,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 2000.0,
            "population": 35734.272,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 31000.0,
            "population": 14295.217,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1300.0,
            "population": 149.535,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 251077.0,
            "population": 3188.539,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 3.127,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 65700.0,
            "population": 83431.605,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 43000.0,
            "population": 3368.773,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2375000.0,
            "population": 36221.542,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 230000.0,
            "population": 9870.823,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 11906.0,
            "population": 3168.343,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 395307.0,
            "population": 39175.212,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1149500.0,
            "population": 22830.554,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1000.0,
            "population": 5504.842,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 157.372,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 19000.0,
            "population": 5909.739,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 30150.448,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1035000.0,
            "population": 38209.693,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 20361.559,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8329.425,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 273000.0,
            "population": 6321.409,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 144000.0,
            "population": 9590.227,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 613.238,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 93.641,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6200.0,
            "population": 1120.02,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 83600.0,
            "population": 6740.529,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2547768.0,
            "population": 46025.411,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 0.0,
            "population": 7.956,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 25000.0,
            "population": 13221.991,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 190000.0,
            "population": 56241.412,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1050000.0,
            "population": 19723.322,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4250000.0,
            "population": 233821.844,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 141955.0,
            "population": 2953.852,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 7949000.0,
            "population": 269060.553,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 13500.0,
            "population": 16017.573,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 76000.0,
            "population": 56814.306,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 12.302,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 46500.0,
            "population": 8541.605,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 875000.0,
            "population": 22399.874,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 6265.864,
            "land_size": 75261.0
        }
    },
    "1983": {
        "Albania": {
            "beehives": 95000.0,
            "population": 2844.871,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 197000.0,
            "population": 21101.875,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 850000.0,
            "population": 9278.096,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1300000.0,
            "population": 29262.047,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 537000.0,
            "population": 15194.641,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 410601.0,
            "population": 7603.102,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 24638.0,
            "population": 10263.185,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 10000.0,
            "population": 155.822,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 300000.0,
            "population": 129448.819,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 565522.0,
            "population": 8953.121,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 87000.0,
            "population": 4497.533,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 277000.0,
            "population": 9456.494,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 684850.0,
            "population": 25171.436,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 843000.0,
            "population": 2408.317,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 4832.321,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 485000.0,
            "population": 11907.96,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6560359.0,
            "population": 1066586.302,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 90000.0,
            "population": 28714.19,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 11.0,
            "population": 17.345,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 50000.0,
            "population": 2593.02,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 200000.0,
            "population": 9981.304,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 32100.0,
            "population": 694.077,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 943323.0,
            "population": 15461.094,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 65000.0,
            "population": 6199.661,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 52000.0,
            "population": 8624.594,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1099000.0,
            "population": 46728.286,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 180000.0,
            "population": 4804.935,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3143000.0,
            "population": 40033.232,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 685.497,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 50000.0,
            "population": 4862.178,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 54675.371,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 560.0,
            "population": 167.451,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1544600.0,
            "population": 77770.213,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1197500.0,
            "population": 9860.739,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 51.829,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 336.67,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 190.0,
            "population": 111.402,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 188700.0,
            "population": 7847.472,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5195.445,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 830.207,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3900.0,
            "population": 778.948,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 19000.0,
            "population": 6051.622,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 59000.0,
            "population": 4031.325,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 600000.0,
            "population": 10669.206,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9500000.0,
            "population": 749428.958,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 856000.0,
            "population": 43636.837,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 65800.0,
            "population": 3903.955,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 880000.0,
            "population": 56765.251,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2271.736,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 299000.0,
            "population": 120427.636,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 22055.0,
            "population": 2671.413,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1300000.0,
            "population": 18431.761,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 110000.0,
            "population": 2622.072,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 3614.689,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1212.0,
            "population": 26.789,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 117000.0,
            "population": 9504.281,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 7545.166,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2690500.0,
            "population": 72709.299,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2400.0,
            "population": 1823.216,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 500000.0,
            "population": 21495.086,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 27000.0,
            "population": 12439.762,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 2000.0,
            "population": 36491.8,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 77000.0,
            "population": 14365.385,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1400.0,
            "population": 151.626,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 265042.0,
            "population": 3215.729,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.981,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 66000.0,
            "population": 86285.935,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 46000.0,
            "population": 3468.535,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2420000.0,
            "population": 36555.779,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 230000.0,
            "population": 9902.997,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 12698.0,
            "population": 3201.865,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 443853.0,
            "population": 39747.794,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1135000.0,
            "population": 22907.302,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1000.0,
            "population": 5690.98,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 158.352,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 19000.0,
            "population": 6089.572,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 30993.758,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1109000.0,
            "population": 38413.317,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 21060.771,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8332.443,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 246630.0,
            "population": 6356.745,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 148000.0,
            "population": 9938.847,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 626.675,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 93.729,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 5500.0,
            "population": 1138.071,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 85000.0,
            "population": 6937.331,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2596106.0,
            "population": 47073.472,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 40.0,
            "population": 8.041,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 37500.0,
            "population": 13638.729,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 190000.0,
            "population": 56276.798,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1100000.0,
            "population": 20344.547,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4275000.0,
            "population": 236030.238,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 141955.0,
            "population": 2973.036,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8074000.0,
            "population": 271450.944,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 13438.0,
            "population": 16443.134,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 77000.0,
            "population": 58148.384,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 12.838,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 47200.0,
            "population": 8869.37,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 880000.0,
            "population": 22577.606,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 6481.916,
            "land_size": 75261.0
        }
    },
    "1984": {
        "Albania": {
            "beehives": 90000.0,
            "population": 2904.14,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 198000.0,
            "population": 21763.575,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 850000.0,
            "population": 9614.754,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1400000.0,
            "population": 29737.093,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 530000.0,
            "population": 15423.166,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 446348.0,
            "population": 7607.293,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 25000.0,
            "population": 10272.166,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 10000.0,
            "population": 160.347,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 400000.0,
            "population": 132383.568,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 598663.0,
            "population": 8968.917,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 87000.0,
            "population": 4621.103,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 280000.0,
            "population": 9757.841,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 692000.0,
            "population": 25444.884,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 910000.0,
            "population": 2478.382,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 4957.558,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 12078.135,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6734471.0,
            "population": 1082688.198,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 90000.0,
            "population": 29331.238,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 12.0,
            "population": 17.472,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 45731.0,
            "population": 2664.223,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 205900.0,
            "population": 10031.649,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 29900.0,
            "population": 697.714,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 969817.0,
            "population": 15478.313,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 74000.0,
            "population": 6331.764,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 48000.0,
            "population": 8843.462,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1204000.0,
            "population": 47968.642,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 197660.0,
            "population": 4871.035,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3580000.0,
            "population": 41320.653,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 700.483,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 46000.0,
            "population": 4888.204,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 54965.164,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 560.0,
            "population": 172.249,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1671000.0,
            "population": 77682.295,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1197501.0,
            "population": 9916.482,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 52.534,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 338.431,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 200.0,
            "population": 113.961,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 230000.0,
            "population": 8042.897,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5326.362,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 851.276,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 3900.0,
            "population": 775.219,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 19500.0,
            "population": 6194.687,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 60000.0,
            "population": 4154.86,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 550000.0,
            "population": 10616.744,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9600000.0,
            "population": 766833.41,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 899000.0,
            "population": 45472.791,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 65800.0,
            "population": 3969.172,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 56863.137,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2306.366,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 291000.0,
            "population": 121189.266,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 23130.0,
            "population": 2784.463,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1100000.0,
            "population": 19146.4,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 120000.0,
            "population": 2638.054,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 38000.0,
            "population": 3746.715,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1246.0,
            "population": 27.036,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 118000.0,
            "population": 9780.872,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 7694.855,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2493400.0,
            "population": 74352.631,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2800.0,
            "population": 1871.09,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 530000.0,
            "population": 22002.643,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 28000.0,
            "population": 12636.116,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 2000.0,
            "population": 37241.527,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 77000.0,
            "population": 14437.506,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1400.0,
            "population": 153.747,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 277005.0,
            "population": 3243.036,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.841,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 66300.0,
            "population": 89213.706,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 43000.0,
            "population": 3571.272,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2558000.0,
            "population": 36863.948,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 235000.0,
            "population": 9921.241,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 13860.0,
            "population": 3233.175,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 451334.0,
            "population": 40296.228,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1278700.0,
            "population": 22983.968,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 3625.0,
            "population": 5902.843,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 159.248,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 12000.0,
            "population": 6277.424,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 31841.593,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1182000.0,
            "population": 38586.708,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 21754.441,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8340.44,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 247000.0,
            "population": 6396.134,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 147000.0,
            "population": 10293.049,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 641.844,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 93.788,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 4910.0,
            "population": 1155.074,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 86000.0,
            "population": 7135.27,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2661400.0,
            "population": 48114.155,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 40.0,
            "population": 8.115,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 42500.0,
            "population": 14082.875,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 190000.0,
            "population": 56332.901,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1150000.0,
            "population": 20981.776,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4300000.0,
            "population": 238256.844,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 174477.0,
            "population": 2992.246,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 7882000.0,
            "population": 273891.079,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 19000.0,
            "population": 16876.703,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 78000.0,
            "population": 59512.619,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 500.0,
            "population": 13.293,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 9213.084,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 880000.0,
            "population": 22746.083,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 6701.54,
            "land_size": 75261.0
        }
    },
    "1985": {
        "Albania": {
            "beehives": 81000.0,
            "population": 2969.672,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 215000.0,
            "population": 22431.502,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 900000.0,
            "population": 9961.997,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1500000.0,
            "population": 30216.279,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 553000.0,
            "population": 15663.663,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 447242.0,
            "population": 7614.868,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 25000.0,
            "population": 10283.462,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 10000.0,
            "population": 164.921,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 480000.0,
            "population": 135274.08,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 582110.0,
            "population": 8975.361,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 87000.0,
            "population": 4750.837,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 283000.0,
            "population": 10070.806,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 693600.0,
            "population": 25744.81,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 977000.0,
            "population": 2542.169,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 5095.401,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 12257.236,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7016049.0,
            "population": 1100463.29,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 90000.0,
            "population": 29951.201,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 12.0,
            "population": 17.603,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 50000.0,
            "population": 2736.712,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 208200.0,
            "population": 10097.911,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 44000.0,
            "population": 703.685,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 970000.0,
            "population": 15497.941,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 71500.0,
            "population": 6464.229,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 44000.0,
            "population": 9066.109,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1363000.0,
            "population": 49258.732,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 198790.0,
            "population": 4936.807,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3600000.0,
            "population": 42656.078,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 711.775,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 50000.0,
            "population": 4911.22,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 55254.848,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 920.0,
            "population": 177.027,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1677100.0,
            "population": 77691.595,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1237298.0,
            "population": 9968.238,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 53.19,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 342.73,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 200.0,
            "population": 116.572,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 230000.0,
            "population": 8240.06,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5470.702,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 872.163,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4000.0,
            "population": 770.435,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 20000.0,
            "population": 6337.273,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 61000.0,
            "population": 4281.161,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 580000.0,
            "population": 10566.323,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9500000.0,
            "population": 784360.008,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 943000.0,
            "population": 47347.186,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 70500.0,
            "population": 4035.068,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 56936.774,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2335.51,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 285000.0,
            "population": 121883.482,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 22250.0,
            "population": 2900.049,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1200000.0,
            "population": 19877.083,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 125000.0,
            "population": 2651.995,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 38000.0,
            "population": 3873.781,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1320.0,
            "population": 27.288,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 119000.0,
            "population": 10063.495,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 7831.889,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2384500.0,
            "population": 75983.485,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3000.0,
            "population": 1921.881,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 533000.0,
            "population": 22499.11,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 29000.0,
            "population": 12764.387,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 2000.0,
            "population": 37977.086,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 77000.0,
            "population": 14513.949,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1500.0,
            "population": 155.982,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 309613.0,
            "population": 3268.236,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.719,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 66800.0,
            "population": 92191.51,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 44000.0,
            "population": 3676.21,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2605000.0,
            "population": 37133.87,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 235000.0,
            "population": 9929.184,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 14930.0,
            "population": 3263.179,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 467062.0,
            "population": 40804.402,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1326100.0,
            "population": 23071.274,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1500.0,
            "population": 6146.891,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 159.99,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 3700.0,
            "population": 6471.327,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 32678.874,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1347000.0,
            "population": 38733.876,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 60000.0,
            "population": 22430.934,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8357.652,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 251000.0,
            "population": 6435.424,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 132000.0,
            "population": 10648.632,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 657.053,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 93.896,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 4700.0,
            "population": 1170.285,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 88000.0,
            "population": 7329.594,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2585303.0,
            "population": 49133.937,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 8.219,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 45000.0,
            "population": 14559.355,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 191000.0,
            "population": 56413.553,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1200000.0,
            "population": 21633.796,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 4325000.0,
            "population": 240499.825,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 174477.0,
            "population": 3011.519,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8157000.0,
            "population": 276375.487,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 22000.0,
            "population": 17319.52,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 82000.0,
            "population": 60896.721,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 512.0,
            "population": 13.622,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 9572.175,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 885000.0,
            "population": 22902.333,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 6923.149,
            "land_size": 75261.0
        }
    },
    "1986": {
        "Albania": {
            "beehives": 83000.0,
            "population": 3044.212,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 220000.0,
            "population": 23102.389,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 900000.0,
            "population": 10320.111,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1400000.0,
            "population": 30698.964,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 560000.0,
            "population": 15917.572,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 436849.0,
            "population": 7625.393,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 25000.0,
            "population": 10297.208,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 10000.0,
            "population": 169.568,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 550000.0,
            "population": 138108.912,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 572069.0,
            "population": 8972.551,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 88000.0,
            "population": 4886.743,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 285000.0,
            "population": 10395.48,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 707400.0,
            "population": 26075.498,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 990000.0,
            "population": 2597.761,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 5247.283,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 12445.823,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6909040.0,
            "population": 1120243.308,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 90000.0,
            "population": 30572.478,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 13.0,
            "population": 17.706,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 31146.0,
            "population": 2810.242,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 203700.0,
            "population": 10183.899,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 47000.0,
            "population": 712.34,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 980000.0,
            "population": 15521.594,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 81034.0,
            "population": 6596.962,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 41000.0,
            "population": 9292.474,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1406000.0,
            "population": 50602.354,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 197000.0,
            "population": 5002.336,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3650000.0,
            "population": 44030.487,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 718.639,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 62000.0,
            "population": 4930.341,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 55545.273,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 423.0,
            "population": 181.817,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1761600.0,
            "population": 77806.147,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1239127.0,
            "population": 10015.119,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 53.797,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 350.067,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 200.0,
            "population": 119.232,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 240000.0,
            "population": 8438.604,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5629.418,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 892.522,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4000.0,
            "population": 764.446,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 20500.0,
            "population": 6478.541,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 62000.0,
            "population": 4410.269,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 690000.0,
            "population": 10519.291,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9500000.0,
            "population": 801975.244,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 991000.0,
            "population": 49260.255,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 70500.0,
            "population": 4100.538,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 920000.0,
            "population": 56983.931,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2358.161,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 268000.0,
            "population": 122509.117,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 11125.0,
            "population": 3015.299,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1500000.0,
            "population": 20622.56,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 135000.0,
            "population": 2660.872,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 39500.0,
            "population": 3994.597,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1257.0,
            "population": 27.559,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 120000.0,
            "population": 10352.12,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 7952.865,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2422729.0,
            "population": 77599.098,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3000.0,
            "population": 1976.31,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 535000.0,
            "population": 22980.335,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 30000.0,
            "population": 12808.558,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 2180.0,
            "population": 38698.482,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 78000.0,
            "population": 14595.755,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1500.0,
            "population": 158.346,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 328961.0,
            "population": 3290.304,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.609,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 67000.0,
            "population": 95215.378,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 45000.0,
            "population": 3783.074,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 2200000.0,
            "population": 37359.523,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 238000.0,
            "population": 9926.416,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 12371.0,
            "population": 3291.742,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 520962.0,
            "population": 41265.113,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1340200.0,
            "population": 23175.058,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1625.0,
            "population": 6443.751,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 160.544,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 9200.0,
            "population": 6670.663,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 33495.953,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1354000.0,
            "population": 38855.626,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 62000.0,
            "population": 23085.655,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8384.989,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 261000.0,
            "population": 6473.044,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 128000.0,
            "population": 11004.272,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 671.752,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 94.088,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 4160.0,
            "population": 1183.381,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 91000.0,
            "population": 7517.858,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2586971.0,
            "population": 50128.541,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 30.0,
            "population": 8.336,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 47000.0,
            "population": 15070.302,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 191000.0,
            "population": 56522.503,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1250000.0,
            "population": 22296.286,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3205000.0,
            "population": 242763.148,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 225000.0,
            "population": 3030.649,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8529000.0,
            "population": 278917.921,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 24000.0,
            "population": 17772.001,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 85000.0,
            "population": 62293.856,
            "land_size": 33169.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 520.0,
            "population": 13.811,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 9941.109,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 900000.0,
            "population": 23046.98,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 7146.969,
            "land_size": 75261.0
        }
    },
    "1987": {
        "Albania": {
            "beehives": 87000.0,
            "population": 3124.894,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 300000.0,
            "population": 23774.284,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 900000.0,
            "population": 10689.25,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1400000.0,
            "population": 31184.415,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 364000.0,
            "population": 16183.168,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 421238.0,
            "population": 7639.352,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 25000.0,
            "population": 10313.367,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 10000.0,
            "population": 174.32,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 600000.0,
            "population": 140891.602,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 597968.0,
            "population": 8960.556,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 88000.0,
            "population": 5027.138,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 287000.0,
            "population": 10731.064,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 699800.0,
            "population": 26432.893,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1059000.0,
            "population": 2646.84,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 5412.847,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 12642.924,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6881040.0,
            "population": 1141675.094,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 90000.0,
            "population": 31195.413,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 13.0,
            "population": 17.801,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 31146.0,
            "population": 2884.851,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 204100.0,
            "population": 10286.643,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 43200.0,
            "population": 723.376,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 970000.0,
            "population": 15547.433,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 84000.0,
            "population": 6729.933,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 40000.0,
            "population": 9522.36,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1456000.0,
            "population": 51991.7,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 197000.0,
            "population": 5067.537,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3700000.0,
            "population": 45456.653,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 721.783,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 49000.0,
            "population": 4946.373,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1200000.0,
            "population": 55837.627,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1050.0,
            "population": 186.584,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1886200.0,
            "population": 78015.731,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1237298.0,
            "population": 10057.297,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 54.373,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 359.909,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 230.0,
            "population": 121.919,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 235000.0,
            "population": 8639.108,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5801.326,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 912.754,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4000.0,
            "population": 757.448,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 21000.0,
            "population": 6618.744,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 63000.0,
            "population": 4542.214,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 693000.0,
            "population": 10474.548,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9400000.0,
            "population": 819682.102,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 1040000.0,
            "population": 51193.782,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 70500.0,
            "population": 4167.127,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 950000.0,
            "population": 57007.741,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2375.393,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 261000.0,
            "population": 123072.71,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 9000.0,
            "population": 3131.796,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1520000.0,
            "population": 21382.112,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 185000.0,
            "population": 2667.96,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 41000.0,
            "population": 4109.725,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1195.0,
            "population": 27.837,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 121000.0,
            "population": 10647.754,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 8062.219,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2119400.0,
            "population": 79200.081,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3200.0,
            "population": 2033.344,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 537000.0,
            "population": 23447.252,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 31000.0,
            "population": 12786.349,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 2710.0,
            "population": 39404.335,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": 78000.0,
            "population": 14682.649,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1500.0,
            "population": 160.872,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 340433.0,
            "population": 3310.743,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.521,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 68000.0,
            "population": 98285.755,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 46000.0,
            "population": 3891.734,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1855000.0,
            "population": 37544.331,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 240000.0,
            "population": 9914.066,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 12484.0,
            "population": 3318.834,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 534391.0,
            "population": 41686.56,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1348000.0,
            "population": 23288.4,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 2625.0,
            "population": 6779.983,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 160.965,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 6500.0,
            "population": 6875.754,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 34297.727,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1605000.0,
            "population": 38954.497,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 63000.0,
            "population": 23723.244,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 180000.0,
            "population": 8421.056,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 257000.0,
            "population": 6510.597,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 115000.0,
            "population": 11360.852,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 686.471,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 94.321,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 5000.0,
            "population": 1194.541,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 97000.0,
            "population": 7700.736,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2807765.0,
            "population": 51100.924,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 45.0,
            "population": 8.485,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 49000.0,
            "population": 15612.754,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": 191000.0,
            "population": 56658.27,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1300000.0,
            "population": 22971.2,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3190000.0,
            "population": 245052.789,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 250000.0,
            "population": 3049.581,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8700000.0,
            "population": 281473.712,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 27000.0,
            "population": 18232.73,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 87000.0,
            "population": 63701.972,
            "land_size": 33035.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 525.0,
            "population": 13.872,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 10322.043,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 900000.0,
            "population": 23177.396,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 7372.837,
            "land_size": 75261.0
        }
    },
    "1988": {
        "Albania": {
            "beehives": 82000.0,
            "population": 3200.977,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 98000.0,
            "population": 24443.467,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 950000.0,
            "population": 11068.05,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1400000.0,
            "population": 31668.949,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 366000.0,
            "population": 16452.255,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 409800.0,
            "population": 7658.84,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 27000.0,
            "population": 10333.138,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 10000.0,
            "population": 179.028,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 640000.0,
            "population": 143627.503,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 612952.0,
            "population": 8936.655,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 88000.0,
            "population": 5168.698,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 290000.0,
            "population": 11075.422,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 608420.0,
            "population": 26806.125,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1133000.0,
            "population": 2693.973,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 5589.626,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 12847.708,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7815910.0,
            "population": 1163644.75,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 31822.525,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 14.0,
            "population": 17.901,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 31146.0,
            "population": 2960.929,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 195100.0,
            "population": 10397.511,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 34900.0,
            "population": 736.474,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 970000.0,
            "population": 15574.974,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 85000.0,
            "population": 6863.441,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 38000.0,
            "population": 9755.579,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1473000.0,
            "population": 53399.246,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 170000.0,
            "population": 5133.274,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3750000.0,
            "population": 46942.808,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 722.93,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 70000.0,
            "population": 4961.087,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1066000.0,
            "population": 56126.325,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1200.0,
            "population": 191.266,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1818700.0,
            "population": 78307.525,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1254116.0,
            "population": 10101.352,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 54.878,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 370.906,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 230.0,
            "population": 124.673,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 230000.0,
            "population": 8842.575,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 5982.486,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 933.045,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4000.0,
            "population": 750.639,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 21500.0,
            "population": 6758.223,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 64000.0,
            "population": 4677.024,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 650000.0,
            "population": 10434.543,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 837468.93,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 1092177.0,
            "population": 53077.313,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 75500.0,
            "population": 4241.784,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 950000.0,
            "population": 57018.183,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2389.411,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 268655.0,
            "population": 123584.527,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 12000.0,
            "population": 3256.558,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1700000.0,
            "population": 22153.676,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 195000.0,
            "population": 2684.675,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 41500.0,
            "population": 4220.45,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1239.0,
            "population": 28.129,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 122000.0,
            "population": 10952.395,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 8171.522,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2209339.0,
            "population": 80788.721,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3500.0,
            "population": 2089.715,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 542000.0,
            "population": 23903.592,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 32000.0,
            "population": 12758.008,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 3240.0,
            "population": 40085.651,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 14774.038,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1410.0,
            "population": 163.657,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 335702.0,
            "population": 3332.792,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.45,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 70000.0,
            "population": 101389.603,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 47500.0,
            "population": 4001.681,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1699000.0,
            "population": 37697.356,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 240000.0,
            "population": 9899.198,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 11654.0,
            "population": 3345.576,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 584443.0,
            "population": 42086.662,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1357000.0,
            "population": 23393.73,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1125.0,
            "population": 7088.191,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 161.376,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 8500.0,
            "population": 7086.627,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 35100.909,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1453000.0,
            "population": 39038.692,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 62500.0,
            "population": 24352.842,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 10103.0,
            "population": 8464.787,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 247888.0,
            "population": 6550.725,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 135000.0,
            "population": 11719.071,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 701.809,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1100.0,
            "population": 94.591,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 4807.0,
            "population": 1204.153,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 100000.0,
            "population": 7880.332,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 2983723.0,
            "population": 52053.765,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 40.0,
            "population": 8.637,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 51000.0,
            "population": 16180.124,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 56812.757,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1350000.0,
            "population": 23670.808,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3219000.0,
            "population": 247372.264,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 325000.0,
            "population": 3068.705,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 8800000.0,
            "population": 283907.665,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 32000.0,
            "population": 18698.847,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 90000.0,
            "population": 65120.439,
            "land_size": 33036.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 528.0,
            "population": 13.854,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 10730.862,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 680000.0,
            "population": 23283.422,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 7598.275,
            "land_size": 75261.0
        }
    },
    "1989": {
        "Albania": {
            "beehives": 86000.0,
            "population": 3257.925,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 185000.0,
            "population": 25106.19,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 950000.0,
            "population": 11454.777,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1400000.0,
            "population": 32148.134,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 405000.0,
            "population": 16713.989,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 452607.0,
            "population": 7686.572,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10357.882,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 4000.0,
            "population": 183.469,
            "land_size": 2297.0
        },
        "Brazil": {
            "beehives": 660000.0,
            "population": 146328.304,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 634480.0,
            "population": 8897.543,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 88647.0,
            "population": 5307.069,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 293000.0,
            "population": 11425.8,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 544290.0,
            "population": 27179.502,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1190000.0,
            "population": 2745.734,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 5773.92,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 13058.758,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7808208.0,
            "population": 1184602.882,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 32457.499,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 14.0,
            "population": 18.028,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 33000.0,
            "population": 3039.013,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 187900.0,
            "population": 10503.972,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 36000.0,
            "population": 751.047,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1093926.0,
            "population": 15602.688,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 85000.0,
            "population": 6997.888,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 37100.0,
            "population": 9991.87,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1668000.0,
            "population": 54788.685,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 180000.0,
            "population": 5200.602,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3800000.0,
            "population": 48503.44,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": null,
            "population": 724.594,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 47000.0,
            "population": 4977.115,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1135000.0,
            "population": 56404.304,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1700.0,
            "population": 195.726,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1805900.0,
            "population": 78660.303,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1254000.0,
            "population": 10155.723,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.295,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 381.144,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 230.0,
            "population": 127.522,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 200000.0,
            "population": 9050.465,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": null,
            "population": 6167.475,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 953.79,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4000.0,
            "population": 745.585,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 22000.0,
            "population": 6897.755,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 65000.0,
            "population": 4814.702,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 600000.0,
            "population": 10401.614,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9500000.0,
            "population": 855334.678,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 1000000.0,
            "population": 54822.003,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 75500.0,
            "population": 4333.587,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 950000.0,
            "population": 57028.703,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2403.464,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 258322.0,
            "population": 124058.52,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 18000.0,
            "population": 3399.33,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1800000.0,
            "population": 22935.092,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 135000.0,
            "population": 2726.44,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 42000.0,
            "population": 4328.939,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1149.0,
            "population": 28.449,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 123000.0,
            "population": 11268.658,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 8296.915,
            "land_size": 124019.0
        },
        "Mexico": {
            "beehives": 2330948.0,
            "population": 82368.931,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 4000.0,
            "population": 2141.011,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 544000.0,
            "population": 24355.619,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 33000.0,
            "population": 12805.946,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 3890.0,
            "population": 40731.426,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 14868.655,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1698.0,
            "population": 166.787,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 330338.0,
            "population": 3360.957,
            "land_size": 26771.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.383,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Pakistan": {
            "beehives": 70000.0,
            "population": 104512.881,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 48000.0,
            "population": 4112.386,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1650000.0,
            "population": 37832.566,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 240000.0,
            "population": 9890.822,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 12210.0,
            "population": 3373.378,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 636094.0,
            "population": 42491.198,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1418000.0,
            "population": 23466.407,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1875.0,
            "population": 7276.985,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 161.94,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 11100.0,
            "population": 7303.517,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 35930.05,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1446000.0,
            "population": 39118.561,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 63000.0,
            "population": 24988.226,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 101780.0,
            "population": 8514.206,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 243000.0,
            "population": 6597.37,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 146000.0,
            "population": 12080.444,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 718.741,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 800.0,
            "population": 94.851,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6000.0,
            "population": 1212.857,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 119000.0,
            "population": 8060.21,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3080660.0,
            "population": 52992.487,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 37.0,
            "population": 8.779,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 53000.0,
            "population": 16763.042,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 56974.297,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1500000.0,
            "population": 24411.738,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3443000.0,
            "population": 249725.805,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 213500.0,
            "population": 3088.595,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9000000.0,
            "population": 286042.519,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 30000.0,
            "population": 19166.471,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 90000.0,
            "population": 66550.234,
            "land_size": 33036.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 531.0,
            "population": 13.806,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 47558.0,
            "population": 11189.177,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 508015.0,
            "population": 23352.122,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 7820.205,
            "land_size": 75261.0
        }
    },
    "1990": {
        "Albania": {
            "beehives": 80000.0,
            "population": 3286.073,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 77000.0,
            "population": 25758.869,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 950000.0,
            "population": 11848.386,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1400000.0,
            "population": 32618.651,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 405000.0,
            "population": 16960.597,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 457061.0,
            "population": 7723.949,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10388.335,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3200.0,
            "population": 187.552,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 0.0,
            "population": 6864.842,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 700000.0,
            "population": 149003.223,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 615273.0,
            "population": 8841.458,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 70788.0,
            "population": 5438.957,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 295400.0,
            "population": 11780.088,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 532205.0,
            "population": 27541.319,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1220000.0,
            "population": 2806.734,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 5963.252,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 13274.623,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7483472.0,
            "population": 1203433.94,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 33102.575,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 15.0,
            "population": 18.191,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 33000.0,
            "population": 3119.433,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 150000.0,
            "population": 10596.987,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 33000.0,
            "population": 766.615,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1120720.0,
            "population": 15629.329,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 91000.0,
            "population": 7133.494,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 32600.0,
            "population": 10230.934,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1651000.0,
            "population": 56134.475,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 185000.0,
            "population": 5270.079,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3850000.0,
            "population": 50146.518,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": 1898.0,
            "population": 728.573,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 50000.0,
            "population": 4996.222,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1121720.0,
            "population": 56666.849,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 2000.0,
            "population": 199.905,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1605000.0,
            "population": 79053.984,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1216000.0,
            "population": 10225.992,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.604,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 389.249,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 240.0,
            "population": 130.482,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 205698.0,
            "population": 9263.813,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 40000.0,
            "population": 6352.283,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6000.0,
            "population": 975.261,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 743.309,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 22500.0,
            "population": 7037.917,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 66000.0,
            "population": 4955.303,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 550000.0,
            "population": 10377.137,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9600000.0,
            "population": 873277.798,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 1350000.0,
            "population": 56366.217,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 74000.0,
            "population": 4448.353,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1000000.0,
            "population": 57048.236,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 70000.0,
            "population": 2419.906,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 253000.0,
            "population": 124505.24,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 20000.0,
            "population": 3565.89,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2000000.0,
            "population": 23724.579,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 130000.0,
            "population": 2803.044,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 42500.0,
            "population": 4436.661,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1058.0,
            "population": 28.789,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 124000.0,
            "population": 11598.633,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 8449.913,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 358.449,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2114489.0,
            "population": 83943.132,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 4768.0,
            "population": 2184.145,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 546000.0,
            "population": 24807.462,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 34000.0,
            "population": 12987.292,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 4381.0,
            "population": 41335.199,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 14965.448,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1752.0,
            "population": 170.336,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 318203.0,
            "population": 3398.172,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": 691.0,
            "population": 95212.45,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.329,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": 0.0,
            "population": 1812.161,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 71000.0,
            "population": 107647.921,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 51000.0,
            "population": 4223.415,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1650000.0,
            "population": 37960.193,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 240000.0,
            "population": 9895.364,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 8150.0,
            "population": 3403.154,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 526603.0,
            "population": 42918.419,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1201000.0,
            "population": 23489.16,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1875.0,
            "population": 7288.882,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 162.803,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 10600.0,
            "population": 7526.307,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 36800.509,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1560000.0,
            "population": 39202.525,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 63500.0,
            "population": 25640.213,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 93705.0,
            "population": 8567.384,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 275770.0,
            "population": 6652.868,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 137000.0,
            "population": 12446.171,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 737.814,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 95.069,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 6200.0,
            "population": 1221.116,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 123500.0,
            "population": 8242.496,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3283458.0,
            "population": 53921.76,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 8.913,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 55000.0,
            "population": 17354.392,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 57134.391,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 1800000.0,
            "population": 25203.845,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3210000.0,
            "population": 252120.309,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 207500.0,
            "population": 3109.601,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9100000.0,
            "population": 287751.316,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 30000.0,
            "population": 19632.665,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 92000.0,
            "population": 67988.862,
            "land_size": 33103.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 536.0,
            "population": 13.8,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 47900.0,
            "population": 11709.993,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 501349.0,
            "population": 23375.107,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 20000.0,
            "population": 8036.845,
            "land_size": 75261.0
        }
    },
    "1991": {
        "Albania": {
            "beehives": 72900.0,
            "population": 3280.395,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 310000.0,
            "population": 26400.479,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 12248.901,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1500000.0,
            "population": 33079.0,
            "land_size": 278040.0
        },
        "Australia": {
            "beehives": 384000.0,
            "population": 17189.24,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 457061.0,
            "population": 7772.701,
            "land_size": 8387.9
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10425.797,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3000.0,
            "population": 191.128,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 0.0,
            "population": 7011.453,
            "land_size": 109858.0
        },
        "Brazil": {
            "beehives": 812000.0,
            "population": 151648.011,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 594731.0,
            "population": 8766.999,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 113694.0,
            "population": 5564.926,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 297000.0,
            "population": 12137.912,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 498780.0,
            "population": 27888.81,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1274000.0,
            "population": 2878.509,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 6157.079,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 13495.258,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7786087.0,
            "population": 1219730.012,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 33758.337,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 15.0,
            "population": 18.42,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 34000.0,
            "population": 3202.085,
            "land_size": 5110.0
        },
        "Cuba": {
            "beehives": 169600.0,
            "population": 10673.542,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 30000.0,
            "population": 783.124,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 1001566.0,
            "population": 15655.687,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 91000.0,
            "population": 7270.409,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 36000.0,
            "population": 10472.475,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1479000.0,
            "population": 57424.549,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 186000.0,
            "population": 5342.198,
            "land_size": 2104.0
        },
        "Ethiopia PDR": {
            "beehives": 3900000.0,
            "population": 51876.327,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": 2152.0,
            "population": 735.401,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 49000.0,
            "population": 5019.125,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1078220.0,
            "population": 56913.587,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 2000.0,
            "population": 203.726,
            "land_size": 400.0
        },
        "Germany": {
            "beehives": 1215000.0,
            "population": 79490.835,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1201000.0,
            "population": 10315.107,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.789,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 394.619,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 250.0,
            "population": 133.558,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 206838.0,
            "population": 9483.27,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 40000.0,
            "population": 6534.939,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 997.522,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 744.474,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 23000.0,
            "population": 7178.607,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 67000.0,
            "population": 5098.591,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 345951.0,
            "population": 10363.049,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9600000.0,
            "population": 891273.209,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 1600000.0,
            "population": 57679.034,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 73200.0,
            "population": 4589.302,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1050000.0,
            "population": 57088.113,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 1.0,
            "population": 2439.334,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 238000.0,
            "population": 124929.772,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 21000.0,
            "population": 3760.496,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2100000.0,
            "population": 24521.703,
            "land_size": 58037.0
        },
        "Lebanon": {
            "beehives": 128000.0,
            "population": 2921.706,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 43000.0,
            "population": 4544.242,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 518.0,
            "population": 29.159,
            "land_size": 16.0
        },
        "Madagascar": {
            "beehives": 125000.0,
            "population": 11942.819,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 8635.527,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 360.901,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2088315.0,
            "population": 85512.623,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3500.0,
            "population": 2217.917,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 548000.0,
            "population": 25260.404,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 35000.0,
            "population": 13328.032,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 4213.0,
            "population": 41890.197,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15064.519,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1988.0,
            "population": 174.336,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 312242.0,
            "population": 3446.17,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": 0.0,
            "population": 97667.632,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 2.288,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": 0.0,
            "population": 1893.768,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 71000.0,
            "population": 110778.648,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 53000.0,
            "population": 4334.345,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1600000.0,
            "population": 38082.948,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 240000.0,
            "population": 9916.049,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 6511.0,
            "population": 3435.253,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 532826.0,
            "population": 43373.151,
            "land_size": 9926.0
        },
        "Romania": {
            "beehives": 1091000.0,
            "population": 23456.644,
            "land_size": 23839.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 7083.935,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 163.997,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 11400.0,
            "population": 7755.496,
            "land_size": 19671.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 37718.95,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1611000.0,
            "population": 39299.081,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 64000.0,
            "population": 26311.612,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 123000.0,
            "population": 8625.137,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 261243.0,
            "population": 6718.828,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 143000.0,
            "population": 12815.401,
            "land_size": 18518.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 759.527,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1000.0,
            "population": 95.246,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 5500.0,
            "population": 1229.103,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 128000.0,
            "population": 8427.857,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3428442.0,
            "population": 54840.59,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.026,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 57000.0,
            "population": 17953.531,
            "land_size": 24155.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 57290.785,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2000000.0,
            "population": 26056.594,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3211000.0,
            "population": 254539.37,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 300000.0,
            "population": 3131.66,
            "land_size": 17622.0
        },
        "USSR": {
            "beehives": 9200000.0,
            "population": 288991.357,
            "land_size": 2241237.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 30000.0,
            "population": 20096.317,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 94000.0,
            "population": 69436.954,
            "land_size": 33106.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 463.0,
            "population": 13.825,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 12302.124,
            "land_size": 52797.0
        },
        "Yugoslav SFR": {
            "beehives": 520275.0,
            "population": 23349.025,
            "land_size": 25590.0
        },
        "Zambia": {
            "beehives": 22000.0,
            "population": 8246.656,
            "land_size": 75261.0
        }
    },
    "1992": {
        "Albania": {
            "beehives": 36200.0,
            "population": 3245.886,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 175000.0,
            "population": 27028.326,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1000000.0,
            "population": 12657.366,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1600000.0,
            "population": 33529.326,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 131100.0,
            "population": 3442.817,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 366000.0,
            "population": 17402.173,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 483212.0,
            "population": 7830.933,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 65000.0,
            "population": 7471.926,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 270.0,
            "population": 10154.334,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10469.495,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3000.0,
            "population": 194.324,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": 0.0,
            "population": 7160.92,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 43000.0,
            "population": 4233.676,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 819000.0,
            "population": 154259.38,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 493540.0,
            "population": 8676.377,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 114000.0,
            "population": 5685.565,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 299500.0,
            "population": 12499.499,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 501259.0,
            "population": 28224.409,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1284000.0,
            "population": 2959.236,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 6356.748,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 13719.819,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7700420.0,
            "population": 1233806.442,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 34422.569,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 18.0,
            "population": 18.682,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 35000.0,
            "population": 3286.52,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 59000.0,
            "population": 4732.862,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 153300.0,
            "population": 10736.387,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 30000.0,
            "population": 800.611,
            "land_size": 925.0
        },
        "Czechoslovakia": {
            "beehives": 903600.0,
            "population": 15682.061,
            "land_size": 12790.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 7408.342,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 37500.0,
            "population": 10716.129,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1415000.0,
            "population": 58666.814,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5416.323,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 55900.0,
            "population": 1520.813,
            "land_size": 4523.0
        },
        "Ethiopia PDR": {
            "beehives": 3950000.0,
            "population": 53681.181,
            "land_size": 122190.0
        },
        "Fiji": {
            "beehives": 2722.0,
            "population": 744.469,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 49000.0,
            "population": 5044.925,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1061742.0,
            "population": 57147.213,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 2000.0,
            "population": 207.245,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 65400.0,
            "population": 5303.929,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 1168000.0,
            "population": 79963.159,
            "land_size": 35697.0
        },
        "Greece": {
            "beehives": 1215000.0,
            "population": 10420.236,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.861,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 397.697,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 250.0,
            "population": 136.692,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 199830.0,
            "population": 9708.544,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 40000.0,
            "population": 6716.038,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1020.35,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 748.602,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 7319.493,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 30000.0,
            "population": 5244.678,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 500000.0,
            "population": 10358.619,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 909307.016,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 1900000.0,
            "population": 58780.37,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 75500.0,
            "population": 4752.824,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1314000.0,
            "population": 57145.306,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 1.0,
            "population": 2461.049,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 226000.0,
            "population": 125331.297,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 25000.0,
            "population": 3977.672,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2200000.0,
            "population": 25326.078,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 60000.0,
            "population": 4454.193,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 178.0,
            "population": 2620.254,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 155000.0,
            "population": 3076.132,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 40000.0,
            "population": 4650.885,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 807.0,
            "population": 29.553,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 223800.0,
            "population": 3688.106,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 126000.0,
            "population": 12301.336,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 8850.334,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 362.757,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2107618.0,
            "population": 87075.138,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3000.0,
            "population": 2243.495,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 549000.0,
            "population": 25711.406,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 34000.0,
            "population": 13806.001,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 4763.0,
            "population": 42401.684,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15165.862,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1885.0,
            "population": 178.759,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 304065.0,
            "population": 3503.181,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": 0.0,
            "population": 100161.71,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 801.0,
            "population": 2.258,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": 0.0,
            "population": 1983.275,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 72000.0,
            "population": 113911.126,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 55000.0,
            "population": 4445.016,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1600000.0,
            "population": 38197.587,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 240000.0,
            "population": 9951.303,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4771.0,
            "population": 3469.068,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 596512.0,
            "population": 43848.218,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 175000.0,
            "population": 4376.793,
            "land_size": 3376.0
        },
        "Romania": {
            "beehives": 1207000.0,
            "population": 23375.822,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 4593000.0,
            "population": 148268.581,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 6702.244,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 165.49,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 12100.0,
            "population": 7990.096,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 197000.0,
            "population": 10318.324,
            "land_size": 10217.0
        },
        "Slovenia": {
            "beehives": 72611.0,
            "population": 2005.354,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 38672.607,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1621000.0,
            "population": 39410.857,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 65000.0,
            "population": 27001.701,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 110000.0,
            "population": 8686.738,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 272205.0,
            "population": 6792.906,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 164471.0,
            "population": 13187.663,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 61500.0,
            "population": 5502.494,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 77600.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 783.198,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 1000.0,
            "population": 95.399,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 5000.0,
            "population": 1236.683,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 132000.0,
            "population": 8613.861,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3540328.0,
            "population": 55748.948,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.112,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 59000.0,
            "population": 18561.674,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3526.0,
            "population": 51415.965,
            "land_size": 60356.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 57446.037,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2320000.0,
            "population": 26961.197,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 3045000.0,
            "population": 256990.613,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 300000.0,
            "population": 3154.464,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 351000.0,
            "population": 21375.119,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 30000.0,
            "population": 20557.683,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 95000.0,
            "population": 70883.481,
            "land_size": 33109.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 470.0,
            "population": 13.88,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 12954.155,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 25000.0,
            "population": 8451.347,
            "land_size": 75261.0
        }
    },
    "1993": {
        "Albania": {
            "beehives": 20000.0,
            "population": 3195.199,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 227000.0,
            "population": 27635.515,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1050000.0,
            "population": 13075.049,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1600000.0,
            "population": 33970.111,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 80000.0,
            "population": 3363.108,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 361678.0,
            "population": 17603.205,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 430071.0,
            "population": 7892.086,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 68000.0,
            "population": 7581.754,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 300.0,
            "population": 10135.127,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10515.484,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 2800.0,
            "population": 197.622,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 7312.85,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 44000.0,
            "population": 4078.937,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 800000.0,
            "population": 156849.078,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 429271.0,
            "population": 8576.038,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 115000.0,
            "population": 5798.053,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 300000.0,
            "population": 12864.09,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 502656.0,
            "population": 28547.967,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1300000.0,
            "population": 3046.149,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 6563.922,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 13944.937,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7176170.0,
            "population": 1246160.288,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 35091.275,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 20.0,
            "population": 18.926,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 36000.0,
            "population": 3372.298,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 59000.0,
            "population": 4697.538,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 141900.0,
            "population": 10789.306,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 31500.0,
            "population": 818.746,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 678668.0,
            "population": 10358.69,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 7546.463,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 38500.0,
            "population": 10961.466,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1243000.0,
            "population": 59880.658,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5490.477,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 55000.0,
            "population": 1488.061,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3500000.0,
            "population": 53295.566,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 2216.0,
            "population": 754.963,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 49000.0,
            "population": 5071.789,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1046612.0,
            "population": 57370.381,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 2000.0,
            "population": 210.642,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 36400.0,
            "population": 5208.957,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 1120000.0,
            "population": 80428.556,
            "land_size": 35699.0
        },
        "Greece": {
            "beehives": 1203672.0,
            "population": 10533.815,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.848,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 500.0,
            "population": 399.379,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 253.0,
            "population": 139.818,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 170000.0,
            "population": 9938.692,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 40000.0,
            "population": 6897.166,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1043.423,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 754.144,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 7460.689,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 12559.0,
            "population": 5394.412,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 520000.0,
            "population": 10359.066,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 927403.86,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2300000.0,
            "population": 59723.764,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 75500.0,
            "population": 4929.415,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1200000.0,
            "population": 57197.613,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 1.0,
            "population": 2484.581,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 216000.0,
            "population": 125707.411,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 40000.0,
            "population": 4201.555,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2300000.0,
            "population": 26136.216,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 63000.0,
            "population": 4483.844,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 128.0,
            "population": 2582.661,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 185000.0,
            "population": 3246.126,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 38000.0,
            "population": 4755.133,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 952.0,
            "population": 29.975,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 157800.0,
            "population": 3670.651,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 127000.0,
            "population": 12675.46,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 9087.176,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 364.377,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2293733.0,
            "population": 88625.44,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2700.0,
            "population": 2263.186,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 26155.203,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 35000.0,
            "population": 14370.946,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 5054.0,
            "population": 42890.002,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15268.006,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 1903.0,
            "population": 183.48,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 298982.0,
            "population": 3564.464,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 102700.753,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 802.0,
            "population": 2.236,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": null
        },
        "Oman": {
            "beehives": null,
            "population": 2072.104,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 72000.0,
            "population": 117086.685,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 57500.0,
            "population": 4555.521,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1500000.0,
            "population": 38301.35,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 294930.0,
            "population": 9996.64,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4441.0,
            "population": 3503.472,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 640311.0,
            "population": 44335.028,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 138200.0,
            "population": 4371.146,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 779878.0,
            "population": 23256.956,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 4711400.0,
            "population": 148373.58,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 6263.757,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 10000.0,
            "population": 167.119,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 16200.0,
            "population": 8226.76,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 196000.0,
            "population": 10414.109,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 355843.0,
            "population": 5347.214,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 122430.0,
            "population": 2000.556,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 39633.75,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1705000.0,
            "population": 39533.725,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 65500.0,
            "population": 27713.533,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 105000.0,
            "population": 8746.776,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 271205.0,
            "population": 6868.931,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 258000.0,
            "population": 13565.072,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 34300.0,
            "population": 5593.315,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 74951.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 806.86,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 95.557,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 4000.0,
            "population": 1243.616,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 165000.0,
            "population": 8795.932,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3685450.0,
            "population": 56653.804,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.194,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 61000.0,
            "population": 19175.988,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3965.0,
            "population": 51316.01,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 57602.284,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2350000.0,
            "population": 27887.203,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2875000.0,
            "population": 259532.129,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 310000.0,
            "population": 3177.745,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 337200.0,
            "population": 21861.975,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 20000.0,
            "population": 21016.901,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 110000.0,
            "population": 72300.308,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 477.0,
            "population": 13.961,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 48000.0,
            "population": 13634.076,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 25000.0,
            "population": 8656.486,
            "land_size": 75261.0
        }
    },
    "1994": {
        "Albania": {
            "beehives": 26900.0,
            "population": 3146.519,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 430000.0,
            "population": 28213.774,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1050000.0,
            "population": 13503.747,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1700000.0,
            "population": 34402.672,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 87000.0,
            "population": 3283.667,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 465000.0,
            "population": 17798.529,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 411082.0,
            "population": 7947.209,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 60000.0,
            "population": 7683.708,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 250.0,
            "population": 10108.291,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10558.352,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3200.0,
            "population": 201.68,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 7466.793,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 44000.0,
            "population": 3936.524,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 795000.0,
            "population": 159432.716,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 337584.0,
            "population": 8474.826,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 100000.0,
            "population": 5898.967,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 300000.0,
            "population": 13230.984,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 501256.0,
            "population": 28860.734,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1320000.0,
            "population": 3135.015,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 6781.053,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 14166.34,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6583250.0,
            "population": 1257604.869,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 35758.979,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 20.0,
            "population": 19.077,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 37000.0,
            "population": 3458.834,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 63000.0,
            "population": 4657.803,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 140600.0,
            "population": 10838.462,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 30000.0,
            "population": 837.11,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 630026.0,
            "population": 10360.969,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 7683.707,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 39000.0,
            "population": 11208.001,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1225000.0,
            "population": 61095.804,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5561.919,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 53000.0,
            "population": 1457.093,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3500000.0,
            "population": 55180.998,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 2400.0,
            "population": 765.609,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 44000.0,
            "population": 5097.097,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1032080.0,
            "population": 57587.131,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 2000.0,
            "population": 214.197,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 35100.0,
            "population": 5097.128,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 1085000.0,
            "population": 80832.937,
            "land_size": 35700.0
        },
        "Greece": {
            "beehives": 1225694.0,
            "population": 10644.949,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.815,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 401.071,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 255.0,
            "population": 142.802,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 140000.0,
            "population": 10172.297,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 45000.0,
            "population": 7081.116,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1066.346,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 758.896,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 7602.32,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 13000.0,
            "population": 5548.96,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 550000.0,
            "population": 10357.591,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 945601.831,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2700000.0,
            "population": 60590.614,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 76000.0,
            "population": 5105.577,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1100000.0,
            "population": 57213.544,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 1.0,
            "population": 2509.043,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 220234.0,
            "population": 126053.129,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 30000.0,
            "population": 4410.359,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2350000.0,
            "population": 26950.513,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 68000.0,
            "population": 4518.807,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 84.0,
            "population": 2543.628,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 205000.0,
            "population": 3403.357,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 35000.0,
            "population": 4854.875,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 974.0,
            "population": 30.426,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 118600.0,
            "population": 3649.143,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 125000.0,
            "population": 13066.543,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 9334.88,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 366.25,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2292428.0,
            "population": 90156.4,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2000.0,
            "population": 2280.479,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 26584.478,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 34000.0,
            "population": 14948.048,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 5000.0,
            "population": 43383.428,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15369.12,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 188.365,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 289875.0,
            "population": 3623.279,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 105293.7,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 802.0,
            "population": 2.205,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 45100.0
        },
        "Oman": {
            "beehives": null,
            "population": 2148.419,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 73000.0,
            "population": 120362.762,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 58600.0,
            "population": 4666.094,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1400000.0,
            "population": 38389.467,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 258741.0,
            "population": 10045.044,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4059.0,
            "population": 3536.795,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 662678.0,
            "population": 44820.073,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 160000.0,
            "population": 4358.785,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 759000.0,
            "population": 23115.811,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 4333000.0,
            "population": 148349.441,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 5936.261,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 168.694,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 18000.0,
            "population": 8461.068,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 194000.0,
            "population": 10481.714,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 314544.0,
            "population": 5362.896,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 144903.0,
            "population": 1995.335,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 40564.059,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1684000.0,
            "population": 39660.069,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 66000.0,
            "population": 28449.829,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 72000.0,
            "population": 8798.234,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 269938.0,
            "population": 6938.415,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 309000.0,
            "population": 13950.476,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 25400.0,
            "population": 5679.167,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 73980.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 827.825,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 95.739,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2500.0,
            "population": 1249.52,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 200000.0,
            "population": 8967.916,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3715610.0,
            "population": 57564.204,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.252,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 63000.0,
            "population": 19793.541,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 4220.0,
            "population": 51147.773,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 57763.378,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2400000.0,
            "population": 28792.639,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2783000.0,
            "population": 262241.196,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 250000.0,
            "population": 3201.151,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 313800.0,
            "population": 22336.202,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 15000.0,
            "population": 21474.549,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 120000.0,
            "population": 73651.218,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 484.0,
            "population": 14.049,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 49000.0,
            "population": 14297.613,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 26000.0,
            "population": 8869.74,
            "land_size": 75261.0
        }
    },
    "1995": {
        "Albania": {
            "beehives": 40000.0,
            "population": 3112.936,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 277000.0,
            "population": 28757.785,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1100000.0,
            "population": 13945.206,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1800000.0,
            "population": 34828.17,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 93000.0,
            "population": 3217.348,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 489000.0,
            "population": 17993.074,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 399246.0,
            "population": 7990.121,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 66000.0,
            "population": 7775.424,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 200.0,
            "population": 10077.608,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10594.454,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3900.0,
            "population": 206.963,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 7622.338,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 45000.0,
            "population": 3829.05,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 824000.0,
            "population": 162019.896,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 247712.0,
            "population": 8379.308,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 90000.0,
            "population": 5987.043,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 303000.0,
            "population": 13599.988,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 520982.0,
            "population": 29164.152,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1340000.0,
            "population": 3222.656,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 7010.145,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 14380.866,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6431375.0,
            "population": 1268746.308,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 36421.438,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 21.0,
            "population": 19.097,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 3545.534,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 60000.0,
            "population": 4616.766,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 142100.0,
            "population": 10888.252,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 42649.0,
            "population": 855.383,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 622336.0,
            "population": 10358.193,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 7819.247,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 39000.0,
            "population": 11455.204,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1238837.0,
            "population": 62334.034,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5628.6,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 50000.0,
            "population": 1433.024,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3500000.0,
            "population": 57047.908,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 2599.0,
            "population": 775.425,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 42000.0,
            "population": 5119.005,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1027002.0,
            "population": 57801.892,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1600.0,
            "population": 218.071,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 54700.0,
            "population": 4976.26,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 1047000.0,
            "population": 81138.659,
            "land_size": 35702.0
        },
        "Greece": {
            "beehives": 1229790.0,
            "population": 10745.503,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.811,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 403.738,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 257.0,
            "population": 145.561,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 110000.0,
            "population": 10408.489,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 45000.0,
            "population": 7269.625,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1088.854,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 761.291,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 7744.503,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 13000.0,
            "population": 5709.014,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 550000.0,
            "population": 10349.302,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 963922.588,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3000000.0,
            "population": 61442.664,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 76000.0,
            "population": 5271.367,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1000000.0,
            "population": 57174.408,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 2.0,
            "population": 2533.711,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 214112.0,
            "population": 126365.484,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 40000.0,
            "population": 4588.843,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2400000.0,
            "population": 27768.296,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 65000.0,
            "population": 4566.096,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 78.0,
            "population": 2508.48,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 185000.0,
            "population": 3528.38,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 35000.0,
            "population": 4948.798,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1022.0,
            "population": 30.88,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 104100.0,
            "population": 3626.612,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 126000.0,
            "population": 13475.4,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 9585.653,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 368.732,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2053761.0,
            "population": 91663.285,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1165.0,
            "population": 2298.02,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 500000.0,
            "population": 26994.25,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 35000.0,
            "population": 15483.286,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 5800.0,
            "population": 43901.598,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15467.851,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 193.293,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 293080.0,
            "population": 3674.936,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 107948.335,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 803.0,
            "population": 2.165,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 43088.0
        },
        "Oman": {
            "beehives": null,
            "population": 2204.277,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 85000.0,
            "population": 123776.839,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 58600.0,
            "population": 4776.843,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1400000.0,
            "population": 38458.638,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 244298.0,
            "population": 10091.325,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4830.0,
            "population": 3567.696,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 764243.0,
            "population": 45292.522,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 138200.0,
            "population": 4340.597,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 747000.0,
            "population": 22964.754,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 4303500.0,
            "population": 148227.466,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 5836.495,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 170.054,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 17000.0,
            "population": 8690.164,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 205000.0,
            "population": 10504.565,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 305398.0,
            "population": 5375.47,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 152000.0,
            "population": 1991.131,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 41435.758,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1651000.0,
            "population": 39787.419,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 66500.0,
            "population": 29212.83,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 105000.0,
            "population": 8836.42,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 269180.0,
            "population": 6995.521,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 354000.0,
            "population": 14345.492,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 24500.0,
            "population": 5764.81,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 72171.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 844.334,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 95.976,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2000.0,
            "population": 1254.2,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 236000.0,
            "population": 9125.398,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3916038.0,
            "population": 58486.456,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.298,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 65000.0,
            "population": 20413.152,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3965.0,
            "population": 50903.785,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 57932.453,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2450000.0,
            "population": 29649.135,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2655000.0,
            "population": 265163.745,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 340000.0,
            "population": 3224.281,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 302300.0,
            "population": 22791.026,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 21931.084,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 130000.0,
            "population": 74910.461,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 491.0,
            "population": 14.149,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 50000.0,
            "population": 14913.315,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 26000.0,
            "population": 9096.607,
            "land_size": 75261.0
        }
    },
    "1996": {
        "Albania": {
            "beehives": 53900.0,
            "population": 3098.7,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 380000.0,
            "population": 29266.405,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 14400.719,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1700000.0,
            "population": 35246.374,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 90000.0,
            "population": 3168.221,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 466000.0,
            "population": 18189.277,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 393223.0,
            "population": 8017.863,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 69000.0,
            "population": 7855.553,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 272.0,
            "population": 10044.853,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 28000.0,
            "population": 10622.274,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 3700.0,
            "population": 213.664,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 7779.267,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 48106.0,
            "population": 3764.425,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 824000.0,
            "population": 164614.688,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 265917.0,
            "population": 8291.97,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 80000.0,
            "population": 6060.111,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 305000.0,
            "population": 13970.813,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 509648.0,
            "population": 29457.817,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1350000.0,
            "population": 3308.233,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 7250.975,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 14587.37,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6390434.0,
            "population": 1279704.134,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 37076.387,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 21.0,
            "population": 18.946,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 3632.362,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 62000.0,
            "population": 4574.888,
            "land_size": 5661.0
        },
        "Cuba": {
            "beehives": 146100.0,
            "population": 10939.293,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 46188.0,
            "population": 873.423,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 537136.0,
            "population": 10350.309,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 7952.763,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 39000.0,
            "population": 11703.174,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1278372.0,
            "population": 63601.629,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5689.938,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 48000.0,
            "population": 1417.736,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3549010.0,
            "population": 58883.53,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 3045.0,
            "population": 784.386,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 40000.0,
            "population": 5136.979,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1016307.0,
            "population": 58012.058,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1200.0,
            "population": 222.322,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 65600.0,
            "population": 4846.634,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 1028000.0,
            "population": 81323.664,
            "land_size": 35703.0
        },
        "Greece": {
            "beehives": 1248208.0,
            "population": 10832.141,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.837,
            "land_size": 34170.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 407.783,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 259.0,
            "population": 148.06,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 95000.0,
            "population": 10646.674,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 45000.0,
            "population": 7463.782,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1110.833,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 760.795,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 7887.304,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10000.0,
            "population": 5874.809,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 550000.0,
            "population": 10332.453,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 982365.243,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3100000.0,
            "population": 62294.92,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 76000.0,
            "population": 5424.249,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1000000.0,
            "population": 57065.225,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 2.0,
            "population": 2558.637,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 206746.0,
            "population": 126644.094,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 25000.0,
            "population": 4732.854,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2430000.0,
            "population": 28589.451,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 60000.0,
            "population": 4629.402,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 76.0,
            "population": 2478.832,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 160000.0,
            "population": 3610.665,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 35000.0,
            "population": 5036.171,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1120.0,
            "population": 31.348,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 95900.0,
            "population": 3603.756,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 127000.0,
            "population": 13902.688,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 32000.0,
            "population": 9837.571,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 371.912,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1919938.0,
            "population": 93147.044,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1075.0,
            "population": 2316.568,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 27383.473,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 36000.0,
            "population": 15960.442,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 6200.0,
            "population": 44452.206,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15563.255,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 198.24,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 286806.0,
            "population": 3717.349,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 110668.794,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 803.0,
            "population": 2.124,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 56050.0
        },
        "Oman": {
            "beehives": null,
            "population": 2236.654,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 96000.0,
            "population": 127349.29,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 59000.0,
            "population": 4887.632,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1400000.0,
            "population": 38509.666,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 241389.0,
            "population": 10134.02,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 5018.0,
            "population": 3596.088,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 719224.0,
            "population": 45751.022,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 113700.0,
            "population": 4316.223,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 696000.0,
            "population": 22805.703,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 4082800.0,
            "population": 148020.847,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 6013.107,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 171.165,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 16500.0,
            "population": 8912.861,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 186000.0,
            "population": 10475.772,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 291405.0,
            "population": 5384.788,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 144000.0,
            "population": 1988.565,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 42241.011,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1854000.0,
            "population": 39908.959,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 67000.0,
            "population": 30004.309,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 91000.0,
            "population": 8859.191,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 269490.0,
            "population": 7038.033,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 378394.0,
            "population": 14754.142,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 22500.0,
            "population": 5851.355,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 62578.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 855.362,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 96.273,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2000.0,
            "population": 1257.549,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 271000.0,
            "population": 9267.34,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 3964718.0,
            "population": 59423.282,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.323,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 67000.0,
            "population": 21032.821,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3433.0,
            "population": 50580.475,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 58113.557,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2400000.0,
            "population": 30444.526,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2581000.0,
            "population": 268335.003,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 320000.0,
            "population": 3247.381,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 236400.0,
            "population": 23225.298,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 22385.65,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 140000.0,
            "population": 76068.743,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 498.0,
            "population": 14.252,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 50000.0,
            "population": 15469.274,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 27000.0,
            "population": 9339.733,
            "land_size": 75261.0
        }
    },
    "1997": {
        "Albania": {
            "beehives": 57300.0,
            "population": 3099.752,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 268300.0,
            "population": 29742.979,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 14871.57,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 1800000.0,
            "population": 35657.429,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 73000.0,
            "population": 3133.089,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 486000.0,
            "population": 18387.214,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 381567.0,
            "population": 8032.876,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 70000.0,
            "population": 7925.668,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 240.0,
            "population": 10009.394,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 29000.0,
            "population": 10643.763,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 2500.0,
            "population": 221.58,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 7937.458,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 59967.0,
            "population": 3736.07,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 824000.0,
            "population": 167209.04,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 265984.0,
            "population": 8211.814,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 75000.0,
            "population": 6122.13,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 307000.0,
            "population": 14344.449,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 519988.0,
            "population": 29742.382,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1360000.0,
            "population": 3392.436,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 7503.493,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 400000.0,
            "population": 14786.22,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 6924345.0,
            "population": 1290305.591,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 37723.8,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 22.0,
            "population": 18.658,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 3718.949,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 72000.0,
            "population": 4532.401,
            "land_size": 5661.0
        },
        "Cuba": {
            "beehives": 151400.0,
            "population": 10989.732,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 42958.0,
            "population": 891.19,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 510363.0,
            "population": 10338.339,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 8084.407,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 39000.0,
            "population": 11951.452,
            "land_size": 28356.0
        },
        "Egypt": {
            "beehives": 1269730.0,
            "population": 64892.27,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5746.284,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 19900.0,
            "population": 1409.673,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3364190.0,
            "population": 60697.443,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 3200.0,
            "population": 792.736,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 40000.0,
            "population": 5151.746,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 1001834.0,
            "population": 58220.659,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1000.0,
            "population": 226.866,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 74700.0,
            "population": 4709.607,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 952000.0,
            "population": 81399.251,
            "land_size": 35703.0
        },
        "Greece": {
            "beehives": 1263234.0,
            "population": 10906.257,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.881,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 412.737,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 261.0,
            "population": 150.303,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 80000.0,
            "population": 10887.634,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 50000.0,
            "population": 7662.075,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1132.51,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 757.97,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 8030.726,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10000.0,
            "population": 6045.699,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 560000.0,
            "population": 10308.48,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 1000900.03,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3200000.0,
            "population": 63136.312,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 70000.0,
            "population": 5566.553,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1000000.0,
            "population": 56903.64,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 2.0,
            "population": 2583.916,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 199846.0,
            "population": 126892.738,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 25000.0,
            "population": 4848.541,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2450000.0,
            "population": 29415.659,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 58000.0,
            "population": 4705.645,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 60.0,
            "population": 2453.307,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 100036.0,
            "population": 3658.424,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 35000.0,
            "population": 5118.007,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1000.0,
            "population": 31.83,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 77400.0,
            "population": 3579.91,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 128000.0,
            "population": 14347.854,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 25000.0,
            "population": 10094.368,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 375.634,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1715948.0,
            "population": 94611.002,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 977.0,
            "population": 2335.734,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 27754.571,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 37000.0,
            "population": 16397.183,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 7000.0,
            "population": 45027.233,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15655.475,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 203.187,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 287458.0,
            "population": 3752.362,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 113457.663,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 804.0,
            "population": 2.067,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 47625.0
        },
        "Oman": {
            "beehives": null,
            "population": 2249.762,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 115000.0,
            "population": 131057.431,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 59000.0,
            "population": 4998.1,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1400000.0,
            "population": 38544.841,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 239457.0,
            "population": 10174.563,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4924.0,
            "population": 3621.899,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1005919.0,
            "population": 46196.054,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 104900.0,
            "population": 4286.472,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 656000.0,
            "population": 22637.604,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3741300.0,
            "population": 147730.019,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 6419.901,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 172.068,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 19200.0,
            "population": 9130.877,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 197000.0,
            "population": 10402.915,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 278807.0,
            "population": 5391.204,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 147000.0,
            "population": 1987.455,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 42987.461,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1852000.0,
            "population": 40035.293,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 68000.0,
            "population": 30825.572,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 88000.0,
            "population": 8868.853,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 266438.0,
            "population": 7068.508,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 387607.0,
            "population": 15175.316,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 14500.0,
            "population": 5938.405,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 74415.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 861.866,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 96.619,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2000.0,
            "population": 1259.848,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 255000.0,
            "population": 9395.123,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4002000.0,
            "population": 60372.568,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.323,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 69000.0,
            "population": 21655.398,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3125.0,
            "population": 50187.276,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 58307.313,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2450000.0,
            "population": 31192.857,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2631000.0,
            "population": 271713.635,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 350000.0,
            "population": 3270.164,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 222100.0,
            "population": 23640.489,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 22837.743,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 150000.0,
            "population": 77133.214,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 505.0,
            "population": 14.356,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 53000.0,
            "population": 15975.668,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 28000.0,
            "population": 9597.609,
            "land_size": 75261.0
        }
    },
    "1998": {
        "Albania": {
            "beehives": 56500.0,
            "population": 3110.682,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 276500.0,
            "population": 30192.754,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1100000.0,
            "population": 15359.601,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2100000.0,
            "population": 36063.459,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 60000.0,
            "population": 3108.687,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 396000.0,
            "population": 18587.021,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 369171.0,
            "population": 8041.05,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 72000.0,
            "population": 7989.905,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 232.0,
            "population": 9969.987,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 29000.0,
            "population": 10663.132,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 2000.0,
            "population": 230.244,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 8096.761,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 69512.0,
            "population": 3734.337,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 824000.0,
            "population": 169785.25,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 296278.0,
            "population": 8137.67,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 80000.0,
            "population": 6185.562,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 309000.0,
            "population": 14723.768,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 563614.0,
            "population": 30022.073,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1370000.0,
            "population": 3475.492,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 7770.048,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 14977.733,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7108550.0,
            "population": 1300530.474,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 38364.309,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 23.0,
            "population": 18.313,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 3803.887,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 86000.0,
            "population": 4491.907,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 150800.0,
            "population": 11038.692,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 43800.0,
            "population": 908.702,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 542161.0,
            "population": 10323.247,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 8214.426,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 40000.0,
            "population": 12198.449,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1384014.0,
            "population": 66200.269,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5797.765,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 20600.0,
            "population": 1406.349,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3100460.0,
            "population": 62507.724,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 3000.0,
            "population": 800.157,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 42000.0,
            "population": 5164.242,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 986337.0,
            "population": 58444.246,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1100.0,
            "population": 231.57,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 78300.0,
            "population": 4575.398,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 917000.0,
            "population": 81402.673,
            "land_size": 35703.0
        },
        "Greece": {
            "beehives": 1283733.0,
            "population": 10970.121,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 55.948,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 417.622,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 262.0,
            "population": 152.277,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 60000.0,
            "population": 11133.501,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 50000.0,
            "population": 7860.781,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1154.371,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 753.778,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 8174.68,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10000.0,
            "population": 6220.406,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 570000.0,
            "population": 10279.602,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 1019483.581,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3300000.0,
            "population": 63971.836,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 70000.0,
            "population": 5699.273,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 1000000.0,
            "population": 56742.76,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 2296.0,
            "population": 2608.873,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 195352.0,
            "population": 127117.434,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 25000.0,
            "population": 4943.975,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2470000.0,
            "population": 30250.488,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 62000.0,
            "population": 4786.777,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 60.0,
            "population": 2430.549,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 125000.0,
            "population": 3693.52,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 35500.0,
            "population": 5196.78,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 849.0,
            "population": 32.311,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 80200.0,
            "population": 3555.141,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 129000.0,
            "population": 14808.791,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 20000.0,
            "population": 10360.561,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 379.646,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1791111.0,
            "population": 96056.321,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1057.0,
            "population": 2355.664,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 28110.443,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 38000.0,
            "population": 16813.949,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 7000.0,
            "population": 45611.22,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15745.647,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 208.056,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 300000.0,
            "population": 3783.974,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 116319.759,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 805.0,
            "population": 2.01,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 57850.0
        },
        "Oman": {
            "beehives": null,
            "population": 2251.864,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 125000.0,
            "population": 134843.233,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 5107.839,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1400000.0,
            "population": 38564.195,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 251830.0,
            "population": 10214.052,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4230.0,
            "population": 3643.679,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 946805.0,
            "population": 46620.691,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 103600.0,
            "population": 4254.836,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 626000.0,
            "population": 22466.286,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3578600.0,
            "population": 147360.604,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 1900.0,
            "population": 6962.802,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 172.839,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 30000.0,
            "population": 9347.774,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 196000.0,
            "population": 10301.753,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 275403.0,
            "population": 5395.254,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 180000.0,
            "population": 1987.385,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 43682.26,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 1890000.0,
            "population": 40201.56,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 70000.0,
            "population": 31677.463,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 90000.0,
            "population": 8870.848,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 259805.0,
            "population": 7091.77,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 384803.0,
            "population": 15599.591,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 13700.0,
            "population": 6027.388,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 74843.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 866.53,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 97.032,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2000.0,
            "population": 1261.695,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 244000.0,
            "population": 9509.857,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4199000.0,
            "population": 61329.676,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.332,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 71000.0,
            "population": 22290.78,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3002.0,
            "population": 49746.523,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 58509.974,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2500000.0,
            "population": 31924.196,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2637000.0,
            "population": 275175.301,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 300000.0,
            "population": 3291.053,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 217100.0,
            "population": 24036.014,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 23288.564,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 160000.0,
            "population": 78115.71,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 512.0,
            "population": 14.464,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 58000.0,
            "population": 16450.31,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 30000.0,
            "population": 9866.476,
            "land_size": 75261.0
        }
    },
    "1999": {
        "Albania": {
            "beehives": 67000.0,
            "population": 3122.697,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 278500.0,
            "population": 30623.406,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 15866.869,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2700000.0,
            "population": 36467.218,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 45919.0,
            "population": 3089.022,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 339000.0,
            "population": 18788.186,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 343062.0,
            "population": 8051.113,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 70000.0,
            "population": 8054.126,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 200.0,
            "population": 9924.437,
            "land_size": 20760.0
        },
        "Belgium-Luxembourg": {
            "beehives": 29000.0,
            "population": 10686.422,
            "land_size": 3312.0
        },
        "Belize": {
            "beehives": 2000.0,
            "population": 238.988,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 8257.066,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 72800.0,
            "population": 3743.354,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 824000.0,
            "population": 172318.675,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 311064.0,
            "population": 8066.998,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 75000.0,
            "population": 6267.124,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 310000.0,
            "population": 15112.592,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 588824.0,
            "population": 30302.515,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1380000.0,
            "population": 3558.014,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 8053.536,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 490000.0,
            "population": 15162.8,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7202550.0,
            "population": 1310294.314,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 100000.0,
            "population": 38999.471,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 24.0,
            "population": 18.041,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 3885.43,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 87000.0,
            "population": 4456.437,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 143200.0,
            "population": 11084.67,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 43800.0,
            "population": 926.046,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 564982.0,
            "population": 10306.411,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 8343.283,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 40000.0,
            "population": 12442.115,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1328000.0,
            "population": 67515.591,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 220000.0,
            "population": 5844.846,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 20500.0,
            "population": 1403.789,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3386970.0,
            "population": 64343.013,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 3900.0,
            "population": 806.303,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 39000.0,
            "population": 5175.926,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 980116.0,
            "population": 58704.381,
            "land_size": 54908.6
        },
        "French Polynesia": {
            "beehives": 1150.0,
            "population": 236.221,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 94200.0,
            "population": 4456.647,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 899000.0,
            "population": 81389.927,
            "land_size": 35703.0
        },
        "Greece": {
            "beehives": 1289572.0,
            "population": 11027.9,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": null,
            "population": 56.046,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 421.041,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 264.0,
            "population": 153.953,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 50000.0,
            "population": 11387.203,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 50000.0,
            "population": 8054.743,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1177.131,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 749.674,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 24000.0,
            "population": 8319.057,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10000.0,
            "population": 6397.151,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 580000.0,
            "population": 10249.416,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9700000.0,
            "population": 1038058.156,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2154116.0,
            "population": 64800.88,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 72000.0,
            "population": 5824.941,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 56655.632,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 4828.0,
            "population": 2632.675,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 188561.0,
            "population": 127326.07,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 30000.0,
            "population": 5031.762,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2480000.0,
            "population": 31098.757,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 63000.0,
            "population": 4861.125,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 43.0,
            "population": 2408.092,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 127000.0,
            "population": 3747.766,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 36000.0,
            "population": 5275.926,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 915.0,
            "population": 32.769,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 79500.0,
            "population": 3529.181,
            "land_size": 6530.0
        },
        "Madagascar": {
            "beehives": 130000.0,
            "population": 15282.521,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 17300.0,
            "population": 10642.936,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 383.531,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1944573.0,
            "population": 97484.832,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1154.0,
            "population": 2376.225,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 28455.509,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 39000.0,
            "population": 17244.188,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 8000.0,
            "population": 46181.077,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15835.523,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 212.776,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 320695.0,
            "population": 3818.131,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 119260.063,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 805.0,
            "population": 1.956,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 46195.0
        },
        "Oman": {
            "beehives": null,
            "population": 2254.904,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 135000.0,
            "population": 138624.621,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 5216.349,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1300000.0,
            "population": 38567.854,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 285230.0,
            "population": 10254.49,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 2960.0,
            "population": 3659.723,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1080887.0,
            "population": 47016.957,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 82400.0,
            "population": 4225.829,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 620000.0,
            "population": 22298.125,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3521100.0,
            "population": 146915.915,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 7501.234,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 173.609,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 46000.0,
            "population": 9568.722,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 190900.0,
            "population": 10195.46,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 279101.0,
            "population": 5397.708,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 120000.0,
            "population": 1987.632,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 44338.543,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2085000.0,
            "population": 40454.47,
            "land_size": 50599.0
        },
        "Sudan (former)": {
            "beehives": 72000.0,
            "population": 32560.402,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 94000.0,
            "population": 8873.1,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 246278.0,
            "population": 7115.027,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 360367.0,
            "population": 16013.985,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 23600.0,
            "population": 6119.661,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 74843.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 873.136,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 97.482,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2000.0,
            "population": 1263.933,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 243000.0,
            "population": 9613.588,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4322000.0,
            "population": 62287.397,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.346,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 73000.0,
            "population": 22952.41,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2974.0,
            "population": 49288.734,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 58715.854,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2550000.0,
            "population": 32682.239,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2652000.0,
            "population": 278548.15,
            "land_size": 962909.0
        },
        "Uruguay": {
            "beehives": 600000.0,
            "population": 3308.012,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 172500.0,
            "population": 24412.045,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 23739.841,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 170000.0,
            "population": 79035.871,
            "land_size": 33111.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 519.0,
            "population": 14.574,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 63000.0,
            "population": 16921.149,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 33000.0,
            "population": 10140.561,
            "land_size": 75261.0
        }
    },
    "2000": {
        "Albania": {
            "beehives": 76000.0,
            "population": 3129.243,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 190000.0,
            "population": 31042.235,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 16395.473,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2800000.0,
            "population": 36870.787,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 49703.0,
            "population": 3069.591,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 428000.0,
            "population": 18991.431,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 330672.0,
            "population": 8069.276,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 73000.0,
            "population": 8122.741,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 190.0,
            "population": 9871.632,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10282.033,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2000.0,
            "population": 247.315,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 8418.264,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 90000.0,
            "population": 3751.176,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 824000.0,
            "population": 174790.34,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 334865.0,
            "population": 7997.957,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 62271.0,
            "population": 6378.871,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 310000.0,
            "population": 15513.945,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 599863.0,
            "population": 30588.383,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1380000.0,
            "population": 3640.427,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 8355.654,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 495000.0,
            "population": 15342.353,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7494970.0,
            "population": 1319551.401,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 102000.0,
            "population": 39629.968,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 25.0,
            "population": 17.93,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 3962.372,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 98000.0,
            "population": 4428.075,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 148000.0,
            "population": 11126.43,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 44260.0,
            "population": 943.29,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 534814.0,
            "population": 10289.373,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 8471.321,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 41000.0,
            "population": 12681.123,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1422721.0,
            "population": 68831.561,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 5887.936,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 23400.0,
            "population": 1399.112,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3220430.0,
            "population": 66224.804,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 4600.0,
            "population": 811.006,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 42000.0,
            "population": 5187.954,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 940185.0,
            "population": 59015.096,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1230.0,
            "population": 240.686,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 97600.0,
            "population": 4362.187,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 902000.0,
            "population": 81400.882,
            "land_size": 35703.0
        },
        "Greece": {
            "beehives": 1293185.0,
            "population": 11082.104,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 18.0,
            "population": 56.175,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 422.051,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 265.0,
            "population": 155.329,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 49000.0,
            "population": 11650.743,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 55700.0,
            "population": 8240.73,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1201.301,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 746.715,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 25000.0,
            "population": 8463.806,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10000.0,
            "population": 6574.509,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 590000.0,
            "population": 10220.507,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1056575.549,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2271446.0,
            "population": 65623.405,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 72000.0,
            "population": 5945.95,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 56692.178,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 7414.0,
            "population": 2654.701,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 185000.0,
            "population": 127524.174,
            "land_size": 37780.0
        },
        "Jordan": {
            "beehives": 50000.0,
            "population": 5122.493,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 4000000.0,
            "population": 31964.557,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 68000.0,
            "population": 4920.712,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 35.0,
            "population": 2384.164,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 132000.0,
            "population": 3842.778,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 36500.0,
            "population": 5357.891,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 953.0,
            "population": 33.184,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 73000.0,
            "population": 3501.839,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 7965.0,
            "population": 436.103,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 15766.806,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 31600.0,
            "population": 10946.445,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 387.004,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1875731.0,
            "population": 98899.845,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1530.0,
            "population": 2397.418,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 570000.0,
            "population": 28793.679,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 40000.0,
            "population": 17711.927,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 8000.0,
            "population": 46719.701,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 15926.188,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2040.0,
            "population": 217.269,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 347512.0,
            "population": 3858.999,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 122283.85,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 806.0,
            "population": 1.899,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 46020.0
        },
        "Oman": {
            "beehives": null,
            "population": 2267.973,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 144000.0,
            "population": 142343.578,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 5323.201,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1300000.0,
            "population": 38556.693,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 251949.0,
            "population": 10297.112,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 2180.0,
            "population": 3668.96,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1240486.0,
            "population": 47379.241,
            "land_size": 9926.0
        },
        "Republic of Moldova": {
            "beehives": 76000.0,
            "population": 4202.658,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 614000.0,
            "population": 22137.419,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3440565.0,
            "population": 146404.903,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 10000.0,
            "population": 7933.681,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 174.454,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 50000.0,
            "population": 9797.734,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 192000.0,
            "population": 10101.175,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 279101.0,
            "population": 5399.211,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 190000.0,
            "population": 1987.717,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 44967.708,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2125100.0,
            "population": 40824.754,
            "land_size": 50500.0
        },
        "Sudan (former)": {
            "beehives": 72000.0,
            "population": 33474.409,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 96000.0,
            "population": 8881.64,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 235801.0,
            "population": 7143.761,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 345091.0,
            "population": 16410.848,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 29300.0,
            "population": 6216.341,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 74972.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 884.366,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 97.973,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2050.0,
            "population": 1267.153,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 295000.0,
            "population": 9708.35,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4267123.0,
            "population": 63240.194,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.394,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 23650.172,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2857.0,
            "population": 48838.065,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 58923.309,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2600000.0,
            "population": 33499.18,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2622000.0,
            "population": 281710.909,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 600000.0,
            "population": 3319.736,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 145000.0,
            "population": 24769.955,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 24192.446,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 170000.0,
            "population": 79910.412,
            "land_size": 32924.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 526.0,
            "population": 14.694,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 64000.0,
            "population": 17409.072,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 35000.0,
            "population": 10415.944,
            "land_size": 75261.0
        }
    },
    "2001": {
        "Albania": {
            "beehives": 82000.0,
            "population": 3129.704,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 280000.0,
            "population": 31451.514,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1200000.0,
            "population": 16945.753,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2800000.0,
            "population": 37275.652,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 50811.0,
            "population": 3050.687,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 380000.0,
            "population": 19194.672,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 310000.0,
            "population": 8097.748,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 74000.0,
            "population": 8197.298,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 192.0,
            "population": 9811.401,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10319.019,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2000.0,
            "population": 255.063,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 8580.235,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 106000.0,
            "population": 3755.512,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 820000.0,
            "population": 177196.054,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 349452.0,
            "population": 7930.703,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 53391.0,
            "population": 6525.545,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 310000.0,
            "population": 15928.91,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 602328.0,
            "population": 30880.073,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1380000.0,
            "population": 3722.018,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 8678.051,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 500000.0,
            "population": 15516.113,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7598410.0,
            "population": 1328341.175,
            "land_size": 960000.02
        },
        "Colombia": {
            "beehives": 105000.0,
            "population": 40255.967,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 25.0,
            "population": 18.025,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4034.074,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 98000.0,
            "population": 4408.075,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 148000.0,
            "population": 11164.667,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 45952.0,
            "population": 960.276,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 537226.0,
            "population": 10271.008,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 8598.601,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 42000.0,
            "population": 12914.667,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1485000.0,
            "population": 70152.661,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 5927.006,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 37000.0,
            "population": 1391.73,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 3327370.0,
            "population": 68159.423,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 5300.0,
            "population": 813.925,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 44000.0,
            "population": 5200.477,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 932004.0,
            "population": 59384.132,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1230.0,
            "population": 244.931,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 104896.0,
            "population": 4296.979,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 892723.0,
            "population": 81453.885,
            "land_size": 35703.0
        },
        "Greece": {
            "beehives": 1294150.0,
            "population": 11134.457,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 18.0,
            "population": 56.327,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 420.238,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 265.0,
            "population": 156.401,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 65000.0,
            "population": 11924.946,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 56000.0,
            "population": 8417.081,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1227.106,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 745.206,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 25000.0,
            "population": 8608.819,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 6751.912,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 590000.0,
            "population": 10193.449,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1075000.085,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2246192.0,
            "population": 66449.112,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 72000.0,
            "population": 6060.676,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 56875.147,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 10015.0,
            "population": 2674.702,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 127713.828,
            "land_size": 37788.0
        },
        "Jordan": {
            "beehives": 50000.0,
            "population": 5217.336,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 4400000.0,
            "population": 32848.564,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 72000.0,
            "population": 4962.836,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 39.0,
            "population": 2358.693,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 130000.0,
            "population": 3991.001,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5443.248,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 953.0,
            "population": 33.552,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 74800.0,
            "population": 3473.625,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 7385.0,
            "population": 440.198,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 16260.932,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 45800.0,
            "population": 11271.6,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 389.987,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1862372.0,
            "population": 100298.153,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1500.0,
            "population": 2419.588,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 550000.0,
            "population": 29126.33,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 40000.0,
            "population": 18221.888,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 8000.0,
            "population": 47225.12,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16018.114,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2180.0,
            "population": 221.493,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 339934.0,
            "population": 3907.933,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 125394.046,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 806.0,
            "population": 1.854,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 46585.0
        },
        "Oman": {
            "beehives": null,
            "population": 2294.962,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 144000.0,
            "population": 145978.402,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 62000.0,
            "population": 5428.444,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1300000.0,
            "population": 38529.582,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 246333.0,
            "population": 10341.454,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 2210.0,
            "population": 3670.296,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1530176.0,
            "population": 47706.224,
            "land_size": 9954.0
        },
        "Republic of Moldova": {
            "beehives": 72100.0,
            "population": 4187.093,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 649000.0,
            "population": 21989.35,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3473885.0,
            "population": 145830.721,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 8231.156,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 175.392,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 50000.0,
            "population": 10036.104,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 221000.0,
            "population": 10023.939,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 267361.0,
            "population": 5399.992,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 160000.0,
            "population": 1987.461,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 45571.274,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2298110.0,
            "population": 41319.427,
            "land_size": 50502.0
        },
        "Sudan (former)": {
            "beehives": 73000.0,
            "population": 34418.875,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 92000.0,
            "population": 8897.793,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 221573.0,
            "population": 7179.169,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 364352.0,
            "population": 16766.561,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 29100.0,
            "population": 6318.513,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 75000.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 901.214,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 98.487,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2100.0,
            "population": 1271.632,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 304000.0,
            "population": 9793.903,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4115353.0,
            "population": 64192.243,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.484,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 24388.968,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2849.0,
            "population": 48401.656,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 59124.288,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2650000.0,
            "population": 34385.856,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2550000.0,
            "population": 284607.993,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 600500.0,
            "population": 3325.473,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 143900.0,
            "population": 25108.563,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10000.0,
            "population": 24646.472,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 175000.0,
            "population": 80742.499,
            "land_size": 32925.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 532.0,
            "population": 14.843,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 46000.0,
            "population": 17918.373,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 38000.0,
            "population": 10692.193,
            "land_size": 75261.0
        }
    },
    "2002": {
        "Albania": {
            "beehives": 92000.0,
            "population": 3126.187,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 320000.0,
            "population": 31855.109,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1200000.0,
            "population": 17519.417,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2900000.0,
            "population": 37681.749,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 52458.0,
            "population": 3033.978,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 360000.0,
            "population": 19401.368,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 345000.0,
            "population": 8134.412,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 75000.0,
            "population": 8277.061,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 196.0,
            "population": 9745.923,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10364.885,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2050.0,
            "population": 262.378,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 8742.814,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 125000.0,
            "population": 3759.387,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 825000.0,
            "population": 179537.52,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 334000.0,
            "population": 7866.239,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 21681.0,
            "population": 6704.113,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 311000.0,
            "population": 16357.602,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 588485.0,
            "population": 31178.263,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1380000.0,
            "population": 3802.128,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 9019.233,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 510000.0,
            "population": 15684.409,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7699630.0,
            "population": 1336765.152,
            "land_size": 960000.02
        },
        "Colombia": {
            "beehives": 107000.0,
            "population": 40875.36,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 25.0,
            "population": 18.278,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4100.925,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 107000.0,
            "population": 4395.799,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 127300.0,
            "population": 11199.651,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 44867.0,
            "population": 976.964,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 517743.0,
            "population": 10252.261,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 91500.0,
            "population": 8724.975,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 42500.0,
            "population": 13143.465,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1447000.0,
            "population": 71485.043,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 5962.136,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 47500.0,
            "population": 1382.732,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4399580.0,
            "population": 70142.091,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 4900.0,
            "population": 815.257,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 47000.0,
            "population": 5213.366,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 929440.0,
            "population": 59803.441,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1540.0,
            "population": 248.972,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 140900.0,
            "population": 4258.571,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 881987.0,
            "population": 81535.122,
            "land_size": 35704.0
        },
        "Greece": {
            "beehives": 1288104.0,
            "population": 11182.305,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 11.0,
            "population": 56.518,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 416.136,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 270.0,
            "population": 157.176,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 79800.0,
            "population": 12208.848,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 60000.0,
            "population": 8586.074,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1254.453,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 744.789,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 25500.0,
            "population": 8754.15,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 6929.265,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 590000.0,
            "population": 10167.283,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1093317.189,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2451876.0,
            "population": 67284.796,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 73000.0,
            "population": 6169.313,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 57182.519,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 12617.0,
            "population": 2692.845,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 127893.078,
            "land_size": 37789.0
        },
        "Jordan": {
            "beehives": 50000.0,
            "population": 5317.506,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 4200000.0,
            "population": 33751.739,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 70000.0,
            "population": 4991.483,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 48.0,
            "population": 2332.53,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 124000.0,
            "population": 4182.205,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5531.089,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 943.0,
            "population": 33.879,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 76100.0,
            "population": 3444.763,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 7423.0,
            "population": 443.726,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 16765.117,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 23100.0,
            "population": 11616.887,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 392.5,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1783854.0,
            "population": 101684.758,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1500.0,
            "population": 2443.271,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 500000.0,
            "population": 29454.768,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 41000.0,
            "population": 18764.155,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 8000.0,
            "population": 47702.171,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16110.355,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 225.482,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 333248.0,
            "population": 3963.206,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 128596.076,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 807.0,
            "population": 1.791,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 47900.0
        },
        "Oman": {
            "beehives": null,
            "population": 2334.858,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 144000.0,
            "population": 149549.7,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 62000.0,
            "population": 5531.962,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1300000.0,
            "population": 38488.647,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 236908.0,
            "population": 10385.987,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 2920.0,
            "population": 3664.328,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1772458.0,
            "population": 47999.547,
            "land_size": 9959.0
        },
        "Republic of Moldova": {
            "beehives": 78600.0,
            "population": 4178.23,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 745000.0,
            "population": 21853.273,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3446300.0,
            "population": 145215.7,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 8427.06,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 176.407,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 50000.0,
            "population": 10283.699,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 205000.0,
            "population": 9959.836,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 279303.0,
            "population": 5400.122,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 130000.0,
            "population": 1987.267,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 46150.913,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2227380.0,
            "population": 41919.585,
            "land_size": 50532.0
        },
        "Sudan (former)": {
            "beehives": 73000.0,
            "population": 35393.004,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 97000.0,
            "population": 8920.71,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 214280.0,
            "population": 7220.377,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 384000.0,
            "population": 17084.632,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 29700.0,
            "population": 6426.867,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 75000.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 922.694,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 99.022,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2150.0,
            "population": 1277.213,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 312000.0,
            "population": 9871.251,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4161000.0,
            "population": 65145.367,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.596,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 25167.257,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2908.0,
            "population": 47980.039,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 59326.294,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2650000.0,
            "population": 35334.788,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2574000.0,
            "population": 287279.318,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 600500.0,
            "population": 3326.04,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 134900.0,
            "population": 25431.122,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10500.0,
            "population": 25100.408,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 175000.0,
            "population": 81534.407,
            "land_size": 32930.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 533.0,
            "population": 14.988,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 45000.0,
            "population": 18443.691,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 40000.0,
            "population": 10971.698,
            "land_size": 75261.0
        }
    },
    "2003": {
        "Albania": {
            "beehives": 111000.0,
            "population": 3118.023,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 340000.0,
            "population": 32264.157,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 18121.479,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2900000.0,
            "population": 38087.868,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 52987.0,
            "population": 3017.932,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 360000.0,
            "population": 19624.166,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 327346.0,
            "population": 8175.852,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 75053.0,
            "population": 8361.433,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 185.0,
            "population": 9679.235,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10419.032,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2075.0,
            "population": 269.425,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 8905.823,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 137000.0,
            "population": 3762.173,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 830000.0,
            "population": 181809.246,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 310928.0,
            "population": 7804.312,
            "land_size": 11099.0
        },
        "Burundi": {
            "beehives": 114729.0,
            "population": 6909.154,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 311000.0,
            "population": 16800.865,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 563330.0,
            "population": 31488.048,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1380000.0,
            "population": 3881.181,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 9373.916,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 520000.0,
            "population": 15849.652,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 7900720.0,
            "population": 1344908.155,
            "land_size": 959999.97
        },
        "Colombia": {
            "beehives": 55000.0,
            "population": 41483.869,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 26.0,
            "population": 18.608,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4164.053,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 111000.0,
            "population": 4388.895,
            "land_size": 5654.0
        },
        "Cuba": {
            "beehives": 162500.0,
            "population": 11229.183,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 45714.0,
            "population": 993.563,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 477743.0,
            "population": 10239.136,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 92000.0,
            "population": 8850.317,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 43000.0,
            "population": 13369.678,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1436682.0,
            "population": 72826.097,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 5994.077,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 50500.0,
            "population": 1372.909,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4200000.0,
            "population": 72170.584,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 4700.0,
            "population": 816.076,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 37000.0,
            "population": 5227.093,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 924760.0,
            "population": 60251.588,
            "land_size": 54938.7
        },
        "French Polynesia": {
            "beehives": 1920.0,
            "population": 252.703,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 117900.0,
            "population": 4238.929,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 838832.0,
            "population": 81614.38,
            "land_size": 35704.0
        },
        "Greece": {
            "beehives": 1294086.0,
            "population": 11218.884,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.708,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 410.86,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 270.0,
            "population": 157.717,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 75400.0,
            "population": 12500.478,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 60000.0,
            "population": 8753.093,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1283.305,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 745.143,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 26000.0,
            "population": 8900.104,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 7106.319,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 614000.0,
            "population": 10141.342,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1111523.144,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2733117.0,
            "population": 68122.938,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 84000.0,
            "population": 6278.374,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 57564.588,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 16804.0,
            "population": 2709.437,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 128058.372,
            "land_size": 37790.0
        },
        "Jordan": {
            "beehives": 50000.0,
            "population": 5434.03,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 3800000.0,
            "population": 34678.779,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 70604.0,
            "population": 5013.53,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 54.0,
            "population": 2305.848,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 123000.0,
            "population": 4388.375,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5620.547,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 937.0,
            "population": 34.175,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 80900.0,
            "population": 3414.365,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 7029.0,
            "population": 447.322,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 17279.141,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 25000.0,
            "population": 11982.695,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 394.534,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1727234.0,
            "population": 103081.02,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1500.0,
            "population": 2468.762,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 450000.0,
            "population": 29782.884,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 42000.0,
            "population": 19331.1,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 10000.0,
            "population": 48148.902,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16200.951,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 229.244,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 324590.0,
            "population": 4022.069,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 131900.631,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 807.0,
            "population": 1.755,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 51428.0
        },
        "Oman": {
            "beehives": null,
            "population": 2386.166,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 192000.0,
            "population": 153093.373,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 63000.0,
            "population": 5632.983,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1300000.0,
            "population": 38441.824,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 228471.0,
            "population": 10429.612,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4209.0,
            "population": 3653.658,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1871648.0,
            "population": 48260.897,
            "land_size": 9960.0
        },
        "Republic of Moldova": {
            "beehives": 75100.0,
            "population": 4173.274,
            "land_size": 3384.0
        },
        "Romania": {
            "beehives": 781000.0,
            "population": 21720.407,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3414625.0,
            "population": 144610.882,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 8557.161,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 177.484,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 50000.0,
            "population": 10541.467,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 245000.0,
            "population": 9906.313,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 262250.0,
            "population": 5399.834,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 110000.0,
            "population": 1987.862,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 46719.196,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2315980.0,
            "population": 42596.453,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 74000.0,
            "population": 36396.195,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 89000.0,
            "population": 8951.436,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 208008.0,
            "population": 7268.359,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 398000.0,
            "population": 17415.214,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 33403.0,
            "population": 6541.547,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 75000.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 947.108,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 99.589,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2200.0,
            "population": 1283.559,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 314000.0,
            "population": 9945.277,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4288853.0,
            "population": 66089.402,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.726,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 25980.552,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2811.0,
            "population": 47582.461,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 59561.432,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2700000.0,
            "population": 36337.782,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2599000.0,
            "population": 289815.562,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 600000.0,
            "population": 3323.668,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 133800.0,
            "population": 25749.101,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10500.0,
            "population": 25551.624,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 178000.0,
            "population": 82301.656,
            "land_size": 32931.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 551.0,
            "population": 15.096,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 50000.0,
            "population": 18985.0,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 45000.0,
            "population": 11256.743,
            "land_size": 75261.0
        }
    },
    "2004": {
        "Albania": {
            "beehives": 131800.0,
            "population": 3104.892,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 430000.0,
            "population": 32692.163,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 18758.145,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2900000.0,
            "population": 38491.972,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 77712.0,
            "population": 3000.72,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 360000.0,
            "population": 19879.649,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 283300.0,
            "population": 8216.805,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 95715.0,
            "population": 8448.946,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 162.0,
            "population": 9616.634,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10480.117,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2100.0,
            "population": 276.504,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 9069.039,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 240723.0,
            "population": 3764.194,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 835000.0,
            "population": 184006.481,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 409656.0,
            "population": 7744.632,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 90000.0,
            "population": 7131.693,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 311000.0,
            "population": 17259.322,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 597890.0,
            "population": 31815.494,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1380000.0,
            "population": 3959.875,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 9734.767,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 520000.0,
            "population": 16014.971,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8101530.0,
            "population": 1352871.028,
            "land_size": 960000.05
        },
        "Colombia": {
            "beehives": 70000.0,
            "population": 42075.955,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 27.0,
            "population": 18.904,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4225.155,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 119000.0,
            "population": 4383.882,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 140900.0,
            "population": 11250.365,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 40000.0,
            "population": 1010.408,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 556853.0,
            "population": 10239.439,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 92000.0,
            "population": 8974.444,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 44000.0,
            "population": 13596.388,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1436544.0,
            "population": 74172.073,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 6023.797,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 34500.0,
            "population": 1363.565,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4546245.0,
            "population": 74239.505,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 4700.0,
            "population": 817.86,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 46000.0,
            "population": 5242.17,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 934872.0,
            "population": 60697.981,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1885.0,
            "population": 255.992,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 133200.0,
            "population": 4225.816,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 750525.0,
            "population": 81646.474,
            "land_size": 35705.0
        },
        "Greece": {
            "beehives": 1302244.0,
            "population": 11234.992,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.861,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 406.063,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 280.0,
            "population": 158.101,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 76600.0,
            "population": 12796.925,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 60000.0,
            "population": 8925.743,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6100.0,
            "population": 1313.492,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 745.737,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9047.077,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 7282.953,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 612000.0,
            "population": 10114.48,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1129623.456,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2809743.0,
            "population": 68951.281,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 90000.0,
            "population": 6396.514,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 900000.0,
            "population": 57948.424,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 18385.0,
            "population": 2725.015,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 128204.195,
            "land_size": 37791.0
        },
        "Jordan": {
            "beehives": 49000.0,
            "population": 5580.244,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 3300000.0,
            "population": 35635.271,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 82629.0,
            "population": 5039.005,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 46.0,
            "population": 2278.921,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 131000.0,
            "population": 4569.378,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5710.154,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1096.0,
            "population": 34.452,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 81100.0,
            "population": 3381.131,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 7782.0,
            "population": 451.819,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 17802.997,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 12369.07,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 396.103,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1745078.0,
            "population": 104514.932,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2000.0,
            "population": 2496.391,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 400000.0,
            "population": 30115.214,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 43000.0,
            "population": 19910.552,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 13000.0,
            "population": 48564.484,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16287.182,
            "land_size": 4153.0
        },
        "New Caledonia": {
            "beehives": 3840.0,
            "population": 232.883,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 315333.0,
            "population": 4080.438,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 135320.422,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 808.0,
            "population": 1.715,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 59946.0
        },
        "Oman": {
            "beehives": 27447.0,
            "population": 2445.517,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 288000.0,
            "population": 156664.697,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 63000.0,
            "population": 5730.549,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1300000.0,
            "population": 38399.558,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 216717.0,
            "population": 10470.921,
            "land_size": 9212.0
        },
        "Puerto Rico": {
            "beehives": 4776.0,
            "population": 3642.006,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 2012734.0,
            "population": 48493.441,
            "land_size": 9962.0
        },
        "Republic of Moldova": {
            "beehives": 80430.0,
            "population": 4167.959,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 840000.0,
            "population": 21577.885,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3302799.0,
            "population": 144080.643,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 8680.524,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 178.59,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 80000.0,
            "population": 10810.083,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 307000.0,
            "population": 9857.775,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 192002.0,
            "population": 5399.38,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 100000.0,
            "population": 1990.222,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 52000.0,
            "population": 47291.61,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2397000.0,
            "population": 43308.345,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 74000.0,
            "population": 37427.544,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 91000.0,
            "population": 8990.654,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 207945.0,
            "population": 7323.737,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 442000.0,
            "population": 17827.825,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 42874.0,
            "population": 6662.389,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 69036.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 971.893,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 100.218,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2250.0,
            "population": 1290.123,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 354000.0,
            "population": 10022.277,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4399725.0,
            "population": 67010.93,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 9.869,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 26821.297,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2758.0,
            "population": 47217.493,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 59872.753,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2750000.0,
            "population": 37379.767,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2554000.0,
            "population": 292354.658,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 600000.0,
            "population": 3321.476,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 107000.0,
            "population": 26077.607,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10500.0,
            "population": 25996.594,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 151000.0,
            "population": 83062.821,
            "land_size": 32931.4
        },
        "Wallis and Futuna Islands": {
            "beehives": 551.0,
            "population": 15.093,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 86000.0,
            "population": 19540.098,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 50000.0,
            "population": 11550.642,
            "land_size": 75261.0
        }
    },
    "2005": {
        "Albania": {
            "beehives": 157000.0,
            "population": 3086.81,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 33149.724,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1200000.0,
            "population": 19433.602,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2900000.0,
            "population": 38892.931,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 94184.0,
            "population": 2981.269,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 360000.0,
            "population": 20178.54,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 327346.0,
            "population": 8253.65,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 104955.0,
            "population": 8538.605,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 180.0,
            "population": 9562.088,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10546.886,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2100.0,
            "population": 283.8,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 9232.306,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 259570.0,
            "population": 3765.331,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 880000.0,
            "population": 186127.103,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 450000.0,
            "population": 7686.962,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 100000.0,
            "population": 7364.862,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 311000.0,
            "population": 17733.41,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 615541.0,
            "population": 32164.309,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1390000.0,
            "population": 4038.382,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 120000.0,
            "population": 10096.633,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 520000.0,
            "population": 16182.721,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8338930.0,
            "population": 1360734.525,
            "land_size": 959999.98
        },
        "Colombia": {
            "beehives": 75000.0,
            "population": 42647.723,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 29.0,
            "population": 19.074,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4285.502,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 167000.0,
            "population": 4378.058,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 88600.0,
            "population": 11261.582,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 40000.0,
            "population": 1027.662,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 551681.0,
            "population": 10258.167,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 92000.0,
            "population": 9097.257,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 44000.0,
            "population": 13825.847,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1461939.0,
            "population": 75523.569,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 6052.123,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 32700.0,
            "population": 1355.648,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4020410.0,
            "population": 76346.311,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 4700.0,
            "population": 821.604,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 53000.0,
            "population": 5258.927,
            "land_size": 33815.0
        },
        "France": {
            "beehives": 939765.0,
            "population": 61120.127,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 2115.0,
            "population": 258.78,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 152030.0,
            "population": 4210.168,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 738933.0,
            "population": 81602.741,
            "land_size": 35709.0
        },
        "Greece": {
            "beehives": 1313662.0,
            "population": 11224.791,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.951,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 402.904,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 280.0,
            "population": 158.402,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 76600.0,
            "population": 13096.028,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 60000.0,
            "population": 9109.581,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6150.0,
            "population": 1344.93,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 746.163,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9195.288,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 7458.985,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 658000.0,
            "population": 10085.937,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1147609.927,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 2825462.0,
            "population": 69762.347,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 92000.0,
            "population": 6529.479,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 950000.0,
            "population": 58281.212,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 20609.0,
            "population": 2740.003,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 128326.116,
            "land_size": 37791.0
        },
        "Jordan": {
            "beehives": 45000.0,
            "population": 5765.635,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 4100000.0,
            "population": 36624.895,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 73313.0,
            "population": 5075.347,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 48.0,
            "population": 2251.993,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 132000.0,
            "population": 4698.763,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5798.614,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1033.0,
            "population": 34.713,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 82800.0,
            "population": 3344.268,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 7511.0,
            "population": 457.842,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 18336.724,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 12775.516,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 397.19,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1732112.0,
            "population": 106005.203,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2000.0,
            "population": 2526.424,
            "land_size": 156412.0
        },
        "Morocco": {
            "beehives": 380000.0,
            "population": 30455.561,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 44000.0,
            "population": 20493.925,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 16000.0,
            "population": 48949.924,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16367.158,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 236.442,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 319463.0,
            "population": 4135.355,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 138865.016,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 809.0,
            "population": 1.683,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 64685.0
        },
        "Oman": {
            "beehives": 28448.0,
            "population": 2511.251,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 160304.008,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 63500.0,
            "population": 5824.096,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1250000.0,
            "population": 38368.949,
            "land_size": 31269.0
        },
        "Portugal": {
            "beehives": 188479.0,
            "population": 10508.495,
            "land_size": 9209.0
        },
        "Puerto Rico": {
            "beehives": 3073.0,
            "population": 3631.889,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 2089762.0,
            "population": 48701.073,
            "land_size": 9965.0
        },
        "Republic of Moldova": {
            "beehives": 86751.0,
            "population": 4159.293,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 888000.0,
            "population": 21417.291,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3296966.0,
            "population": 143672.116,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 8840.215,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 179.727,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 124600.0,
            "population": 11090.116,
            "land_size": 19671.0
        },
        "Serbia and Montenegro": {
            "beehives": 308111.0,
            "population": 9810.216,
            "land_size": 10217.0
        },
        "Slovakia": {
            "beehives": 237155.0,
            "population": 5398.963,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 90000.0,
            "population": 1994.976,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 60000.0,
            "population": 47880.601,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2338000.0,
            "population": 44019.123,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 74000.0,
            "population": 38485.448,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 85400.0,
            "population": 9038.623,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 208091.0,
            "population": 7386.816,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 463000.0,
            "population": 18361.176,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 48982.0,
            "population": 6789.321,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 66738.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 995.135,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 100.905,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2250.0,
            "population": 1296.502,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 430000.0,
            "population": 10106.771,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4590013.0,
            "population": 67903.469,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 10.0,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 27684.585,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2980.0,
            "population": 46890.772,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 60287.954,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2750000.0,
            "population": 38450.32,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2409000.0,
            "population": 294993.511,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 600000.0,
            "population": 3321.803,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 113673.0,
            "population": 26427.789,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10500.0,
            "population": 26432.447,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 191000.0,
            "population": 83832.661,
            "land_size": 33121.2
        },
        "Wallis and Futuna Islands": {
            "beehives": 551.0,
            "population": 14.939,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 126000.0,
            "population": 20107.409,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 50000.0,
            "population": 11856.247,
            "land_size": 75261.0
        }
    },
    "2006": {
        "Albania": {
            "beehives": 173000.0,
            "population": 3063.021,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 390000.0,
            "population": 33641.002,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1100000.0,
            "population": 20149.901,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2950000.0,
            "population": 39289.878,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 113051.0,
            "population": 2958.307,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 365000.0,
            "population": 20526.303,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 311000.0,
            "population": 8285.343,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 103520.0,
            "population": 8630.146,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 200.0,
            "population": 9516.883,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29000.0,
            "population": 10619.475,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2125.0,
            "population": 291.329,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 9395.446,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 283227.0,
            "population": 3765.424,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 952000.0,
            "population": 188167.356,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 671674.0,
            "population": 7631.012,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 135838.0,
            "population": 7607.849,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 312000.0,
            "population": 18223.674,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 628401.0,
            "population": 32536.987,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1400000.0,
            "population": 4118.069,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 121000.0,
            "population": 10457.124,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 520000.0,
            "population": 16354.504,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8480750.0,
            "population": 1368528.374,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 115000.0,
            "population": 43200.897,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 20.0,
            "population": 19.092,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4345.412,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 162000.0,
            "population": 4370.777,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 155100.0,
            "population": 11261.248,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 41478.0,
            "population": 1045.507,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 525560.0,
            "population": 10298.614,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93000.0,
            "population": 9218.686,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 44000.0,
            "population": 14059.384,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1417465.0,
            "population": 76873.663,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 6079.399,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 33000.0,
            "population": 1349.363,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4884468.0,
            "population": 78489.206,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 4700.0,
            "population": 827.87,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 54000.0,
            "population": 5277.491,
            "land_size": 33844.0
        },
        "France": {
            "beehives": 971297.0,
            "population": 61508.926,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1425.0,
            "population": 261.01,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 149500.0,
            "population": 4189.72,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 698290.0,
            "population": 81472.226,
            "land_size": 35710.0
        },
        "Greece": {
            "beehives": 1332992.0,
            "population": 11185.228,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.971,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 401.813,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 290.0,
            "population": 158.648,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 120100.0,
            "population": 13397.021,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 60500.0,
            "population": 9307.425,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6200.0,
            "population": 1377.581,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 746.343,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9344.785,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 7634.298,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 641000.0,
            "population": 10055.653,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1165486.291,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3258571.0,
            "population": 70554.76,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 93000.0,
            "population": 6680.637,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 930000.0,
            "population": 58542.619,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 22899.0,
            "population": 2754.407,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 183000.0,
            "population": 128422.734,
            "land_size": 37792.0
        },
        "Jordan": {
            "beehives": 45000.0,
            "population": 5991.54,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 3000000.0,
            "population": 37649.033,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 77000.0,
            "population": 5124.382,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 52.0,
            "population": 2225.066,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 118800.0,
            "population": 4759.753,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5886.872,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 854.0,
            "population": 34.97,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 85000.0,
            "population": 3303.335,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 6391.0,
            "population": 465.61,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 18880.269,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 30000.0,
            "population": 13203.378,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 397.847,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1747033.0,
            "population": 107560.153,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3404.0,
            "population": 2558.856,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 42613.0,
            "population": 617.86,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 350000.0,
            "population": 30804.683,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 39000.0,
            "population": 21080.11,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 26000.0,
            "population": 49301.05,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16440.097,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 239.93,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 322376.0,
            "population": 4185.888,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 142538.308,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 800.0,
            "population": 1.661,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 65921.0
        },
        "Oman": {
            "beehives": 34226.0,
            "population": 2580.758,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 164022.627,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 64000.0,
            "population": 5913.209,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1400000.0,
            "population": 38354.45,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 196527.0,
            "population": 10542.83,
            "land_size": 9209.0
        },
        "Puerto Rico": {
            "beehives": 3100.0,
            "population": 3623.78,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1976121.0,
            "population": 48880.451,
            "land_size": 9968.0
        },
        "Republic of Moldova": {
            "beehives": 95639.0,
            "population": 4146.265,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 888200.0,
            "population": 21234.305,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3228497.0,
            "population": 143403.256,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 9043.337,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 180.876,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 190000.0,
            "population": 11382.268,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 275535.0,
            "population": 9145.914,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 276533.0,
            "population": 5398.673,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 40105.0,
            "population": 2002.43,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 60000.0,
            "population": 48489.459,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2345368.0,
            "population": 44728.565,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 74500.0,
            "population": 39569.229,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 82000.0,
            "population": 9096.165,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 202839.0,
            "population": 7457.958,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 501000.0,
            "population": 19059.258,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 64829.0,
            "population": 6922.587,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 67804.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1016.432,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 900.0,
            "population": 101.706,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2250.0,
            "population": 1302.561,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 483000.0,
            "population": 10201.214,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4851683.0,
            "population": 68756.81,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 35.0,
            "population": 10.12,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 75000.0,
            "population": 28571.475,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3369.0,
            "population": 46607.395,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 60821.356,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2800000.0,
            "population": 39548.663,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2394000.0,
            "population": 297758.969,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 610000.0,
            "population": 3325.401,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 118141.0,
            "population": 26804.072,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10500.0,
            "population": 26850.194,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 236000.0,
            "population": 84617.54,
            "land_size": 33121.2
        },
        "Wallis and Futuna Islands": {
            "beehives": 555.0,
            "population": 14.609,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 129000.0,
            "population": 20687.646,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 50000.0,
            "population": 12173.514,
            "land_size": 75261.0
        }
    },
    "2007": {
        "Albania": {
            "beehives": 171000.0,
            "population": 3033.998,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 440000.0,
            "population": 34166.972,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1100000.0,
            "population": 20905.363,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2970000.0,
            "population": 39684.295,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 154631.0,
            "population": 2932.618,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 368000.0,
            "population": 20916.344,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 298000.0,
            "population": 8313.737,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 115618.0,
            "population": 8724.243,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 208.0,
            "population": 9480.515,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29500.0,
            "population": 10697.572,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2150.0,
            "population": 299.025,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 9558.439,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 310749.0,
            "population": 3762.786,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 914000.0,
            "population": 190130.443,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 718822.0,
            "population": 7576.672,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 125303.0,
            "population": 7862.214,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 312000.0,
            "population": 18730.282,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 589254.0,
            "population": 32930.794,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1420000.0,
            "population": 4198.01,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 121500.0,
            "population": 10818.024,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 456039.0,
            "population": 16530.195,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8573050.0,
            "population": 1376265.629,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 115000.0,
            "population": 43737.516,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 19.001,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4404.628,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 314000.0,
            "population": 4362.426,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 140900.0,
            "population": 11251.122,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 45000.0,
            "population": 1063.713,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 520084.0,
            "population": 10357.538,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93000.0,
            "population": 9338.861,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 45000.0,
            "population": 14296.557,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1352109.0,
            "population": 78232.126,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 6105.81,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 38000.0,
            "population": 1344.296,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4688010.0,
            "population": 80674.348,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 10900.0,
            "population": 836.19,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 53000.0,
            "population": 5297.739,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 1031089.0,
            "population": 61869.227,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1920.0,
            "population": 262.721,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 146300.0,
            "population": 4166.867,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 669999.0,
            "population": 81277.83,
            "land_size": 35710.0
        },
        "Greece": {
            "beehives": 1343037.0,
            "population": 11120.358,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.927,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 800.0,
            "population": 402.395,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 300.0,
            "population": 158.847,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 120100.0,
            "population": 13700.327,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 61000.0,
            "population": 9518.162,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6480.0,
            "population": 1411.543,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4100.0,
            "population": 746.474,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9495.328,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 7808.518,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 493000.0,
            "population": 10024.149,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 9800000.0,
            "population": 1183209.472,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3665147.0,
            "population": 71336.475,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 92000.0,
            "population": 6847.141,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 940000.0,
            "population": 58747.861,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 25477.0,
            "population": 2768.227,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 184000.0,
            "population": 128494.057,
            "land_size": 37793.0
        },
        "Jordan": {
            "beehives": 45000.0,
            "population": 6255.28,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 2400000.0,
            "population": 38705.932,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 80256.0,
            "population": 5184.392,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 62.0,
            "population": 2198.089,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 115000.0,
            "population": 4767.344,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 5974.787,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1079.0,
            "population": 35.217,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 88300.0,
            "population": 3258.98,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 6279.0,
            "population": 474.915,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 19433.53,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 35365.0,
            "population": 13651.464,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 398.046,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1741040.0,
            "population": 109170.502,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2393.0,
            "population": 2593.82,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 41629.0,
            "population": 619.555,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 350000.0,
            "population": 31163.673,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 40000.0,
            "population": 21673.316,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 33300.0,
            "population": 49621.475,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16506.655,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 243.331,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 335229.0,
            "population": 4233.046,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 146339.977,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 820.0,
            "population": 1.643,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 65948.0
        },
        "Oman": {
            "beehives": 35217.0,
            "population": 2657.158,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 167808.105,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 64500.0,
            "population": 5998.427,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1450000.0,
            "population": 38353.338,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 163863.0,
            "population": 10573.143,
            "land_size": 9209.0
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3616.34,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1889514.0,
            "population": 49034.81,
            "land_size": 9972.0
        },
        "Republic of Moldova": {
            "beehives": 102031.0,
            "population": 4130.136,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 891043.0,
            "population": 21034.189,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3060407.0,
            "population": 143266.212,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 9273.757,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 182.046,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 250000.0,
            "population": 11687.08,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 267238.0,
            "population": 9101.185,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 246479.0,
            "population": 5398.692,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 40000.0,
            "population": 2012.118,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 60000.0,
            "population": 49119.759,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2313454.0,
            "population": 45429.076,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 74500.0,
            "population": 40675.76,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 83200.0,
            "population": 9162.939,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 193355.0,
            "population": 7536.982,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 530000.0,
            "population": 19878.254,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 81720.0,
            "population": 7062.672,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 58307.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1036.392,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 920.0,
            "population": 102.581,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2250.0,
            "population": 1308.451,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 479000.0,
            "population": 10304.726,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4825596.0,
            "population": 69581.848,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 40.0,
            "population": 10.221,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 76000.0,
            "population": 29486.338,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3456.0,
            "population": 46366.353,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 61455.162,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2750000.0,
            "population": 40681.414,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2443000.0,
            "population": 300608.429,
            "land_size": 963203.0
        },
        "Uruguay": {
            "beehives": 514032.0,
            "population": 3331.749,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 120000.0,
            "population": 27204.711,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10600.0,
            "population": 27247.61,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 221000.0,
            "population": 85419.591,
            "land_size": 33121.2
        },
        "Wallis and Futuna Islands": {
            "beehives": 600.0,
            "population": 14.132,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 161000.0,
            "population": 21282.515,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 50000.0,
            "population": 12502.958,
            "land_size": 75261.0
        }
    },
    "2008": {
        "Albania": {
            "beehives": 175000.0,
            "population": 3002.678,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 34730.608,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1100000.0,
            "population": 21695.634,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2970000.0,
            "population": 40080.16,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 169655.0,
            "population": 2907.618,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 360000.0,
            "population": 21332.282,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 300000.0,
            "population": 8341.532,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 126362.0,
            "population": 8821.873,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 213.0,
            "population": 9452.855,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 29500.0,
            "population": 10778.758,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2100.0,
            "population": 306.823,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 9721.454,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 333850.0,
            "population": 3754.271,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 994000.0,
            "population": 192030.362,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 652586.0,
            "population": 7524.087,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 202669.0,
            "population": 8126.102,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 313000.0,
            "population": 19252.666,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 570070.0,
            "population": 33337.638,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1450000.0,
            "population": 4273.366,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 122000.0,
            "population": 11183.588,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 487070.0,
            "population": 16708.258,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8771200.0,
            "population": 1383985.631,
            "land_size": 960000.0
        },
        "Colombia": {
            "beehives": 115000.0,
            "population": 44254.975,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 18.818,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38000.0,
            "population": 4463.125,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 310000.0,
            "population": 4352.636,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 147900.0,
            "population": 11236.971,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 40000.0,
            "population": 1081.563,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 461086.0,
            "population": 10425.266,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93000.0,
            "population": 9458.075,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 45000.0,
            "population": 14535.739,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1277316.0,
            "population": 79636.079,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215100.0,
            "population": 6131.764,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 29700.0,
            "population": 1340.073,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 5146990.0,
            "population": 82916.235,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 13200.0,
            "population": 845.361,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 43000.0,
            "population": 5319.449,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 1000095.0,
            "population": 62209.207,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 264.061,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 183800.0,
            "population": 4142.655,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 691689.0,
            "population": 81065.752,
            "land_size": 35711.0
        },
        "Greece": {
            "beehives": 1374919.0,
            "population": 11040.309,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.841,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 900.0,
            "population": 403.965,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 300.0,
            "population": 159.036,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 120100.0,
            "population": 14006.428,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 61500.0,
            "population": 9738.792,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6550.0,
            "population": 1446.936,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4150.0,
            "population": 746.817,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9646.58,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10500.0,
            "population": 7980.955,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 553000.0,
            "population": 9991.867,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 10600000.0,
            "population": 1200669.765,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 3779044.0,
            "population": 72120.604,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 90000.0,
            "population": 7020.836,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 58922.109,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 28274.0,
            "population": 2781.876,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 184500.0,
            "population": 128538.646,
            "land_size": 37794.0
        },
        "Jordan": {
            "beehives": 40000.0,
            "population": 6556.478,
            "land_size": 8878.0
        },
        "Kenya": {
            "beehives": 1950000.0,
            "population": 39791.981,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 80124.0,
            "population": 5254.979,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 53.0,
            "population": 2171.259,
            "land_size": 6455.9
        },
        "Lebanon": {
            "beehives": 124000.0,
            "population": 4764.741,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6058.748,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1082.0,
            "population": 35.471,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 101400.0,
            "population": 3212.865,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 5635.0,
            "population": 485.405,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 131000.0,
            "population": 19996.473,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 35400.0,
            "population": 14113.577,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 397.668,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1797478.0,
            "population": 110815.271,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2617.0,
            "population": 2631.898,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 28631.0,
            "population": 621.32,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 350000.0,
            "population": 31536.811,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 42000.0,
            "population": 22276.596,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 60000.0,
            "population": 49929.642,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16568.104,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 4641.0,
            "population": 246.695,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 373828.0,
            "population": 4278.155,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 150269.623,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 814.0,
            "population": 1.635,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 66733.0
        },
        "Oman": {
            "beehives": 40383.0,
            "population": 2750.963,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 171648.986,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 61228.0,
            "population": 6081.296,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1450000.0,
            "population": 38356.786,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 194297.0,
            "population": 10595.314,
            "land_size": 9209.0
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3608.032,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1858574.0,
            "population": 49182.456,
            "land_size": 9983.0
        },
        "Republic of Moldova": {
            "beehives": 98303.0,
            "population": 4112.891,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 982368.0,
            "population": 20829.517,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3097174.0,
            "population": 143248.764,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 9524.534,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 183.263,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 280000.0,
            "population": 12004.701,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 298159.0,
            "population": 9060.103,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 247678.0,
            "population": 5399.371,
            "land_size": 4903.5
        },
        "Slovenia": {
            "beehives": 41245.0,
            "population": 2023.052,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 60000.0,
            "population": 49779.471,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2388750.0,
            "population": 46068.811,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 75000.0,
            "population": 41797.776,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 76800.0,
            "population": 9236.428,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 180026.0,
            "population": 7622.821,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 541000.0,
            "population": 20664.038,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 118648.0,
            "population": 7209.93,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 61705.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1055.431,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 920.0,
            "population": 103.379,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2300.0,
            "population": 1314.443,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 468000.0,
            "population": 10414.433,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 4888960.0,
            "population": 70418.604,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 38.0,
            "population": 10.314,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 76500.0,
            "population": 30431.736,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3422.0,
            "population": 46158.711,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 62145.097,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2700000.0,
            "population": 41853.944,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2342000.0,
            "population": 303486.012,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 493014.0,
            "population": 3340.221,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 140000.0,
            "population": 27626.982,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10600.0,
            "population": 27635.832,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 86243.413,
            "land_size": 33105.1
        },
        "Wallis and Futuna Islands": {
            "beehives": 588.0,
            "population": 13.578,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 163000.0,
            "population": 21892.146,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 51000.0,
            "population": 12848.53,
            "land_size": 75261.0
        }
    },
    "2009": {
        "Albania": {
            "beehives": 203300.0,
            "population": 2973.048,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 35333.881,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1100000.0,
            "population": 22514.281,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2970000.0,
            "population": 40482.788,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 183056.0,
            "population": 2888.092,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 340000.0,
            "population": 21750.851,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 330000.0,
            "population": 8372.663,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 142528.0,
            "population": 8924.388,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 215.0,
            "population": 9433.152,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 30000.0,
            "population": 10859.94,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2200.0,
            "population": 314.655,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 9884.781,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 347168.0,
            "population": 3735.938,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1025000.0,
            "population": 193886.508,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 624965.0,
            "population": 7473.513,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 240063.0,
            "population": 8397.668,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 314000.0,
            "population": 19789.919,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 592120.0,
            "population": 33746.093,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1470000.0,
            "population": 4337.625,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 122500.0,
            "population": 11560.147,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 485000.0,
            "population": 16886.186,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8827150.0,
            "population": 1391725.007,
            "land_size": 960000.05
        },
        "Colombia": {
            "beehives": 115000.0,
            "population": 44750.054,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 18.602,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 38100.0,
            "population": 4520.74,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 304000.0,
            "population": 4341.264,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 148800.0,
            "population": 11226.709,
            "land_size": 10989.0
        },
        "Cyprus": {
            "beehives": 44000.0,
            "population": 1098.083,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 497946.0,
            "population": 10488.155,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93000.0,
            "population": 9576.737,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 45000.0,
            "population": 14774.424,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1253229.0,
            "population": 81134.798,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215000.0,
            "population": 6157.686,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 24800.0,
            "population": 1336.135,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4598226.0,
            "population": 85233.913,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 12101.0,
            "population": 853.637,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 41000.0,
            "population": 5342.262,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 1016631.0,
            "population": 62542.9,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 265.254,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 206900.0,
            "population": 4119.494,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 694851.0,
            "population": 80899.961,
            "land_size": 35712.0
        },
        "Greece": {
            "beehives": 1386286.0,
            "population": 10959.272,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.728,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 842.0,
            "population": 405.448,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 300.0,
            "population": 159.226,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 122000.0,
            "population": 14316.263,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 61500.0,
            "population": 9964.469,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6600.0,
            "population": 1483.921,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4150.0,
            "population": 747.718,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9798.046,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 8150.775,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 421000.0,
            "population": 9959.439,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 10600000.0,
            "population": 1217726.215,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 4373228.0,
            "population": 72924.837,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 90000.0,
            "population": 7190.034,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 59105.625,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 31416.0,
            "population": 2795.837,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 185000.0,
            "population": 128555.189,
            "land_size": 37794.7
        },
        "Jordan": {
            "beehives": 37000.0,
            "population": 6893.26,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1842496.0,
            "population": 40901.792,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 84891.0,
            "population": 5334.71,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 43.0,
            "population": 2144.785,
            "land_size": 6456.0
        },
        "Lebanon": {
            "beehives": 134000.0,
            "population": 4813.026,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6133.984,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1068.0,
            "population": 35.727,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 101600.0,
            "population": 3167.265,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 4939.0,
            "population": 496.527,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 132000.0,
            "population": 20569.117,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 35600.0,
            "population": 14581.429,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 396.565,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1774757.0,
            "population": 112463.887,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1392.0,
            "population": 2673.796,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 18132.0,
            "population": 622.939,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 355000.0,
            "population": 31929.087,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 42500.0,
            "population": 22894.71,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 61000.0,
            "population": 50250.367,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16626.373,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 2000.0,
            "population": 250.085,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 389971.0,
            "population": 4323.337,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 154324.933,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 814.0,
            "population": 1.628,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 52000.0
        },
        "Oman": {
            "beehives": 37685.0,
            "population": 2876.186,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 175525.609,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 6163.972,
            "land_size": 40675.0
        },
        "Poland": {
            "beehives": 1450000.0,
            "population": 38351.916,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 195596.0,
            "population": 10604.056,
            "land_size": 9221.0
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3596.54,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1988021.0,
            "population": 49347.461,
            "land_size": 9990.0
        },
        "Republic of Moldova": {
            "beehives": 98117.0,
            "population": 4097.518,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 998000.0,
            "population": 20637.991,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 2975622.0,
            "population": 143326.913,
            "land_size": 1709824.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 9782.77,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 184.556,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 290000.0,
            "population": 12335.084,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 301560.0,
            "population": 9023.357,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 215666.0,
            "population": 5401.153,
            "land_size": 4904.0
        },
        "Slovenia": {
            "beehives": 46000.0,
            "population": 2033.804,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 65000.0,
            "population": 50477.011,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2389950.0,
            "population": 46583.565,
            "land_size": 50537.0
        },
        "Sudan (former)": {
            "beehives": 75000.0,
            "population": 42926.047,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 83700.0,
            "population": 9313.087,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 173814.0,
            "population": 7713.898,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 595394.0,
            "population": 21205.873,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 140042.0,
            "population": 7364.753,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 53439.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1074.277,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 920.0,
            "population": 103.89,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2300.0,
            "population": 1320.93,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 554000.0,
            "population": 10525.694,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 5339224.0,
            "population": 71321.399,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 38.0,
            "population": 10.424,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 77000.0,
            "population": 31411.096,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3250.0,
            "population": 45970.941,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 62828.616,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2800000.0,
            "population": 43073.834,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2498000.0,
            "population": 306307.567,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 497647.0,
            "population": 3349.676,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 160000.0,
            "population": 28065.466,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10600.0,
            "population": 28031.009,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 87092.252,
            "land_size": 33105.1
        },
        "Wallis and Futuna Islands": {
            "beehives": 593.0,
            "population": 13.07,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 166000.0,
            "population": 22516.46,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 52000.0,
            "population": 13215.139,
            "land_size": 75261.0
        }
    },
    "2010": {
        "Albania": {
            "beehives": 218000.0,
            "population": 2948.023,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 35977.455,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 23356.246,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2970000.0,
            "population": 40895.752,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 196112.0,
            "population": 2877.319,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 330000.0,
            "population": 22154.679,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 367583.0,
            "population": 8409.949,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 193225.0,
            "population": 9032.461,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 225.0,
            "population": 9420.574,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 30000.0,
            "population": 10938.739,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2175.0,
            "population": 322.464,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 10048.59,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 366571.0,
            "population": 3705.472,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1000000.0,
            "population": 195713.635,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 613262.0,
            "population": 7425.008,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 257312.0,
            "population": 8675.602,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 315000.0,
            "population": 20341.241,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 620291.0,
            "population": 34147.564,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1500000.0,
            "population": 4386.768,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 123000.0,
            "population": 11952.136,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 485000.0,
            "population": 17062.536,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8897730.0,
            "population": 1399502.716,
            "land_size": 960000.07
        },
        "Colombia": {
            "beehives": 115000.0,
            "population": 45222.7,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 18.391,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 40894.0,
            "population": 4577.378,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 308000.0,
            "population": 4328.165,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 154700.0,
            "population": 11225.832,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 40466.0,
            "population": 1112.612,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 528186.0,
            "population": 10536.518,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93000.0,
            "population": 9695.121,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 45000.0,
            "population": 15011.117,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1139414.0,
            "population": 82761.235,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215100.0,
            "population": 6183.875,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 27500.0,
            "population": 1332.101,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 5130322.0,
            "population": 87639.964,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11892.0,
            "population": 859.818,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 37000.0,
            "population": 5365.782,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 981914.0,
            "population": 62879.53,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 266.455,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 256500.0,
            "population": 4099.099,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 685441.0,
            "population": 80827.002,
            "land_size": 35712.7
        },
        "Greece": {
            "beehives": 1422123.0,
            "population": 10887.637,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.638,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 900.0,
            "population": 406.071,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 300.0,
            "population": 159.444,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 93600.0,
            "population": 14630.417,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 62000.0,
            "population": 10192.176,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6650.0,
            "population": 1522.599,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4200.0,
            "population": 749.436,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 9949.322,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 8317.47,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 432000.0,
            "population": 9927.37,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 11500000.0,
            "population": 1234281.17,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 5011767.0,
            "population": 73762.519,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 96000.0,
            "population": 7346.446,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 59325.229,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 34558.0,
            "population": 2810.46,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 187000.0,
            "population": 128542.353,
            "land_size": 37795.0
        },
        "Jordan": {
            "beehives": 43000.0,
            "population": 7261.539,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1459539.0,
            "population": 42030.676,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 90754.0,
            "population": 5422.293,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 35.0,
            "population": 2118.861,
            "land_size": 6451.0
        },
        "Lebanon": {
            "beehives": 163908.0,
            "population": 4953.061,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6197.663,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1173.0,
            "population": 35.994,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 102600.0,
            "population": 3123.816,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 5174.0,
            "population": 507.889,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 132000.0,
            "population": 21151.64,
            "land_size": 58704.0
        },
        "Mali": {
            "beehives": 35800.0,
            "population": 15049.353,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 394.663,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1842130.0,
            "population": 114092.963,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 1628.0,
            "population": 2719.896,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 21668.0,
            "population": 624.275,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 360000.0,
            "population": 32343.389,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 43000.0,
            "population": 23531.574,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 61000.0,
            "population": 50600.818,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16682.917,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 5360.0,
            "population": 253.527,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 402069.0,
            "population": 4370.062,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 158503.197,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 820.0,
            "population": 1.618,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 38216.0
        },
        "Oman": {
            "beehives": 39607.0,
            "population": 3041.434,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 179424.641,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 6248.02,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1450000.0,
            "population": 38329.781,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 202436.0,
            "population": 10596.058,
            "land_size": 9221.0
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3579.841,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1697847.0,
            "population": 49545.636,
            "land_size": 10003.0
        },
        "Republic of Moldova": {
            "beehives": 101464.0,
            "population": 4086.081,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1057186.0,
            "population": 20471.864,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3047239.0,
            "population": 143479.274,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 10039.338,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 185.949,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 300000.0,
            "population": 12678.148,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 319912.0,
            "population": 8991.254,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 232189.0,
            "population": 5404.294,
            "land_size": 4903.7
        },
        "Slovenia": {
            "beehives": 52000.0,
            "population": 2043.337,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 65000.0,
            "population": 51216.964,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2438550.0,
            "population": 46931.015,
            "land_size": 50560.0
        },
        "Sudan (former)": {
            "beehives": 75000.0,
            "population": 44053.377,
            "land_size": 250581.0
        },
        "Sweden": {
            "beehives": 87720.0,
            "population": 9390.168,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 165045.0,
            "population": 7808.675,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 630775.0,
            "population": 21362.529,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 180617.0,
            "population": 7527.394,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 76052.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1093.523,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 920.0,
            "population": 103.986,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2330.0,
            "population": 1328.147,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 507000.0,
            "population": 10635.244,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 5602669.0,
            "population": 72326.988,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 40.0,
            "population": 10.53,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 77800.0,
            "population": 32428.167,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 3150.0,
            "population": 45792.09,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 63459.808,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2850000.0,
            "population": 44346.525,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2692000.0,
            "population": 309011.475,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 497647.0,
            "population": 3359.275,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 180000.0,
            "population": 28515.909,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10600.0,
            "population": 28439.94,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 87967.651,
            "land_size": 33095.4
        },
        "Wallis and Futuna Islands": {
            "beehives": 600.0,
            "population": 12.689,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 170000.0,
            "population": 23154.855,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 54000.0,
            "population": 13605.984,
            "land_size": 75261.0
        }
    },
    "2011": {
        "Albania": {
            "beehives": 233000.0,
            "population": 2928.592,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 36661.445,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 24220.661,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2970000.0,
            "population": 41320.5,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 203647.0,
            "population": 2876.538,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 240000.0,
            "population": 22538.001,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 368183.0,
            "population": 8453.501,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 212651.0,
            "population": 9146.275,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 223.0,
            "population": 9415.32,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 31000.0,
            "population": 11013.853,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2200.0,
            "population": 330.237,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 10212.954,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 381876.0,
            "population": 3661.175,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1094000.0,
            "population": 197514.536,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 547676.0,
            "population": 7378.65,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 313485.0,
            "population": 8958.406,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 315000.0,
            "population": 20906.388,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 637920.0,
            "population": 34539.159,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1550000.0,
            "population": 4418.637,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 123500.0,
            "population": 12360.99,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 485000.0,
            "population": 17233.576,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8953870.0,
            "population": 1407323.826,
            "land_size": 960000.09
        },
        "Colombia": {
            "beehives": 115000.0,
            "population": 45662.748,
            "land_size": 114175.0
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 18.195,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 44193.0,
            "population": 4633.086,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 405000.0,
            "population": 4313.099,
            "land_size": 5659.0
        },
        "Cuba": {
            "beehives": 161200.0,
            "population": 11236.671,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 48153.0,
            "population": 1124.833,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 565419.0,
            "population": 10566.517,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93000.0,
            "population": 9813.211,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 45000.0,
            "population": 15243.884,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 1090955.0,
            "population": 84529.252,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215100.0,
            "population": 6210.568,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 28300.0,
            "population": 1327.709,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 4993815.0,
            "population": 90139.929,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11698.0,
            "population": 863.449,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 37000.0,
            "population": 5390.038,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 839966.0,
            "population": 63222.227,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 267.698,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 311500.0,
            "population": 4081.017,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 695052.0,
            "population": 80855.632,
            "land_size": 35714.0
        },
        "Greece": {
            "beehives": 1427436.0,
            "population": 10829.079,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.552,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 845.0,
            "population": 405.64,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 302.0,
            "population": 159.692,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 95500.0,
            "population": 14948.801,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 62500.0,
            "population": 10420.472,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6650.0,
            "population": 1562.989,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4200.0,
            "population": 752.028,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 10100.32,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10650.0,
            "population": 8480.671,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 610000.0,
            "population": 9895.68,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 11500000.0,
            "population": 1250287.943,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 5172082.0,
            "population": 74634.957,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 98000.0,
            "population": 7487.1,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 59589.076,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 38014.0,
            "population": 2825.929,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 187000.0,
            "population": 128498.965,
            "land_size": 37795.5
        },
        "Jordan": {
            "beehives": 42000.0,
            "population": 7662.846,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1334023.0,
            "population": 43178.274,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 91162.0,
            "population": 5517.922,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 38.0,
            "population": 2093.61,
            "land_size": 6448.0
        },
        "Lebanon": {
            "beehives": 206000.0,
            "population": 5202.026,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6247.439,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 953.0,
            "population": 36.293,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 94000.0,
            "population": 3083.403,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 4642.0,
            "population": 519.307,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 133000.0,
            "population": 21743.967,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 35800.0,
            "population": 15514.59,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 391.878,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1847667.0,
            "population": 115695.473,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 896.0,
            "population": 2770.361,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 32000.0,
            "population": 625.27,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 360000.0,
            "population": 32781.853,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 43500.0,
            "population": 24187.494,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 63000.0,
            "population": 50990.617,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16738.193,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 5366.0,
            "population": 257.054,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 418163.0,
            "population": 4418.678,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 162805.077,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 815.0,
            "population": 1.62,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 44278.0
        },
        "Oman": {
            "beehives": 40000.0,
            "population": 3251.108,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 183340.174,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 6333.976,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1465000.0,
            "population": 38286.831,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 205127.0,
            "population": 10569.38,
            "land_size": 9221.0
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3559.861,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1531609.0,
            "population": 49786.159,
            "land_size": 10003.0
        },
        "Republic of Moldova": {
            "beehives": 105204.0,
            "population": 4079.164,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1274917.0,
            "population": 20336.718,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3049324.0,
            "population": 143703.025,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 10293.331,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 187.469,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 305000.0,
            "population": 13033.809,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 306068.0,
            "population": 8963.769,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 239851.0,
            "population": 5408.937,
            "land_size": 4903.6
        },
        "Slovenia": {
            "beehives": 59857.0,
            "population": 2051.287,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 67000.0,
            "population": 52003.755,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2440030.0,
            "population": 47084.24,
            "land_size": 50560.0
        },
        "Sudan (former)": {
            "beehives": 75500.0,
            "population": 45180.38
        },
        "Sweden": {
            "beehives": 87480.0,
            "population": 9466.71,
            "land_size": 45030.0
        },
        "Switzerland": {
            "beehives": 169391.0,
            "population": 7906.992,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 631526.0,
            "population": 21081.815,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 190153.0,
            "population": 7697.51,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 65277.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1113.151,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 920.0,
            "population": 103.562,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 4200.0,
            "population": 1336.178,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 589000.0,
            "population": 10741.88,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 6011332.0,
            "population": 73443.25,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 38.0,
            "population": 10.633,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 78000.0,
            "population": 33476.772,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2922.0,
            "population": 45619.844,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 64021.919,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2800000.0,
            "population": 45673.512,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2491000.0,
            "population": 311584.047,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 498000.0,
            "population": 3368.934,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 200000.0,
            "population": 28977.01,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10600.0,
            "population": 28887.874,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 88871.38,
            "land_size": 33095.7
        },
        "Wallis and Futuna Islands": {
            "beehives": 605.0,
            "population": 12.462,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 170700.0,
            "population": 23807.588,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 55000.0,
            "population": 14023.203,
            "land_size": 75261.0
        }
    },
    "2012": {
        "Albania": {
            "beehives": 239081.0,
            "population": 2914.096,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 37383.895,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 25107.931,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2970000.0,
            "population": 41755.196,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 209800.0,
            "population": 2884.234,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 230000.0,
            "population": 22903.948,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 376485.0,
            "population": 8502.227,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 225355.0,
            "population": 9264.692,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 223.0,
            "population": 9417.046,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 31500.0,
            "population": 11085.358,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2175.0,
            "population": 338.0,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 10377.676,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 383946.0,
            "population": 3604.972,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 900000.0,
            "population": 199287.299,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 529117.0,
            "population": 7334.003,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 390120.0,
            "population": 9245.988,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 316000.0,
            "population": 21485.265,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 690037.0,
            "population": 34922.03,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1560000.0,
            "population": 4436.416,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 123500.0,
            "population": 12784.75,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 485000.0,
            "population": 17400.347,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 8987204.0,
            "population": 1415164.184,
            "land_size": 960000.09
        },
        "Colombia": {
            "beehives": 120000.0,
            "population": 46075.718,
            "land_size": 114174.8
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 18.011,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 43270.0,
            "population": 4688.0,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 492000.0,
            "population": 4295.878,
            "land_size": 8807.3
        },
        "Cuba": {
            "beehives": 163600.0,
            "population": 11257.104,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 38000.0,
            "population": 1135.046,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 540705.0,
            "population": 10581.293,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 93500.0,
            "population": 9930.916,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 45500.0,
            "population": 15474.101,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 983041.0,
            "population": 86422.243,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215150.0,
            "population": 6237.923,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 26400.0,
            "population": 1323.159,
            "land_size": 4523.0
        },
        "Ethiopia": {
            "beehives": 5207300.0,
            "population": 92726.985,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11617.0,
            "population": 865.069,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 38000.0,
            "population": 5414.77,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 820401.0,
            "population": 63564.221,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 268.998,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 328000.0,
            "population": 4064.106,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 698714.0,
            "population": 80972.628,
            "land_size": 35717.0
        },
        "Greece": {
            "beehives": 1455013.0,
            "population": 10781.125,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.47,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 843.0,
            "population": 404.448,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 308.0,
            "population": 159.996,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 104900.0,
            "population": 15270.771,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 62500.0,
            "population": 10652.031,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6700.0,
            "population": 1604.979,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4250.0,
            "population": 755.399,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 10250.93,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10650.0,
            "population": 8640.691,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 729000.0,
            "population": 9864.358,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 11550000.0,
            "population": 1265780.247,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 5613259.0,
            "population": 75539.878,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 97000.0,
            "population": 7614.952,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 59879.471,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 41815.0,
            "population": 2842.132,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 190000.0,
            "population": 128423.571,
            "land_size": 37796.0
        },
        "Jordan": {
            "beehives": 45000.0,
            "population": 8089.962,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1801871.0,
            "population": 44343.467,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 89185.0,
            "population": 5621.576,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 48.0,
            "population": 2069.016,
            "land_size": 6448.0
        },
        "Lebanon": {
            "beehives": 206000.0,
            "population": 5537.612,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6285.748,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 847.0,
            "population": 36.615,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 89800.0,
            "population": 3045.561,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 4292.0,
            "population": 530.857,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 134000.0,
            "population": 22346.645,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 35850.0,
            "population": 15979.496,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 388.357,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1898239.0,
            "population": 117274.155,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 2128.0,
            "population": 2824.698,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 42237.0,
            "population": 625.925,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 365000.0,
            "population": 33241.9,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 44000.0,
            "population": 24862.664,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 63000.0,
            "population": 51413.704,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16791.84,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 5206.0,
            "population": 260.653,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 451787.0,
            "population": 4468.457,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 167228.794,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 816.0,
            "population": 1.61,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 45500.0
        },
        "Oman": {
            "beehives": 40000.0,
            "population": 3498.029,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 385000.0,
            "population": 187280.129,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 6421.513,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1470000.0,
            "population": 38227.044,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 207391.0,
            "population": 10526.308,
            "land_size": 9221.0
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3536.572,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1795197.0,
            "population": 50060.639,
            "land_size": 10015.0
        },
        "Republic of Moldova": {
            "beehives": 111653.0,
            "population": 4075.808,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1294610.0,
            "population": 20227.469,
            "land_size": 23839.0
        },
        "Russian Federation": {
            "beehives": 3250096.0,
            "population": 143993.892,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 10549.673,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 189.089,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 310000.0,
            "population": 13401.992,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 665022.0,
            "population": 8940.113,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 257449.0,
            "population": 5414.889,
            "land_size": 4903.6
        },
        "Slovenia": {
            "beehives": 62500.0,
            "population": 2057.823,
            "land_size": 2027.0
        },
        "South Africa": {
            "beehives": 67000.0,
            "population": 52832.658,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2429330.0,
            "population": 47063.06,
            "land_size": 50594.0
        },
        "Sudan": {
            "beehives": 76000.0,
            "population": 36193.783
        },
        "Sweden": {
            "beehives": 102731.0,
            "population": 9542.812,
            "land_size": 44742.0
        },
        "Switzerland": {
            "beehives": 161447.0,
            "population": 8008.012,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 597863.0,
            "population": 20438.856,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 195539.0,
            "population": 7874.835,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 52897.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1132.994,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 950.0,
            "population": 102.737,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2500.0,
            "population": 1344.819,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 589000.0,
            "population": 10847.002,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 6348009.0,
            "population": 74651.05,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 38.0,
            "population": 10.739,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 78300.0,
            "population": 34558.704,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2891.0,
            "population": 45453.806,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 64525.312,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2820000.0,
            "population": 47053.03,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2539000.0,
            "population": 314043.885,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 500000.0,
            "population": 3378.975,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 238600.0,
            "population": 29449.413,
            "land_size": 44740.0
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 11000.0,
            "population": 29360.837,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 89801.926,
            "land_size": 33097.1
        },
        "Wallis and Futuna Islands": {
            "beehives": 615.0,
            "population": 12.375,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 170000.0,
            "population": 24473.178,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 56000.0,
            "population": 14465.15,
            "land_size": 75261.0
        }
    },
    "2013": {
        "Albania": {
            "beehives": 246151.0,
            "population": 2903.79,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 38140.133,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 26015.781,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 3000000.0,
            "population": 42196.03,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 222189.0,
            "population": 2897.588,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 521081.0,
            "population": 23254.913,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 382638.0,
            "population": 8556.189,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 238358.0,
            "population": 9385.468,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 217.0,
            "population": 9423.506,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 31500.0,
            "population": 11154.009,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2175.0,
            "population": 345.715,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 10542.377,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 392659.0,
            "population": 3542.606,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 938000.0,
            "population": 201035.912,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 541564.0,
            "population": 7290.088,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 240853.0,
            "population": 9540.291,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 315500.0,
            "population": 22077.294,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 667397.0,
            "population": 35296.528,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1580000.0,
            "population": 4447.944,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 124000.0,
            "population": 13220.433,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 485000.0,
            "population": 17571.507,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 9020000.0,
            "population": 1422971.062,
            "land_size": 960000.13
        },
        "Colombia": {
            "beehives": 120000.0,
            "population": 46495.493,
            "land_size": 114174.9
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 17.833,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 45372.0,
            "population": 4742.107,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 547300.0,
            "population": 4276.598,
            "land_size": 8807.3
        },
        "Cuba": {
            "beehives": 164000.0,
            "population": 11282.723,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 40778.0,
            "population": 1143.866,
            "land_size": 925.0
        },
        "Czechia": {
            "beehives": 533040.0,
            "population": 10586.533,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 94000.0,
            "population": 10048.232,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 46000.0,
            "population": 15707.474,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 965258.0,
            "population": 88404.646,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215150.0,
            "population": 6266.07,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 41400.0,
            "population": 1319.062,
            "land_size": 4534.0
        },
        "Ethiopia": {
            "beehives": 5124228.0,
            "population": 95385.798,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11681.0,
            "population": 865.608,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 43000.0,
            "population": 5438.982,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 794733.0,
            "population": 63893.525,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 270.328,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 347500.0,
            "population": 4048.701,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 708775.0,
            "population": 81174.367,
            "land_size": 35734.0
        },
        "Greece": {
            "beehives": 1456711.0,
            "population": 10740.5,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.414,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 839.0,
            "population": 402.829,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 311.0,
            "population": 160.407,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 109300.0,
            "population": 15595.816,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 62500.0,
            "population": 10892.817,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6700.0,
            "population": 1648.255,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4250.0,
            "population": 759.285,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 10400.675,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10650.0,
            "population": 8798.521,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 678000.0,
            "population": 9833.923,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 11600000.0,
            "population": 1280842.125,
            "land_size": 328726.0
        },
        "Iran (Islamic Republic of)": {
            "beehives": 6644114.0,
            "population": 76481.961,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 101000.0,
            "population": 7734.841,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 60166.83,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 45997.0,
            "population": 2858.712,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 190000.0,
            "population": 128314.195,
            "land_size": 37796.2
        },
        "Jordan": {
            "beehives": 45000.0,
            "population": 8518.983,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1796283.0,
            "population": 45519.981,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 90562.0,
            "population": 5731.303,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 84.0,
            "population": 2044.957,
            "land_size": 6449.0
        },
        "Lebanon": {
            "beehives": 200000.0,
            "population": 5913.022,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6320.36,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 977.0,
            "population": 36.934,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 88300.0,
            "population": 3008.934,
            "land_size": 6530.0
        },
        "Luxembourg": {
            "beehives": 3510.0,
            "population": 542.56,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 133000.0,
            "population": 22961.255,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 35900.0,
            "population": 16449.854,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 384.576,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1933105.0,
            "population": 118827.161,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 3677.0,
            "population": 2881.791,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 42458.0,
            "population": 626.345,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 370000.0,
            "population": 33715.703,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 44000.0,
            "population": 25560.755,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 62000.0,
            "population": 51852.468,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16843.502,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 5539.0,
            "population": 264.242,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 452018.0,
            "population": 4518.515,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 171765.816,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 816.0,
            "population": 1.612,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 46226.0
        },
        "Oman": {
            "beehives": 40000.0,
            "population": 3764.806,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 386000.0,
            "population": 191260.806,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 6510.276,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1500000.0,
            "population": 38158.041,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 223390.0,
            "population": 10473.021,
            "land_size": 9222.52
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3503.858,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1756993.0,
            "population": 50345.717,
            "land_size": 10026.6
        },
        "Republic of Moldova": {
            "beehives": 110600.0,
            "population": 4074.591,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1254039.0,
            "population": 20132.776,
            "land_size": 23840.0
        },
        "Russian Federation": {
            "beehives": 3284176.0,
            "population": 144325.449,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 10811.538,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 190.718,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 313000.0,
            "population": 13782.424,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 653497.0,
            "population": 8918.904,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 254859.0,
            "population": 5421.725,
            "land_size": 4903.6
        },
        "Slovenia": {
            "beehives": 63000.0,
            "population": 2063.11,
            "land_size": 2067.5
        },
        "South Africa": {
            "beehives": 68000.0,
            "population": 53687.121,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2444000.0,
            "population": 46930.555,
            "land_size": 50594.0
        },
        "Sudan": {
            "beehives": 76000.0,
            "population": 37072.55
        },
        "Sweden": {
            "beehives": 90069.0,
            "population": 9618.016,
            "land_size": 44742.0
        },
        "Switzerland": {
            "beehives": 169391.0,
            "population": 8108.878,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 544846.0,
            "population": 19578.461,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 202089.0,
            "population": 8059.769,
            "land_size": 14255.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 68294.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1153.294,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 980.0,
            "population": 101.768,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2500.0,
            "population": 1353.703,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 590000.0,
            "population": 10952.951,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 6641348.0,
            "population": 75925.462,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 38.0,
            "population": 10.857,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 78500.0,
            "population": 35694.519,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2936.0,
            "population": 45286.983,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 64984.018,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2850000.0,
            "population": 48483.129,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2640000.0,
            "population": 316400.538,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 500000.0,
            "population": 3389.443,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 290300.0,
            "population": 29932.631,
            "land_size": 44410.3
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 11000.0,
            "population": 29781.04,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 90752.592,
            "land_size": 33097.2
        },
        "Wallis and Futuna Islands": {
            "beehives": 620.0,
            "population": 12.356,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 168000.0,
            "population": 25147.109,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 57000.0,
            "population": 14926.544,
            "land_size": 75261.0
        }
    },
    "2014": {
        "Albania": {
            "beehives": 261452.0,
            "population": 2896.305,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 400000.0,
            "population": 38923.692,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1150000.0,
            "population": 26941.779,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2980000.0,
            "population": 42637.511,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 241416.0,
            "population": 2912.409,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 520000.0,
            "population": 23596.424,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 376121.0,
            "population": 8615.214,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 243046.0,
            "population": 9505.622,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 219.0,
            "population": 9431.735,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 32000.0,
            "population": 11221.231,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2100.0,
            "population": 353.366,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 10706.517,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 392348.0,
            "population": 3482.105,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1020000.0,
            "population": 202763.739,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 577303.0,
            "population": 7245.646,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 203339.0,
            "population": 9844.299,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 314000.0,
            "population": 22681.852,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 696252.0,
            "population": 35664.337,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1580000.0,
            "population": 4464.175,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 124500.0,
            "population": 13663.566,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 315494.0,
            "population": 17758.959,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 9075000.0,
            "population": 1430670.819,
            "land_size": 960000.63
        },
        "Colombia": {
            "beehives": 120000.0,
            "population": 46967.696,
            "land_size": 114174.9
        },
        "Cook Islands": {
            "beehives": 40.0,
            "population": 17.691,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 45904.0,
            "population": 4795.396,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 560400.0,
            "population": 4255.512,
            "land_size": 8807.3
        },
        "Cuba": {
            "beehives": 169700.0,
            "population": 11306.904,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 42505.0,
            "population": 1152.285,
            "land_size": 925.1
        },
        "Czechia": {
            "beehives": 588060.0,
            "population": 10591.108,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 94500.0,
            "population": 10165.183,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 46000.0,
            "population": 15951.84,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 929626.0,
            "population": 90424.656,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215100.0,
            "population": 6295.128,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 39000.0,
            "population": 1316.277,
            "land_size": 4534.0
        },
        "Ethiopia": {
            "beehives": 5885263.0,
            "population": 98094.265,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11595.0,
            "population": 866.453,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 60000.0,
            "population": 5461.411,
            "land_size": 33842.0
        },
        "France": {
            "beehives": 767334.0,
            "population": 64193.55,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1900.0,
            "population": 271.705,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 398600.0,
            "population": 4035.311,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 741461.0,
            "population": 81450.378,
            "land_size": 35738.0
        },
        "Greece": {
            "beehives": 1528767.0,
            "population": 10701.456,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.381,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 842.0,
            "population": 401.314,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 313.0,
            "population": 161.016,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 98000.0,
            "population": 15923.236,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 62500.0,
            "population": 11150.982,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6700.0,
            "population": 1692.437,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4240.0,
            "population": 763.38,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27000.0,
            "population": 10549.009,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10650.0,
            "population": 8955.589,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 745000.0,
            "population": 9804.991,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 11800000.0,
            "population": 1295600.772,
            "land_size": 328725.9
        },
        "Iran (Islamic Republic of)": {
            "beehives": 6996366.0,
            "population": 77465.77,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 100000.0,
            "population": 7854.213,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 500000.0,
            "population": 60409.62,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 50597.0,
            "population": 2875.139,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 190000.0,
            "population": 128168.639,
            "land_size": 37796.2
        },
        "Jordan": {
            "beehives": 39427.0,
            "population": 8918.828,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1427572.0,
            "population": 46700.055,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 93892.0,
            "population": 5844.532,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 86.0,
            "population": 2021.219,
            "land_size": 6457.0
        },
        "Lebanon": {
            "beehives": 200000.0,
            "population": 6261.044,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 37000.0,
            "population": 6362.037,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 975.0,
            "population": 37.223,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 92100.0,
            "population": 2971.497,
            "land_size": 6528.6
        },
        "Luxembourg": {
            "beehives": 4880.0,
            "population": 554.516,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 134000.0,
            "population": 23589.888,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 40000.0,
            "population": 16934.214,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 381.138,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1981162.0,
            "population": 120355.128,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 6645.0,
            "population": 2940.108,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 43210.0,
            "population": 626.645,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 375000.0,
            "population": 34192.357,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 45000.0,
            "population": 26286.191,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 62000.0,
            "population": 52280.824,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16892.523,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 6094.0,
            "population": 267.739,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 507247.0,
            "population": 4567.527,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 176404.934,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 816.0,
            "population": 1.609,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 47000.0
        },
        "Oman": {
            "beehives": 64091.0,
            "population": 4027.26,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 387500.0,
            "population": 195305.013,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60000.0,
            "population": 6599.526,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1525000.0,
            "population": 38091.089,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 207241.0,
            "population": 10418.218,
            "land_size": 9222.56
        },
        "Puerto Rico": {
            "beehives": 3200.0,
            "population": 3453.672,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1952962.0,
            "population": 50607.907,
            "land_size": 10028.0
        },
        "Republic of Moldova": {
            "beehives": 115925.0,
            "population": 4073.407,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1354218.0,
            "population": 20035.93,
            "land_size": 23840.0
        },
        "Russian Federation": {
            "beehives": 3341454.0,
            "population": 144664.841,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 3750.0,
            "population": 11083.63,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11000.0,
            "population": 192.221,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 314000.0,
            "population": 14174.739,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 677071.0,
            "population": 8898.289,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 256462.0,
            "population": 5428.803,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 62716.0,
            "population": 2067.488,
            "land_size": 2067.5
        },
        "South Africa": {
            "beehives": 68000.0,
            "population": 54544.186,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2557000.0,
            "population": 46777.925,
            "land_size": 50594.0
        },
        "Sudan": {
            "beehives": 76100.0,
            "population": 37977.655
        },
        "Sweden": {
            "beehives": 105850.0,
            "population": 9692.131,
            "land_size": 44742.0
        },
        "Switzerland": {
            "beehives": 168415.0,
            "population": 8206.002,
            "land_size": 4129.0
        },
        "Syrian Arab Republic": {
            "beehives": 507829.0,
            "population": 18710.711,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 209476.0,
            "population": 8252.833,
            "land_size": 14137.6
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 73869.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1174.331,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 980.0,
            "population": 101.028,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2500.0,
            "population": 1362.345,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 589000.0,
            "population": 11063.201,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 7082732.0,
            "population": 77229.256,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 38.0,
            "population": 10.972,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 79000.0,
            "population": 36911.523,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2873.0,
            "population": 45111.532,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 65423.047,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2900000.0,
            "population": 49960.561,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2740000.0,
            "population": 318673.411,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 582989.0,
            "population": 3400.436,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 335000.0,
            "population": 30426.388,
            "land_size": 44892.4
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 11500.0,
            "population": 30042.968,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 250000.0,
            "population": 91713.848,
            "land_size": 33123.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 627.0,
            "population": 12.34,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 170000.0,
            "population": 25823.485,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 57000.0,
            "population": 15399.788,
            "land_size": 75261.0
        }
    },
    "2015": {
        "Albania": {
            "beehives": 271139.0,
            "population": 2890.513,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 412169.0,
            "population": 39728.025,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1152007.0,
            "population": 27884.381,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 2959005.0,
            "population": 43075.416,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 235214.0,
            "population": 2925.553,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 440432.0,
            "population": 23932.502,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 347100.0,
            "population": 8678.66,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 251233.0,
            "population": 9622.745,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 218.0,
            "population": 9439.423,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 32322.0,
            "population": 11287.94,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 2010.0,
            "population": 360.933,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 10869.73,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 393188.0,
            "population": 3429.361,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1019027.0,
            "population": 204471.769,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 588379.0,
            "population": 7199.741,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 186000.0,
            "population": 10160.03,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 313339.0,
            "population": 23298.368,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 697892.0,
            "population": 36026.676,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1592366.0,
            "population": 4493.17,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 123500.0,
            "population": 14110.975,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 351329.0,
            "population": 17969.353,
            "land_size": 75609.6
        },
        "China": {
            "beehives": 9131057.0,
            "population": 1438193.428,
            "land_size": 960000.74
        },
        "Colombia": {
            "beehives": 116565.0,
            "population": 47520.667,
            "land_size": 114174.9
        },
        "Cook Islands": {
            "beehives": 42.0,
            "population": 17.586,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 37910.0,
            "population": 4847.804,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 564700.0,
            "population": 4232.874,
            "land_size": 8807.3
        },
        "Cuba": {
            "beehives": 171800.0,
            "population": 11324.781,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 46529.0,
            "population": 1160.985,
            "land_size": 925.1
        },
        "Czechia": {
            "beehives": 576534.0,
            "population": 10601.397,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 94843.0,
            "population": 10281.68,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 46181.0,
            "population": 16212.02,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 879975.0,
            "population": 92442.547,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 215898.0,
            "population": 6325.124,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 46800.0,
            "population": 1315.325,
            "land_size": 4534.0
        },
        "Ethiopia": {
            "beehives": 5916100.0,
            "population": 100835.458,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11490.0,
            "population": 868.627,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 61000.0,
            "population": 5481.122,
            "land_size": 33844.6
        },
        "France": {
            "beehives": 800834.0,
            "population": 64453.2,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1865.0,
            "population": 273.124,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 190700.0,
            "population": 4024.183,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 771851.0,
            "population": 81787.411,
            "land_size": 35740.9
        },
        "Greece": {
            "beehives": 1519122.0,
            "population": 10659.75,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.377,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 845.0,
            "population": 400.255,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 316.0,
            "population": 161.853,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 118000.0,
            "population": 16252.429,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 62757.0,
            "population": 11432.088,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6700.0,
            "population": 1737.202,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4252.0,
            "population": 767.432,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27027.0,
            "population": 10695.542,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 9112.916,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 773000.0,
            "population": 9777.923,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 11979143.0,
            "population": 1310152.403,
            "land_size": 328725.9
        },
        "Iran (Islamic Republic of)": {
            "beehives": 7359956.0,
            "population": 78492.215,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 101000.0,
            "population": 7978.49,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 485738.0,
            "population": 60578.494,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 55295.0,
            "population": 2891.021,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 191000.0,
            "population": 127985.133,
            "land_size": 37797.1
        },
        "Jordan": {
            "beehives": 38714.0,
            "population": 9266.575,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1506494.0,
            "population": 47878.336,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 103570.0,
            "population": 5959.121,
            "land_size": 19994.9
        },
        "Latvia": {
            "beehives": 95.0,
            "population": 1997.674,
            "land_size": 6457.0
        },
        "Lebanon": {
            "beehives": 195190.0,
            "population": 6532.678,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 36964.0,
            "population": 6418.315,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 783.0,
            "population": 37.47,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 121658.0,
            "population": 2931.88,
            "land_size": 6528.6
        },
        "Luxembourg": {
            "beehives": 4810.0,
            "population": 566.741,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 134380.0,
            "population": 24234.088,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 37075.0,
            "population": 17438.778,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 378.478,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 2017931.0,
            "population": 121858.258,
            "land_size": 196438.0
        },
        "Mongolia": {
            "beehives": 8038.0,
            "population": 2998.439,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 48007.0,
            "population": 626.956,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 376952.0,
            "population": 34663.603,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 45396.0,
            "population": 27042.002,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 62583.0,
            "population": 52680.726,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16938.499,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 6917.0,
            "population": 271.065,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 575872.0,
            "population": 4614.532,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 181137.448,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 817.0,
            "population": 1.619,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 45341.0
        },
        "Oman": {
            "beehives": 88201.0,
            "population": 4267.348,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 389093.0,
            "population": 199426.964,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 60015.0,
            "population": 6688.746,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1548781.0,
            "population": 38034.079,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 193523.0,
            "population": 10368.351,
            "land_size": 9222.56
        },
        "Puerto Rico": {
            "beehives": 3188.0,
            "population": 3381.518,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1962989.0,
            "population": 50823.093,
            "land_size": 10029.5
        },
        "Republic of Moldova": {
            "beehives": 124330.0,
            "population": 4070.7,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1350998.0,
            "population": 19925.175,
            "land_size": 23840.0
        },
        "Russian Federation": {
            "beehives": 3474014.0,
            "population": 144985.057,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 4210.0,
            "population": 11369.071,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11017.0,
            "population": 193.513,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 314723.0,
            "population": 14578.459,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 791522.0,
            "population": 8876.777,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 273302.0,
            "population": 5435.611,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 64000.0,
            "population": 2071.199,
            "land_size": 2067.5
        },
        "South Africa": {
            "beehives": 68470.0,
            "population": 55386.367,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2730000.0,
            "population": 46671.926,
            "land_size": 50592.4
        },
        "Sudan": {
            "beehives": 76108.0,
            "population": 38902.95
        },
        "Sweden": {
            "beehives": 91951.0,
            "population": 9764.95,
            "land_size": 44743.0
        },
        "Switzerland": {
            "beehives": 168965.0,
            "population": 8296.775,
            "land_size": 4129.039
        },
        "Syrian Arab Republic": {
            "beehives": 475773.0,
            "population": 17997.408,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 213451.0,
            "population": 8454.028,
            "land_size": 14138.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 73960.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1196.302,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 960.0,
            "population": 100.781,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2464.0,
            "population": 1370.328,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 616357.0,
            "population": 11179.949,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 7525652.0,
            "population": 78529.409,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 39.0,
            "population": 11.099,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 79516.0,
            "population": 38225.453,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2700.0,
            "population": 44921.639,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 65860.146,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2941756.0,
            "population": 51482.633,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2660000.0,
            "population": 320878.31,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 589228.0,
            "population": 3412.009,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 384891.0,
            "population": 30929.557,
            "land_size": 44892.4
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 11904.0,
            "population": 30081.829,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 256637.0,
            "population": 92677.076,
            "land_size": 33123.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 634.0,
            "population": 12.266,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 170000.0,
            "population": 26497.889,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 57194.0,
            "population": 15879.361,
            "land_size": 75261.0
        }
    },
    "2016": {
        "Albania": {
            "beehives": 302962.0,
            "population": 2886.438,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 419662.0,
            "population": 40551.392,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1156696.0,
            "population": 28842.489,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 3008956.0,
            "population": 43508.46,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 245396.0,
            "population": 2936.143,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 359183.0,
            "population": 24262.712,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 354100.0,
            "population": 8747.301,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 260094.0,
            "population": 9736.043,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 215.0,
            "population": 9445.643,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 32860.0,
            "population": 11354.42,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 1986.0,
            "population": 368.4,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 11031.814,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 409887.0,
            "population": 3386.266,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1011442.0,
            "population": 206163.053,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 747434.0,
            "population": 7151.953,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 194413.0,
            "population": 10487.995,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 316874.0,
            "population": 23926.551,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 687246.0,
            "population": 36382.944,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1639783.0,
            "population": 4537.686,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 123564.0,
            "population": 14561.66,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 452667.0,
            "population": 18209.068,
            "land_size": 75670.0
        },
        "China": {
            "beehives": 9147772.0,
            "population": 1445523.929,
            "land_size": 960001.05
        },
        "Colombia": {
            "beehives": 113313.0,
            "population": 48175.052,
            "land_size": 114174.9
        },
        "Cook Islands": {
            "beehives": 44.0,
            "population": 17.524,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 37910.0,
            "population": 4899.345,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 495800.0,
            "population": 4208.602,
            "land_size": 8807.3
        },
        "Cuba": {
            "beehives": 184000.0,
            "population": 11335.104,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 43143.0,
            "population": 1170.187,
            "land_size": 925.1
        },
        "Czechia": {
            "beehives": 662253.0,
            "population": 10618.857,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 94344.0,
            "population": 10397.741,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 47826.0,
            "population": 16491.116,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 841307.0,
            "population": 94447.073,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 217150.0,
            "population": 6356.143,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 47800.0,
            "population": 1316.51,
            "land_size": 4534.0
        },
        "Ethiopia": {
            "beehives": 6189329.0,
            "population": 103603.462,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11374.0,
            "population": 872.399,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 64000.0,
            "population": 5497.713,
            "land_size": 33845.0
        },
        "France": {
            "beehives": 794209.0,
            "population": 64667.596,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1771.0,
            "population": 274.575,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 197100.0,
            "population": 4015.45,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 748444.0,
            "population": 82193.768,
            "land_size": 35758.0
        },
        "Greece": {
            "beehives": 1538394.0,
            "population": 10615.185,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.412,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 847.0,
            "population": 399.763,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 319.0,
            "population": 162.951,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 106000.0,
            "population": 16583.076,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 64679.0,
            "population": 11738.429,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6783.0,
            "population": 1782.438,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4296.0,
            "population": 771.368,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27156.0,
            "population": 10839.97,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 9270.795,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 772000.0,
            "population": 9752.975,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 12461256.0,
            "population": 1324517.249,
            "land_size": 328725.9
        },
        "Iran (Islamic Republic of)": {
            "beehives": 7031629.0,
            "population": 79563.989,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 110000.0,
            "population": 8108.985,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 448573.0,
            "population": 60663.06,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 61614.0,
            "population": 2906.236,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 191839.0,
            "population": 127763.265,
            "land_size": 37797.0
        },
        "Jordan": {
            "beehives": 40383.0,
            "population": 9554.286,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1445235.0,
            "population": 49051.534,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 108525.0,
            "population": 6074.33,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 93.0,
            "population": 1974.266,
            "land_size": 6457.0
        },
        "Lebanon": {
            "beehives": 153736.0,
            "population": 6714.281,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 36786.0,
            "population": 6492.162,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 1034.0,
            "population": 37.658,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 130331.0,
            "population": 2889.557,
            "land_size": 6528.6
        },
        "Luxembourg": {
            "beehives": 5660.0,
            "population": 579.264,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 134738.0,
            "population": 24894.37,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 35611.0,
            "population": 17965.443,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 376.791,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1858000.0,
            "population": 123333.376,
            "land_size": 196437.5
        },
        "Mongolia": {
            "beehives": 8118.0,
            "population": 3056.364,
            "land_size": 156412.0
        },
        "Montenegro": {
            "beehives": 67703.0,
            "population": 627.264,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 367120.0,
            "population": 35126.283,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 45775.0,
            "population": 27829.938,
            "land_size": 78638.0
        },
        "Myanmar": {
            "beehives": 68420.0,
            "population": 53045.201,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 16981.295,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 6670.0,
            "population": 274.191,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 684046.0,
            "population": 4659.265,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 185960.241,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 817.0,
            "population": 1.614,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 40966.0
        },
        "Oman": {
            "beehives": 100000.0,
            "population": 4479.219,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 403657.0,
            "population": 203631.353,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 59618.0,
            "population": 6777.872,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1566657.0,
            "population": 37989.22,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 193148.0,
            "population": 10325.538,
            "land_size": 9222.56
        },
        "Puerto Rico": {
            "beehives": 2998.0,
            "population": 3283.125,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 2155180.0,
            "population": 50983.457,
            "land_size": 10033.9
        },
        "Republic of Moldova": {
            "beehives": 135946.0,
            "population": 4066.009,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1392846.0,
            "population": 19796.285,
            "land_size": 23840.0
        },
        "Russian Federation": {
            "beehives": 3457994.0,
            "population": 145275.383,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 4292.0,
            "population": 11668.827,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11081.0,
            "population": 194.535,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 334236.0,
            "population": 14993.519,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 792478.0,
            "population": 8853.963,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 263009.0,
            "population": 5442.003,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 63967.0,
            "population": 2074.21,
            "land_size": 2067.5
        },
        "South Africa": {
            "beehives": 69914.0,
            "population": 56207.646,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2834515.0,
            "population": 46634.14,
            "land_size": 50593.5
        },
        "Sudan": {
            "beehives": 76104.0,
            "population": 39847.439
        },
        "Sweden": {
            "beehives": 90368.0,
            "population": 9836.007,
            "land_size": 44743.0
        },
        "Switzerland": {
            "beehives": 169916.0,
            "population": 8379.917,
            "land_size": 4129.039
        },
        "Syrian Arab Republic": {
            "beehives": 533198.0,
            "population": 17465.575,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 218990.0,
            "population": 8663.579,
            "land_size": 14138.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 81476.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1219.288,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 947.0,
            "population": 101.133,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2699.0,
            "population": 1377.56,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 656635.0,
            "population": 11303.945,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 7679482.0,
            "population": 79827.871,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 39.0,
            "population": 11.225,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 80278.0,
            "population": 39649.166,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2600.0,
            "population": 44713.702,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 66297.944,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2991117.0,
            "population": 53049.23,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2775000.0,
            "population": 323015.995,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 587512.0,
            "population": 3424.129,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 435606.0,
            "population": 31441.751,
            "land_size": 44892.4
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 10795.0,
            "population": 29851.255,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 276742.0,
            "population": 93640.422,
            "land_size": 33123.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 630.0,
            "population": 12.107,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 162000.0,
            "population": 27168.208,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 59696.0,
            "population": 16363.458,
            "land_size": 75261.0
        }
    },
    "2017": {
        "Albania": {
            "beehives": 289962.0,
            "population": 2884.169,
            "land_size": 2875.0
        },
        "Algeria": {
            "beehives": 414244.0,
            "population": 41389.189,
            "land_size": 238174.0
        },
        "Angola": {
            "beehives": 1154713.0,
            "population": 29816.766,
            "land_size": 124670.0
        },
        "Argentina": {
            "beehives": 3003036.0,
            "population": 43937.14,
            "land_size": 278040.0
        },
        "Armenia": {
            "beehives": 237260.0,
            "population": 2944.791,
            "land_size": 2974.0
        },
        "Australia": {
            "beehives": 362149.0,
            "population": 24584.62,
            "land_size": 774122.0
        },
        "Austria": {
            "beehives": 353300.0,
            "population": 8819.901,
            "land_size": 8387.9
        },
        "Azerbaijan": {
            "beehives": 271682.0,
            "population": 9845.32,
            "land_size": 8660.0
        },
        "Belarus": {
            "beehives": 207.0,
            "population": 9450.231,
            "land_size": 20760.0
        },
        "Belgium": {
            "beehives": 33300.0,
            "population": 11419.748,
            "land_size": 3053.0
        },
        "Belize": {
            "beehives": 1994.0,
            "population": 375.769,
            "land_size": 2297.0
        },
        "Bolivia (Plurinational State of)": {
            "beehives": null,
            "population": 11192.855,
            "land_size": 109858.0
        },
        "Bosnia and Herzegovina": {
            "beehives": 404698.0,
            "population": 3351.525,
            "land_size": 5121.0
        },
        "Brazil": {
            "beehives": 1012692.0,
            "population": 207833.823,
            "land_size": 851577.0
        },
        "Bulgaria": {
            "beehives": 754105.0,
            "population": 7102.444,
            "land_size": 11100.0
        },
        "Burundi": {
            "beehives": 205897.0,
            "population": 10827.019,
            "land_size": 2783.0
        },
        "Cameroon": {
            "beehives": 317290.0,
            "population": 24566.073,
            "land_size": 47544.0
        },
        "Canada": {
            "beehives": 692231.0,
            "population": 36732.095,
            "land_size": 987975.0
        },
        "Central African Republic": {
            "beehives": 1664185.0,
            "population": 4596.023,
            "land_size": 62298.0
        },
        "Chad": {
            "beehives": 124880.0,
            "population": 15016.753,
            "land_size": 128400.0
        },
        "Chile": {
            "beehives": 449954.0,
            "population": 18470.439,
            "land_size": 75670.0
        },
        "China": {
            "beehives": 9156882.0,
            "population": 1452625.244,
            "land_size": 960001.08
        },
        "Colombia": {
            "beehives": 113681.0,
            "population": 48909.839,
            "land_size": 114174.9
        },
        "Cook Islands": {
            "beehives": 43.0,
            "population": 17.507,
            "land_size": 24.0
        },
        "Costa Rica": {
            "beehives": 37910.0,
            "population": 4949.954,
            "land_size": 5110.0
        },
        "Croatia": {
            "beehives": 486271.0,
            "population": 4182.857,
            "land_size": 8807.3
        },
        "Cuba": {
            "beehives": 184400.0,
            "population": 11339.254,
            "land_size": 10988.0
        },
        "Cyprus": {
            "beehives": 49616.0,
            "population": 1179.678,
            "land_size": 925.1
        },
        "Czechia": {
            "beehives": 679953.0,
            "population": 10641.034,
            "land_size": 7887.0
        },
        "Dominican Republic": {
            "beehives": 94591.0,
            "population": 10513.104,
            "land_size": 4867.0
        },
        "Ecuador": {
            "beehives": 48012.0,
            "population": 16785.361,
            "land_size": 25637.0
        },
        "Egypt": {
            "beehives": 877637.0,
            "population": 96442.591,
            "land_size": 100145.0
        },
        "El Salvador": {
            "beehives": 216875.0,
            "population": 6388.126,
            "land_size": 2104.0
        },
        "Estonia": {
            "beehives": 49900.0,
            "population": 1319.39,
            "land_size": 4534.0
        },
        "Ethiopia": {
            "beehives": 6139990.0,
            "population": 106399.924,
            "land_size": 110430.0
        },
        "Fiji": {
            "beehives": 11041.0,
            "population": 877.459,
            "land_size": 1827.0
        },
        "Finland": {
            "beehives": 68000.0,
            "population": 5511.371,
            "land_size": 33845.0
        },
        "France": {
            "beehives": 786172.0,
            "population": 64842.509,
            "land_size": 54908.7
        },
        "French Polynesia": {
            "beehives": 1727.0,
            "population": 276.102,
            "land_size": 400.0
        },
        "Georgia": {
            "beehives": 205300.0,
            "population": 4008.716,
            "land_size": 6970.0
        },
        "Germany": {
            "beehives": 681682.0,
            "population": 82658.409,
            "land_size": 35758.0
        },
        "Greece": {
            "beehives": 1561498.0,
            "population": 10569.45,
            "land_size": 13196.0
        },
        "Greenland": {
            "beehives": 15.0,
            "population": 56.481,
            "land_size": 41045.0
        },
        "Guadeloupe": {
            "beehives": 850.0,
            "population": 399.672,
            "land_size": 170.0
        },
        "Guam": {
            "beehives": 322.0,
            "population": 164.281,
            "land_size": 54.0
        },
        "Guatemala": {
            "beehives": 100551.0,
            "population": 16914.97,
            "land_size": 10889.0
        },
        "Guinea": {
            "beehives": 64847.0,
            "population": 12067.519,
            "land_size": 24586.0
        },
        "Guinea-Bissau": {
            "beehives": 6811.0,
            "population": 1828.145,
            "land_size": 3613.0
        },
        "Guyana": {
            "beehives": 4316.0,
            "population": 775.222,
            "land_size": 21497.0
        },
        "Haiti": {
            "beehives": 27092.0,
            "population": 10982.366,
            "land_size": 2775.0
        },
        "Honduras": {
            "beehives": 10600.0,
            "population": 9429.013,
            "land_size": 11249.0
        },
        "Hungary": {
            "beehives": 816000.0,
            "population": 9729.823,
            "land_size": 9303.0
        },
        "India": {
            "beehives": 12763684.0,
            "population": 1338676.785,
            "land_size": 328725.9
        },
        "Iran (Islamic Republic of)": {
            "beehives": 7271825.0,
            "population": 80673.883,
            "land_size": 174515.0
        },
        "Israel": {
            "beehives": 110000.0,
            "population": 8243.848,
            "land_size": 2207.0
        },
        "Italy": {
            "beehives": 428300.0,
            "population": 60673.701,
            "land_size": 30134.0
        },
        "Jamaica": {
            "beehives": 61436.0,
            "population": 2920.848,
            "land_size": 1099.0
        },
        "Japan": {
            "beehives": 192478.0,
            "population": 127502.725,
            "land_size": 37797.0
        },
        "Jordan": {
            "beehives": 42252.0,
            "population": 9785.843,
            "land_size": 8932.0
        },
        "Kenya": {
            "beehives": 1623028.0,
            "population": 50221.142,
            "land_size": 58037.0
        },
        "Kyrgyzstan": {
            "beehives": 111690.0,
            "population": 6189.733,
            "land_size": 19995.0
        },
        "Latvia": {
            "beehives": 97.0,
            "population": 1951.097,
            "land_size": 6457.0
        },
        "Lebanon": {
            "beehives": 137010.0,
            "population": 6819.373,
            "land_size": 1045.0
        },
        "Libya": {
            "beehives": 36843.0,
            "population": 6580.724,
            "land_size": 175954.0
        },
        "Liechtenstein": {
            "beehives": 857.0,
            "population": 37.8,
            "land_size": 16.0
        },
        "Lithuania": {
            "beehives": 133508.0,
            "population": 2845.414,
            "land_size": 6528.6
        },
        "Luxembourg": {
            "beehives": 5165.0,
            "population": 591.91,
            "land_size": 259.0
        },
        "Madagascar": {
            "beehives": 134970.0,
            "population": 25570.512,
            "land_size": 58729.5
        },
        "Mali": {
            "beehives": 35861.0,
            "population": 18512.43,
            "land_size": 124019.0
        },
        "Martinique": {
            "beehives": 0.0,
            "population": 375.948,
            "land_size": 113.0
        },
        "Mexico": {
            "beehives": 1853807.0,
            "population": 124777.324,
            "land_size": 196437.5
        },
        "Mongolia": {
            "beehives": 9122.0,
            "population": 3113.786,
            "land_size": 156411.6
        },
        "Montenegro": {
            "beehives": 80620.0,
            "population": 627.563,
            "land_size": 1381.0
        },
        "Morocco": {
            "beehives": 368961.0,
            "population": 35581.255,
            "land_size": 44655.0
        },
        "Mozambique": {
            "beehives": 45919.0,
            "population": 28649.018,
            "land_size": 79938.0
        },
        "Myanmar": {
            "beehives": 67232.0,
            "population": 53382.523,
            "land_size": 67659.0
        },
        "Netherlands": {
            "beehives": null,
            "population": 17021.347,
            "land_size": 4154.0
        },
        "New Caledonia": {
            "beehives": 7479.0,
            "population": 277.15,
            "land_size": 1858.0
        },
        "New Zealand": {
            "beehives": 820000.0,
            "population": 4702.034,
            "land_size": 26771.0
        },
        "Nigeria": {
            "beehives": null,
            "population": 190873.244,
            "land_size": 92377.0
        },
        "Niue": {
            "beehives": 818.0,
            "population": 1.609,
            "land_size": 26.0
        },
        "Occupied Palestinian Territory": {
            "beehives": 37753.0
        },
        "Oman": {
            "beehives": 100000.0,
            "population": 4665.928,
            "land_size": 30950.0
        },
        "Pakistan": {
            "beehives": 400019.0,
            "population": 207906.209,
            "land_size": 79610.0
        },
        "Paraguay": {
            "beehives": 59152.0,
            "population": 6867.061,
            "land_size": 40675.2
        },
        "Poland": {
            "beehives": 1589276.0,
            "population": 37953.18,
            "land_size": 31268.0
        },
        "Portugal": {
            "beehives": 191136.0,
            "population": 10288.527,
            "land_size": 9222.56
        },
        "Puerto Rico": {
            "beehives": 3019.0,
            "population": 3163.667,
            "land_size": 887.0
        },
        "Republic of Korea": {
            "beehives": 1724389.0,
            "population": 51096.415,
            "land_size": 10036.0
        },
        "Republic of Moldova": {
            "beehives": 139098.0,
            "population": 4059.684,
            "land_size": 3385.0
        },
        "Romania": {
            "beehives": 1449318.0,
            "population": 19653.969,
            "land_size": 23840.0
        },
        "Russian Federation": {
            "beehives": 3349976.0,
            "population": 145530.082,
            "land_size": 1709825.0
        },
        "Rwanda": {
            "beehives": 4171.0,
            "population": 11980.961,
            "land_size": 2634.0
        },
        "Samoa": {
            "beehives": 11067.0,
            "population": 195.352,
            "land_size": 284.0
        },
        "Senegal": {
            "beehives": 334419.0,
            "population": 15419.355,
            "land_size": 19671.0
        },
        "Serbia": {
            "beehives": 849280.0,
            "population": 8829.628,
            "land_size": 8836.0
        },
        "Slovakia": {
            "beehives": 277859.0,
            "population": 5447.9,
            "land_size": 4903.0
        },
        "Slovenia": {
            "beehives": 62718.0,
            "population": 2076.394,
            "land_size": 2048.0
        },
        "South Africa": {
            "beehives": 70757.0,
            "population": 57009.756,
            "land_size": 121909.0
        },
        "Spain": {
            "beehives": 2904971.0,
            "population": 46647.428,
            "land_size": 50593.523
        },
        "Sudan": {
            "beehives": 76095.0,
            "population": 40813.397
        },
        "Sweden": {
            "beehives": 91029.0,
            "population": 9904.896,
            "land_size": 44743.0
        },
        "Switzerland": {
            "beehives": 168200.0,
            "population": 8455.804,
            "land_size": 4129.039
        },
        "Syrian Arab Republic": {
            "beehives": 520795.0,
            "population": 17095.678,
            "land_size": 18518.0
        },
        "Tajikistan": {
            "beehives": 222386.0,
            "population": 8880.268,
            "land_size": 14138.0
        },
        "The former Yugoslav Republic of Macedonia": {
            "beehives": 75406.0
        },
        "Timor-Leste": {
            "beehives": 20000.0,
            "population": 1243.258,
            "land_size": 1487.0
        },
        "Tonga": {
            "beehives": 952.0,
            "population": 101.998,
            "land_size": 75.0
        },
        "Trinidad and Tobago": {
            "beehives": 2773.0,
            "population": 1384.059,
            "land_size": 513.0
        },
        "Tunisia": {
            "beehives": 665791.0,
            "population": 11433.443,
            "land_size": 16361.0
        },
        "Turkey": {
            "beehives": 7796666.0,
            "population": 81116.45,
            "land_size": 78535.0
        },
        "Tuvalu": {
            "beehives": 39.0,
            "population": 11.37,
            "land_size": 3.0
        },
        "Uganda": {
            "beehives": 80773.0,
            "population": 41166.588,
            "land_size": 24155.0
        },
        "Ukraine": {
            "beehives": 2487.0,
            "population": 44487.709,
            "land_size": 60355.0
        },
        "United Kingdom": {
            "beehives": null,
            "population": 66727.461,
            "land_size": 24361.0
        },
        "United Republic of Tanzania": {
            "beehives": 2998785.0,
            "population": 54660.339,
            "land_size": 94730.0
        },
        "United States of America": {
            "beehives": 2669000.0,
            "population": 325084.756,
            "land_size": 983151.0
        },
        "Uruguay": {
            "beehives": 480154.0,
            "population": 3436.641,
            "land_size": 17622.0
        },
        "Uzbekistan": {
            "beehives": 488200.0,
            "population": 31959.785,
            "land_size": 44892.4
        },
        "Venezuela (Bolivarian Republic of)": {
            "beehives": 11060.0,
            "population": 29402.484,
            "land_size": 91205.0
        },
        "Viet Nam": {
            "beehives": 278448.0,
            "population": 94600.648,
            "land_size": 33123.0
        },
        "Wallis and Futuna Islands": {
            "beehives": 630.0,
            "population": 11.9,
            "land_size": 14.0
        },
        "Yemen": {
            "beehives": 158000.0,
            "population": 27834.819,
            "land_size": 52797.0
        },
        "Zambia": {
            "beehives": 60357.0,
            "population": 16853.599,
            "land_size": 75261.0
        }
    }
}


var top10_beehives={
    "beehives": [
        {
            "Area": "India",
            "Value": 12763684.0
        },
        {
            "Area": "China",
            "Value": 9156882.0
        },
        {
            "Area": "Turkey",
            "Value": 7796666.0
        },
        {
            "Area": "Iran ",
            "Value": 7271825.0
        },
        {
            "Area": "Ethiopia",
            "Value": 6139990.0
        },
        {
            "Area": "Russian Federation",
            "Value": 3349976.0
        },
        {
            "Area": "Argentina",
            "Value": 3003036.0
        },
        {
            "Area": "Tanzania",
            "Value": 2998785.0
        },
        {
            "Area": "Spain",
            "Value": 2904971.0
        },
        {
            "Area": "United States of America",
            "Value": 2669000.0
        }
    ],
    "density": [
        {
            "Area": "Republic of Korea",
            "Value": 171.8203467516939
        },
        {
            "Area": "Lebanon",
            "Value": 131.11004784688996
        },
        {
            "Area": "Greece",
            "Value": 118.33116095786602
        },
        {
            "Area": "El Salvador",
            "Value": 103.07747148288973
        },
        {
            "Area": "Albania",
            "Value": 100.85634782608696
        },
        {
            "Area": "Turkey",
            "Value": 99.2763226586872
        },
        {
            "Area": "Serbia",
            "Value": 96.11588954277954
        },
        {
            "Area": "Hungary",
            "Value": 87.71364076104483
        },
        {
            "Area": "Czechia",
            "Value": 86.21186763027767
        },
        {
            "Area": "Armenia",
            "Value": 79.77807666442501
        }
    ]
}