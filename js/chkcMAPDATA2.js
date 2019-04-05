var MAPDATA = {
	20: {
		name: 'Phase 1 Classic',
		date: '2018-08-15',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'assets/maps/20/banner1.png',
		bannerImgAlt: 'assets/maps/20/banner2.png',
		allowLBAS: true,
		unlockDefault: 32,
		transportCalc: function() { return 1; },
		maps: {
			1: {
				name: '1-1',
				nameT: 'Sea in Front of the Naval Base',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 3,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 3,
						x: 128,
						y: 142,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 248,
						y: 172,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'C': .5 }
					},
					'B': {
						type: 1,
						x: 373,
						y: 90,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'C': {
						type: 1,
						x: 352,
						y: 246,
						compDiff: {
							2: [1,2,3,4]
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: '1-2',
				nameT: 'Sea around the Nansei Islands',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 2,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 1,
						x: 332,
						y: 122,
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 486,
						y: 94,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'C': {
						type: 2,
						x: 283,
						y: 232,
						resource: 2,
						amount: [10,15,20],
						route: 'D'
					},
					'D': {
						type: 1,
						x: 401,
						y: 309,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			3: {
				name: '1-3',
				nameT: 'Coastal Refinery Zone',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 117,
				bgmNB: 117,
				bossnode: 7,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 142,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 292,
						y: 88,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'B': {
						type: 4,
						x: 237,
						y: 241,
						resource: 2,
						loseMax: .2,
						routeR: { 'C': .3, 'E': .7 }
					},
					'C': {
						type: 2,
						x: 398,
						y: 225,
						resource: 1,
						amount: [10,15,30],
						route: 'F'
					},
					'D': {
						type: 2,
						x: 484,
						y: 162,
						resource: 1,
						amount: [10,15,25,30],
						routeR: { 'G': .5, 'C': .5 }
					},
					'E': {
						type: 1,
						x: 337,
						y: 321,
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 462,
						y: 335,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'G': {
						type: 1,
						x: 614,
						y: 312,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: '1-4',
				nameT: 'Hold the Line at the Nansei Islands',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 117,
				bgmNN: 2,
				bgmDB: 12,
				bgmNB: 12,
				bossnode: 6,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						routeR: { 'A': .33, 'B': .33, 'G': .34 }
					},
					'A': {
						type: 1,
						x: 235,
						y: 82,
						compDiff: {
							2: [1,2,3]
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 275,
						y: 196,
						compDiff: {
							2: [1,2,3]
						},
						route: 'C'
					},
					'C': {
						type: 2,
						x: 383,
						y: 124,
						resource: 3,
						amount: [10,15,20],
						routeR: { 'D': .5, 'E': .5 }
					},
					'D': {
						type: 2,
						x: 559,
						y: 93,
						resource: 4,
						amount: [10,15,20],
						route: 'F'
					},
					'E': {
						type: 1,
						x: 500,
						y: 190,
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 655,
						y: 182,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'G': {
						type: 2,
						x: 263,
						y: 261,
						resource: 2,
						amount: [10,15,20],
						route: 'H'
					},
					'H': {
						type: 2,
						x: 393,
						y: 257,
						resource: 3,
						amount: [10,15,20],
						route: 'I'
					},
					'I': {
						type: 1,
						x: 521,
						y: 275,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'F': .3, 'J': .7 }
					},
					'J': {
						type: 1,
						x: 700,
						y: 312,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			5: {
				name: '1-5',
				nameT: 'Adjacent Seas of the Naval Base',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 7,
				bgmNN: 7,
				bgmDB: 37,
				bgmNB: 37,
				bossnode: 9,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 154,
						y: 156,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 312,
						y: 88,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							1: ['HQ 1+'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 511,
						y: 101,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							40: ['HQ 40+ 1','HQ 40+ 2'],
							1: ['HQ 1+'],
						},
						routeC: function(ships) {
							if (ships.total <= 4) return 'C';
							return (Math.random() < .5)? 'C' : 'D';
						}
					},
					'C': {
						type: 1,
						x: 587,
						y: 181,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							40: ['HQ 40+'],
							1: ['HQ 1+'],
						},
						routeC: function(ships) {
							if (ships.FBB + ships.BB) return 'F';
							if (ships.SS + ships.SSV) return 'F';
							if (ships.CL >= 3) return 'F';
							if (ships.total >= 5) return 'F';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 453,
						y: 211,
						compDiff: {
							2: [1]
						},
						routeC: function(ships) {
							if (ships.total >= 5) return 'H';
							return (Math.random() < .5)? 'H' : 'I';
						}
					},
					'E': {
						type: 3,
						x: 530,
						y: 273,
						routeC: function(ships) {
							if (ships.CVL == 1 || ships.AV == 1 || ships.LHA == 1 || ships.CAV == 1) return 'I';
							return (Math.random() < .5)? 'G' : 'I';
						}
					},
					'F': {
						type: 1,
						x: 594,
						y: 295,
						compDiff: {
							2: [1]
						},
						end: true
					},
					'G': {
						type: 1,
						x: 486,
						y: 349,
						compDiff: {
							2: [1]
						},
						end: true
					},
					'H': {
						type: 3,
						x: 292,
						y: 215,
						end: true
					},
					'I': {
						type: 1,
						x: 292,
						y: 301,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							40: ['HQ 40+'],
							1: ['HQ 1+'],
						},
						end: true,
						boss: true
					},
				}
			},
			6: {
				name: '1-6',
				nameT: 'Naval Base Adjacent Sea Route',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 37,
				bgmNN: 37,
				bgmDB: 12,
				bgmNB: 12,
				bossnode: 14,
				maphp: { 2: { 1: 7 } },
				finalhp: { 2: 1 },
				transport: 'N',
				additionalChecks(ships,errors) {
					if (ships.BB + ships.FBB) errors.push('No (F)BB');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
					if (ships.CLT) errors.push('No CLT');
					if (ships.SS + ships.SSV) errors.push('No SS(V)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 118,
						y: 245,
						routeC: function(ships) {
							if (ships.CA + ships.CAV + ships.BBV + ships.CVL) return 'C';
							if (ships.DD + ships.DE >= 4) return 'A';
							return 'C';
						}
					},
					'A': {
						type: 3,
						x: 221,
						y: 286,
						route: 'E'
					},
					'B': {
						type: 1,
						x: 238,
						y: 248,
						compDiff: {
							2: [1,1,2,2,3,4,5]
						},
						route: 'N'
					},
					'C': {
						type: 1,
						x: 280,
						y: 210,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'H'
					},
					'D': {
						type: 1,
						x: 279,
						y: 163,
						aironly: true,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'N'
					},
					'E': {
						type: 1,
						x: 318,
						y: 328,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 335,
						y: 288,
						aironly: true,
						compDiff: {
							2: [1,2,3,4,5,6,7,8]
						},
						route: 'B'
					},
					'G': {
						type: 2,
						x: 404,
						y: 344,
						resource: 2,
						amount: [20],
						routeC: function(ships) {
							if (ships.CL == 1 && ships.DD + ships.DE == 5) return 'F';
							return (Math.random() < .75)? 'F' : 'K'
						}
					},
					'H': {
						type: 3,
						x: 432,
						y: 210,
						route: 'K'
					},
					'I': {
						type: 1,
						x: 432,
						y: 167,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5]
						},
						route: 'D'
					},
					'J': {
						type: 1,
						x: 505,
						y: 101,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'D'
					},
					'K': {
						type: 1,
						x: 565,
						y: 210,
						compDiff: {
							2: [1,2,3,4,5]
						},
						route: 'M'
					},
					'L': {
						type: 1,
						x: 564,
						y: 167,
						aironly: true,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'I'
					},
					'M': {
						type: 2,
						x: 677,
						y: 190,
						resource: 1,
						amount: [40],
						routeC: function(ships) {
							if (ships.CVL + ships.BBV + ships.CA + ships.CAV >= 3 || ships.DD + ships.DE <= 2) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1,3),{ 30: 'J', 29.99: 'L' });
						}
					},
					'N': {
						type: 2,
						x: 121,
						y: 194,
						resource: 1,
						amount: [300,500,700,1000],
						dropoff: true,
						end: true
					}
				}
			},
			7: {
				name: '2-1',
				nameT: 'Cam Ranh Peninsula',
				world: 2,
				fleetTypes: [0],
				bgmMap: 14,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 30,
				bgmNB: 30,
				bossnode: 5,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 71,
						y: 227,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 211,
						y: 318,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'D': .5 }
					},
					'B': {
						type: 2,
						x: 173,
						y: 254,
						resource: 3,
						amount: [10,20,25,30],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 122,
						y: 178,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 2,
						x: 244,
						y: 187,
						resource: 7,
						amount: [1],
						routeC: function(ships) {
							if (ships.CAV + ships.CV + ships.CVL + ships.aBB + ships.AV) return (Math.random() < .7)? 'E' : 'F';
							return (Math.random() < .3)? 'E' : 'F';
						}
					},
					'E': {
						type: 1,
						x: 152,
						y: 99,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'F': {
						type: 1,
						x: 342,
						y: 82,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			8: {
				name: '2-2',
				nameT: 'Bashi Island',
				world: 2,
				fleetTypes: [0],
				bgmMap: 14,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 46,
				bgmNB: 46,
				bossnode: 6,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 228,
						routeR: { 'A': .5, 'E': .5 }
					},
					'A': {
						type: 1,
						x: 130,
						y: 163,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'E': .5 }
					},
					'B': {
						type: 2,
						x: 259,
						y: 139,
						resource: 4,
						amount: [5,10,15],
						routeR: { 'C': .5, 'D': .5 }
					},
					'C': {
						type: 2,
						x: 185,
						y: 77,
						resource: 7,
						amount: [1],
						end: true
					},
					'D': {
						type: 1,
						x: 381,
						y: 119,
						compName: 'D/G',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'E': {
						type: 2,
						x: 189,
						y: 241,
						resource: 4,
						amount: [15,20,25,30,35],
						routeC: function(ships) {
							if (ships.CV + ships.CVL + ships.AV) return (Math.random() < .7)? 'F' : 'G';
							return (Math.random() < .3)? 'F' : 'G';
						}
					},
					'F': {
						type: 1,
						x: 381,
						y: 217,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'G': {
						type: 1,
						x: 312,
						y: 316,
						compName: 'D/G',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			9: {
				name: '2-3',
				nameT: 'Eastern Orel Bay',
				world: 2,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1004,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 7,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 228,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 2,
						x: 132,
						y: 161,
						resource: 1,
						amount: [15,20,25,30,35,40,45],
						route: 'B'
					},
					'B': {
						type: 1,
						x: 269,
						y: 76,
						compName: 'B/C',
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 225,
						y: 234,
						compName: 'B/C',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVL + ships.AV) return (Math.random() < .7)? 'D' : 'H';
							return (Math.random() < .5)? 'D' : 'H';
						}
					},
					'D': {
						type: 2,
						x: 307,
						y: 175,
						resource: 2,
						amount: [20,25,30,35,40,45],
						route: 'E'
					},
					'E': {
						type: 2,
						x: 381,
						y: 175,
						resource: 1,
						amount: [15,20,25,30,35,40,45],
						routeC: function(ships) {
							if (ships.AV) return (Math.random() < .7)? 'G' : 'F';
							return (Math.random() < .5)? 'G' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 438,
						y: 68,
						compName: 'F/H/K',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'G': {
						type: 1,
						x: 598,
						y: 115,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'H': {
						type: 1,
						x: 248,
						y: 332,
						compName: 'F/H/K',
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'I': {
						type: 2,
						x: 398,
						y: 271,
						resource: 1,
						amount: [15,20,30,45],
						routeC: function(ships) {
							if (ships.CL) return (Math.random() < .7)? 'J' : 'K';
							return (Math.random() < .5)? 'J' : 'K';
						}
					},
					'J': {
						type: 2,
						x: 476,
						y: 188,
						resource: 2,
						amount: [20,25,30,35,45],
						end: true
					},
					'K': {
						type: 1,
						x: 539,
						y: 268,
						compName: 'F/H/K',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			10: {
				name: '2-4',
				nameT: 'Okinoshima Island',
				world: 2,
				fleetTypes: [0],
				bgmMap: 103,
				bgmDN: 31,
				bgmNN: 2,
				bgmDB: 4,
				bgmNB: 5,
				bossnode: 10,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 228,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 227,
						y: 257,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (Math.random() < .2) return 'F';
							if (ships.CVL) return (Math.random() < .75)? 'K' : 'B';
							return (Math.random() < .5)? 'K' : 'B';
						}
					},
					'B': {
						type: 2,
						x: 144,
						y: 209,
						resource: 2,
						amount: [20,25,30,35,40,50,55,60],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 167,
						y: 145,
						compName: 'C/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 324,
						y: 108,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CL) return (Math.random() < .7)? 'E' : 'G';
							return (Math.random() < .4)? 'E' : 'G';
						}
					},
					'E': {
						type: 2,
						x: 180,
						y: 85,
						resource: 5,
						amount: [1],
						end: true,
					},
					'F': {
						type: 1,
						x: 287,
						y: 167,
						compName: 'C/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'Q'
					},
					'G': {
						type: 1,
						x: 418,
						y: 141,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV) return (Math.random() < .9)? 'H' : 'I';
							return (Math.random() < .4)? 'H' : 'I';
						}
					},
					'Q': { //this is G when it's blue
						type: 3,
						x: 418,
						y: 141,
						routeC: function(ships) {
							if (ships.CV) return (Math.random() < .9)? 'H' : 'I';
							return (Math.random() < .4)? 'H' : 'I';
						}
					},
					'H': {
						type: 1,
						x: 537,
						y: 92,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 515,
						y: 224,
						compName: 'I/O',
						compDiff: {
							2: [1,2,3]
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 664,
						y: 247,
						compDiff: {
							2: [1,2,3,4,5]
						},
						end: true,
						boss: true
					},
					'K': {
						type: 2,
						x: 374,
						y: 238,
						resource: 1,
						amount: [20,25,30,35,40,50,55,60],
						route: 'L'
					},
					'L': {
						type: 1,
						x: 412,
						y: 323,
						compName: 'C/F/L',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD) return (Math.random() < .7)? 'M' : 'O';
							return (Math.random() < .4)? 'M' : 'O';
						}
					},
					'M': {
						type: 2,
						x: 311,
						y: 322,
						resource: 6,
						amount: [1],
						route: 'N'
					},
					'N': {
						type: 1,
						x: 218,
						y: 315,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'O': {
						type: 1,
						x: 528,
						y: 309,
						compName: 'I/O',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'J': .4, 'P': .6 }
					},
					'P': {
						type: 1,
						x: 709,
						y: 312,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			11: {
				name: '2-5',
				nameT: 'Okinoshima Sea',
				world: 2,
				fleetTypes: [0],
				bgmMap: 1003,
				bgmDN: 11,
				bgmNN: 31,
				bgmDB: 27,
				bgmNB: 1002,
				bossnode: 12,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 145,
						y: 248,
						routeC: function(ships) {
							if (ships.aCV) return 'B';
							if (ships.AV >= 2) return 'B';
							if (ships.DD >= 3 && ships.DD + ships.CL >= 4) return 'A';
							if (ships.SS + ships.SSV >= 4) return 'A';
							let numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrumShips++;
										break;
									}
								}
							}
							if (numDrumShips >= 2) return 'A';
							if (ships.aBB) return 'B';
							return (Math.random() < .7)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 250,
						y: 147,
						compDiff: {
							2: ['HQ100+ 1','HQ100+ 2']
						},
						compHQ: {
							100: ['HQ100+ 1','HQ100+ 2'],
							70: ['HQ70+ 1','HQ70+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'C';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 264,
						y: 329,
						compDiff: {
							2: ['HQ90+ 1','HQ90+ 2']
						},
						compHQ: {
							90: ['HQ90+ 1','HQ90+ 2'],
							60: ['HQ60+ 1','HQ60+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'F';
							if (ships.CV + ships.CVB >= 3) return 'F';
							if (ships.CV + ships.CVB >= 2 && ships.CVL) return 'F';
							if (ships.FBB == 2 || ships.FBB == 3) return 'F';
							if (ships.BB == 2) return 'F';
							if (ships.BBV >= 2) return 'F';
							if (ships.DD >= 2 && ships.aBB <= 1 && ships.CV + ships.CVB <= 1) return 'E';
							return (Math.random() < .75)? 'E' : 'F';
						}
					},
					'C': {
						type: 3,
						x: 179,
						y: 92,
						end: true
					},
					'D': {
						type: 1,
						x: 396,
						y: 149,
						compDiff: {
							2: ['HQ90+ 1','HQ90+ 2']
						},
						compHQ: {
							90: ['HQ90+ 1','HQ90+ 2'],
							60: ['HQ60+'],
							1: ['HQ1+'],
						},
						routeC: function(ships) {
							if (ships.AV) return 'H';
							if (ships.DD >= 3 && ships.DD + ships.CL >= 4) return 'H';
							if (ships.aBB <= 0) return 'H';
							return (Math.random() < .5)? 'G' : 'H';
						}
					},
					'E': {
						type: 1,
						x: 391,
						y: 243,
						compDiff: {
							2: ['HQ80+ 1','HQ80+ 2']
						},
						compHQ: {
							80: ['HQ80+ 1','HQ80+ 2'],
							60: ['HQ60+ 1','HQ60+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'I';
							if (ships.DD >= 2 && ships.CL == 1) return 'H';
							if (ships.DD >= 2 && ships.CA == 2) return 'H';
							if (ships.DD >= 2 && ships.CAV == 2) return 'H';
							return (Math.random() < .4)? 'H' : 'I';
						}
					},
					'F': {
						type: 3,
						x: 395,
						y: 342,
						end: true
					},
					'G': {
						type: 2,
						x: 507,
						y: 109,
						resource: 1,
						amount: [50],
						end: true
					},
					'H': {
						type: 3,
						x: 519,
						y: 201,
						routeL: { 33: 'L', 31: 'J' }
					},
					'I': {
						type: 1,
						x: 520,
						y: 299,
						compDiff: {
							2: ['HQ100+']
						},
						compHQ: {
							100: ['HQ100+'],
							70: ['HQ70+'],
							50: ['HQ50+'],
							1: ['HQ1+'],
						},
						showLoSPlane: 'L',
						routeC: function(ships) {
							if (checkELoS33(getELoS33(1,1),{ 46: 'L', 37: 'X' }) == 'L') return 'L';
							return (Math.random() < .5)? 'H' : 'K';
						}
					},
					'J': {
						type: 1,
						x: 589,
						y: 126,
						compDiff: {
							2: ['HQ80+']
						},
						compHQ: {
							80: ['HQ80+'],
							50: ['HQ50+'],
							1: ['HQ1+'],
						},
						end: true
					},
					'K': {
						type: 2,
						x: 573,
						y: 320,
						resource: 3,
						amount: [50],
						end: true
					},
					'L': {
						type: 1,
						x: 641,
						y: 215,
						compDiff: {
							2: ['HQ100+']
						},
						compDiffF: {
							2: ['HQ100+ F']
						},
						compHQ: {
							100: ['HQ100+'],
							70: ['HQ70+'],
							1: ['HQ1+'],
						},
						compHQF: {
							100: ['HQ100+ F'],
							70: ['HQ70+ F'],
							1: ['HQ1+ F'],
						},
						end: true,
						boss: true
					},
				}
			},
			12: {
				name: '3-1',
				nameT: 'The Moray Sea',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 19,
				bgmNN: 19,
				bgmDB: 2,
				bgmNB: 19,
				bossnode: 5,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						routeR: { 'A': .5, 'D': .5 }
					},
					'A': {
						type: 1,
						x: 156,
						y: 162,
						compName: 'A/D',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'C': .5 }
					},
					'B': {
						type: 2,
						x: 162,
						y: 68,
						resource: 3,
						amount: [35,150],
						end: true
					},
					'C': {
						type: 1,
						x: 250,
						y: 141,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 1,
						x: 174,
						y: 309,
						compName: 'A/D',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .45, 'F': .55 }
					},
					'E': {
						type: 1,
						x: 265,
						y: 206,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'F': {
						type: 1,
						x: 294,
						y: 308,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			13: {
				name: '3-2',
				nameT: 'The Kis Island',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 29,
				bgmNN: 2,
				bgmDB: 11,
				bgmNB: 11,
				bossnode: 8,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						routeC: function(ships) {
							if (ships.total > ships.DD + ships.CL) return 'A';
							if (ships.CL >= 2) return 'A';
							if (ships.CL && SHIPDATA[ships.ids[0]].type != 'CL') return 'A';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'A': {
						type: 1,
						x: 119,
						y: 134,
						compName: 'A/E',
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 2,
						x: 206,
						y: 85,
						resource: 3,
						amount: [50,100,150],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 325,
						y: 83,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 4,
						x: 205,
						y: 197,
						resource: 1,
						routeR: { 'B': .5, 'F': .5 }
					},
					'E': {
						type: 1,
						x: 182,
						y: 297,
						compName: 'A/E',
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 283,
						y: 301,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .4, 'H': .6 }
					},
					'G': {
						type: 2,
						x: 375,
						y: 163,
						resource: 8,
						amount: [1],
						end: true
					},
					'H': {
						type: 1,
						x: 409,
						y: 253,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			14: {
				name: '3-3',
				nameT: 'The Alfonsinos',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 11,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 7,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 182,
						y: 297,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.aCV <= 1) return 'B';
							return (Math.random() < .5)? 'E' : 'H';
						}
					},
					'B': {
						type: 4,
						x: 223,
						y: 203,
						resource: 1,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 386,
						y: 132,
						compName: 'C/E',
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 484,
						y: 113,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'E': {
						type: 1,
						x: 307,
						y: 261,
						compName: 'C/E',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'F': .5, 'I': .5 }
					},
					'F': {
						type: 4,
						x: 464,
						y: 163,
						route: 'G'
					},
					'G': {
						type: 1,
						x: 589,
						y: 161,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'H': {
						type: 4,
						x: 336,
						y: 315,
						resource: 2,
						route: 'I'
					},
					'I': {
						type: 1,
						x: 486,
						y: 259,
						compDiff: {
							2: [1,2]
						},
						routeR: { 'G': .34, 'J': .33, 'K': .33 }
					},
					'J': {
						type: 2,
						x: 628,
						y: 245,
						resource: 9,
						amount: [1],
						end: true
					},
					'K': {
						type: 2,
						x: 615,
						y: 316,
						resource: 10,
						amount: [1],
						end: true
					},
				}
			},
			15: {
				name: '3-4',
				nameT: 'Throughout the Northern Sea',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 8,
				bgmNN: 4,
				bgmDB: 4,
				bgmNB: 5,
				bossnode: 5,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						routeR: { 'A': .34, 'J': .33, 'K': .33 }
					},
					'A': {
						type: 1,
						x: 144,
						y: 119,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'F': .5 }
					},
					'B': {
						type: 1,
						x: 318,
						y: 64,
						compName: 'B/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 439,
						y: 100,
						resource: 2,
						routeR: { 'D': .5, 'H': .5 }
					},
					'D': {
						type: 1,
						x: 532,
						y: 62,
						compName: 'D/I/N',
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 619,
						y: 107,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'F': {
						type: 1,
						x: 271,
						y: 131,
						compName: 'B/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'G': {
						type: 2,
						x: 394,
						y: 177,
						resource: 4,
						amount: [50,100,150],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 523,
						y: 192,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .5, 'I': .5 }
					},
					'I': {
						type: 1,
						x: 621,
						y: 205,
						compName: 'D/I/N',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'J': {
						type: 1,
						x: 234,
						y: 226,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'F': .5, 'L': .5 }
					},
					'K': {
						type: 4,
						x: 212,
						y: 308,
						resource: 1,
						route: 'L'
					},
					'L': {
						type: 1,
						x: 365,
						y: 308,
						compName: 'B/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'M'
					},
					'M': {
						type: 2,
						x: 491,
						y: 314,
						resource: 9,
						amount: [1],
						routeR: { 'H': .5, 'N': .5 }
					},
					'N': {
						type: 1,
						x: 592,
						y: 295,
						compName: 'D/I/N',
						compDiff: {
							2: [1,2,3]
						},
						route: 'O'
					},
					'O': {
						type: 2,
						x: 703,
						y: 248,
						resource: 10,
						amount: [1],
						end: true
					}
				}
			},
			16: {
				name: '3-5',
				nameT: 'Northern AL Waters',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2033,
				bgmDN: 19,
				bgmNN: 3,
				bgmDB: 13,
				bgmNB: 6,
				bossnode: 11,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 160,
						y: 316,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'A';
							if (ships.aBB >= 2) return 'A';
							if (ships.aBB + ships.CA + ships.CAV >= 3) return 'A';
							if (ships.aCV) return 'A';
							if (ships.CLT) return 'A';
							if (ships.DD >= 5) return 'B';
							if (ships.DD == 4) return (Math.random() < .75)? 'B' : 'A';
							return (Math.random() < .5)? 'B' : 'A';
						}
					},
					'A': {
						type: 1,
						x: 219,
						y: 150,
						compDiff: {
							2: ['HQ100+','HQAll 1','HQAll 2']
						},
						compHQ: {
							100: ['HQ100+','HQAll 1','HQAll 2'],
							1: ['HQ1+','HQAll 1','HQAll 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 4) return 'H';
							if (ships.aCV >= 4) return 'H';
							if (ships.aCV + ships.aBB >= 5) return 'H';
							if (ships.CLT >= 2) return 'C';
							if (ships.aCV >= 2) return 'C';
							if (ships.aBB >= 3) return 'C';
							if (ships.DD >= 2 && ships.CL == 1 && ships.CV + ships.CVB <= 0) return 'E';
							if (ships.CA + ships.CAV >= 2) return 'C';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 430,
						y: 308,
						compDiff: {
							2: ['HQ85+','HQAll']
						},
						compDiffF: {
							2: ['HQ85+ F']
						},
						compDiffC: {
							2: ['HQ85+ F']
						},
						compHQ: {
							85: ['HQ85+','HQAll'],
							1: ['HQ1+','HQAll'],
						},
						compHQF: {
							85: ['HQ85+ F'],
							1: ['HQAll'],
						},
						compHQC: {
							85: ['HQ85+ F'],
							1: ['HQAll'],
						},
						routeC: function(ships) {
							if (ships.aCV + ships.aBB + ships.LHA) return 'E';
							if (ships.CL <= 2) return 'G';
							return (Math.random() < .75)? 'G' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 370,
						y: 92,
						compDiff: {
							2: ['HQ90+ 1','HQ90+ 2','HQAll']
						},
						compHQ: {
							90: ['HQ90+ 1','HQ90+ 2','HQAll'],
							1: ['HQ1+ 1','HQ1+ 2','HQAll'],
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 315,
						y: 271,
						route: 'B'
					},
					'E': {
						type: 1,
						x: 401,
						y: 202,
						compDiff: {
							2: ['HQ85+','HQAll']
						},
						compDiffF: {
							2: ['HQ85+ F']
						},
						compDiffC: {
							2: ['HQ85+ F']
						},
						compHQ: {
							85: ['HQ85+','HQAll'],
							1: ['HQAll'],
						},
						compHQF: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 540,
						y: 116,
						compDiff: {
							2: ['HQ85+ 1','HQ85+ 2']
						},
						compDiffF: {
							2: ['HQ85+ F']
						},
						compDiffC: {
							2: ['HQ85+ F']
						},
						compHQ: {
							85: ['HQ85+ 1','HQ85+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQF: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						routeC: function(ships) {
							if ((ships.LHA && ships.aBB + ships.aCV >= 2) || ships.aBB + ships.aCV >= 4) {
								this.showLoSPlane = null;
								return 'I';
							}
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,4),{ 40: 'K', 35: 'I' });
						}
					},
					'G': {
						type: 1,
						x: 524,
						y: 234,
						compDiff: {
							2: ['HQ100+ 1','HQ100+ 2']
						},
						compDiffF: {
							2: ['HQ100+ F']
						},
						compDiffC: {
							2: ['HQ100+ F']
						},
						compHQ: {
							100: ['HQ100+ 1','HQ100+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQF: {
							100: ['HQ100+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							100: ['HQ100+ F'],
							1: ['HQ1+ F'],
						},
						routeLC: 4,
						routeL: { 28: 'K', 23: 'J' }
					},
					'H': {
						type: 3,
						x: 113,
						y: 163,
						end: true
					},
					'I': {
						type: 2,
						x: 621,
						y: 62,
						resource: 2,
						amount: [50],
						end: true
					},
					'J': {
						type: 3,
						x: 619,
						y: 252,
						end: true
					},
					'K': {
						type: 1,
						x: 643,
						y: 150,
						compDiff: {
							2: ['HQ90+','HQAll']
						},
						compDiffF: {
							2: ['HQ90+ F']
						},
						compDiffC: {
							2: ['HQ90+ F']
						},
						compHQ: {
							90: ['HQ90+','HQAll'],
							1: ['HQ1+','HQAll'],
						},
						compHQF: {
							90: ['HQ90+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							90: ['HQ90+ F'],
							1: ['HQ1+ F'],
						},
						end: true,
						boss: true
					}
				}
			},
			17: {
				name: '4-1',
				nameT: 'Battle of Jam Island',
				world: 4,
				fleetTypes: [0],
				bgmMap: 95,
				bgmDN: 1004,
				bgmNN: 2,
				bgmDB: 8,
				bgmNB: 8,
				bossnode: 4,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 662,
						y: 107,
						routeR: { 'A': .5, 'E': .5 }
					},
					'A': {
						type: 1,
						x: 488,
						y: 97,
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 283,
						y: 97,
						subonly: true,
						compName: 'B/G/H',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'C': .5, 'D': .5 }
					},
					'C': {
						type: 1,
						x: 96,
						y: 109,
						compName: 'C/I',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 1,
						x: 121,
						y: 254,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'E': {
						type: 1,
						x: 559,
						y: 246,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'F';
							return (Math.random() < .5)? 'F' : 'H';
						}
					},
					'F': {
						type: 2,
						x: 397,
						y: 174,
						resource: 1,
						amount: [40,80,120],
						routeR: { 'G': .5, 'I': .5 }
					},
					'G': {
						type: 1,
						x: 258,
						y: 230,
						subonly: true,
						compName: 'B/G/H',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .5, 'I': .5 }
					},
					'H': {
						type: 1,
						x: 456,
						y: 318,
						subonly: true,
						compName: 'B/G/H',
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 313,
						y: 333,
						compName: 'C/I',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			18: {
				name: '4-2',
				nameT: 'Curry Ocean Pacification',
				world: 4,
				fleetTypes: [0],
				bgmMap: 95,
				bgmDN: 30,
				bgmNN: 2,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 4,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 629,
						y: 231,
						routeR: { 'A': .5, 'F': .5 }
					},
					'A': {
						type: 1,
						x: 523,
						y: 179,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'E';
							return (Math.random() < .5)? 'B' : 'E';
						}
					},
					'B': {
						type: 4,
						x: 462,
						y: 103,
						resource: 1,
						lostMax: .2,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 305,
						y: 99,
						subonly: true,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .5, 'H': .5 }
					},
					'D': {
						type: 1,
						x: 112,
						y: 159,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'E': {
						type: 2,
						x: 352,
						y: 200,
						resource: 3,
						amount: [40,80,120],
						route: 'H'
					},
					'F': {
						type: 1,
						x: 527,
						y: 292,
						subonly: true,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .5, 'G': .5 }
					},
					'G': {
						type: 2,
						x: 383,
						y: 334,
						resource: 3,
						amount: [20,40,60],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 235,
						y: 235,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .5, 'I': .5 }
					},
					'I': {
						type: 1,
						x: 167,
						y: 331,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			19: {
				name: '4-3',
				nameT: 'Bombing of Ri Lanka',
				world: 4,
				fleetTypes: [0],
				bgmMap: 95,
				bgmDN: 39,
				bgmNN: 2,
				bgmDB: 10,
				bgmNB: 10,
				bossnode: 9,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 686,
						y: 94,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'A';
							return (Math.random() < .5)? 'F' : 'J';
						}
					},
					'A': {
						type: 1,
						x: 595,
						y: 58,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 2,
						x: 533,
						y: 115,
						resource: 1,
						amount: [30,60,90],
						routeC: function(ships) {
							if (ships.AV + ships.CAV) return 'D';
							return (Math.random() < .5)? 'C' : 'F';
						}
					},
					'C': {
						type: 4,
						x: 452,
						y: 60,
						resource: 2,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 384,
						y: 107,
						subonly: true,
						compName: 'D/F/K',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .5, 'G': .5 }
					},
					'E': {
						type: 2,
						x: 225,
						y: 64,
						resource: 4,
						amount: [50,100,150],
						end: true
					},
					'F': {
						type: 1,
						x: 530,
						y: 262,
						subonly: true,
						compName: 'D/F/K',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CA >= 2) return 'G';
							return (Math.random() < .5)? 'D' : 'K';
						}
					},
					'G': {
						type: 1,
						x: 350,
						y: 265,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'H': .33, 'I': .34, 'L': .33 }
					},
					'H': {
						type: 1,
						x: 293,
						y: 178,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'I': {
						type: 1,
						x: 226,
						y: 282,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'J': {
						type: 1,
						x: 640,
						y: 282,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CAV + ships.AV) return 'K';
							return 'F';
						}
					},
					'K': {
						type: 1,
						x: 528,
						y: 351,
						subonly: true,
						compName: 'D/F/K',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .5, 'L': .5 }
					},
					'L': {
						type: 4,
						x: 255,
						y: 351,
						resource: 1,
						route: 'M'
					},
					'M': {
						type: 1,
						x: 84,
						y: 270,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			20: {
				name: '4-4',
				nameT: 'Battle of Casgadama',
				world: 4,
				fleetTypes: [0],
				bgmMap: 98,
				bgmDN: 12,
				bgmNN: 4,
				bgmDB: 44,
				bgmNB: 44,
				bossnode: 8,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 699,
						y: 102,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 625,
						y: 195,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'F';
							return (Math.random() < .5)? 'B' : 'I';
						}
					},
					'B': {
						type: 4,
						x: 503,
						y: 116,
						resource: 2,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 368,
						y: 169,
						compName: 'C/J',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .3, 'E': .3, 'G': .4 }
					},
					'D': {
						type: 2,
						x: 334,
						y: 112,
						resource: 1,
						amount: [50,100,150],
						end: true
					},
					'E': {
						type: 2,
						x: 190,
						y: 168,
						resource: 3,
						amount: [35,70,105],
						end: true
					},
					'F': {
						type: 1,
						x: 474,
						y: 208,
						subonly: true,
						compName: 'F/I',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV) return 'G';
							return 'C';
						}
					},
					'G': {
						type: 1,
						x: 349,
						y: 232,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'H': .7, 'J': .3 }
					},
					'H': {
						type: 1,
						x: 203,
						y: 254,
						compDiff: {
							2: ['Pre-F']
						},
						compDiffF: {
							2: ['F']
						},
						compDiffC: {
							2: ['Pre-F','F','Post-F']
						},
						end: true,
						boss: true
					},
					'I': {
						type: 1,
						x: 527,
						y: 300,
						subonly: true,
						compName: 'F/I',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .5, 'J': .5 }
					},
					'J': {
						type: 1,
						x: 373,
						y: 341,
						compName: 'C/J',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			21: {
				name: '4-5',
				nameT: 'Curry Ocean Ri-Lanka Island',
				world: 4,
				fleetTypes: [0],
				bgmMap: 98,
				bgmDN: 1003,
				bgmNN: 40,
				bgmDB: 40,
				bgmNB: 41,
				bossnode: 13,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 636,
						y: 228,
						routeC: function(ships) {
							if (ships.CL >= 1 && ships.DD >= 2 && ships.aBB + ships.CLT + ships.CV + ships.CVB + ships.AR + ships.SS + ships.SSV <= 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 550,
						y: 120,
						routeS: ['C','D']
					},
					'B': {
						type: 3,
						x: 529,
						y: 281,
						routeS: ['C','E']
					},
					'C': {
						type: 1,
						x: 460,
						y: 191,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 453,
						y: 77,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 438,
						y: 319,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'H'
					},
					'F': {
						type: 1,
						x: 378,
						y: 212,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5]
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV <= 3) return 'J';
							if (ships.DD && ships.DD + ships.AV >= 2) return 'J';
							return 'H';
						}
					},
					'G': {
						type: 3,
						x: 348,
						y: 97,
						routeS: ['F','I']
					},
					'H': {
						type: 1,
						x: 338,
						y: 307,
						compDiff: {
							2: [1,2,3,4,5]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 2) {
								this.showLoSPlane = null;
								return 'K';
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,3),{ 43: 'M', 40: 'K' });
						}
					},
					'I': {
						type: 1,
						x: 270,
						y: 154,
						compDiff: {
							2: [1,2,3,4]
						},
						routeC: function(ships) {
							if (ships.aBB >= 2) return 'F';
							if (ships.aCV >= 3) return 'F';
							return 'J';
						}
					},
					'J': {
						type: 1,
						x: 264,
						y: 275,
						compDiff: {
							2: [1,2,3,4]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,3),{ 43: 'M', 40: 'L' });
						}
					},
					'K': {
						type: 3,
						x: 250,
						y: 342,
						end: true
					},
					'L': {
						type: 3,
						x: 210,
						y: 191,
						end: true
					},
					'M': {
						type: 1,
						x: 155,
						y: 311,
						compDiff: {
							2: ['Pre-F 1','Pre-F 2','Pre-F 3'],
						},
						compDiffF: {
							2: ['F 1','F 2'],
						},
						compDiffC: {
							2: ['Post-F 1','Post-F 2'],
						},
						end: true,
						boss: true
					}
				}
			},
			22: {
				name: '5-1',
				nameT: 'The Forefront of the Southern Sea',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 13,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 9,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 92,
						y: 91,
						routeC: function(ships) {
							if (ships.CA + ships.CAV >= 2) return 'A';
							return (Math.random() < .75)? 'B' : 'A';
						}
					},
					'A': {
						type: 1,
						x: 229,
						y: 170,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'C': .5, 'F': .5 }
					},
					'B': {
						type: 4,
						x: 92,
						y: 231,
						resource: 1,
						route: 'D'
					},
					'C': {
						type: 2,
						x: 399,
						y: 125,
						resource: 3,
						amount: [25,50,75],
						routeC: function(ships) {
							if (ships.DD >= 2) return 'H';
							return (Math.random() < .75)? 'E' : 'H';
						}
					},
					'D': {
						type: 1,
						x: 260,
						y: 344,
						subonly: true,
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'E': {
						type: 1,
						x: 549,
						y: 132,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 421,
						y: 277,
						compDiff: {
							2: [1,2,3]
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 652,
						y: 81,
						resource: 1,
						amount: [40,80,120],
						end: true
					},
					'H': {
						type: 1,
						x: 552,
						y: 253,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV >= 2) return 'I';
							return (Math.random() < .8)? 'E' : 'I';
						}
					},
					'I': {
						type: 1,
						x: 605,
						y: 345,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			23: {
				name: '5-2',
				nameT: 'The Coral Islands',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 12,
				bgmNN: 12,
				bgmDB: 10,
				bgmNB: 10,
				bossnode: 4,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 126,
						y: 270,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 232,
						y: 237,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB == 2 && ships.CVL == 1) return 'B';
							return (Math.random() < .75)? 'F' : 'B';
						}
					},
					'B': {
						type: 1,
						x: 281,
						y: 112,
						subonly: true,
						compName: 'B/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'C': .5, 'G': .5 }
					},
					'C': {
						type: 1,
						x: 461,
						y: 71,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 605,
						y: 67,
						compDiff: {
							2: [1]
						},
						compDiffF: {
							2: [2]
						},
						compDiffC: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'E': {
						type: 2,
						x: 437,
						y: 156,
						resource: 2,
						amount: [25,50,75],
						route: 'D'
					},
					'F': {
						type: 1,
						x: 325,
						y: 333,
						subonly: true,
						compName: 'B/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .5, 'I': .5 }
					},
					'G': {
						type: 1,
						x: 419,
						y: 252,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'E';
							return (Math.random() < .8)? 'H' : 'E';
						}
					},
					'H': {
						type: 2,
						x: 567,
						y: 255,
						resource: 4,
						amount: [40,70,105],
						route: 'J'
					},
					'I': {
						type: 1,
						x: 488,
						y: 345,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CAV) return 'H';
							return (Math.random() < .8)? 'J' : 'H';
						}
					},
					'J': {
						type: 1,
						x: 640,
						y: 337,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			24: {
				name: '5-3',
				nameT: 'Sav Island',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 52,
				bgmNB: 54,
				bossnode: 11,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 107,
						y: 106,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 245,
						y: 90,
						routeC: function(ships) {
							if (ships.speed >= 10) return 'C';
							return (Math.random() < .8)? 'B' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 343,
						y: 172,
						subonly: true,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 405,
						y: 165,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 512,
						y: 231,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.aCV) return 'E';
							if (ships.CA + ships.CAV >= 2 && ships.CL >= 1) return 'F';
							if (Math.random() < .6) return 'I';
							return (Math.random() < .75)? 'F' : 'E';
						}
					},
					'E': {
						type: 1,
						x: 612,
						y: 174,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'F': {
						type: 1,
						x: 602,
						y: 279,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'G': {
						type: 2,
						x: 533,
						y: 341,
						resource: 1,
						amount: [30,60,90],
						routeR: { 'H': .5, 'I': .5 }
					},
					'H': {
						type: 2,
						x: 384,
						y: 334,
						resource: 2,
						amount: [30,60,90],
						route: 'I'
					},
					'I': {
						type: 3,
						x: 275,
						y: 291,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'K';
							return (Math.random() < .75)? 'J' : 'K';
						}
					},
					'J': {
						type: 1,
						x: 188,
						y: 316,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'K': {
						type: 1,
						x: 194,
						y: 203,
						compDiff: {
							2: ['Pre-F']
						},
						compDiffF: {
							2: ['F']
						},
						compDiffC: {
							2: ['Pre-F','F','Post-F']
						},
						end: true,
						boss: true
					}
				}
			},
			25: {
				name: '5-4',
				nameT: 'Salmon Sea Area',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 22,
				bgmNB: 49,
				bossnode: 15,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 149,
						y: 123,
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'A';
							if (ships.CLT >= 2) return 'B';
							let numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrumShips++;
										break;
									}
								}
							}
							if (numDrumShips >= 3) return 'C';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 282,
						y: 77,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.speed >= 10) return 'E';
							return (Math.random() < .95)? 'D' : 'E';
						}
					},
					'B': {
						type: 3,
						x: 219,
						y: 174,
						route: 'F'
					},
					'C': {
						type: 1,
						x: 193,
						y: 253,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'D': {
						type: 4,
						x: 414,
						y: 67,
						resource: 1,
						route: 'H'
					},
					'E': {
						type: 3,
						x: 399,
						y: 127,
						route: 'H'
					},
					'F': {
						type: 1,
						x: 304,
						y: 209,
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 277,
						y: 299,
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 545,
						y: 93,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							let numDrums = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) numDrums++;
								}
							}
							if (numDrums >= 4) return 'M';
							retrun (Math.random() < .5)? 'J' : 'K';
						}
					},
					'I': {
						type: 1,
						x: 368,
						y: 234,
						compDiff: {
							2: [1,2,3]
						},
						route: 'L'
					},
					'J': {
						type: 3,
						x: 651,
						y: 179,
						end: true
					},
					'K': {
						type: 1,
						x: 618,
						y: 224,
						compDiff: {
							2: [1,2,3]
						},
						route: 'O'
					},
					'L': {
						type: 3,
						x: 451,
						y: 272,
						routeC: function(ships) {
							if (ships.CLT >= 2) return 'N';
							let numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrumShips++;
										break;
									}
								}
							}
							if (numDrumShips >= 3) return 'M';
							return 'N';
						}
					},
					'M': {
						type: 2,
						x: 524,
						y: 273,
						resource: 1,
						amount: [115],
						route: 'O'
					},
					'N': {
						type: 1,
						x: 479,
						y: 341,
						compDiff: {
							2: [1,2,3]
						},
						route: 'O'
					},
					'O': {
						type: 1,
						x: 633,
						y: 309,
						compDiff: {
							2: [1]
						},
						compDiffF: {
							2: [2]
						},
						compDiffC: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			26: {
				name: '5-5',
				nameT: 'Northern Salmon Sea Area',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2131,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 49,
				bgmNB: 50,
				bossnode: 14,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 275,
						y: 89,
						routeC: function(ships) {
							let numDrums = 0, numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								let found = false;
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrums++;
										found = true;
									}
								}
								if (found) numDrumShips++;
							}
							if (numDrums >= 5 && numDrumShips >= 4) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 403,
						y: 132,
						compName: 'A/B',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'F';
							if (ships.speed >= 10) return 'D';
							if (ships.CV + ships.CVB == 2 && ships.CVL == 1) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 209,
						y: 178,
						compName: 'A/B',
						compDiff: {
							2: [1,2,3]
						},
						route: 'K'
					},
					'C': {
						type: 1,
						x: 493,
						y: 138,
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 475,
						y: 223,
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 562,
						y: 196,
						compName: 'E/G',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'N': .8, 'L': .2 }
					},
					'F': {
						type: 1,
						x: 349,
						y: 199,
						compDiff: {
							2: [1,2]
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 444,
						y: 275,
						compName: 'E/G',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							//random if from I, SS routing if from F
							//assume can't go B with 3 SS (non-Lui can't equip drums) 
							if (ships.SS + ships.SSV >= 4) return 'H';
							if (ships.SS + ships.SSV == 3) return 'N';
							return (Math.random() < .5)? 'H' : 'N';
						}
					},
					'H': {
						type: 1,
						x: 497,
						y: 340,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'I': {
						type: 3,
						x: 409,
						y: 336,
						routeC: function(ships) {
							if (ships.speed <= 5) return (Math.random() < .75)? 'H' : 'G';
							return (Math.random() < .5)? 'H' : 'G';
						}
					},
					'J': {
						type: 2,
						x: 319,
						y: 313,
						resource: 2,
						amount: [110],
						route: 'I'
					},
					'K': {
						type: 1,
						x: 240,
						y: 266,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 2) return 'M';
							return (Math.random() < .5)? 'J' : 'M';
						}
					},
					'L': {
						type: 3,
						x: 645,
						y: 213,
						end: true
					},
					'M': {
						type: 1,
						x: 126,
						y: 243,
						compDiff: {
							2: [1,2]
						},
						end: true
					},
					'N': {
						type: 1,
						x: 604,
						y: 305,
						compDiff: {
							2: [1]
						},
						compDiffF: {
							2: [2]
						},
						compDiffC: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			27: {
				name: '6-1',
				nameT: 'Central Waters Patrol Line',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 20,
				bgmNN: 20,
				bgmDB: 6,
				bgmNB: 6,
				bossnode: 11,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 120,
						y: 206,
						routeC: function(ships) {
							if (ships.SS + ships.SSV == ships.total) {
								if (ships.SS + ships.SSV <= 2) return 'G';
								return 'A';
							}
							if (ships.AS && ships.CL <= 1 && ships.AS + ships.SS + ships.SSV + ships.CL + ships.DD == ships.total) {
								if (ships.SS + ships.SSV <= 2) return 'G';
								return 'A';
							}
							if (ships.aBB >= 2) return 'G';
							if (ships.aBB + ships.aCV + ships.CA + ships.CAV >= 3) return 'G';
							if (ships.DD + ships.CL <= 0 && ships.aBB + ships.aCV + ships.CA + ships.CAV + ships.CLT) return 'G';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 227,
						y: 149,
						routeC: function(ships) {
							if (ships.AS) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 290,
						y: 212,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 336,
						y: 86,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 380,
						y: 164,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 428,
						y: 244,
						routeC: function(ships) {
							if (ships.SS + ships.SSV <= 2 || ships.aBB + ships.aCV + ships.CA + ships.CAV >= 2) {
								this.showLoSPlane = null;
								return 'H';
							}
							if (ships.AS <= 0 && Math.random() < .15) {
								this.showLoSPlane = null;
								return 'H';
							}
							this.showLoSPlane = 'F';
							return checkELoS33(getELoS33(1,4),{ 16: 'F', 12: 'H' });
						}
					},
					'F': {
						type: 1,
						x: 476,
						y: 321,
						compDiff: {
							2: [1,2,3]
						},
						showLoSPlane: 'K',
						routeC: function(ships) {
							if (ships.AS) {
								return checkELoS33(getELoS33(1,4),{ 25: 'K', 20: 'I' });
							}
							return checkELoS33(getELoS33(1,4),{ 36: 'K', 25: 'J', 20: 'I' });
						}
					},
					'G': {
						type: 3,
						x: 237,
						y: 300,
						end: true
					},
					'H': {
						type: 1,
						x: 493,
						y: 105,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'I': {
						type: 3,
						x: 348,
						y: 290,
						end: true
					},
					'J': {
						type: 1,
						x: 641,
						y: 323,
						compDiff: {
							2: [1,2]
						},
						end: true
					},
					'K': {
						type: 1,
						x: 651,
						y: 221,
						compDiff: {
							2: [1,2,3,4]
						},
						end: true,
						boss: true
					}
				}
			},
			28: {
				name: '6-2',
				nameT: 'MS Archipelago',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 70,
				bgmNN: 9,
				bgmDB: 73,
				bgmNB: 73,
				bossnode: 11,
				bossHP: 3,
				maphp: { 2: { 1: 3 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 202,
						routeC: function(ships) {
							if (ships.CL + ships.DD >= 4) return 'A';
							if (ships.aBB + ships.aCV <= 3) return 'B';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 227,
						y: 145,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CL + ships.DD + ships.AV >= 5) return 'D';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 261,
						y: 243,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV + ships.CA + ships.CAV >= 6) return 'C';
							if (ships.aBB + ships.aCV >= 4) return 'C';
							if (ships.aBB <= 1 && ships.aBB + ships.aCV <= 2) return 'F';
							return 'D';
						}
					},
					'C': {
						type: 3,
						x: 180,
						y: 301,
						end: true
					},
					'D': {
						type: 4,
						x: 394,
						y: 129,
						resource: 2,
						routeC: function(ships) {
							if (ships.DD >=3 && ships.CL + ships.DD >= 4 && ships.aBB + ships.aCV <= 0) return 'G';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 406,
						y: 221,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'H'
					},
					'F': {
						type: 3,
						x: 397,
						y: 318,
						routeC: function(ships) {
							if (ships.aBB <= 1 && ships.aCV <= 1 && ships.DD >= 2) {
								this.showLoSPlane = 'I';
								return checkELoS33(getELoS33(1,3),{ 43: 'I', 42.99: 'H' });
							}
							this.showLoSPlane = null;
							return 'E';
						}
					},
					'G': {
						type: 1,
						x: 512,
						y: 99,
						compDiff: {
							2: [1,2,3]
						},
						routeLC: 3,
						routeL: { 40: 'K', 37: 'J' }
					},
					'H': {
						type: 1,
						x: 532,
						y: 257,
						compDiff: {
							2: [1,2,3]
						},
						routeLC: 3,
						routeL: { 40: 'K', 37: 'J' }
					},
					'I': {
						type: 1,
						x: 610,
						y: 260,
						compDiff: {
							2: [1,2,3]
						},
						route: 'K'
					},
					'J': {
						type: 3,
						x: 489,
						y: 176,
						end: true
					},
					'K': {
						type: 1,
						x: 654,
						y: 115,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			29: {
				name: '6-3',
				nameT: 'Guano Atoll Sea',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2034,
				bgmDN: 8,
				bgmNN: 3,
				bgmDB: 4,
				bgmNB: 5,
				bossnode: 10,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.DD + ships.CL + ships.CT + ships.AV) errors.push('Only DD/CL/CT/AV allowed');
					if (ships.DD <= 0) errors.push('Must have 1+ DD');
					if (ships.CL + ships.CT <= 0) errors.push('Must have 1+ CL/CT');
					if (ships.AV <= 0) errors.push('Must have 1+ AV');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 88,
						y: 215,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 204,
						y: 191,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 234,
						y: 121,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 274,
						y: 274,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 321,
						y: 103,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 370,
						y: 185,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						routeC: function(ships) {
							if (ships.AV <= 1 && ships.CL <= 1) return 'G';
							if (ships.CL >= 3) return 'F';
							if (ships.AV + ships.CL >= 4) return 'F';
							return (Math.random() < .5)? 'F' : 'G';
						}
					},
					'F': {
						type: 1,
						x: 468,
						y: 294,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 486,
						y: 162,
						resource: 6,
						amount: [2,3,4],
						route: 'H'
					},
					'H': {
						type: 2,
						x: 588,
						y: 240,
						resource: 4,
						amount: [30,40,80,100],
						routeLC: 3,
						routeL: { 38: 'J', 36: 'I' }
					},
					'I': {
						type: 1,
						x: 631,
						y: 312,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						end: true
					},
					'J': {
						type: 1,
						x: 646,
						y: 153,
						compDiff: {
							2: [1,2,3,4,5]
						},
						compDiffF: {
							2: [6]
						},
						compDiffC: {
							2: [1,1,1,1,1,2,2,2,3,3,4,5]
						},
						end: true,
						boss: true
					}
				}
			},
			30: {
				name: '6-4',
				nameT: 'Central Northern Offshore Sea of Peacock Island',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2130,
				bgmDN: 38,
				bgmNN: 4,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 14,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				lbas: 1,
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.FBB + ships.BBV > 2) errors.push('Max 2 (F)BB(V)');
					if (ships.CV + ships.CVB + ships.CVL > 2) errors.push('Max 2 CV(L/B)');
				},
				startCheck: function(ships) {
					if (ships.aCV || ships.LHA || ships.aBB >= 2 || ships.DD < 2) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 62,
						y: 207,
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.DD >= 4) return 'B';
							if (ships.speed >= 10 && SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'B';
							return 'A';
						}
					},
					'Start2': {
						type: 0,
						x: 641,
						y: 114,
						route: 'M'
					},
					'A': {
						type: 1,
						x: 149,
						y: 121,
						distance: 1,
						compDiff: {
							2: [1,2,3]
						},
						compDiffF: {
							2: ['F']
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445) && ships.DD == 2 && ships.aBB == 1 && ships.CA <= 1 && ships.CAV <= 1 && ships.CA + ships.CAV + ships.CL == 2) return 'D';
							if (ships.CL + ships.DD <= 2) return 'E';
							if (ships.CAV >= 2) return 'E';
							if (ships.aBB) return 'E';
							if (ships.speed <= 5) return 'E';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 159,
						y: 246,
						distance: 1,
						compDiff: {
							2: [1,2,3,4]
						},
						compDiffF: {
							2: ['F1','F2']
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 242,
						y: 302,
						distance: 3,
						compDiff: {
							2: [1,2,3,4]
						},
						compDiffF: {
							2: ['F1','F2']
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 275,
						y: 180,
						distance: 2,
						raid: true,
						compDiff: {
							2: [1,2]
						},
						route: 'C'
					},
					'E': {
						type: 1,
						x: 300,
						y: 92,
						distance: 2,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (isShipInList([ships.ids[0]],445)) return 'D';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 340,
						y: 313,
						distance: 4,
						raid: true,
						compDiff: {
							2: [1,2,3]
						},
						route: 'N'
					},
					'G': {
						type: 1,
						x: 387,
						y: 160,
						distance: 3,
						raid: true,
						compDiff: {
							2: [1,2]
						},
						route: 'D'
					},
					'H': {
						type: 1,
						x: 453,
						y: 330,
						distance: 7,
						compDiff: {
							2: [1,2,3]
						},
						compDiffF: {
							2: ['F1','F2']
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 495,
						y: 127,
						distance: 6,
						raid: true,
						compDiff: {
							2: [1,2]
						},
						route: 'N'
					},
					'J': {
						type: 1,
						x: 510,
						y: 237,
						distance: 6,
						compDiff: {
							2: [1,2,3]
						},
						compDiffF: {
							2: ['F1','F2']
						},
						routeC: function(ships) {
							if (ships.CL == 1 && ships.DD == 2 && ships.LHA) return 'N'; 
							if (ships.CL == 1 && ships.DD == 2 && ships.aBB + ships.aCV <= 2) return 'I';
							return 'L';
						}
					},
					'K': {
						type: 1,
						x: 577,
						y: 316,
						distance: 7,
						compDiff: {
							2: [1,2,3,4]
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV >= 3) return 'H';
							if (ships.DD == 2 && ships.CL == 1 && ships.aBB <= 1) return 'J';
							if (ships.DD == 2 && ships.aBB <= 0) return 'J';
							return 'H';
						}
					},
					'L': {
						type: 1,
						x: 582,
						y: 164,
						distance: 7,
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'M': {
						type: 1,
						x: 635,
						y: 241,
						distance: 8,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5]
						},
						route: 'K'
					},
					'N': {
						type: 1,
						x: 398,
						y: 237,
						distance: 5,
						compDiff: {
							2: [2,3,4]
						},
						compDiffF: {
							2: [5,6]
						},
						compDiffC: {
							2: [2,3,4,5,6]
						},
						compHQ: {
							100: [2,3,4],
							1: [1,2,3,4],
						},
						compHQF: {
							1: [5,6]
						},
						compHQC: {
							100: [2,3,4,5,6],
							1: [1,2,3,4,5,6],
						},
						end: true,
						boss: true
					}
				}
			},
			31: {
				name: '6-5',
				nameT: 'KW Atoll Sea',
				world: 6,
				fleetTypes: [0],
				bgmMap: 1005,
				bgmDN: 75,
				bgmNN: 75,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 13,
				bossHP: 6,
				maphp: { 2: { 1: 6 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				lbas: 2,
				enemyRaid: {
					maxNum: { 2: 1 },
					chance: { 2: .25 },
					compName: 'AB',
					compDiff: {
						2: ['1','2'],
					},
					compDiffF: {
						2: ['3'],
					},
				},
				startCheck: function(ships) {
					if (ships.aCV) return 'Start1';
					if (ships.CLT) return 'Start1';
					if (ships.aBB >= 4) return 'Start1';
					if (ships.CL <= 0) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 120,
						y: 92,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 148,
						y: 260,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 221,
						y: 144,
						distance: 1,
						compDiff: {
							2: [1,2,3,4,5,6,7]
						},
						compDiffF: {
							2: [8,9]
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 284,
						y: 283,
						distance: 1,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5]
						},
						compDiffF: {
							2: [6,7]
						},
						routeC: function(ships) {
							if (ships.DD <= 1) return 'C';
							if (ships.aBB >= 3) return 'C';
							return 'F';
						}
					},
					'C': {
						type: 1,
						x: 313,
						y: 197,
						distance: 2,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						compDiffF: {
							2: [7,8,9]
						},
						routeC: function(ships) {
							if (ships.CLT >= 2) return 'E';
							if (ships.aBB + ships.aCV + ships.CA + ships.CAV >= 5) return 'E';
							if (ships.aBB + ships.aCV >= 4) return 'E';
							if (ships.DD) return 'D';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 383,
						y: 143,
						distance: 3,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						compDiffF: {
							2: [7,8,9]
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 405,
						y: 248,
						distance: 3,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5,6,7]
						},
						compDiffF: {
							2: [8,9]
						},
						routeC: function(ships) {
							if (ships.DD && ships.CL) return 'H';
							return 'I';
						}
					},
					'F': {
						type: 1,
						x: 408,
						y: 306,
						distance: 2,
						compDiff: {
							2: [1,2,3,4]
						},
						compDiffF: {
							2: [5,6,7]
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 491,
						y: 149,
						distance: 4,
						raid: true,
						compDiff: {
							2: [1,2]
						},
						compDiffF: {
							2: [3]
						},
						routeLC: 3,
						routeL: { 50: 'M', 49: 'K' }
					},
					'H': {
						type: 1,
						x: 507,
						y: 239,
						distance: 4,
						raid: true,
						compDiff: {
							2: [1,2]
						},
						compDiffF: {
							2: [3]
						},
						route: 'G'
					},
					'I': {
						type: 1,
						x: 526,
						y: 324,
						distance: 3,
						compDiff: {
							2: [1,2,3,4,5]
						},
						compDiffF: {
							2: [6,7,8]
						},
						routeC: function(ships) {
							if (ships.aCV) return 'H';
							if (ships.CLT) return 'H';
							if (ships.aBB >= 4) return 'H';
							if (ships.CL <= 0) return 'H';
							return 'J';
						}
					},
					'J': {
						type: 1,
						x: 582,
						y: 235,
						distance: 4,
						compDiff: {
							2: [1,2,3,4,5,6]
						},
						compDiffF: {
							2: [7,8,9]
						},
						routeLC: 3,
						routeL: { 50: 'M', 49: 'K' }
					},
					'K': {
						type: 3,
						x: 534,
						y: 75,
						distance: 5,
						end: true
					},
					'L': {
						type: 3,
						x: 663,
						y: 244,
						distance: 5,
						end: true
					},
					'M': {
						type: 1,
						x: 632,
						y: 122,
						distance: 5,
						compDiff: {
							2: [1,2]
						},
						compDiffF: {
							2: [3]
						},
						end: true,
						boss: true
					}
				}
			}
		},
	},
	22: {
		name: 'Spring 2013',
		date: '2013-05-17',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/yl66bLe.png',
		bannerImgAlt: 'http://i.imgur.com/qEAfodg.png',
		noForceFlagRetreat: true,
		subTargetSpecial: 1,
		disableSupport: true,
		overrideStats: {
			1530: { HP: 24 },
			1531: { HP: 30 },
			1532: { HP: 33 },
			1533: { HP: 39 },
			1522: { EQUIPS: [505,506,525] },
			1527: { EQUIPS: [505,506,515] },
			1529: { EQUIPS: [509,509,509,528] },
		},
		disableMore: { ships: [110,111] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preliminary Encounter',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 6,
				hpmode: 2,
				maphp: {
					2: { 1: 420 },
				},
				finalhp: {
					2: 0,
				},
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
							2: ['1','1b','2'],
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
							2: ['1','1b','2'],
						},
						route: 'E',
					},
					'E': {
						type: 1,
						x: 521,
						y: 152,
						compDiff: {
							2: ['1','2','2b','3'],
						},
						routeC: function(ships) {
							if (ships.AV + ships.CVL && ships.DD >= 2 && ships.total >= 6) return 'F';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 668,
						y: 179,
						boss: true,
						compDiff: {
							2: ['1','1b','2'],
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
			2: {
				name: 'E-2',
				nameT: 'Cordon Breakthrough',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 500 },
				},
				finalhp: {
					2: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 73,
						y: 148,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 176,
						y: 249,
						compDiff: {
							2: ['1','2']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 246,
						y: 270,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 320,
						y: 277,
						resource: 2,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 444,
						y: 251,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						route: 'E'
					},
					'E': {
						type: 4,
						x: 552,
						y: 184,
						resource: 1,
						routeC: function(ships) {
							if (ships.total >= 6 && ships.CA + ships.CAV >= 2 && ships.CL >= 1) return 'G';
							return 'F';
						}
					},
					'F': {
						type: 2,
						x: 428,
						y: 122,
						resource: 2,
						amount: [160,320],
						end: true
					},
					'G': {
						type: 1,
						x: 669,
						y: 218,
						compDiff: {
							2: ['1','2']
						},
						compDiffF: {
							2: ['3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Bay Inrush!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 1000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 10,  //x4
				reward: { ships: [110], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 81,
						y: 211,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 185,
						y: 158,
						compDiff: {
							2: ['1']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 279,
						y: 117,
						subonly: true,
						compDiff: {
							2: ['1']
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 342,
						y: 191,
						resource: 2,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 423,
						y: 238,
						subonly: true,
						compDiff: {
							2: ['1']
						},
						route: 'E'
					},
					'E': {
						type: 4,
						x: 495,
						y: 171,
						resource: 1,
						routeC: function(ships) {
							if (ships.BBV >= 2) return 'G';
							return 'F';
						}
					},
					'F': {
						type: 2,
						x: 656,
						y: 280,
						resource: 3,
						amount: [100],
						end: true
					},
					'G': {
						type: 1,
						x: 632,
						y: 117,
						compDiff: {
							2: ['1','2']
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Enemy Anchorage Assault!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1001,
				bgmDB: 1001,
				bgmNB: 1001,
				bossnode: 5,
				hpmode: 2,
				maphp: {
					2: { 1: 2000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 3,
				reward: {
					items: [56]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 236,
						y: 76,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 310,
						y: 123,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 406,
						y: 131,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 490,
						y: 173,
						compDiff: {
							2: ['1','2']
						},
						route: 'D'
					},
					'D': {
						type: 2,
						x: 450,
						y: 259,
						resource: 3,
						amount: [150,235,360,425],
						route: 'E'
					},
					'E': {
						type: 1,
						x: 317,
						y: 288,
						compDiff: {
							2: ['1']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	23: {
		name: 'Summer 2013',
		date: '2013-08-01',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/N0VJyTd.png',
		bannerImgAlt: 'http://i.imgur.com/L3be5aR.png',
		noForceFlagRetreat: true,
		subTargetSpecial: 2,
		overrideStats: {
			1522: { EQUIPS: [505,506,525] },
			1527: { EQUIPS: [505,506,515] },
			1529: { EQUIPS: [509,509,509,528] },
			1541: { EQUIPS: [508,508,512] },
			1543: { EQUIPS: [508,508,512,529] },
		},
		disableMore: { ships: [126,124,131] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Break through the cordon!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 6,
				hpmode: 2,
				maphp: {
					2: { 1: 140 },
				},
				finalhp: {
					2: 0,
				},
				reward: { ships: [126], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 76,
						y: 212,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 194,
						y: 231,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'B': .5, 'D': .5 }
					},
					'B': {
						type: 2,
						x: 332,
						y: 162,
						resource: 1,
						amount: [35, 40, 45, 55, 65, 70, 75, 80, 85, 90, 95, 100, 105],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 429,
						y: 78,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 367,
						y: 262,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 563,
						y: 223,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'F': .5, 'G': .5 }
					},
					'F': {
						type: 1,
						x: 658,
						y: 206,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
					'G': {
						type: 2,
						x: 393,
						y: 352,
						resource: 8,
						amount: [1],
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Eliminate the enemy naval threat!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 8,
				hpmode: 2,
				maphp: {
					2: { 1: 900 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 20,
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 116,
						routeC: function(ships) {
							if (ships.AV) return 'A';
							return (Math.random() < .5)? 'A' : 'E';
						}
					},
					'A': {
						type: 1,
						x: 253,
						y: 128,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 433,
						y: 115,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						routeR: { 'C': .5, 'D': .5 }
					},
					'C': {
						type: 2,
						x: 608,
						y: 92,
						resource: 3,
						amount: [55,60,65,70,105],
						end: true
					},
					'D': {
						type: 4,
						x: 559,
						y: 236,
						resource: 1,
						route: 'H'
					},
					'E': {
						type: 1,
						x: 172,
						y: 229,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 299,
						y: 346,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'B': .5, 'G': .5 }
					},
					'G': {
						type: 1,
						x: 483,
						y: 321,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						route: 'H'
					},
					'H': {
						type: 1,
						x: 644,
						y: 338,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Assault the enemy staging area!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 1400 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 10,
				reward: { ships: [124], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 244,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'D';
							return (Math.random() < .5)? 'A' : 'D';
						}
					},
					'A': {
						type: 1,
						x: 138,
						y: 166,
						compDiff: {
							2: ['1','2']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 255,
						y: 110,
						compDiff: {
							2: ['1','2']
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 334,
						y: 159,
						resource: 2,
						route: 'F'
					},
					'D': {
						type: 1,
						x: 198,
						y: 328,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'E': .5, 'F': .5 }
					},
					'E': {
						type: 1,
						x: 380,
						y: 343,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 414,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'G': .4, 'H': .3, 'I': .3 }
					},
					'G': {
						type: 1,
						x: 570,
						y: 133,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
					'H': {
						type: 2,
						x: 435,
						y: 69,
						resource: 4,
						amount: [45,50,55,60,65,75,80,95,105],
						end: true
					},
					'I': {
						type: 2,
						x: 592,
						y: 297,
						resource: 8,
						amount: [1],
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Strike the enemy super dreadnought battleship!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 2000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 3,
				reward: {
					ships: [131]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 186,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 172,
						y: 224,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 273,
						y: 220,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'D';
							return (Math.random() < .5)? 'D' : 'C';
						}
					},
					'C': {
						type: 4,
						x: 367,
						y: 221,
						resource: 1,
						route: 'E'
					},
					'D': {
						type: 1,
						x: 429,
						y: 343,
						compDiff: {
							2: ['1','2']
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 468,
						y: 215,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'F': .5, 'G': .5 }
					},
					'F': {
						type: 2,
						x: 509,
						y: 96,
						resource: 9,
						amount: [1],
						end: true
					},
					'G': {
						type: 1,
						x: 605,
						y: 208,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	24: {
		name: 'Fall 2013',
		date: '2013-11-01',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/aPx281n.png',
		bannerImgAlt: 'http://i.imgur.com/6WjZOpE.png',
		noForceFlagRetreat: true,
		subTargetSpecial: 2,
		overrideStats: {
			1522: { EQUIPS: [505,506,525] },
			1527: { EQUIPS: [505,506,515] },
			1529: { EQUIPS: [509,509,509,528] },
			1541: { EQUIPS: [508,508,512] },
			1543: { EQUIPS: [508,508,512,529] },
		},
		disableMore: { ships: [191,138,128,143] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Solomon Islands',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 240 },
				},
				finalhp: {
					2: 0,
				},
				reward: { ships: [191], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 169,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 267,
						y: 126,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 237,
						y: 176,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 394,
						y: 205,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'D': .2, 'E': .4, 'F': .4 }
					},
					'D': {
						type: 2,
						x: 607,
						y: 174,
						resource: 1,
						amount: [15,20,35,40,45],
						end: true
					},
					'E': {
						type: 1,
						x: 526,
						y: 260,
						compDiff: {
							2: ['1','2']
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 470,
						y: 307,
						route: 'G'
					},
					'G': {
						type: 1,
						x: 654,
						y: 312,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Lunga Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 11,
				hpmode: 2,
				maphp: {
					2: { 1: 1000 },
				},
				finalhp: {
					2: 0,
				},
				reward: { ships: [138], firstOnly: true },
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 151,
						y: 92,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 272,
						y: 110,
						compDiff: {
							2: ['1','2','3','4']
						},
						routeC: function(ships) {
							if (ships.CL) return (Math.random() < .5)? 'B' : 'C';
							return 'B';
						}
					},
					'B': {
						type: 4,
						x: 387,
						y: 143,
						resource: 2,
						routeC: function(ships) {
							if (ships.aBB >= 3) return 'E';
							return 'F';
						}
					},
					'C': {
						type: 1,
						x: 247,
						y: 259,
						compDiff: {
							2: ['1','2']
						},
						routeR: { 'D': .5, 'H': .5 }
					},
					'D': {
						type: 1,
						x: 145,
						y: 316,
						nightToDay: true,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'E': {
						type: 1,
						x: 515,
						y: 121,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'I'
					},
					'F': {
						type: 2,
						x: 479,
						y: 192,
						resource: 4,
						amount: [5,10,15],
						route: 'I'
					},
					'G': {
						type: 3,
						x: 448,
						y: 293,
						routeR: { 'F': .5, 'I': .5 }
					},
					'H': {
						type: 2,
						x: 313,
						y: 345,
						resource: 1,
						amount: [10,15],
						route: 'G'
					},
					'I': {
						type: 1,
						x: 575,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'J': .4, 'K': .6 }
					},
					'J': {
						type: 1,
						x: 602,
						y: 136,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'K': {
						type: 1,
						x: 638,
						y: 321,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Santa Cruz Islands',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 10,
				hpmode: 2,
				maphp: {
					2: { 1: 1350 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 45,
				nodes: {
					'Start': {
						type: 0,
						x: 100,
						y: 135,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 214,
						y: 112,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 183,
						y: 209,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.CAV || ships.BBV || ships.CVL) return 'D';
							return (Math.random() < .5)? 'D' : 'G';
						}
					},
					'C': {
						type: 1,
						x: 367,
						y: 102,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return (Math.random() < .5)? 'D' : 'E';
							return 'E'; //?
						}
					},
					'D': {
						type: 1,
						x: 327,
						y: 269,
						compDiff: {
							2: ['1','2']
						},
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'F';
							return (Math.random() < .5)? 'F' : 'H';
						}
					},
					'E': {
						type: 1,
						x: 519,
						y: 144,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.BB + ships.FBB >= 2 || ships.aBB >= 3) return 'I';
							return 'J';
						}
					},
					'F': {
						type: 3,
						x: 491,
						y: 244,
						routeR: { 'E': .5, 'J': .5 }
					},
					'G': {
						type: 1,
						x: 132,
						y: 288,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'H': {
						type: 1,
						x: 431,
						y: 309,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'I': {
						type: 1,
						x: 620,
						y: 89,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'J': {
						type: 1,
						x: 637,
						y: 228,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Ironbottom Sound',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 9,
				hpmode: 2,
				maphp: {
					2: { 1: 2900 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 15,
				reward: { ships: [128], firstOnly: true },
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 125,
						y: 94,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 246,
						y: 131,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 337,
						y: 169,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 448,
						y: 150,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.FBB >= 2) return 'F';
							return 'D';
						}
					},
					'D': {
						type: 4,
						x: 534,
						y: 119,
						resource: 2,
						routeC: function(ships) {
							if (ships.aBB >= 3) return 'G';
							return 'E';
						}
					},
					'E': {
						type: 2,
						x: 614,
						y: 166,
						resource: 3,
						amount: [20,25,40,50],
						route: 'F'
					},
					'F': {
						type: 1,
						x: 508,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'I': .6, 'H': .4 }
					},
					'G': {
						type: 1,
						x: 627,
						y: 79,
						nightToDay: true,
						compDiff: {
							2: ['1']
						},
						end: true
					},
					'H': {
						type: 1,
						x: 403,
						y: 338,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true
					},
					'I': {
						type: 1,
						x: 312,
						y: 276,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Ironbottom Sound, Final Stage',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 11,
				hpmode: 2,
				maphp: {
					2: { 1: 2750 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 12,
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				reward: {
					ships: [143]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 145,
						y: 116,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 250,
						y: 153,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							var speed = FLEETS1[0].ships[0].SPD;
							for (var i=0; i<FLEETS1[0].ships.length; i++) {
								if (FLEETS1[0].ships[i].SPD != speed) return 'C';
							}
							return 'B';
						}
					},
					'B': {
						type: 3,
						x: 334,
						y: 181,
						routeC: function(ships) {
							if (ships.aBB == 2) return 'D';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 307,
						y: 258,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 446,
						y: 132,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'H'
					},
					'E': {
						type: 1,
						x: 426,
						y: 217,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'I'
					},
					'F': {
						type: 3,
						x: 404,
						y: 297,
						routeR: { 'G': .5, 'I': .5 }
					},
					'G': {
						type: 1,
						x: 261,
						y: 332,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'H': {
						type: 4,
						x: 547,
						y: 177,
						resource: 2,
						routeC: function(ships) {
							if (ships.DD) return (Math.random() < .7)? 'K' : 'J';
							return (Math.random() < .5)? 'K' : 'J';
						}
					},
					'I': {
						type: 1,
						x: 521,
						y: 256,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 624,
						y: 96,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'K': {
						type: 1,
						x: 609,
						y: 300,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			}
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
		overrideStats: {
			1522: { EQUIPS: [505,506,525] },
			1527: { EQUIPS: [505,506,515] },
			1529: { EQUIPS: [509,509,509,528] },
			1541: { EQUIPS: [508,508,512] },
			1543: { EQUIPS: [508,508,512,529] },
		},
		initReward: {
			'ships': [2001],
		},
		disableMore: { ships: [155] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Battle off Kannonzaki Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1107,
				bgmNN: 1107,
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
					// 'items': [62],
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
				bgmDN: 1107,
				bgmNN: 1107,
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
					// 'items': [42]
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
				bgmDN: 1107,
				bgmNN: 1107,
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
							if (ships.aBB + ships.CV + ships.CVB + ships.CVN <= 0 && ships.speed >= 10) return 'D';
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
	26: {
		name: 'Spring 2014',
		date: '2014-04-23',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/txZwlUB.png',
		bannerImgAlt: 'http://i.imgur.com/Xs9uKF7.png',
		disableMore: { ships: [182,181,140] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Southwest of Samewani Sea - Battle of Samewani Sea',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 8,
				maphp: {
					3: { 1: 528 },
					2: { 1: 528 },
					1: { 1: 456 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 106,
						y: 99,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 183,
						y: 184,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'B';
							let numDrums = 0, numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								let found = false;
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrums++;
										found = true;
									}
								}
								if (found) numDrumShips++;
							}
							if (ships.CA >= 2 && numDrums >= 3 && numDrumShips >= 2) return 'C';
							return (Math.random() < .5)? 'B' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 296,
						y: 127,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 269,
						y: 220,
						route: 'E'
					},
					'D': {
						type: 1,
						x: 472,
						y: 154,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeL: { 40: 'H', 37: 'F' }
					},
					'E': {
						type: 1,
						x: 363,
						y: 213,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							let numDrums = 0, numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								let found = false;
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrums++;
										found = true;
									}
								}
								if (found) numDrumShips++;
							}
							if (ships.CA >= 2 && numDrums >= 3 && numDrumShips >= 2) return 'G';
							return 'D';
						}
					},
					'F': {
						type: 3,
						x: 564,
						y: 85,
						end: true
					},
					'G': {
						type: 2,
						x: 444,
						y: 263,
						resource: 3,
						amount: [20],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 539,
						y: 271,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Southwest of Zunda Strait - Across The Zunda Strait',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				maphp: {
					3: { 1: 780 },
					2: { 1: 780 },
					1: { 1: 588 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: { ships: [182], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 353,
						y: 82,
						routeC: function(ships) {
							if (ships.CV && ships.aCV == 2) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 265,
						y: 152,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3','4'],
						},
						compHQ: {
							75: ['1'],
							35: ['2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.CV == 1) return (Math.random() < .9)? 'D' : 'E';
							if (ships.BBV) return (Math.random() < .75)? 'D' : 'E';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'B': {
						type: 1,
						x: 403,
						y: 154,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CA == 2) return 'D';
							if (ships.CAV == 2) return 'D';
							return (Math.random() < .5)? 'C' : 'D';
						}
					},
					'C': {
						type: 1,
						x: 479,
						y: 204,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CLT) return (Math.random() < .5)? 'F' : 'H';
							return 'H';
						}
					},
					'D': {
						type: 1,
						x: 354,
						y: 234,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'G'
					},
					'E': {
						type: 2,
						x: 112,
						y: 210,
						resource: 4,
						amount: [30],
						end: true
					},
					'F': {
						type: 4,
						x: 581,
						y: 151,
						resource: 1,
						end: true
					},
					'G': {
						type: 3,
						x: 358,
						y: 304,
						route: 'H'
					},
					'H': {
						type: 1,
						x: 447,
						y: 319,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						routeL: { 40: 'J', 37: 'I' }
					},
					'I': {
						type: 3,
						x: 562,
						y: 344,
						end: true
					},
					'J': {
						type: 1,
						x: 593,
						y: 242,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							50: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Port Wine Area - Assault! Destroy Port Wine Operation',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 12,
				maphp: {
					3: { 1: 2660 },
					2: { 1: 2660 },
					1: { 1: 2660 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: { ships: [181], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 248,
						y: 82,
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 331,
						y: 146,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 194,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 448,
						y: 109,
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'E';
							return (Math.random() < .5)? 'E' : 'F';
						}
					},
					'D': {
						type: 2,
						x: 213,
						y: 285,
						route: 'G'
					},
					'E': {
						type: 1,
						x: 551,
						y: 133,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'H'
					},
					'F': {
						type: 1,
						x: 431,
						y: 200,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 315,
						y: 325,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 523,
						y: 221,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeL: { 40: 'L', 37: 'J' }
					},
					'I': {
						type: 1,
						x: 451,
						y: 268,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						routeL: { 40: 'L', 37: 'K' }
					},
					'J': {
						type: 4,
						x: 636,
						y: 219,
						resource: 1,
						end: true
					},
					'K': {
						type: 3,
						x: 441,
						y: 350,
						end: true
					},
					'L': {
						type: 1,
						x: 562,
						y: 310,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Central Pacific Sea - Sweep Against Subs in the Frontline',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 10,
				bgmNN: 10,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 8,
				maphp: {
					3: { 1: 315 },
					2: { 1: 315 },
					1: { 1: 315 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 210,
						routeC: function(ships) {
							if (ships.CL >= 4 || ships.SS + ships.SSV >= 3) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 210,
						y: 203,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'C';
							return (Math.random() < .5)? 'C' : 'B';
						}
					},
					'B': {
						type: 1,
						x: 268,
						y: 310,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						compHQ: {
							1: ['1'],
						},
						end: true
					},
					'C': {
						type: 3,
						x: 281,
						y: 143,
						routeC: function(ships) {
							if (ships.DD >= 5 || ships.DD >= 4 && ships.CL >= 1) return 'D';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 424,
						y: 114,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeL: { 5: 'H', 2: 'F' }
					},
					'E': {
						type: 1,
						x: 381,
						y: 281,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						routeR: { 'D': .5, 'G': .5 }
					},
					'F': {
						type: 3,
						x: 595,
						y: 78,
						end: true
					},
					'G': {
						type: 1,
						x: 551,
						y: 329,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						end: true
					},
					'H': {
						type: 1,
						x: 558,
						y: 206,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'North Pacific Sea - Capture Peacock Island Operation',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 10,
				bgmNN: 10,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				maphp: {
					3: { 1: 3600 },
					2: { 1: 3600 },
					1: { 1: 3600 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: {
					ships: [140]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 130,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 248,
						y: 101,
						end: true
					},
					'B': {
						type: 1,
						x: 226,
						y: 182,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10) return 'C';
							if (ships.CLT >= 2) return 'C';
							return 'D';
						}
					},
					'C': {
						type: 4,
						x: 305,
						y: 129,
						resource: 1,
						route: 'E'
					},
					'D': {
						type: 3,
						x: 252,
						y: 302,
						route: 'E'
					},
					'E': {
						type: 1,
						x: 376,
						y: 189,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB == 3) return 'F';
							if (ships.CV + ships.CVB <= 2 && ships.BB >= 3) return 'G';
							if (ships.CV + ships.CVB <= 2 && ships.FBB >= 3) return 'G';
							return (Math.random() < .5)? 'F': 'G';
						}
					},
					'F': {
						type: 1,
						x: 464,
						y: 128,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) {
								this.showLoSPlane = null;
								return 'H';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1),{ 40: 'J', 37: 'H' });
						}
					},
					'G': {
						type: 1,
						x: 463,
						y: 288,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) {
								this.showLoSPlane = null;
								return 'I';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1),{ 40: 'J', 37: 'I' });
						}
					},
					'H': {
						type: 3,
						x: 589,
						y: 89,
						end: true
					},
					'I': {
						type: 3,
						x: 612,
						y: 319,
						end: true
					},
					'J': {
						type: 1,
						x: 553,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	27: {
		name: 'Summer 2014',
		date: '2014-08-08',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/1rQiUHS.jpg',
		bannerImgAlt: 'http://i.imgur.com/TsVcRjn.jpg',
		lockSupport: true,
		disableMore: { ships: [405,183,186,404,167] },
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
				reward: { ships: [405], firstOnly: true },
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
						routeL: { 60:'K', 57:'G' }
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
						routeC: function(ships) {
							if (ships.DD + ships.CL + ships.CLT + ships.CA + ships.CAV < 2) {
								this.showLoSPlane = null;
								return 'J';
							}
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1),{60:'K',57:'J'});
						}
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
				reward: { ships: [183], firstOnly: true },
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
						routeL: { 70: 'K', 50: 'F' },
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
						routeL: { 60: 'E', 59: 'I', 40: 'H' },
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
						routeC: function(ships) {
							if (ships.DD >= 4) return 'K';
							return (Math.random() < .5)? 'K' : 'J';
						}
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
							if (ships.speed <= 5) return 'B';
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
						routeL: {100:'H',90:'I'},
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
						routeL: {100:'J',90:'G'},
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
				reward: { ships: [186], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 109,
						y: 148,
						routeC: function(ships) {
							if (ships.LHA) return 'B';
							if (ships.escort.DD >= 4) return (Math.random() < .8)? 'B':'A';
							if (ships.aBB >= 2 && ships.speed>=10) return 'A';
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
							if (ships.aCV <= 3 && ships.speed>=10) return 'F';
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
						routeL: {100:'H',90:'L'},
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
						routeL: {100:'J',90:'I'},
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
						routeL: {100:'K',90:'H'},
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
				reward: { ships: [404], firstOnly: true },
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
						routeL: {100:'L',90:'J'},
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
						routeL: {100:'L',90:'K'},
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
				reward: {
					'ships': [167],
				},
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
						routeL: {75: 'J', 50: 'H', 0: 'G' },
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
						routeL: {75:'J',0:'I'},
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
	28: {
		name: 'Fall 2014',
		date: '2014-11-14',
		diffMode: 1,
		allowDiffs: [2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/N9FDaqh.png',
		bannerImgAlt: 'http://i.imgur.com/JJYgFR8.png',
		disableMore: { ships: [421,176,415] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'First Operation Kon',
				fleetTypes: [2],
				bgmMap: 2001,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 6,
				maphp: {
					3: { 1: 352 },
					2: { 1: 352 },
					1: { 1: 352 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				giveLock: 1,
				checkLock: [2],
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 212,
						routeC: function(ships) {
							if (ships.escort.aBB) return (Math.random() < .75)? 'B' : 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 238,
						y: 197,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 295,
						y: 301,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 322,
						y: 117,
						compDiff: {
							2: ['1','2','3'],
							1: ['2','3'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.escort.DD >= 4) return (Math.random() < .75)? 'E' : 'D';
							return (Math.random() < .25)? 'E' : 'D';
						}
					},
					'D': {
						type: 1,
						x: 399,
						y: 184,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2','3','4'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.aBB <= 3 && ships.CV+ships.CVB <= 0 && ships.CVL <= 1 && ships.escort.DD >= 4) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 486,
						y: 156,
						compDiff: {
							2: ['1','3','5'],
							1: ['2','4'],
						},
						compHQ: {
							80: ['1','3','5'],
							1: ['2','4'],
						},
						routeL: { 100: 'F', 97: 'G' }
					},
					'F': {
						type: 1,
						x: 593,
						y: 249,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['5','6'],
						},
						compHQ: {
							80: ['1','2','3','4'],
							1: ['5','6'],
						},
						compDiffF: {
							2: ['1'],
							1: ['5'],
						},
						compHQF: {
							80: ['1'],
							1: ['5'],
						},
						end: true,
						boss: true
					},
					'G': {
						type: 3,
						x: 610,
						y: 135,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Second Operation Kon',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 9,
				maphp: {
					3: { 1: 850 },
					2: { 1: 850 },
					1: { 1: 750 },
				},
				finalhp: {
					3: 190,
					2: 190,
					1: 190,
				},
				giveLock: 1,
				checkLock: [2],
				reward: { ships: [421], firstOnly: true },
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 246,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 1,
						x: 179,
						y: 187,
						subonly: true,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['2','3','4'],
						},
						route: 'D'
					},
					'B': {
						type: 3,
						x: 184,
						y: 114,
						end: true
					},
					'C': {
						type: 1,
						x: 271,
						y: 264,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4','5'],
						},
						routeC: function(ships) {
							if (ships.CL >= 3) {
								this.showLoSPlane = null;
								return 'E';
							}
							if (ships.CL == 2) {
								this.showLoSPlane = null;
								return 'D';
							}
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1),{ 24: 'G', 21: 'D' });
						}
					},
					'D': {
						type: 1,
						x: 278,
						y: 153,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.CL >= 3) {
								this.showLoSPlane = null;
								return 'B';
							}
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1),{ 20: 'G', 17: 'F' });
						}
					},
					'E': {
						type: 3,
						x: 281,
						y: 332,
						end: true
					},
					'F': {
						type: 4,
						x: 388,
						y: 124,
						resource: 1,
						route: 'H'
					},
					'G': {
						type: 1,
						x: 430,
						y: 187,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 490,
						y: 95,
						compDiff: {
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							1: ['1','2'],
						},
						routeL: { 15: 'I', 12: 'J' }
					},
					'I': {
						type: 1,
						x: 565,
						y: 158,
						compDiff: {
							2: ['1','2','3'],
							1: ['5','6'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['5','6'],
						},
						compDiffF: {
							2: ['4'],
							1: ['7'],
						},
						compHQF: {
							80: ['4'],
							1: ['7'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 593,
						y: 96,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Third Operation Kon',
				fleetTypes: [2],
				bgmMap: 2001,
				bgmDN: 25,
				bgmNN: 25,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 9,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				giveLock: 2,
				checkLock: [1],
				reward: { ships: [176], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 131,
						routeC: function(ships) {
							if (ships.aCV >= 2 || ships.escort.CLT >= 2) return 'A';
							if (ships.LHA + ships.AV + ships.CL + ship.DD <= 0) return 'A';
							if (ships.CV + ships.CVB + ships.BB + ships.FBB) return 'B';
							if (ships.BBV <= 2 && ships.CA + ships.CAV + ships.CLT + (ships.CL + ships.DD)/2 <= 3) return 'C';
							return 'B';
						}
					},
					'A': {
						type: 4,
						x: 94,
						y: 218,
						resource: 1,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 275,
						y: 311,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','4'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 287,
						y: 169,
						compDiff: {
							2: ['1','2'],
							1: ['1','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['1','3'],
						},
						route: 'E'
					},
					'D': {
						type: 3,
						x: 295,
						y: 89,
						end: true
					},
					'E': {
						type: 4,
						x: 385,
						y: 143,
						resource: 1,
						routeL: { 100: 'G', 97: 'D' }
					},
					'F': {
						type: 1,
						x: 398,
						y: 319,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','4'],
						},
						routeC: function(ships) {
							if (ships.LHA) return 'H';
							if (isShipInList(ships.ids,62) && isShipInList(ships.ids,65)) return 'H';
							if (isShipInList(ships.escort.ids,50) && isShipInList(ships.escort.ids,138)) return 'H';
							if (ships.BBV == 2) return (Math.random() < .75)? 'H' : 'E';
							if (ships.CA == 2) return (Math.random() < .75)? 'H' : 'E';
							return (Math.random() < .75)? 'E' : 'H';
						}
					},
					'G': {
						type: 1,
						x: 468,
						y: 86,
						compDiff: {
							2: ['1','2'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.aCV || ships.escort.CA + ships.escort.CAV) return 'H';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 515,
						y: 168,
						compDiff: {
							2: ['1','2','3'],
							1: ['3','4','5'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['3','4','5'],
						},
						routeL: { 100: 'I', 97: 'J' }
					},
					'I': {
						type: 1,
						x: 631,
						y: 124,
						compDiff: {
							2: ['1','2'],
							1: ['4','5'],
						},
						compHQ: {
							85: ['1','2'],
							1: ['4','5'],
						},
						compDiffF: {
							2: ['3'],
							1: ['6'],
						},
						compHQF: {
							85: ['3'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 649,
						y: 226,
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Operation Intercept Task Force',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 25,
				bgmNN: 25,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 10,
				maphp: {
					3: { 1: 2420 },
					2: { 1: 2420 },
					1: { 1: 2220 },
				},
				finalhp: {
					3: 390,
					2: 390,
					1: 370,
				},
				reward: {
					ships: [415],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 172,
						routeC: function(ships) {
							if (ships.escort.DD == 2 && ships.escort.CLT >= 2) return 'C';
							if (ships.escort.DD >= 5) return (Math.random() < .75)? 'B' : 'C';
							if (ships.escort.DD == 4) return (Math.random() < .5)? 'B' : 'C';
							if (ships.escort.DD == 3) return (Math.random() < .25)? 'B' : 'C';
							return 'C';
						}
					},
					'A': {
						type: 3,
						x: 168,
						y: 281,
						end: true
					},
					'B': {
						type: 3,
						x: 232,
						y: 95,
						route: 'D'
					},
					'C': {
						type: 1,
						x: 236,
						y: 168,
						subonly: true,
						compDiff: {
							2: ['1','2','3'],
							1: ['4','5'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['4','5'],
						},
						routeC: function(ships) {
							let letter = checkELoS33(getELoS33(1,1,true),{ 90: 'X', 87: 'A' });
							if (letter == 'A') return 'A';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'D': {
						type: 1,
						x: 356,
						y: 129,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 3) return 'E';
							if (ships.aBB + ships.escort.aBB >= 5) return 'E';
							if (ships.aBB + ships.escort.aBB == 4) return (Math.random() < .25)? 'G' : 'E';
							if (ships.aBB + ships.escort.aBB == 3) return (Math.random() < .75)? 'G' : 'E';
							if (ships.aBB + ships.escort.aBB <= 2) return 'G';
						}
					},
					'E': {
						type: 1,
						x: 375,
						y: 269,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['1','2','3','4'],
						},
						compHQ: {
							1: ['1','2','3','4'],
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 422,
						y: 95,
						end: true
					},
					'G': {
						type: 1,
						x: 482,
						y: 175,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							this.showLoSPlane = 'J';
							if (checkELoS33(getELoS33(1,1,true),{ 90: 'X', 87: 'F' }) == 'F') return 'F';
							if (ships.aCV <= 2 && ships.LHA + ships.CL) return this.showLoSPlane = 'J';
							if (ships.aCV >= 3 && ships.aBB >= 2) return this.showLoSPlane = 'I';
							if (ships.CV + ships.CVB >= 3) return this.showLoSPlane = 'I';
							if (ships.CVL >= 4) return this.showLoSPlane = (Math.random() < .9)? 'J' : 'I';
							if (ships.aCV <= 3 && ships.CV + ships.CVB <= 2) return this.showLoSPlane = 'J';
							return this.showLoSPlane = (Math.random() < .5)? 'H' : 'J';
						}
					},
					'H': {
						type: 1,
						x: 543,
						y: 268,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 578,
						y: 107,
						compDiff: {
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['1','2'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 637,
						y: 190,
						compDiff: {
							2: ['1','2'],
							1: ['4','5'],
						},
						compHQ: {
							90: ['1','2'],
							1: ['4','5'],
						},
						compDiffF: {
							2: ['3'],
							1: ['6'],
						},
						compHQF: {
							90: ['3'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	29: {
		name: 'Winter 2015',
		date: '2015-02-06',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/0Hva9QA.png',
		bannerImgAlt: 'http://i.imgur.com/eLlUiO1.png',
		disableMore: { ships: [431,154,331] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Wreck the enemy submarines around our anchorage!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 32,
				bgmNB: 32,
				bossnode: 9,
				maphp: {
					3: { 1: 200 },
					2: { 1: 180 },
					1: { 1: 180 },
				},
				finalhp: {
					3: 48,
					2: 45,
					1: 45,
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 355,
						y: 238,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 338,
						y: 319,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 252,
						y: 305,
						route: 'E'
					},
					'C': {
						type: 3,
						x: 481,
						y: 340,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 611,
						y: 260,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 144,
						y: 257,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'F': {
						type: 3,
						x: 160,
						y: 147,
						routeL: { 3: 'H', 0: 'J' }
					},
					'G': {
						type: 1,
						x: 589,
						y: 174,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CL >= 5) return 'K';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 329,
						y: 88,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						routeC: function(ships) {
							if (ships.CL >= 4) {
								this.showLoSPlane = null;
								return 'J';
							}
							if (ships.CL > 1) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,1),{ 8: 'I', 5: 'G' });
						}
					},
					'I': {
						type: 1,
						x: 546,
						y: 101,
						subonly: true,
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
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 257,
						y: 200,
						end: true
					},
					'K': {
						type: 3,
						x: 647,
						y: 125,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Bombing of Truk anchorage',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 33,
				bgmNB: 33,
				bossnode: 9,
				maphp: {
					3: { 1: 736 },
					2: { 1: 736 },
					1: { 1: 736 },
				},
				finalhp: {
					3: 160,
					2: 160,
					1: 160,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 247,
						y: 185,
						routeC: function(ships) {
							if (ships.aBB > 2) return 'B';
							if (ships.CV + ships.CVB > 2) return 'B';
							if (ships.CLT > 1) return 'B';
							if (ships.DD + ships.CL + ships.CVL + ships.LHA + ships.AR >= 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 336,
						y: 240,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.CL >= 1 && ships.CAV <= 1 && ships.DD+ships.CAV >= 4) return 'D';
							return 'F';
						}
					},
					'B': {
						type: 4,
						x: 210,
						y: 108,
						resource: 1,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'J';
							if (ships.DD + ships.CL + ships.CVL + ships.LHA + ships.AR <= 0) return 'J';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 360,
						y: 113,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 247,
						y: 307,
						route: 'E'
					},
					'E': {
						type: 1,
						x: 423,
						y: 285,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 469,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.DD >= 1 && ships.aCV <= 4 && ships.CV + ships.CVB <= 1 && ships.aBB + ships.CV + ships.CVB <= 2 && ships.CLT <= 1) return 'G';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 557,
						y: 328,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 20: 'I', 17: 'L' }
					},
					'H': {
						type: 1,
						x: 565,
						y: 134,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 20: 'I', 17: 'K' }
					},
					'I': {
						type: 1,
						x: 638,
						y: 210,
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
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 108,
						y: 192,
						end: true
					},
					'K': {
						type: 3,
						x: 645,
						y: 94,
						end: true
					},
					'L': {
						type: 3,
						x: 659,
						y: 276,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Combined Fleet, sortie now!',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 34,
				bgmNB: 34,
				bossnode: 11,
				maphp: {
					3: { 1: 1080 },
					2: { 1: 1080 },
					1: { 1: 1000 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 210,
				},
				reward: { ships: [431], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 103,
						y: 152,
						routeC: function(ships) {
							if (isShipInList(ships.escort.ids,56) && isShipInList(ships.escort.ids,137)) return 'C';
							if (ships.CAV == 2) return 'C';
							return (Math.random() < .7)? 'A' : 'C';
						}
					},
					'A': {
						type: 3,
						x: 235,
						y: 112,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 349,
						y: 178,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'F';
							if (ships.escort.aBB + ships.escort.CLT) return 'F';
							if (ships.escort.DD >= 4) return 'C';
							if (ships.aBB >= 4) return 'F';
							if (ships.aCV >= 4) return 'F';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 314,
						y: 273,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							return 'E';
						}
					},
					'D': {
						type: 3,
						x: 213,
						y: 313,
						end: true
					},
					'E': {
						type: 4,
						x: 418,
						y: 330,
						resource: 1,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'F';
							if (ships.escort.aBB + ships.escort.CLT) return 'F';
							if (ships.escort.DD >= 4) return 'H';
							if (ships.aBB >= 4) return 'F';
							if (ships.aCV >= 4) return 'F';
							return 'H';
						}
					},
					'F': {
						type: 1,
						x: 429,
						y: 265,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 2) return 'G';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 495,
						y: 150,
						compDiff: {
							3: ['1','2'],
							2: ['1','2'],
							1: ['1','2'],
						},
						routeL: { 80: 'I', 77: 'J' }
					},
					'H': {
						type: 1,
						x: 543,
						y: 313,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 613,
						y: 215,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						route: 'K'
					},
					'J': {
						type: 3,
						x: 629,
						y: 89,
						end: true
					},
					'K': {
						type: 1,
						x: 655,
						y: 278,
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
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Seize the Enemy Task Force!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 35,
				bgmNB: 35,
				bossnode: 11,
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
				reward: { ships: [154], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 192,
						routeC: function(ships) {
							if (ships.CLT >= 2) return 'A';
							if (ships.speed >= 10 && ships.aCV && ships.CL + ships.DD >= 3) return 'A';
							if (ships.speed >= 10 && ships.aCV >= 2) return 'A';
							if (ships.CL == 1 && ships.DD >= 4 && ships.CLT + ships.CA + ships.CAV + ships.DD - 4 == 1) return 'E';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 141,
						y: 117,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						routeC: function(ships) {
							return (Math.random() < .5)? 'E' : 'C';
						}
					},
					'B': {
						type: 3,
						x: 272,
						y: 203,
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aCV + ships.CLT <= 0) return 'D';
							if (isShipInList(ships.ids,56) || isShipInList(ships.ids,137) || (isShipInList(ships.ids,415) && isShipInList(ships.ids,122))) return 'D';
							return 'F';
						}
					},
					'C': {
						type: 3,
						x: 81,
						y: 235,
						end: true
					},
					'D': {
						type: 1,
						x: 328,
						y: 274,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'E': {
						type: 4,
						x: 400,
						y: 101,
						resource: 1,
						route: 'H'
					},
					'F': {
						type: 1,
						x: 402,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 454,
						y: 314,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 504,
						y: 142,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'J';
							if (ships.BBV >= 2) return 'J';
							return 'I';
						}
					},
					'I': {
						type: 1,
						x: 582,
						y: 291,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 18: 'K', 15: 'M' }
					},
					'J': {
						type: 1,
						x: 611,
						y: 96,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 18: 'K', 15: 'L' }
					},
					'K': {
						type: 1,
						x: 622,
						y: 206,
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
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 662,
						y: 153,
						end: true
					},
					'M': {
						type: 3,
						x: 666,
						y: 257,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Decisive Battle! Combined Fleet, Begin Counterattack!',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 36,
				bgmNB: 36,
				bossnode: 10,
				maphp: {
					3: { 1: 3000 },
					2: { 1: 3000 },
					1: { 1: 3000 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 415,
				},
				reward: {
					ships: [331],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 200,
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'A';
							if (ships.escort.CLT >= 2 || ships.escort.SS + ships.escort.SSV) return 'A';
							if (ships.speed >= 10) return 'B';
							if (isShipInList(ships.escort.ids,56) || isShipInList(ships.escort.ids,137) || (isShipInList(ships.escort.ids,415) && isShipInList(ships.escort.ids,122))) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 233,
						y: 207,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.AR + ships.CT) return 'C';
							if (ships.escort.SS + ships.escort.SSV) return 'C';
							return (Math.random() < .7)? 'D' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 220,
						y: 310,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 313,
						y: 120,
						routeC: function(ships) {
							if (ships.escort.SS + ships.escort.SSV) return 'M';
							return 'E';
						}
					},
					'D': {
						type: 4,
						x: 356,
						y: 274,
						resource: 1,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return (Math.random() < .75)? 'E' : 'F';
							return (Math.random() < .75)? 'F' : 'E';
						}
					},
					'E': {
						type: 1,
						x: 453,
						y: 90,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CLT >= 3) return 'L';
							return (Math.random() < .5)? 'G' : 'H';
						}
					},
					'F': {
						type: 1,
						x: 473,
						y: 309,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CLT >= 3) return 'K';
							return (Math.random() < .5)? 'G' : 'I';
						}
					},
					'G': {
						type: 1,
						x: 521,
						y: 207,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 629,
						y: 142,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 628,
						y: 278,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 599,
						y: 208,
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
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 584,
						y: 333,
						end: true
					},
					'L': {
						type: 3,
						x: 635,
						y: 80,
						end: true
					},
					'M': {
						type: 3,
						x: 182,
						y: 108,
						end: true
					},
				}
			}
		}
	},
	30: {
		name: 'Spring 2015',
		date: '2015-04-28',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/Hjh3Gbj.png',
		bannerImgAlt: 'http://i.imgur.com/3NvBtqp.png',
		disableMore: { ships: [332,441,445] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Begin Preparation, Operation No.11!',
				fleetTypes: [0],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 8,
				maphp: {
					3: { 1: 440 },
					2: { 1: 440 },
					1: { 1: 440 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 663,
						y: 264,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 591,
						y: 214,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 482,
						y: 246,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 395,
						y: 145,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CL >= 4) {
								this.showLoSPlane = null;
								return 'E';
							}
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,1),{ 15: 'H', 14: 'E' });
						}
					},
					'D': {
						type: 1,
						x: 355,
						y: 320,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 274,
						y: 102,
						end: true
					},
					'F': {
						type: 1,
						x: 208,
						y: 287,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CL >= 5) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,1),{ 15: 'H', 14: 'G' });
						}
					},
					'G': {
						type: 3,
						x: 129,
						y: 233,
						end: true
					},
					'H': {
						type: 1,
						x: 232,
						y: 185,
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
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: '2nd Curry Ocean Operation',
				fleetTypes: [1,2],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 11,
				maphp: {
					3: { 1: 1620 },
					2: { 1: 1620 },
					1: { 1: 1620 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 270,
				},
				reward: { ships: [332], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 599,
						y: 316,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'A';
							return 'C';
						}
					},
					'A': {
						type: 1,
						x: 645,
						y: 217,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 509,
						y: 170,
						routeS: ['D','E']
					},
					'C': {
						type: 3,
						x: 491,
						y: 287,
						route: 'F'
					},
					'D': {
						type: 1,
						x: 430,
						y: 97,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 382,
						y: 225,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 370,
						y: 310,
						routeS: ['E','H']
					},
					'G': {
						type: 1,
						x: 325,
						y: 133,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 3: 'K', 0: 'I' }
					},
					'H': {
						type: 4,
						x: 245,
						y: 320,
						resource: 1,
						route: 'J'
					},
					'I': {
						type: 3,
						x: 240,
						y: 91,
						end: true
					},
					'J': {
						type: 1,
						x: 186,
						y: 284,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'E'
					},
					'K': {
						type: 1,
						x: 191,
						y: 194,
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
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Disruption of the Bay of Bagel Trade Route',
				fleetTypes: [0],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 10,
				maphp: {
					3: { 1: 910 },
					2: { 1: 910 },
					1: { 1: 845 },
				},
				finalhp: {
					3: 130,
					2: 130,
					1: 130,
				},
				giveLock: 1,
				checkLock: [2,3],
				nodes: {
					'Start': {
						type: 0,
						x: 660,
						y: 243,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 5) return 'A';
							if (ships.aBB + ships.CA + ships.CAV >= 4) return 'A';
							if (ships.CA + ships.CAV >= 3) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 561,
						y: 152,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 518,
						y: 322,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 486,
						y: 230,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 465,
						y: 133,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 376,
						y: 98,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 18: 'J', 15: 'G' }
					},
					'F': {
						type: 3,
						x: 364,
						y: 286,
						routeS: ['D','H']
					},
					'G': {
						type: 3,
						x: 304,
						y: 191,
						end: true
					},
					'H': {
						type: 1,
						x: 215,
						y: 320,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 174,
						y: 200,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['3'],
						},
						routeL: { 18: 'J', 15: 'G' }
					},
					'J': {
						type: 1,
						x: 253,
						y: 94,
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
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Decisive battle! Ri-Ranka Island Tactical Operation',
				fleetTypes: [1,2],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 13,
				maphp: {
					3: { 1: 3200 },
					2: { 1: 3200 },
					1: { 1: 2900 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 2,
				checkLock: [1,3],
				reward: { ships: [441], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 661,
						y: 213,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 533,
						y: 127,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.escort.SS + ships.escort.SSV) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 522,
						y: 305,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 480,
						y: 220,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 456,
						y: 79,
						end: true
					},
					'E': {
						type: 1,
						x: 441,
						y: 155,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.escort.SS + ships.escort.SSV) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'M', 0: 'G' });
						}
					},
					'F': {
						type: 3,
						x: 379,
						y: 280,
						routeS: ['E','I']
					},
					'G': {
						type: 1,
						x: 370,
						y: 126,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						end: true
					},
					'H': {
						type: 3,
						x: 269,
						y: 248,
						routeS: ['J','M']
					},
					'I': {
						type: 1,
						x: 246,
						y: 331,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4','5'],
						},
						route: 'K'
					},
					'J': {
						type: 2,
						x: 208,
						y: 153,
						resource: 1,
						amount: [55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150],
						end: true
					},
					'K': {
						type: 1,
						x: 126,
						y: 254,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4','5'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'L': {
						type: 3,
						x: 82,
						y: 167,
						end: true
					},
					'M': {
						type: 1,
						x: 339,
						y: 176,
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
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Raid on Apricot Atoll Anchorage',
				fleetTypes: [0],
				bgmMap: 2130,
				bgmDN: 40,
				bgmNN: 40,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 14,
				maphp: {
					3: { 1: 2410 },
					2: { 1: 2410 },
					1: { 1: 2110 },
				},
				finalhp: {
					3: 430,
					2: 430,
					1: 430,
				},
				giveLock: 3,
				checkLock: [1,2],
				nodes: {
					'Start': {
						type: 0,
						x: 640,
						y: 114,
						routeC: function(ships) {
							if (ships.SS + ships.SSV && ships.aBB <= 0) return (Math.random() < .75)? 'B' : 'A';
							if (ships.FBB && ships.BB + ships.BBV) return (Math.random() < .75)? 'A' : 'B';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 604,
						y: 250,
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'D';
							if (isShipInList(ships.ids,70) && isShipInList(ships.ids,120)) return 'D';
							if (isShipInList(ships.ids,124) && isShipInList(ships.ids,125)) return 'D';
							if (isShipInList(ships.ids,23) + isShipInList(ships.ids,69) + isShipInList(ships.ids,76) >= 2) return 'D';
							if (isShipInList(ships.ids,9) && isShipInList(ships.ids,54)) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 4,
						x: 508,
						y: 114,
						resource: 1,
						route: 'D'
					},
					'C': {
						type: 1,
						x: 488,
						y: 309,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 446,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,70) && isShipInList(ships.ids,120)) return 'G';
							if (isShipInList(ships.ids,124) && isShipInList(ships.ids,125)) return 'G';
							if (isShipInList(ships.ids,23) + isShipInList(ships.ids,69) + isShipInList(ships.ids,76) >= 2) return 'G';
							if (isShipInList(ships.ids,9) && isShipInList(ships.ids,54)) return 'G';
							if (isShipInList(ships.ids,83) &&  isShipInList(ships.ids,90) && isShipInList(ships.ids,91)) return 'G';
							return 'F';
						}
					},
					'E': {
						type: 3,
						x: 393,
						y: 325,
						end: true
					},
					'F': {
						type: 1,
						x: 365,
						y: 247,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeL: { 3: 'H', 0: 'E' }
					},
					'G': {
						type: 2,
						x: 333,
						y: 135,
						resource: 1,
						amount: [50,100,150],
						route: 'H'
					},
					'H': {
						type: 3,
						x: 246,
						y: 227,
						routeS: ['I','K']
					},
					'I': {
						type: 1,
						x: 243,
						y: 337,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.aBB >= 5 || ships.BBV >= 3) {
								this.showLoSPlane = null;
								return 'E';
							}
							this.showLoSPlane = 'N';
							return checkELoS33(getELoS33(1,1),{ 3: 'N', 0: 'E' });
						}
					},
					'J': {
						type: 2,
						x: 181,
						y: 72,
						resource: 2,
						amount: [70,100,135],
						end: true
					},
					'K': {
						type: 4,
						x: 167,
						y: 186,
						resource: 1,
						route: 'L'
					},
					'L': {
						type: 1,
						x: 111,
						y: 215,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV >= 5 || ships.aBB + ships.CV >= 3) {
								this.showLoSPlane = null;
								return 'J';
							}
							this.showLoSPlane = 'N';
							return checkELoS33(getELoS33(1,1),{ 3: 'N', 0: 'M' });
						}
					},
					'M': {
						type: 3,
						x: 105,
						y: 111,
						end: true
					},
					'N': {
						type: 1,
						x: 155,
						y: 290,
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
						end: true,
						boss: true
					},
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Relentless Operation! Across the Stebian Sea',
				fleetTypes: [1,2],
				bgmMap: 2130,
				bgmDN: 40,
				bgmNN: 40,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 15,
				maphp: {
					3: { 1: 3300 },
					2: { 1: 3030 },
					1: { 1: 3030 },
				},
				finalhp: {
					3: 500,
					2: 415,
					1: 415,
				},
				reward: {
					ships: [445],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 489,
						y: 113,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'D';
							if (ships.speed >= 10) return 'B';
							return 'F';
						}
					},
					'A': {
						type: 4,
						x: 638,
						y: 247,
						resource: 1,
						routeC: function(ships) {
							if (ships.escort.CLT >= 3) return 'C';
							return 'E';
						}
					},
					'B': {
						type: 3,
						x: 612,
						y: 163,
						route: 'A'
					},
					'C': {
						type: 3,
						x: 593,
						y: 324,
						end: true
					},
					'D': {
						type: 3,
						x: 538,
						y: 233,
						route: 'E'
					},
					'E': {
						type: 3,
						x: 456,
						y: 302,
						routeS: ['H','J']
					},
					'F': {
						type: 3,
						x: 423,
						y: 213,
						routeS: ['G','H']
					},
					'G': {
						type: 1,
						x: 332,
						y: 146,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 3) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'I', 0: 'L' });
						}
					},
					'H': {
						type: 1,
						x: 318,
						y: 273,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 247,
						y: 183,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'M'
					},
					'J': {
						type: 1,
						x: 226,
						y: 331,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'N'
					},
					'K': {
						type: 1,
						x: 209,
						y: 239,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'M'
					},
					'L': {
						type: 3,
						x: 199,
						y: 84,
						end: true
					},
					'M': {
						type: 1,
						x: 144,
						y: 146,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV && Math.random() < .5) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'O';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'O', 0: 'L' });
						}
					},
					'N': {
						type: 1,
						x: 118,
						y: 253,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'M'
					},
					'O': {
						type: 1,
						x: 76,
						y: 179,
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
						end: true,
						boss: true
					},
				}
			}
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
		disableMore: { ships: [459,460,443,422] },
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
				reward: { ships: [459], firstOnly: true },
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
						routeL: { 3:'Z', 0:'L' },
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
						routeL: { 3:'H', 0:'L' },
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
						routeL: {3:'Z',0:'H'},
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
						routeL: {3:'Z',0:'J'},
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
				reward: { ships: [460], firstOnly: true },
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
						routeL: {3:'Z',0:'L'},
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
				bossnode: 26,
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
				reward: { ships: [443], firstOnly: true },
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
					if (!debuff) return false;
					return (debuff.C && debuff.X && debuff.Y);
				},
				reward: {
					'ships': [422],
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
						debuffGive: function(fleetsE,fleetsF) {
							let ships = fleetsE[0].ships;
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
						routeL: {3:'M',0:'P'},
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
						debuffGive: function(fleetsE,fleetsF) {
							let ships = fleetsE[0].ships;
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
						debuffGive: function(fleetsE,fleetsF) {
							let ships = fleetsE[0].ships;
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
		transportCalc: transportCalcFall15,
		disableMore: { ships: [465,455] },
		overrideStats: {
			1644: { AR: 53 },
			1645: { AR: 73 },
			1646: { AR: 93 },
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
						subonly: true,
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
				reward: { ships: [465], firstOnly: true },
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
						routeL: { 3: 'K', 0: 'J' }
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
					if (!debuff) return false;
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
						debuffGive: function(fleetsE,fleetsF) {
							if (fleetsE[0].ships[0].HP <= 0) CHDATA.event.maps[4].debuff.J = true;
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
						debuffGive: function(fleetsE,fleetsF) {
							if (fleetsE[0].ships[0].HP <= 0) CHDATA.event.maps[4].debuff.M = true;
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
						routeL: { 3: 'O', 0: 'L' }
					},
					'O': {
						type: 1,
						x: 76,
						y: 112,
						subonly: true,
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
					if (!debuff) return false;
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
						debuffGive: function(fleetsE,fleetsF) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of fleetsE[0].ships) {
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
						resource: 0,
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
						debuffGive: function(fleetsE,fleetsF) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of fleetsE[0].ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						routeL: { 3: 'N', 0: 'M' }
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
						debuffGive: function(fleetsE,fleetsF) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of fleetsE[0].ships) {
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
	33: {
		name: 'Winter 2016',
		date: '2016-02-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/EOmqNW3.png',
		bannerImgAlt: 'http://i.imgur.com/6VkAYeA.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcFall15,
		overrideStats: {
			1644: { AR: 53 },
			1645: { AR: 73 },
			1646: { AR: 93 },
		},
		disableMore: { ships: [423,448] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation of "Operation Rei-Go"',
				fleetTypes: [0],
				bgmMap: 2033,
				bgmDN: 58,
				bgmNN: 58,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: 10,
				maphp: {
					3: { 1: 800},
					2: { 1: 650},
					1: { 1: 550},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV || ships.BB || ships.CVB || ships.FBB) errors.push('Fleet must not contain CV(B), (F)BB');
				},
				debuffCheck: function(debuff) {
					// Add a debuff to SS Hime added in a silent update by KC devs when the event was realeased
					// Source : https://kancolle.wikia.com/wiki/Winter_2016_Event#/E-1
					// Additional 22.1 damage for SS Hime with 110/130 armor and 16 damage for the 160 armor version.
					// will activate this 12 runs later to simulate "update"
					if (!debuff) return false;
					return debuff.count >= 12;
				},
				finalhp: {
					3: 160,
					2: 130,
					1: 110,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 221,
						y: 197,
						routeC: function(ships) { //random if 2+ DD without kasumi 100% A if Kasumi Flagship
							var hasKasumiAsFlagship = ships.ids[0] === 49 || ships.ids[0] === 253 || ships.ids[0] === 470 || ships.ids[0] === 464;
							if (hasKasumiAsFlagship) return 'A';
							if(ships.DD >= 2) return (Math.random() < .5)? 'A' : 'B';
							return 'B';
						},
					},
					'A': {
						type: 1,
						x: 323,
						y: 124,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2', 'Hard 3','Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						route: 'E'
					},
					'B': {
						type: 1,
						x: 340,
						subonly: true,
						y: 212,
						compDiff: {
							3: ['Hard 1','Hard 2', 'Hard 3','Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5'],
						},
						route: 'F'
					},
					'C': {
						type: 3,
						x: 354,
						y: 331,
						end: true
					},
					'D': {
						type: 1,
						x: 420,
						y: 292,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						routeC: function(ships) { //Suppossed to be a LOS check (unknown values) and C is forced if >= 3CVL
							if (ships.CVL >= 3) {
								this.showLoSPlane = false;
								return 'C';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1,1),{ 3: 'J', 0: 'C' });
						}
					},
					'E': {
						type: 3,
						x: 451,
						y: 151,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 486,
						y: 228,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'D'
					},
					'G': {
						type: 1,
						x: 545,
						y: 124,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 554,
						raid: true,
						y: 296,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'D'
					},
					'I': {
						type: 1,
						x: 611,
						y: 211,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'H'
					},
					'J': {
						type: 1,
						x: 318,
						y: 283,
						subonly: true,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2'],
						},
						debuffAmount: { 1644: 22.1, 1645: 22.1, 1646: 16 },
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.count = CHDATA.event.maps[1].debuff.count + 1 || 1;
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Sortie! "Operation Rei-Go"',
				fleetTypes: [0],
				bgmMap: 2033,
				bgmDN: 58,
				bgmNN: 58,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: 15,
				maphp: {
					3: { 1: 3000},
					2: { 1: 2830},
					1: { 1: 2780},
				},
				finalhp: {
					3: 600,
					2: 430,
					1: 380,
				},
				reward: { ships: [423], firstOnly: true },
				startCheck: function(ships) {
					var hasKasumiAsashimoKiyoshimoAshigara = isShipInList(ships.ids, 49) &&  isShipInList(ships.ids, 425) && isShipInList(ships.ids, 410) && isShipInList(ships.ids, 64);
					var bannedFromNorthShips = ships.BB + ships.BBV + ships.FBB + ships.CV + ships.CVB + ships.CVL + ships.AO + ships.LHA;
					if ( hasKasumiAsashimoKiyoshimoAshigara && bannedFromNorthShips === 0 ) return 'Start1';
					if ( (ships.CL === 1 || ships.CL === 2) && ships.DD >= 3 && (ships.CA + ships.CAV + ships.CLT) <= 2 && bannedFromNorthShips === 0 ) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 64,
						y: 184,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 111,
						y: 267,
						route: 'C'
					},
					'A': {
						type: 1,
						x: 142,
						y: 97,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						routeC: function (ships) {
							var nbReiGoShips = isShipInList(ships.ids, 49) +  isShipInList(ships.ids, 425) + isShipInList(ships.ids, 410) + isShipInList(ships.ids, 64) + isShipInList(ships.ids, 183);
							if (nbReiGoShips >= 4) return 'E';
							if ( ships.CA === 1 && ships.CL === 1 && ships.CLT === 1 && ships.DD === 3) return 'E';
							if (ships.CA + ships.CAV >= 0) return (Math.random() < .5)? 'E' : 'B';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 193,
						y: 172,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 223,
						y: 318,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						routeC: function (ships) {
							var nbCVandBB = ships.CV + ships.CVB + ships.BB + ships.FBB + ships.BBV;
							if ( isShipInList(ships.ids, 131) || isShipInList(ships.ids, 143) || ships.DD < 2 || (ships.CV + ships.CVL + ships.CVB) > 1) return 'D';
							if ( isShipInList(ships.ids, 77) && isShipInList(ships.ids, 87) && nbCVandBB <= 4) return 'G';
							if ( isShipInList([ships.ids[0]],49) && nbCVandBB <= 3) return 'G';
							if ( nbCVandBB <= 2) return 'G';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 250,
						y: 251,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'G'
					},
					'E': {
						type: 3,
						x: 255,
						y: 97,
						routeS: ['I','F']
					},
					'F': {
						type: 1,
						x: 276,
						y: 179,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 330,
						y: 318,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'K'
					},
					'H': {
						type: 1,
						x: 346,
						y: 235,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function (ships) { //Lack of information on wikis. What i've done : if reigo >= 4 -> J if NON reigo + kasumi flag -> J ELSE -> L
							var nbReiGoShips = isShipInList(ships.ids, 49) +  isShipInList(ships.ids, 425) + isShipInList(ships.ids, 410) + isShipInList(ships.ids, 64) + isShipInList(ships.ids, 183);
							if ( nbReiGoShips >= 4 ) return 'J';
							if ( isShipInList([ships.ids[0]],49) ) return 'J';
							return 'L';
						}
					},
					'I': {
						type: 1,
						x: 342,
						y: 98,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 398,
						y: 169,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'M'
					},
					'K': {
						type: 1,
						x: 422,
						y: 319,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						routeC: function (ships) {
							if ( (ships.SS + ships.SSV) > 0 || ships.DD < 2 ) return 'L';
							var nbCVandBB = ships.CV + ships.CVB + ships.BB + ships.FBB + ships.BBV;
							if ( isShipInList(ships.ids, 77) && isShipInList(ships.ids, 87) && nbCVandBB <= 3) return 'N';
							if ( isShipInList([ships.ids[0]],49) && nbCVandBB <= 3) return 'N';
							if ( nbCVandBB <= 2) return 'N';
							return 'L';
						}
					},
					'L': {
						type: 1,
						x: 433,
						y: 243,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 498,
						y: 180,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'O'
					},
					'N': {
						type: 1,
						x: 501,
						y: 302,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'O'
					},
					'O': {
						type: 1,
						x: 546,
						y: 254,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
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
				nameT: 'Operation Shou-Go 4',
				fleetTypes: [1,2,3],
				bgmMap: 2033,
				bgmDN: 60,
				bgmNN: 60,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: [20,19],
				parts: {
					1: {
						currentBoss: 'S',
						fleetTypes: [3],
						maphp: {
							3: { 1: 500},
							2: { 1: 400},
							1: { 1: 300},
						},
						transport: 'G',
					},
					2: {
						currentBoss: 'T',
						fleetTypes: [1,2,3],
						maphp: {
							3: { 1: 2250},
							2: { 1: 1750},
							1: { 1: 1600},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				reward: {
					'ships': [448],
				},
				startCheck: function(ships) {
					if (CHDATA.fleets.combined === 1) return 'Start2'; //CTF
					if (CHDATA.fleets.combined === 2) return 'Start3'; //STF
					if (CHDATA.fleets.combined === 3) return 'Start1'; //TCF
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 65,
						y: 236,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 236,
						y: 266,
						routeC: function (ships) {
							if (ships.escort.CLT >= 2 ||
								ships.CV >= 3 ||
								(ships.CVL + ships.escort.CVL + ships.CV) >= 4 ||
								ships.CVB >= 1) return 'E';
							return 'F';
						}
					},
					'Start3': {
						type: 0,
						x: 426,
						y: 93,
						route: 'J'
					},
					'A': {
						type: 1,
						x: 153,
						y: 197,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 215,
						y: 119,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						routeC: function (ships) {
							if(ships.speed >= 10 && ships.escort.speed >= 10) return 'D';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 286,
						y: 161,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium'],
							3: ['Hard 1', 'Hard 2'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 299,
						y: 87,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 330,
						y: 222,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 331,
						y: 310,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 379,
						y: 88,
						resource: 0,
						route: 'S'
					},
					'H': {
						type: 1,
						x: 405,
						y: 244,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 464,
						y: 318,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium 1', 'Medium 2'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						route: 'L'
					},
					'J': {
						type: 3,
						x: 493,
						y: 147,
						routeS: ['K','M'],
					},
					'K': {
						type: 1,
						x: 505,
						y: 226,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						route: 'I',
					},
					'L': {
						type: 1,
						x: 549,
						y: 276,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						compDiffF: {
							1: ['Easy 3'],
							2: ['Medium 4'],
							3: ['Hard 4'],
						},
						routeC: function (ships) { //LOS check here but unknown values
							if(ships.escort.SS + ships.escort.SSV >= 1) {
								this.showLoSPlane = false;
								return 'O';
							}
							this.showLoSPlane = 'T';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'T', 0: 'O' });
						}
					},
					'M': {
						type: 1,
						x: 575,
						y: 114,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						route: 'P',
					},
					'N': {
						type: 1,
						x: 589,
						y: 217,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						routeC: function (ships) {
							if(ships.speed >= 10 && (ships.BB + ships.BBV + ships.CV + ships.CVB <= 1)) return 'T';
							return 'Q';
						}
					},
					'O': {
						type: 3,
						x: 593,
						y: 327,
						end: true,
					},
					'P': {
						type: 1,
						x: 640,
						y: 152,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						routeC: function (ships) { // LOS check here ?
							if(ships.escort.speed < 10) return 'R';
							return 'N';
						}
					},
					'Q': {
						type: 1,
						x: 650,
						y: 210,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium'],
							3: ['Hard'],
						},
						route: 'T',
					},
					'R': {
						type: 3,
						x: 654,
						y: 87,
						end: true,
					},
					'S': {
						type: 1,
						x: 405,
						y: 169,
						boss: true,
						end: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						compDiffF: {
							1: ['Easy F'],
							2: ['Medium F'],
							3: ['Hard F'],
						},
					},
					'T': {
						type: 1,
						x: 635,
						y: 291,
						boss: true,
						end: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2'],
							2: ['Medium 1', 'Medium 2'],
							3: ['Hard 1', 'Hard 2'],
						},
						compDiffF: {
							1: ['Easy F'],
							2: ['Medium F'],
							3: ['Hard F'],
						},
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
		allowLBAS: true,
		lbasSlotCount: 12,
		lbasRangeMax: true,
		bannerImg: 'http://i.imgur.com/6zdOwyN.png',
		bannerImgAlt: 'http://i.imgur.com/8Di99lM.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		overrideStats: {
			1644: { AR: 53 },
			1645: { AR: 73 },
			1646: { AR: 93 },
		},
		disableMore: { ships: [471,449,440] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Secure the Frontline Naval Superiority!',
				fleetTypes: [1,2,3],
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
				nodes: {
					'Start': {
						type: 0,
						x: 88,
						y: 143,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 165,
						y: 258,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 196,
						y: 171,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.DD + ships.escort.DD >= 5) return 'D';
							return 'A';
						}
					},
					'C': {
						type: 1,
						x: 264,
						y: 301,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 294,
						y: 104,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 352,
						y: 217,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 436,
						y: 133,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 462,
						y: 235,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'H', 0: 'K' }
					},
					'H': {
						type: 1,
						x: 521,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 536,
						y: 103,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'J': {
						type: 1,
						x: 616,
						y: 281,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
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
					'K': {
						type: 3,
						x: 417,
						y: 319,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Land the Engineer Corps!',
				fleetTypes: [0],
				bgmMap: 2034,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 10,
				maphp: {
					3: { 1: 1500 },
					2: { 1: 1420 },
					1: { 1: 1370 },
				},
				finalhp: {
					3: 480,
					2: 480,
					1: 480,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 89,
						y: 140,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'B';
							if (ships.CVL > 1) return 'B'
							if (ships.DD < 2) return 'B';
							if (ships.CL < 1) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 173,
						y: 210,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 225,
						y: 97,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 246,
						y: 290,
						routeS: ['D','E']
					},
					'D': {
						type: 1,
						x: 332,
						y: 269,
						resource: 2,
						route: 'F'
					},
					'E': {
						type: 1,
						x: 356,
						y: 166,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.CLT >= 2 && ships.CL <= 0 && ships.DD <= 1) return 'K';
							if (ships.aBB + ships.CV + ships.CVB > 1) return 'K';
							if (ships.DD == 6) return 'K';
							if (ships.speed <= 5) return 'F';
							if (ships.aCV >= 2) return 'F';
							if (ships.CL && ships.DD >= 3) return 'H';
							return 'F';
						}
					},
					'F': {
						type: 1,
						x: 422,
						y: 330,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 529,
						y: 300,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'H': {
						type: 3,
						x: 537,
						y: 113,
						route: 'I'
					},
					'I': {
						type: 1,
						x: 611,
						y: 174,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'J': {
						type: 1,
						x: 446,
						y: 233,
						compDiff: {
							3: ['Hard 2'],
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
					'K': {
						type: 3,
						x: 393,
						y: 88,
						end: true
					},
					'L': {
						type: 3,
						x: 640,
						y: 269,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Construct a Front-line Air Base!',
				fleetTypes: [3],
				bgmMap: 2034,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 11,
				transport: 'G',
				maphp: {
					3: { 1: 550 },
					2: { 1: 420 },
					1: { 1: 310 },
				},
				giveLock: 2,
				checkLock: [1,3,4],
				reward: { ships: [471], firstOnly: true },
				nodes: {
					'Start': {
						type: 0,
						x: 228,
						y: 322,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 92,
						y: 161,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 130,
						y: 257,
						routeC: function(ships) {
							if (ships.speed >= 10) return 'D';
							return 'A';
						}
					},
					'C': {
						type: 1,
						x: 177,
						y: 108,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB >= 2) return 'E';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 277,
						y: 218,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'E': {
						type: 1,
						x: 285,
						y: 111,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'F': {
						type: 1,
						x: 350,
						y: 299,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'G': {
						type: 2,
						x: 391,
						y: 153,
						resource: 0,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'I';
							return (Math.random() < .5)? 'H' : 'J';
						}
					},
					'H': {
						type: 1,
						x: 485,
						y: 279,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'I': {
						type: 1,
						x: 497,
						y: 122,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 524,
						y: 198,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'K', 0: 'M' }
					},
					'K': {
						type: 1,
						x: 618,
						y: 233,
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
					'L': {
						type: 3,
						x: 577,
						y: 318,
						end: true
					},
					'M': {
						type: 3,
						x: 629,
						y: 121,
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Take-off! Land-based Air Force!',
				fleetTypes: [1,2],
				bgmMap: 2034,
				bgmDN: 63,
				bgmNN: 63,
				bgmDB: 67,
				bgmNB: 67,
				bossnode: 11,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 370,
					2: 370,
					1: 370,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				startCheck: function() {
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				lbas: 1,
				nodes: {
					'Start1': {
						type: 0,
						x: 86,
						y: 221,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 463,
						y: 328,
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 3) return 'C';
							if (ships.CLT + ships.escort.CLT >= 2) return 'C';
							return 'G';
						}
					},
					'A': {
						type: 1,
						x: 180,
						y: 165,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 267,
						y: 127,
						distance: 2,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 372,
						y: 196,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB >= 2) return 'H';
							if (ships.CLT + ships.escort.CLT >= 3) return 'H';
							return (Math.random() < .3)? 'H' : 'E';
						}
					},
					'D': {
						type: 1,
						x: 384,
						y: 96,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'E';
							if (ships.escort.aBB) return 'E';
							return 'F';
						}						
					},
					'E': {
						type: 1,
						x: 461,
						y: 161,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 515,
						y: 95,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'K', 0: 'L' }
					},
					'G': {
						type: 1,
						x: 556,
						y: 323,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'H';
							let weight = Math.max(0, ships.aBB - 1);
							return (Math.random() < .4*weight)? 'H' : 'I';
						}
					},
					'H': {
						type: 1,
						x: 565,
						y: 237,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 635,
						y: 288,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 679,
						y: 223,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'K', 0: 'L' }
					},
					'K': {
						type: 1,
						x: 651,
						y: 114,
						distance: 4,
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
					'L': {
						type: 3,
						x: 581,
						y: 166,
						distance: 4,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Aerial Extermination Battle of Rabaul',
				fleetTypes: [0],
				bgmMap: 2134,
				bgmDN: 62,
				bgmNN: 62,
				bgmDB: 67,
				bgmNB: 67,
				bgmLB: 62,
				bossnode: 13,
				maphp: {
					3: { 1: 4080 },
					2: { 1: 3960 },
					1: { 1: 3840 },
				},
				finalhp: {
					3: 680,
					2: 680,
					1: 640,
				},
				giveLock: 3,
				checkLock: [1,2,4],
				lbas: 2,
				reward: { ships: [449], firstOnly: true },
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 2 },
					chance: { 3: .4, 2: .4, 1: .4 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Medium 2','Medium 3','Easy 1'],
					},
				},
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 140,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 216,
						y: 186,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV) return 'B';
							if (ships.aBB > 2) return 'B';
							if (ships.DD < 3) return 'B';
							if (ships.SS + ships.SSV) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 267,
						y: 128,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 287,
						y: 253,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.CA + ships.CLT >= 2) return 'E';
							if (ships.aBB) return 'E';
							if (ships.speed >= 10 && ships.DD >= 4) return 'G';
							if (ships.speed >= 10 && ships.DD >= 3 && ships.AV && ships.CL) return 'G';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 338,
						y: 93,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'H';
							if (ships.DD >= 2 && ships.aBB + ships.aCV < 4) return 'F';
							return 'H';
						}
					},
					'E': {
						type: 1,
						x: 368,
						y: 302,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'F': {
						type: 1,
						x: 421,
						y: 193,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'G': {
						type: 2,
						x: 385,
						y: 230,
						distance: 3,
						resource: 1,
						amount: [50],
						route: 'I'
					},
					'H': {
						type: 1,
						x: 429,
						y: 84,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 468,
						y: 251,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[5].debuff.I = true;
							}
						},
						route: 'L'
					},
					'J': {
						type: 1,
						x: 493,
						y: 202,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'K': {
						type: 1,
						x: 534,
						y: 114,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + aCV >= 4) return 'O';
							return 'J';
						}
					},
					'L': {
						type: 1,
						x: 553,
						y: 266,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 625,
						y: 292,
						distance: 6,
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
					'N': {
						type: 3,
						x: 254,
						y: 322,
						distance: 3,
						end: true
					},
					'O': {
						type: 3,
						x: 608,
						y: 139,
						distance: 6,
						end: true
					},
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Friendly anchorage Recapturing Strategy',
				fleetTypes: [1],
				bgmMap: 2134,
				bgmDN: 64,
				bgmNN: 64,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 14,
				maphp: {
					3: { 1: 5400 },
					2: { 1: 4800 },
					1: { 1: 2800 },
				},
				finalhp: {
					3: 900,
					2: 900,
					1: 800,
				},
				giveLock: 4,
				checkLock: [1,2,3],
				startCheck: function() {
					let num = 0;
					for (let ship of FLEETS1[0].ships) {
						if (ship.type == 'CV' || ship.type == 'CVB' || ship.type == 'CVL') num++;
					}
					if (num >= 4) return 'Start1';
					if (num == 3) return 'Start3';
					return 'Start2';
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.A && debuff.G && debuff.L && CHDATA.event.maps[5].debuff && CHDATA.event.maps[5].debuff.I);
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 69,
						y: 178,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 193,
						y: 319,
						route: 'D'
					},
					'Start3': {
						type: 0,
						x: 234,
						y: 86,
						route: 'E'
					},
					'A': {
						type: 1,
						x: 176,
						y: 178,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						debuffGive: function() {
							var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
							if (rank == 'S') {
								CHDATA.event.maps[6].debuff.A = true;
							}
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 265,
						y: 255,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 276,
						y: 177,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 298,
						y: 320,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 354,
						y: 102,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'I'
					},
					'F': {
						type: 1,
						x: 365,
						y: 216,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 416,
						y: 269,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						debuffGive: function() {
							var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
							if (rank == 'S') {
								CHDATA.event.maps[6].debuff.G = true;
							}
						},
						routeL: { 3: 'F', 0: 'O' }
					},
					'H': {
						type: 1,
						x: 446,
						y: 184,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 4) return 'K';
							if (ships.escort.aBB) return (Math.random() < .2)? 'N' : 'K';
							return (Math.random() < .2)? 'K' : 'N';
						}
					},
					'I': {
						type: 1,
						x: 465,
						y: 116,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 526,
						y: 321,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							return 'N';
						}
					},
					'K': {
						type: 1,
						x: 576,
						y: 131,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							return 'M';
						}
					},
					'L': {
						type: 1,
						x: 613,
						y: 282,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
							if (rank == 'S') {
								CHDATA.event.maps[6].debuff.L = true;
							}
						},
						route: 'J'
					},
					'M': {
						type: 4,
						x: 633,
						y: 195,
						distance: 4,
						resource: 1,
						routeC: function(ships) {
							if (ships.aCV <= 2) return 'N';
							if (ships.escort.aBB) return 'L';
							if (ships.CV + ships.CVB <= 2) return (Math.random() < .6)? 'N' : 'L';
							if (ships.CV + ships.CVB <= 3) return (Math.random() < .4)? 'N' : 'L';
							return (Math.random() < .2)? 'N' : 'L';
						}
					},
					'N': {
						type: 1,
						x: 514,
						y: 239,
						distance: 5,
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
						debuffAmount: 100,
						end: true,
						boss: true
					},
					'O': {
						type: 3,
						x: 450,
						y: 325,
						distance: 5,
						end: true
					},
					'P': {
						type: 3,
						x: 642,
						y: 102,
						distance: 4,
						end: true
					},
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Beyond the Surging Sea',
				fleetTypes: [1,2,3],
				bgmMap: 2134,
				bgmDN: 64,
				bgmNN: 64,
				bgmDB: 68,
				bgmNB: 68,
				bgmLB: 62,
				bossnode: 14,
				maphp: {
					3: { 1: 5950 },
					2: { 1: 5250 },
					1: { 1: 3850 },
				},
				finalhp: {
					3: 850,
					2: 850,
					1: 750,
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 2 },
					chance: { 3: .5, 2: .5, 1: .5 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Hard 2','Hard 3','Medium 1','Medium 2'],
						1: ['Medium 1','Medium 2','Easy 1'],
					},
				},
				startCheck: function() {
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				lbas: 3,
				reward: {
					ships: [440]
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 91,
						y: 116,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 125,
						y: 268,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 172,
						y: 168,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 218,
						y: 298,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 258,
						y: 189,
						distance: 2,
						routeS: ['D','F']
					},
					'D': {
						type: 1,
						x: 298,
						y: 105,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'H'
					},
					'E': {
						type: 1,
						x: 307,
						y: 263,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 362,
						y: 206,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						routeC: function(ships) {
							return (Math.random() < .5)? 'H' : 'I';
						}
					},
					'G': {
						type: 1,
						x: 369,
						y: 324,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 406,
						y: 122,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'I': {
						type: 3,
						x: 421,
						y: 252,
						distance: 4,
						routeS: ['J','K']
					},
					'J': {
						type: 1,
						x: 496,
						y: 194,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'M';
							return (Math.random() < .1)? 'M' : 'L';
						}
					},
					'K': {
						type: 1,
						x: 505,
						y: 315,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'L': {
						type: 1,
						x: 504,
						y: 94,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'N', 0: 'O' }
					},
					'M': {
						type: 1,
						x: 589,
						y: 278,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'N', 0: 'P' }
					},
					'N': {
						type: 1,
						x: 611,
						y: 160,
						distance: 6,
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
					'O': {
						type: 3,
						x: 595,
						y: 80,
						distance: 6,
						end: true
					},
					'P': {
						type: 3,
						x: 652,
						y: 239,
						distance: 7,
						end: true
					},

				}
			}
		}
	},
	35: {
		name: 'Summer 2016',
		date: '2016-08-12',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/CSkq7eN.png',
		bannerImgAlt: 'http://i.imgur.com/xjkzbxs.png',
		transportCalc: transportCalcStandard,
		allowLBAS: true,
		ptImpSpecial: 1,
		disableMore: { ships: [481,439] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Patrol off Buntan',
				fleetTypes: [0],
				bgmMap: 2035,
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
						y: 232,
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
						y: 191,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							if ((ships.FBB && ships.FBB + ships.CVL >= 2) || 6 - (ships.DD + ships.CL + ships.CLT + ships.CT) >= 2 ) return 'C';
							else if (ships.speed >= 10 && (ships.FBB == 0) && ships.CL) return 'D';
							else return 'E';
						}
					},
					'C' : {
						type: 1,
						x: 593,
						y: 312,
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
						y: 262,
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
						routeL : {3:"I",0:"H"},
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
						subonly: true,
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
				bgmMap: 2035,
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
				lbas: 1,
				giveLock: 2,
				checkLock: [1,3],
				reward: { ships: [481], firstOnly: true },
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 0 },
					chance: { 3: .2, 2: .2, 1: 0 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
					},
				},
				nodes:{
					'Start':{
						type: 0,
						x: 548,
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
						x: 678,
						y: 202,
						distance: 2,
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
						y: 264,
						distance: 3,
						route: 'E',
						resource: 1,
					},
					'C':{
						type: 3,
						x: 613,
						y: 137,
						distance: 1,
						routeS: ['D','A'],
					},
					'D': {
						type: 1,
						x: 587,
						y: 219,
						distance: 2,
						route: 'E',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'E': {
						type: 1,
						x: 565,
						y: 299,
						distance: 3,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
					},
					'F': {
						type: 1,
						x: 520,
						y: 162,
						distance: 1,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
					},
					'G': {
						type: 1,
						x: 495,
						y: 232,
						distance: 2,
						route: 'H',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'H': {
						type: 1,
						x: 419,
						y: 167,
						raid: true,
						distance: 3,
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
						y: 194,
						distance: 4,
						route: 'J',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeL: {3:"J",0:"L"},
					},
					"J": {
						type: 2,
						x: 313,
						y: 281,
						distance: 5,
						resource: 0,
						routeL: {3:"M",0:"0"},
					},
					"K": {
						type: 3,
						x: 403,
						y: 332,
						distance: 6,
						end: true
					},
					"L": {
						type: 3,
						x: 277,
						y: 123,
						distance: 5,
						end: true
					},
					"M": {
						type: 1,
						x: 401,
						y: 251,
						distance: 6,
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
				bgmMap: 2035,
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
				lbas: 2,
				giveLock: 3,
				checkLock: [1,2],
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1 },
					chance: { 3: .25, 2: .25, 1: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (totalHPLost <= 0) CHDATA.event.maps[3].debuff.AB = 1;
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.A && debuff.D && (debuff.AB || CHDATA.config.disableRaidReq));
				},
				nodes:{
					'Start':{
						type: 0,
						x: 652,
						y: 80,
						route: 'B',
					},
					'A':{
						type: 1,
						x: 658,
						y: 242,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						route: 'C',
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.A = true;
							}
						},
					},
					'B':{
						type: 1,
						x: 641,
						y: 162,
						distance: 1,
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
							else if (ships.speed <= 5) return 'A';
							else return 'C';
						},
					},
					'C':{
						type: 1,
						x: 583,
						y: 231,
						distance: 2,
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
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						routeC: function(ships){
							if (isShipInList(ships.ids,460)) return 'G';
							else if (isShipInList(ships.ids,131) && isShipInList(ships.ids,143) && isShipInList(ships.escorts.ids,171)) 
								{ return 'F'; }
							else if (ships.CV + ships.CVB == 4) return 'F';
							else return 'G';
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.D = true;
							}
						},
					},
					'E':{
						type: 4,
						resource: 1,
						x: 538,
						y: 150,
						distance: 3,
						route: 'G',
					},
					'F':{
						type: 4,
						resource: 1,
						x: 501,
						y: 330,
						distance: 4,
						route: 'G',
					},
					'G' : {
						type: 1,
						x: 471,
						y: 202,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeL : {3:"H",0:"I"},
					},
					'H' : {
						type: 1,
						x: 439,
						y: 275,
						distance: 4,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						route : "J",
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23 },
					},
					'I':{
						type: 3,
						x: 375,
						y: 149,
						distance: 4,
						end: true,
					},
					'J':{
						type: 1,
						x: 370,
						y: 340,
						distance: 5,
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
				nameT: 'Night Battle of Malacca Strait',
				fleetTypes: [1,2,3],
				bgmMap: 2035,
				bgmDN: 72,
				bgmNN: 72,
				bgmDB: 73,
				bgmNB: 73,
				startCheck: function(){
					if (CHDATA.fleets.combined == 1) return 'Start1';
					else return 'Start2';
				},
				bossnode: 17,
				maphp: {
					3: { 1: 3430 },
					2: { 1: 3010 },
					1: { 1: 2590 },
				},
				finalhp: {
					3: 200,
					2: 200,
					1: 200,
				},
				lbas: 3,
				enemyRaid: {
					maxNum: { 3: 3, 2: 2, 1: 2 },
					chance: { 3: .25, 2: .25, 1: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					let debuffCount = 0;
					for (const counter in debuff){
						debuffCount++;
					}
					return debuffCount >= 4;
				},
				reward: {
					'ships': [439]
				},
				nodes:{
					'Start1':{
						type: 0,
						x: 659,
						y: 112,
						route: 'B',
					},
					'Start2':{
						type: 0,
						x: 690,
						y: 238,
						route: 'A',
					},
					'A':{
						type: 1,
						x: 623,
						y: 275,
						distance: 1,
						raid: true,
						route: 'C',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'B':{
						type: 3,
						x: 601,
						y: 160,
						distance: 1,
						routeS: ['E','D'],
					},
					'C':{
						type: 1,
						x: 575,
						y: 319,
						distance: 2,
						routeR: {'F':.5,'G':.5},
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.C = true;
						},
					},
					'D':{
						type: 1,
						x: 563,
						y: 227,
						distance: 2,
						route: "F",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.D = true;
						},
					},
					'E':{
						type: 4,
						resource: 1,
						x: 527,
						y: 158,
						distance: 2,
						route: 'H',
					},
					'F':{
						type: 1,
						x: 526,
						y: 277,
						distance: 3,
						subonly: true,
						route: 'I',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'G':{
						type: 1,
						x: 513,
						y: 338,
						raid: true,
						distance: 3,
						route: 'I',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
					},
					'H':{
						type: 1,
						x: 484,
						y: 225,
						distance: 3,
						route: "I",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.H = true;
						},
					},
					'I':{
						type: 1,
						x: 438,
						y: 312,
						distance: 4,
						route: "J",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.I = true;
						},
						debuffAmount: 35,
					},
					'J':{
						type: 3,
						x: 393,
						y: 272,
						distance: 5,
						route: "K",
					},
					'K':{
						type: 1,
						x: 350,
						y: 173,
						distance: 6,
						night: true,
						route: "L",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.K = true;
						},
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23 },
					},
					'L':{
						type: 1,
						x: 274,
						y: 94,
						raid: true,
						distance: 7,
						routeC: function(ships){
							if (CHDATA.fleets.combined == 1){
								if (ships.SSV || ships.AO) return 'N';
								if (isShipInList(ships.ids,78) && isShipInList(ships.ids,79) && ships.CV + ships.CVB <= 2) return 'M';
								if (isShipInList(ships.escort.ids,171)) return 'N';
								if (ships.CLT > 2) return 'N';
								if (isShipInList(ships.escort.ids,69) && ships.CV + ships.CVB <= 2) return 'M';
								if (ships.CLT > 1) return 'N';
							}
							return 'M';
						},
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'M':{
						type: 1,
						x: 208,
						y: 190,
						raid: true,
						distance: 8,
						routeL: { 3:'Q', 0:'P' },
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'N':{
						type: 1,
						x: 195,
						y: 106,
						distance: 8,
						subonly: true,
						routeR: {'M':.75,'O':.25},
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'O':{
						type: 4,
						resource: 1,
						x: 146,
						y: 152,
						distance: 9,
						route: 'M',
					},
					'P':{
						type: 3,
						x: 214,
						y: 297,
						distance: 9,
						end: true
					},
					'Q':{
						type: 1,
						x: 119,
						y: 239,
						distance: 9,
						end: true,
						boss: true,
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23, 1705: 30, 1706: 30, 1707: 30 },
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
		}
	},
	36: {
		name: 'Fall 2016',
		date: '2016-11-18',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/7IvVhBr.png',
		bannerImgAlt: 'http://i.imgur.com/szScvvM.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		disableMore: { ships: [491,433] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Maritime Transport Operation',
				fleetTypes: [0],
				bgmMap: 2036,
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: 12,
				maphp: {
					3: { 1: 420 },
					2: { 1: 280 },
					1: { 1: 200 },
				},
				transport: 'H',
				giveLock: 1,
				checkLock: [2,3,4],
				reward: {
					3: { items: [185,175], firstOnly: true },
					2: { items: [185], firstOnly: true },
					1: { items: [176] },
				},
				nodes: {
					'Start':{
						type: 0,
						x: 91,
						y: 194,
						route: 'A',
					},
					'A':{
						type: 3,
						x: 209,
						y: 195,
						routeS: ['B','C']
					},
					'B':{
						type: 1,
						x: 261,
						y: 270,
						subonly: true,
						routeC: function(ships){
							if (ships.AR) return 'E';
							return 'D';
						},
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2']
						}
					},
					'C':{
						type: 1,
						x: 276,
						y: 123,
						routeC: function(ships){
							if (ships.CV || ships.CVB) return 'E';
							if (ships.aBB >= 2) return 'E';
							if (ships.DD < 3 || ships.CL >= 2) return 'E';
							return 'F';
						},
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'D':{
						type: 1,
						x: 363,
						y: 308,
						routeC: function(ships){
							if (ships.FBB || ships.CV || ships.CVB) return 'E';
							if (ships.CVL + ships.CA >= 2) return 'E';
							if (ships.CVL + ships.CA + ships.CL >=3) return 'E';
  							if (ships.DD <= 2 || ships.CLT) return 'E';
							return 'H';
						},
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'E':{
						type: 1,
						x: 394,
						y: 197,
						routeC: function(ships){
							if (ships.CV || CVB) return 'F';
							return 'H';
						},
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'F':{
						type: 1,
						x: 408,
						y: 100,
						subonly: true,
						route: 'H',
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'G':{
						type: 2,
						x: 470,
						y: 320,
						route: 'I',
						resource: 1,
						amount: [50],
					},
					'H':{
						type: 2,
						x: 527,
						y: 209,
						routeC: function(ships){
							if (ships.speed <= 5 || ships.DD <= 1 || Math.random() < 0.05) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'L';
							return 'L';
						},
						resource: 0
					},
					'I':{
						type: 4,
						x: 586,
						y: 275,
						routeL: { 3: 'J', 0: 'K' },
						resource: 1,
					},
					'J':{
						type: 1,
						x: 651,
						y: 202,
						route: 'L',
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						}
					},
					'K':{
						type: 3,
						x: 650,
						y: 318,
						end: true,
					},
					'L':{
						type: 1,
						x: 608,
						y: 108,
						subonly: true,
						boss: true,
						compDiff: {
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Mainland Air Defense Battle',
				fleetTypes: [0],
				bgmMap: 2036,
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: 15,
				lbas: 2,
				lbasSortie: 1,
				maphp: {
					3: { 1: 800 },
					2: { 1: 800 },
					1: { 1: 480 },
				},
				finalhp: {
					3: 160,
					2: 160,
					1: 160,
				},
				giveLock: 2,
				checkLock: [1, 3, 4],
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 1 },
					chance: { 3: .4, 2: .4, 1: .4 },
					compName: 'AB',
					compDiff: {
						3: ['1','2'],
						2: ['2','3'],
						1: ['3'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (totalHPLost <= 0) CHDATA.event.maps[2].debuff.AB = CHDATA.event.maps[2].debuff.AB + 1 || 1;
					}
				},
				startCheck: function () {
					const ships = CHSHIPCOUNT;
					if (ships.CV + ships.CVB >= 3 || ships.CA + ships.CAV >= 3) return 'Start2';
					if ((isShipInList(ships.ids, 451) && ships.CVL <= 1) || (isShipInList(ships.ids, 74) && ships.CVL <= 2) && (ships.CV + ships.CVB == 0)
						&& ships.DD >= 2) return 'Start1';
					if (ships.AV == 1 && ships.CVL == 1 && ships.CV + ships.CVB == 0 && ships.speed >= 10) return 'Start1';
					if (ships.CV + ships.CVB > 0 && ships.CVL == 0 && ships.DD >= 2) return 'Start3';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 214,
						y: 179,
						route: 'D',
					},
					'Start2': {
						type: 0,
						x: 72,
						y: 242,
						route: 'A',
					},
					'Start3': {
						type: 0,
						x: 176,
						y: 324,
						route: 'C',
					},
					'A': {
						type: 1,
						x: 164,
						y: 243,
						distance: 1,
						route: 'B',
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[2].debuff.A = true;
							}
						},
					},
					'B': {
						type: 1,
						x: 260,
						y: 243,
						distance: 2,
						route: 'F',
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'C': {
						type: 1,
						x: 296,
						y: 293,
						distance: 1,
						routeC: function (ships) {
							if (isShipInList(ships.ids, 90) && isShipInList(ships.ids, 91)) return 'G';
							if (ships.CV + ships.CVB == 1) return 'G';
							return 'F';
						},
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'D': {
						type: 1,
						x: 314,
						y: 180,
						distance: 1,
						routeC: function (ships) {
							let historicalCount = 0;
							[454, 415, 67, 66, 68, 69, 62, 65, 451, 74].forEach(mid => {
								if (isShipInList(ships.ids, mid)) historicalCount++;
							});
							return historicalCount == 3 ? 'E' : 'F';
						},
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'E': {
						type: 1,
						x: 367,
						y: 106,
						distance: 2,
						subonly: true,
						route: 'H',
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'F': {
						type: 1,
						x: 377,
						y: 243,
						subonly: true,
						distance: 3,
						route: 'H',
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5']
						},
						routeC: function (ships) {
							const hasShouhou = isShipInList(ships.ids, 74);
							const hasMizuho = isShipInList(ships.ids, 451);
							if ((hasShouhou || hasMizuho) && isShipInList(ships.ids, 454) && isShipInList(ships.ids, 415)) return 'I';
							if (hasShouhou && hasMizuho && ships.DD >= 2) return 'I';
							if (ships.CV + ships.CVB >= 2) return 'G';
							if (ships.CVL + ships.AV >= 2) return 'H';
							return 'G';
						}
					},
					'G': {
						type: 1,
						x: 406,
						y: 318,
						route: 'J',
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[2].debuff.G = true;
							}
						},
					},
					'H': {
						type: 1,
						x: 452,
						y: 91,
						distance: 4,
						route: 'I',
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'I': {
						type: 3,
						x: 490,
						y: 192,
						distance: 6,
						routeS: ['K', 'L'],
					},
					'J': {
						type: 1,
						x: 510,
						y: 302,
						distance: 5,
						route: 'I',
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						}
					},
					'K': {
						type: 1,
						x: 551,
						y: 143,
						routeL: { 14: 'O', 12: 'M' },
						raid: true,
						distance: 7,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[2].debuff.K = true;
							}
						},
					},
					'L': {
						type: 1,
						x: 566,
						y: 253,
						distance: 7,
						routeL: { 3: 'O', 0: 'N' },
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[2].debuff.L = true;
							}
						},
					},
					'M': {
						type: 3,
						x: 610,
						y: 88,
						distance: 8,
						end: true
					},
					'N': {
						type: 3,
						distance: 8,
						x: 639,
						y: 317,
						end: true
					},
					'O': {
						type: 1,
						x: 642,
						y: 209,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
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
				nameT: 'Proclamation! Fleet Strategy Plan #3',
				fleetTypes: [1, 2],
				bgmMap: 2036,
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: 17,
				maphp: {
					3: { 1: 2340 },
					2: { 1: 1900 },
					1: { 1: 1850 },
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				giveLock: 2,
				checkLock: [1, 3, 4],
				reward: { ships: [491], firstOnly: true },
				historicalList: [77,87,90,91,67,68,69,62,65,63,55,101,415],
				startCheck: function() {
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					let debuffE2 = CHDATA.event.maps[2].debuff;
					let dE2 = debuffE2.A && debuffE2.G && debuffE2.K && debuffE2.L && (debuffE2.AB >= 3 || CHDATA.config.disableRaidReq);
					let dE3 = debuff.C && debuff.D && debuff.H && debuff.J && debuff.K;
					return dE2 && dE3;
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 131,
						y: 203,
						route: 'B',
					},
					'Start2': {
						type: 0,
						x: 66,
						y: 247,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 167,
						y: 272,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							// improv
							var historicalNum = 0;
							MAPDATA[WORLD].maps[MAPNUM].historicalList.forEach( id => {
								if (isShipInList(ships.ids,id)) historicalNum++;
								if (isShipInList(ships.escort.ids, id)) historicalNum++;
							});
							if (historicalNum > 5) {
								this.showLoSPlane = null;
								return 'B';
							}
							if (ships.CV + ships.CVB + ships.aBB + ships.escort.aBB >= 4) {
								this.showLoSPlane = null;
								return 'M';
							}
							this.showLoSPlane = 'C';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 213,
						y: 172,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							if (ships.speed <= 5 || ships.CV + ships.CVB > 2) return 'D';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 292,
						y: 299,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.speed >= 10 && ships.CV + ships.CVB == 0 && ships.escort.FBB == 0) return 'G';
							return 'E';
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.C = true;
							}
						},
					},
					'D': {
						type: 1,
						x: 322,
						y: 134,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.CV + ships.CVB >= 3 || ships.CVL <= 1 || ships.CAV + ships.escort.CAV > 0) return 'N';
							if (ships.escort.DD >= 3 || (ships.escort.CLT >=2 && ships.aBB)) return 'F';
							var historicalNum = 0;
							MAPDATA[WORLD].maps[MAPNUM].historicalList.forEach( id => {
								if (isShipInList(ships.ids,id)) historicalNum++;
								if (isShipInList(ships.escort.ids, id)) historicalNum++;
							});
							if (historicalNum > 5) return 'E';
							if (historicalNum > 2) return 'F';
							return Math.random() > .5 ? 'E' : 'F';
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.D = true;
							}
						},
					},
					'E': {
						type: 3,
						x: 385,
						y: 218,
						routeS: ['H','I'],
					},
					'F': {
						type: 1,
						x: 405,
						y: 76,
						raid: true,
						routeC: function(ships){
							if (ships.escort.FBB) return 'H';
							return 'J';
						},
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
					},
					'G': {
						type: 4,
						resource: 1,
						x: 417,
						y: 328,
						route: 'K',
					},
					'H': {
						type: 1,
						x: 448,
						y: 163,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.H = true;
							}
						},
						route: 'J',
					},
					'I': {
						type: 1,
						x: 496,
						y: 251,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							var historicalNum = 0;
							MAPDATA[WORLD].maps[MAPNUM].historicalList.forEach( id => {
								if (isShipInList(ships.ids, id)) historicalNum++;
								if (isShipInList(ships.escort.ids, id)) historicalNum++;
							});
							if (historicalNum > 5) return 'L';
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'H';
							if (ships.escort.DD >= 3) return 'L';
							if (historicalNum > 0) return 'K';
							if (ships.DD + ships.escort.DD == 2) return 'K';
							return 'O';
						}
					},
					'J': {
						type: 1,
						x: 523,
						y: 92,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.J = true;
							}
						},
						routeL: { 3: 'Q', 0: 'O' },
					},
					'K': {
						type: 1,
						x: 562,
						y: 309,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') {
								CHDATA.event.maps[3].debuff.K = true;
							}
						},
						routeL: { 3: 'L', 0: 'P' },
					},
					'L': {
						type: 1,
						x: 648,
						y: 227,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						route: 'Q',
					},
					'M': {
						type: 3,
						x: 218,
						y: 335,
						end: true,
					},
					'N': {
						type: 3,
						x: 235,
						y: 101,
						end: true
					},
					'O': {
						type: 3,
						x: 574,
						y: 174,
						end: true,
					},
					'P': {
						type: 3,
						x: 661,
						y: 318,
						end: true,
					},
					'Q': {
						type: 1,
						x: 629,
						y: 120,
						boss: true,
						end: true,
						debuffAmount: 23,
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
					}
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Shangri-la Search-and-Chase, Fleet Forward Placement',
				bgmMap: 2136,
				fleetTypes: [0],
				bgmDN: 80,
				bgmNN: 80,
				bgmDB: 81,
				bgmNB: 81,
				bossnode: [22,13],
				giveLock: 4,
				checkLock: [1,2,3],
				parts: {
					1: {
						currentBoss: 'M',
						maphp: {
							3: { 1: 380},
							2: { 1: 260},
							1: { 1: 180},
						},
						transport: 'K',
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 1750},
							2: { 1: 1750},
							1: { 1: 1625},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				startCheck: function() {
					if (CHDATA.event.maps[MAPNUM].part == 1) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 81,
						y: 99,
						routeC: function(ships){
							if (ships.DD >= 2) return 'C';
							return 'A';
						}
					},
					'Start2': {
						type: 0,
						x: 352,
						y: 302,
						route: 'O',
					},
					'A': {
						type: 1,
						x: 64,
						y: 201,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						route: 'B',
					},
					'B': {
						type: 1,
						x: 131,
						y: 271,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.DD == 0 || ships.CL == 0) return 'E';
							var num = ships.AV + ships.CL + ships.CLT + ships.CVL + ships.CAV + ships.CA;
							if (num == 2 || num == 3) return 'G';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 154,
						y: 190,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.SS + ships.SSV >= 1 && ships.DD >= 2) return 'H';
							if (ships.SS + ships.SSV == 0) {
								if (ships.aBB + ships.CV + ships.CVB > 0) return 'D';
								if (ships.CL == 0 || ships.CL >= 2) return 'D';
								if (ships.CAV + ships.CA + ships.CLT >= 3) return 'D';
							}
							return 'H';
						}
					},
					'D': {
						type: 1,
						x: 199,
						y: 150,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						route: 'F',
					},
					'E': {
						type: 1,
						x: 225,
						y: 239,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.CV + ships.CVB <= 0 && ships.aBB <= 1 && ships.DD == 1 && ships.CL >= 1 && ships.speed >= 10){
								return 'H';
							}
							return 'G';
						}
					},
					'F': {
						type: 2,
						resource: 2,
						amount: [30],
						x: 242,
						y: 107,
						routeC: function(ships){
							if (ships.speed <= 5) return 'I';
							if (ships.CV + ships.CVB + ships.FBB >= 2) return 'I';
							if (ships.CL == 0) return 'I';
							return 'J';
						},
					},
					'G': {
						type: 1,
						x: 270,
						y: 326,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'H',
					},
					'H': {
						type: 1,
						x: 308,
						y: 224,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'K'
					},
					'I': {
						type: 4,
						x: 320,
						y: 101,
						resource: 1,
						route: 'J'
					},
					'J': {
						type: 1,
						x: 338,
						y: 162,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'H',
					},
					'K': {
						type: 2,
						resource: 0,
						x: 399,
						y: 253,
						routeL: { 3: 'M', 0: 'L' },
					},
					'L': {
						type: 3,
						x: 451,
						y: 172,
						end: true,
					},
					'M': {
						type: 1,
						x: 397,
						y: 145,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					},
					'N': {
						type: 1,
						x: 474,
						y: 128,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'R',
					},
					'O': {
						type: 1,
						x: 491,
						y: 301,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						route: 'P'
					},
					'P': {
						type: 1,
						x: 532,
						y: 203,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							if (ships.CV + ships.CVB + ships.aBB >= 5) return 'N';
							if (ships.speed <= 5 && ships.SS + ships.SSV == 0) return 'N';
							if (ships.SS + ships.SSV >= 4) return 'S';
							if (ships.SS + ships.SSV >= 1) return 'R';
							if (ships.speed <= 5) return 'N';
							if (ships.FBB + ships.CV + ships.CVB <= 1 && ships.CVL + ships.CAV + ships.CLT <= 2 && ships.speed >= 10
								&& ships.CL <=1 && ships.CL + ships.DD >= 3) return 'S';
							if (ships.FBB == 1 && ships.CV + ships.CVB == 1 && ships.speed >= 10 && ships.CL <=1 && ships.CL + ships.DD >= 4) return 'S';
							return 'R';
						}
					},
					'Q': {
						type: 1,
						x: 545,
						y: 290,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						routeL: { 3: 'V', 0: 'U' },
					},
					'R': {
						type: 1,
						x: 551,
						y: 80,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							let flag = false;
							[161,113,80,433,176].forEach( mid => {
								if (isShipInList(ships.ids,mid)) flag = true;
							});
							if (flag) return 'T';
							return 'S';
						}
					},
					'S': {
						type: 1,
						x: 605,
						y: 232,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'Q',
					},
					'T': {
						type: 2,
						resource: 1,
						amount: [30],
						x: 651,
						y: 162,
						route: 'S',
					},
					'U': {
						type: 3,
						x: 612,
						y: 341,
						end: true
					},
					'V': {
						type: 1,
						x: 649,
						y: 296,
						end: true,
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
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Beyond the Shore',
				bgmMap: 2136,
				fleetTypes: [1,2,3],
				bgmDN: 81,
				bgmNN: 81,
				bgmDB: 82,
				bgmNB: 82,
				lbas: 3,
				lbasSortie: 2,
				bossnode: 20,
				historicalList: [80, 176, 140, 433],
				checkLockHard: [1,2,4],
				giveLockHard: 3,
				reward: {
					ships: [433]
				},
				maphp: {
					3: { 1: 4800 },
					2: { 1: 4200 },
					1: { 1: 3400 },
				},
				finalhp: {
					3: 800,
					2: 700,
					1: 600,
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 1 },
					chance: { 3: .4, 2: .4, 1: .4 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (CHDATA.event.maps[MAPNUM].routes && CHDATA.event.maps[MAPNUM].routes.length) {
							if (totalHPLost <= 0) CHDATA.event.maps[5].debuff.AB2 = CHDATA.event.maps[5].debuff.AB2 + 1 || 1;
						} else {
							if (totalHPLost <= 0) CHDATA.event.maps[5].debuff.AB1 = CHDATA.event.maps[5].debuff.AB1 + 1 || 1;
						}
					}
				},
				startCheck: function() {
					if (CHDATA.event.maps[MAPNUM].routes && CHDATA.event.maps[MAPNUM].routes.length) return 'Start2';
					return 'Start1';
				},
				hiddenRoutes: {
					1: {
						images: [
							{ name: '5_1.png', x: 0, y: 0 }
						],
						unlock: function(debuff) {
							if (!debuff) return false;
							const aCount = CHDATA.event.maps[MAPNUM].diff;
							return debuff.A >= aCount && (debuff.AB1 >= 2 || CHDATA.config.disableRaidReq);
						}
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					const fCount = CHDATA.event.maps[MAPNUM].diff;
					return debuff.F >= fCount && debuff.P >= 2 && (debuff.AB2 >= 4 || CHDATA.config.disableRaidReq);
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 703,
						y: 252,
						route: 'B'
					},
					'Start2': {
						type: 0,
						x: 336,
						y: 313,
						routeC: function(ships){
							if (CHDATA.fleets.combined == 1) return 'K';
							if (CHDATA.fleets.combined == 3) return 'M';
							if (ships.aBB + ships.CV + ships.CVB <= 1) return 'M';
							if (ships.aBB + ships.CV + ships.CVB + ships.escort.aBB >= 4) return 'U';
							return 'K';
						}
					},
					'A': {
						type: 1,
						x: 681,
						y: 85,
						distance: 5,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						end: true,
						debuffGive: function() {
							if (!CHDATA.event.maps[5].debuff.A) CHDATA.event.maps[5].debuff.A = 0;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.A++;
						}
					},
					'B': {
						type: 1,
						x: 624,
						y: 224,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'C',
					},
					'C': {
						type: 1,
						x: 591,
						y: 312,
						raid: true,
						distance: 2,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.speed <= 5 || ships.aBB + ships.CV + ships.CVB + ships.escort.aBB >= 5) return 'E';
							return 'G';
						}
					},
					'D': {
						type: 1,
						x: 576,
						y: 81,
						raid: true,
						distance: 6,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						routeL: { 3:'A', 0:'Q' }
					},
					'E': {
						type: 1,
						x: 516,
						y: 219,
						raid: true,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 510,
						y: 148,
						distance: 4,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'D',
						debuffGive: function() {
							if (!CHDATA.event.maps[5].debuff.F) CHDATA.event.maps[5].debuff.F = 0;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.F++;
						}
					},
					'G': {
						type: 1,
						x: 473,
						y: 289,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route: 'I',
					},
					'H': {
						type: 1,
						x: 458,
						y: 94,
						distance: 5,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if(ships.aBB + ships.CV + ships.CVB + ships.escort.aBB >= 5) return 'F';
							return 'D';
						}
					},
					'I': {
						type: 3,
						x: 441,
						y: 191,
						distance: 5,
						routeS: ['J','H'],
					},
					'J': {
						type: 1,
						x: 382,
						y: 90,
						distance: 6,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeL: { 3:'K', 0:'L' } 
					},
					'K': {
						type: 1,
						x: 335,
						y: 198,
						distance: 6,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2','Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.speed <= 5 || ships.DD + ships.escort.DD >= 4 || ships.CLT + ships.escort.CLT >=2) return 'M';
							if (ships.aBB + ships.CV + ships.CVB + ships.escort.aBB <= 5 && ships.escort.CLT == 1) return 'N';
							return 'M';
						}
					},
					'L': {
						type: 4,
						x: 297,
						y: 125,
						distance: 7,
						resource: 1,
						routeL: { 3:'K', 0:'R' } 
					},
					'M': {
						type: 1,
						x: 250,
						y: 293,
						subonly: true,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						routeC: function(ships){
							if (ships.speed <= 5 || ships.CLT + ships.escort.CLT >=2 || ships.DD + ships.escort.DD >= 4 || 
								ships.aBB + ships.CV + ships.CVB + ships.escort.aBB >= 6) return 'N';
							return 'O';
						}
					},
					'N': {
						type: 1,
						x: 227,
						y: 206,
						raid: true,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						route: 'O',
					},
					'O': {
						type: 1,
						x: 156,
						y: 259,
						distance: 9,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						route: 'P'
					},
					'P': {
						type: 1,
						x: 101,
						y: 191,
						raid: true,
						distance: 10,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						routeL: { 3:'T', 0:'S' },
						debuffGive: function() {
							if (!CHDATA.event.maps[5].debuff.P) CHDATA.event.maps[5].debuff.P = 0;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.P++;
						}
					},
					'Q': {
						type: 3,
						x: 622,
						y: 165,
						distance: 5,
						end: true,
					},
					'R': {
						type: 3,
						x: 225,
						y: 88,
						distance: 8,
						end: true,
					},
					'S': {
						type: 3,
						x: 174,
						y: 147,
						distance: 10,
						end: true,
					},
					'T': {
						type: 1,
						x: 138,
						y: 96,
						distance: 11,
						end: true,
						boss: true,
						debuffAmount: 23,
						setupSpecial: function() {
							let historicals = [80,176,140,433];
							for (var i=0; i<=1; i++) {
								for (let ship of FLEETS1[i].ships) {
									if (historicals.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{ mod: 2.5 }];
									}
								}
							}
						},
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
					},
					'U': {
						type: 1,
						x: 418,
						y: 272,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium'],
							1: ['Easy 1', 'Easy 2'],
						},
						route: 'I'
					}
				}
			}
		}
	},
	37: {
		name: 'Winter 2017',
		date: '2017-02-11',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/hYXVnmU.png',
		bannerImgAlt: 'http://i.imgur.com/g4hutmU.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		disableMore: { ships: [474,495] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation for Operation Hikari',
				bgmMap: 2037,
				fleetTypes: [0],
				bgmDN: 87,
				bgmNN: 87,
				bgmDB: 88,
				bgmNB: 88,
				bossnode: 11,
				checkLock: [2],
				giveLock: 1,
				lbas: 1,
				parts: {
					1: {
						maphp: {
							3: { 1: 100 },
							2: { 1: 100 },
							1: { 1: 100 },
						},
						transport: 'K'
					},
					2: {
						maphp: {
							3: { 1: 1 },
							2: { 1: 1 },
							1: { 1: 1 },
						},
						transport: 'N'
					}
				},
				hiddenRoutes: {
					1: {
						images: [
							{ name: '1_3.png', x: 594, y: 69 },
							{ name: '1_1.png', x: 240, y: 248 },
							{ name: '1_2.png', x: 563, y: 105 },
						],
						unlock: function(debuff) {
							if (CHDATA.event.maps[1].part == 2) {
								//do something here to remove blue node on J?
								return true;
							}
							return false;
						}
					}
				},
				transportCalc: function(ships,rank) {
					let tp = 5;
					let hasRo = false, hasShioi = false, numSub = 0, numSSV = 0;
					for (let ship of ships) {
						let mid = ship.masterId;
						hasRo = hasRo || (mid == 436);
						hasShioi = hasShioi || (mid == 155 || mid == 403);
						if (SHIPDATA[mid].type == 'SSV') numSSV++;
						if (SHIPDATA[mid].type == 'SS' || SHIPDATA[mid].type == 'SSV') numSub++;
						if (ship.masterId == 487) tp += 5;
						for (let item of ship.items) {
							if (item <= 0) continue;
							let eq = CHDATA.gears['x'+item];
							let eqd = EQDATA[eq.masterId];
							if (eqd.type == DRUM) tp += 1;
							if (eqd.type == LANDINGCRAFT) tp += 2;
							if (eqd.type == SEAPLANEBOMBER) tp += 2;
							if (eq.masterId == 193) tp += 1;
							if (eq.masterId == 62) tp += 2;
						}
					}
					if (hasRo && hasShioi) tp += 2;
					else if (hasRo || hasShioi) tp += 4;
					if (numSSV >= 2) tp += 7;
					if (numSub >= 3) tp += 8;
					else if (numSub == 2) tp += 3;
					return tp;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 410,
						y: 159,
						route: 'G'
					},
					'A': {
						type: 1,
						x: 114,
						y: 258,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 153,
						y: 146,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 200,
						y: 210,
						distance: 1,
						routeC: function(ships) {
							if (ships.CL && ships.aCV <= 0) return 'F';
							return 'B';
						}
					},
					'D': {
						type: 1,
						x: 213,
						y: 324,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let diff = CHDATA.event.maps[1].diff;
							if (ships.SS + ships.SSV == ships.total && ships.total >= diff) return 'C';
							if (ships.DD >= 2 && ships.SS + ships.SSV >= diff && ships.aCV <= 1) return 'C';
							return 'A';
						}
					},
					'E': {
						type: 3,
						x: 255,
						y: 79,
						distance: 3,
						route: 'H'
					},
					'F': {
						type: 2,
						x: 268,
						y: 135,
						distance: 1,
						resource: 1,
						amount: [50],
						route: 'B'
					},
					'G': {
						type: 3,
						x: 328,
						y: 246,
						distance: 1,
						routeC: function(ships) {
							if (CHDATA.event.maps[1].part == 1) {
								this.showNoCompass = true;
								return 'D';
							}
							this.showNoCompass = false;
							if (CHDATA.event.maps[1].hp > 0) return 'L';
							if (ships.CL >= 1 && ships.DD >= 3 && ships.speed >= 10 && ships.aCV <= 0) return 'D';
							return 'L';
						}
					},
					'H': {
						type: 3,
						x: 428,
						y: 91,
						distance: 4,
						route: 'I'
					},
					'I': {
						type: 1,
						x: 577,
						y: 91,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						routeC: function(ships) {
							if (CHDATA.event.maps[1].part == 1) return 'J';
							return 'N';
						}
					},
					'J': {
						type: 3,
						x: 727,
						y: 82,
						distance: 6,
						route: 'K'
					},
					'K': {
						type: 2,
						x: 708,
						y: 142,
						resource: 0,
						dropoff: true,
						replacedBy: 'K*',
						end: true
					},
					'K*': {
						type: 3,
						x: -100,
						y: -100,
						hidden: 1,
						end: true
					},
					'L': {
						type: 1,
						x: 411,
						y: 266,
						raid: true,
						distance: 2,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 445,
						y: 328,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'N': {
						type: 2,
						x: 588,
						y: 165,
						hidden: 1,
						resource: 0,
						dropoff: true,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Strengthening the Patrol Line in Ogasawara Islands',
				bgmMap: 2037,
				fleetTypes: [1,2,3],
				bgmDN: 87,
				bgmNN: 87,
				bgmDB: 88,
				bgmNB: 88,
				bossnode: 13,
				checkLock: [1],
				giveLock: 2,
				transport: 'K',
				lbas: 1,
				reward: { ships: [474], items: [209,209] },
				maphp: {
					3: { 1: 500 },
					2: { 1: 400 },
					1: { 1: 300 },
				},
				finaltp: {
					3: 124,
					2: 99,
					1: 74,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 159,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3 && ships.speed >= 10) {
								let num = 0;
								let shipIds = ships.ids.concat(ships.escort.ids);
								for (let mid of [471,472,473,474,475]) {
									if (isShipInList(shipIds,mid)) num += 2;
								}
								for (let mid of [28,29,6,7,481]) {
									if (isShipInList(shipIds,mid)) num += 1;
								}
								if (num >= CHDATA.event.maps[2].diff + 2) return 'C';
							}
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 183,
						y: 206,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3 && ships.speed >= 10) return 'D';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 230,
						y: 289,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 255,
						y: 134,
						distance: 1,
						route: 'F'
					},
					'D': {
						type: 3,
						x: 308,
						y: 201,
						distance: 2,
						routeS: ['E','G']
					},
					'E': {
						type: 1,
						x: 363,
						y: 295,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.AV) return 'G';
							if (ships.speed <= 5) return 'G';
							if (CHDATA.fleets.combined != 3) return 'G';
							var numSeaplanes = 0, retreated = false;
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								if (ship.retreated) retreated = true;
								for (let equip of ship.equips) {
									if (equip.type == SEAPLANE) numSeaplanes++;
									else if (equip.type == SEAPLANEBOMBER) numSeaplanes++;
									else if (equip.type == SEAPLANEFIGHTER) numSeaplanes++;
								}
							}
							if (retreated || numSeaplanes <= 2) return 'G';
							return 'H';
						}
					},
					'F': {
						type: 1,
						x: 409,
						y: 109,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 428,
						y: 196,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB + ships.CV + ships.CVB >= 5) return 'F';
							if (ships.speed <= 5) return 'F';
							var numSeaplanes = 0, retreated = false;
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								if (ship.retreated) retreated = true;
								for (let equip of ship.equips) {
									if (equip.type == SEAPLANE) numSeaplanes++;
									else if (equip.type == SEAPLANEBOMBER) numSeaplanes++;
									else if (equip.type == SEAPLANEFIGHTER) numSeaplanes++;
								}
							}
							if (retreated || numSeaplanes <= 2) return 'I';
							return 'J';
						}
					},
					'H': {
						type: 1,
						x: 488,
						y: 304,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							let m = CHDATA.event.maps[2];
							if (!CHDATA.sortie.J && CHDATA.fleets.combined == 3 && m.hp > 0 && m.hp/getMapHP(37,2,m.diff) < .25) return 'J';
							return 'K';
						}
					},
					'I': {
						type: 1,
						x: 557,
						y: 80,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'J': {
						type: 1,
						x: 569,
						y: 196,
						distance: 4,
						setupSpecial: function() { CHDATA.sortie.J = true; },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let m = CHDATA.event.maps[2];
							if (CHDATA.fleets.combined == 3 && m.hp > 0 && m.hp/getMapHP(37,2,m.diff) < .25) return 'H';
							return 'K';
						}
					},
					'K': {
						type: 2,
						x: 577,
						y: 312,
						distance: 5,
						resource: 0,
						route: 'M'
					},
					'L': {
						type: 3,
						x: 635,
						y: 139,
						distance: 4,
						end: true
					},
					'M': {
						type: 1,
						x: 648,
						y: 231,
						distance: 6,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Commence! Operation \'Hikari\'',
				bgmMap: 2037,
				bgmDN: 88,
				bgmNN: 88,
				bgmDB: 89,
				bgmNB: 89,
				bossnode: [21,9],
				checkLock: [2],
				giveLock: 1,
				reward: { ships: [495] },
				parts: {
					1: {
						currentBoss: 'I',
						fleetTypes: [0],
						lbas: null,
						maphp: {
							3: { 1: 2 },
							2: { 1: 2 },
							1: { 1: 2 },
						},
						transport: 'E'
					},
					2: {
						currentBoss: 'U',
						fleetTypes: [0,1,2],
						lbas: 2,
						maphp: {
							3: { 1: 4800 },
							2: { 1: 4000 },
							1: { 1: 3200 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 660,
					2: 660,
					1: 660,
				},
				transportCalc: function(ships,rank) {
					if (rank != 'A' && rank != 'S') return 0;
					let num = 0;
					for (let ship of ships) {
						if (!ships) continue;
						for (let item of ship.items) {
							if (item <= 0) continue;
							let eq = CHDATA.gears['x'+item];
							if (eq.masterId == 209) num++;
						}
					}
					return num;
				},
				hiddenRoutes: {
					1: {
						images: [
							{ name: '3_1.png', x: 297, y: 151 }
						],
						unlock: function(debuff) {
							return CHDATA.event.maps[3].part == 2;
						}
					}
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) return 'Start2';
					return 'Start1';
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					//special case, only map with 2 debuffs, don't return true and play alerts here instead
					//don't use debuffAmount
					if (!debuff.debuffed1 && debuff.I && debuff.J) {
						debuff.debuffed1 = 1;
						SM.play('done');
						alert('DEBUFF');
					}
					if (!debuff.debuffed2 && debuff.J2 >= 2) {
						if (CHDATA.event.maps[3].hp > 660) CHDATA.event.maps[3].hp = 660;
						debuff.debuffed2 = 1;
						SM.play('done');
						alert('DEBUFF');
					}
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 549,
						y: 94,
						route: 'C'
					},
					'Start2': {
						type: 0,
						x: 486,
						y: 327,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'S';
							return 'T';
						}
					},
					'A': {
						type: 1,
						x: 662,
						y: 212,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV == ships.total) return 'D';
							if (CHDATA.event.maps[3].diff == 1 && ships.speed >= 10 && ships.CL && ships.DD >= 3) return 'D';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 662,
						y: 291,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 608,
						y: 152,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV == ships.total && ships.speed >= 10 && ships.total >= 2) return 'D';
							return 'A';
						}
					},
					'D': {
						type: 1,
						x: 608,
						y: 310,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'E': {
						type: 2,
						x: 532,
						y: 310,
						distance: 1,
						resource: 0,
						route: 'F'
					},
					'F': {
						type: 1,
						x: 549,
						y: 252,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.event.maps[3].part == 1) {
								if (ships.aCV + ships.aBB) return 'H';
								let hasTransport = false;
								for (let ship of FLEETS1[0].ships) {
									for (let equip of ship.equips) {
										if (equip.mid == 209) { hasTransport = true; break; }
									}
									if (hasTransport) break;
								}
								if (!hasTransport) return 'H';
							}
							if (ships.aCV + ships.aBB >= 4) return 'G';
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,4,true),{ 47: 'I', 45: 'G' });
						}
					},
					'G': {
						type: 3,
						x: 545,
						y: 157,
						distance: 3,
						end: true
					},
					'H': {
						type: 1,
						x: 487,
						y: 177,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 454,
						y: 227,
						distance: 3,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 2'],
						},
						compDiffC: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 2','Medium 3'],
							1: ['Easy 1','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part != 2) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.I = 1;
						},
						end: true
					},
					'J': {
						type: 1,
						x: 385,
						y: 129,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part != 2) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.J = 1;
							if (CHDATA.event.maps[3].debuff.canDebuff2 && CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') {
								CHDATA.event.maps[3].debuff.J2 = CHDATA.event.maps[3].debuff.J2 + 1 || 1;
							}
						},
						route: 'K'
					},
					'K': {
						type: 1,
						x: 339,
						y: 85,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'N'
					},
					'L': {
						type: 1,
						x: 324,
						y: 213,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2 && (ships.speed >= 10 || CHDATA.event.maps[3].diff != 3)) return 'M';
							return 'O';
						}
					},
					'M': {
						type: 1,
						x: 261,
						y: 288,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3','Easy 4','Easy 5'],
						},
						routeL: { 3: 'U', 0: 'P' }
					},
					'N': {
						type: 1,
						x: 244,
						y: 112,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Q'
					},
					'O': {
						type: 1,
						x: 230,
						y: 194,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV + ships.escort.aBB + ships.escort.aCV >= 7) return 'N';
							if (CHDATA.fleets.combined == 1 && ships.escort.aBB <= 0 && ships.speed >= 10) return 'Q';
							if (CHDATA.fleets.combined == 2 && ships.escort.aBB <= 0) return 'Q';
							return 'N';
						}
					},
					'P': {
						type: 3,
						x: 175,
						y: 326,
						distance: 6,
						end: true
					},
					'Q': {
						type: 1,
						x: 149,
						y: 141,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						routeL: { 3: 'U', 0: 'R' }
					},
					'R': {
						type: 3,
						x: 105,
						y: 200,
						distance: 7,
						end: true
					},
					'S': {
						type: 3,
						x: 421,
						y: 278,
						distance: 2,
						hidden: 1,
						routeS: ['V','W']
					},
					'T': {
						type: 1,
						x: 388,
						y: 326,
						distance: 2,
						raid: true,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'X'
					},
					'U': {
						type: 1,
						x: 174,
						y: 224,
						distance: 6,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								var hasSonar = false, hasSeiran = false;
								for (let equip of ship.equips) {
									if (equip.type == SONARS || equip.type == SONARL) hasSonar = true;
									if (equip.mid == 62) hasSeiran = true
								}
								let bonuses = [];
								if (hasSonar) bonuses.push({ mod: 1.15 });
								if (hasSeiran) bonuses.push({ mod: 1.24 });
								if (bonuses.length) ship.bonusSpecial = bonuses;
							}
							if (CHDATA.event.maps[3].debuff.I && CHDATA.event.maps[3].debuff.J) {
								for (let ship of FLEETS2[0].ships) {
									if (ship.mid == 1620) ship.debuff = 23;
								}
							}
							if (CHDATA.event.maps[3].debuff.J2 >= 2) {
								FLEETS2[0].ships[0].debuff = 23;
							} else {
								if (CHDATA.event.maps[3].hp > 660 && CHDATA.event.maps[3].hp <= 800) CHDATA.event.maps[3].hp = 801;
							}
						},
						debuffGive: function() {
							//if not debuffed, revert to pre-lastdance if didn't sink
							if (CHDATA.event.maps[3].debuff.debuffed2) return;
							if (CHDATA.event.maps[3].hp <= 660) CHDATA.event.maps[3].debuff.canDebuff2 = 1;
							if ([1719,1720,1721].indexOf(FLEETS2[0].ships[0].mid) != -1 && CHDATA.event.maps[3].hp > 0) {
								CHDATA.event.maps[3].hp = 801;
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'V': {
						type: 1,
						x: 389,
						y: 218,
						distance: 3,
						raid: true,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'W': {
						type: 1,
						x: 357,
						y: 267,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'X': {
						type: 1,
						x: 307,
						y: 323,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					}
				},
			}
		}
	},
	38: {
		name: 'Spring 2017',
		date: '2017-05-02',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/J9DVNwf.png',
		bannerImgAlt: 'http://i.imgur.com/ztzHSkE.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		historical: {
			fifth1: [63,64,100,101,114,15,16,18,49],
			fifth2: [63,101,100,114,16,18,41,49],
			russian: [35,511],
		},
		disableMore: { ships: [521,511] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Sortie! Oominato Guard District',
				bgmMap: 2038,
				fleetTypes: [0],
				bgmDN: 91,
				bgmNN: 91,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: 13,
				checkLock: [2,3,4],
				giveLock: 1,
				maphp: {
					3: { 1: 520 },
					2: { 1: 440 },
					1: { 1: 330 },
				},
				finalhp: {
					3: 160,
					2: 130,
					1: 110,
				},
				additionalChecks(ships,errors) {
					if (ships.CV + ships.CVB + ships.CVL) errors.push('No CV(L/B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 181,
						y: 260,
						route: 'E'
					},
					'A': {
						type: 1,
						x: 58,
						y: 161,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeLC: 3,
						routeL: { 34: 'D', 32: 'C' }
					},
					'B': {
						type: 1,
						x: 74,
						y: 229,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'A'
					},
					'C': {
						type: 3,
						x: 78,
						y: 87,
						end: true
					},
					'D': {
						type: 1,
						x: 148,
						y: 86,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'E': {
						type: 3,
						x: 166,
						y: 216,
						routeC: function(ships) {
							if (ships.DD >= 2 && ships.CL >= 1) return 'F';
							return 'B';
						}
					},
					'F': {
						type: 1,
						x: 268,
						y: 226,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeLC: 3,
						routeL: { 13: 'H', 12: 'G' }
					},
					'G': {
						type: 3,
						x: 276,
						y: 325,
						end: true
					},
					'H': {
						type: 3,
						x: 341,
						y: 287,
						routeS: ['I','J']
					},
					'I': {
						type: 1,
						x: 401,
						y: 211,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 483,
						y: 323,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.DD + ships.CL >= 4) return 'L';
							return 'K';
						}
					},
					'K': {
						type: 1,
						x: 532,
						y: 227,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeLC: 3,
						routeL: { 15: 'M', 14: 'L' }
					},
					'L': {
						type: 1,
						x: 588,
						y: 284,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeLC: 3,
						routeL: { 13: 'M', 12: 'N' }
					},
					'M': {
						type: 1,
						x: 627,
						y: 150,
						subonly: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'N': {
						type: 3,
						x: 666,
						y: 258,
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Fleet, Assemble! To the Hitokappu Bay Anchorage',
				bgmMap: 2038,
				fleetTypes: [0],
				bgmDN: 91,
				bgmNN: 91,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: [20,18],
				checkLock: [1,2,3],
				giveLock: 4,
				lbas: 1,
				parts: {
					1: {
						currentBoss: 'R',
						maphp: {
							3: { 1: 300 },
							2: { 1: 240 },
							1: { 1: 120 },
						},
						transport: 'L'
					},
					2: {
						currentBoss: 'T',
						maphp: {
							3: { 1: 1040 },
							2: { 1: 1040 },
							1: { 1: 1040 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[2].part == 2;
						}
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 256,
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'F';
							if (ships.AV <= 0 && ships.aCV <= 2 && ships.DD) return 'F';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 53,
						y: 230,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 71,
						y: 155,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aCV <= 2) return 'D';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 91,
						y: 81,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Hard 1','Hard 2','Hard 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 122,
						y: 111,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'E': {
						type: 2,
						x: 160,
						y: 152,
						dropoff: true,
						resource: 1,
						amount: [150],
						end: true
					},
					'F': {
						type: 3,
						x: 181,
						y: 256,
						distance: 1,
						route: 'G'
					},
					'G': {
						type: 1,
						x: 251,
						y: 323,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aBB + ships.aCV <= 2 && ships.DD >= 2) return 'I';
							return 'H';
						}
					},
					'H': {
						type: 1,
						x: 309,
						y: 259,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'I': {
						type: 3,
						x: 367,
						y: 324,
						distance: 3,
						routeS: ['K','M']
					},
					'J': {
						type: 3,
						x: 392,
						y: 91,
						distance: 3,
						end: true
					},
					'K': {
						type: 1,
						x: 423,
						y: 247,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aBB + ships.aCV <= 3 && ships.DD >= 2) return 'O';
							return 'Q';
						}
					},
					'L': {
						type: 2,
						x: 452,
						y: 185,
						distance: 3,
						resource: 0,
						route: 'P'
					},
					'M': {
						type: 1,
						x: 466,
						y: 324,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'Q'
					},
					'N': {
						type: 1,
						x: 476,
						y: 112,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'R', 0: 'J' }
					},
					'O': {
						type: 1,
						x: 503,
						y: 239,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'L'
					},
					'P': {
						type: 3,
						x: 509,
						y: 178,
						distance: 4,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.event.maps[2].part == 2 && CHDATA.event.maps[2].hp > 0) {
								this.showLoSPlane = 'T';
								return 'T';
							}
							let numHistoricals = 0;
							for (let mid of MAPDATA[38].historical.fifth1) {
								if (isShipInList(ships.ids,mid)) numHistoricals++;
							}
							let numRequired = 3;
							if (CHDATA.event.maps[2].diff == 3) numRequired = 4;
							if (numHistoricals >= numRequired) {
								this.showLoSPlane = 'R';
								return 'R';
							}
							if (CHDATA.event.maps[2].hp <= 0) {
								this.showLoSPlane = (Math.random() < .5)? 'R' : 'T';
								return this.showLoSPlane;
							}
							return 'N';
						}
					},
					'Q': {
						type: 1,
						x: 555,
						y: 291,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.event.maps[2].part == 1) return 'O';
							this.showLoSPlane = 'T';
							return 'T';
						}
					},
					'R': {
						type: 1,
						x: 556,
						y: 88,
						distance: 5,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'S': {
						type: 3,
						x: 643,
						y: 258,
						distance: 6,
						end: true
					},
					'T': {
						type: 1,
						x: 598,
						y: 185,
						distance: 5,
						hidden: 1,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Fleet, Head out! Reinforce the Northern Defense Line!',
				bgmMap: 2038,
				fleetTypes: [1,2,3],
				bgmDN: 11,
				bgmNN: 11,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: [23,22],
				checkLock: [1,3,4],
				giveLock: 2,
				lbas: 2,
				reward: { ships: [521], firstOnly: true },
				parts: {
					1: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 500 },
							2: { 1: 400 },
							1: { 1: 300 },
						},
						transport: 'U'
					},
					2: {
						currentBoss: 'W',
						maphp: {
							3: { 1: 1920 },
							2: { 1: 1760 },
							1: { 1: 1600 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 480,
					2: 440,
					1: 400,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.B && debuff.C && debuff.E;
						}
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[3].part == 2;
						}
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.V && debuff.P && debuff.R;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 251,
						y: 312,
						route: 'J'
					},
					'A': {
						type: 1,
						x: 42,
						y: 150,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'B'
					},
					'B': {
						type: 2,
						x: 70,
						y: 102,
						distance: 3,
						dropoff: true,
						resource: 3,
						amount: [250],
						debuffGive: function() { CHDATA.event.maps[3].debuff.B = 1; },
						end: true
					},
					'C': {
						type: 2,
						x: 107,
						y: 149,
						distance: 2,
						dropoff: true,
						resource: 2,
						amount: [200],
						debuffGive: function() { CHDATA.event.maps[3].debuff.C = 1; },
						end: true
					},
					'D': {
						type: 3,
						x: 123,
						y: 226,
						distance: 1,
						routeS: ['A','C']
					},
					'E': {
						type: 2,
						x: 151,
						y: 111,
						distance: 3,
						dropoff: true,
						resource: 1,
						amount: [150],
						debuffGive: function() { CHDATA.event.maps[3].debuff.E = 1; },
						end: true
					},
					'F': {
						type: 1,
						x: 190,
						y: 191,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'G': {
						type: 1,
						x: 202,
						y: 142,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'H': {
						type: 3,
						x: 242,
						y: 164,
						distance: 3,
						routeS: ['F','G']
					},
					'I': {
						type: 1,
						x: 292,
						y: 101,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.CV + ships.CVB <= 2) return 'O';
							return 'L';
						}
					},
					'J': {
						type: 3,
						x: 309,
						y: 288,
						distance: 3,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'K';
							if (CHDATA.fleets.combined == 2) return 'N';
							return (Math.random() < .5)? 'K' : 'N';
						}
					},
					'K': {
						type: 1,
						x: 324,
						y: 212,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (!CHDATA.event.maps[3].routes || CHDATA.event.maps[3].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'H';
							}
							if (CHDATA.fleets.combined == 1) return 'I';
							if (ships.AV + ships.escort.AV + ships.AO + ships.escort.AO + ships.LHA + ships.escort.LHA >= 2) return 'H';
							if (ships.speed >= 10) return 'M';
							return 'L';
						}
					},
					'L': {
						type: 1,
						x: 377,
						y: 150,
						distance: 4,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'O';
							return 'Q';
						}
					},
					'M': {
						type: 3,
						x: 433,
						y: 194,
						distance: 5,
						hidden: 1,
						route: 'Q'
					},
					'N': {
						type: 3,
						x: 435,
						y: 288,
						distance: 4,
						routeS: ['P','R']
					},
					'O': {
						type: 1,
						x: 437,
						y: 89,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'Q'
					},
					'P': {
						type: 1,
						x: 493,
						y: 240,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part != 2) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.P = 1;
						},
						route: 'S'
					},
					'Q': {
						type: 1,
						x: 532,
						y: 109,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'U'
					},
					'R': {
						type: 1,
						x: 540,
						y: 324,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part != 2) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.R = 1;
						},
						route: 'S'
					},
					'S': {
						type: 1,
						x: 568,
						y: 268,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (!CHDATA.event.maps[3].routes || CHDATA.event.maps[3].routes.indexOf(2) == -1) {
								return 'T';
							}
							this.showLoSPlane = 'W';
							return 'W';
						}
					},
					'T': {
						type: 3,
						x: 602,
						y: 199,
						distance: 7,
						end: true
					},
					'U': {
						type: 2,
						x: 636,
						y: 129,
						distance: 8,
						hidden: 1,
						resource: 0,
						routeL: { 3: 'V', 0: 'T' }
					},
					'V': {
						type: 1,
						x: 668,
						y: 194,
						distance: 9,
						hidden: 1,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.V = 1;
						},
						end: true
					},
					'W': {
						type: 1,
						x: 654,
						y: 269,
						distance: 8,
						hidden: 2,
						boss: true,
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Interception! Protection of the Warrior Spirit',
				bgmMap: 2038,
				fleetTypes: [0],
				bgmDN: 92,
				bgmNN: 92,
				bgmDB: 19,
				bgmNB: 19,
				bossnode: 9,
				checkLock: [1,2,4],
				giveLock: 3,
				lbas: 3,
				lbasSortie: 2,
				maphp: {
					3: { 1: 3300 },
					2: { 1: 3150 },
					1: { 1: 2900 },
				},
				finalhp: {
					3: 690,
					2: 670,
					1: 650,
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 1, 1: 0 },
					chance: { 3: .4, 2: .2, 1: 0 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
					},
				},
				additionalChecks(ships,errors) {
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 179,
						y: 316,
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'A';
							if (ships.aCV <= 0 && ships.speed >= 10 && ships.CL && ships.DD >= 3) return 'A';
							return 'D';
						}
					},
					'A': {
						type: 1,
						x: 88,
						y: 213,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 103,
						y: 132,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 197,
						y: 110,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'E', 0: 'F' }
					},
					'D': {
						type: 1,
						x: 232,
						y: 259,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV <= 0 && ships.speed >= 10) return 'A';
							return 'G';
						}
					},
					'E': {
						type: 1,
						x: 244,
						y: 188,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'H'
					},
					'F': {
						type: 3,
						x: 298,
						y: 86,
						distance: 3,
						end: true
					},
					'G': {
						type: 1,
						x: 315,
						y: 248,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 344,
						y: 110,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 410,
						y: 134,
						distance: 1,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								let bonuses = [], done = [];
								for (let equip of ship.equips) {
									if (done.indexOf(equip.mid) != -1) continue;
									if (equip.mid == 16) bonuses.push({ mod: 1.4 });
									if (equip.mid == 82) bonuses.push({ mod: 1.3 });
									if (equip.mid == 93) bonuses.push({ mod: 1.3 });
									if (equip.mid == 143) bonuses.push({ mod: 1.3 });
									if (equip.mid == 99) bonuses.push({ mod: 1.2 });
									if (equip.mid == 100) bonuses.push({ mod: 1.2 });
									if (equip.mid == 199) bonuses.push({ mod: 1.3 });
									if (equip.mid == 200) bonuses.push({ mod: 1.3 });
									done.push(equip.mid);
								}
								if (bonuses.length) ship.bonusSpecial = bonuses;
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'J': {
						type: 3,
						x: 416,
						y: 253,
						distance: 3,
						routeS: ['L','N']
					},
					'K': {
						type: 1,
						x: 497,
						y: 158,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'I', 0: 'M' }
					},
					'L': {
						type: 1,
						x: 495,
						y: 218,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'O';
							return 'K';
						}
					},
					'M': {
						type: 3,
						x: 515,
						y: 86,
						distance: 5,
						end: true
					},
					'N': {
						type: 1,
						x: 522,
						y: 311,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'O';
							return 'Q';
						}
					},
					'O': {
						type: 1,
						x: 573,
						y: 231,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'P'
					},
					'P': {
						type: 1,
						x: 628,
						y: 137,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'Q': {
						type: 1,
						x: 649,
						y: 284,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'P'
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'The Northern Witch',
				bgmMap: 2038,
				fleetTypes: [1,2],
				bgmDN: 92,
				bgmNN: 92,
				bgmDB: 93,
				bgmNB: 93,
				bossnode: [20,18],
				lbas: 3,
				reward: { ships: [511] },
				parts: {
					1: {
						currentBoss: 'R',
						maphp: {
							3: { 1: 1200 },
							2: { 1: 1100 },
							1: { 1: 1050 },
						},
						finalhp: {
							3: 400,
							2: 400,
							1: 400,
						},
					},
					2: {
						currentBoss: 'T',
						maphp: {
							3: { 1: 3850 },
							2: { 1: 3080 },
							1: { 1: 3000 },
						},
						finalhp: {
							3: 770,
							2: 770,
							1: 770,
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[5].part == 2;
						}
					}
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 2 },
					chance: { 3: .4, 2: .4, 1: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Hard 2','Hard 3','Medium 1'],
						1: ['Medium 1','Easy 1'],
					},
					debuffGive: function(airState,totalDamage) {
						if (totalDamage <= 0) CHDATA.event.maps[5].debuff.AB = 1;
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.C && debuff.D && debuff.E && (debuff.AB || CHDATA.event.maps[5].diff == 1 || CHDATA.config.disableRaidReq);
				},
				startCheck: function() {
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 667,
						y: 258,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 610,
						y: 199,
						route: 'B'
					},
					'A': {
						type: 3,
						x: 557,
						y: 257,
						distance: 2,
						routeS: ['D','E']
					},
					'B': {
						type: 1,
						x: 566,
						y: 156,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 510,
						y: 107,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.C = 1;
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 489,
						y: 289,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.D = 1;
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 493,
						y: 215,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.E = 1;
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 3) return 'F';
							if (ships.aBB + ships.aCV >= 5) return 'F';
							return 'H';
						}
					},
					'F': {
						type: 1,
						x: 433,
						y: 124,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (!CHDATA.event.maps[5].routes || CHDATA.event.maps[5].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'H';
							}
							if (CHDATA.event.maps[5].hp > 0) return 'J';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 419,
						y: 321,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'L';
							if (ships.escort.CLT >= 2) return 'L';
							return 'M';
						}
					},
					'H': {
						type: 1,
						x: 400,
						y: 227,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[5].hp > 0) {
								if (ships.aBB + ships.CV + ships.CVB >= 6) return 'I';
								if (ships.CLT >= 3) return 'I';
								if (ships.CV + ships.CVB >= 3) return 'G';
								if (ships.aBB + ships.CV + ships.CVB >= 4) return 'G';
								let num = 0;
								for (let mid of MAPDATA[38].historical.fifth2.concat(MAPDATA[38].historical.russian)) {
									if (isShipInList(ships.ids,mid)) num++;
								}
								if (num >= 5) return 'M';
								return 'G';
							}
							if (ships.escort.CLT >= 3) return 'I';
							if (ships.aBB >= 4 + ships.escort.aBB) return 'M';
							if (ships.AO + ships.escort.AO) return 'M';
							return 'G';
						}
					},
					'I': {
						type: 4,
						x: 347,
						y: 200,
						distance: 4,
						route: 'K'
					},
					'J': {
						type: 3,
						x: 343,
						y: 89,
						distance: 4,
						hidden: 1,
						routeS: ['K','N']
					},
					'K': {
						type: 1,
						x: 293,
						y: 169,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Hard 1'],
							1: ['Easy 1'],
						},
						routeL: { 3: 'O', 0: 'Q' }
					},
					'L': {
						type: 1,
						x: 289,
						y: 305,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[5].diff != 3) {
								let num = 0;
								for (let mid of MAPDATA[38].historical.fifth2.concat(MAPDATA[38].historical.russian)) {
									if (isShipInList(ships.ids,mid)) num++;
								}
								if (num >= 4) {
									this.showLoSPlane = 'R';
									return checkELoS33(getELoS33(1,1,true),{ 34: 'R', 32: 'P' });
								}
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,1,true),{ 34: 'M', 32: 'P' });
						}
					},
					'M': {
						type: 1,
						x: 287,
						y: 244,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 34: 'R', 32: 'Q' }
					},
					'N': {
						type: 1,
						x: 269,
						y: 81,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'O'
					},
					'O': {
						type: 1,
						x: 207,
						y: 121,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						routeL: { 3: 'T', 0: 'S' }
					},
					'P': {
						type: 3,
						x: 203,
						y: 337,
						distance: 6,
						end: true
					},
					'Q': {
						type: 3,
						x: 189,
						y: 191,
						distance: 6,
						end: true
					},
					'R': {
						type: 1,
						x: 158,
						y: 285,
						distance: 6,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								let bonuses = [];
								if (MAPDATA[38].historical.fifth2.indexOf(getBaseId(ship.mid)) != -1) bonuses.push({ mod: 1.2 });
								if (MAPDATA[38].historical.russian.indexOf(getBaseId(ship.mid)) != -1) bonuses.push({ mod: 1.5 });
								let hasDB = false;
								for (let equip of ship.equips) {
									if (equip.type == DIVEBOMBER) hasDB = true;
								}
								if (hasDB) bonuses.push({ mod: 1.5 });
								if (bonuses.length) ship.bonusSpecial = bonuses;
							}
						},
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						end: true
					},
					'S': {
						type: 3,
						x: 132,
						y: 81,
						distance: 7,
						end: true
					},
					'T': {
						type: 1,
						x: 117,
						y: 156,
						distance: 7,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								let bonuses = [];
								if (MAPDATA[38].historical.fifth2.indexOf(getBaseId(ship.mid)) != -1) bonuses.push({ mod: 1.2 });
								if (MAPDATA[38].historical.russian.indexOf(getBaseId(ship.mid)) != -1) bonuses.push({ mod: 1.5 });
								let hasDB = false;
								for (let equip of ship.equips) {
									if (equip.type == DIVEBOMBER) hasDB = true;
								}
								if (hasDB) bonuses.push({ mod: 1.5 });
								if (bonuses.length) ship.bonusSpecial = bonuses;
							}
						},
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			}
		}
	},
	39: {
		name: 'Summer 2017',
		date: '2017-08-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		bannerImg: 'http://i.imgur.com/DVZX6RR.png',
		bannerImgAlt: 'http://i.imgur.com/nOkdjn2.png',
		transportCalc: transportCalcStandard,
		historical: {
			ceylon: [
				78,79,85,86,
				76,83,90,91,110,111,
				69,70,71,72,120,124,125,
				23,54,114,
				9,10,12,17,18,32,48,49,122,167,168,169,170,455
			],
			european: [
				171,174,175,176,431,432,
				441,442,443,444,448,449,535,
				439,515,
				491,492
			]
		},
		disableMore: { ships: [475,492,515] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Commence Recross Operation',
				bgmMap: 95,
				fleetTypes: [0],
				bgmDN: 95,
				bgmNN: 95,
				bgmDB: 96,
				bgmNB: 96,
				bossnode: 16,
				checkLock: [1,2,3,4],
				giveLock: 5,
				maphp: {
					3: { 1: 1700 },
					2: { 1: 1240 },
					1: { 1: 700 },
				},
				finalhp: {
					3: 377,
					2: 277,
					1: 177,
				},
				currentBoss: 'P',
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB) errors.push('No (F)BB');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.M;
						}
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.Q;
						}
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 376,
						y: 215,
						routeC: function(ships) {
							if (ships.DD + ships.DE < 2) return 'F';
							if (ships.CL + ships.DD + ships.DE < 3) return 'F';
							if (ships.CVL > 1) return 'F';
							if (ships.CT > 1) return 'F';
							if (ships.CLT > 1) return 'F';
							if (ships.SS + ships.SSV) return 'F';
							return 'I';
						}
					},
					'A': {
						type: 3,
						x: 119,
						y: 95,
						end: true
					},
					'B': {
						type: 3,
						x: 136,
						y: 249,
						end: true
					},
					'C': {
						type: 1,
						x: 184,
						y: 102,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 24: 'P', 22: 'A' }
					},
					'D': {
						type: 1,
						x: 218,
						y: 286,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 24: 'P', 22: 'B' }
					},
					'E': {
						type: 1,
						x: 274,
						y: 112,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'F': {
						type: 1,
						x: 315,
						y: 174,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'G': {
						type: 1,
						x: 338,
						y: 339,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'H': {
						type: 1,
						x: 434,
						y: 125,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'I': {
						type: 3,
						x: 434,
						y: 217,
						routeS: ['H','J']
					},
					'J': {
						type: 3,
						x: 434,
						y: 313,
						routeS: ['G','L']
					},
					'K': {
						type: 1,
						x: 509,
						y: 99,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'M';
							}
							if (ships.speed >= 10 && ships.CVL + ships.BBV <= 0) return 'Q';
							return 'M';
						}
					},
					'L': {
						type: 1,
						x: 531,
						y: 321,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							this.showNoCompass = false;
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(2) == -1) {
								this.showNoCompass = true;
								return 'N';
							}
							if (ships.CVL + ships.BBV) return 'N';
							this.showLoSPlane = 'R';
							return checkELoS33(getELoS33(1,1),{ 16: 'R', 15: 'N' });
						}
					},
					'M': {
						type: 2,
						x: 547,
						y: 161,
						dropoff: true,
						resource: 4,
						amount: [100],
						debuffGive: function() { CHDATA.event.maps[1].debuff.M = 1; },
						end: true
					},
					'N': {
						type: 1,
						x: 593,
						y: 279,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							this.showNoCompass = false;
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(2) == -1) {
								this.showNoCompass = true;
								return 'O';
							}
							if (ships.CVL + ships.BBV > 1) return 'O';
							this.showLoSPlane = 'R';
							return checkELoS33(getELoS33(1,1),{ 11: 'R', 10: 'O' });
						}
					},
					'O': {
						type: 3,
						x: 641,
						y: 174,
						end: true
					},
					'P': {
						type: 1,
						x: 149,
						y: 179,
						subonly: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'Q': {
						type: 2,
						x: 496,
						y: 192,
						hidden: 1,
						dropoff: true,
						resource: 1,
						amount: [130],
						debuffGive: function() { CHDATA.event.maps[1].debuff.Q = 1; },
						end: true
					},
					'R': {
						type: 1,
						x: 629,
						y: 342,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'S'
					},
					'S': {
						type: 1,
						x: 712,
						y: 308,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'The Crossing of Ri Lanka',
				bgmMap: 95,
				fleetTypes: [0],
				bgmDN: 96,
				bgmNN: 96,
				bgmDB: 97,
				bgmNB: 97,
				bossnode: 15,
				checkLock: [2,3,4,5],
				giveLock: 1,
				maphp: {
					3: { 1: 1440 },
					2: { 1: 1440 },
					1: { 1: 1440 },
				},
				finalhp: {
					3: 220,
					2: 220,
					1: 220,
				},
				reward: { ships: [475], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.I;
						}
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 632,
						y: 221,
						routeC: function(ships) {
							if (ships.DD && ships.DD + ships.CL >= 2) {
								if (ships.SS + ships.SSV) return 'D';
								if (ships.aCV >= 3) return 'D';
								if (ships.aBB <= 1 || CHDATA.event.maps[2].diff == 1) return 'A';
							}
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 695,
						y: 254,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 678,
						y: 173,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'A'
					},
					'C': {
						type: 1,
						x: 646,
						y: 335,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 569,
						y: 167,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 512,
						y: 107,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 484,
						y: 313,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (!CHDATA.event.maps[2].routes || CHDATA.event.maps[2].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'J';
							}
							if (ships.DD >= 3 && ships.aBB + ships.aCV <= 1 && ships.speed >= 10 && (ships.AV || CHDATA.event.maps[2].diff != 3)) return 'P';
							return 'J';
						}
					},
					'G': {
						type: 3,
						x: 423,
						y: 133,
						routeS: ['H','I']
					},
					'H': {
						type: 1,
						x: 409,
						y: 261,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 334,
						y: 162,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[2].debuff.I = 1;
						},
						end: true
					},
					'J': {
						type: 1,
						x: 316,
						y: 290,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.aBB + ships.aCV > 3) return 'M';
							this.showLoSPlane = 'L';
							return 'L';
						}
					},
					'K': {
						type: 1,
						x: 251,
						y: 164,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'O'
					},
					'L': {
						type: 1,
						x: 227,
						y: 255,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let letter = 'K';
							if (CHDATA.event.maps[2].routes && CHDATA.event.maps[2].routes.indexOf(1) != -1) {
								if (ships.CV + ships.CVB <= 1 && ships.aBB <= 1 && (ships.speed >= 10 || CHDATA.event.maps[2].diff != 3) && ships.CA + ships.CAV + ships.CLT <= 0) letter = 'O';
							}
							return checkELoS33(getELoS33(1,1),{ 3: letter, 0: 'N' });
						}
					},
					'M': {
						type: 3,
						x: 222,
						y: 315,
						end: true
					},
					'N': {
						type: 3,
						x: 131,
						y: 222,
						end: true
					},
					'O': {
						type: 1,
						x: 134,
						y: 123,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'P': {
						type: 1,
						x: 483,
						y: 250,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'Q'
					},
					'Q': {
						type: 1,
						x: 484,
						y: 177,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Beyond the Stebian Sea',
				bgmMap: 95,
				fleetTypes: [1,2,3],
				bgmDN: 96,
				bgmNN: 96,
				bgmDB: 97,
				bgmNB: 97,
				bossnode: [12,17],
				checkLock: [2,3,4,5],
				giveLock: 1,
				parts: {
					1: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 480 },
							2: { 1: 390 },
							1: { 1: 360 },
						},
						transport: 'K'
					},
					2: {
						currentBoss: 'Q',
						maphp: {
							3: { 1: 1960 },
							2: { 1: 1720 },
							1: { 1: 1560 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 490,
					2: 430,
					1: 370,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[3].part == 2;
						}
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 630,
						y: 102,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'A';
							if (CHDATA.event.maps[3].part == 1) return 'B';
							if (ships.aBB + ships.escort.aBB + ships.CV + ships.CVB >= 4) return 'B';
							if (ships.aBB + ships.escort.aBB >= 3) return 'B';
							if (ships.aCV >= 3) return 'B';
							if (ships.CLT >= 2) return 'B';
							if (isShipInList(ships.ids,90) && isShipInList(ships.ids,91)) return 'A';
							if (CHDATA.fleets.combined == 2 && ships.speed >= 10) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 676,
						y: 246,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 618,
						y: 185,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 605,
						y: 277,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 503,
						y: 322,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 417,
						y: 287,
						routeS: ['F','H']
					},
					'F': {
						type: 1,
						x: 417,
						y: 168,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						setupSpecial: function() {
							CHDATA.sortie.F = true;
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'I';
							if (ships.speed >= 10) return 'I';
							return 'G';
						}
					},
					'G': {
						type: 1,
						x: 374,
						y: 82,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 359,
						y: 213,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (!CHDATA.event.maps[3].routes || CHDATA.event.maps[3].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'I'
							}
							if (CHDATA.fleets.combined == 3) return 'I';
							return (Math.random() < .5)? 'M' : 'N';
						}
					},
					'I': {
						type: 1,
						x: 312,
						y: 147,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.BB + ships.BBV) return 'J';
							if (ships.aBB + ships.aCV > 2) return 'J';
							if (CHDATA.sortie.F) return 'K';
							if (CHDATA.fleets.combined == 3 && ships.speed >= 10) return 'K';
							return 'J';
						}
					},
					'J': {
						type: 1,
						x: 259,
						y: 82,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'K': {
						type: 2,
						x: 187,
						y: 123,
						resource: 0,
						route: 'L'
					},
					'L': {
						type: 1,
						x: 123,
						y: 160,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'M': {
						type: 1,
						x: 321,
						y: 301,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let count = ships.aBB + ships.aCV;
							let ids = ships.ids.concat(ships.escort.ids), numH = 0;
							for (let mid of MAPDATA[39].historical.ceylon) {
								if (isShipInList(ids,mid)) numH++;
							}
							if (numH >= 6) count -= 1 + .1*Math.max(0,numH-6);
							let letter = (Math.random() < (count-2)*.4)? 'N' : 'Q';
							this.showLoSPlane = letter;
							return checkELoS33(getELoS33(1,1,true),{ 3: letter, 0: 'O' });
						}
					},
					'N': {
						type: 1,
						x: 272,
						y: 212,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'Q', 0: 'P' }
					},
					'O': {
						type: 3,
						x: 245,
						y: 339,
						hidden: 1,
						end: true
					},
					'P': {
						type: 3,
						x: 174,
						y: 212,
						hidden: 1,
						end: true
					},
					'Q': {
						type: 1,
						x: 183,
						y: 283,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								let mid = getBaseId(ship.mid);
								if (mid == 90 || mid == 91) {
									ship.bonusSpecial = [{ mod: 1.1, on: [1705,1706,1707] }];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The Distant Suez',
				bgmMap: 95,
				fleetTypes: [1,2,3],
				bgmDN: 98,
				bgmNN: 98,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: [14,9],
				checkLock: [1,2,4,5],
				giveLock: 3,
				lbas: 1,
				reward: { ships: [492], firstOnly: true },
				parts: {
					1: {
						currentBoss: 'I',
						maphp: {
							3: { 1: 1190 },
							2: { 1: 1190 },
							1: { 1: 1190 },
						},
						finalhp: {
							3: 340, 
							2: 340, 
							1: 340, 
						}
					},
					2: {
						currentBoss: 'N',
						maphp: {
							3: { 1: 3650 },
							2: { 1: 3650 },
							1: { 1: 3650 },
						},
						finalhp: {
							3: 730, 
							2: 730, 
							1: 730, 
						}
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[4].part == 2;
						}
					}
				},
				nodes: {
					'Start': {
						type: 0,
						x: 713,
						y: 102,
						routeC: function(ships) {
							if (CHDATA.event.maps[4].part == 2 && CHDATA.fleets.combined == 1) return 'A';
							if (CHDATA.fleets.combined == 1 && ships.aBB + ships.CV + ships.CVB <= 3 && ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 4) return 'A';
							return 'D';
						}
					},
					'A': {
						type: 1,
						x: 703,
						y: 233,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 694,
						y: 328,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'C', 0: 'E' }
					},
					'C': {
						type: 1,
						x: 647,
						y: 243,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'D': {
						type: 1,
						x: 648,
						y: 153,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (CHDATA.event.maps[4].part == 1) {
								this.showNoCompass = true;
								return 'A';
							}
							if (ships.aBB >= 4) return 'A';
							if (ships.CV + ships.CVB >= 2) return 'A';
							if (ships.aBB + ships.aCV >= 5) return 'A';
							if (ships.escort.CLT >= 3) return 'A';
							return 'G';
						}
					},
					'E': {
						type: 3,
						x: 621,
						y: 311,
						distance: 4,
						end: true
					},
					'F': {
						type: 3,
						x: 588,
						y: 128,
						distance: 2,
						end: true
					},
					'G': {
						type: 3,
						x: 574,
						y: 208,
						distance: 2,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'F';
							this.showLoSPlane = 'H';
							return 'H';
						}
					},
					'H': {
						type: 3,
						x: 504,
						y: 244,
						distance: 2,
						routeC: function(ships) {
							this.showNoCompass = false;
							if (CHDATA.event.maps[4].part == 1) {
								this.showNoCompass = true;
								return 'I';
							}
							if (CHDATA.fleets.combined == 2) return 'J';
							return 'I';
						}
					},
					'I': {
						type: 1,
						x: 562,
						y: 301,
						distance: 3,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'J': {
						type: 1,
						x: 392,
						y: 325,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'K': {
						type: 1,
						x: 315,
						y: 262,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 2) return 'L';
							if (ships.aBB + ships.aCV >= 5) return 'L';
							if (ships.CV + ships.CVB) return 'L';
							if (ships.escort.CLT <= 0) return 'M';
							let ids = ships.ids.concat(ships.escort.ids), numH = 0;
							for (let mid of MAPDATA[39].historical.european) {
								if (isShipInList(ids,mid)) numH++;
							}
							if (numH >= CHDATA.event.maps[4].diff) return 'M';
							return 'L';
						}
					},
					'L': {
						type: 1,
						x: 252,
						y: 250,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 237,
						y: 194,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'N'
					},
					'N': {
						type: 1,
						x: 156,
						y: 125,
						distance: 6,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[39].historical.european.indexOf(mid) != -1) {
									ship.bonusSpecial = [{ mod: 1.3, on: [1745,1746,1747,1748,1749,1750] }];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Invitation to the Mediterranean Sea',
				bgmMap: 98,
				fleetTypes: [0],
				bgmDN: 97,
				bgmNN: 97,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: 13,
				checkLock: [1,2,3,5],
				giveLock: 4,
				lbas: 1,
				maphp: {
					3: { 1: 2120 },
					2: { 1: 1800 },
					1: { 1: 1600 },
				},
				finalhp: {
					3: 530,
					2: 450,
					1: 400,
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.C && debuff.D;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 693,
						y: 310,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 630,
						y: 277,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 566,
						y: 239,
						distance: 2,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 482,
						y: 317,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || (CHDATA.temp.rank == 'A' && CHDATA.event.maps[5].diff != 3)) {
								CHDATA.event.maps[5].debuff.C = 1;
							}
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 470,
						y: 182,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || (CHDATA.temp.rank == 'A' && CHDATA.event.maps[5].diff != 3)) {
								CHDATA.event.maps[5].debuff.D = 1;
							}
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 407,
						y: 236,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.DD < 2) return 'H';
							let numH = 0;
							for (let mid of MAPDATA[39].historical.european) {
								if (isShipInList(ships.ids,mid)) numH++;
							}
							if (numH >= CHDATA.event.maps[5].diff) return 'F';
							return 'H';
						}
					},
					'F': {
						type: 1,
						x: 374,
						y: 181,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 6) return 'G';
							if (ships.aBB + ships.CV + ships.CVB <= 2) return 'I';
							let numH = 0;
							for (let mid of MAPDATA[39].historical.european) {
								if (isShipInList(ships.ids,mid)) numH++;
							}
							if (numH >= CHDATA.event.maps[5].diff) return 'I';
							return 'J';
						}
					},
					'G': {
						type: 4,
						x: 335,
						y: 115,
						distance: 5,
						resource: 1,
						route: 'J'
					},
					'H': {
						type: 1,
						x: 332,
						y: 300,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB <= 2 && ships.DD >= 3 && ships.CL) return 'I';
							return 'F';
						}
					},
					'I': {
						type: 1,
						x: 265,
						y: 250,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 259,
						y: 197,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'K': {
						type: 1,
						x: 190,
						y: 190,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 22: 'M', 20: 'L' }
					},
					'L': {
						type: 3,
						x: 171,
						y: 264,
						distance: 7,
						end: true
					},
					'M': {
						type: 1,
						x: 133,
						y: 126,
						distance: 8,
						boss: true,
						setupSpecial: function() {
							if (CHDATA.event.maps[5].debuff.C && CHDATA.event.maps[5].debuff.D) {
								for (let ship of FLEETS1[0].ships) {
									ship.bonusSpecial = [{ mod: 1.2 }];
								}
								for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
									ship.EV *= .35;
								}
							}
						},
						debuffAmount: 23,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Battle of Malta Island',
				bgmMap: 98,
				fleetTypes: [1,2,3],
				bgmDN: 97,
				bgmNN: 97,
				bgmDB: 99,
				bgmNB: 99,
				bossnode: [19,8],
				checkLock: [1,3,4,5],
				giveLock: 2,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'H',
						maphp: {
							3: { 1: 2000 },
							2: { 1: 1500 },
							1: { 1: 1350 },
						},
						transport: 'F'
					},
					2: {
						currentBoss: 'S',
						maphp: {
							3: { 1: 2200 },
							2: { 1: 2200 },
							1: { 1: 2000 },
						},
						transport: null
					}
				},
				finalhp: {
					3: 440,
					2: 440,
					1: 440,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '6_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[6].part == 2;
						}
					}
				},
				startCheck: function() {
					if (CHDATA.event.maps[6].part == 1) return 'Start1';
					if (CHDATA.fleets.combined == 3) return 'Start1';
					return 'Start2';
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.H && debuff.O;
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 712,
						y: 326,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 376,
						y: 284,
						hidden: 1,
						route: 'K'
					},
					'A': {
						type: 3,
						x: 655,
						y: 334,
						distance: 3,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 621,
						y: 258,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 582,
						y: 317,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'D';
							if (ships.aBB + ships.aCV >= 4) return 'D';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 520,
						y: 270,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'F';
							if (ships.aBB + ships.aCV <= 2 && ships.aCV + ships.escort.aCV <= 3 && ships.DD >= 2) return 'F';
							return 'G';
						}
					},
					'E': {
						type: 1,
						x: 484,
						y: 335,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'I';
							if (ships.CV + ships.CVB) return 'I';
							return 'G';
						}
					},
					'F': {
						type: 2,
						x: 463,
						y: 180,
						distance: 3,
						dropoff: true,
						resource: 0,
						route: 'H'
					},
					'G': {
						type: 1,
						x: 459,
						y: 263,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'H': {
						type: 1,
						x: 419,
						y: 252,
						distance: 3,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffC: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[6].part != 2) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[6].debuff.H = 1;
						},
						end: true
					},
					'I': {
						type: 2,
						x: 357,
						y: 342,
						distance: 4,
						dropoff: true,
						resource: 2,
						amount: [192],
						routeC: function(ships) {
							if (CHDATA.event.maps[6].part == 1) return 'G';
							return 'K';
						}
					},
					'J': {
						type: 4,
						x: 353,
						y: 156,
						distance: 1,
						hidden: 1,
						resource: 1,
						route: 'L'
					},
					'K': {
						type: 1,
						x: 326,
						y: 216,
						distance: 1,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.escort.aBB && CHDATA.event.maps[6].diff == 3) return 'J';
							if (ships.aBB + ships.aCV + ships.escort.aCV >= 4 && ships.speed <= 5 && CHDATA.event.maps[6].diff != 1) return 'J';
							if (ships.aBB + ships.aCV + ships.escort.aCV >= 5) return 'J';
							return 'M';
						}
					},
					'L': {
						type: 1,
						x: 292,
						y: 75,
						distance: 1,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'O'
					},
					'M': {
						type: 1,
						x: 250,
						y: 220,
						distance: 1,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'N';
							if (ships.aBB + ships.aCV + ships.escort.aBB + ships.escort.aCV >= 4) return 'N';
							return 'P';
						}
					},
					'N': {
						type: 1,
						x: 232,
						y: 177,
						distance: 1,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 2) return 'O';
							if (ships.aBB + ships.aCV + ships.escort.aBB + ships.escort.aCV >= 4) return 'O';
							return 'P';
						}
					},
					'O': {
						type: 1,
						x: 208,
						y: 123,
						distance: 1,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[6].debuff.O = 1;
						},
						route: 'R'
					},
					'P': {
						type: 1,
						x: 174,
						y: 207,
						distance: 1,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: { 45: 'S', 42: 'Q' }
					},
					'Q': {
						type: 3,
						x: 163,
						y: 256,
						distance: 1,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 137,
						y: 165,
						distance: 1,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'P'
					},
					'S': {
						type: 1,
						x: 102,
						y: 246,
						distance: 1,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							if (!MAPDATA[39].maps[6].debuffCheck(CHDATA.event.maps[6].debuff)) return;
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								ship.bonusSpecial = [{ mod: 1.2 }];
							}
							for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
								ship.EV *= .35;
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					}
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Battle of Dover Strait',
				bgmMap: 98,
				fleetTypes: [1,2,3],
				bgmDN: 99,
				bgmNN: 99,
				bgmDB: 100,
				bgmNB: 100,
				bossnode: 21,
				lbas: 3,
				maphp: {
					3: { 1: 5280 },
					2: { 1: 5280 },
					1: { 1: 5280 },
				},
				finalhp: {
					3: 880,
					2: 880,
					1: 880,
				},
				reward: { ships: [515] },
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 0 },
					chance: { 3: .15, 2: .15, 1: 0 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '7_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.P1 && debuff.R1 && ((debuff.H && debuff.J && debuff.K) || CHDATA.event.maps[7].diff == 1);
						}
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.P2 && debuff.R2;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 170,
						y: 311,
						route: 'C'
					},
					'A': {
						type: 1,
						x: 50,
						y: 199,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aBB + ships.escort.aBB <= 2 && ships.CV + ships.CVB <= 2) return 'E';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 67,
						y: 116,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 110,
						y: 254,
						distance: 1,
						routeS: ['A','G']
					},
					'D': {
						type: 1,
						x: 137,
						y: 182,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.DD + ships.CL) {
								if (CHDATA.event.maps[7].debuffed) return 'H';
								if (ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 3) return 'H';
							}
							return 'F';
						}
					},
					'E': {
						type: 1,
						x: 156,
						y: 76,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let debuff = CHDATA.event.maps[7].debuff;
							if (debuff) {
								if (debuff.K && !debuff.J) return 'J';
								if (debuff.J && !debuff.K) return 'I';
							}
							return (Math.random() < .5)? 'I' : 'J';
						}
					},
					'F': {
						type: 1,
						x: 193,
						y: 125,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 199,
						y: 232,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'H';
							if (ships.speed <= 5) return 'D';
							if (ships.DD + ships.CL && CHDATA.event.maps[7].debuffed) return 'H';
							return (Math.random() < .7)? 'D' : 'H';
						}
					},
					'H': {
						type: 1,
						x: 270,
						y: 164,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.H = 1;
						},
						routeC: function(ships) {
							this.showNoCompass = false;
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'L';
							}
							if (CHDATA.fleets.combined == 1 && ships.speed >= 10) return 'O';
							return 'L';
						}
					},
					'I': {
						type: 1,
						x: 295,
						y: 123,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 326,
						y: 82,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.J = 1;
						},
						route: 'N'
					},
					'K': {
						type: 1,
						x: 374,
						y: 130,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.K = 1;
						},
						route: 'O'
					},
					'L': {
						type: 1,
						x: 370,
						y: 213,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'P';
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(1) == -1) {
								if (ships.speed >= 10) return 'P';
								return 'M';
							}
							if (!CHDATA.event.maps[7].debuffed && CHDATA.fleets.combined == 2 && ships.aBB + ships.escort.aBB <= 1 && ships.escort.DD >= 3) {
								if (ships.speed >= 10) return 'P';
								return 'M';
							}
							return 'O';
						}
					},
					'M': {
						type: 1,
						x: 402,
						y: 283,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'P'
					},
					'N': {
						type: 1,
						x: 407,
						y: 85,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'O'
					},
					'O': {
						type: 3,
						x: 456,
						y: 138,
						distance: 5,
						routeS: ['Q','R']
					},
					'P': {
						type: 1,
						x: 461,
						y: 215,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							if (!CHDATA.event.maps[7].routes || !CHDATA.event.maps[7].routes.length) {
								if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.P1 = 1;
							} else {
								if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.P2 = 1;
							}
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 506,
						y: 194,
						distance: 6,
						setupSpecial: function() {
							if (!CHDATA.event.maps[7].debuffed) return;
							//will last rest of sortie
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								ship.bonusSpecial = [{ mod: 1.3 }];
							}
							for (let lbas of LBAS) lbas.bonusSpecial = [{ mod: 1.3 }];
							for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
								ship.EV *= .35;
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'S'
					},
					'R': {
						type: 1,
						x: 522,
						y: 122,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							if (!CHDATA.event.maps[7].routes || !CHDATA.event.maps[7].routes.length) {
								if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.R1 = 1;
							} else {
								if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.R2 = 1;
							}
						},
						end: true
					},
					'S': {
						type: 3,
						x: 559,
						y: 252,
						distance: 7,
						route: 'T'
					},
					'T': {
						type: 1,
						x: 619,
						y: 267,
						distance: 8,
						setupSpecial: function() {
							if (!CHDATA.event.maps[7].debuffed) return;
							for (let ship of FLEETS2[0].ships) {
								ship.EV *= .5;
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						compDiffF: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 1','Medium 3'],
							1: ['Easy 1','Easy 3'],
						},
						routeL: { 45: 'U', 42: 'V' }
					},
					'U': {
						type: 1,
						x: 665,
						y: 210,
						distance: 9,
						boss: true,
						setupSpecial: function() {
							if (!CHDATA.event.maps[7].debuffed) return;
							for (let ship of FLEETS2[0].ships.concat(FLEETS2[1].ships)) {
								ship.EV *= .35;
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'V': {
						type: 3,
						x: 670,
						y: 267,
						distance: 9,
						end: true
					}
				}
			}
		}
	},
	40: {
		name: 'Fall 2017',
		date: '2017-11-17',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 25, vanguardEvDD2: 40, vanguardEvOther1: 15, vanguardEvOther2: 25 },
		newResupplyCosts: true,
		bannerImg: 'http://i.imgur.com/Kvt6ikS.png',
		bannerImgAlt: 'http://i.imgur.com/xWMGYCa.png',
		transportCalc: transportCalcStandard,
		overrideStats: {
			1628: { AR: 193 },
			1629: { AR: 223 },
			1630: { AR: 273 },
		},
		voiceSpecial: {
			26: { 'nbattack': 'assets/voice/Fusou_ShoGo_2017_NightAttack.mp3' },
			27: { 'nbattack': 'assets/voice/Yamashiro_ShoGo_2017_NightAttack.mp3' },
			43: { 'attack': 'assets/voice/Shigure_ShoGo_2017_Attack.mp3' },
		},
		historical: {
			shima: [63,64,114,15,16,18,49],
			kurita: [
				131,143,80,78,79,
				66,67,68,69,62,65,71,72,124,125,
				138,139,
				50,135,409,410,452,20,415,167,168,169
			],
			troopTransport: [61,113,486],
			shimaEscort: [38,40,41],
			ozawa: [111, 102,103,116, 77,87, 22,100,183, 421,423],
			nishimura: [26,27,70,43,97,413,414],
		},
		disableMore: { ships: [531,532] },
		maps: {
			1: {
				name: 'E-1',
				nameT: '2nd Striking Force, Set Sail!',
				fleetTypes: [0],
				bgmMap: 103,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 105,
				bgmNB: 105,
				bossnode: 19,
				checkLock: [5,6],
				giveLock: 4,
				lbas: 1,
				currentBoss: 'S',
				maphp: {
					3: { 1: 590 },
					2: { 1: 440 },
					1: { 1: 420 },
				},
				finalhp: {
					3: 118,
					2: 88,
					1: 84,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.F && debuff.K;
						}
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							return debuff.O && debuff.P && (CHDATA.event.maps[1].diff != 3 || debuff.E);
						}
					}
				},
				additionalCheck: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 695,
						y: 116,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 650,
						y: 194,
						distance: 1,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 582,
						y: 258,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'C': {
						type: 3,
						x: 534,
						y: 336,
						distance: 3,
						route: 'G'
					},
					'D': {
						type: 1,
						x: 522,
						y: 213,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 481,
						y: 150,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(1) == -1) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[1].debuff.E = 1;
						},
						showLoSPlane: 'H',
						routeC: function(ships) {
							let num = 0;
							for (let mid of MAPDATA[40].historical.shima) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (num >= CHDATA.event.maps[1].diff-1) {
								return checkELoS33(getELoS33(1,1),{ 20: 'H', 15: 'I' });
							}
							return checkELoS33(getELoS33(1,1),{ 80: 'H', 50: 'I' });
						}
					},
					'F': {
						type: 2,
						x: 456,
						y: 202,
						distance: 3,
						dropoff: true,
						resource: 2,
						amount: [70],
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.F = 1;
						},
						end: true
					},
					'G': {
						type: 3,
						x: 441,
						y: 317,
						distance: 4,
						routeS: ['D','J']
					},
					'H': {
						type: 1,
						x: 434,
						y: 157,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'I': {
						type: 3,
						x: 432,
						y: 81,
						distance: 3,
						end: true
					},
					'J': {
						type: 1,
						x: 348,
						y: 298,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'K';
							}
							this.showNoCompass = false;
							if (ships.SS + ships.SSV <= 0 && ships.DD >= 2 && (CHDATA.event.maps[1].diff != 3 || ships.CL)) return 'M';
							return 'K';
						}
					},
					'K': {
						type: 1,
						x: 300,
						y: 289,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.K = 1;
						},
						route: 'L'
					},
					'L': {
						type: 1,
						x: 248,
						y: 279,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'M': {
						type: 3,
						x: 309,
						y: 205,
						distance: 5,
						hidden: 1,
						routeS: ['N','O']
					},
					'N': {
						type: 1,
						x: 274,
						y: 127,
						distance: 6,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'P'
					},
					'O': {
						type: 1,
						x: 212,
						y: 256,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.O = 1;
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(2) == -1) {
								this.showLoSPlane = 'Q';
								return checkELoS33(getELoS33(1,1),{ 20: 'Q', 15: 'R' });
							}
							this.showLoSPlane = 'S';
							let letter;
							let num = 0;
							for (let mid of MAPDATA[40].historical.shima) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (num >= CHDATA.event.maps[1].diff-1) {
								return checkELoS33(getELoS33(1,1),{ 20: 'S', 15: 'R' });
							}
							return checkELoS33(getELoS33(1,1),{ 80: 'S', 50: 'Q', 20: 'Q', 15: 'R' });
						}
					},
					'P': {
						type: 2,
						x: 176,
						y: 106,
						distance: 7,
						hidden: 1,
						dropoff: true,
						resource: 3,
						amount: [70],
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.P = 1;
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 176,
						y: 323,
						distance: 8,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						end: true
					},
					'R': {
						type: 3,
						x: 157,
						y: 196,
						distance: 7,
						hidden: 1,
						end: true
					},
					'S': {
						type: 1,
						x: 110,
						y: 253,
						distance: 8,
						hidden: 2,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.shima.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Operation Shō-Ichi-Gō, commence preparation!',
				fleetTypes: [0,7],
				bgmMap: 103,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 105,
				bgmNB: 105,
				bossnode: 16,
				checkLock: [5,6],
				giveLock: 4,
				transport: 'N',
				lbas: 1,
				reward: {
					3: { ships: [531], items: [269], firstOnly: true },
					2: { ships: [531], items: [269], firstOnly: true },
					1: { ships: [531], firstOnly: true },
				},
				maphp: {
					3: { 1: 400 },
					2: { 1: 370 },
					1: { 1: 330 },
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let diff = CHDATA.event.maps[2].diff;
							return debuff.J && (debuff.C || diff == 1) && (debuff.D || diff != 3);
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				startCheck: function(ships) {
					if (!CHDATA.event.maps[2].routes || CHDATA.event.maps[2].routes.indexOf(1) == -1) {
						return 'Start1';
					}
					if (ships.SS + ships.SSV + ships.AV + ships.AO <= 0) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 707,
						y: 161,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 359,
						y: 87,
						hidden: 1,
						route: 'Q'
					},
					'A': {
						type: 1,
						x: 627,
						y: 195,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let num = 0;
							for (let mid of MAPDATA[40].historical.shima) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (ships.aCV + ships.SS + ships.SSV <= 0 && ships.DD + ships.DE >= 2 && (num >= 2 || CHDATA.event.maps[2].diff == 1)) return 'B';
							return 'D';
						}
					},
					'B': {
						type: 3,
						x: 556,
						y: 225,
						distance: 3,
						routeS: ['C','F']
					},
					'C': {
						type: 1,
						x: 556,
						y: 135,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[2].debuff.C = 1;
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 552,
						y: 319,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[2].debuff.D = 1;
						},
						route: 'F'
					},
					'E': {
						type: 1,
						x: 495,
						y: 114,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 462,
						y: 264,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let num = 0;
							for (let mid of MAPDATA[40].historical.shima) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (ships.BB + ships.BBV <= 0 && ships.DD >= 2 && (num >= 2 || CHDATA.event.maps[2].diff == 1)) return 'G';
							return 'H';
						}
					},
					'G': {
						type: 3,
						x: 407,
						y: 179,
						distance: 2,
						routeS: ['I','J']
					},
					'H': {
						type: 1,
						x: 351,
						y: 311,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'I': {
						type: 1,
						x: 291,
						y: 179,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 265,
						y: 225,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.J = 1;
						},
						end: true
					},
					'K': {
						type: 1,
						x: 212,
						y: 181,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'L': {
						type: 1,
						x: 119,
						y: 183,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 100,
						y: 279,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						route: 'N'
					},
					'N': {
						type: 2,
						x: 203,
						y: 341,
						distance: 6,
						dropoff: true,
						resource: 0,
						routeL: { 3: 'P', 0: 'O' }
					},
					'O': {
						type: 3,
						x: 218,
						y: 237,
						distance: 4,
						end: true
					},
					'P': {
						type: 1,
						x: 161,
						y: 249,
						distance: 5,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.shima.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 258,
						y: 126,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'I';
							if (ships.CLT >= 2) return 'I';
							let num = 0;
							for (let mid of MAPDATA[40].historical.shima) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							let numReq = [0,3,4][CHDATA.event.maps[2].diff-1];
							if (num >= numReq && ships.DD >= CHDATA.event.maps[2].diff && ships.aBB + ships.aCV <= 0) return 'L'
							if (ships.aBB + ships.aCV <= 0) return 'K';
							numReq = [0,2,3][CHDATA.event.maps[2].diff-1];
							if (num >= numReq && ships.aBB <= 1 && ships.aCV <= 1) return 'K';
							return 'I';
						}
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Commence Operation Shō-Ichi-Gō!',
				fleetTypes: [1,2,3],
				bgmMap: 106,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 105,
				bgmNB: 105,
				bossnode: [7,10,19],
				checkLock: [4,6],
				giveLock: 5,
				lbas: 2,
				reward: {
					3: { items: [218,270,272], firstOnly: true },
					2: { items: [218,272], firstOnly: true },
					1: { items: [218,272], firstOnly: true },
				},
				parts: {
					1: {
						currentBoss: 'G',
						transport: null,
						maphp: {
							3: { 1: 1020 },
							2: { 1: 765 },
							1: { 1: 660 },
						},
						finalhp: {
							3: 255,
							2: 255,
							1: 255,
						},
						enemyRaid: null,
					},
					2: {
						currentBoss: 'J',
						transport: 'H',
						maphp: {
							3: { 1: 700 },
							2: { 1: 570 },
							1: { 1: 530 },
						},
						finalhp: null,
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 0 },
							chance: { 3: .25, 2: .25, 1: 0 },
							compName: 'Q',
							compDiff: {
								3: ['Hard 1','Hard 2','Hard 3'],
								2: ['Medium 1','Medium 2','Medium 3'],
							},
							debuffGive: function(airState,totalHPLost) {
								if (totalHPLost <= 0) CHDATA.event.maps[3].debuff.AB = 1;
							}
						}
					},
					3: {
						currentBoss: 'S',
						transport: null,
						maphp: {
							3: { 1: 1575 },
							2: { 1: 1400 },
							1: { 1: 1225 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 0 },
							chance: { 3: .25, 2: .25, 1: 0 },
							compName: 'Q',
							compDiff: {
								3: ['Hard 1','Hard 2','Hard 3'],
								2: ['Medium 1','Medium 2','Medium 3'],
							},
							debuffGive: function(airState,totalHPLost) {
								if (totalHPLost <= 0) CHDATA.event.maps[3].debuff.AB = 1;
							}
						}
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[3].part == 2;
						}
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[3].part != 3) return false;
							if (CHDATA.event.maps[3].diff == 1) return true;
							if (!debuff) return false;
							return debuff.AB || CHDATA.config.disableRaidReq;
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (CHDATA.event.maps[3].part == 1 && CHDATA.fleets.combined != 2) errors.push('STF only');
				},
				startCheck: function() {
					if (!CHDATA.event.maps[3].routes || CHDATA.event.maps[3].routes.indexOf(1) == -1) {
						return 'Start1';
					}
					if (CHDATA.fleets.combined == 3) return 'Start2';
					if (CHDATA.event.maps[3].routes.indexOf(2) != -1 && CHDATA.fleets.combined == 1) return 'Start3';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 276,
						y: 82,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 122,
						y: 90,
						hidden: 1,
						route: 'B'
					},
					'Start3': {
						type: 0,
						x: 531,
						y: 83,
						hidden: 2,
						route: 'O'
					},
					'A': {
						type: 1,
						x: 195,
						y: 115,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 108,
						y: 150,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) {
								let num = 0, ids = ships.ids.concat(ships.escort.ids);
								for (let mid of MAPDATA[40].historical.troopTransport) {
									if (isShipInList(ids,mid)) num++;
								}
								if (num >= 3) return 'D';
								num = 0;
								for (let mid of MAPDATA[40].historical.shimaEscort) {
									if (isShipInList(ids,mid)) num++;
								}
								if (num >= 3) return 'D';
							}
							if (ships.speed >= 10 && (ships.aBB + ships.escort.aBB == 0 || ships.aBB + ships.escort.aBB == 2) && ships.aCV <= 0) return 'D';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 86,
						y: 216,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2 && ships.speed >= 10 && ships.aCV <= 0) {
								let num = 0, ids = ships.ids.concat(ships.escort.ids);
								for (let mid of MAPDATA[40].historical.kurita) {
									if (isShipInList(ids,mid)) num++;
								}
								if (num >= 10) return 'F'
								if (ships.aBB + ships.escort.aBB <= 1) return 'F';
							}
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 182,
						y: 233,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 258,
						y: 251,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[3].routes || CHDATA.event.maps[3].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								return 'F';
							}
							this.showNoCompass = false;
							if (CHDATA.fleets.combined == 3) return 'H'
							return 'F';
						}
					},
					'F': {
						type: 1,
						x: 199,
						y: 271,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 129,
						y: 292,
						distance: 4,
						boss: true,
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[40].historical.kurita.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.15}];
									}
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'H': {
						type: 2,
						x: 297,
						y: 207,
						distance: 1,
						hidden: 1,
						dropoff: true,
						resource: 0,
						routeL: { 3: 'J', 0: 'I' }
					},
					'I': {
						type: 3,
						x: 226,
						y: 191,
						distance: 2,
						hidden: 1,
						end: true
					},
					'J': {
						type: 1,
						x: 261,
						y: 139,
						distance: 2,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[40].historical.troopTransport.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.15}];
									}
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true
					},
					'K': {
						type: 1,
						x: 390,
						y: 235,
						distance: 3,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							return (Math.random() < .5)? 'L' : 'N';
						}
					},
					'L': {
						type: 1,
						x: 432,
						y: 309,
						distance: 4,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Q'
					},
					'M': {
						type: 3,
						x: 454,
						y: 191,
						distance: 4,
						hidden: 2,
						routeS: ['K','P']
					},
					'N': {
						type: 1,
						x: 473,
						y: 263,
						distance: 4,
						hidden: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV > 6) return 'L';
							if (ships.escort.aBB && ships.speed <= 5) return 'L';
							return 'Q';
						}
					},
					'O': {
						type: 1,
						x: 495,
						y: 138,
						distance: 4,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						route: 'M'
					},
					'P': {
						type: 1,
						x: 535,
						y: 191,
						distance: 5,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.escort.aBB) return 'N';
							let num = 0, ids = ships.ids.concat(ships.escort.ids);
							for (let mid of MAPDATA[40].historical.ozawa) {
								if (isShipInList(ids,mid)) num++;
							}
							let numReq = [3,4,6][CHDATA.event.maps[3].diff-1];
							if (num < numReq) return 'N';
							if (ships.aBB + ships.aCV + ships.escort.aCV <= 3 && ships.aBB + ships.CV <= 1) return 'R';
							if (ships.aBB + ships.aCV + ships.escort.aCV <= 5 && ships.aBB + ships.CV <= 2) return 'Q';
							return 'N';
						}
					},
					'Q': {
						type: 1,
						x: 535,
						y: 323,
						distance: 5,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'R'
					},
					'R': {
						type: 1,
						x: 612,
						y: 296,
						distance: 6,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: { 3: 'S', 0: 'T' }
					},
					'S': {
						type: 1,
						x: 630,
						y: 190,
						distance: 6,
						hidden: 2,
						boss: true,
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[40].historical.ozawa.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true
					},
					'T': {
						type: 3,
						x: 673,
						y: 250,
						distance: 7,
						hidden: 2,
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Ahead of that Strait',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 106,
				bgmDN: 105,
				bgmNN: 105,
				bgmDB: 107,
				bgmNB: 107,
				bossnode: ['ZZ3','ZZ3*'],
				giveLock: 6,
				lockSpecial: true,
				lbas: 3,
				lbasSortie: 2,
				reward: { ships: [532] },
				clearSpecial: function() {
					SM.playNew('assets/voice/Fall_2017_Event_Completion_Lines_2.mp3');
				},
				parts: {
					1: {
						currentBoss: 'ZZ3',
						maphp: {
							3: { 1: 3400 },
							2: { 1: 3200 },
							1: { 1: 3200 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
						}
					},
					2: {
						currentBoss: 'ZZ3*',
						maphp: {
							3: { 1: 2100 },
							2: { 1: 2000 },
							1: { 1: 2000 },
						},
						finalhp: {
							3: 655,
							2: 655,
							1: 655,
						}
					}
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1 },
					chance: { 3: .15, 2: .15, 1: .15 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(1) == -1) {
							if (totalHPLost <= 0) CHDATA.event.maps[4].debuff.AB1 = 1;
						} else {
							if (totalHPLost <= 0) CHDATA.event.maps[4].debuff.AB2 = 1;
						}
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let debuffAS = (debuff.N && debuff.V) || CHDATA.event.maps[4].diff == 1;
							let debuffAB = debuff.AB1 || CHDATA.event.maps[4].diff != 3 || CHDATA.config.disableRaidReq;
							return debuff.U && debuff.X && debuff.Y && debuffAS && debuffAB;
						}
					},
					2: {
						images: [{ name: '4_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let debuffAS = (debuff.Z1 && debuff.Z2) || CHDATA.event.maps[4].diff == 1;
							let debuffAB = debuff.AB2 || CHDATA.event.maps[4].diff == 1 || CHDATA.config.disableRaidReq;
							return debuff.Z4 && debuff.Z6 && debuff.Z8 && debuff.Z9 && debuffAS && debuffAB;
						}
					}
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) return 'Start1';
					if (!CHDATA.fleets.sf) return 'Start3';
					let allGreen = true;
					for (let sid of CHDATA.fleets[1]) {
						if (sid && CHDATA.ships[sid].lock != 4) { allGreen = false; break; }
					}
					if (allGreen) return 'Start3';
					for (let i=0; i<CHDATA.fleets[1].length; i++) { //give yellow lock only if Start2
						chGiveLock(1,i+1,6);
					}
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 83,
						y: 258,
						routeC: function(ships) {
							if (CHDATA.fleets.combined != 2) return 'A';
							let num = 0, ids = ships.ids.concat(ships.escort.ids);
							for (let mid of MAPDATA[40].historical.kurita) {
								if (isShipInList(ids,mid)) num++;
							}
							let numReq = [2,4,7][CHDATA.event.maps[4].diff-1];
							if (num >= numReq) return 'C';
							return 'A';
						}
					},
					'Start2': {
						type: 0,
						x: 157,
						y: 316,
						route: 'E'
					},
					'Start3': {
						type: 0,
						x: 305,
						y: 80,
						route: 'Q'
					},
					'A': {
						type: 1,
						x: 102,
						y: 167,
						distance: 9,
						night2: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 119,
						y: 95,
						distance: 9,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'C': {
						type: 3,
						x: 157,
						y: 239,
						distance: 9,
						route: 'F'
					},
					'D': {
						type: 3,
						x: 174,
						y: 140,
						distance: 8,
						route: 'G'
					},
					'E': {
						type: 3,
						x: 198,
						y: 277,
						distance: 8,
						route: 'I'
					},
					'F': {
						type: 3,
						x: 218,
						y: 220,
						distance: 8,
						routeS: ['D','H']
					},
					'G': {
						type: 1,
						x: 234,
						y: 93,
						distance: 8,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV > 5) return 'H';
							if ((CHDATA.fleets.combined == 2 || CHDATA.event.maps[4].diff == 1) && ships.speed >= 10) return 'L';
							return 'J';
						}
					},
					'H': {
						type: 1,
						x: 256,
						y: 191,
						distance: 7,
						night2: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 258,
						y: 279,
						distance: 7,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aCV <= 0) return 'M';
							let num = 0;
							for (let mid of MAPDATA[40].historical.nishimura) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (num >= CHDATA.event.maps[4].diff*2) return 'M';
							return 'K';
						}
					},
					'J': {
						type: 1,
						x: 294,
						y: 161,
						distance: 7,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'K': {
						type: 1,
						x: 310,
						y: 224,
						distance: 6,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'O'
					},
					'L': {
						type: 3,
						x: 306,
						y: 123,
						distance: 6,
						route: 'P'
					},
					'M': {
						type: 1,
						x: 320,
						y: 300,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'N'
					},
					'N': {
						type: 1,
						x: 364,
						y: 256,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[4].debuff.N = 1;
						},
						route: 'S'
					},
					'O': {
						type: 1,
						x: 378,
						y: 189,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV + ships.CLT <= 0 && ships.aBB <= 2) return 'S';
							return 'T';
						}
					},
					'P': {
						type: 3,
						x: 381,
						y: 68,
						distance: 6,
						showNoCompass: true,
						routeC: function(ships) {
							if (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(1) == -1) return 'U';
							return 'U*';
						}
					},
					'Q': {
						type: 3,
						x: 389,
						y: 109,
						distance: 5,
						route: 'T'
					},
					'R': {
						type: 1,
						x: 397,
						y: 338,
						distance: 5,
						night2: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						routeC: function(ships) {
							if (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(1) == -1) return 'W';
							return 'W*';
						}
					},
					'S': {
						type: 1,
						x: 418,
						y: 272,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							let letterW = (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(1) == -1)? 'W' : 'W*';
							let num = 0;
							for (let mid of MAPDATA[40].historical.nishimura) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							let numReq = [2,5,7][CHDATA.event.maps[4].diff-1];
							if (num >= numReq) return letterW;
							if (ships.aCV) return 'R';
							if (ships.DD < 2) return 'R';
							if (ships.speed >= 10) return letterW;
							if ((ships.DD >= 4 || CHDATA.event.maps[4].diff != 3) && ships.aBB <= 2) return letterW;
							return 'R';
						}
					},
					'T': {
						type: 1,
						x: 426,
						y: 154,
						distance: 4,
						night2: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'V'
					},
					'U': {
						type: 1,
						x: 435,
						y: 79,
						distance: 5,
						replacedBy: 'U*',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.U = 1;
						},
						end: true
					},
					'U*': {
						type: 1,
						x: 435,
						y: 79,
						distance: 5,
						hidden: 1,
						compName: 'U',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Z1'
					},
					'V': {
						type: 1,
						x: 442,
						y: 206,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[4].debuff.V = 1;
						},
						routeC: function(ships) {
							if (ships.aCV) return 'S';
							if (ships.aBB > 2) return 'S';
							if (ships.DD < 2) return 'S';
							if (!CHDATA.fleets.sf) return 'X';
							let allGreen = true;
							for (let sid of CHDATA.fleets[1]) {
								if (sid && CHDATA.ships[sid].lock != 4) { allGreen = false; break; }
							}
							if (allGreen) return 'X';
							return 'S';
						}
					},
					'W': {
						type: 1,
						x: 467,
						y: 292,
						distance: 4,
						night2: true,
						replacedBy: 'W*',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'Y'
					},
					'W*': {
						type: 3,
						x: 467,
						y: 292,
						hidden: 1,
						distance: 4,
						night2: true,
						route: 'Y*'
					},
					'X': {
						type: 1,
						x: 489,
						y: 247,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							CHDATA.event.maps[4].debuff.X = 1;
						},
						showNoCompass: true,
						routeC: function(ships) {
							if (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(1) == -1) return 'Y';
							return 'Y*';
						}
					},
					'Y': {
						type: 1,
						x: 533,
						y: 266,
						distance: 2,
						replacedBy: 'Y*',
						nightToDay2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.shima.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.Y = 1;
						},
						end: true
					},
					'Y*': {
						type: 1,
						x: 533,
						y: 266,
						distance: 2,
						hidden: 1,
						night2: true,
						subonly: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.shima.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compName: 'Y',
						compDiff: {
							3: ['Hard 3','Hard 4'],
							2: ['Medium 3','Medium 4'],
							1: ['Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV) return 'Z7';
							if (!CHDATA.fleets.sf) return 'Z7';
							let allGreen = true;
							for (let sid of CHDATA.fleets[1]) {
								if (sid && CHDATA.ships[sid].lock != 4) { allGreen = false; break; }
							}
							if (allGreen) return 'Z7';
							let num = 0;
							for (let mid of MAPDATA[40].historical.nishimura) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							let numReq = [0,3,6][CHDATA.event.maps[4].diff-1];
							if (num >= numReq) {
								if (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(2) == -1) return 'Z9';
								return 'Z9*';
							}
							return 'Z7';
						}
					},
					'Z1': {
						type: 1,
						x: 459,
						y: 114,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[4].debuff.Z1 = 1;
						},
						route: 'Z2'
					},
					'Z2': {
						type: 1,
						x: 487,
						y: 78,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[4].debuff.Z2 = 1;
						},
						route: 'Z3'
					},
					'Z3': {
						type: 1,
						x: 527,
						y: 103,
						distance: 2,
						hidden: 1,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'Z4', 0: 'Z5' }
					},
					'Z4': {
						type: 1,
						x: 552,
						y: 74,
						distance: 3,
						hidden: 1,
						night2: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.Z4 = 1;
						},
						route: 'Z6'
					},
					'Z5': {
						type: 3,
						x: 574,
						y: 135,
						hidden: 1,
						distance: 1,
						end: true
					},
					'Z6': {
						type: 1,
						x: 596,
						y: 94,
						distance: 2,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.Z6 = 1;
						},
						end: true
					},
					'Z7': {
						type: 1,
						x: 565,
						y: 256,
						distance: 1,
						hidden: 1,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						routeC: function(ships) {
							if (!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(2) == -1) return 'Z8';
							return 'Z8*';
						}
					},
					'Z8': {
						type: 1,
						x: 597,
						y: 247,
						distance: 1,
						hidden: 1,
						replacedBy: 'Z8*',
						nightToDay2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.shima.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.25}];
								}
							}
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.Z8 = 1;
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						end: true
					},
					'Z8*': {
						type: 1,
						x: 597,
						y: 247,
						distance: 1,
						hidden: 2,
						night2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.shima.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.25}];
								}
							}
						},
						compName: 'Z8',
						compDiff: {
							3: ['Hard 2','Hard 3','Hard 4'],
							2: ['Medium 2','Medium 3','Medium 4'],
							1: ['Easy 2','Easy 3','Easy 4'],
						},
						route: 'ZZ1'
					},
					'Z9': {
						type: 1,
						x: 589,
						y: 273,
						distance: 2,
						hidden: 1,
						replacedBy: 'Z9*',
						nightToDay2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.Z9 = 1;
						},
						end: true
					},
					'Z9*': {
						type: 1,
						x: 589,
						y: 273,
						distance: 2,
						hidden: 2,
						night2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compName: 'Z9',
						compDiff: {
							3: ['Hard 2'],
							2: ['Medium 2','Medium 3','Medium 4'],
							1: ['Easy 2','Easy 3','Easy 4'],
						},
						route: 'ZZ1'
					},
					'ZZ1': {
						type: 1,
						x: 629,
						y: 237,
						distance: 2,
						hidden: 2,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								ship.bonusSpecial = null;
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'ZZ2'
					},
					'ZZ2': {
						type: 1,
						x: 643,
						y: 206,
						distance: 2,
						hidden: 2,
						night2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.25}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						showNoCompass: true,
						routeC: function(ships) {
							if (CHDATA.event.maps[4].part == 1) return 'ZZ3';
							return 'ZZ3*';
						}
					},
					'ZZ3': {
						type: 1,
						x: 650,
						y: 155,
						distance: 2,
						hidden: 2,
						lbPart: 1,
						nightToDay2: true,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.4375}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
						},
						end: true
					},
					'ZZ3*': {
						type: 1,
						x: 650,
						y: 155,
						distance: 2,
						hidden: 2,
						lbPart: 2,
						nightToDay2: true,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[40].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.4375}];
								}
							}
						},
						compName: 'ZZ3',
						compDiff: {
							3: ['Hard 4'],
							2: ['Medium 4'],
							1: ['Easy 4'],
						},
						end: true
					}
				}
			}
		}
	},
	41: {
		name: 'Winter 2018',
		date: '2018-02-16',
		diffMode: 2,
		allowDiffs: [3,2,1,4],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		bannerImg: 'http://i.imgur.com/Oj9Svb7.png',
		bannerImgAlt: 'http://i.imgur.com/fRKQ4tM.png',
		transportCalc: function(ships,rank) {
			rank = rank || 'S';
			let tp = transportCalcStandard(ships,'S');
			for (let ship of ships) {
				if (!ship) continue;
				for (let item of ship.items) {
					if (item <= 0) continue;
					let eq = CHDATA.gears['x'+item];
					let eqd = EQDATA[eq.masterId];
					if (eqd.type == LANDINGTANK) tp += 18;
				}
			}
			tp = Math.floor(tp);
			if (rank == 'A') tp *= 0.7;
			if (rank != 'S' && rank != 'A') return 0;
			return Math.floor(tp);
		},
		voiceSpecial: {
			24: { 'attack': 'assets/voice/Ooi_Kantai_Kessen_2018_Atk.mp3' },
			25: { 'attack': 'assets/voice/Kitakami_Kantai_Kessen_2018_Atk.mp3' },
			26: { 'nbattack': 'assets/voice/Fusou_ShoGo_2017_NightAttack.mp3' },
			27: { 'nbattack': 'assets/voice/Yamashiro_ShoGo_2017_NightAttack.mp3' },
			43: { 'attack': 'assets/voice/Shigure_ShoGo_2017_Attack.mp3' },
			67: { 'nbattack': 'assets/voice/Atago_Kantai_Kessen_2018_NightAtk.mp3' },
			68: { 'nbattack': 'assets/voice/Maya_Kantai_Kessen_2018_NightAtk.mp3' },
			69: { 'attack': 'assets/voice/Choukai_Kantai_Kessen_2018_Atk.mp3' },
			77: { 'attack': 'assets/voice/Ise_Kantai_Kessen_2018_Atk.mp3' },
			78: { 'attack': 'assets/voice/Kongou_Kantai_Kessen_2018_Atk.mp3', 'nbattack': 'assets/voice/Kongou_Kantai_Kessen_2018_NightAtk.mp3' },
			79: { 'attack': 'assets/voice/Haruna_Kantai_Kessen_2018_Atk.mp3' },
			87: { 'attack': 'assets/voice/Hyuuga_Kantai_Kessen_2018_Atk.mp3' },
			110: { 'attack': 'assets/voice/Shoukaku_Kantai_Kessen_2018_Atk.mp3' },
			111: { 'attack': 'assets/voice/Zuikaku_Kantai_Kessen_2018_Atk.mp3' },
			116: { 'attack': 'assets/voice/Zuihou_Kantai_Kessen_2018_Atk.mp3' },
			143: { 'attack': 'assets/voice/Musashi_Kantai_Kessen_2018_Atk.mp3', 'nbattack': 'assets/voice/Musashi_Kantai_Kessen_2018_NightAtk.mp3' },
			170: { 'nbattack': 'assets/voice/Hamakaze_Kantai_Kessen_2018_NightAtk.mp3' },
		},
		historical: {
			kurita: [
				131,143,80,78,79,
				66,67,68,69,62,65,71,72,124,125,
				138,139,
				50,135,409,410,452,20,415,167,168,169,41
			],
			troopTransport: [61,113,486],
			shimaEscort: [38,40,41],
			ozawa: [111, 102,103,116, 77,87, 22,100,183, 421,423],
			nishimura: [26,27,70,43,97,413,414],
			ormoc: [63,64,113,15,16,49,38,40,41,486,50,135,425,452,517],
			leyteOther: [110,114],
		},
		friendFleet: {
			'desdiv19': { voice: [195,141], ships: [
				{ mid: 195, LVL: 77, FP: 53, TP: 49, AA: 28, AR: 28, equips: [63,63,74] },
				{ mid: 208, LVL: 74, FP: 35, TP: 59, AA: 36, AR: 35, equips: [63,63,101] },
				{ mid: 368, LVL: 71, FP: 23, TP: 58, AA: 27, AR: 34, equips: [2,125,28] },
				{ mid: 206, LVL: 70, FP: 23, TP: 57, AA: 25, AR: 24, equips: [2,125,28] },
			] },
			'desdiv19B': { voice: [208,241], ships: [
				{ mid: 208, LVL: 74, FP: 35, TP: 59, AA: 36, AR: 35, equips: [63,63,101] },
				{ mid: 195, LVL: 77, FP: 53, TP: 49, AA: 28, AR: 28, equips: [63,63,125] },
				{ mid: 368, LVL: 71, FP: 23, TP: 58, AA: 27, AR: 34, equips: [2,125,28] },
				{ mid: 206, LVL: 70, FP: 23, TP: 57, AA: 25, AR: 24, equips: [125,125,125] },
			] },
			'crudiv4': { voice: [427,141], ships: [
				{ mid: 269, LVL: 84, FP: 70, TP: 61, AA: 58, AR: 72, equips: [6,6,15,101], damage: [.65,.75] },
				{ mid: 270, LVL: 84, FP: 75, TP: 68, AA: 57, AR: 68, equips: [6,6,15,88], damage: [.44,.54] },
				{ mid: 427, LVL: 83, FP: 63, TP: 53, AA: 55, AR: 68, equips: [50,50,15,129] },
				{ mid: 428, LVL: 82, FP: 66, TP: 68, AA: 95, AR: 58, equips: [50,50,130,131], damage: [.5,.6] },
			] },
			'crudiv4B': { voice: [427,141], ships: [
				{ mid: 269, LVL: 84, FP: 70, TP: 61, AA: 58, AR: 72, equips: [6,6,15,101], damage: [.7,.8] },
				{ mid: 270, LVL: 84, FP: 75, TP: 68, AA: 57, AR: 68, equips: [6,6,15,88], damage: [.7,.8] },
				{ mid: 427, LVL: 83, FP: 63, TP: 53, AA: 55, AR: 68, equips: [50,50,15,129], damage: [.9,1] },
				{ mid: 428, LVL: 82, FP: 66, TP: 68, AA: 95, AR: 58, equips: [50,50,130,131], damage: [.7,.8] },
			] },
			'ibs': { voice: [150,141], ships: [
				{ mid: 150, LVL: 84, FP: 84, TP: 0, AA: 66, AR: 88, equips: [7,7,74,88] },
				{ mid: 152, LVL: 84, FP: 87, TP: 0, AA: 48, AR: 78, equips: [7,7,35,88] },
				{ mid: 144, LVL: 74, FP: 34, TP: 54, AA: 42, AR: 37, equips: [63,63,15] },
				{ mid: 323, LVL: 65, FP: 32, TP: 55, AA: 24, AR: 33, equips: [63,63,15] },
				{ mid: 228, LVL: 75, FP: 27, TP: 65, AA: 43, AR: 42, equips: [266,266,15] },
				{ mid: 316, LVL: 71, FP: 34, TP: 62, AA: 46, AR: 41, equips: [266,266,15] },
			] },
			'ibs2': { voice: [152,241], ships: [
				{ mid: 152, LVL: 84, FP: 87, TP: 0, AA: 48, AR: 78, equips: [7,7,7,88] },
				{ mid: 150, LVL: 84, FP: 84, TP: 0, AA: 66, AR: 88, equips: [7,7,7,74] },
				{ mid: 228, LVL: 75, FP: 27, TP: 65, AA: 43, AR: 42, equips: [266,266,15] },
				{ mid: 316, LVL: 71, FP: 34, TP: 62, AA: 46, AR: 41, equips: [266,266,15] },
				{ mid: 323, LVL: 65, FP: 32, TP: 55, AA: 24, AR: 33, equips: [63,15,88] },
				{ mid: 144, LVL: 74, FP: 34, TP: 54, AA: 42, AR: 37, equips: [63,63,15] },
			] },
			'nishimura1': { voice: [145,141], ships: [
				{ mid: 412, LVL: 81, FP: 86, TP: 0, AA: 72, AR: 79, equips: [7,7,272,101], damage: [.43,.54] },
				{ mid: 411, LVL: 82, FP: 93, TP: 0, AA: 74, AR: 78, equips: [7,7,88,74], damage: [.43,.54] },
				{ mid: 73, LVL: 76, FP: 61, TP: 58, AA: 53, AR: 59, equips: [50,50,15,26], damage: [.72,.84] },
				{ mid: 327, LVL: 74, FP: 34, TP: 64, AA: 42, AR: 38, equips: [266,15,88], damage: [.48,.58] },
				{ mid: 328, LVL: 73, FP: 36, TP: 55, AA: 43, AR: 35, equips: [266,15,88], damage: [.48,.58] },
				{ mid: 489, LVL: 78, FP: 35, TP: 50, AA: 48, AR: 28, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 145, LVL: 87, FP: 30, TP: 69, AA: 58, AR: 41, equips: [63,63,129], damage: [.9,1] },
			] },
			'nishimura2': { voice: [145,241], ships: [
				{ mid: 73, LVL: 76, FP: 56, TP: 50, AA: 34, AR: 58, equips: [50,50,15,74], damage: [.72,.84] },
				{ mid: 327, LVL: 75, FP: 35, TP: 44, AA: 37, AR: 25, equips: [266,266,101], damage: [.7,.8] },
				{ mid: 328, LVL: 74, FP: 24, TP: 44, AA: 36, AR: 35, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 489, LVL: 79, FP: 35, TP: 51, AA: 35, AR: 28, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 145, LVL: 88, FP: 30, TP: 49, AA: 59, AR: 28, equips: [15,15,15], damage: [.9,1] },
			] },
			'nishimura3': { voice: [145,241], ships: [
				{ mid: 145, LVL: 88, FP: 46, TP: 49, AA: 42, AR: 28, equips: [63,63,74], damage: [.9,1] },
				{ mid: 327, LVL: 75, FP: 35, TP: 44, AA: 27, AR: 36, equips: [266,266,101], damage: [.7,.8] },
				{ mid: 328, LVL: 74, FP: 24, TP: 59, AA: 36, AR: 35, equips: [266,15,88], damage: [.7,.8] },
				{ mid: 489, LVL: 79, FP: 35, TP: 51, AA: 35, AR: 40, equips: [266,15,88], damage: [.7,.8] },
			] },
			'eu': { voice: [364,141], ships: [
				{ mid: 364, LVL: 86, FP: 93, TP: 0, AA: 66, AR: 84, equips: [190,190,190,191] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 52, AR: 43, equips: [244,243,242,242] },
				{ mid: 392, LVL: 62, FP: 85, TP: 0, AA: 41, AR: 88, equips: [245,245,247] },
				{ mid: 519, LVL: 40, FP: 32, TP: 65, AA: 43, AR: 18, equips: [280,280] },
			] },
			'russian1': { voice: [513,141], ships: [
				{ mid: 513, LVL: 82, FP: 74, TP: 22, AA: 61, AR: 79, equips: [232,232,232,74] },
				{ mid: 516, LVL: 40, FP: 45, TP: 34, AA: 51, AR: 31, equips: [282,282,283] },
				{ mid: 147, LVL: 88, FP: 28, TP: 72, AA: 48, AR: 31, equips: [283,283,283] },
			] },
			'russian2': { voice: [516,141], ships: [
				{ mid: 516, LVL: 40, FP: 45, TP: 34, AA: 51, AR: 31, equips: [282,282,283] },
				{ mid: 513, LVL: 82, FP: 74, TP: 22, AA: 61, AR: 79, equips: [232,232,232,74] },
				{ mid: 179, LVL: 74, FP: 35, TP: 41, AA: 34, AR: 29, equips: [78,78,84] },
				{ mid: 180, LVL: 73, FP: 21, TP: 40, AA: 37, AR: 29, equips: [78,78,85] },
				{ mid: 147, LVL: 88, FP: 28, TP: 72, AA: 48, AR: 31, equips: [283,283,283] },
			] },
			'western1': { voice: [440,141], ships: [
				{ mid: 440, LVL: 52, FP: 105, TP: 0, AA: 96, AR: 95, equips: [161,161,161,172] },
				{ mid: 433, LVL: 70, FP: 45, TP: 0, AA: 73, AR: 63, equips: [255,257,257,259] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 68, AR: 57, equips: [244,243,244,244] },
				{ mid: 432, LVL: 78, FP: 40, TP: 0, AA: 70, AR: 57, equips: [64,257,159,259] },
				{ mid: 178, LVL: 87, FP: 92, TP: 31, AA: 60, AR: 87, equips: [114,114,114,85] },
			] },
			'western2': { voice: [392,141], ships: [
				{ mid: 440, LVL: 52, FP: 105, TP: 0, AA: 96, AR: 95, equips: [161,161,161,172] },
				{ mid: 433, LVL: 70, FP: 45, TP: 0, AA: 73, AR: 63, equips: [255,257,257,259] },
				{ mid: 392, LVL: 62, FP: 79, TP: 0, AA: 41, AR: 88, equips: [245,245,247,247] },
				{ mid: 364, LVL: 86, FP: 100, TP: 0, AA: 66, AR: 84, equips: [190,190,190,191] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 68, AR: 57, equips: [244,243,244,244] },
				{ mid: 432, LVL: 78, FP: 40, TP: 0, AA: 70, AR: 57, equips: [64,64,158,159] },
				{ mid: 178, LVL: 87, FP: 92, TP: 31, AA: 60, AR: 87, equips: [114,114,114,85], damage: [.9,1] },
			] },
			'western3': { voice: [392,241], ships: [
				{ mid: 392, LVL: 88, FP: 90, TP: 0, AA: 67, AR: 96, equips: [246,246,247,247] },
				{ mid: 360, LVL: 84, FP: 99, TP: 0, AA: 95, AR: 102, equips: [161,161,161,172] },
				{ mid: 178, LVL: 92, FP: 93, TP: 34, AA: 64, AR: 90, equips: [114,114,114,85], damage: [.9,1] },
			] },
			'western2-broken': { voice: [392,141], ships: [ //the one with wrong equips
				{ mid: 440, LVL: 52, FP: 105, TP: 0, AA: 96, AR: 95, equips: [161,161,161,172] },
				{ mid: 433, LVL: 70, FP: 45, TP: 0, AA: 73, AR: 63, equips: [255,257,257,259] },
				{ mid: 393, LVL: 85, FP: 35, TP: 0, AA: 68, AR: 57, equips: [245,245,247,247] },
				{ mid: 392, LVL: 62, FP: 79, TP: 0, AA: 41, AR: 88, equips: [190,190,190,191] },
				{ mid: 432, LVL: 78, FP: 40, TP: 0, AA: 70, AR: 57, equips: [244,243,244,244] },
				{ mid: 364, LVL: 86, FP: 100, TP: 0, AA: 66, AR: 84, equips: [64,64,158,159], damage: [.65,.75] },
				{ mid: 178, LVL: 87, FP: 92, TP: 31, AA: 60, AR: 87, equips: [114,114,114,85], damage: [.9,1] },
			] },
			'engano1': { voice: [306,141], ships: [
				{ mid: 306, LVL: 70, FP: 51, TP: 56, AA: 50, AR: 42, equips: [139,139,101], damage: [.9,1] },
				{ mid: 229, LVL: 75, FP: 28, TP: 64, AA: 30, AR: 28, equips: [267,58,88], damage: [.9,1] },
				{ mid: 543, LVL: 76, FP: 34, TP: 49, AA: 48, AR: 39, equips: [267,15,88], damage: [.9,1] },
				{ mid: 373, LVL: 55, FP: 21, TP: 51, AA: 27, AR: 30, equips: [267,15,88], damage: [.35,.45] },
				{ mid: 359, LVL: 54, FP: 29, TP: 52, AA: 31, AR: 22, equips: [267,15,88], damage: [.35,.45] },
				{ mid: 419, LVL: 77, FP: 26, TP: 64, AA: 64, AR: 26, equips: [15,15,15] },
			] },
			'engano2': { voice: [131,141], ships: [
				{ mid: 131, LVL: 60, FP: 129, TP: 0, AA: 81, AR: 108, equips: [276,276,234,36], damage: [.9,1] },
				{ mid: 541, LVL: 88, FP: 101, TP: 0, AA: 83, AR: 104, equips: [8,105,71,88], damage: [.9,1] },
				{ mid: 319, LVL: 75, FP: 60, TP: 52, AA: 44, AR: 57, equips: [50,50,15,239], damage: [.9,1] },
				{ mid: 194, LVL: 74, FP: 72, TP: 64, AA: 53, AR: 65, equips: [50,50,15,239], damage: [.9,1] },
				{ mid: 543, LVL: 76, FP: 50, TP: 49, AA: 34, AR: 39, equips: [267,15,88], damage: [.9,1] },
				{ mid: 419, LVL: 77, FP: 40, TP: 46, AA: 64, AR: 38, equips: [15,15,15], damage: [.9,1] },
			] },
			'engano3': { voice: [149,141], ships: [
				{ mid: 149, LVL: 91, FP: 85, TP: 0, AA: 70, AR: 88, equips: [7,7,7,74], damage: [.8,.9] },
				{ mid: 151, LVL: 90, FP: 91, TP: 0, AA: 79, AR: 79, equips: [7,7,7,101], damage: [.9,1] },
				{ mid: 188, LVL: 88, FP: 69, TP: 68, AA: 68, AR: 71, equips: [50,50,15,239], damage: [.85,.95] },
				{ mid: 189, LVL: 87, FP: 68, TP: 69, AA: 51, AR: 70, equips: [50,50,15,102], damage: [.7,.75] },
			] },
			'engano4': { voice: [307,141], ships: [
				{ mid: 307, LVL: 69, FP: 40, TP: 40, AA: 51, AR: 43, equips: [139,139,74], damage: [.9,1] },
				{ mid: 320, LVL: 76, FP: 24, TP: 44, AA: 49, AR: 36, equips: [266,266,101], damage: [.9,1] },
				{ mid: 312, LVL: 72, FP: 23, TP: 43, AA: 45, AR: 25, equips: [266,15,88], damage: [.9,1] },
				{ mid: 317, LVL: 71, FP: 33, TP: 58, AA: 35, AR: 35, equips: [266,15,88], damage: [.9,1] },
				{ mid: 228, LVL: 77, FP: 27, TP: 66, AA: 30, AR: 42, equips: [15,15,15] },
			] },
			'engano5': { voice: [306,141], ships: [
				{ mid: 306, LVL: 70, FP: 51, TP: 56, AA: 50, AR: 42, equips: [139,139,101], damage: [.9,1] },
				{ mid: 229, LVL: 75, FP: 28, TP: 64, AA: 30, AR: 28, equips: [267,58,88], damage: [.9,1] },
				{ mid: 543, LVL: 76, FP: 34, TP: 49, AA: 48, AR: 39, equips: [267,15,88], damage: [.9,1] },
				{ mid: 324, LVL: 55, FP: 21, TP: 52, AA: 32, AR: 22, equips: [267,15,88], damage: [.9,1] },
				{ mid: 325, LVL: 54, FP: 21, TP: 51, AA: 24, AR: 30, equips: [267,15,88], damage: [.9,1] },
				{ mid: 419, LVL: 77, FP: 26, TP: 64, AA: 64, AR: 26, equips: [15,15,15] },
			] },
			'engano6': { voice: [149,141], ships: [
				{ mid: 149, LVL: 91, FP: 85, TP: 0, AA: 70, AR: 88, equips: [7,7,7,74], damage: [.8,.9] },
				{ mid: 151, LVL: 90, FP: 91, TP: 0, AA: 79, AR: 79, equips: [7,7,7,101], damage: [.9,1] },
				{ mid: 504, LVL: 85, FP: 62, TP: 57, AA: 68, AR: 54, equips: [50,50,15,238], damage: [.75,.85] },
				{ mid: 503, LVL: 86, FP: 46, TP: 74, AA: 69, AR: 54, equips: [50,50,15,238], damage: [.85,.95] },
				{ mid: 188, LVL: 88, FP: 69, TP: 68, AA: 68, AR: 71, equips: [50,50,15,239], damage: [.85,.95] },
				{ mid: 189, LVL: 87, FP: 68, TP: 69, AA: 51, AR: 70, equips: [15,15,15,88], damage: [.7,.75] },
			] },
		},
		disableMore: { ships: [551,544,549] },
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Battle Stations! Perform Thorough Patrols of the Route Ahead!<br>[Battle of the Palawan Passage Route]',
				fleetTypes: [0,7],
				bgmMap: 109,
				bgmDN: 110,
				bgmNN: 110,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: 15,
				checkLock: [4,6,7,8],
				giveLock: 5,
				lbas: 1,
				maphp: {
					3: { 1: 1500 },
					2: { 1: 985 },
					1: { 1: 708 },
					4: { 1: 708 },
				},
				finalhp: {
					3: 377,
					2: 177,
					1: 177,
					4: 177,
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							if (CHDATA.event.maps[1].diff == 3) return debuff.B && debuff.F && debuff.K && debuff.N;
							if (CHDATA.event.maps[1].diff == 2) return debuff.F && debuff.K && debuff.N;
							return debuff.F && debuff.K;
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
					if (ships.SS + ships.SSV) errors.push('No SS(V)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 151,
						y: 268,
						routeC: function(ships) {
							if (ships.aBB <= 1 && ships.CL && ships.AV + ships.AS <= 0 && ships.DD + ships.DE >= 2) return 'D';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 127,
						y: 185,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 147,
						y: 134,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.B = 1;
						},
						routeL: { 3: 'E', 0: 'C' }
					},
					'C': {
						type: 3,
						x: 170,
						y: 76,
						distance: 3,
						end: true
					},
					'D': {
						type: 3,
						x: 217,
						y: 218,
						distance: 1,
						routeS: ['E','G']
					},
					'E': {
						type: 3,
						x: 251,
						y: 148,
						distance: 2,
						routeS: ['F','H']
					},
					'F': {
						type: 1,
						x: 280,
						y: 89,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.F = 1;
						},
						end: true
					},
					'G': {
						type: 1,
						x: 309,
						y: 256,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.aBB <= 0 && ships.DD >= 3) return 'K';
							return 'J';
						}
					},
					'H': {
						type: 1,
						x: 312,
						y: 191,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 376,
						y: 150,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						showNoCompass: true,
						routeC: function(ships) {
							if (!CHDATA.event.maps[1].routes || CHDATA.event.maps[1].routes.indexOf(1) == -1) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'O';
							return checkELoS33(getELoS33(1,3),{ 48: 'O', 46: 'L' });
						}
					},
					'J': {
						type: 1,
						x: 401,
						y: 226,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						routeLC: 3,
						routeL: { 48: 'K', 46: 'M' }
					},
					'K': {
						type: 1,
						x: 433,
						y: 309,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.K = 1;
						},
						routeLC: 3,
						routeL: { 48: 'N', 46: 'M' }
					},
					'L': {
						type: 3,
						x: 439,
						y: 108,
						distance: 5,
						end: true
					},
					'M': {
						type: 3,
						x: 467,
						y: 206,
						distance: 5,
						end: true
					},
					'N': {
						type: 1,
						x: 535,
						y: 279,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.N = 1;
						},
						end: true
					},
					'O': {
						type: 1,
						x: 340,
						y: 98,
						distance: 4,
						hidden: 1,
						boss: true,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 4'],
							1: ['Easy 3'],
							4: ['Casual 1'],
						},
						end: true
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'The Kurita Fleet\'s Grand Sortie!<br>[Battle of the Sibuyan Sea]',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 109,
				bgmDN: 110,
				bgmNN: 110,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: 26,
				checkLock: [5,7,8],
				giveLock: [4,6],
				lockSpecial: true,
				lbas: 1,
				maphp: {
					3: { 1: 708 },
					2: { 1: 650 },
					1: { 1: 420 },
					4: { 1: 420 },
				},
				finalhp: {
					3: 118,
					2: 88,
					1: 88,
					4: 84,
				},
				reward: { ships: [551], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							if (CHDATA.event.maps[2].diff == 4) return debuff.T;
							return debuff.S && debuff.T && debuff.X && debuff.Y;
						}
					}
				},
				startCheck: function(ships) {
					let lock = 6;
					if (!CHDATA.fleets.sf) lock = 4;
					for (let sid of CHDATA.fleets[1]) {
						if (sid && CHDATA.ships[sid].lock && CHDATA.ships[sid].lock != 6) lock = 4;
					}
					if (CHDATA.fleets.combined) {
						lock = 4;
						for (let i=0; i<CHDATA.fleets[2].length; i++) {
							chGiveLock(2,i+1,lock);
						}
					}
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,lock);
					}
					if (!CHDATA.event.maps[2].routes || CHDATA.event.maps[2].routes.indexOf(1) == -1) {
						return 'Start1';
					}
					if (CHDATA.fleets.combined == 2) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 109,
						y: 259,
						routeC: function(ships) {
							if (CHDATA.fleets.sf) {
								let allYellow = true;
								for (let sid of CHDATA.fleets[1]) {
									if (sid && CHDATA.ships[sid].lock != 6) allYellow = false;
								}
								if (allYellow) return 'D';
							}
							if (CHDATA.fleets.combined == 2) return 'B';
							return 'A';
						}
					},
					'Start2': {
						type: 0,
						x: 296,
						y: 94,
						hidden: 1,
						route: 'L'
					},
					'A': {
						type: 1,
						x: 109,
						y: 178,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeC: function(ships) {
							return 'C';
						}
					},
					'B': {
						type: 3,
						x: 173,
						y: 219,
						distance: 1,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) {
								if (CHDATA.event.maps[2].diff == 4) return 'E';
								let ids = ships.ids.concat(ships.escort.ids);
								if (checkHistorical(MAPDATA[41].historical.kurita,ids,[4,6,8])) return 'E';
							}
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 196,
						y: 146,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'E'
					},
					'D': {
						type: 3,
						x: 205,
						y: 239,
						distance: 1,
						route: 'G'
					},
					'E': {
						type: 1,
						x: 227,
						y: 199,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 275,
						y: 169,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 280,
						y: 241,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[2].diff == 4) return 'J';
							if (checkHistorical(MAPDATA[41].historical.nishimura,ships.ids,[2,4,6])) return 'J';
							return 'H';
						}
					},
					'H': {
						type: 1,
						x: 318,
						y: 305,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
							4: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[2].diff == 4) return 'J';
							if (checkHistorical(MAPDATA[41].historical.nishimura,ships.ids,[1,3,5])) return 'J';
							return 'K';
						}
					},
					'I': {
						type: 1,
						x: 323,
						y: 138,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						route: 'L'
					},
					'J': {
						type: 3,
						x: 371,
						y: 223,
						distance: 4,
						route: 'M'
					},
					'K': {
						type: 1,
						x: 378,
						y: 331,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'L': {
						type: 3,
						x: 395,
						y: 74,
						distance: 5,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) {
								if (CHDATA.event.maps[2].diff == 4) return 'P';
								let ids = ships.ids.concat(ships.escort.ids);
								if (checkHistorical(MAPDATA[41].historical.kurita,ids,[2,4,6])) return 'P';
							}
							return 'N';
						}
					},
					'M': {
						type: 1,
						x: 415,
						y: 286,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'O'
					},
					'N': {
						type: 1,
						x: 420,
						y: 165,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						route: 'P'
					},
					'O': {
						type: 3,
						x: 461,
						y: 253,
						distance: 6,
						route: 'S'
					},
					'P': {
						type: 3,
						x: 458,
						y: 80,
						distance: 6,
						route: 'Q'
					},
					'Q': {
						type: 3,
						x: 474,
						y: 117,
						distance: 6,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2 && (ships.speed >= 10 || CHDATA.event.maps[2].diff != 3)) {
								if (CHDATA.event.maps[2].diff == 4) return 'T';
								let ids = ships.ids.concat(ships.escort.ids);
								if (checkHistorical(MAPDATA[41].historical.kurita,ids,[4,6,8])) return 'T';
							}
							return 'R';
						}
					},
					'R': {
						type: 1,
						x: 499,
						y: 145,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'T'
					},
					'S': {
						type: 1,
						x: 512,
						y: 286,
						distance: 7,
						night2 :true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[2].debuff.S = 1;
						},
						route: 'X'
					},
					'T': {
						type: 1,
						x: 515,
						y: 105,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							CHDATA.event.maps[2].debuff.T = 1;
						},
						route: 'U'
					},
					'U': {
						type: 1,
						x: 556,
						y: 117,
						distance: 8,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'V'
					},
					'V': {
						type: 1,
						x: 595,
						y: 126,
						distance: 9,
						setupSpecial: function() {
							//lasts to W and Z
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								if (MAPDATA[41].historical.kurita.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.1}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'W'
					},
					'W': {
						type: 1,
						x: 604,
						y: 158,
						distance: 9,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'Z'
					},
					'X': {
						type: 1,
						x: 607,
						y: 282,
						distance: 8,
						night2 :true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[2].debuff.X = 1;
						},
						route: 'Y'
					},
					'Y': {
						type: 1,
						x: 634,
						y: 241,
						distance: 9,
						nightToDay2 :true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[41].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.1}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[2].debuff.Y = 1;
						},
						end: true
					},
					'Z': {
						type: 1,
						x: 644,
						y: 121,
						distance: 10,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Ozawa Carrier Task Force, Sortie All Out!<br>[1st Battle of Cape Engaño]',
				fleetTypes: [0,1,7],
				bgmMap: 109,
				bgmDN: 110,
				bgmNN: 110,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: 21,
				checkLock: [4,5,6,8],
				giveLock: 7,
				lbas: 2,
				currentBoss: 'U',
				maphp: {
					3: { 1: 2100 },
					2: { 1: 1750 },
					1: { 1: 1750 },
					4: { 1: 1750 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
					4: 350,
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
					chance: { 3: .2, 2: .2, 1: .2, 4: 0 },
					compName: 'AB',
					compDiff: {
						3: ['1','2','3'],
						2: ['4','5','6'],
						1: ['7','8'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (airState >= 1) CHDATA.event.maps[3].debuff.AB = 1;
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let debuffAB = debuff.AB || CHDATA.event.maps[3].diff == 4 || CHDATA.config.disableRaidReq;
							return debuff.H && debuff.S && debuffAB;
						}
					}
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 96,
						y: 84,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 481,
						y: 84,
						route: 'L'
					},
					'A': {
						type: 1,
						x: 102,
						y: 149,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[3].diff == 4) return 'D';
							let num = 0;
							for (let mid of MAPDATA[41].historical.troopTransport) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (num >= 3) return 'D';
							num = 0;
							for (let mid of MAPDATA[41].historical.shimaEscort) {
								if (isShipInList(ships.ids,mid)) num++;
							}
							if (num >= 3) return 'D';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 110,
						y: 215,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.CA + ships.aBB + ships.aCV) return 'C';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 117,
						y: 277,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 160,
						y: 206,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 197,
						y: 119,
						distance: 2,
						end: true
					},
					'F': {
						type: 1,
						x: 208,
						y: 191,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						routeC: function(ships) {
							if (ships.total <= 3) return 'G';
							if (ships.aBB) return 'E';
							return (Math.random() < .5)? 'G' : 'E';
						}
					},
					'G': {
						type: 1,
						x: 210,
						y: 228,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'H'
					},
					'H': {
						type: 3,
						x: 258,
						y: 210,
						distance: 1,
						dropoff: true,
						debuffGive: function() {
							CHDATA.event.maps[3].debuff.H = 1;
						},
						end: true
					},
					'I': {
						type: 1,
						x: 320,
						y: 232,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 377,
						y: 198,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'I';
							if (ships.CV + ships.CVB > 2) return 'I';
							if (ships.CV + ships.CVB + ships.aBB + ships.escort.aBB > 4) return 'I';
							let num = 0, ids = ships.ids.concat(ships.escort.ids);
							for (let mid of MAPDATA[41].historical.ozawa) {
								if (isShipInList(ids,mid)) num++;
							}
							if (CHDATA.event.maps[3].routes && CHDATA.event.maps[3].routes.indexOf(1) != -1) {
								let numReq = [3,3,8,0][CHDATA.event.maps[3].diff-1];
								if (num >= numReq) return 'N';
							}
							let numReq = [2,2,5,0][CHDATA.event.maps[3].diff-1];
							if (num >= numReq) return 'K';
							return 'I';
						}
					},
					'K': {
						type: 1,
						x: 388,
						y: 315,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'N'
					},
					'L': {
						type: 3,
						x: 426,
						y: 146,
						distance: 4,
						routeC: function(ships) {
							if (ships.CV + ships.CVB > 2) return 'M';
							if (CHDATA.event.maps[3].diff == 4) return 'J';
							let ids = ships.ids.concat(ships.escort.ids);
							if (checkHistorical(MAPDATA[41].historical.ozawa,ids,[3,4,5])) return 'J';
							return 'M';
						}
					},
					'M': {
						type: 1,
						x: 454,
						y: 188,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						route: 'J'
					},
					'N': {
						type: 1,
						x: 483,
						y: 304,
						distance: 6,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								if (MAPDATA[41].historical.ozawa.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'Q';
							let ids = ships.ids.concat(ships.escort.ids);
							if (checkHistorical(MAPDATA[41].historical.ozawa,ids,[4,6,8,0])) return 'O';
							return 'Q';
						}
					},
					'O': {
						type: 1,
						x: 498,
						y: 174,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeL: { 3: 'S', 0: 'R' }
					},
					'P': {
						type: 1,
						x: 523,
						y: 242,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							let ids = ships.ids.concat(ships.escort.ids);
							if (checkHistorical(MAPDATA[41].historical.ozawa,ids,[3,4,6,0])) return 'S';
							return 'O';
						}
					},
					'Q': {
						type: 1,
						x: 547,
						y: 315,
						distance: 7,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							this.showLoSPlane = 'P';
							let ids = ships.ids.concat(ships.escort.ids);
							let h = checkHistorical(MAPDATA[41].historical.ozawa,ids,[4,6,8,0]);
							if (h && ships.escort.aBB <= 0 && ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 4) this.showLoSPlane = 'S';
							return this.showLoSPlane;
						}
					},
					'R': {
						type: 3,
						x: 557,
						y: 121,
						distance: 6,
						end: true
					},
					'S': {
						type: 1,
						x: 565,
						y: 218,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							CHDATA.event.maps[3].debuff.S = 1;
						},
						route: 'U'
					},
					'T': {
						type: 3,
						x: 635,
						y: 324,
						distance: 8,
						end: true
					},
					'U': {
						type: 1,
						x: 638,
						y: 191,
						distance: 8,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Beyond the Sea of Samar...<br>[Battle of Leyte Gulf]',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 109,
				bgmDN: 111,
				bgmNN: 111,
				bgmDB: 113,
				bgmNB: 113,
				bossnode: 24,
				checkLock: [5,7,8],
				giveLock: [4,6],
				lockSpecial: true,
				lbas: 2,
				maphp: {
					3: { 1: 4400 },
					2: { 1: 4400 },
					1: { 1: 4400 },
					4: { 1: 4400 },
				},
				finalhp: {
					3: 650,
					2: 650,
					1: 650,
					4: 650,
				},
				reward: { ships: [544], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							if (CHDATA.event.maps[4].diff == 3) return debuff.NA;
							if (CHDATA.event.maps[4].diff == 2) return debuff.NA || debuff.NB;
							if (CHDATA.event.maps[4].diff == 1) return debuff.N;
							if (CHDATA.event.maps[4].diff == 1) return debuff.M;
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (CHDATA.event.maps[4].diff == 1 || CHDATA.event.maps[4].diff == 4) return;
					let lock = null, allSame = true;
					let num = (CHDATA.fleets.combined)? 2 : 1;
					for (let n=1; n<=num; n++) {
						for (let sid of CHDATA.fleets[n]) {
							if (sid && CHDATA.ships[sid].lock) {
								if (!lock) lock = CHDATA.ships[sid].lock;
								if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
							}
						}
					}
					if (!allSame) errors.push('No mixed locks.');
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) {
						for (let n=1; n<=2; n++) {
							for (let i=0; i<CHDATA.fleets[n].length; i++) {
								chGiveLock(n,i+1,4);
							}
						}
						return 'Start1';
					}
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,6);
					}
					return 'Start2';
				},	
				nodes: {
					'Start1': {
						type: 0,
						x: 169,
						y: 121,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 210,
						y: 325,
						route: 'C'
					},
					'A': {
						type: 1,
						x: 227,
						y: 172,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 297,
						y: 112,
						distance: 5,
						routeC: function(ships) {
							if (CHDATA.fleets.combined != 2) return 'D';
							let numSlow = 0, numHist = 0;
							for (let n=0; n<2; n++) {
								for (let ship of FLEETS1[n].ships) {
									if (SHIPDATA[ship.mid].SPD <= 5) numSlow++;
									if (MAPDATA[41].historical.kurita.indexOf(getBaseId(ship.mid)) != -1) numHist++;
								}
							}
							let numReq = [4,6,8,0][CHDATA.event.maps[4].diff-1];
							if (numSlow <= 3 && numHist >= numReq) return 'E';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 301,
						y: 305,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 302,
						y: 150,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 335,
						y: 125,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined != 2) return 'G';
							let numSlow = 0;
							for (let n=0; n<2; n++) {
								for (let ship of FLEETS1[n].ships) {
									if (SHIPDATA[ship.mid].SPD <= 5) numSlow++;
								}
							}
							if (numSlow <= 4) return 'I';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 348,
						y: 343,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 368,
						y: 99,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 388,
						y: 333,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10) return 'K';
							if (ships.SS + ships.SSV + ships.aCV) return 'J';
							if (ships.aBB > 2) return 'J';
							if (checkHistorical(MAPDATA[41].historical.nishimura,ships.ids,[3,4,6,0])) return 'K';
							return 'J';
						}
					},
					'I': {
						type: 1,
						x: 396,
						y: 130,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'L'
					},
					'J': {
						type: 1,
						x: 429,
						y: 334,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'K'
					},
					'K': {
						type: 3,
						x: 432,
						y: 295,
						distance: 1,
						route: 'M'
					},
					'L': {
						type: 3,
						x: 441,
						y: 93,
						distance: 5,
						route: 'O'
					},
					'M': {
						type: 1,
						x: 476,
						y: 292,
						distance: 3,
						night2: true,
						overrideCost: { fuel: .04, ammo: .08 },
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							CHDATA.event.maps[4].debuff.M = 1;
						},
						route: 'N'
					},
					'N': {
						type: 1,
						x: 481,
						y: 248,
						distance: 3,
						night2: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[41].historical.nishimura.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							CHDATA.event.maps[4].debuff.N = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.NA = 1;
							else if (CHDATA.temp.rank == 'B') CHDATA.event.maps[4].debuff.NB = 1;
						},
						end: true
					},
					'O': {
						type: 1,
						x: 489,
						y: 93,
						distance: 5,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
								if (MAPDATA[41].historical.kurita.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'Q'
					},
					'P': {
						type: 1,
						x: 515,
						y: 184,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'S'
					},
					'Q': {
						type: 1,
						x: 518,
						y: 123,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3','Medium 4'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined != 2) return 'T';
							if (CHDATA.event.maps[4].diff == 4) return 'S';
							let ids = ships.ids.concat(ships.escort.ids);
							if (checkHistorical(MAPDATA[41].historical.kurita,ids,[5,7,10])) return 'S';
							if (checkHistorical(MAPDATA[41].historical.kurita,ids,[3,5,9])) return 'P';
							return 'T';
						}
					},
					'R': {
						type: 1,
						x: 520,
						y: 230,
						distance: 4,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						route: 'X'
					},
					'S': {
						type: 3,
						x: 557,
						y: 205,
						distance: 5,
						routeS: ['R','V']
					},
					'T': {
						type: 1,
						x: 575,
						y: 138,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'P'
					},
					'U': {
						type: 3,
						x: 592,
						y: 77,
						distance: 7,
						end: true
					},
					'V': {
						type: 1,
						x: 610,
						y: 157,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeL: { 3: 'W', 0: 'U' }
					},
					'W': {
						type: 1,
						x: 648,
						y: 110,
						distance: 7,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						end: true
					},
					'X': {
						type: 1,
						x: 467,
						y: 210,
						distance: 4,
						hidden: 1,
						boss: true,
						friendFleet: ['desdiv19','crudiv4','ibs','nishimura1','eu'],
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Operation Ta-gō Kai',
				fleetTypes: [0,7],
				bgmMap: 112,
				bgmDN: 111,
				bgmNN: 111,
				bgmDB: 114,
				bgmNB: 114,
				bossnode: [20,12],
				checkLock: [4,5,6,7],
				giveLock: 8,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'L',
						maphp: {
							3: { 1: 800 },
							2: { 1: 600 },
							1: { 1: 500 },
							4: { 1: 500 },
						},
						transport: 'I',
					},
					2: {
						currentBoss: 'T',
						maphp: {
							3: { 1: 1400 },
							2: { 1: 1400 },
							1: { 1: 1400 },
							4: { 1: 1400 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
							4: 350,
						},
						transport: null,
					}
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
					chance: { 3: .25, 2: .25, 1: .25, 4: 0 },
					compName: 'AB',
					compDiff: {
						3: ['1','2','3'],
						2: ['4','5','6'],
						1: ['7','8','9'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (airState >= 1) CHDATA.event.maps[5].debuff.AB = 1;
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[5].part < 2) return false;
							if (!debuff) return false;
							let debuffAB = debuff.AB || CHDATA.config.disableRaidReq;
							if (CHDATA.event.maps[5].diff == 3) return debuff.DS && debuffAB;
							if (CHDATA.event.maps[5].diff == 2) return (debuff.DS||debuff.DP) && debuffAB;
							if (CHDATA.event.maps[5].diff == 1) return (debuff.DS||debuff.DP);
							return true;
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
				},
				startCheck: function(ships) {
					if (!CHDATA.event.maps[5].routes || CHDATA.event.maps[5].routes.indexOf(1) == -1) {
						return 'Start1';
					}
					if (ships.SS + ships.SSV + ships.AV) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 212,
						y: 114,
						routeC: function(ships) {
							if (checkHistorical(MAPDATA[41].historical.ormoc,ships.ids,[2,3,5,0])) return 'C';
							return 'B';
						}
					},
					'Start2': {
						type: 0,
						x: 461,
						y: 83,
						hidden: 1,
						route: 'O'
					},
					'A': {
						type: 1,
						x: 151,
						y: 268,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'B': {
						type: 1,
						x: 177,
						y: 208,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV <= 1) return 'D';
							return 'A';
						}
					},
					'C': {
						type: 3,
						x: 245,
						y: 198,
						distance: 4,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 272,
						y: 311,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[5].debuff.DS = 1;
							else if (FLEETS1[0].AS == 0) CHDATA.event.maps[5].debuff.DP = 1;
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 335,
						y: 314,
						distance: 3,
						route: 'G'
					},
					'F': {
						type: 1,
						x: 354,
						y: 287,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'H'
					},
					'G': {
						type: 3,
						x: 398,
						y: 337,
						distance: 3,
						dropoff: true,
						route: 'F'
					},
					'H': {
						type: 1,
						x: 390,
						y: 228,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'I'
					},
					'I': {
						type: 2,
						x: 420,
						y: 204,
						distance: 2,
						resource: 0,
						route: 'J'
					},
					'J': {
						type: 1,
						x: 395,
						y: 166,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeL: { 3: 'L', 0: 'K' }
					},
					'K': {
						type: 3,
						x: 414,
						y: 113,
						distance: 3,
						end: true
					},
					'L': {
						type: 1,
						x: 333,
						y: 145,
						distance: 2,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'M': {
						type: 1,
						x: 494,
						y: 249,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'P'
					},
					'N': {
						type: 1,
						x: 514,
						y: 180,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.DD >= 3) return 'P';
							if (checkHistorical(MAPDATA[41].historical.ormoc,ships.ids,[1,2,3,0])) return 'P';
							return 'M';
						}
					},
					'O': {
						type: 1,
						x: 533,
						y: 109,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.DD + ships.DE >= 4) return 'N';
							return 'R';
						}
					},
					'P': {
						type: 1,
						x: 564,
						y: 222,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeL: { 3: 'T', 0: 'Q' }
					},
					'Q': {
						type: 3,
						x: 564,
						y: 324,
						distance: 5,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 595,
						y: 132,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'N', 0: 'S' }
					},
					'S': {
						type: 3,
						x: 664,
						y: 157,
						distance: 7,
						hidden: 1,
						end: true
					},
					'T': {
						type: 1,
						x: 634,
						y: 279,
						distance: 6,
						hidden: 1,
						boss: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Pursuit! The 2nd Strike Unit',
				fleetTypes: [0,7],
				bgmMap: 112,
				bgmDN: 114,
				bgmNN: 114,
				bgmDB: 113,
				bgmNB: 113,
				bossnode: [21,22,23],
				checkLock: [5,6,7],
				giveLock: 8,
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'U',
						maphp: {
							3: { 1: 1050 },
							2: { 1: 1050 },
							1: { 1: 1050 },
							4: { 1: 1050 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
							4: 350,
						},
						enemyRaid: null,
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 2100 },
							2: { 1: 2100 },
							1: { 1: 2100 },
							4: { 1: 2100 },
						},
						finalhp: {
							3: 700,
							2: 700,
							1: 700,
							4: 700,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
							chance: { 3: .17, 2: .17, 1: .17, 4: 0 },
							compName: 'AB',
							compDiff: {
								3: ['1','2','3'],
								2: ['4','5','6'],
								1: ['7','8','9'],
							},
							debuffGive: function(airState,totalHPLost) {
								if (airState >= 1) CHDATA.event.maps[6].debuff.AB = CHDATA.event.maps[6].debuff.AB + 1 || 1;
							}
						},
					},
					3: {
						currentBoss: 'W',
						maphp: {
							3: { 1: 1560 },
							2: { 1: 1360 },
							1: { 1: 1170 },
							4: { 1: 1170 },
						},
						finalhp: {
							3: 390,
							2: 390,
							1: 370,
							4: 370,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
							chance: { 3: .17, 2: .17, 1: .17, 4: 0 },
							compName: 'AB',
							compDiff: {
								3: ['1','2','3'],
								2: ['4','5','6'],
								1: ['7','8','9'],
							},
							debuffGive: function(airState,totalHPLost) {
								if (airState >= 1) CHDATA.event.maps[6].debuff.AB = CHDATA.event.maps[6].debuff.AB + 1 || 1;
							}
						},
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '6_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[6].part < 2) return false;
							if (CHDATA.event.maps[6].diff == 4) return true;
							if (!debuff) return false;
							if (CHDATA.event.maps[6].diff == 3) return debuff.IS && debuff.KA;
							if (CHDATA.event.maps[6].diff == 2) return debuff.IS && debuff.K;
							if (CHDATA.event.maps[6].diff == 1) return debuff.I;
						}
					},
					2: {
						images: [{ name: '6_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[6].part < 3) return false;
							if (CHDATA.config.disableRaidReq) return true;
							if (CHDATA.event.maps[6].diff == 1) return true;
							if (CHDATA.event.maps[6].diff == 4) return true;
							if (!debuff) return false;
							if (CHDATA.event.maps[6].diff == 3) return debuff.AB >= 3;
							if (CHDATA.event.maps[6].diff == 2) return debuff.AB;
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.BBV) errors.push('No BB(V)');
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
					if (CHDATA.event.maps[4].diff == 1 || CHDATA.event.maps[4].diff == 4) return;
					let lock = null, allSame = true;
					for (let sid of CHDATA.fleets[1]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
						}
					}
					if (!allSame) errors.push('No mixed locks.');
				},
				startCheck: function(ships) {
					let allGreen = true;
					for (let sid of CHDATA.fleets[1]) {
						if (sid && CHDATA.ships[sid].lock != 4) { allGreen = false; break; }
					}
					if (allGreen) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 100,
						y: 107,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 340,
						y: 253,
						route: 'F'
					},
					'A': {
						type: 3,
						x: 166,
						y: 169,
						distance: 2,
						route: 'B'
					},
					'B': {
						type: 3,
						x: 228,
						y: 131,
						distance: 2,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 292,
						y: 171,
						distance: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'D'
					},
					'D': {
						type: 3,
						x: 363,
						y: 142,
						distance: 2,
						route: 'H'
					},
					'E': {
						type: 3,
						x: 393,
						y: 293,
						distance: 1,
						end: true
					},
					'F': {
						type: 3,
						x: 408,
						y: 228,
						distance: 1,
						route: 'J'
					},
					'G': {
						type: 1,
						x: 415,
						y: 182,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'O'
					},
					'H': {
						type: 1,
						x: 430,
						y: 110,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1'],
						},
						routeL: { 3: 'G', 0: 'M' }
					},
					'I': {
						type: 1,
						x: 424,
						y: 335,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						debuffGive: function() {
							CHDATA.event.maps[6].debuff.I = 1;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[6].debuff.IS = 1;
						},
						end: true
					},
					'J': {
						type: 1,
						x: 464,
						y: 241,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'N'
					},
					'K': {
						type: 1,
						x: 473,
						y: 145,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							CHDATA.event.maps[6].debuff.K = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[6].debuff.KA = 1;
						},
						end: true
					},
					'L': {
						type: 1,
						x: 495,
						y: 314,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[6].routes || CHDATA.event.maps[6].routes.indexOf(1) == -1) {
								this.showLoSPlane = 'I';
							} else {
								if (ships.DD >= 2) this.showLoSPlane = 'Q';
								else this.showLoSPlane = 'I';
							}
							return this.showLoSPlane;
						}
					},
					'M': {
						type: 3,
						x: 502,
						y: 76,
						distance: 4,
						end: true
					},
					'N': {
						type: 3,
						x: 521,
						y: 253,
						distance: 3,
						routeS: ['L','O']
					},
					'O': {
						type: 1,
						x: 531,
						y: 206,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'M';
							if (ships.DD < 2) return 'K';
							let allGreen = true;
							for (let sid of CHDATA.fleets[1]) {
								if (sid && CHDATA.ships[sid].lock != 4) { allGreen = false; break; }
							}
							if (allGreen) return 'K';
							if (!CHDATA.event.maps[6].routes || CHDATA.event.maps[6].routes.indexOf(2) == -1) {
								return 'P';
							}
							if (ships.AV) return 'P';
							return 'R';
						}
					},
					'P': {
						type: 1,
						x: 555,
						y: 168,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						route: 'U'
					},
					'Q': {
						type: 1,
						x: 577,
						y: 270,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						routeL: { 3: 'V', 0: 'T' }
					},
					'R': {
						type: 1,
						x: 580,
						y: 219,
						distance: 5,
						hidden: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeL: { 3: 'W', 0: 'T' }
					},
					'S': {
						type: 3,
						x: 628,
						y: 158,
						distance: 6,
						end: true
					},
					'T': {
						type: 3,
						x: 658,
						y: 286,
						distance: 6,
						hidden: 1,
						end: true
					},
					'U': {
						type: 1,
						x: 596,
						y: 97,
						distance: 6,
						boss: true,
						friendFleet: ['desdiv19','crudiv4B','russian1','russian2','nishimura2'],
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[41].historical.ormoc.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'V': {
						type: 1,
						x: 590,
						y: 328,
						distance: 6,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[41].historical.ormoc.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'W': {
						type: 1,
						x: 658,
						y: 208,
						distance: 6,
						hidden: 2,
						boss: true,
						friendFleet: ['desdiv19','crudiv4B','russian1','russian2','nishimura2'],
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								if (MAPDATA[41].historical.ormoc.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Victory on the Dawn\'s Horizon...',
				fleetTypes: [1,2,3],
				bgmMap: 112,
				bgmDN: 114,
				bgmNN: 114,
				bgmDB: 115,
				bgmNB: 115,
				bossnode: [22,24],
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 2400 },
							2: { 1: 2400 },
							1: { 1: 2400 },
							4: { 1: 2400 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
							4: 800,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
							chance: { 3: .2, 2: .2, 1: .2, 4: 0 },
							compName: 'AB',
							compDiff: {
								3: ['1','2','3'],
								2: ['4','5','6'],
								1: ['7','8','9'],
							},
							debuffGive: function(airState,totalHPLost) {
								if (airState >= 1) CHDATA.event.maps[7].debuff.AB = CHDATA.event.maps[7].debuff.AB + 1 || 1;
							}
						},
					},
					2: {
						currentBoss: 'X',
						maphp: {
							3: { 1: 4500 },
							2: { 1: 4500 },
							1: { 1: 4500 },
							4: { 1: 4500 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
							4: 800,
						},
						enemyRaid: null,
					}
				},
				reward: { ships: [549] },
				clearSpecial: function() {
					let offset = 2000;
					setTimeout(function() { SM.playNew('assets/voice/Musashi_ShoGo_2018_End1.mp3'); }, offset);
					setTimeout(function() { SM.playNew('assets/voice/Zuikaku_ShoGo_2018_End1.mp3'); }, 18000+offset);
					setTimeout(function() { SM.playNew('assets/voice/Shoukaku_ShoGo_2018_End1.mp3'); }, 26000+offset);
					setTimeout(function() { SM.playNew('assets/voice/Musashi_ShoGo_2018_End2.mp3'); }, 36000+offset);
					setTimeout(function() { SM.playNew('assets/voice/KanColle_ShoGo_2018_ED.mp3'); }, 50500+offset);
					setTimeout(function() { SM.playNew('assets/voice/Zuikaku_ShoGo_2018_End2.mp3'); }, 244500+offset);
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '7_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let num = (CHDATA.event.maps[7].diff == 1)? 1 : 2;
							let debuffAB = debuff.AB >= num || CHDATA.event.maps[7].diff == 4 || CHDATA.config.disableRaidReq;
							return debuff.Q1 && debuffAB;
						}
					},
					2: {
						images: [{ name: '7_2.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[7].part >= 2;
						}
					},
					3: {
						images: [{ name: '7_3.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							if (CHDATA.event.maps[7].diff == 3) return debuff.G && debuff.H && debuff.I && debuff.L;
							if (CHDATA.event.maps[7].diff == 2) return debuff.H && debuff.I && debuff.D;
							if (CHDATA.event.maps[7].diff == 1) return debuff.HA && debuff.D && debuff.LB;
							return debuff.D && debuff.LB;
						}
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					if (CHDATA.event.maps[7].diff == 1 || CHDATA.event.maps[7].diff == 4) return false;
					return debuff.Q2 && debuff.M && debuff.W;
				},
				startCheck: function() {
					if (CHDATA.event.maps[7].debuffed) {
						for (let ship of FLEETS1[0].ships.concat(FLEETS1[1].ships)) {
							let baseMid = getBaseId(ship.mid);
							if ([111,116,143].indexOf(baseMid) != -1) {
								ship.bonusSpecial = [{mod:1.8}];
								continue;
							}
						}
					}
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 226,
						y: 84,
						route: 'B'
					},
					'Start2': {
						type: 0,
						x: 261,
						y: 322,
						routeC: function(ships) {
							if (ships.speed >= 10) return 'E';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 261,
						y: 245,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1'],
						},
						route: 'E'
					},
					'B': {
						type: 3,
						x: 273,
						y: 147,
						distance: 2,
						routeC: function(ships) {
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(3) == -1) {
								this.showNoCompass = true;
								return 'C';
							}
							this.showNoCompass = false;
							if (ships.speed >= 15) return 'D';
							if (ships.speed >= 10 && ships.aBB + ships.escort.aBB <= 2) return 'D';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 320,
						y: 212,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (ships.speed >= 15) return 'H';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 359,
						y: 150,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.D = 1;
						},
						routeC: function(ships) {
							if (ships.speed >= 15) return 'M';
							if (ships.speed >= 10) return 'I';
							return 'G';
						}
					},
					'E': {
						type: 3,
						x: 364,
						y: 248,
						distance: 4,
						routeC: function(ships) {
							if (ships.speed >= 15) return 'K';
							return 'F';
						}
					},
					'F': {
						type: 1,
						x: 392,
						y: 328,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 401,
						y: 84,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2','Casual 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.G = 1;
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 414,
						y: 188,
						distance: 4,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.H = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.HA = 1;
						},
						route: 'M'
					},
					'I': {
						type: 1,
						x: 433,
						y: 121,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[7].debuff.I = 1;
						},
						route: 'M'
					},
					'J': {
						type: 3,
						x: 454,
						y: 328,
						distance: 7,
						routeS: ['K','N']
					},
					'K': {
						type: 1,
						x: 462,
						y: 278,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(3) == -1) {
								this.showNoCompass = true;
								return 'L';
							}
							this.showNoCompass = false;
							if (ships.speed >= 10) return 'H';
							return 'L';
						}
					},
					'L': {
						type: 1,
						x: 472,
						y: 217,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.L = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A' || CHDATA.temp.rank == 'B') CHDATA.event.maps[7].debuff.LB = 1;
						},
						routeC: function(ships) {
							this.showLoSPlane = 'H';
							if (ships.speed <= 5 && ships.aBB + ships.escort.aBB >= 5) this.showLoSPlane = 'Q';
							return this.showLoSPlane;
						}
					},
					'M': {
						type: 1,
						x: 474,
						y: 170,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(3) == -1) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.M = 1;
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(2) == -1) {
								this.showLoSPlane = 'Q';
							} else {
								this.showLoSPlane = 'W';
								if (ships.AV + ships.escort.AV + ships.AS + ships.escort.AS) this.showLoSPlane = 'Q';
							}
							return this.showLoSPlane;
						}
					},
					'N': {
						type: 1,
						x: 515,
						y: 328,
						distance: 8,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						routeC: function(ships) {
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(1) == -1) {
								this.showNoCompass = true;
								this.showLoSPlane = null;
								return 'R';
							}
							this.showNoCompass = false;
							this.showLoSPlane = 'S';
							if (ships.speed >= 10 && ships.aBB + ships.escort.aBB <= 4) this.showLoSPlane = 'T';
							return this.showLoSPlane;
						}
					},
					'O': {
						type: 3,
						x: 507,
						y: 77,
						distance: 8,
						end: true
					},
					'P': {
						type: 3,
						x: 531,
						y: 244,
						distance: 7,
						end: true
					},
					'Q': {
						type: 1,
						x: 574,
						y: 151,
						distance: 9,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.Q1 = 1;
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(3) == -1) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[7].debuff.Q2 = 1;
						},
						end: true
					},
					'R': {
						type: 3,
						x: 581,
						y: 328,
						distance: 9,
						end: true
					},
					'S': {
						type: 1,
						x: 502,
						y: 288,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'T'
					},
					'T': {
						type: 1,
						x: 561,
						y: 288,
						distance: 9,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'U'
					},
					'U': {
						type: 1,
						x: 605,
						y: 252,
						distance: 10,
						hidden: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 2'],
						},
						route: 'V'
					},
					'V': {
						type: 1,
						x: 655,
						y: 212,
						distance: 11,
						hidden: 1,
						boss: true,
						friendFleet: ['desdiv19','engano3','engano4','engano5','engano6'],
						friendFleetS: [],
						setupSpecial: function() {
							let debuffed = MAPDATA[41].maps[7].debuffCheck(CHDATA.event.maps[7].debuff);
							let bonus = (debuffed)? [{mod:1.6}] : [{mod:1.15}];
							let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
							for (let ship of ships) {
								let baseMid = getBaseId(ship.mid);
								if (debuffed && baseMid == 110) {
									ship.bonusSpecial = [{mod:2.4}];
									continue;
								}
								if (debuffed && [111,116,143].indexOf(baseMid) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
									continue;
								}
								for (let key in MAPDATA[41].historical) {
									if (MAPDATA[41].historical[key].indexOf(baseMid) != -1) {
										ship.bonusSpecial = bonus;
									}
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
					'W': {
						type: 1,
						x: 516,
						y: 133,
						distance: 7,
						hidden: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
							4: ['Casual 1','Casual 1','Casual 2'],
						},
						debuffGive: function() {
							if (!CHDATA.event.maps[7].routes || CHDATA.event.maps[7].routes.indexOf(3) == -1) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.W = 1;
						},
						route: 'X'
					},
					'X': {
						type: 1,
						x: 564,
						y: 91,
						distance: 9,
						hidden: 2,
						boss: true,
						friendFleet: ['desdiv19B','crudiv4B','ibs2','nishimura2','western1','western2','western3','engano1','engano2','engano4'],
						friendFleetS: ['desdiv19B','crudiv4B','ibs2','nishimura2','western1','western2-broken','western3'],
						setupSpecial: function() {
							let debuffed = MAPDATA[41].maps[7].debuffCheck(CHDATA.event.maps[7].debuff);
							let bonus = (debuffed)? [{mod:1.6}] : [{mod:1.15}];
							let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
							for (let ship of ships) {
								let baseMid = getBaseId(ship.mid);
								if (debuffed && baseMid == 110) {
									ship.bonusSpecial = [{mod:2.4}];
									continue;
								}
								if (debuffed && [111,116,143].indexOf(baseMid) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
									continue;
								}
								for (let key in MAPDATA[41].historical) {
									if (MAPDATA[41].historical[key].indexOf(baseMid) != -1) {
										ship.bonusSpecial = bonus;
									}
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					}
				}
			}
		},
	},
	42: {
		name: 'Showdown at Operation MU, Battle of Ishijima Coast',
		date: '2019-03-26',
		diffMode: 2,
		allowDiffs: [1,2,3],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 25, vanguardEvDD2: 40, vanguardEvOther1: 15, vanguardEvOther2: 25 },
		newResupplyCosts: true,
		bannerImg: 'https://cdn.discordapp.com/attachments/475519844612046858/560140209065295872/banner1.png',
		bannerImgAlt: 'https://cdn.discordapp.com/attachments/475519844612046858/560140202597679104/banner2.png',
		transportCalc: transportCalcStandard,
		historical: {
			saiki_mutsuki: [1,2,6,7,28,29,30,31,481],
			saiki_cl: [99,100,21,53,113],
			saiki_dd: [42,44,405,425,424,452,135,410,527],
			saiki_kmkz: [471,472,473,474],
			oka_renagawa_25: [532],
			oka_renagawa_2_15: [137,138,139,140,479,480],
			oka_renagawa_3_15: [137,138,139,140,479,480,20],
			oka_renagawa_3_14: [98],
			oka_renagawa_12: [102,103,85,79,60,120,71,72,54,56,135,44,45,50,421,423],
			miyauchi_2: [42,458,410],
			miyauchi_18: [185],
			miyauchi_15: [55,43,485,528],
			miyauchi_115: [110,111,68,69,124,125,422,44,135],
		},
		friendFleet: {
			'desdiv31': { voice: [], ships: [
					{ "mid": 373, "LVL": 108, "FP": 58, "TP": 79, "AA": 63, "AR": 50, "equips": [ 266, 280, 88 ] },
					{ "mid": 688, "LVL": 74, "FP": 56, "TP": 80, "AA": 76, "AR": 49, "equips": [ 3, 122, 106 ] },			   
					{ "mid": 680, "LVL": 60, "FP": 56, "TP": 74, "AA": 62, "AR": 49, "equips": [ 3, 3, 28 ] },
					{ "mid": 497, "LVL": 150, "FP": 76, "TP": 87, "AA": 82, "AR": 52, "equips": [ 266, 296, 240 ] } 
				]},
			'yuugumo1': { voice: [], ships: [
					{ "mid": 686, "LVL": 99, "FP": 56, "TP": 80, "AA": 76, "AR": 49, "equips": [ 122, 122, 74 ] },
					{ "mid": 359, "LVL": 99, "FP": 53, "TP": 92, "AA": 53, "AR": 51, "equips": [ 267, 286, 101 ] },
					{ "mid": 564, "LVL": 99, "FP": 72, "TP": 100, "AA": 73, "AR": 56, "equips": [ 267, 286, 267 ] }
				]},
			'gambier': { voice: [], ships: [
					{ "mid": 396, "LVL": 99, "FP": 37, "TP": 9, "AA": 59, "AR": 40, "equips": [ 257, 255, 259 ] },
					{ "mid": 681, "LVL": 99, "FP": 54, "TP": 78, "AA": 67, "AR": 45, "equips": [ 313, 314, 101 ] },
					{ "mid": 689, "LVL": 99, "FP": 63, "TP": 72, "AA": 119, "AR": 55, "equips": [ 308, 308, 307 ] }
				]},
			'shinyo': { voice: [], ships: [
					{ "mid": 536, "LVL": 99, "FP": 42, "TP": 9, "AA": 76, "AR": 57, "equips": [ 257, 255, 154, 259 ] },
					{ "mid": 383, "LVL": 99, "FP": 43, "TP": 0, "AA": 58, "AR": 33, "equips": [ 63, 63, 29 ] },		   
					{ "mid": 385, "LVL": 99, "FP": 45, "TP": 0, "AA": 58, "AR": 33, "equips": [ 63, 63, 29 ] },		   
					{ "mid": 386, "LVL": 99, "FP": 42, "TP": 0, "AA": 57, "AR": 34, "equips": [ 63, 63, 29 ] }
				]},
			'tengo': { voice: [307, 141], ships: [
					{ "mid": 136, "LVL": 99, "FP": 238, "TP": 0, "AA": 119, "AR": 118, "equips": [ 128, 128, 128, 116 ] },
					{ "mid": 307, "LVL": 99, "FP": 88, "TP": 79, "AA": 82, "AR": 69, "equips": [ 50, 50, 102 ] }, 
					{ "mid": 558, "LVL": 99, "FP": 64, "TP": 81, "AA": 97, "AR": 56, "equips": [ 266, 266, 101 ] },			   
					{ "mid": 557, "LVL": 99, "FP": 66, "TP": 80, "AA": 94, "AR": 55, "equips": [ 266, 266, 29 ] }
				]},
			'shiratsuyu': { voice: [], ships: [
					{ "mid": 497, "LVL": 92, "FP": 75, "TP": 87, "AA": 82, "AR": 52, "equips": [266, 296, 74] },
					{ "mid": 145, "LVL": 90, "FP": 59, "TP": 119, "AA": 72, "AR": 53, "equips": [266, 88, 286] },
					{ "mid": 498, "LVL": 87, "FP": 74, "TP": 88, "AA": 74, "AR": 53, "equips": [266, 266, 101] },
					{ "mid": 144, "LVL": 93, "FP": 79, "TP": 93, "AA": 63, "AR": 54, "equips": [266, 266, 29] }
				]},
			'euro': { voice: [], ships: [
					{ "mid": 579, "LVL": 86, "FP": 72, "TP": 70, "AA": 110, "AR": 63, "equips": [ 303, 303, 102, 74 ] }, 
					{ "mid": 347, "LVL": 79, "FP": 54, "TP": 72, "AA": 63, "AR": 50, "equips": [ 147, 147, 101 ] },
					{ "mid": 580, "LVL": 83, "FP": 54, "TP": 84, "AA": 64, "AR": 50, "equips": [ 129, 58, 29 ] },  
					{ "mid": 394, "LVL": 99, "FP": 57, "TP": 106, "AA": 73, "AR": 52, "equips": [ 314, 314, 280 ] }
				]},
			'yuugumo2': { voice: [], ships: [
					{ "mid": 564, "LVL": 83, "FP": 72, "TP": 89, "AA": 73, "AR": 55, "equips": [ 267, 267, 74 ] },
					{ "mid": 542, "LVL": 88, "FP": 73, "TP": 87, "AA": 72, "AR": 55, "equips": [ 267, 267, 101 ] },
					{ "mid": 563, "LVL": 91, "FP": 68, "TP": 102, "AA": 68, "AR": 54, "equips": [ 267, 58, 240 ] }
				]},
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Sasebo-Miyauchi Transport Operation',
				fleetTypes: [0,3],
				bgmMap: 103,
				bgmDN: 104,
				bgmNN: 104,
				bgmDB: 111,
				bgmNB: 111,
				bossnode: [11, 16],
				checkLock: [10, 11],
				giveLock: 9,
				overrideStats: function(diff) {
					return 	{
						1659: { AR: 110 },
						1660: { AR: diff == 2 ? 130 : 150 },
						1662: { AR: 135 },
						1663: { AR: 140 },
						1664: { AR: 160 },
					}
				},
				parts: {
					1: {
						currentBoss: 'K',
						transport: 'I',
						maphp: {
							3: { 1: 500 },
							2: { 1: 400 },
							1: { 1: 300 }
						},
						finalhp: null,
					},
					2: {
						currentBoss: 'P',
						transport: null,
						maphp: {
							3: { 1: 1400 },
							2: { 1: 1400 },
							1: { 1: 1400 },
						},
						finalhp: {
							3: 390,
							2: 390,
							1: 390
						}
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[1].part == 2;
						}
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (debuff && debuff.K) return true;
							if (CHDATA.event.maps[1].diff == 1 && CHDATA.event.maps[1].part == 2) return true;
							return false;
						}
					}
				},
				additionalCheck: function(ships,errors) {
					if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 60,
						y: 94,
						routeC: function() {
							if (CHDATA.fleets.combined == 3) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 132,
						y: 229,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2','Medium 1','Medium 2','Medium 1'],
							1: ['Easy 1', 'Easy 2','Easy 1','Easy 1', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2'],
						},
						subonly: true,
						route: 'D'
					},
					'B': {
						type: 1,
						x: 191,
						y: 121,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 1', 'Hard 1', 'Hard 1'],
							2: ['Medium 1', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 1', 'Medium 1', 'Medium 1', 'Medium 1', 'Medium 1', 'Medium 1'],
							1: ['Easy 1', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 1'],
						},
						routeC: function(ships) {
							let count = 0;
							const ids = ships.ids.concat(ships.escort.ids);
							if (ids.includes(560)) count++;
							const baseCVE = [544, 521, 534];
							for (let mid in baseCVE){
								if (isShipInList(ids, baseCVE[mid])) count++;
							}
							if (count >= 3) return 'C';
							return 'G';
						}
					},
					'C': {
						type: 1,
						x: 222,
						y: 35,
						compDiff: {
							3: ['Hard 1', 'Hard 2','Hard 1','Hard 1','Hard 1'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						route: 'G'
					},
					'D': {
						type: 3,
						x: 247,
						y: 305,
						routeC: function(ships) {
							if ((ships.aBB + ships.CVL > 3) || ships.DD < 2) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 371,
						y: 318,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						raid: true,
						route: 'L',
					},
					'F': {
						type: 3,
						x: 215,
						y: 398,
						end: true
					},
					'G': {
						type: 1,
						x: 298,
						y: 122,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						raid: true,
						route: 'H'
					},
					'H': {
						type: 1,
						x: 414,
						y: 101,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						route: 'I'
					},
					'I': {
						type: 2,
						x: 476,
						y: 188,
						resource: 0,
						route: 'J',
					},
					'J': {
						type: 1,
						x: 552,
						y: 123,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						routeL: {
							16: 'K',
							14: 'M'
						}
					},
					'K': {
						type: 1,
						x: 619,
						y: 74,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						boss: true,
						end: true,
						debuffGive: function() {
							if (CHDATA.event.maps[1].part == 2 && CHDATA.fleets.combined != 3 && ['A','S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[1].debuff.K = 1;
						},
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								if (!FLEETS1[i]) continue;
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[42].historical.saiki_mutsuki.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.8}];
									}
									if (MAPDATA[42].historical.saiki_cl.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.5}];
									}
									if (MAPDATA[42].historical.saiki_dd.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.4}];
									}
									if (MAPDATA[42].historical.saiki_kmkz.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
					},
					'L': {
						type: 3,
						x: 488,
						y: 293,
						routeC: function(ships) {
							if (CHDATA.event.maps[1].part == 1) {
								this.showNoCompass = true;
								return 'N';
							}
							this.showNoCompass = false;
							if (CHDATA.event.maps[1].debuff.K && (ships.aBB + ships.CVL < 3) && ships.CL > 0) return 'O';
							let count = 0;
							const mutsukiIds = [1, 2, 28, 29];
							mutsukiIds.forEach(id => {
								if (isShipInList(ships.ids, id)) count++;
							});
							if (count >= 2) return 'I';
							return 'N';
						}
					},
					'M': {
						type: 3,
						x: 488,
						y: 42,
						end: true
					},
					'N': {
						type: 1,
						x: 588,
						y: 230,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						routeC: function(ships) {
							
							if (ships.CL == 0) return 'I';
							return 'O';
						}
					},
					'O': {
						type: 1,
						x: 589,
						y: 354,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						routeC: function() {
							this.showNoCompass = true;
							if (CHDATA.event.maps[1].part == 1) {
								return 'O*';
							}
							return 'P';
						}
					},
					'O*': {
						type: 3,
						x: 589,
						y: 354,
						end: true,
						hidden: 4
					},
					'P': {
						type: 1,
						x: 672,
						y: 403,
						hidden: 1,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						boss: true,
						end: true,
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								if (!FLEETS1[i]) continue;
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[42].historical.saiki_mutsuki.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.8}];
									}
									if (MAPDATA[42].historical.saiki_cl.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.5}];
									}
									if (MAPDATA[42].historical.saiki_dd.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.4}];
									}
									if (MAPDATA[42].historical.saiki_kmkz.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Oka Renagawa Fleet, Commence Operation!',
				fleetTypes: [0,2],
				bgmMap: 106,
				bgmDN: 105,
				bgmNN: 105,
				bgmDB: 114,
				bgmNB: 114,
				bossnode: [8,18],
				checkLock: [9,11],
				giveLock: 10,
				overrideStats: function(diff) {
					const isLD = CHDATA.event.maps[2].hp <= MAPDATA[42].maps[2].finalhp[diff] && CHDATA.event.maps[2].hp > 0 ? 1 : 0;
					const values = {
						1: [110, 150],
						2: [130, 170],
						3: [160, 190]
					}
					return 	{
						1773: { AR: values[diff][isLD] },
					}
				},
				parts: {
					1: {
						currentBoss: 'H',
						transport: null,
						maphp: {
							3: { 1: 1450 },
							2: { 1: 1450 },
							1: { 1: 1450 }
						},
						finalhp: {
							3: 390,
							2: 390,
							1: 390
						},
					},
					2: {
						currentBoss: 'R',
						transport: null,
						maphp: {
							3: { 1: 2400 },
							2: { 1: 2400 },
							1: { 1: 2400 },
						},
						finalhp: {
							3: 655,
							2: 655,
							1: 655
						}
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlock: function() {
							if (CHDATA.event.maps[2].part == 1) return false;
							return true;
						}
					},
					2: {
						images: [{ name: '2_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (debuff && debuff.M && debuff.H) return true;
							if (CHDATA.event.maps[2].diff == 1 && CHDATA.event.maps[2].part == 2) return true;
							return false;
							
						}
					},
				},
				nodes: {
					'Start': {
						type: 0,
						x: 202,
						y: 139,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 109,
						y: 311,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							this.showNoCompass = true;
							if (CHDATA.event.maps[2].part == 1) return 'A*';
							this.showNoCompass = false;
							if (checkFlagshipSurfaceRadar() && ships.speed >= 10 && ships.escort && ships.escort.DD > 3 && (ships.CA + ships.CAV > 3)) return 'N';
							return 'L';
						}
					},
					'A*': {
						type: 3,
						x: 109,
						y: 311,
						end: true,
						hidden: 4
					},
					'B': {
						type: 3,
						x: 178,
						y: 243,
						routeS: ['A','C','D']
					},
					'C': {
						type: 1,
						x: 283,
						y: 165,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 364,
						y: 242,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							const isCombined = !!ships.escort;
							if (ships.CLT + (isCombined ? ships.escort.CLT : 0) > 0 || ships.CL + (isCombined ? ships.escort.CL : 0) < 2 || ships.aCV > 0 || !checkFlagshipSurfaceRadar()) return 'E';
							return 'G';
						}
					},
					'E': {
						type: 1,
						x: 405,
						y: 161,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 492,
						y: 202,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 488,
						y: 277,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						raid: true,
						route: 'I',
					},
					'H': {
						type: 1,
						x: 506,
						y: 105,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true,
						boss: true,
						debuffGive: function() {
							if (CHDATA.event.maps[2].part == 2 && CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.H = 1;
						},
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								if (!FLEETS1[i]) continue;
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:2.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_2_15.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
					},
					'I': {
						type: 1,
						x: 611,
						y: 211,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 601,
						y: 139,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeL: { 20: 'H', 18: 'K' }
					},
					'K': {
						type: 3,
						x: 688,
						y: 94,
						end: true,
					},
					'L': {
						type: 1,
						x: 51,
						y: 261,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						route: 'M'
					},
					'M': {
						type: 1,
						x: 52,
						y: 359,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						route: 'N',
						raid: true,
						debuffGive: function() {
							if (FLEETS1[0].AS >= (CHDATA.event.maps[2].diff == 2 ? 1 : 2)) CHDATA.event.maps[2].debuff.M = 1;
						},
					},
					'N': {
						type: 1,
						x: 126,
						y: 405,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						hidden: 1,
						routeC: function(ships) {
							this.showNoCompass = true;
							if (CHDATA.event.maps[2].routes && CHDATA.event.maps[2].routes.indexOf(2) > -1) {
								this.showNoCompass = false;
								if (ships.aCV < 1) return 'P';
							}
							return 'O';
						}
					},
					'O': {
						type: 1,
						x: 224,
						y: 328,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						route: 'P'
					},
					'P': {
						type: 1,
						x: 302,
						y: 359,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV <= 2) return 'Q';
							this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 18: 'R', 17.99: 'Q' })
							return this.showLoSPlane;
						}
					},
					'Q': {
						type: 3,
						x: 377,
						y: 319,
						end: true
					},
					'R': {
						type: 1,
						x: 380,
						y: 406,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true,
						boss: true,
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								if (!FLEETS1[i]) continue;
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:2.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_2_15.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
					},

				}
			},
			3: {
				name: 'E-3',
				nameT: 'Beyond Near Okinawa Sea...',
				fleetTypes: [0,1,2],
				bgmMap: 106,
				bgmDN: 105,
				bgmNN: 105,
				bgmDB: 114,
				bgmNB: 114,
				bossnode: [11,22],
				checkLock: [9,11],
				giveLock: 10,
				lbas: 2,
				lbasSortie: 1,
				overrideStats: function(diff) {
					const values = {
						1: 150,
						2: 160,
						3: 170
					},
					othervalues = {
						1: 165,
						2: 180,
						3: 190
					};
					return 	{
						1599: { AR: values[diff] },
						1600: { AR: othervalues[diff] }
					}
				},
				parts: {
					1: {
						currentBoss: 'K',
						transport: null,
						maphp: {
							3: { 1: 1350 },
							2: { 1: 1350 },
							1: { 1: 1350 },
						},
						finalhp: {
							3: 270,
							2: 270,
							1: 270,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1 },
							chance: { 3: .25, 2: .25, 1: .25 },
							compName: 'AB',
							compDiff: {
								3: ['Hard 1','Hard 2','Hard 3'],
								2: ['Medium 1','Medium 2','Medium 3'],
								1: ['Easy 1','Easy 2']
							},
						}
					},
					2: {
						currentBoss: 'V',
						transport: null,
						maphp: {
							3: { 1: 1950 },
							2: { 1: 1950 },
							1: { 1: 1950 },
						},
						finalhp: {
							3: 390,
							2: 390,
							1: 390,
						},
						enemyRaid: {
							maxNum: { 3: 1, 2: 1, 1: 1 },
							chance: { 3: .25, 2: .25, 1: .25 },
							compName: 'AB',
							compDiff: {
								3: ['Hard 1','Hard 2','Hard 3'],
								2: ['Medium 1','Medium 2','Medium 3'],
								1: ['Easy 1','Easy 2']
							},
						}
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[3].part == 2;
						}
					},
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 56,
						y: 268,
						routeC: function(ships) {
							if (ships.aBB + ships.aCV > 4) return 'A';
							return 'B';
						}
					},
					'Start2': {
						type: 0,
						x: 190,
						y: 114,
						route: 'C'
					},
					'A': {
						type: 1,
						x: 114,
						y: 340,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 143,
						y: 280,
						distance: 4,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 240,
						y: 185,
						distance: 3,
						routeS: ['G','I']
					},
					'D': {
						type: 1,
						x: 240,
						y: 303,
						distance: 5,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined || (ships.aBB + ships.aCV > 3) || ships.DD < 2) return 'E';
							return 'H';
						}
					},
					'E': {
						type: 1,
						x: 284,
						y: 370,
						distance: 6,
						compDiff: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 2','Medium 3'],
							1: ['Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1 || (CHDATA.fleets.combined && (ships.aBB + ships.aCV > 3) && ships.DD < 3) || ships.DD == 0) return 'F';
							return 'H';
						}
					},
					'F': {
						type: 3,
						x: 202,
						y: 391,
						distance: 6,
						end: true,
					},
					'G': {
						type: 1,
						x: 307,
						y: 245,
						distance: 4,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'D'
					},
					'H': {
						type: 1,
						x: 365,
						y: 317,
						distance: 6,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeL: { 38: 'K', 37.99: 'L' },
						raid: true
					},
					'I': {
						type: 1,
						x: 327,
						y: 148,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function(ships) {
							this.showNoCompass = true;
							if (CHDATA.event.maps[3].part == 2) {
								this.showNoCompass = false;
								return CHDATA.fleets.combined == 1 ? 'N' :'M';
							}
							return 'J';
						}
					},
					'J': {
						type: 3,
						x: 317,
						y: 51,
						distance: 3,
						end: true
					},
					'K': {
						type: 1,
						x: 416,
						y: 394,
						distance: 7,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true,
						boss: true,
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								if (!FLEETS1[i]) continue;
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:2.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_3_15.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_3_14.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.4}];
									}
									if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
					},
					'L': {
						type: 3,
						x: 482,
						y: 362,
						distance: 7,
						end: true
					},
					'M': {
						type: 1,
						x: 406,
						y: 79,
						hidden: 1,
						distance: 4,
						route: 'P',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
					},
					'N': {
						type: 1,
						x: 412,
						y: 184,
						hidden: 1,
						distance: 4,
						compDiff: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 2','Medium 3'],
							1: ['Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							const historicals = [421,423,532,49], ids = ships.ids.concat(ships.escort.ids);
							if ((ships.CA + ships.CAV > 2) && historicals.some(mid => isShipInList(ids, mid))) return 'Q';
							return Math.random() > 0.3 ? 'O' : 'Q';
						}
					},
					'O': {
						type: 1,
						x: 481,
						y: 245,
						distance: 6,
						hidden: 1,
						route: 'S',
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
					},
					'P': {
						type: 1,
						x: 518,
						y: 78,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 2','Hard 3'],
							2: ['Medium 2','Medium 3'],
							1: ['Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							const historicals = [421,423,532,49], ids = ships.ids.concat(ships.escort.ids);
							if (checkFlagshipSurfaceRadar() && historicals.some(mid => isShipInList(ids, mid))) return 'R';
							return 'Q';
						}
					},
					'Q': {
						type: 1,
						x: 503,
						y: 167,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'S'
					},
					'R': {
						type: 1,
						x: 616,
						y: 157,
						distance: 6,
						hidden: 1,
						raid: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeL: { 40: 'V', 39.99: 'T' }
					},
					'S': {
						type: 1,
						x: 578,
						y: 261,
						distance: 7,
						hidden: 1,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function(ships) {
							if (checkFlagshipSurfaceRadar()) return 'V';
							this.showLoSPlane =  checkELoS33(getELoS33(1,1),{ 30: 'V', 29.99: 'U' });
							return this.showLoSPlane;
						}
					},
					'T': {
						type: 3,
						x: 649,
						y: 73,
						distance: 7,
						hidden: 1,
						end: true
					},
					'U': {
						type: 3,
						x: 609,
						y: 345,
						hidden: 1,
						distance: 8,
						end: true
					},
					'V': {
						type: 1,
						x: 681,
						y: 232,
						hidden: 1,
						boss: true,
						end: true,
						distance: 8,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						setupSpecial: function() {
							for (let i=0; i<2; i++) {
								if (!FLEETS1[i]) continue;
								for (let ship of FLEETS1[i].ships) {
									if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:2.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_3_15.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.5}];
									}
									if (MAPDATA[42].historical.oka_renagawa_3_14.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.4}];
									}
									if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
										ship.bonusSpecial = [{mod:1.2}];
									}
								}
							}
						},
					},

				}
			},
			4: {
				name: 'E-4',
				nameT: 'Sortie! Miyauchi 1st Task Force',
				fleetTypes: [0,1,2,7],
				bgmMap: 112,
				bgmDN: 62,
				bgmNN: 62,
				bgmDB: 115,
				bgmNB: 115,
				bossnode: [11,22,'Z3'],
				lockSpecial: true,
				checkLock: [9],
				lbas: 3,
				lbasSortie: 2,
				parts: {
					1: {
						currentBoss: 'K',
						maphp: {
							3: { 1: 2600 },
							2: { 1: 2600 },
							1: { 1: 2600 },
						},
						finalhp: {
							3: 800,
							2: 800,
							1: 800,
						}
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 1000 },
							2: { 1: 1000 },
							1: { 1: 1000 },
						},
						finalhp: {
							3: 655,
							2: 655,
							1: 655,
						}
					},
					3: {
						currentBoss: 'Z3',
						maphp: {
							3: { 1: 3750 },
							2: { 1: 3000 },
							1: { 1: 2500 },
						},
						finalhp: {
							3: 750,
							2: 600,
							1: 500,
						}
					}
				},
				enemyRaid: {
					maxNum: { 3: 2, 2: 2, 1: 1 },
					chance: { 3: .15, 2: .15, 1: .15 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (CHDATA.event.maps[4].part > 1) {
							if (totalHPLost <= 0) CHDATA.event.maps[4].debuff.AB = 1 + (CHDATA.event.maps[4].debuff.AB || 0);
						}
					}
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return !!debuff.Z3;
				},
				overrideStats: function() {
					return 	{
						1846: { AR: 180, HP: 500 },
						1847: { AR: 200, HP: 600 },
						1848: { AR: 230, HP: 750 },
						1849: { AR: 300, HP: 500 },
						1850: { AR: 340, HP: 600 },
						1851: { AR: 410, HP: 750 },
					}
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[4].part > 1;
						}
					},
					2: {
						images: [{ name: '4_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let debuffK =  CHDATA.event.maps[4].diff == 1 ? true : debuff.K;
							let debuffAS = debuff.P && (CHDATA.event.maps[4].diff > 1 ? debuff.F && debuff.P : true) && (CHDATA.event.maps[4].diff == 3 ? debuff.S: true);
							let debuffAB = debuff.AB >= (CHDATA.event.maps[4].diff == 3 ? 2 : 1) || CHDATA.event.maps[4].diff == 1 || CHDATA.config.disableRaidReq;
							return debuffAS && debuffAB && debuffK;
						}
					},
					3: {
						images: [{ name: '4_3.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[4].part == 3;
						}
					}
				},
				additionalChecks: function(ships,errors) {
					if (!CHDATA.fleets.combined && !(CHDATA.event.maps[4].routes && (CHDATA.event.maps[4].routes.indexOf(2) > -1))) errors.push('You cannot sortie a single fleet/String Force at this time.');
					if (CHDATA.event.maps[4].diff == 1) return;
					let lock = null, allSame = true;
					let num = (CHDATA.fleets.combined)? 2 : 1;
					let allRed = true;
					let allBlue = true;
					for (let n=1; n<=num; n++) {
						for (let sid of CHDATA.fleets[n]) {
							if (sid && CHDATA.ships[sid].lock) {
								if (!lock) lock = CHDATA.ships[sid].lock;
								if (CHDATA.ships[sid].lock != 10) { allBlue = false; }
								if (CHDATA.ships[sid].lock != 11) { allRed = false; }
								if (lock != CHDATA.ships[sid].lock) { allSame = false; }
							}
						}
					}
					if (!allSame) errors.push('No mixed locks.');
					if (!allRed && allBlue && CHDATA.fleets.combined) errors.push('You cannot sortie a combined fleet with the current locked ships.');
					if (allRed && !allBlue && !CHDATA.fleets.combined) errors.push('You cannot sortie a single fleet with the current locked ships.');
				},
				startCheck: function() {
					if (CHDATA.fleets.combined) {
						for (let n=1; n<=2; n++) { // give red lock
							for (let i=0; i<CHDATA.fleets[n].length; i++) {
								chGiveLock(n,i+1,11);
							}
						}
						return 'Start1';
					}
					for (let i=0; i<CHDATA.fleets[1].length; i++) { //give blue lock
						chGiveLock(1,i+1,10);
					}
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 697,
						y: 100,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 49,
						y: 47,
						route: 'X',
						hidden: 2
					},
					'A': {
						type: 3,
						x: 626,
						y: 79,
						routeC: function() {
							if (CHDATA.fleets.combined == 2) return 'B';
							return 'C';
						},
						distance: 2
					},
					'B': {
						type: 1,
						x: 547,
						y: 68,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'L',
						distance: 3
					},
					'C': {
						type: 1,
						x: 558,
						y: 118,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV < 3) return 'D';
							return 'H';
						},
						distance: 4,
					},
					'D': {
						type: 1,
						x: 572,
						y: 184,
						distance: 4,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 582,
						y: 246,
						distance: 6,
						end: true
					},
					'F': {
						type: 1,
						x: 500,
						y: 254,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						raid: true,
						distance: 6,
						routeC: function(ships) {
							if (ships.DD + ships.escort.DD <= 3) return 'E'	
							this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 30: 'I', 29.99: 'E' })
							return this.showLoSPlane;
						},
						debuffGive: function() {
							if (FLEETS1[0].AS == 2) CHDATA.event.maps[4].debuff.F = 1;
						},
					},
					'G': {
						type: 1,
						x: 498,
						y: 185,
						distance: 5,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						route: 'F'
					},
					'H': {
						type: 3,
						x: 443,
						y: 119,
						distance: 5,
						routeS: ['G', 'Z']
					},
					'I': {
						type: 1,
						x: 497,
						y: 329,
						distance: 7,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function(ships) {
							if (ships.CLT + ships.escort.CLT > 0 || !checkFlagshipSurfaceRadar()) return 'J'	
							return 'K'
						}
					},
					'J': {
						type: 4,
						x: 445,
						y: 298,
						distance: 7,
						resource: 1,
						loseMax: .15,
						route: 'K'
					},
					'K': {
						type: 1,
						x: 425,
						y: 361,
						distance: 8,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						end: true,
						boss: true,
						debuffGive: function() {
							if (CHDATA.event.maps[4].part > 1 && (CHDATA.event.maps[4].diff == 3 ? ['S'] : ['A','S']).includes(CHDATA.temp.rank)) CHDATA.event.maps[4].debuff.K = 1;
						},
						friendFleet: ['desdiv31','yuugumo1','gambier','shinyo'],
						setupSpecial: function() {
							let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
							for (let ship of ships) {
								if (MAPDATA[42].historical.miyauchi_2.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2}];
								}
								if (MAPDATA[42].historical.miyauchi_18.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
								}
								if (MAPDATA[42].historical.miyauchi_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.miyauchi_115.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						}
					},
					'L': {
						type: 3,
						x: 462,
						y: 54,
						distance: 4,
						routeS: ['M','H']
					},
					'M': {
						type: 1,
						x: 358,
						y: 53,
						distance: 5,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						routeC: function() {
							this.showNoCompass = true;
							if (CHDATA.event.maps[4].part == 1) return 'M*';
							return 'N';
						}
					},
					'M*': {
						type: 3,
						x: 358,
						y: 53,
						end: true,
						hidden: 4
					},
					'N': {
						type: 1,
						x: 294,
						y: 98,
						distance: 6,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						routeC: function() {
							if (checkFlagshipSurfaceRadar()) return 'P';
							return 'O';
						}
					},
					'O': {
						type: 1,
						x: 212,
						distance: 7,
						y: 71,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						routeC: function(ships) {
							if (!checkFlagshipSurfaceRadar() || CHDATA.fleets.combined || (ships.CA + ships.CAV < 1)) return 'R';
							return 'P';
						}
					},
					'P': {
						type: 1,
						x: 232,
						y: 150,
						distance: 7,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						route: 'Q',
						raid: true,
						debuffGive: function() {
							if (FLEETS1[0].AS >= (CHDATA.event.maps[4].diff == 1 ? 1 : 2)) CHDATA.event.maps[4].debuff.P = 1;
						},
					},
					'Q': {
						type: 3,
						x: 202,
						y: 209,
						hidden: 1,
						distance: 8,
						routeS: ['S', 'Z4']
					},
					'R': {
						type: 1,
						x: 154,
						y: 127,
						distance: 8,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						route: 'S'
					},
					'S': {
						type: 1,
						x: 136,
						y: 221,
						distance: 9,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						raid: true,
						route: 'T',
						debuffGive: function() {
							if (FLEETS1[0].AS == 2) CHDATA.event.maps[4].debuff.S = 1;
						},
					},
					'T': {
						type: 1,
						x: 174,
						y: 286,
						distance: 10,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 1,
						routeL: { 28: 'V', 27.99: 'U' }
					},
					'U': {
						type: 3,
						x: 100,
						y: 311,
						distance: 11,
						hidden: 1,
						end: true
					},
					'V': {
						type: 1,
						x: 171,
						y: 358,
						distance: 11,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						hidden: 1,
						end: true,
						boss: true,
						setupSpecial: function() {
							let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
							for (let ship of ships) {
								if (MAPDATA[42].historical.miyauchi_2.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2}];
								}
								if (MAPDATA[42].historical.miyauchi_18.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
								}
								if (MAPDATA[42].historical.miyauchi_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.miyauchi_115.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						}
					},
					'X': {
						type: 1,
						x: 143,
						y: 34,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						hidden: 2,
						subonly: true,
						routeC: function(ships) {
							if (ships.DD > 1 && (ships.aBB + ships.aCV < 4)) return 'O';
							return 'W';
						}
					},					
					'W': {
						type: 3,
						x: 222,
						y: 23,
						distance: 7,
						hidden: 2,
						end: true
					},
					'Y': {
						type: 1,
						x: 415,
						y: 187,
						distance: 6,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 2,
						route: 'Z1'
					},
					'Z': {
						type: 1,
						x: 374,
						y: 133,
						distance: 6,
						subonly: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 3,
						routeC: function(ships) {
							if (ships.CA + ships.CAV < 1 && (ships.aCV + ships.escort.aCV > 2) && checkFlagshipSurfaceRadar()) return 'Y';
							return 'Z4';
						}
					},
					'Z1': {
						type: 1,
						x: 370,
						y: 280,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						hidden: 3,
						routeL: { 30: 'Z3', 29.99: 'Z2' }
					},
					'Z2': {
						type: 3,
						x: 350,
						y: 223,
						hidden: 3,
						distance: 7,
						end: true
					},
					'Z3': {
						type: 1,
						x: 303,
						y: 333,
						distance: 9,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
						},
						hidden: 3,
						end: true,
						boss: true,
						debuffGive: function() {
							if (!CHDATA.fleets.combined && ['A','S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[4].debuff.Z3 = 1;
						},
						debuffAmount: 120,
						friendFleet: ['shinyo','tengo','shiratsuyu','euro','yuugumo2'],
						setupSpecial: function() {
							let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
							for (let ship of ships) {
								if (MAPDATA[42].historical.miyauchi_2.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2}];
								}
								if (MAPDATA[42].historical.miyauchi_18.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
								}
								if (MAPDATA[42].historical.miyauchi_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.miyauchi_115.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						}
					},
					'Z4': {
						type: 1,
						x: 296,
						y: 183,
						distance: 7,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						hidden: 3,
						route: 'Z5'
					},
					'Z5': {
						type: 1,
						x: 269,
						y: 267,
						distance: 8,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 1', 'Hard 1', 'Hard 2', 'Hard 2', 'Hard 2', 'Hard 2', 'Hard 2', 'Hard 2'],
							2: ['Medium 1', 'Medium 2', 'Medium 1', 'Medium 1', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 2'],
							1: ['Easy 1', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2'],
						},
						hidden: 3,
						routeL: { 30: 'Z3', 29.99: 'Z2' }
					},
				}
			}
		}
	}
}


function getMapHP(worldnum,mapnum,diff,part) {
	if (!CHDATA.event) return undefined;
	if (!diff) return undefined;
	var mdata;
	if (part) {
		mdata = MAPDATA[worldnum].maps[mapnum].parts[part];
	} else {
		mdata = MAPDATA[worldnum].maps[mapnum];
	}
	var hqtiers = Object.keys(mdata.maphp[diff]);
	var hqtier = 0;
	for (var i=0; i<hqtiers.length; i++) {
		if (CHDATA.player.level >= hqtiers[i] && hqtier < hqtiers[i]) hqtier = hqtiers[i];
	}
	return mdata.maphp[diff][hqtier];
}
function isShipInList(ships,basemid) {
	var ship = SHIPDATA[basemid];
	var done = [];
	while(ship) {
		if (ships.indexOf(basemid)!=-1) return true;
		if (!ship.next) break;
		basemid = ship.next;
		ship = SHIPDATA[ship.next];
		if (done.indexOf(basemid) != -1) break;
		done.push(basemid);
	}
	return false;
}
function mapChangePart(worldnum,mapnum,part) {
	if (!MAPDATA[worldnum].maps[mapnum].parts) return;
	for (var key in MAPDATA[worldnum].maps[mapnum].parts[part]) {
		MAPDATA[worldnum].maps[mapnum][key] = MAPDATA[worldnum].maps[mapnum].parts[part][key];
	}
}

function transportCalcStandard(ships,rank) {
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
		if (ship.masterId === 487) tp += 8;
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
}

function transportCalcFall15(ships,rank) {
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
}

function getBaseId(mid) {
	var ship = SHIPDATA[mid];
	while(ship) {
		if (!ship.prev) break;
		mid = ship.prev;
		ship = SHIPDATA[ship.prev];
	}
	return mid;
}

function checkHistorical(historicals,ids,numReq,diff) {
	diff = diff || CHDATA.event.maps[MAPNUM].diff;
	let num = 0;
	for (let mid of historicals) {
		if (isShipInList(ids,mid)) num++;
	}
	return num >= numReq[diff-1];
}

function checkFlagshipSurfaceRadar() {
	const ship = FLEETS1[0].ships[0];
	return ship.equips.some(equip => equip.LOS >= 5 && equip.btype == 4);
}