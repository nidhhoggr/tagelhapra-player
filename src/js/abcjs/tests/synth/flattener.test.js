describe("Audio flattener", function() {
	var abcMultiple = 'K:C\n' +
'Q:1/4=60\n' +
'L:1/4\n' +
'V:1\n' +
'G/| (3c/d/c/ "C"z d .e| {f}g !tenuto!a [gb] !style=rhythm!B|"D"A2"E"^G2|\n' +
'V:2\n' +
'x/|C4|D4|^F2B2|\n';

	var expectedMultiple = {
		"tempo": 60,
		"instrument": 0,
		"tracks": [
			[
				{
					"cmd": "program",
					"channel": 0,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 85,
					"start": 0,
					"duration": 0.125,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 105,
					"start": 0.125,
					"duration": 0.083333,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 74,
					"volume": 85,
					"start": 0.208333,
					"duration": 0.083333,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 85,
					"start": 0.291666,
					"duration": 0.083334,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 74,
					"volume": 95,
					"start": 0.625,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 76,
					"volume": 95,
					"start": 0.875,
					"duration": 0.25,
					"instrument": 0,
					"endType": "staccato",
					"gap": 0.1
				},
				{
					"cmd": "note",
					"pitch": 77,
					"volume": 70,
					"start":1.125,
					"duration":0.125,
					"instrument": 0,
					"gap":0
				},
				{
					"cmd": "note",
					"pitch": 79,
					"volume": 105,
					"start": 1.25,
					"duration": 0.125,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 81,
					"volume": 95,
					"start": 1.375,
					"duration": 0.25,
					"instrument": 0,
					"endType": "tenuto",
					"gap": -0.001
				},
				{
					"cmd": "note",
					"pitch": 79,
					"volume": 95,
					"start": 1.625,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 83,
					"volume": 95,
					"start": 1.625,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 48,
					"volume": 95,
					"start": 1.875,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 52,
					"volume": 95,
					"start": 1.875,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 55,
					"volume": 95,
					"start": 1.875,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 105,
					"start": 2.125,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 68,
					"volume": 95,
					"start": 2.625,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				}
			],
			[
				{
					"cmd": "program",
					"channel": 1,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 60,
					"volume": 105,
					"start": 0.125,
					"duration": 1,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 62,
					"volume": 105,
					"start": 1.125,
					"duration": 1,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 66,
					"volume": 105,
					"start": 2.125,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 95,
					"start": 2.625,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				}
			],
			[
				{
					"cmd": "program",
					"channel": 2,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 48,
					"volume": 48,
					"start": 0.375,
					"duration": 0.125,
					"instrument": 0
				}, // m1 b2 chick
				{
					"cmd": "note",
					"pitch": 52,
					"volume": 48,
					"start": 0.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 55,
					"volume": 48,
					"start": 0.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 31,
					"volume": 64,
					"start": 0.625,
					"duration": 0.125,
					"instrument": 0
				}, // m1 b3 boom
				{
					"cmd": "note",
					"pitch": 48,
					"volume": 48,
					"start": 0.875,
					"duration": 0.125,
					"instrument": 0
				}, // m1 b4 chick
				{
					"cmd": "note",
					"pitch": 52,
					"volume": 48,
					"start": 0.875,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 55,
					"volume": 48,
					"start": 0.875,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 38,
					"volume": 64,
					"start": 2.125,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b1 boom
				{
					"cmd": "note",
					"pitch": 50,
					"volume": 48,
					"start": 2.375,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b2 chick
				{
					"cmd": "note",
					"pitch": 54,
					"volume": 48,
					"start": 2.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 57,
					"volume": 48,
					"start": 2.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 40,
					"volume": 64,
					"start": 2.625,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b3 boom
				{
					"cmd": "note",
					"pitch": 52,
					"volume": 48,
					"start": 2.875,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b4 chick
				{
					"cmd": "note",
					"pitch": 56,
					"volume": 48,
					"start": 2.875,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 59,
					"volume": 48,
					"start": 2.875,
					"duration": 0.125,
					"instrument": 0
				},
			]
		],
		"totalDuration": 3.125
	}

	//////////////////////////////////////////////////////////

	var abcDynamics = 'X:1\n' +
'M:4/4\n' +
'L:1/4\n' +
'Q:1/4=120\n' +
'K:C\n' +
'!crescendo(! EFGA| GAB !crescendo)!c | !diminuendo(! EFGA| GAB !diminuendo)!c |\n' +
'!pppp! A B !ppp!A B |!pp! A B !p!A B | !mp! AB !sfz! AB|\n' +
'!mf! AB !f! AB | !ff! AB !fff! AB | !ffff! ABAB|]\n';

	var expectedDynamics = {
		"tempo": 120,
		"instrument": 0,
		"tracks": [
			[
				{
					"cmd": "program",
					"channel": 0,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 105,
					"start": 0,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 65,
					"volume": 98,
					"start": 0.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 101,
					"start": 0.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 104,
					"start": 0.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 117,
					"start": 1,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 110,
					"start": 1.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 113,
					"start": 1.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 116,
					"start": 1.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 126,
					"start": 2,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 65,
					"volume": 108,
					"start": 2.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 100,
					"start": 2.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 92,
					"start": 2.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 94,
					"start": 3,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 76,
					"start": 3.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 68,
					"start": 3.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 60,
					"start": 3.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 15,
					"start": 4,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 10,
					"start": 4.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 20,
					"start": 4.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 20,
					"start": 4.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 45,
					"start": 5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 35,
					"start": 5.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 50,
					"start": 5.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 50,
					"start": 5.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 75,
					"start": 6,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 65,
					"start": 6.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 65,
					"start": 6.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 65,
					"start": 6.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 90,
					"start": 7,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 80,
					"start": 7.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 95,
					"start": 7.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 95,
					"start": 7.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 120,
					"start": 8,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 110,
					"start": 8.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 125,
					"start": 8.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 125,
					"start": 8.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 127,
					"start": 9,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 125,
					"start": 9.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 125,
					"start": 9.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 125,
					"start": 9.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				}
			]
		],
		"totalDuration": 10
	}

	//////////////////////////////////////////////////////////

	var abcDynamics2 = 'X: 1\n' +
		'M: 4/4\n' +
		'L: 1/8\n' +
		'K: C\n' +
		'!p!C!<(!DEF GABc |d2 B2 G2 F2!<)! | !f!E!>(!FGA Bcde!>)! | !p!f2 d2 B2 A2 |\n' +
		'G2 c2 e2 g2 | a2 f2 d2 B2 |cdBc ABGA | FGEF DEFG |\n' +
		'E2 C2 D2 B,2 | C8 |\n';

	var expectedDynamics2 = {
		"tempo":180,
		"instrument":0,
		"totalDuration":10,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":60,"volume":60,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":35,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":54,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":43,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":62,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":51,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":70,"start":0.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":59,"start":0.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":88,"start":1,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":82,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":86,"start":1.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":90,"start":1.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":105,"start":2,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":80,"start":2.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":87,"start":2.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":64,"start":2.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":71,"start":2.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":48,"start":2.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":55,"start":2.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":32,"start":2.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":60,"start":3,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":50,"start":3.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":50,"start":3.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":50,"start":3.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":60,"start":4,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":50,"start":4.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":50,"start":4.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":79,"volume":50,"start":4.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":60,"start":5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":50,"start":5.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":50,"start":5.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":50,"start":5.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":60,"start":6,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":35,"start":6.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":50,"start":6.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":35,"start":6.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":50,"start":6.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":35,"start":6.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":50,"start":6.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":35,"start":6.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":60,"start":7,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":35,"start":7.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":50,"start":7.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":35,"start":7.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":50,"start":7.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":35,"start":7.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":50,"start":7.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":35,"start":7.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":60,"start":8,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":50,"start":8.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":50,"start":8.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":59,"volume":50,"start":8.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":60,"start":9,"duration":1,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcDynamics3 = 'X: 1\n' +
		'M: 4/4\n' +
		'L: 1/4\n' +
		'K: C\n' +
		'!pppp!CDEF | !<(!GABc| !<)!y!ffff!BcBA | !>(!GFED | !>)!y!pppp!C4 |]\n';

	var expectedDynamics3 = {
		"tempo":180,
		"instrument":0,
		"totalDuration":5,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":60,"volume":15,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":10,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":10,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":10,"start":0.75,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":67,"volume":15,"start":1,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":38,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":66,"start":1.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":94,"start":1.75,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":127,"start":2,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":125,"start":2.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":125,"start":2.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":125,"start":2.75,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":67,"volume":127,"start":3,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":97,"start":3.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":69,"start":3.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":41,"start":3.75,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":60,"volume":15,"start":4,"duration":1,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcSixHuit = 'X:1\n' +
'M:6/8\n' +
'L:1/8\n' +
'Q:3/8=60\n' +
'K:G\n' +
'"G"GAB cde|"D7"fga DEF|\n';

	var expectedSixHuit = {
		"tempo": 60,
		"instrument": 0,
		"tracks": [
			[
				{
					"cmd": "program",
					"channel": 0,
					"instrument": 0
				},
				{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":105,"start":0.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":79,"volume":85,"start":0.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":85,"start":1,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":66,"volume":85,"start":1.375,"duration":0.125,"instrument":0,"gap":0},
			],
			[
				{
					"cmd": "program",
					"channel": 1,
					"instrument": 0
				},
				{"cmd":"note","pitch":43,"volume":64,"start":0,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.25,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.25,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.625,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.625,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.625,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0.75,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":1,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":1,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":33,"volume":64,"start":1.125,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},
			],
		],
		"totalDuration": 1.5
	}

	//////////////////////////////////////////////////////////

	var abcJigChords = 'X:1\n' +
	'L:1/8\n' +
	'Q:3/8=61\n' +
	'M:6/8\n' +
	'K:F\n' +
	'"C"cde def|c2e d2f|"C"c2"D"d "G"d2"E"e|';

	var expectedJigChords = {
		"tempo":61,
		"instrument":0,
		"totalDuration":2.25,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":72,"volume":105,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":105,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":1,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":1.125,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":85,"start":1.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":105,"start":1.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":1.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":1.875,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":2.125,"duration":0.125,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":36,"volume":64,"start":0,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":0.25,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.25,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.0625,"instrument":0},

				{"cmd":"note","pitch":31,"volume":64,"start":0.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":0.625,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.625,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.625,"duration":0.0625,"instrument":0},

				{"cmd":"note","pitch":36,"volume":64,"start":0.75,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":1,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":1,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1,"duration":0.0625,"instrument":0},

				{"cmd":"note","pitch":31,"volume":64,"start":1.125,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.375,"duration":0.0625,"instrument":0},

				{"cmd":"note","pitch":36,"volume":64,"start":1.5,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1.75,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":1.75,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1.75,"duration":0.0625,"instrument":0},

				{"cmd":"note","pitch":31,"volume":64,"start":1.875,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.325,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":2.325,"duration":0.0625,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":2.325,"duration":0.0625,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcRepeat = 'X:1\n' +
'M:C\n' +
'L:1/8\n' +
'Q:1/2=50\n' +
'K:G\n' +
'cde|:"D7"f2 d2 e2 f2|1"G"g4 fedc:|"C"e4z4|]\n';

	var expectedRepeat = {
		"tempo":100,
		"instrument":0,
		"totalDuration":4.375,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":72,"volume":85,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.25,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":78,"volume":105,"start":0.375,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.625,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":0.875,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":1.125,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":79,"volume":105,"start":1.375,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":1.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":2,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":2.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":2.25,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":78,"volume":105,"start":2.375,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":2.625,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":2.875,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":3.125,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":105,"start":3.375,"duration":0.5,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":33,"volume":64,"start":0.875,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":1.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":1.125,"duration":0.125,"instrument":0},

				{"cmd":"note","pitch":43,"volume":64,"start":1.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":1.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":1.875,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":2.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":2.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":2.125,"duration":0.125,"instrument":0},

				{"cmd":"note","pitch":38,"volume":64,"start":2.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":2.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":2.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":2.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":2.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":33,"volume":64,"start":2.875,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":3.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":3.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":3.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":3.125,"duration":0.125,"instrument":0},

				{"cmd":"note","pitch":36,"volume":64,"start":3.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":3.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":3.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":3.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":31,"volume":64,"start":3.875,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":4.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":4.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":4.125,"duration":0.125,"instrument":0},
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcDrum = 'X:1\n' +
'T: metronome\n' +
'L:1/4\n' +
'Q:1/4=60\n' +
'%%MIDI drum dddd 76 77 77 77 50 50 50 50\n' +
'N:The drum beat should start on the first full measure.\n' +
'N:The drum beat should drop out in the second line.\n' +
'N:The drum beat pattern should change for the third line.\n' +
'K:A\n' +
'V:1\n' +
'%%MIDI drumon\n' +
'e|a/g/ f/e/ c3/2 B/|Azzz|z4|z/c/ z/d/ z/e/ z/f/|\n' +
'%%MIDI drumoff\n' +
'|a/g/ f/e/ c3/2 B/|Azzz|[I:MIDI drumon]z4|z/c/ z/d/ z/e/ z/f/|\n' +
'%%MIDI drum d2z/d/d 35 38 38 100 50 50\n' +
'|a/g/ f/e/ c3/2 B/|Azzz|z4|z/c/ z/d/ z/e/ z/f/|\n';

	var expectedDrum = {
		"tempo":60,
		"instrument":0,
		"totalDuration":12.25,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":80,"volume":85,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":0.75,"duration":0.375,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":85,"start":3.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":3.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":3.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":85,"start":4.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":4.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":80,"volume":85,"start":4.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":4.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":4.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":4.75,"duration":0.375,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":5.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":5.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":85,"start":7.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":7.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":7.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":85,"start":8.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":8.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":80,"volume":85,"start":8.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":8.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":8.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":8.75,"duration":0.375,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":9.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":9.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":85,"start":11.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":11.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":11.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":85,"start":12.125,"duration":0.125,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":2,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":0,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":0.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":1,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":1.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":1.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":1.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":2,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":2.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":2.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":2.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":3,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":3.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":3.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":3.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":4,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":6.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":6.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":6.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":7,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":7.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":7.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":7.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":8,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":35,"volume":100,"start":8.25,"duration":0.5,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":8.875,"duration":0.125,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":9,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":35,"volume":100,"start":9.25,"duration":0.5,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":9.875,"duration":0.125,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":10,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":35,"volume":100,"start":10.25,"duration":0.5,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":10.875,"duration":0.125,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":11,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":35,"volume":100,"start":11.25,"duration":0.5,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":11.875,"duration":0.125,"instrument":128},
				{"cmd":"note","pitch":38,"volume":50,"start":12,"duration":0.25,"instrument":128}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcTranspose = 'X: 1\n' +
'M: 4/4\n' +
'L: 1/4\n' +
'K: Em\n' +
'V: 1 transpose=-2\n' +
'"Em"EGAB|\n' +
'V: 2\n' +
'"Em"EGAB|\n' +
'V: 3 transpose=4\n' +
'"Em"EGAB|\n';

	var expectedTranspose = {
		"tempo":180,"instrument":0,"totalDuration":1,"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":62,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":64,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":2,"instrument":0},
				{"cmd":"note","pitch":68,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":3,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":33,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcTempoChange = 'X:1\n' +
'L:1/4\n' +
'M:C|\n' +
'Q:1/2=60\n' +
'K:D\n' +
'"D"DEFG| [Q:1/2=90] DEFG |\n';

	var expectedTempoChange = {
		"tempo":60,
		"instrument":0,
		"totalDuration":1.666668,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":62,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":66,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":105,"start":1,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.166667,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":66,"volume":85,"start":1.333334,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":1.500001,"duration":0.166667,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0,"duration":0.25,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":0.5,"duration":0.25,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":0.5,"duration":0.25,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.5,"duration":0.25,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":1,"duration":0.166667,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1.333333,"duration":0.166667,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":1.333333,"duration":0.166667,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1.333333,"duration":0.166667,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcTempoChange2 = 'X:1\n' +
'L:1/4\n' +
'M:4/4\n' +
'K:F\n' +
'[Q:1/4=129.0476605]CDEF |[Q:1/4=127]GABc | [Q:1/4=131] CDEF |[Q:1/4=130] GABc |[Q:1/4=127]CDEF |\n' ;

	var expectedTempoChange2 = {
		"tempo":180,
		"instrument":0,
		"totalDuration":6.988656,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":60,"volume":105,"start":0,"duration":0.348837,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":0.348837,"duration":0.348837,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.697674,"duration":0.348837,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":1.046511,"duration":0.348837,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":1.395348,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":1.749679,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":85,"start":2.10401,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":2.458341,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":2.812672,"duration":0.343511,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":3.156183,"duration":0.343511,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":3.499694,"duration":0.343511,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":3.843205,"duration":0.343511,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":4.186716,"duration":0.346154,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":4.53287,"duration":0.346154,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":85,"start":4.879024,"duration":0.346154,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":5.225178,"duration":0.346154,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":5.571332,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":5.925663,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":6.279994,"duration":0.354331,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":6.634325,"duration":0.354331,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcDecoration = 'X:1\n' +
'M:4/4\n' +
'L:1/4\n' +
'Q:1/4=90\n' +
'K:C\n' +
'%%MIDI program 3\n' +
'!trill! e !lowermordent! d !uppermordent! c !mordent! B | !accent!A .G !turn! g !roll! a | !slide! d  !/! G  !//! G   !///! G |\n' +
'[Q:1/4=180] !trill! e !lowermordent! d !uppermordent! c !mordent! B | !accent!A .G !turn! g !roll! a | !slide! d  !/! G  !//! G   !///! G |\n' +
'[Q:1/4=60] !trill! e !lowermordent! d !uppermordent! c !mordent! B | !accent!A .G !turn! g !roll! a | !slide! d  !/! G  !//! G   !///! G |\n';

	var expectedDecoration = {
		"tempo":90,
		"instrument":3,
		"totalDuration":9,
		"tracks":[
			[
				// TODO-PER: also handle the slide and the drum rolls.
				{"cmd":"program","channel":0,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":0,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":0.03125,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":0.0625,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":0.09375,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":0.125,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":0.15625,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":0.1875,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":0.21875,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":74,"volume":95,"start":0.25,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":73,"volume":95,"start":0.28125,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":74,"volume":95,"start":0.3125,"duration":0.1875,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":0.5,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":73,"volume":95,"start":0.53125,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":0.5625,"duration":0.1875,"instrument":3},
				{"cmd":"note","pitch":71,"volume":95,"start":0.75,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":0.78125,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":71,"volume":95,"start":0.8125,"duration":0.1875,"instrument":3},
				{"cmd":"note","pitch":69,"volume":127,"start":1,"duration":0.25,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":1.25,"duration":0.25,"instrument":3,"endType":"staccato","gap":0.15000000000000002},
				{"cmd":"note","pitch":79,"volume":95,"start":1.5,"duration":0.05,"instrument":3},
				{"cmd":"note","pitch":80,"volume":95,"start":1.55,"duration":0.05,"instrument":3},
				{"cmd":"note","pitch":79,"volume":95,"start":1.6,"duration":0.05,"instrument":3},
				{"cmd":"note","pitch":80,"volume":95,"start":1.65,"duration":0.05,"instrument":3},
				{"cmd":"note","pitch":79,"volume":95,"start":1.7,"duration":0.05,"instrument":3},
				{"cmd":"note","pitch":81,"volume":95,"start":1.75,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":81,"volume":95,"start":1.8125,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":81,"volume":95,"start":1.875,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":81,"volume":95,"start":1.9375,"duration":0.03125,"instrument":3},
				{"cmd":"note","pitch":74,"volume":105,"start":2,"duration":0.25,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":2.25,"duration":0.25,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":2.5,"duration":0.25,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":2.75,"duration":0.25,"instrument":3,"gap":0},
				{"cmd":"note","pitch":77,"volume":105,"start":3,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":3.015625,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":3.03125,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":3.046875,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":3.0625,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":3.078125,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":3.09375,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":3.109375,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":74,"volume":85,"start":3.125,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":73,"volume":85,"start":3.140625,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":74,"volume":85,"start":3.15625,"duration":0.09375,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":3.25,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":73,"volume":95,"start":3.265625,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":3.28125,"duration":0.09375,"instrument":3},
				{"cmd":"note","pitch":71,"volume":85,"start":3.375,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":72,"volume":85,"start":3.390625,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":71,"volume":85,"start":3.40625,"duration":0.09375,"instrument":3},
				{"cmd":"note","pitch":69,"volume":127,"start":3.5,"duration":0.125,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":3.625,"duration":0.125,"instrument":3,"endType":"staccato","gap":0.07500000000000001},
				{"cmd":"note","pitch":79,"volume":95,"start":3.75,"duration":0.025,"instrument":3},
				{"cmd":"note","pitch":80,"volume":95,"start":3.775,"duration":0.025,"instrument":3},
				{"cmd":"note","pitch":79,"volume":95,"start":3.8,"duration":0.025,"instrument":3},
				{"cmd":"note","pitch":80,"volume":95,"start":3.825,"duration":0.025,"instrument":3},
				{"cmd":"note","pitch":79,"volume":95,"start":3.85,"duration":0.025,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":3.875,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":3.90625,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":3.9375,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":3.96875,"duration":0.015625,"instrument":3},
				{"cmd":"note","pitch":74,"volume":105,"start":4,"duration":0.125,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":4.125,"duration":0.125,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":4.25,"duration":0.125,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":4.375,"duration":0.125,"instrument":3,"gap":0},
				{"cmd":"note","pitch":77,"volume":105,"start":4.5,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":4.546875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":4.59375,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":4.640625,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":4.6875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":4.734375,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":77,"volume":105,"start":4.78125,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":76,"volume":105,"start":4.828125,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":74,"volume":85,"start":4.875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":73,"volume":85,"start":4.921875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":74,"volume":85,"start":4.96875,"duration":0.28125,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":5.25,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":73,"volume":95,"start":5.296875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":72,"volume":95,"start":5.34375,"duration":0.28125,"instrument":3},
				{"cmd":"note","pitch":71,"volume":85,"start":5.625,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":72,"volume":85,"start":5.671875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":71,"volume":85,"start":5.71875,"duration":0.28125,"instrument":3},
				{"cmd":"note","pitch":69,"volume":127,"start":6,"duration":0.375,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":6.375,"duration":0.375,"instrument":3,"endType":"staccato","gap":0.22500000000000003},
				{"cmd":"note","pitch":79,"volume":95,"start":6.75,"duration":0.075,"instrument":3},
				{"cmd":"note","pitch":80,"volume":95,"start":6.825,"duration":0.075,"instrument":3},
				{"cmd":"note","pitch":79,"volume":95,"start":6.9,"duration":0.075,"instrument":3},
				{"cmd":"note","pitch":80,"volume":95,"start":6.975,"duration":0.075,"instrument":3},
				{"cmd":"note","pitch":79,"volume":95,"start":7.05,"duration":0.075,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":7.125,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":7.21875,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":7.3125,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":81,"volume":85,"start":7.40625,"duration":0.046875,"instrument":3},
				{"cmd":"note","pitch":74,"volume":105,"start":7.5,"duration":0.375,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":7.875,"duration":0.375,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":8.25,"duration":0.375,"instrument":3,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":8.625,"duration":0.375,"instrument":3,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcMeterChange = 'X:1\n' +
'T: chords meter change\n' +
'L:1/4\n' +
'Q:1/4=40\n' +
'M:3/4\n' +
'K:F\n' +
'"F"F2A|[M:4/4]"Bb"Bd2f|\n';

	var expectedMeterChange = {
		"tempo":40,
		"instrument":0,
		"totalDuration":1.75,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":65,"volume":105,"start":0,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":105,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":1,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":95,"start":1.5,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":41,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":34,"volume":64,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":46,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":29,"volume":64,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":46,"volume":48,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":1.5,"duration":0.125,"instrument":0},
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcBreak = 'X:1\n' +
'L:1/4\n' +
'Q:1/4=40\n' +
'K:A\n' +
'"E7"Bcde|"A"f"^break"efe|"E7"Bc"^ignore"de|\n';

	var expectedBreak = {
		"tempo": 40,
		"instrument": 0,
		"totalDuration": 3,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":71,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":105,"start":1,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":1.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":1.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":105,"start":2,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":2.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":2.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":2.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":40,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":35,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":45,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":49,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":40,"volume":64,"start":2,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":35,"volume":64,"start":2.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":2.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcBreak2 = 'X:1\n' +
'L:1/8\n' +
'Q:135\n' +
'K:Ab\n' +
'"Eb7"zG2GA2A2|=A2AB-B4|"Ab"z"^break"c2cd2d2|=d2de2c2=c|\n';

	var expectedBreak2 = {
		"tempo":135,
		"instrument":0,
		"totalDuration":4,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":67,"volume":85,"start":0.125,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":68,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":68,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":1,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":1.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":85,"start":1.375,"duration":0.625,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":2.125,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":2.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":2.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":2.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":105,"start":3,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":3.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":85,"start":3.375,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":3.625,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":3.875,"duration":0.125,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":39,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":51,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":61,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":34,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":51,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":61,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":39,"volume":64,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":51,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":61,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":34,"volume":64,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":51,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":61,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":44,"volume":48,"start":2,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":2,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":51,"volume":48,"start":2,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcEndChord = 'X:1\n' +
'L:1/4\n' +
'Q:135\n' +
'K:C\n' +
'"C"c4-|c|]\n';

	var expectedEndChord = {
		"tempo":135,
		"instrument":0,
		"totalDuration":1.25,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":72,"volume":105,"start":0,"duration":1.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":36,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":31,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1,"duration":0.125,"instrument":0},
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcMidMeasureChordChange = 'X:1\n' +
'K: Gmin\n' +
'|: "Gm" GFDF GFDF | GF D2 "F" C4 |\n';

	var expectedMidMeasureChordChange = {
		"tempo":180,
		"instrument":0,
		"totalDuration":2,
		"tracks":
		[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":0.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":1,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":95,"start":1.5,"duration":0.5,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":43,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":43,"volume":64,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":41,"volume":64,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":1.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcGrace = 'X:1\n' +
'T: midi-grace-notes\n' +
'L:1/4\n' +
'Q:1/4=40\n' +
'K:A\n' +
'{e}a|:{e}gz{e}ag|{efg}ag{ABcdefg}ag:|\n' +
'{B}e{B2c/d/}fef|[K:Bb]{Bcde}f2{Bcde}f2|]\n';

	var expectedGrace = {
		"tempo":40,
		"instrument":0,
		"totalDuration":6.25,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":57,"start":0,"duration":0.125,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":70,"start":0.25,"duration":0.125,"gap":0,"instrument":0},
				{"cmd":"note","pitch":80,"volume":105,"start":0.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":63,"start":0.75,"duration":0.125,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":95,"start":0.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":1,"duration":0.25,"instrument":0,"gap":0,"instrument":0},

				{"cmd":"note","pitch":76,"volume":70,"start":1.25,"duration":0.041666666666666664,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":70,"start":1.2916666666666667,"duration":0.041666666666666664,"gap":0,"instrument":0},
				{"cmd":"note","pitch":80,"volume":70,"start":1.3333333333333335,"duration":0.041666666666666664,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":105,"start":1.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":1.5,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":69,"volume":63,"start":1.75,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":71,"volume":63,"start":1.7678571428571428,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":63,"start":1.7857142857142856,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":74,"volume":63,"start":1.8035714285714284,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":63,"start":1.8214285714285712,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":63,"start":1.839285714285714,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":80,"volume":63,"start":1.8571428571428568,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":95,"start":1.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":2,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":70,"start":2.25,"duration":0.125,"gap":0,"instrument":0},
				{"cmd":"note","pitch":80,"volume":105,"start":2.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":63,"start":2.75,"duration":0.125,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":95,"start":2.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":3,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":70,"start":3.25,"duration":0.041666666666666664,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":70,"start":3.2916666666666667,"duration":0.041666666666666664,"gap":0,"instrument":0},
				{"cmd":"note","pitch":80,"volume":70,"start":3.333333333333333,"duration":0.041666666666666664,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":105,"start":3.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":3.5,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":69,"volume":63,"start":3.75,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":71,"volume":63,"start":3.7678571428571428,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":63,"start":3.7857142857142856,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":74,"volume":63,"start":3.8035714285714284,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":63,"start":3.8214285714285712,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":63,"start":3.839285714285714,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":80,"volume":63,"start":3.8571428571428568,"duration":0.017857142857142856,"gap":0,"instrument":0},
				{"cmd":"note","pitch":81,"volume":95,"start":3.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":4,"duration":0.25,"instrument":0,"gap":0},
//
				{"cmd":"note","pitch":71,"volume":70,"start":4.25,"duration":0.125,"gap":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":105,"start":4.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":63,"start":4.5,"duration":0.08333333333333333,"gap":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":63,"start":4.583333333333333,"duration":0.020833333333333332,"gap":0,"instrument":0},
				{"cmd":"note","pitch":74,"volume":63,"start":4.604166666666666,"duration":0.020833333333333332,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":95,"start":4.625,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":95,"start":4.75,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":78,"volume":95,"start":5,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":70,"start":5.25,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":70,"start":5.3125,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":74,"volume":70,"start":5.375,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":70,"start":5.4375,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":105,"start":5.5,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":63,"start":5.75,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":63,"start":5.8125,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":74,"volume":63,"start":5.875,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":63,"start":5.9375,"duration":0.0625,"gap":0,"instrument":0},
				{"cmd":"note","pitch":78,"volume":95,"start":6,"duration":0.25,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcMidiOptions = 'X:1\n' +
'%%MIDI program 40\n' +
'%%MIDI channel 4\n' +
'%%MIDI transpose -2\n' +
'L:1/4\n' +
'Q:1/4=40\n' +
'K:A\n' +
'ABcd|\n';

	var expectedMidiOptions = {
		"tempo":40,
		"instrument":40,
		"totalDuration":1,
		"tracks":
			[
				[
					{"cmd":"program","channel":4,"instrument":40},
					{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.25,"instrument":40,"gap":0},
					{"cmd":"note","pitch":69,"volume":95,"start":0.25,"duration":0.25,"instrument":40,"gap":0},
					{"cmd":"note","pitch":71,"volume":95,"start":0.5,"duration":0.25,"instrument":40,"gap":0},
					{"cmd":"note","pitch":72,"volume":95,"start":0.75,"duration":0.25,"instrument":40,"gap":0}
					]
			]
	};

	//////////////////////////////////////////////////////////

	var abcMultiMeasureRest = 'X:1\n' +
'M:4/4\n' +
'L:1/4\n' +
'Q:1/4=130\n' +
'K:Bb\n' +
'cdef|Z4|fedc|\n';

	var expectedMultiMeasureRest = {
		"tempo":130,
		"instrument":0,
		"totalDuration":6,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":72,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":95,"start":0.50,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":105,"start":5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":95,"start":5.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":5.50,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":5.75,"duration":0.25,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcOctaveClefs = 'X:1\n' +
'M:4/4\n' +
'K:C\n' +
"[K: treble+8]{B}A4 [CE^F]4 | [K: treble-8]G8| G,2B,2 c'2e'2 | [K: bass-8]C8| [K: bass+8]B,8|\n";

	var expectedOctaveClefs = {
		"tempo": 180,
		"instrument": 0,
		"totalDuration": 5,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":95,"volume":70,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":93,"volume":105,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":84,"volume":95,"start":0.5,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":88,"volume":95,"start":0.5,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":90,"volume":95,"start":0.5,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":43,"volume":105,"start":1,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":31,"volume":105,"start":2,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":35,"volume":95,"start":2.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":95,"start":2.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":95,"start":2.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":36,"volume":105,"start":3,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":83,"volume":105,"start":4,"duration":1,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcOverlay = 'X:1\n' +
'M: 4/4\n' +
'L: 1/4\n' +
'K:C\n' +
'C4 | D4 |\n' +
'G4 & E4 | A4 & F4 |\n' +
'B4 & d4 & f4 | c4 & e4 & g4 |\n' +
"a4 | b4 & d'4 |\n" +
'C4 | D4 | E4 & G4 | A4 | B4 & d4 |\n';

	var expectedOverlay = {
		"tempo": 180,
		"instrument": 0,
		"totalDuration": 13,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":60,"volume":105,"start":0,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":105,"start":1,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":2,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":3,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":105,"start":4,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":105,"start":5,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":6,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":83,"volume":105,"start":7,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":8,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":105,"start":9,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":105,"start":10,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":11,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":105,"start":12,"duration":1,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":64,"volume":95,"start":2,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":105,"start":3,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":105,"start":4,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":105,"start":5,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":86,"volume":105,"start":7,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":10,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":105,"start":12,"duration":1,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":2,"instrument":0},
				{"cmd":"note","pitch":77,"volume":95,"start":4,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":79,"volume":105,"start":5,"duration":1,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcPercMap = 'X:1\n' +
'%%percmap D  pedal-hi-hat x\n' +
'%%percmap E  bass-drum-1\n' +
'%%percmap F  acoustic-bass-drum\n' +
'%%percmap G  low-floor-tom\n' +
'%%percmap A  high-floor-tom\n' +
'%%percmap B  low-tom\n' +
'%%percmap ^B tambourine   triangle\n' +
'%%percmap c  acoustic-snare\n' +
'%%percmap _c electric-snare\n' +
'%%percmap ^c low-wood-block   triangle\n' +
'%%percmap =c side-stick\n' +
'%%percmap d  low-mid-tom\n' +
'%%percmap ^d high-wood-block    triangle\n' +
'%%percmap e  high-mid-tom\n' +
'%%percmap ^e cowbell      triangle\n' +
'%%percmap f  high-tom\n' +
'%%percmap ^f ride-cymbal-1\n' +
'%%percmap g  closed-hi-hat\n' +
'%%percmap ^g open-hi-hat\n' +
'%%percmap a  crash-cym-1  x\n' +
'%%percmap ^a open-triangle     triangle\n' +
'Q:1/4=50\n' +
'K:C perc\n' +
'DEFG AB^Bc _c^c=cd ^de^ef ^fg^ga ^a\n';

	var expectedPercMap = {
		"tempo":50,"instrument":128,"totalDuration":2.625,"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":128},
				{"cmd":"note","pitch":62,"volume":85,"start":0,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.125,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.25,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":0.375,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":0.5,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":0.625,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":0.75,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":0.875,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":71,"volume":95,"start":1,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":73,"volume":85,"start":1.125,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":1.25,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":1.375,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":75,"volume":95,"start":1.5,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":1.625,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":77,"volume":95,"start":1.75,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":77,"volume":85,"start":1.875,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":2,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":79,"volume":85,"start":2.125,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":80,"volume":95,"start":2.25,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":81,"volume":85,"start":2.375,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":82,"volume":95,"start":2.5,"duration":0.125,"instrument":128,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcLongTie = 'X:1\n' +
'L:1/4\n' +
'Q:80\n' +
'K:A\n' +
'cd-d2-|d2-dz|\n';

	var expectedLongTie = {
		"tempo": 80,
		"instrument": 0,
		"totalDuration": 2,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.25,"duration":1.5,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcRegularTie = 'X:1\n' +
'M:4/4\n' +
'L:1/8\n' +
'Q:1/4=150\n' +
'K:Bb\n' +
'GBcd-d4|zcdc dc3:|\n';

	var expectedRegularTie = {
		"tempo":150,
		"instrument":0,
		"totalDuration":4,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":0.375,"duration":0.625,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":1.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":1.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":1.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":1.625,"duration":0.375,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":2,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":85,"start":2.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":2.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":2.375,"duration":0.625,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":3.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":3.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":3.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":3.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":3.625,"duration":0.375,"instrument":0,"gap":0},
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcTripletChords = 'X:1\n' +
'T:triplets-and-chord-rhythm\n' +
'M: 4/4\n' +
'L: 1/8\n' +
'Q: 80\n' +
'"C" (3 C2 D2 E2 "G/G" (3 F2 E2 D2 |\n' +
'"C" (3 CA,G, (3 CDE "C" (3 EEE (3 GGG |\n' +
'"C" (3 CDE (3 FED (3 CDE (3 FED |\n' +
'"C" (3 CDC (3 EFE "D" (3 GAG (3 cdc |\n';

	var expectedTripletChords = {
		"tempo":80,
		"instrument":0,
		"totalDuration":4,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":60,"volume":105,"start":0,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":0.166667,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.333334,"duration":0.166666,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":95,"start":0.5,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.666667,"duration":0.166667,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":0.833334,"duration":0.166666,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":1,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":57,"volume":85,"start":1.083333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":55,"volume":85,"start":1.166666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":95,"start":1.25,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":1.333333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.416666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":95,"start":1.5,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.583333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.666666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":1.75,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":1.833333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":1.916666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":2,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":2.083333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":2.166666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":95,"start":2.25,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":2.333333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":2.416666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":95,"start":2.5,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":2.583333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":2.666666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":95,"start":2.75,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":2.833333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":2.916666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":3,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":85,"start":3.083333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":85,"start":3.166666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":95,"start":3.25,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":3.333333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":3.416666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":3.5,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":3.583333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":3.666666,"duration":0.083334,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":3.75,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":3.833333,"duration":0.083333,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":3.916666,"duration":0.083334,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":36,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":43,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":36,"volume":64,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":31,"volume":64,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":36,"volume":64,"start":2,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":31,"volume":64,"start":2.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":36,"volume":64,"start":3,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":48,"volume":48,"start":3.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":3.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":3.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":3.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":3.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":54,"volume":48,"start":3.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":3.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcSnare = 'X:1\n' +
'V:SnareDrum stem=up stafflines=1\n' +
'K:C clef=perc\n' +
'%%MIDI channel 10\n' +
'%%MIDI drummap B 38\n' +
'!f!B2 z2  B/4B/4B/4B/4 B/4B/4B/4B/4 B/4B/4B/4B/4 B/4B/4B/4B/4 B/4B/4B/4B/4 | B/4B/4B/4B/4 !>!B2 {/B}B4|\n';

	var expectedSnare = {
		"tempo":180,
		"instrument":128,
		"totalDuration":2,
		"tracks":[
			[
				{"cmd":"program","channel":10,"instrument":128},
				{"cmd":"note","pitch":38,"volume":80,"start":0,"duration":0.25,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":95,"start":0.5,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.53125,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.5625,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.59375,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.625,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.65625,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.6875,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.71875,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":95,"start":0.75,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.78125,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.8125,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.84375,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.875,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.90625,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.9375,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":0.96875,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":95,"start":1,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":1.03125,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":1.0625,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":1.09375,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":105,"start":1.125,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":1.15625,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":1.1875,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":80,"start":1.21875,"duration":0.03125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":120,"start":1.25,"duration":0.25,"instrument":128,"gap":0},
				{"cmd":"note","pitch":38,"volume":53,"start":1.5,"duration":0.25,"gap":0,"instrument":128},
				{"cmd":"note","pitch":38,"volume":80,"start":1.75,"duration":0.25,"instrument":128,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcMetronome = 'X:1\n' +
'L:1/4\n' +
'Q:1/4=60\n' +
'%%MIDI drum dddd 76 77 77 77 50 50 50 50\n' +
'K:A\n' +
'V:1\n' +
'%%MIDI drumon\n' +
'e|a/g/ f/e/ c3/2 B/|Azzz|\n';

	var expectedMetronome = {
		"tempo":60,
		"instrument":0,
		"totalDuration":2.25,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":80,"volume":85,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":0.75,"duration":0.375,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":1.25,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":2,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":0.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":0.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":1,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":76,"volume":50,"start":1.25,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":1.5,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":1.75,"duration":0.25,"instrument":128},
				{"cmd":"note","pitch":77,"volume":50,"start":2,"duration":0.25,"instrument":128}
			]
		]
	};

	//////////////////////////////////////////////////////////


	it("flatten-pickup-triplet-chords-rhythmhead", function() {
		doFlattenTest(abcMultiple, expectedMultiple);
	})

	it("flatten-dynamics", function() {
		doFlattenTest(abcDynamics, expectedDynamics);
	})

	it("flatten-dynamics2", function() {
		doFlattenTest(abcDynamics2, expectedDynamics2);
	})

	it("flatten-dynamics3", function() {
		doFlattenTest(abcDynamics3, expectedDynamics3);
	})

	it("flatten-six-huit", function() {
		doFlattenTest(abcSixHuit, expectedSixHuit);
	})

	it("flatten-jig-chords", function() {
		doFlattenTest(abcJigChords, expectedJigChords);
	})

	it("flatten-repeat", function() {
		doFlattenTest(abcRepeat, expectedRepeat);
	})

	it("flatten-drum", function() {
		doFlattenTest(abcDrum, expectedDrum);
	})

	it("flatten-transpose", function() {
		doFlattenTest(abcTranspose, expectedTranspose);
	})

	it("flatten-tempo-change", function() {
		//console.log("flatten-tempo-change")
		doFlattenTest(abcTempoChange, expectedTempoChange);
	})

	it("flatten-tempo-change2", function() {
		//console.log("flatten-tempo-change2")
		doFlattenTest(abcTempoChange2, expectedTempoChange2);
	})

	it("flatten-decorations", function() {
		doFlattenTest(abcDecoration, expectedDecoration);
	})

	it("flatten-meter-change", function() {
		doFlattenTest(abcMeterChange, expectedMeterChange);
	})

	it("flatten-break", function() {
		doFlattenTest(abcBreak, expectedBreak);
	})

	it("flatten-break2", function() {
		doFlattenTest(abcBreak2, expectedBreak2);
	})

	it("flatten-end-chord", function() {
		doFlattenTest(abcEndChord, expectedEndChord);
	})

	it("flatten-mid-measure", function() {
		doFlattenTest(abcMidMeasureChordChange, expectedMidMeasureChordChange);
	})

	it("flatten-grace", function() {
		doFlattenTest(abcGrace, expectedGrace);
	})

	it("flatten-midi-options", function() {
		doFlattenTest(abcMidiOptions, expectedMidiOptions);
	})

	it("flatten-multi-measure-rest", function() {
		doFlattenTest(abcMultiMeasureRest, expectedMultiMeasureRest);
	})

	it("flatten-octave-clefs", function() {
		doFlattenTest(abcOctaveClefs, expectedOctaveClefs);
	})

	it("flatten-overlay", function() {
		doFlattenTest(abcOverlay, expectedOverlay);
	})

	it("flatten-perc-map", function() {
		doFlattenTest(abcPercMap, expectedPercMap);
	})

	it("flatten-long-tie", function() {
		doFlattenTest(abcLongTie, expectedLongTie);
	})

	it("flatten-triplet-chords", function() {
		doFlattenTest(abcTripletChords, expectedTripletChords);
	})

	it("flatten-regular-tie", function() {
		doFlattenTest(abcRegularTie, expectedRegularTie);
	})

	it("flatten-snare", function() {
		doFlattenTest(abcSnare, expectedSnare);
	})

	it("flatten-metronome", function() {
		doFlattenTest(abcMetronome, expectedMetronome);
	})
})

//////////////////////////////////////////////////////////

function doFlattenTest(abc, expected) {
	var visualObj = abcjs.renderAbc("paper", abc, {});
	var flatten = visualObj[0].setUpAudio();
	console.log(JSON.stringify(flatten))
	chai.assert.equal(flatten.tempo, expected.tempo, "Tempo")
	chai.assert.equal(flatten.tracks.length, expected.tracks.length, "Number of Tracks")
	chai.assert.equal(flatten.totalDuration, expected.totalDuration, "Total Duration")
	for (var i = 0; i < expected.tracks.length; i++) {
		chai.assert.equal(flatten.tracks[i].length, expected.tracks[i].length, "length of track "+i)
		for (var j = 0; j < expected.tracks[i].length; j++) {
			var msg = "trk: " + i + " ev: " + j + "\nrcv: " + JSON.stringify(flatten.tracks[i][j]) + "\n" +
				"exp: " + JSON.stringify(expected.tracks[i][j]) + "\n";
			chai.assert.deepStrictEqual(flatten.tracks[i][j],expected.tracks[i][j], msg)
		}
	}
}
