var MAPDATA = {
	22: {
		name: 'Spring 2013',
		date: '2013-05-17',
		maps: {
			1: {
				name: 'E-1',
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 6,
				maphp: 420,
				finalhp: 70,
				nodes: {
					'Start': {
						type: 0,
						x: 74,
						y: 167,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 161,
						y: 149,
						compDiff: {
							3: ['1','1b','2'],
						},
						route: 'B',
					},
					'B': {
						type: 4,
						x: 257,
						y: 137,
						resource: 2,
						route: 'C',
					},
					'C': {
						type: 2,
						x: 330,
						y: 131,
						resource: 1,
						amount: [20,25,30,40,45,60],
						route: 'D',
					},
					'D': {
						type: 1,
						x: 427,
						y: 132,
						subonly: true,
						compDiff: {
							3: ['1','1b','2'],
						},
						route: 'E',
					},
					'E': {
						type: 1,
						x: 521,
						y: 152,
						compDiff: {
							3: ['1','2','2b','3'],
						},
						routeC: function(ships) {
							if (ships.AV && ships.DD >= 2 && ships.total >= 6) return 'F';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 668,
						y: 179,
						boss: true,
						compDiff: {
							3: ['1','1b','2'],
						},
						end: true,
					},
					'G': {
						type: 2,
						x: 462,
						y: 277,
						resource: 1,
						amount: [80,150,195,240],
						end: true,
					},
				}
			},
		}
	},
	25: {
		name: 'Winter 2013',
		nameT: 'Counterattack! Fleet of Fog',
		date: '2013-12-24',
		diffMode: 1,
		allowDiffs: [2,1],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/WGhBfSf.jpg',
		bannerImgAlt: 'http://i.imgur.com/HGuOC0q.jpg',
		initReward: {
			'ships': [2001],
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Battle off Kannonzaki Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 107,
				bgmNN: 107,
				bgmDB: 998,
				bgmNB: 998,
				bossnode: 4,
				hpmode: 1,
				bossHP: 3, //needed for replayer
				maphp: {
					2: { 1: 3 },
					1: { 1: 3 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [2002],
					'items': [62],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 289,
						y: 107,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 369,
						y: 178,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							15: ['1','2'],
							1: ['3','4','5'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV == ships.total) return 'C';
							return (Math.random() < .5)? 'B':'C';
						}
					},
					'B': {
						type: 1,
						x: 422,
						y: 250,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							15: ['1'],
							1: ['2'],
						},
						route: 'D',
					},
					'C': {
						type: 1,
						x: 268,
						y: 228,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							15: ['1','2'],
							1: ['3','4','5'],
						},
						route: 'D',
					},
					'D': {
						type: 1,
						x: 348,
						y: 340,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							15: ['1'],
							1: ['2'],
						},
						end: true,
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'Battle of Iwo-jima Island',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 107,
				bgmNN: 107,
				bgmDB: 998,
				bgmNB: 998,
				bossnode: 7,
				hpmode: 1,
				bossHP: 4,
				maphp: {
					2: { 1: 4 },
					1: { 1: 4 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [2003],
					'items': [42]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 114,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 249,
						y: 156,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							30: ['1'],
							1: ['2'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV == ships.total) return 'D';
							return (Math.random() < .5)? 'B':'D';
						},
					},
					'B': {
						type: 1,
						x: 309,
						y: 302,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							30: ['1'],
							1: ['2'],
						},
						routeR: {'C':.5,'F':.5},
					},
					'C': {
						type: 1,
						x: 481,
						y: 311,
						compDiff: {
							2: ['1','1b'],
							1: ['3'],
						},
						compHQ: {
							30: ['1','1b'],
							1: ['3'],
						},
						route: 'G',
					},
					'D': {
						type: 1,
						x: 385,
						y: 84,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							30: ['1'],
							1: ['3'],
						},
						route: 'E',
					},
					'E': {
						type: 4,
						x: 516,
						y: 175,
						resource: 2,
						route: 'G',
					},
					'F': {
						type: 2,
						x: 428,
						y: 235,
						resource: 1,
						amount: [35,40,45,65,70,75,80,85,90,95,100,105,110,115,120],
						end: true,
					},
					'G': {
						type: 1,
						x: 561,
						y: 254,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							30: ['1'],
							1: ['3'],
						},
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'Fleet of Fog - Decisive Battle!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 107,
				bgmNN: 107,
				bgmDB: 998,
				bgmNB: 998,
				bossnode: 8,
				hpmode: 1,
				bossHP: 5,
				maphp: {
					2: { 1: 5 },
					1: { 1: 5 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [155],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 207,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 219,
						y: 206,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV >= 4) return 'C';
							if (ships.aBB + ships.CV + ships.CVB + ships.CVN <= 0 && ships.speed == 10) return 'D';
							if (CHDATA.event.maps[3].hp <= 1) return 'C';
							return (Math.random() < .75)? 'B':'C';
						},
					},
					'B': {
						type: 1,
						x: 440,
						y: 207,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						routeC: function(ships) {
							return (Math.random() < .2*(ships.CV+ships.CVB+ships.CVN))? 'E':'H';
						},
					},
					'C': {
						type: 1,
						x: 316,
						y: 119,
						compDiff: {
							2: ['1'],
							1: ['4'],
						},
						compHQ: {
							45: ['1'],
							1: ['4'],
						},
						route: 'B',
					},
					'D': {
						type: 1,
						x: 292,
						y: 274,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						route: 'F',
					},
					'E': {
						type: 2,
						x: 529,
						y: 114,
						resource: 3,
						amount: [50,55,70,80,85,90,100,105,110,115,120,125,130,140,145,150],
						end: true,
					},
					'F': {
						type: 1,
						x: 441,
						y: 317,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						routeR: {'G':.5,'H':.5},
					},
					'G': {
						type: 1,
						x: 621,
						y: 347,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						end: true,
					},
					'H': {
						type: 1,
						x: 633,
						y: 208,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						end: true,
					},
				},
			},
		},
	},
	27: {
		name: 'Summer 2014',
		date: '2014-08-08',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/1rQiUHS.jpg',
		bannerImgAlt: 'http://i.imgur.com/TsVcRjn.jpg',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Advance to the Northern AL Area!',
				fleetTypes: [0],
				bgmMap: 2027,
				bgmDN: 14,
				bgmNN: 14,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				maphp: {
					3: { 1: 528 },
					2: { 1: 528 },
					1: { 1: 528 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				giveLock: 'AL',
				checkLock: ['MI'],
				nodes: {
					'Start': {
						type: 0,
						x: 179,
						y: 296,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 297,
						y: 252,
						compDiff: {
							3: ['HQ60+ 1','HQ60+ 2'],
							2: ['HQ35+ 1','HQ35+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQ: {
							60: ['HQ60+ 1','HQ60+ 2'],
							35: ['HQ35+ 1','HQ35+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.SS||ships.SSV) return 'C';
							else if (ships.CV+ships.CVL+ships.CVB >= 3) return 'C';
							else if (ships.DD >= 4) return 'B';
							else if (ships.DD >= 2 && ships.CVL >= 2) return 'C';
							else return 'H';
						}
					},
					'B': {
						type: 1,
						x: 410,
						y: 203,
						night: true,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ50+'],
							1:['HQ1+'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							50:['HQ50+'],
							1:['HQ1+'],
						},
						route: 'E',
					},
					'C': {
						type: 1,
						x: 249,
						y: 165,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ50+'],
							1:['HQ1+'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							50:['HQ50+'],
							1:['HQ1+'],
						},
						routeC: function(ships) {
							if (ships.CV+ships.CVL+ships.CVB >= 3) return 'F';
							else if (ships.SS+ships.SSV >= 4) return 'F';
							else if (ships.CL) return 'D';
							else return ((Math.random()<.5)? 'B' : 'D');
						}
					},
					'D': {
						type: 1,
						x: 364,
						y: 98,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ100+ 1','HQ100+ 2'],
							1:['HQ100+ 1','HQ100+ 2'],
						},
						compHQ:{
							1:['HQ100+ 1','HQ100+ 2'],
						},
						route: 'E',
					},
					'E': {
						type: 3,
						x: 503,
						y: 129,
						routeL: { 100:'K', 0:'G' }
					},
					'F': {
						type: 3,
						x: 169,
						y: 131,
						end: true,
					},
					'G': {
						type: 3,
						x: 613,
						y: 96,
						end: true,
					},
					'H': {
						type: 1,
						x: 424,
						y: 314,
						night: true,
						compDiff:{
							3:['HQ60+ 1','HQ60+ 2'],
							2:['HQ40+ 1','HQ40+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							100:['HQ60+ 1','HQ60+ 2'],
							50:['HQ40+ 1','HQ40+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						route: 'I',
					},
					'I': {
						type: 1,
						x: 532,
						y: 263,
						compDiff:{
							3:['HQ90+ 1','HQ90+ 2'],
							2:['HQ50+ 1','HQ50+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							90:['HQ90+ 1','HQ90+ 2'],
							50:['HQ50+ 1','HQ50+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						routeL: {100:'K',0:'J'}
					},
					'J': {
						type: 3,
						x: 619,
						y: 301,
						end: true,
					},
					'K': {
						type: 1,
						x: 584,
						y: 180,
						boss: true,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ55+ 1','HQ55+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							55:['HQ55+ 1','HQ55+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						end: true,
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Diversionary Tactics! Wreck the Northern Harbour!',
				fleetTypes: [0],
				bgmMap: 2027,
				bgmDN: 14,
				bgmNN: 14,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				maphp: {
					3: { 1: 2300 },
					2: { 1: 2300 },
					1: { 1: 2300 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 'AL',
				checkLock: ['MI'],
				nodes: {
					'Start': {
						type: 0,
						x: 181,
						y: 327,
						routeC: function(ships) {
							if (ships.DD >= 4) return 'C';
							if (ships.aBB||(ships.CV+ships.CVB+ships.CVN)||ships.SS||ships.SSV) return 'A';
							if (ships.DD >=2 && ships.CVL <= 2 && ships.CA+ships.CAV <= 2) return 'C';
							return 'A';
						}
					},
					'A': {
						type: 3,
						x: 107,
						y: 221,
						route: 'B',
					},
					'B': {
						type: 1,
						x: 217,
						y: 129,
						compDiff: {
							3: ['1','1b'],
							2: ['2','2b','3'],
							1: ['4','5'],
						},
						compHQ: {
							70: ['1','1b'],
							40: ['2','2b','3'],
							1: ['4','5'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 3 || ships.aBB >= 3) return 'F';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 304,
						y: 311,
						compDiff: {
							3: ['1','2'],
							2: ['1','3'],
							1: ['3'],
						},
						compHQ: {
							60: ['1','2'],
							40: ['1','3'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.aBB||ships.aCV) return 'D';
							return 'G';
						}
					},
					'D': {
						type: 1,
						x: 314,
						y: 209,
						compDiff: {
							3: ['1','1b','1c'],
							2: ['2','3'],
							1: ['4','4b'],
						},
						compHQ: {
							60: ['1','1b','1c'],
							40: ['2','3'],
							1: ['4','4b'],
						},
						route: 'E',
					},
					'E': {
						type: 1,
						x: 372,
						y: 149,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['4','5'],
						},
						compHQ: {
							60: ['1','2'],
							40: ['2','3'],
							30: ['3','5'],
							1: ['4','5'],
						},
						routeL: { 100: 'K', 0: 'F' },
					},
					'F': {
						type: 3,
						x: 450,
						y: 83,
						end: true,
					},
					'G': {
						type: 1,
						x: 501,
						y: 291,
						compDiff: {
							3: ['2','2b'],
							2: ['3','2b'],
							1: ['3','1'],
						},
						compHQ: {
							60: ['2','2b'],
							40: ['3','2b'],
							1: ['3','1'],
						},
						routeL: { 100: 'E', 50: 'I', 0: 'H' },
					},
					'H': {
						type: 3,
						x: 626,
						y: 322,
						end: true,
					},
					'I': {
						type: 1,
						x: 615,
						y: 242,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						compHQ: {
							1: ['1'],
						},
						routeL: { 100: 'K', 0: 'J' },
					},
					'J': {
						type: 2,
						x: 657,
						y: 152,
						resource: 2,
						amount: [30],
						end: true,
					},
					'K': {
						type: 1,
						x: 537,
						y: 143,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						compHQ: {
							100: ['1'],
							55: ['3'],
							1: ['5'],
						},
						compHQF: {
							100: ['2'],
							55: ['4'],
							1: ['6'],
						},
						boss: true,
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'The Decisive Battle! Starting Operation MI',
				fleetTypes: [1],
				bgmMap: 2027,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 10,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 250,
					2: 250,
					1: 250,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 211,
						route: 'A',
					},
					'A': {
						type: 3,
						x: 213,
						y: 170,
						routeC: function(ships) {
							if (ships.speed == 5) return 'B';
							if (ships.aCV <= 3) return 'D';
							if (ships.AV) return 'C';
							if (ships.aBB <= 0) return (Math.random()>.5)? 'C':'D';
							return ['B','C','D'][Math.floor(Math.random()*3)];
						},
					},
					'B': {
						type: 1,
						x: 347,
						y: 111,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','2'],
							1:['2'],
						},
						compHQ: {
							60:['1','2'],
							1:['2'],
						},
						route: 'E',
					},
					'C': {
						type: 3,
						x: 367,
						y: 204,
						route: 'E',
					},
					'D': {
						type: 1,
						x: 296,
						y: 247,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','3'],
							1:['3'],
						},
						compHQ: {
							100:['1','2'],
							60:['1','3'],
							1:['3'],
						},
						route: 'F',
					},
					'E': {
						type: 1,
						x: 477,
						y: 171,
						aironly: true,
						compDiff: {
							3:['1','2','3'],
							2:['1','2'],
							1:['1','2'],
						},
						compHQ: {
							100:['1','2','3'],
							1:['1','2'],
						},
						route: 'H',
					},
					'F': {
						type: 3,
						x: 425,
						y: 305,
						routeL: {100:'H',0:'I'},
					},
					'G': {
						type: 3,
						x: 517,
						y: 119,
						end: true,
					},
					'H': {
						type: 1,
						x: 569,
						y: 227,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','3'],
							1:['1','3'],
						},
						compHQ: {
							100:['1','2'],
							1:['1','3'],
						},
						routeL: {80:'J',0:'G'},
					},
					'I': {
						type: 3,
						x: 603,
						y: 320,
						end: true,
					},
					'J': {
						type: 1,
						x: 617,
						y: 120,
						boss: true,
						compDiff: {
							3:['1','2'],
							2:['4'],
							1:['6','7'],
						},
						compDiffF: {
							3:['3'],
							2:['5'],
							1:['8'],
						},
						compHQ: {
							105:['1','2'],
							70:['4'],
							1:['6','7'],
						},
						compHQF: {
							105:['3'],
							70:['5'],
							1:['8'],
						},
						end: true,
					},
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Invasion of Midway Island',
				fleetTypes: [1],
				bgmMap: 2027,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 11,
				maphp: {
					3: { 1: 5550 },
					2: { 1: 5550 },
					1: { 1: 5550 },
				},
				finalhp: {
					3: 600,
					2: 600,
					1: 600,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 109,
						y: 148,
						routeC: function(ships) {
							if (ships.LHA) return 'B';
							if (ships.escort.DD >= 4) return (Math.random() < .8)? 'B':'A';
							if (ships.aBB >= 2 && ships.speed==10) return 'A';
							return (Math.random() < .5)? 'A':'B';
						},
					},
					'A': {
						type: 1,
						x: 259,
						y: 105,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['1','3'],
							1: ['1','3'],
						},
						compHQ: {
							90: ['1','2','3'],
							1: ['1','3'],
						},
						route: 'C',
					},
					'B': {
						type: 1,
						x: 245,
						y: 197,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['1','2','4'],
							1: ['1','2','4'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['1','2','4'],
						},
						routeR: {'C':.5,'D':.5},
					},
					'C': {
						type: 1,
						x: 371,
						y: 135,
						subonly: true,
						compDiff: {
							3: ['1','1b','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							90: ['1','1b','2'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.aCV <= 3 && ships.speed==10) return 'F';
							return (Math.random()<.8)? 'E':'F';
						},
					},
					'D': {
						type: 1,
						x: 280,
						y: 276,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						routeL: {100:'H',0:'L'},
					},
					'E': {
						type: 1,
						x: 569,
						y: 90,
						aironly: true,
						compDiff: {
							3: ['1','4','5'],
							2: ['1','2','3','4'],
							1: ['1','2'],
						},
						compHQ: {
							100: ['1','4','5'],
							60: ['1','2','3','4'],
							1: ['1','2'],
						},
						end: true,
					},
					'F': {
						type: 3,
						x: 540,
						y: 176,
						routeL: {100:'J',0:'I'},
					},
					'G': {
						type: 3,
						x: 184,
						y: 309,
						end: true,
					},
					'H': {
						type: 1,
						x: 372,
						y: 328,
						compDiff: {
							3: ['1','2'],
							2: ['2','3','3b'],
							1: ['2','3','3b'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','3b'],
						},
						route: 'K',
					},
					'I': {
						type: 3,
						x: 626,
						y: 248,
						end: true,
					},
					'J': {
						type: 1,
						x: 494,
						y: 304,
						aironly: true,
						compDiff: {
							3: ['1','2','4'],
							2: ['1','3','5'],
							1: ['1','3','5'],
						},
						compHQ: {
							100: ['1','2','4'],
							1: ['1','3','5'],
						},
						routeL: {100:'K',0:'H'},
					},
					'K': {
						type: 1,
						x: 392,
						y: 242,
						boss: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						compHQ: {
							105: ['1'],
							70: ['3'],
							1: ['5'],
						},
						compHQF: {
							105: ['2'],
							70: ['4'],
							1: ['6'],
						},
						end: true,
					},
				},
			},
			5: {
				name: 'E-5',
				nameT: 'Securing the MI Islands',
				fleetTypes: [1],
				bgmMap: 2027,
				bgmDN: 12,
				bgmNN: 12,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 12,
				maphp: {
					3: { 1: 3150 },
					2: { 1: 3150 },
					1: { 1: 3150 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 141,
						routeR: {'A':.5,'B':.5},
					},
					'A': {
						type: 1,
						x: 230,
						y: 184,
						subonly: true,
						compDiff: {
							3: ['1','1b'],
							2: ['1','1b'],
							1: ['1','1b'],
						},
						compHQ: {
							1: ['1','1b'],
						},
						routeC: function(ships) {
							if (ships.DD+ships.escort.DD >= 4) return 'C';
							return (Math.random()<.5)? 'C':'D';
						}
					},
					'B': {
						type: 1,
						x: 200,
						y: 237,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							90: ['1','2'],
							1: ['2','3'],
						},
						route: 'E',
					},
					'C': {
						type: 1,
						x: 361,
						y: 117,
						aironly:true,
						compDiff: {
							3: ['1','2','3'],
							2: ['2','3'],
							1: ['2','4'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['2','3','4'],
						},
						routeR: {'G':.5,'F':.5},
					},
					'D': {
						type: 1,
						x: 360,
						y: 199,
						night: true,
						compDiff: {
							3: ['2','2b'],
							2: ['1','2b'],
							1: ['1'],
						},
						compHQ: {
							100: ['2','2b'],
							1: ['1','2b'],
						},
						routeR: {'G':.5,'H':.5},
					},
					'E': {
						type: 1,
						x: 322,
						y: 301,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						routeR: {'H':.5,'I':.5},
					},
					'F': {
						type: 3,
						x: 521,
						y: 82,
						end: true,
					},
					'G': {
						type: 1,
						x: 496,
						y: 155,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							1: ['1','2'],
						},
						routeL: {100:'L',0:'J'},
					},
					'H': {
						type: 1,
						x: 462,
						y: 239,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						compHQ: {
							90: ['1','2'],
							70: ['2','3'],
							1: ['3','4'],
						},
						route: 'L',
					},
					'I': {
						type: 1,
						x: 469,
						y: 299,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['2','3','4'],
							1: ['2','3','4'],
						},
						compHQ: {
							90: ['1','2','3'],
							1: ['2','3','4'],
						},
						routeL: {100:'L',0:'K'},
					},
					'J': {
						type: 3,
						x: 615,
						y: 124,
						end: true,
					},
					'K': {
						type: 3,
						x: 615,
						y: 324,
						end: true,
					},
					'L': {
						type: 1,
						x: 594,
						y: 230,
						boss: true,
						end: true,
						compDiff: {
							3: ['1'],
							2: ['3','4'],
							1: ['6'],
						},
						compDiffF: {
							3: ['2'],
							2: ['5'],
							1: ['7'],
						},
						compHQ: {
							105: ['1'],
							80: ['3','4'],
							1: ['6'],
						},
						compHQF: {
							105: ['2'],
							80: ['5'],
							1: ['7'],
						},
					},
				},
			},
			6: {
				name: 'E-6',
				nameT: 'Counter Attack to AL/MI Operation',
				fleetTypes: [0],
				bgmMap: 2027,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 10,
				maphp: {
					3: { 1: 4000 },
					2: { 1: 4000 },
					1: { 1: 4000 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				checkLock: ['AL','MI'],
				nodes: {
					'Start': {
						type: 1,
						x: 96,
						y: 122,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 226,
						y: 191,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV >= 2) return 'B';
							if (ships.CA+ships.CAV == 2 || ships.CVL == 2 || ships.aCV == 3 || ships.DD == 2) return 'C';
							return (Math.random() < .5)? 'C':'D';
						}
					},
					'B': {
						type: 3,
						x: 268,
						y: 315,
						end: true,
					},
					'C': {
						type: 1,
						x: 358,
						y: 174,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['3','4'],
						},
						compHQ: {
							88: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.CVL == 2) return 'E';
							return (Math.random()<.5)? 'E':'F';
						}
					},
					'D': {
						type: 1,
						x: 354,
						y: 282,
						night: true,
						compDiff: {
							3: ['1'],
							2: ['1','2'],
							1: ['2'],
						},
						compHQ: {
							100: ['1'],
							75: ['1','2'],
							1: ['2'],
						},
						routeR: {'F':.5,'G':.5},
					},
					'E': {
						type: 3,
						x: 464,
						y: 94,
						route: 'H',
					},
					'F': {
						type: 1,
						x: 484,
						y: 222,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['2','3'],
							1: ['3'],
						},
						routeL: {100: 'J', 90: 'H', 0: 'G' },
					},
					'G': {
						type: 3,
						x: 474,
						y: 323,
						end: true,
					},
					'H': {
						type: 1,
						x: 545,
						y: 104,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['3','4'],
							1: ['5'],
						},
						routeL: {100:'J',0:'I'},
					},
					'I': {
						type: 3,
						x: 645,
						y: 161,
						end: true,
					},
					'J': {
						type: 1,
						x: 592,
						y: 301,
						boss: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['3'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['4'],
						},
						compHQ: {
							100: ['1'],
							1: ['3'],
						},
						compHQF: {
							100: ['2'],
							1: ['4'],
						},
						end: true,
					},
				},
			},
		}
	},
	31: {
		name: 'Summer 2015',
		date: '2015-08-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/2qArUXu.png',
		bannerImgAlt: 'http://i.imgur.com/rB0Q7Z6.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation for Second Operation SN!',
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 26,
				maphp: {
					3: { 1: 750 },
					2: { 1: 750 },
					1: { 1: 750 },
				},
				finalhp: {
					3: 190,
					2: 190,
					1: 150,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				additionalChecks: function(ships,errors) {
					if (!ships.CL) errors.push('Min 1 CL');
					if (ships.DD < 2) errors.push('Min 2 DD');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 418,
						y: 144,
						route: 'A',
					},
					'A':{
						type: 1,
						x: 495,
						y: 208,
						routeC: function(ships) {
							if (ships.CL >= 2 || ships.SS+ships.SSV > 0 || ships.ids.length < 6) return 'F';
							if (ships.ids.indexOf(30) != -1 || ships.ids.indexOf(259) != -1) {
								if (ships.aBB <= 1 && ships.aCV <= 0) return 'D';
							}
							if (ships.aCV) return 'C';
							if (ships.aBB) return 'B';
							if (ships.LHA || ships.AV >= 2) return 'D';
							return (Math.random() < .5)? 'B' : 'D';
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'B':{
						type: 1,
						x: 507,
						y: 301,
						route: 'D',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'C':{
						type: 1,
						x: 585,
						y: 133,
						route: 'E',
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1'],
						},
					},
					'D':{
						type: 2,
						x: 582,
						y: 268,
						resource: 2,
						amount: [15,45],
						route: 'Z',
					},
					'E':{
						type: 1,
						x: 647,
						y: 165,
						route: 'Z',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'F':{
						type: 1,
						x: 380,
						y: 299,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
					},
					'G':{
						type: 2,
						x: 247,
						y: 279,
						resource: 1,
						amount: [25,75],
						end: true,
					},
					'Z':{
						type: 1,
						x: 654,
						y: 301,
						boss: true,
						end: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy 1'],
						},
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'Combined Fleet, to the Solomon Sea!',
				fleetTypes: [1,2],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 26,
				maphp: {
					3: { 1: 1050 },
					2: { 1: 1050 },
					1: { 1: 1050 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 270,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 169,
						y: 111,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 264,
						y: 181,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'C';
							return 'B';
						},
					},
					'B': {
						type: 1,
						x: 316,
						y: 241,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'K';
							if (ships.aBB + ships.CV + ships.CVB + ships.escort.aBB >= 3) return 'D';
							return 'E';
						},
					},
					'C': {
						type: 3,
						x: 336,
						y: 123,
						routeS: ['F','I'],
					},
					'D': {
						type: 1,
						x: 375,
						y: 319,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						route: 'G',
					},
					'E': {
						type: 1,
						x: 430,
						y: 278,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 445,
						y: 170,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'H',
					},
					'G': {
						type: 1,
						x: 462,
						y: 300,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Z',
					},
					'H': {
						type: 1,
						x: 533,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: { 100:'Z', 0:'L' },
					},
					'I': {
						type: 4,
						x: 548,
						y: 101,
						resource: 1,
						route: 'J',
					},
					'J': {
						type: 1,
						x: 619,
						y: 184,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeL: { 100:'H', 0:'L' },
					},
					'K': {
						type: 3,
						x: 233,
						y: 295,
						end: true,
					},
					'L': {
						type: 3,
						x: 657,
						y: 292,
						end: true,
					},
					'Z': {
						type: 1,
						x: 513,
						y: 327,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						boss: true,
						end: true,
					},

				},
			},
			3: {
				name: 'E-3',
				nameT: 'Clash! Second Southern Pacific Ocean Battle',
				fleetTypes: [1,2],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 3,
				bossnode: 26,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 164,
						y: 103,
						route: 'A',
					},
					'A': {
						type: 3,
						x: 239,
						y: 144,
						routeS: ['B','C'],
					},
					'B': {
						type: 1,
						x: 286,
						y: 219,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
					},
					'C': {
						type: 1,
						x: 330,
						y: 130,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 3) return 'D';
							if (ships.CLT + ships.escort.CLT >= 2) return 'D';
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'D';
							if (ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 4) return 'E';
							return 'D';
						},
					},
					'D': {
						type: 1,
						x: 402,
						y: 228,
						aironly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 4) return 'E';
							if (ships.CV + ships.CVB >= 3) return 'E';
							if (ships.CLT + ships.escort.CLT >= 2) return 'E';
							if (CHDATA.fleets.combined == 2 && ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 2) return 'X';
							if (ships.escort.SS + ships.escort.SSV) return 'X';
							return 'F';
						},
					},
					'E': {
						type: 1,
						x: 436,
						y: 99,
						aironly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'H',
					},
					'F': {
						type: 3,
						x: 487,
						y: 303,
						routeS: ['G','I'],
					},
					'G': {
						type: 1,
						x: 488,
						y: 200,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeL: {100:'Z',0:'H'},
					},
					'H': {
						type: 1,
						x: 557,
						y: 120,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: {100:'Z',0:'J'},
					},
					'I': {
						type: 1,
						x: 588,
						y: 295,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Z',
					},
					'J': {
						type: 3,
						x: 650,
						y: 104,
						end: true,
					},
					'X': {
						type: 1,
						x: 360,
						y: 329,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						end: true,
					},
					'Z': {
						type: 1,
						x: 641,
						y: 214,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Charge into the Strait! Destroy the Enemy Airfield!',
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 22,
				bgmNB: 5,
				bossnode: 26,
				maphp: {
					3: { 1: 3500 },
					2: { 1: 3500 },
					1: { 1: 3500 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 3,
				checkLock: [1,2,4],
				nodes: {
					'Start': {
						type: 0,
						x: 135,
						y: 97,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB > 4) return 'A';
							if (isShipInList(ships.ids,78) && isShipInList(ships.ids,79)) return 'B';
							if (isShipInList(ships.ids,86) && (isShipInList(ships.ids,85) || isShipInList(ships.ids,13))) return 'B';
							if (isShipInList(ships.ids,45) && (isShipInList(ships.ids,34) || isShipInList(ships.ids,405))) return 'B';
							var f1 = isShipInList(ships.ids,9);
							if (f1 && isShipInList(ships.ids,32)) return 'B';
							var f2 = isShipInList(ships.ids,59);
							if (f2 && isShipInList(ships.ids,69) && isShipInList(ships.ids,60)) return 'B';
							if (f1 && f2) return 'B';
							return 'A';
						},
					},
					'A': {
						type: 1,
						x: 136,
						y: 211,
						subonly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'C',
					},
					'B': {
						type: 1,
						x: 206,
						y: 149,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
					},
					'C': {
						type: 1,
						x: 208,
						y: 264,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E',
					},
					'D': {
						type: 3,
						x: 278,
						y: 189,
						routeS: ['E','F'],
					},
					'E': {
						type: 1,
						x: 384,
						y: 239,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 403,
						y: 124,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium 1'],
							1: ['Easy F'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,76) && ships.DD >= 2) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'I';
							if (ships.DD >= 2) return 'H';
							return 'I';
						},
					},
					'G': {
						type: 1,
						x: 437,
						y: 265,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'K';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'K';
							return 'Z';
						},
					},
					'H': {
						type: 1,
						x: 530,
						y: 209,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium 1'],
							1: ['Easy F'],
						},
						routeL: {100:'Z',0:'L'},
					},
					'I': {
						type: 4,
						x: 511,
						y: 97,
						resource: 1,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'J';
							return 'H';
						}
					},
					'J': {
						type: 1,
						x: 649,
						y: 180,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'L';
							return 'H';
						},
					},
					'K': {
						type: 3,
						x: 388,
						y: 325,
						end: true,
					},
					'L': {
						type: 3,
						x: 672,
						y: 259,
						end: true,
					},
					'Z': {
						type: 1,
						x: 501,
						y: 306,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			5: {
				name: 'E-5',
				nameT: 'Hard Battle! Western Region Deployment Fleet',
				fleetTypes: [0],
				bgmMap: 2131,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 40,
				bgmNB: 40,
				bossnode: 90,
				maphp: {
					3: { 1: 2450 },
					2: { 1: 2450 },
					1: { 1: 2450 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				giveLock: 4,
				checkLock: [1,2,3],
				nodes: {
					'Start': {
						type: 0,
						x: 608,
						y: 243,
						routeC: function(ships) {
							if (isShipInList(ships.ids,445) && ships.DD) return 'B';
							if (ships.CL && ships.DD >= 2) return 'B';
							if (ships.CAV && ships.DD >= 2) return 'B';
							if (ships.SS + ships.SSV) return 'B';
							return 'A';
						},
					},
					'A': {
						type: 1,
						x: 530,
						y: 287,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'C',
					},
					'B': {
						type: 3,
						x: 506,
						y: 188,
						routeS: ['C','E'],
					},
					'C': {
						type: 1,
						x: 456,
						y: 314,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'F',
					},
					'D': {
						type: 2,
						x: 408,
						y: 224,
						resource: 1,
						amount: [0,0],
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'F';
							if (ships.CAV && ships.DD >= 2) return 'F';
							return (Math.random() < .5)? 'F' : 'H';
						},
					},
					'E': {
						type: 1,
						x: 391,
						y: 111,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'D';
							if (ships.aBB >= 3) return 'G';
							if (ships.SS + ships.SSV >= 4) return 'L';
							if (ships.LHA) return 'G';
							if (ships.DD) return 'D';
							if (ships.SS + ships.SSV) return 'G';
							return 'D';
						},
					},
					'F': {
						type: 1,
						x: 349,
						y: 331,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I',
					},
					'G': {
						type: 1,
						x: 332,
						y: 167,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true,
					},
					'H': {
						type: 1,
						x: 318,
						y: 260,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'J',
					},
					'I': {
						type: 2,
						x: 264,
						y: 316,
						resource: 1,
						amount: [0,0],
						route: 'K',
					},
					'J': {
						type: 1,
						x: 232,
						y: 268,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							return 'K';
						},
					},
					'K': {
						type: 1,
						x: 129,
						y: 268,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'M';
							if (ships.DD) return 'Z';
							return 'M';
						},
					},
					'L': {
						type: 3,
						x: 469,
						y: 76,
						end: true,
					},
					'M': {
						type: 3,
						x: 167,
						y: 194,
						end: true,
					},
					'Z': {
						type: 1,
						x: 82,
						y: 172,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			6: {
				name: 'E-6',
				nameT: 'Counterattack! Enter the FS Region',
				fleetTypes: [1,2],
				bgmMap: 2131,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 26,
				maphp: {
					3: { 1: 2800 },
					2: { 1: 2800 },
					1: { 1: 2800 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 89,
						y: 143,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'A';
							var ids = ships.ids.concat(ships.escort.ids);
							if (isShipInList(ids,13) && isShipInList(ids,45)) return 'A';
							if (isShipInList(ids,9) && isShipInList(ids,59)) return 'A';
							if (isShipInList(ids,86) && isShipInList(ids,85)) return 'A';
							return 'C';
						},
					},
					'A': {
						type: 1,
						x: 181,
						y: 198,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.escort.speed >= 10
								&& ships.aBB + ships.CV + ships.CVB <= 3
								&& !ships.escort.aBB && ships.escort.DD >= 4) { return 'B'; }
							return 'D';
						},
					},
					'B': {
						type: 1,
						x: 197,
						y: 266,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'F',
					},
					'C': {
						type: 1,
						x: 206,
						y: 100,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.CLT + ships.escort.CLT) return 'O';
							return 'E';
						},
					},
					'D': {
						type: 1,
						x: 238,
						y: 227,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.CLT + ships.escort.CLT >= 2) return 'F';
							return 'E';
						},
					},
					'E': {
						type: 1,
						x: 261,
						y: 157,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 290,
						y: 266,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						route: 'J',
					},
					'G': {
						type: 3,
						x: 341,
						y: 161,
						routeS: ['F','H'],
					},
					'H': {
						type: 1,
						x: 394,
						y: 88,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'L',
					},
					'I': {
						type: 3,
						x: 405,
						y: 206,
						end: true,
					},
					'J': {
						type: 3,
						x: 417,
						y: 306,
						routeS: ['K','M'],
					},
					'K': {
						type: 1,
						x: 491,
						y: 197,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'L';
							if (CHDATA.fleets.combined == 2) return 'L';
							return 'Z';
						},
					},
					'L': {
						type: 1,
						x: 523,
						y: 100,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'P';
							return 'Z';
						},
					},
					'M': {
						type: 1,
						x: 550,
						y: 267,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'N';
							return 'Z';
						},
					},
					'N': {
						type: 3,
						x: 634,
						y: 320,
						end: true,
					},
					'O': {
						type: 3,
						x: 307,
						y: 83,
						end: true,
					},
					'P': {
						type: 3,
						x: 649,
						y: 87,
						end: true,
					},
					'Z': {
						type: 1,
						x: 643,
						y: 207,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			7: {
				name: 'E-7',
				nameT: 'Operation FS',
				fleetTypes: [1,2],
				bgmMap: 2131,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 26,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 255,
					2: 255,
					1: 255,
				},
				checkLock: [4],
				debuffCheck: function(debuff) {
					return (debuff.C && debuff.X && debuff.Y);
				},
				nodes: {
					'Start': {
						type: 0,
						x: 162,
						y: 112,
						routeC: function(ships) {
							if (ships.LHA && ships.aCV) return 'B';
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'B';
							if (CHDATA.fleets.combined == 2) return (Math.random() < .75)? 'B' : 'E';
							return (Math.random() < .75)? 'E' : 'B';
						},
					},
					'A': {
						type: 2,
						x: 89,
						y: 276,
						resource: 2,
						amount: [25,65],
						route: 'C',
					},
					'B': {
						type: 1,
						x: 144,
						y: 210,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'A';
							if (ships.escort.CLT) return 'A';
							return (Math.random() < .8)? 'X' : 'A';
						},
					},
					'C': {
						type: 1,
						x: 173,
						y: 326,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true,
						debuffGive: function(efleet) {
							var ships = efleet.ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if ([1513,1536,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[7].debuff.C = true;
						},
					},
					'D': {
						type: 2,
						x: 242,
						y: 335,
						resource: 2,
						amount: [25,105],
						routeC: function(ships) {
							if (ships.LHA || isShipInList(ships.ids.concat(ships.escort.ids),445)) return 'H';
							return (Math.random() < .5)? 'F' : 'H';
						},
					},
					'E': {
						type: 1,
						x: 270,
						y: 114,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 308,
						y: 234,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G',
					},
					'G': {
						type: 3,
						x: 367,
						y: 152,
						routeS: ['I','J'],
					},
					'H': {
						type: 3,
						x: 399,
						y: 303,
						routeS: ['J','Y'],
					},
					'I': {
						type: 1,
						x: 460,
						y: 104,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'K',
					},
					'J': {
						type: 1,
						x: 466,
						y: 196,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return (Math.random() < .75)? 'L' : 'Y';
							if (ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 4) return (Math.random() < .8)? 'M' : 'L';
							if (ships.CV + ships.CVB >= 3) return (Math.random() < .6)? 'M' : 'Y';
							if (ships.CV + ships.CVB == 2) return (Math.random() < .85)? 'M' : 'Y';
							if (ships.escort.aBB >= 2 && Math.random() < .5) return 'Y';
							if (ships.CV + ships.CVB == 1) return (Math.random() < .85)? 'M' : 'L';
						},
					},
					'K': {
						type: 1,
						x: 535,
						y: 94,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: {100:'M',0:'P'},
					},
					'L': {
						type: 1,
						x: 581,
						y: 240,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT) return 'O';
							return 'Z';
						},
					},
					'M': {
						type: 1,
						x: 619,
						y: 171,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT) return 'N';
							return 'Z';
						},
					},
					'N': {
						type: 3,
						x: 665,
						y: 130,
						end: true,
					},
					'O': {
						type: 3,
						x: 597,
						y: 321,
						end: true,
					},
					'P': {
						type: 3,
						x: 612,
						y: 90,
						end: true,
					},
					'X': {
						type: 1,
						x: 212,
						y: 282,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
						debuffGive: function(efleet) {
							var ships = efleet.ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if ([1513,1536,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[7].debuff.X = true;
						},
					},
					'Y': {
						type: 1,
						x: 484,
						y: 314,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT) return 'O';
							return 'L';
						},
						debuffGive: function(efleet) {
							const ships = efleet.ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if ([1513,1536,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[7].debuff.Y = true;
						},
					},
					'Z': {
						type: 1,
						x: 647,
						y: 241,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						debuffAmount: 100,
					},
				},
			},
		}
	},
	32: {
		name: 'Fall 2015',
		date: '2015-11-18',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'https://i.imgur.com/46s7gmq.png',
		bannerImgAlt: 'https://i.imgur.com/JWmN8EI.png',
		ptImpSpecial: 2,
		transportCalc: function(ships,rank) {
			rank = rank || 'S';
			let tp = 0;
			for (let ship of ships) {
				if (!ship) continue;
				tp += 3;
				for (let item of ship.items) {
					if (item <= 0) continue;
					let eq = CHDATA.gears['x'+item];
					let eqd = EQDATA[eq.masterId];
					if (eqd.type == DRUM) tp += 3.5;
					if (eqd.type == LANDINGCRAFT) tp += 5.5;
				}
			}
			if (rank == 'S') tp *= 1.5;
			if (rank != 'S' && rank != 'A') return 0;
			return Math.floor(tp);
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Transport operation! Sweep up the front',
				fleetTypes: [1,2],
				bgmMap: 2032,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 10,
				maphp: {
					3: { 1: 440},
					2: { 1: 440},
					1: { 1: 400},
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 80,
				},
				giveLock: 2,
				checkLock: [3],
				nodes: {
					'Start': {
						type: 0,
						x: 100,
						y: 195,
						routeC: function(ships) {
							if (ships.escort.aBB >= 2) return 'A';
							if (ships.escort.SS + ships.escort.SSV >= 2) return 'A';
							return 'B';
						},
					},
					'A': {
						type: 1,
						x: 164,
						y: 136,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'C',
					},
					'B': {
						type: 3,
						x: 225,
						y: 244,
						routeS: ['C','E'],
					},
					'C': {
						type: 1,
						x: 253,
						y: 135,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
					},
					'D': {
						type: 2,
						x: 348,
						y: 89,
						resource: 2,
						amount: [50],
						route: 'F',
					},
					'E': {
						type: 1,
						x: 370,
						y: 283,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 3) return 'F';
							if (ships.aCV >= 4) return 'F';
							if (ships.escort.CLT >= 2) return 'F';
							return 'H';
						},
					},
					'F': {
						type: 1,
						x: 458,
						y: 133,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 1) return 'H';
							if (ships.CLT + ships.escort.CLT >= 2) return 'H';
							if (ships.aCV >= 3) return 'H';
							return 'J';
						},
					},
					'G': {
						type: 3,
						x: 500,
						y: 321,
						end: true,
					},
					'H': {
						type: 1,
						x: 504,
						y: 234,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'J',
					},
					'I': {
						type: 3,
						x: 558,
						y: 97,
						end: true,
					},
					'J': {
						type: 1,
						x: 616,
						y: 169,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true,
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Battle of Cornehaikara',
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 5,
				bgmNB: 5,
				bossnode: 11,
				transport: 'J',
				maphp: {
					3: { 1: 320},
					2: { 1: 200},
					1: { 1: 100},
				},
				giveLock: 2,
				checkLock: [3],
				additionalChecks: function(ships,errors) {
					if (SHIPDATA[ships.ids[0]].type != 'CL') errors.push('Flagship must be CL');
					if (ships.DD < ships.total-1) errors.push('Non-flag must be DD');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 175,
						y: 176,
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 284,
						y: 223,
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 2) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 304,
						y: 142,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 364,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G'
					},
					'D': {
						type: 1,
						x: 365,
						y: 186,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 4) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 399,
						y: 117,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'H'
					},
					'F': {
						type: 1,
						x: 476,
						y: 192,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 498,
						y: 279,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 510,
						y: 142,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 2) return 'I';
							if (Math.random() < .5) return 'I';
							if (Math.random() < .6) return 'F';
							return 'K';
						}
					},
					'I': {
						type: 3,
						x: 546,
						y: 266,
						route: 'J'
					},
					'J': {
						type: 2,
						x: 592,
						y: 257,
						resource: 1,
						amount: [0],
						route: 'K'
					},
					'K': {
						type: 1,
						x: 619,
						y: 158,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Weigh anchor! Maritime transport fleet',
				fleetTypes: [3],
				bgmMap: 2032,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 11,
				transport: 'G',
				maphp: {
					3: { 1: 800},
					2: { 1: 500},
					1: { 1: 300},
				},
				giveLock: 2,
				checkLock: [3],
				nodes: {
					'Start': {
						type: 0,
						x: 115,
						y: 215,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 241,
						y: 143,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 243,
						y: 269,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 306,
						y: 195,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB) return 'E';
							if (ships.AV + ships.escort.AV || ships.LHA + ships.escort.LHA || ships.DD + ships.escort.DD >= 5) return 'D';
							return (Math.random() < .5)? 'D': 'E';
						}
					},
					'D': {
						type: 1,
						x: 377,
						y: 161,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 388,
						y: 256,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 396,
						y: 320,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'G': {
						type: 2,
						x: 442,
						y: 262,
						resource: 1,
						amount: [0],
						route: 'I'
					},
					'H': {
						type: 1,
						x: 483,
						y: 179,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						routeL: { 100: 'K', 0: 'J' }
					},
					'I': {
						type: 3,
						x: 483,
						y: 252,
						route: 'H'
					},
					'J': {
						type: 3,
						x: 579,
						y: 145,
						end: true
					},
					'K': {
						type: 1,
						x: 618,
						y: 212,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The Western line! Carrier task force deployment',
				fleetTypes: [1,2,3],
				bgmMap: 2030,
				bgmDN: 39,
				bgmNN: 39,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 15,
				maphp: {
					3: { 1: 680},
					2: { 1: 570},
					1: { 1: 440},
				},
				finalhp: {
					3: 130,
					2: 130,
					1: 160,
				},
				giveLock: 3,
				checkLock: [2],
				debuffCheck: function(debuff) {
					return (debuff.J && debuff.M);
				},
				nodes: {
					'Start': {
						type: 0,
						x: 625,
						y: 99,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'A';
							return 'D';
						}
					},
					'A': {
						type: 3,
						x: 647,
						y: 234,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 563,
						y: 290,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445) || ships.CT >= 2) return 'F';
							if (isShipInList(ships.ids,460) && ships.CT) return 'F';
							return (Math.random() < .5)? 'C' : 'F';
						}
					},
					'C': {
						type: 1,
						x: 535,
						y: 207,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 512,
						y: 124,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 454,
						y: 204,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 410,
						y: 312,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 399,
						y: 124,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'H'
					},
					'H': {
						type: 1,
						x: 318,
						y: 173,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,441) || isShipInList(ships.ids,442) || isShipInList(ships.ids,443)) return 'J';
							return (Math.random() < .5)? 'I' : 'J';
						}
					},
					'I': {
						type: 1,
						x: 303,
						y: 297,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 273,
						y: 97,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function(ships) {
							if (ships[0].HP <= 0) CHDATA.event.maps[4].debuff.J = true;
						},
						route: 'K'
					},
					'K': {
						type: 3,
						x: 204,
						y: 246,
						routeS: ['M','N']
					},
					'L': {
						type: 3,
						x: 158,
						y: 116,
						end: true
					},
					'M': {
						type: 1,
						x: 122,
						y: 285,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function(ships) {
							if (ships[0].HP <= 0) CHDATA.event.maps[4].debuff.M = true;
						},
						end: true
					},
					'N': {
						type: 1,
						x: 119,
						y: 180,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 100: 'O', 0: 'L' }
					},
					'O': {
						type: 1,
						x: 76,
						y: 112,
						debuffAmount: 20,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Overcome! Nightbattle of Vanilla Gulf!',
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 55,
				bgmNB: 55,
				bossnode: 14,
				parts: {
					1: {
						maphp: {
							3: { 1: 360},
							2: { 1: 240},
							1: { 1: 120},
						},
						transport: 'K',
					},
					2: {
						maphp: {
							3: { 1: 1060},
							2: { 1: 1000},
							1: { 1: 720},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 255,
					2: 255,
					1: 255,
				},
				debuffCheck: function(debuff) {
					if (CHDATA.event.maps[5].part != 2) return false;
					return (debuff.imp >= 15);
				},
				additionalChecks: function(ships,errors) {
					if (SHIPDATA[ships.ids[0]].type != 'CL') errors.push('Flagship must be CL');
					if (ships.DD < 1) errors.push('Min 1 DD');
					if (ships.CL > 2) errors.push('Max 2 CL');
					if (ships.CA + ships.CAV + ships.CLT + ships.CT > 1) errors.push('Max 1 CA, CAV, CLT, or CT');
					if (ships.CL + ships.DD + ships.CA + ships.CAV + ships.CLT + ships.CT < ships.total) errors.push('Only DD, CL, CA, CAV, CLT, CT');
				},
				reward: {
					'ships': [455],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 193,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 257,
						y: 193,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 294,
						y: 287,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,43)) return 'E';
							return 'D';
						}
					},
					'C': {
						type: 3,
						x: 333,
						y: 134,
						routeC: function(ships) {
							if (isShipInList(ships.ids,43)) {
								let num = isShipInList(ships.ids,54) + isShipInList(ships.ids,459);
								if (num >= 2) return 'G';
								if (num == 1) return 'E';
							}
							return 'F';
						}
					},
					'D': {
						type: 1,
						x: 366,
						y: 320,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 384,
						y: 248,
						route: 'H'
					},
					'F': {
						type: 1,
						x: 396,
						y: 83,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,43)) return 'G';
							return 'I';
						}
					},
					'G': {
						type: 1,
						x: 459,
						y: 154,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 462,
						y: 281,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						debuffGive: function(ships) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 510,
						y: 117,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 512,
						y: 233,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'K': {
						type: 2,
						x: 606,
						y: 267,
						resource: 1,
						amount: [0],
						route: 'L'
					},
					'L': {
						type: 1,
						x: 651,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function(ships) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						routeL: { 100: 'N', 0: 'M' }
					},
					'M': {
						type: 3,
						x: 662,
						y: 158,
						end: true
					},
					'N': {
						type: 1,
						x: 604,
						y: 137,
						debuffAmount: 20,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						debuffGive: function(ships) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	34: {
		name: 'Spring 2016',
		date: '2016-05-02',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/2qArUXu.png',
		bannerImgAlt: 'https://i.imgur.com/6zdOwyN.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Secure the Frontline Naval Superiority!',
				fleetTypes: [0],
				bgmMap: 2034,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 10,
				maphp: {
					3: { 1: 450 },
					2: { 1: 450 },
					1: { 1: 440 },
				},
				finalhp: {
					3: 90,
					2: 90,
					1: 90,
				},
				giveLock: 1,
				checkLock: [2,3,4],
			}
		}
	},


	35: {
		name: 'Summer 2016',
		date: '2016-08-12',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://kure.kancollewiki.net/images/a/af/2016SummerEventBanner.png',
		bannerImgAlt: 'http://kure.kancollewiki.net/images/4/4e/2016SummerEventBannerAlt.png',
		transportCalc: function(ships,rank) {
			rank = rank || 'S';
			let tp = 0;
			const tpObj = {
				"DD": 5,
				"CL": 2,
				"CT": 6,
				"CAV": 4,
				"BBV": 7,
				"AV": 9,
				"LHA": 12,
				"AO": 15,
				"AS": 7,
			};
			for (let ship of ships) {
				if (!ship) continue;
				const stype = SHIPDATA[ship.masterId].type;
				if (tpObj[stype]) tp += tpObj[stype];
				for (let item of ship.items) {
					if (item <= 0) continue;
					let eq = CHDATA.gears['x'+item];
					let eqd = EQDATA[eq.masterId];
					if (eqd.type == DRUM) tp += 5;
					if (eqd.type == LANDINGCRAFT) tp += 8;
					if (eqd.type == RATION) tp += 1;
					if (eqd.type == LANDINGTANK) tp += 2;
				}
			}
			tp = Math.floor(tp);
			if (rank == 'A') tp *= 0.7;
			if (rank != 'S' && rank != 'A') return 0;
			return Math.floor(tp);
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Patrol off Buntan',
				fleetTypes: [0],
				bgmMap: 2431,
				bgmDN: 70,
				bgmNN: 70,
				bgmDB: 71,
				bgmNB: 71,
				bossnode: 9,
				maphp: {
					3: { 1: 900 },
					2: { 1: 700 },
					1: { 1: 550 },
				},
				finalhp: {
					3: 180,
					2: 140,
					1: 110,
				},
				giveLock: 1,
				checkLock: [2,3],
				additionalChecks: function(ships,errors) {
					if (ships.CV || ships.BB || ships.CVB || ships.BBV ) errors.push('No CV(B) or BB(V) allowed.');
				},
				nodes: {
					'Start' : {
						type: 0,
						x: 613,
						y: 97,

						routeC: function(ships){
							if (ships.DD < 2 || (ships.DD + ships.CL <= 2) || ships.CVL >= 3) return 'A';
							else return 'B';
						}
					},
					'A' : {
						type: 1,
						x: 675,
						y: 231,
						compDiff:{
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						route : 'C',
					},
					'B' : {
						type: 1,
						x: 581,
						y: 190,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							if (ships.speed == 5 || (ships.FBB && ships.FBB + ships.CVL === 1)
								|| 6 - (ships.DD + ships.CL + ships.CLT + ships.CT) < 2 ) return 'E';
							else if (ships.speed == 10 && ships.FBB == 0 && ships.CL > 0) return 'D';
							else return 'C';
						}
					},
					'C' : {
						type: 1,
						x: 593,
						y: 311,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route : 'F',
					},
					'D' : {
						type: 3,
						x: 518,
						y: 261,
						route: 'F',
					},
					'E' : {
						type: 1,
						x: 464,
						y: 190,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						route : 'F',
					},
					'F' : {
						type: 1,
						x: 414,
						y: 304,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						route : 'G',
					},
					'G' : {
						type: 1,
						x: 284,
						y: 333,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4']
						},
						routeL : {100:"I",0:"H"},
					},
					'H': {
						type: 3,
						x: 218,
						y: 247,
						end: true,
					},
					'I': {
						type: 1,
						x: 170,
						y: 310,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
						end: true,
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'The Second Battle of Endau',
				fleetTypes: [0],
				bgmMap: 2431,
				bgmDN: 71,
				bgmNN: 71,
				bgmDB: 72,
				bgmNB: 72,
				bossnode: 13,
				transport: 'J',
				maphp: {
					3: { 1: 400},
					2: { 1: 340},
					1: { 1: 280},
				},
				giveLock: 2,
				checkLock: [1,3],
				nodes:{
					'Start':{
						type: 0,
						x: 546,
						y: 79,
						routeC: function(ships){
							const hasSendai = isShipInList(ships.ids,54)
							let hasHistoricalFubuki = false;
							[9,10,32].forEach( mid => {
								if (isShipInList(ships.ids,mid)) { hasHistoricalFubuki = true; }
							});
							const CAVflag = (hasSendai && hasHistoricalFubuki) || (ships.AV);
							if (ships.aBB || ships.aCV) return 'C';
							// jesus christ
							else if ((ships.DD > 2 && ships.total > 3) && !(ships.CLT && ships.CAV) && (ships.CAV ? CAVflag : true ) 
								&& (ships.AV + ships.CLT < 3) && (ships.DD + ships.CL * 2 >= 4) && (ships.AV < 2)
								&& (ships.CLT + ships.CL < 3)) return 'F';
							else return 'C';
						},
					},
					'A': {
						type: 1,
						x: 679,
						y: 201,
						route: 'B',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'B':{
						type: 4,
						x: 635,
						y: 263,
						route: 'E',
						resource: 1,
					},
					'C':{
						type: 3,
						x: 613,
						y: 137,
						routeS: ['D','A'],
					},
					'D': {
						type: 1,
						x: 587,
						y: 219,
						route: 'E',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'E': {
						type: 1,
						x: 565,
						y: 299,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6']
						},
					},
					'F': {
						type: 1,
						x: 520,
						y: 162,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6']
						},
					},
					'G': {
						type: 1,
						x: 495,
						y: 231,
						route: 'H',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'H': {
						type: 1,
						x: 419,
						y: 167,
						route: 'I',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'I': {
						type: 1,
						x: 340,
						y: 191,
						route: 'J',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeL: {100:"J",0:"L"},
					},
					"J": {
						type: 2,
						x: 313,
						y: 280,
						resource: 1,
						amount: [0],
						routeL: {100:"M",0:"0"},
					},
					"K": {
						type: 3,
						x: 403,
						y: 311,
						end: true
					},
					"L": {
						type: 3,
						x: 275,
						y: 122,
						end: true
					},
					"M": {
						type: 1,
						x: 401,
						y: 255,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
				
			},
			3: {
				name: 'E-3',
				nameT: 'The Second Naval Battle of Malaya',
				fleetTypes: [1,2],
				bgmMap: 2431,
				bgmDN: 71,
				bgmNN: 71,
				bgmDB: 72,
				bgmNB: 72,
				bossnode: 10,
				maphp: {
					3: { 1: 4200 },
					2: { 1: 3600 },
					1: { 1: 3000 },
				},
				finalhp: {
					3: 644,
					2: 544,
					1: 444,
				},
				giveLock: 3,
				checkLock: [1,2],
				debuffCheck: function(debuff) {
					return (debuff.A && debuff.D);
				},
				nodes:{
					'Start':{
						type: 0,
						x: 656,
						y: 83,
						route: 'B',
					},
					'A':{
						type: 1,
						x: 658,
						y: 241,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						route: 'C',
						debuffGive: function(efleet,ffleet) {
							let found = true;
							ffleet.forEach(fleet => {
								fleet.ships.forEach(ship => {
									if (ship.HPprev != ship.HP) found = false;
								});
							});
							if (found) CHDATA.event.maps[3].debuff.A = true;
						},
					},
					'B':{
						type: 1,
						x: 641,
						y: 162,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							var historicalCount = 0;
							var historicalList = [78,79,124,125,70,120,69,9,10,32,23,113];
							historicalList.forEach(id => {
								if (isShipInList(ships.ids,id)) historicalCount++;
								if (isShipInList(ships.escort.ids,id)) historicalCount++;
							});
							if (CHDATA.fleets.combined == 1 || historicalCount > 6) return 'C';
							else if (ships.speed == 5) return 'A';
							else return 'C';
						},
					},
					'C':{
						type: 1,
						x: 583,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeC: function(ships){
							var historicalCount = 0;
							var historicalList = [78,79,124,125,70,120,69,9,10,32,23,113];
							historicalList.forEach(id => {
								if (isShipInList(ships.ids,id)) historicalCount++;
								if (isShipInList(ships.escort.ids,id)) historicalCount++;
							});
							if (historicalCount > 6) return 'G'
							else if (historicalCount > 2 && isShipInList(ships.ids,78) && isShipInList(ships.ids,79)) return 'E';
							else return 'D';
						},
					},
					'D':{
						type: 1,
						x: 557,
						y: 295,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						routeC: function(ships){
							var mainFleetIds = ships.ids.slice(0,5);
							if (isShipInList(ships.ids,460)) return 'G';
							else if (isShipInList(ships.ids,131) && isShipInList(ships.ids,143) && isShipInList(ships.escorts.ids,171)) 
								{ return 'F'; }
							else if (ships.CV + ships.CVB == 4) return 'F';
							else return 'G';
						},
						debuffGive: function(efleet,ffleet) {
							let found = true;
							ffleet.forEach(fleet => {
								fleet.ships.forEach(ship => {
									if (ship.HPprev != ship.HP) found = false;
								});
							});
							if (found) CHDATA.event.maps[3].debuff.D = true;
						},
					},
					'E':{
						type: 4,
						resource: 1,
						x: 538,
						y: 149,
						route: 'G',
					},
					'F':{
						type: 4,
						resource: 1,
						x: 501,
						y: 331,
						route: 'G',
					},
					'G' : {
						type: 1,
						x: 471,
						y: 202,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeL : {100:"H",0:"I"},
					},
					'H' : {
						type: 1,
						x: 439,
						y: 275,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						route : "J",
						debuffAmount: 23,
					},
					'I':{
						type: 3,
						x: 374,
						y: 149,
						end: true,
					},
					'J':{
						type: 1,
						x: 369,
						y: 340,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
			},
			4:{
				name: 'E-4',
				nameT: 'Night Battle of Malacca Strait (Placeholder)',
				fleetTypes: [0],
				bgmMap: 17,
				bgmDN: 55,
				bgmNN: 55,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 4,
				maphp: {
					3: { 1: 1330 },
					2: { 1: 4000 },
					1: { 1: 4000 },
				},
				finalhp: {
					3: 500,
					2: 400,
					1: 400,
				},
				nodes:{
					'Start':{
						type: 0,
						x: 273,
						y: 93,
						route: 'A',
					},
					'A':{
						type: 1,
						x: 196,
						y: 106,
						route: 'B',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6']
						},
					},
					'B':{
						type: 1,
						x: 145,
						y: 152,
						route: 'C',
						subonly: true,
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6']
						},
					},
					'C':{
						type: 1,
						x: 208,
						y: 189,
						route: 'D',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5']
						},
					},
					'D':{
						type: 1,
						x: 119,
						y: 238,
						boss: true,
						end: true,
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3']
						},
						compDiffF:{
							3:['Hard F1','Hard F2']
						},
					},
				},
			},
		}
	},
}

function getMapHP(worldnum,mapnum,diff) {
	if (!CHDATA.event) return undefined;
	if (!diff) return undefined;
	var mdata = MAPDATA[worldnum].maps[mapnum];
	var hqtiers = Object.keys(mdata.maphp[diff]);
	var hqtier = 0;
	for (var i=0; i<hqtiers.length; i++) {
		if (CHDATA.player.level >= hqtiers[i] && hqtier < hqtiers[i]) hqtier = hqtiers[i];
	}
	return mdata.maphp[diff][hqtier];
}
function isShipInList(ships,basemid) {
	var ship = SHIPDATA[basemid];
	while(ship) {
		if (ships.indexOf(basemid)!=-1) return true;
		if (!ship.next) break;
		basemid = ship.next;
		ship = SHIPDATA[ship.next];
	}
	return false;
}

function mapChangePart(worldnum,mapnum,part) {
	if (!MAPDATA[worldnum].maps[mapnum].parts) return;
	for (var key in MAPDATA[worldnum].maps[mapnum].parts[part]) {
		MAPDATA[worldnum].maps[mapnum][key] = MAPDATA[worldnum].maps[mapnum].parts[part][key];
	}
}
