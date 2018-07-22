function InitUI() {
	if (!CHDATA.event) return;
	WORLD = CHDATA.event.world;
	MAPNUM = CHDATA.event.mapnum;

	$('#equipfilters').html('');
	$('#equipselecttable').html('');
	chDialogItemInit();
	
	for (var fleetnum in CHDATA.fleets) chFillTable(CHDATA.fleets[fleetnum],fleetnum);
	if (CHDATA.fleets.combined) chClickedCombine(CHDATA.fleets.combined, true);
	else chClickedCombine(0);
	
	chLoadSortieInfo(CHDATA.event.mapnum);
	chUIUpdateResources();
	
	var found = false;
	for (var i=1; i<=3; i++) {
		if (MAPDATA[WORLD].allowFleets.indexOf(i) != -1) {
			$('#btncombine'+i).show();
			found = true;
		} else {
			$('#btncombine'+i).hide();
		}
	}
	if (!found) $('.combinespacec').hide();
	else $('.combinespacec').show();
	
	if (CHDATA.fleets.supportN) {
		$('#btnsupportN').css('opacity',1);
	}
	if (CHDATA.fleets.supportB) {
		$('#btnsupportB').css('opacity',1);
	}
	
	$('#mainspace').show();
}

var WORLD, MAPNUM;
$('#battlespace').hide();
$('#mainspace').hide();
$(document).ready(function() {
	if (true && localStorage.ch_file) { 
		chLoadFile(localStorage.ch_file);
	} else chOpenMenu();
});

function chLoadFile(file) {
	localStorage.ch_file = FILE = file;
	var basic = JSON.parse(localStorage['ch_basic'+FILE]);
	CHDATA = JSON.parse(localStorage['ch_data'+FILE]);
	for (var key in basic) CHDATA[key] = basic[key];
	DIALOGSORT = -1;
	InitUI();
}

var STAGEMAP = new PIXI.Container();
var STAGEBATTLE = stage;
stage = STAGEMAP;
function screenClickBlank() { };
var SCREENCLICKFUNCTION = screenClickBlank;
var bgmap = PIXI.Sprite.fromImage('assets/82_res.images.ImgBackgroundDay.jpg');
stage.addChild(bgmap);
const MAPOFFX = 17, MAPOFFY = 22;
// const MAPOFFX = 25, MAPOFFY = 2;

var mapShutterTop = PIXI.Sprite.fromImage('assets/512_res.common.ImgShutterTop.png');
var mapShutterBottom = PIXI.Sprite.fromImage('assets/510_res.common.ImgShutterBottom.png');
stage.addChild(mapShutterTop); stage.addChild(mapShutterBottom);

var map;
var mapnodes = {};

var mapshipS = PIXI.Sprite.fromImage('assets/maps/ship.png');
mapshipS.defpivotx = 27; mapshipS.defpivoty = 27;
var mapshipCTF = PIXI.Sprite.fromImage('assets/maps/shipC1.png');
mapshipCTF.defpivotx = 29; mapshipCTF.defpivoty = 21;
var mapshipSTF = PIXI.Sprite.fromImage('assets/maps/shipC2.png');
mapshipSTF.defpivotx = 30; mapshipSTF.defpivoty = 28;
var mapshipTTF = PIXI.Sprite.fromImage('assets/maps/shipC3.png');
mapshipTTF.defpivotx = 26; mapshipTTF.defpivoty = 21;
var mapship = mapshipS;
stage.addChild(mapship);

var mapDim = new PIXI.Graphics();
mapDim.beginFill(0x000000);
mapDim.drawRect(0,0,800,480);
stage.addChild(mapDim);

var bottombar = PIXI.Sprite.fromImage('assets/maps/bottom.png');
stage.addChild(bottombar);

var bcompass = PIXI.Sprite.fromImage('assets/maps/compass.png');
stage.addChild(bcompass);
var bneedle = PIXI.Sprite.fromImage('assets/maps/needle.png');
stage.addChild(bneedle);
updates.push([function(needle) {
	needle.rotation = Math.PI/4 + Math.random()*.06 - .03;
	return false;
},[bneedle]]);



var mcompass = PIXI.Sprite.fromImage('assets/maps/compass.png');
mcompass.pivot.set(150,150);
mcompass.position.set(400,240);
mcompass.alpha = 0;
mcompass.scale.set(1.5);
var mneedle = PIXI.Sprite.fromImage('assets/maps/needle.png');
mneedle.pivot.set(14,101);
mneedle.position.set(400,240);
mneedle.alpha = 0;
mneedle.scale.set(1.5);
updates.push([function(needle) {
	needle.rotation = Math.random()*.06 - .03;
	return false;
},[mneedle]]);

var formboxes = [], formbuttons = [], formdots = [];
for (var i=0; i<5; i++) {
	formboxes.push(PIXI.Sprite.fromImage('assets/maps/formbox.png'));
	formbuttons.push([PIXI.Sprite.fromImage('assets/maps/form'+(i+1)+'a.png'),PIXI.Sprite.fromImage('assets/maps/form'+(i+1)+'b.png')]);
}
formboxes[0].position.set(387,61);
formboxes[1].position.set(517,61);
formboxes[2].position.set(649,61);
formboxes[3].position.set(455,220);
formboxes[4].position.set(586,220);
for (var i=0; i<5; i++) {
	formbuttons[i][0].position.set(formboxes[i].x+10,formboxes[i].y+107);
	formbuttons[i][1].position.set(formboxes[i].x+10,formboxes[i].y+107);
	formbuttons[i][0].formnum = i+1;
	formbuttons[i][0].interactive = true;
	formbuttons[i][0].buttonMode = true;
	formbuttons[i][0].mouseover = function() { this.alpha = 0; }
	formbuttons[i][0].mouseout = function() { this.alpha = 1; }
	formbuttons[i][0].click = function() {
		FORMSELECTED = this.formnum;
		this.callback();
	}
}
var FORMDOTPOS = [
	[445,80], [445,94], [445,108], [445,122], [445,136], [445,150],
	[568,100], [568,114], [568,128], [582,100], [582,114], [582,128],
	[707,94], [707,108], [707,122], [707,136], [687,114], [727,114],
	[491,296], [500,287], [509,278], [518,269], [527,260], [536,251],
	[611,274], [624,274], [638,274], [651,274], [664,274], [677,274],
];

for (var i=0; i<30; i++) {
	formdots.push(PIXI.Sprite.fromImage('assets/maps/formdot.png'));
	formdots[i].pivot.set(7,7);
	formdots[i].scale.set(.6);
	formdots[i].position.set(FORMDOTPOS[i][0],FORMDOTPOS[i][1]);
}

var formboxesc = [], formbuttonsc = [];
for (var i=1; i<=4; i++) {
	formboxesc.push(PIXI.Sprite.fromImage('assets/maps/formboxc'+i+'.png'));
	formbuttonsc.push([PIXI.Sprite.fromImage('assets/maps/formc'+i+'a.png'),PIXI.Sprite.fromImage('assets/maps/formc'+i+'b.png')]);
}
formboxesc[0].position.set(417,64);
formboxesc[1].position.set(582,64);
formboxesc[2].position.set(417,201);
formboxesc[3].position.set(582,201);
for (var i=0; i<4; i++) {
	formbuttonsc[i][0].position.set(formboxesc[i].x+11,formboxesc[i].y+95);
	formbuttonsc[i][1].position.set(formboxesc[i].x+11,formboxesc[i].y+95);
	formbuttonsc[i][0].formnum = i+11;
	formbuttonsc[i][0].interactive = true;
	formbuttonsc[i][0].buttonMode = true;
	formbuttonsc[i][0].mouseover = function() { this.alpha = 0; }
	formbuttonsc[i][0].mouseout = function() { this.alpha = 1; }
	formbuttonsc[i][0].click = function() {
		FORMSELECTED = this.formnum;
		this.callback();
	}
}

var CONTINUESELECT = -1;
var mapcontinuebutton = [PIXI.Sprite.fromImage('assets/maps/sortieyes.png'),PIXI.Sprite.fromImage('assets/maps/sortieyes2.png')];
var mapretreatbutton = [PIXI.Sprite.fromImage('assets/maps/sortieno.png'),PIXI.Sprite.fromImage('assets/maps/sortieno2.png')];
mapcontinuebutton[0].position.set(201,162); 
mapcontinuebutton[0].interactive = true; mapcontinuebutton[0].buttonMode = true;
mapcontinuebutton[0].mouseover = function() {
	console.log('in');
	this.alpha = 0;
	mapcontinuebutton[1].alpha = 1;
}
mapcontinuebutton[0].mouseout = function() {
	console.log('out');
	this.alpha = 1;
	mapcontinuebutton[1].alpha = 0;
}
mapcontinuebutton[0].click = function() {
	CONTINUESELECT = 1;
	SM.play('click');
	this.callback();
}
mapcontinuebutton[1].position.set(201,162); mapcontinuebutton[1].alpha = 0;
mapretreatbutton[0].position.set(412,161);
mapretreatbutton[0].interactive = true; mapretreatbutton[0].buttonMode = true;
mapretreatbutton[0].mouseover = function() {
	this.alpha = 0;
	mapretreatbutton[1].alpha = 1;
}
mapretreatbutton[0].mouseout = function() {
	this.alpha = 1;
	mapretreatbutton[1].alpha = 0;
}
mapretreatbutton[0].click = function() {
	CONTINUESELECT = 0;
	SM.play('click');
	this.callback();
}
mapretreatbutton[1].position.set(412,161); mapretreatbutton[1].alpha = 0;

var NBSELECT = -1;
mapNBnobutton = [PIXI.Sprite.fromImage('assets/maps/nbno.png'),PIXI.Sprite.fromImage('assets/maps/nbno2.png')];
mapNByesbutton = [PIXI.Sprite.fromImage('assets/maps/nbyes.png'),PIXI.Sprite.fromImage('assets/maps/nbyes2.png')];
mapNBnobutton[0].position.set(226,188); mapNBnobutton[1].position.set(207,170);
mapNByesbutton[0].position.set(441,188); mapNByesbutton[1].position.set(422,170);
mapNBnobutton[1].alpha = 0; mapNByesbutton[1].alpha = 0;
mapNBnobutton[0].buttonMode = true; mapNByesbutton[0].buttonMode = true;
mapNBnobutton[0].interactive = true; mapNByesbutton[0].interactive = true;
mapNBnobutton[0].mouseover = function() {
	this.alpha = 0;
	mapNBnobutton[1].alpha = 1;
}
mapNByesbutton[0].mouseover = function() {
	this.alpha = 0;
	mapNByesbutton[1].alpha = 1;
}
mapNBnobutton[0].mouseout = function() {
	this.alpha = 1;
	mapNBnobutton[1].alpha = 0;
}
mapNByesbutton[0].mouseout = function() {
	this.alpha = 1;
	mapNByesbutton[1].alpha = 0;
}
mapNBnobutton[0].click = function() {
	NBSELECT = 0;
	SM.play('click');
	this.callback();
}
mapNByesbutton[0].click = function() {
	NBSELECT = 1;
	SM.play('click');
	this.callback();
}

var FCFSELECT = -1;
mapFCFnobutton = [PIXI.Sprite.fromImage('assets/maps/fcfno1.png'),PIXI.Sprite.fromImage('assets/maps/fcfno2.png')];
mapFCFyesbutton = [PIXI.Sprite.fromImage('assets/maps/fcfyes1.png'),PIXI.Sprite.fromImage('assets/maps/fcfyes2.png')];
mapFCFnobutton[0].position.set(419,301); mapFCFnobutton[1].position.set(419,301);
mapFCFyesbutton[0].position.set(201,301); mapFCFyesbutton[1].position.set(201,301);
mapFCFnobutton[1].alpha = 0; mapFCFyesbutton[1].alpha = 0;
mapFCFnobutton[0].buttonMode = true; mapFCFyesbutton[0].buttonMode = true;
mapFCFnobutton[0].mouseover = function() {
	this.alpha = 0;
	mapFCFnobutton[1].alpha = 1;
}
mapFCFyesbutton[0].mouseover = function() {
	this.alpha = 0;
	mapFCFyesbutton[1].alpha = 1;
}
mapFCFnobutton[0].mouseout = function() {
	this.alpha = 1;
	mapFCFnobutton[1].alpha = 0;
}
mapFCFyesbutton[0].mouseout = function() {
	this.alpha = 1;
	mapFCFyesbutton[1].alpha = 0;
}
mapFCFnobutton[0].click = function() {
	FCFSELECT = 0;
	SM.play('click');
	this.callback();
}
mapFCFyesbutton[0].click = function() {
	FCFSELECT = 1;
	SM.play('click');
	this.callback();
}

function chResetMapSpritePos() {
	mapShutterTop.position.set(0,0); mapShutterTop.alpha = 0;
	mapShutterBottom.position.set(0,210); mapShutterBottom.alpha = 0;
	map.position.set(MAPOFFX,MAPOFFY);
	mapShutterTop.alpha = mapShutterBottom.alpha = mapDim.alpha = 0;
	bottombar.position.set(0,387);
	bcompass.pivot.set(150,150); bcompass.rotation = Math.PI/4;
	bcompass.position.set(35,445);
	map.alpha = mapship.alpha = bcompass.alpha = bneedle.alpha = bottombar.alpha = 1;
	for (var letter in mapnodes) mapnodes[letter].alpha = 1;
	bneedle.pivot.set(14,101); bneedle.rotation = Math.PI/4;
	bneedle.position.set(35,445);
	mapship.pivot.set(mapship.defpivotx,mapship.defpivoty);
}




function addMapNode(letter,type) {
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	if (node.aironly && WORLD <= 27) return; //already drawn on Summer 2014 map
	var nodeG = null;
	if (node.aironly) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAir.png');
			nodeG.pivot.set(35,22);
		}
	} else if (!node.boss) {
		var img;
		switch (type||node.type) {
			case 1: img = 'assets/maps/nodeR.png'; break;
			case 2: img = 'assets/maps/nodeG.png'; break;
			case 3: img = 'assets/maps/nodeB.png'; break;
			case 4: img = 'assets/maps/nodeP.png'; break;
		}
		nodeG = PIXI.Sprite.fromImage(img);
		nodeG.pivot.set(10,10);
	} else {
		nodeG = PIXI.Sprite.fromImage('assets/maps/nodeBoss.png');
		nodeG.pivot.set(19,24);
	}
	nodeG.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
	if (mapnodes[letter]) stage.removeChild(mapnodes[letter]);
	mapnodes[letter] = nodeG;
	stage.addChildAt(nodeG,stage.getChildIndex(map)+1);
	console.log(stage.getChildIndex(map));
}




function mapMoveShip(ship,x,y) {
	var dir = (ship.x > x)? -1: 1;
	if (!(ship.scale.x + dir)) {
		var timer = 20;
		updates.push([function() {
			ship.scale.x += .1*dir;
			if (--timer <= 0) {
				ship.scale.x = dir;
				return true;
			}
			return false;
		},[]]);
	}
	addTimeout(function() {
		var speedX = (x - ship.x)/120;
		var speedY = (y - ship.y)/120;
		var timer = 120;
		updates.push([function() {
			ship.x += speedX;
			ship.y += speedY;
			if (--timer <= 0) {
				ship.x = x; ship.y = y;
				return true;
			}
			return false;
		},[]]);
	}, 400);
	
	addTimeout(function() { ecomplete = true; }, 2400);
}

var FORMSELECTED;
function mapBattleNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter);
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].aironly && WORLD > 27) addMapNode(letter);

	var radarstop = false, radartimer = 270;
	updates.push([function() {
		if (radartimer%90==0||radartimer%90==60) createRadar(ship.x,ship.y);
		if (radartimer%90==0&&radartimer>90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].subonly) {
		var submarine = PIXI.Sprite.fromImage('assets/maps/submarine.png');
		submarine.position.set(mapship.x+10,mapship.y-30);
		submarine.alpha = 0; submarine.scale.set(.75);
		stage.addChildAt(submarine,stage.getChildIndex(mapship)+1);
		updates.push([function() {
			if (radarstop) {
				submarine.alpha -= .05;
				if (submarine.alpha <= 0) {
					stage.removeChild(submarine);
					return true;
				}
			} else {
				if (submarine.alpha < 1) {
					submarine.alpha += .015;
					if (submarine.alpha > 1) submarine.alpha = 1;
					submarine.y-=.5;
				}
			}
			return false;
		},[]]);
	}
	
	addTimeout(function() {
		mapShutterTop.alpha = mapShutterBottom.alpha = mapDim.alpha = 0;
		updates.push([function() {
			mapShutterTop.alpha += .1;
			mapShutterBottom.alpha += .1;
			mapDim.alpha += .05;
			if (mapShutterTop.alpha >= 1) { mapShutterTop.alpha=mapShutterBottom.alpha=1; mapDim.alpha = .5;}
			return (mapShutterTop.alpha >= 1);
		},[]]);
	}, 3000);
	
	var formcombined = (CHDATA.fleets.combined > 0 && !MAPDATA[WORLD].maps[MAPNUM].nodes[letter].night);
	var afterSelect = function() {
		if (formcombined) addTimeout(function() { chHideFormSelectC(); }, 1);
		else addTimeout(function() { chHideFormSelect(); }, 1);
		radarstop = true;
		updates.push([function() {
			mapDim.alpha -= .05;
			return (mapDim.alpha <= 0);
		},[]]);
		addTimeout(function() {
			updates.push([function() {
				map.alpha -= .025;
				bottombar.alpha -= .025;
				bcompass.alpha -= .025;
				bneedle.alpha -= .025;
				mapship.alpha -= .025;
				bcompass.x -= 4;
				bneedle.x -= 4;
				bcompass.rotation -= .05;
				bottombar.y += 2;
				for (var lettr in mapnodes) mapnodes[lettr].alpha -= .025;
				return (map.alpha <= 0);
			},[]]);
			SM.fadeBGM();
		}, 500);
		addTimeout(function() { ecomplete = true; }, 2000);
	}
	
	FORMSELECTED = 0;
	if (formcombined) addTimeout(function() { chShowFormSelectC(afterSelect); }, 3200);
	else if (CHSHIPCOUNT.total >= 4) addTimeout(function() { chShowFormSelect(afterSelect); }, 3200);
	else addTimeout(function() { FORMSELECTED = 1; afterSelect(); }, 3200);
	
}

function mapResourceNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y,'W');
		if (radartimer==90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	// var num = node.min + Math.floor(Math.random()*(node.max-node.min+5)/5)*5;
	var num = node.amount[Math.floor(Math.random()*node.amount.length)];
	var res = createResource(node.resource,num);
	res.alpha = 0; res.position.set(ship.x-18,ship.y-10); res.counter = 40;
	stage.addChild(res);
	updates.push([function() {
		res.y -= 1;
		res.counter--;
		if (res.counter > 0) res.alpha = Math.min(res.alpha+.1,1);
		else res.alpha -= .05;
		if (res.alpha <= 0) {
			stage.removeChild(res);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() { radarstop = true; }, 2600);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 3600);
}

function mapIllusionNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter,1);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y);
		if (radartimer==90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	addTimeout(function() { radarstop = true; }, 1300);
	addTimeout(function() {
		recycle(mapnodes[letter]);
		addMapNode(letter);
	}, 1800);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 2300);
}

function mapStormNode(ship,letter) {
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	var numradars = 0, lostpercent, lostshow;
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		for (var j=0; j<4; j++) {
			var equip = FLEETS1[0].ships[i].equips[j];
			if (!equip) continue;
			if (equip.type == RADARS || equip.type == RADARL || equip.type == RADARXL) numradars++;
		}
	}
	switch (numradars) {
		case 0: lostpercent = .4; break;
		case 1: lostpercent = .3; break;
		case 2: lostpercent = .25; break;
		default: lostpercent = .2; break;
	}
	var resname = (node.resource == 1)? 'fuelleft' : 'ammoleft';
	lostshow = Math.floor(FLEETS1[0].ships[0][resname]*lostpercent*10);
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		FLEETS1[0].ships[i][resname] *= (1-lostpercent);
	}

	if (!mapnodes[letter]) addMapNode(letter);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y,'W');
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	var storm = getFromPool('storm','assets/maps/storm.png');
	storm.pivot.set(30,30); storm.rotation = 0;
	var stormwrap = new PIXI.Container();
	stormwrap.addChild(storm);
	stormwrap.position.set(ship.x,ship.y); stormwrap.scale.y = .5;
	stage.addChild(stormwrap); stage.swapChildren(stormwrap,mapship);
	var stormtimer = 120, radius = 0;
	SM.play('storm');
	updates.push([function() {
		storm.rotation += .1;
		mapship.pivot.set(radius*Math.cos(storm.rotation)+mapship.defpivotx,radius*Math.sin(storm.rotation)+mapship.defpivoty);
		stormtimer--;
		if (stormtimer >= 115) radius += 4;
		else if (stormtimer <= 100) radius -= .2;
		if (stormtimer<=0) {
			mapship.pivot.set(mapship.defpivotx,mapship.defpivoty);
			stage.removeChild(stormwrap); recycle(storm);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() {
		var res = createResource(node.resource,lostshow);
		res.position.set(ship.x-9,ship.y-9); res.counter = 60; res.vspeed = -3; stage.addChild(res);
		updates.push([function() {
			res.x -= 1;
			res.y += res.vspeed;
			res.vspeed += .1;
			res.counter--;
			if (res.counter < 20) res.alpha -= .05;
			if (res.counter <= 0) {
				stage.removeChild(res);
				return true;
			}
			return false;
		},[]]);
	}, 1500);
	
	addTimeout(function() { radarstop = true; }, 2600);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 3600);
	
}

function createResource(type,num) {
	var res = new PIXI.Container();
	var icon;
	switch(type) {
		case 1: icon = PIXI.Sprite.fromImage('assets/stats/fuel.png'); break;
		case 2: icon = PIXI.Sprite.fromImage('assets/stats/ammo.png'); break;
		case 3: icon = PIXI.Sprite.fromImage('assets/stats/steel.png'); break;
		case 4: icon = PIXI.Sprite.fromImage('assets/stats/baux.png'); break;
	}
	res.addChild(icon);
	var text = new PIXI.Text(num.toString(),{font:'14px "Arno Pro Semibold"',fill:'#ffffff'});
	text.x = 22;
	res.addChild(text);
	return res;
}


function chShowFormSelect(callback) {
	for (var i=0; i<5; i++) {
		if (i==2 && CHSHIPCOUNT.total < 5) continue;
		stage.addChild(formboxes[i]);
		stage.addChild(formbuttons[i][1]);
		stage.addChild(formbuttons[i][0]);
		formbuttons[i][0].callback = callback;
		for (var j=i*6; j<i*6+6; j++) stage.addChild(formdots[j]);
	}
}

function chHideFormSelect() {
	for (var i=0; i<5; i++) {
		stage.removeChild(formboxes[i]);
		stage.removeChild(formbuttons[i][1]);
		stage.removeChild(formbuttons[i][0]);
		formbuttons[i][0].alpha = 1;
	}
	for (var i=0; i<formdots.length; i++) stage.removeChild(formdots[i]);
}

function chShowFormSelectC(callback) {
	for (var i=0; i<4; i++) {
		if (i==2 && CHSHIPCOUNT.escort.total < 5) continue;
		if (i==3 && CHSHIPCOUNT.escort.total < 4) continue;
		stage.addChild(formboxesc[i]);
		stage.addChild(formbuttonsc[i][1]);
		stage.addChild(formbuttonsc[i][0]);
		formbuttonsc[i][0].callback = callback;
	}
}

function chHideFormSelectC() {
	for (var i=0; i<4; i++) {
		stage.removeChild(formboxesc[i]);
		stage.removeChild(formbuttonsc[i][1]);
		stage.removeChild(formbuttonsc[i][0]);
		formbuttonsc[i][0].alpha = 1;
	}
}



function spinCompass(result,fairy) {
	stage.addChild(mcompass);
	stage.addChild(mneedle);
	mcompass.rotation = 0;
	updates.push([function(compass,needle) {
		compass.alpha += .05; needle.alpha = compass.alpha;
		compass.scale.set(compass.scale.x-.025); needle.scale.set(compass.scale.x);
		if (compass.alpha >= 1) {
			compass.alpha = needle.alpha = 1; compass.scale.set(1); needle.scale.set(1);
			return true;
		}
		return false;
	},[mcompass,mneedle]]);
	
	addTimeout(function() {
		SCREENCLICKFUNCTION = function() {
			SCREENCLICKFUNCTION = screenClickBlank;
			addTimeout(function() {
				var speed = .6;
				mcompass.rotation = result - 11.97 + Math.random()*.1;
				SM.play('mapcompass',.25);
				updates.push([function() {
					mcompass.rotation += speed;
					speed *= .95;
					if (speed <= .001) return true;
					return false;
				},[]]);
			}, 1000);
			
			addTimeout(function() {
				updates.push([function(compass,needle) {
					compass.alpha -= .05; needle.alpha = compass.alpha;
					compass.scale.set(compass.scale.x+.025); needle.scale.set(compass.scale.x);
					if (compass.alpha <= 0) {
						return true;
					}
					return false;
				},[mcompass,mneedle]]);
			}, 4000);
			
			addTimeout(function() {
				stage.removeChild(mcompass);
				stage.removeChild(mneedle);
				ecomplete = true;
			}, 5000);
		};
	}, 400);
	
	
}

function mapSendScout(ship,node) {
	var scout = getFromPool('scout','assets/maps/recon.png');
	scout.pivot.set(37,29);
	scout.position.set(ship.x,ship.y); scout.scale.set(0); scout.timer = 0;
	stage.addChild(scout);
	var startx = ship.x, starty = ship.y - 10;
	var targetx = node.x + MAPOFFX, targety = node.y + MAPOFFY;
	var dir = (ship.x < targetx)? 1 : -1;
	scout.scale.x *= dir;
	
	SM.play('scout');
	updates.push([function() {
		scout.timer++;
		if (scout.timer <=10) scout.scale.set(scout.scale.x+dir*.1,scout.scale.y+.1);
		if (scout.timer > 60 && scout.timer < 85) scout.scale.x -= .08*dir;
		if (scout.timer >=140) scout.scale.set(scout.scale.x+dir*.1,scout.scale.y-.1);
		scout.x = startx + (targetx-startx)*Math.sin(Math.PI*scout.timer/150);
		scout.y = starty + (targety-starty)*Math.sin(Math.PI*scout.timer/150);
		scout.pivot.y = 29 - 20*Math.sin(2*Math.PI*scout.timer/150);
		if (scout.timer >= 150) {
			recycle(scout);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() { ecomplete = true; }, 3000);
}

function createRadar(x,y,imagec) {
	if (!imagec) imagec = '';
	var radar = getFromPool('mapradar'+imagec,'assets/maps/radar'+imagec+'.png');
	radar.pivot.set(80,80); radar.scale.set(0); radar.alpha = 1; radar.notpersistent = true;
	radar.position.set(x,y);
	stage.addChildAt(radar,stage.getChildIndex(mapship));
	updates.push([function(radar) {
		radar.scale.set(radar.scale.x + .01);
		if (radar.scale.x > .75) radar.alpha -= .05;
		if (radar.alpha <= 0) {
			recycle(radar);
			return true;
		}
		return false;
	},[radar]]);
}



// if (localStorage.data) {
	
	/*var testships = [];
	var choose = [];
	for (var sid in CHDATA.ships) {
		if (CHDATA.ships[sid].LVL >= 70 && CHDATA.ships[sid].items[2] != -1) choose.push(sid);
	}
	for (var i=0; i<6; i++) {
		var s;
		do {
			s = choose[Math.floor(Math.random()*choose.length)];
		} while (testships.indexOf(s) != -1);
		testships.push(s);
	}
	console.log(testships);
	// testships = [ "x11322", "x77", "x10176", "x1281", "x3494", "x5385" ];
	testships[5] = 'x110';
	chLoadFleet(testships);
	chFillTable(testships);*/
	
	
// }

var node = null;
var curletter = 'Start';
var CHSHIPCOUNT; //= {DD:2,CA:2,SS:2};
var ONSORTIE = false;

var testLOS = 101;

function chPlayerStart() {
	if (started) {
		console.log('reset');
		SM.stopBGM();
		stage = STAGEMAP;
		eventqueue = []; e = 0;
		curletter = 'Start';
		bossbar.active = false;
	}
	node = MAPDATA[WORLD].maps[MAPNUM].nodes['Start'];
	var mapshipindex = stage.getChildIndex(mapship);
	stage.removeChild(mapship);
	switch(CHDATA.fleets.combined) {
		case 1: mapship = mapshipCTF; break;
		case 2: mapship = mapshipSTF; break;
		case 3: mapship = mapshipTTF; break;
		default: mapship = mapshipS; break;
	}
	stage.addChildAt(mapship,mapshipindex);
	mapship.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
	var letterboss = String.fromCharCode(64+MAPDATA[WORLD].maps[MAPNUM].bossnode);
	var xboss = MAPDATA[WORLD].maps[MAPNUM].nodes[letterboss].x;
	mapship.scale.set(((xboss < node.x)? -1 : 1),1);
	chLoadMap(MAPNUM);
	mapPhase(true);
	if (!started) animate();
	started = true;
	ONSORTIE = true;
}

function chLoadMap(mapnum) {
	stage.removeChild(map);
	map = PIXI.Sprite.fromImage('assets/maps/'+CHDATA.event.world+'/'+mapnum+'.png');
	stage.addChildAt(map,stage.getChildIndex(mapShutterBottom)+1);

	for (var letter in mapnodes) { stage.removeChild(mapnodes[letter]); }
	mapnodes = {};
	for (var i=0; i<CHDATA.event.maps[mapnum].visited.length; i++) {
		var letter = CHDATA.event.maps[mapnum].visited[i];
		if (letter == 'Start') continue;
		if (MAPDATA[WORLD].maps[mapnum].nodes[letter].type==3) addMapNode(letter,1);
		else addMapNode(letter);
	}
	if (WORLD > 27) { //fill unvisited air nodes
		for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
			var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
			if (node.aironly && CHDATA.event.maps[mapnum].visited.indexOf(letter) == -1) addMapNode(letter);
		}
	}
	
	chResetMapSpritePos();
}

function mapPhase(first) {
	if (first) {
		SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
	} else {
		pushShipStatusToUI();
	}

	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];
	if (curnode.end) {
		eventqueue.push([endMap,[]]);
		return;
	}
	var nextletter, nextnode;
	if (curnode.route) nextletter = curnode.route;
	else if (curnode.routeC) nextletter = curnode.routeC(CHSHIPCOUNT);
	else if (curnode.routeR) {
		var r = Math.random(), sum = 0;
		for (var letter in curnode.routeR) {
			sum += curnode.routeR[letter];
			if (r < sum) { nextletter = letter; break; }
		}
	} else if (curnode.routeL) {
		var LOSs = Object.keys(curnode.routeL).sort(function(a,b) { return (parseInt(a) < parseInt(b))? -1:1; } );
		for (var i=LOSs.length-1; i>=0; i--) {
			if (testLOS > LOSs[i]) { nextletter = curnode.routeL[LOSs[i]]; break; }
		}
	} else if (curnode.routeS) {
		eventqueue.push([selectNode,[curnode.routeS]]);
	}
	
	if (!curnode.routeS) mapPhase2(nextletter);
	
}

function mapPhase2(nextletter) {
	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];
	var nextnode = MAPDATA[WORLD].maps[MAPNUM].nodes[nextletter];
	if (CHDATA.event.maps[MAPNUM].visited.indexOf(nextletter) == -1) CHDATA.event.maps[MAPNUM].visited.push(nextletter);
	
	eventqueue.push([wait,[1000]]);
	if (curnode.routeC||curnode.routeR) {
		var dir = Math.atan2(curnode.x-nextnode.x,curnode.y-nextnode.y);
		eventqueue.push([spinCompass,[dir]]);
	} else if (curnode.routeL) {
		var badletter = curnode.routeL[0];
		if (nextletter != badletter) eventqueue.push([mapSendScout,[mapship,nextnode]]);
	}

	eventqueue.push([mapMoveShip,[mapship,nextnode.x+MAPOFFX,nextnode.y+MAPOFFY]]);
	
	switch (nextnode.type) {
		case 1: //battle
			eventqueue.push([mapBattleNode,[mapship,nextletter]]);
			eventqueue.push([prepBattle,[nextletter]]);
			break;
		case 2: //res
			eventqueue.push([mapResourceNode,[mapship,nextletter]]);
			break;
		case 3: //illusion
			eventqueue.push([mapIllusionNode,[mapship,nextletter]]);
			break;
		case 4: //storm
			eventqueue.push([mapStormNode,[mapship,nextletter]]);
			break;
		default:
			break;
	}
	
	curletter = nextletter;
}

function selectNode(letters) {
	var nodeSelected = false;

	var bubble = getFromPool('nodeBubble','assets/maps/nodeSelectBubble.png');
	bubble.pivot.set(0,60);
	bubble.scale.y = 0;
	bubble.position.set(mapship.x+20,mapship.y-15);
	stage.addChild(bubble);
	updates.push([function() {
		bubble.scale.y += .15;
		if (bubble.scale.y >= 1) {
			bubble.scale.y = 1;
			return true;
		}
	},[]]);
	
	var afterSelect = function() {
		recycle(bubble);
		for (let j=0; j<areas.length; j++) areas[j].interactive = false;
		mapPhase2(nodeSelected);
		addTimeout(function() { 
			for (let j=0; j<areas.length; j++) stage.removeChild(areas[j]);
			ecomplete = true;
		}, 100);
	};
	
	var glows = [], areas = [];
	for (var i=0; i<letters.length; i++) {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letters[i]];
		glows[i] = getFromPool('nodeGlow','assets/maps/nodeGlow.png');
		glows[i].pivot.set(28);
		glows[i].position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		stage.addChild(glows[i]);
		updates.push([function(glow) {
			glow.scale.set(glow.scale.x+.01);
			if (glow.scale.x >= 1.3) glow.scale.set(.7);
			glow.alpha = 1-(Math.abs(glow.scale.x-1)*3);
			if (nodeSelected) {
				recycle(glow);
				return true;
			}
		},[glows[i]]]);
		
		areas[i] = new PIXI.Graphics();
		areas[i].beginFill(0);
		areas[i].drawCircle(10,10,10);
		areas[i].pivot.set(10);
		areas[i].alpha = 0;
		areas[i].interactive = areas[i].buttonMode = true;
		areas[i].position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		areas[i].letter = letters[i];
		areas[i].callback = afterSelect;
		areas[i].click = function(e) { nodeSelected = this.letter; this.callback(); }
		stage.addChild(areas[i]);
	}
}
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['A'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'A']]);
// eventqueue.push([spinCompass,[0]]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['B'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'B']]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['C'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'C']]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['D'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'D']]);
// eventqueue.push([prepBattle,[]]);

function prepBattle(letter) {
	SM.stopBGM();
	var enemies = [], comp;
	var mapdata = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	var lastdance = (CHDATA.event.maps[MAPNUM].hp <= MAPDATA[WORLD].maps[MAPNUM].finalhp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
	var comps;
	if (CHDATA.config.diffmode == 1) {
		var compHQ = (mapdata.compHQF && lastdance)? mapdata.compHQF : mapdata.compHQ;
		var hqs = []; for (var key in compHQ) hqs.push(parseInt(key));
		hqs.sort(function(a,b) { return a-b; });
		// console.log(hqs);
		comps = compHQ[hqs[0]];
		for (var i=hqs.length-1; i>0; i--) {
			if (CHDATA.player.level >= hqs[i]) {
				comps = compHQ[hqs[i]];
				// console.log('chose: '+hqs[i]);
				break;
			}
		}
		// console.log(comps);
	} else {
		comps = (mapdata.compDiffF && lastdance)? mapdata.compDiffF[diff] : mapdata.compDiff[diff];
	}
	comp = comps[Math.floor(Math.random()*comps.length)];
	var compd = ENEMYCOMPS[MAPDATA[WORLD].name]['E-'+MAPNUM][letter][comp];
	for (var i=0; i<compd.c.length; i++) {
		var sid = compd.c[i];
		enemies.push(createDefaultShip(sid));
	}
	FLEETS2[0] = new Fleet(1);
	FLEETS2[0].loadShips(enemies);
	FLEETS2[0].formation = ALLFORMATIONS[compd.f];
	
	if (mapdata.debuffAmount) {
		var debuffCheck = MAPDATA[WORLD].maps[MAPNUM].debuffCheck;
		if (debuffCheck && debuffCheck(CHDATA.event.maps[MAPNUM].debuff)) {
			switch (WORLD) {
				case 31:
					FLEETS2[0].ships[0].debuff = mapdata.debuffAmount;
					break;
				
				case 35:
					FLEETS2[0].ships.forEach((ship, idx) => {
						if ([1696,1697,1698].includes(ship.mid)) { FLEETS2[0].ships[idx].debuff = mapdata.debuffAmount; }
					});
					break;
					}

			}
			console.log('debuff applied');
	}
	
	if (CHDATA.fleets.combined) {
		if (FORMSELECTED > 10) {
			FLEETS1[0].formation = ALLFORMATIONS[''+CHDATA.fleets.combined+FORMSELECTED];
			FLEETS1[1].formation = ALLFORMATIONS[''+CHDATA.fleets.combined+FORMSELECTED+'E'];
		} else {
			FLEETS1[0].formation = ALLFORMATIONS[FORMSELECTED];
			FLEETS1[1].formation = ALLFORMATIONS[FORMSELECTED];
		}
	} else {
		FLEETS1[0].formation = ALLFORMATIONS[FORMSELECTED];
	}
	
	var CHAPI = {battles:[],fleetnum:1,support1:3,support2:4,source:2,world:WORLD,mapnum:MAPNUM};
	if (MAPDATA[WORLD].maps[MAPNUM].hpmode == 1) {
		CHAPI.defeat_count = getMapHP(WORLD,MAPNUM,diff) - CHDATA.event.maps[MAPNUM].hp;
		console.log(CHAPI.defeat_count);
	} else {
		CHAPI.now_maphp = CHDATA.event.maps[MAPNUM].hp;
		CHAPI.max_maphp = getMapHP(WORLD,MAPNUM,diff);
	}
	if (CHDATA.fleets.combined) CHAPI.combined = CHDATA.fleets.combined;
	
	for (var i=0; i<4; i++) {
		if (i >= FLEETS1.length) break;
		CHAPI['fleet'+(i+1)] = [];
		if (!FLEETS1[i]) continue;
		for (var j=0; j<FLEETS1[i].ships.length; j++) {
			var ship = FLEETS1[i].ships[j];
			var obj = {equip:[],kyouka:[]};
			obj.mst_id = ship.mid;
			var repairs = (ship.repairs)? ship.repairs.slice() : null;
			for (var k=0; k<5; k++) {
				if (ship.equips[k]) {
					//don't load repair into replay if used (but keep on simship because it breaks things if remove)
					//this is still bugged, if both team and goddess are equipped, because replayer doesn't know which to use first, need to figure out
					if (ship.equips[k].type == REPAIR) {  
						var ind = repairs.indexOf(ship.equips[k].mid);
						if (ind != -1) { repairs.splice(ind,1); obj.equip.push(ship.equips[k].mid); }
						else obj.equip.push(-1);
						continue;
					}
					obj.equip.push(ship.equips[k].mid);
				}
				else obj.equip.push(-1);
			}
			CHAPI['fleet'+(i+1)].push(obj);
		}
	}
	var BAPI = {data:{},yasen:{},mvp:[],rating:'',node:letter.charCodeAt()-64};
	var doNB = true; //always do, roll back later if not chosen
	var NBonly = compd.NB; //change to node level?
	var aironly = compd.air;
	var landbomb = compd.bomb;
	var supportfleet = (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].boss)? FLEETS1S[1] : FLEETS1S[0];
	
	var res;
	if (CHDATA.fleets.combined) res = simCombined(CHDATA.fleets.combined,FLEETS1[0],FLEETS1[1],FLEETS2[0],supportfleet,null,doNB,NBonly,aironly,landbomb,false,BAPI,true);
	else res = sim(FLEETS1[0],FLEETS2[0],supportfleet,null,doNB,NBonly,aironly,landbomb,false,BAPI,true);
	CHAPI.battles.push(BAPI);
	$('#code').val(JSON.stringify(CHAPI)); //remove?
	
	res.NBonly = NBonly;
	res.landbomb = landbomb;
	res.noammo = mapdata.subonly;
	CHDATA.temp = res;
	//update morale after NB select
	
	stage = STAGEBATTLE;
	stage.addChild(bg);
	radar1.scale.set(0); radar2.scale.set(0);
	stage.addChild(radar1);
	stage.addChild(radar2);
	dots1.alpha = dots2.alpha = 0;
	stage.addChild(dots1);
	stage.addChild(dots2);
	
	bossBarReset();
	eventqueue = [[shuttersPrebattle,[]]]; e = -1;
	processAPI(CHAPI);
	NBSELECT = false;
	for (var i=0; i<eventqueue.length; i++) {
		if (eventqueue[i][0] == shutters) { eventqueue[i][0] = shuttersSelect; break; }
	}
	if (mapdata.boss && lastdance && res.flagsunk) {
		var shipid = compd.c[0];
		if (VOICES[shipid] && VOICES[shipid]['sunk']) {
			var sndindex = eventqueue.length;
			var snd = SM._sounds['Vsunk'+shipid] = new Howl({
				src:[VOICES[shipid]['sunk']],
				volume:.4*SM._volume,
				html5:true,
				onload: function() {
					var waittime = this.duration()*1000 + 2000;
					eventqueue.splice(sndindex,0,[wait,[waittime]]);
				}
			});
		}
	}
	eventqueue.push([shuttersPostbattle,[]]);
	eventqueue.push([showResults,[]]);
	shutterTop2.y = 0; shutterBottom2.y = 210;
	if (!MAPDATA[WORLD].maps[MAPNUM].nodes[letter].end) {
		if (CHDATA.fleets.combined) eventqueue.push([FCFSelect,[]]);
		eventqueue.push([continueSelect,[]]);
		eventqueue.push([wait,[1000]]);
	} else {
		eventqueue.push([endMap,[]]);
	}
	addTimeout(function() { ecomplete = true; }, 1);
}

function prepMap() {
	if (!MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].end) {
		stage = STAGEMAP;
		eventqueue = []; e = -1;
		chResetMapSpritePos();
		mapPhase(true);
	} else {
		eventqueue.push([endMap,[]]);
	}
	addTimeout(function() { ecomplete = true; }, 1);
}

function endMap() {
	chReturnSortie();
	ONSORTIE = false;
	
	var cleared = false;
	if (CHDATA.event.maps[MAPNUM].hp <= 0 && CHDATA.event.unlocked == MAPNUM) {
		CHDATA.event.unlocked++;
		cleared = true;
	}
	
	addTimeout(function() {
		$('#battlespace').hide();
		$('#sortiespace').show();
		chLoadSortieInfo(CHDATA.event.mapnum);
		SM.stopBGM();
		ecomplete = true; 
		pushShipStatusToUI();
		chUIRemoveSunk();
		$('#noclick').hide();
		if (cleared) {
			var reward = MAPDATA[WORLD].maps[MAPNUM].reward;
			if (reward) { chAddReward(reward); chShowReward(reward); }
		}
		
		if (MAPDATA[WORLD].maps[MAPNUM].debuffCheck && !CHDATA.event.maps[MAPNUM].debuffed) {
			if (MAPDATA[WORLD].maps[MAPNUM].debuffCheck(CHDATA.event.maps[MAPNUM].debuff)) {
				CHDATA.event.maps[MAPNUM].debuffed = true;
				alert('DEBUFF');
			}
		}
		
		chSave();
	}, 1500);
}

function shuttersPrebattle() {
	shutterTop2.y = 20; shutterBottom2.y = 230;
	updates.push([function() {
		shutterTop2.y -= 20;
		shutterBottom2.y += 20;
		if (shutterTop2.y <= -246) {
			shutterTop2.y = -246;
			shutterBottom2.y = 456;
			return true;
		}
		return false;
	},[]]);
	SM.play('shutters');
	addTimeout(function() { ecomplete = true; }, 500);
}

function shuttersPostbattle(noshutters) {
	// RATE = 1;
	if (!noshutters) {
		shutterTop.alpha = shutterBottom.alpha = 1;
		updates.push([closeShutters,[]]);
		SM.play('shutters');
	}
	if (bossbar.active) {  //update map hp
		CHDATA.event.maps[MAPNUM].hp = bossbar.nowhp;
		if (bossbar.nowhp <= 0) CHDATA.event.maps[MAPNUM].hp++;  //add 1 if -1 (sunk) or 0 (not sunk)
	}
	chUpdateMorale();
	chUpdateSupply();
	pushShipStatusToUI();
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].debuffGive) {
		if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
				MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].debuffGive(FLEETS2[0],FLEETS1);
	}
	FLEETS1[0].reset(true);
	if (CHDATA.fleets.combined) FLEETS1[1].reset(true);
	CHDATA.temp.done = true;
	addTimeout(function() {
		stage.removeChildren();
		stage.addChild(bg);
		stage.addChild(shutterTop2); stage.addChild(shutterBottom2);
		stage.addChild(shutterTop); stage.addChild(shutterBottom);
		for (var i=0; i<fleet1.length; i++) {
			fleet1[i].shakepid = 0; if (fleet1[i].graphic.pivot) fleet1[i].graphic.pivot.x = 0; // if (fleet1[i].shakepid) clearInterval(fleet1[i].shakepid);
			//for (var j=0; j<fleet1[i].graphic.children.length; j++) fleet1[i].graphic.getChildAt(j).destroy();
			//fleet1[i].graphic.destroy();
		}
		for (var k=0; k<allfleets2.length; k++) {
			for (var i=0; i<allfleets2[k].length; i++) {
				var ship = allfleets2[k][i];
				ship.shakepid = 0; if (ship.graphic.pivot) ship.graphic.pivot.x = 0;// if (ship.shakepid) clearInterval(ship.shakepid);
				// for (var j=0; j<ship.graphic.children.length; j++) ship.graphic.getChildAt(j).destroy();
				// ship.graphic.destroy();
			}
		}
		allfleets2 = [];
		while (dots1.children.length) recycle(dots1.getChildAt(0));
		while (dots2.children.length) recycle(dots2.getChildAt(0));
		$('#plEngage').text('');
		$('#plEngageT').text('');
		$('#plAS1').text('');
		$('#plAS2').text('');
		
		shutterTop2.y = 0; shutterBottom2.y = 210;
	}, 500);
	
	// addTimeout(function() {
		// updates.push([function() {
			// shutterTop.alpha-=.1;
			// shutterBottom.alpha-=.1;
			// return (shutterTop.alpha <= 0);
		// },[]]);
	// }, 1000);
	
	// addTimeout(function() { ecomplete = true; }, 1166);
	addTimeout(function() { ecomplete = true; }, 600);
}

function ResultBar(x,y,color) {
	this.g = new PIXI.Container();
	this.barBack = new PIXI.Graphics();
	this.barBack.beginFill(0xffffff);
	this.barBack.drawRoundedRect(x,y,240,12,7);
	this.g.addChild(this.barBack);
	this.mask = new PIXI.Graphics();
	this.mask.beginFill(0x000000);
	this.mask.drawRoundedRect(x,y,240,12,7);
	this.g.addChild(this.mask);
	this.barFront = new PIXI.Graphics();
	this.barFront.beginFill(color);
	this.barFront.drawRoundedRect(x-240,y,240,12,7);
	this.barFront.mask = this.mask;
	this.g.addChild(this.barFront);
}
var resultBar1 = new ResultBar(93,163,0x00ff00);
var resultBar2 = new ResultBar(414,163,0xff0000);

function showResults() {
	var resultback = getFromPool('resultback','assets/maps/resultback.png');
	resultback.y = resultback.pivot.y = 240;
	resultback.scale.y = 0;
	stage.addChild(resultback);
	updates.push([function() {
		resultback.scale.y += .05;
		if (resultback.scale.y >= 1) {
			resultback.scale.y = 1;
			return true;
		}
	},[]]);
	
	for (let i=0; i<fleet1.length; i++) {
		fleet1[i].graphic.position.set(232,186+45*i+20);
		fleet1[i].graphic.alpha = 0;
		fleet1[i].graphic.getChildAt(0).visible = false;
		fleet1[i].graphic.getChildAt(1).visible = false;
		fleet1[i].graphic.getChildAt(3).visible = false;
		fleet1[i].graphic.getChildAt(4).visible = false;
		stage.addChild(fleet1[i].graphic);
		addTimeout(function() {
			updates.push([function() {
				fleet1[i].graphic.y -= 2;
				fleet1[i].graphic.alpha += .1;
				if (fleet1[i].graphic.alpha >= 1) {
					fleet1[i].graphic.alpha = 1;
					return true;
				}
			},[]]);
		}, i*100);
	}
	for (let i=0; i<fleet2.length; i++) {
		fleet2[i].graphic.position.set(409,186+45*i+20);
		fleet2[i].graphic.alpha = 0;
		fleet2[i].graphic.getChildAt(0).visible = false;
		fleet2[i].graphic.getChildAt(1).visible = false;
		fleet2[i].graphic.getChildAt(3).visible = false;
		fleet2[i].graphic.getChildAt(4).visible = false;
		stage.addChild(fleet2[i].graphic);
		addTimeout(function() {
			updates.push([function() {
				fleet2[i].graphic.y -= 2;
				fleet2[i].graphic.alpha += .1;
				if (fleet2[i].graphic.alpha >= 1) {
					fleet2[i].graphic.alpha = 1;
					return true;
				}
			},[]]);
		}, i*100+300);
	}
	
	let max1 = 0, max2 = 0, now1 = 0, now2 = 0;
	for (let ship of FLEETS1[0].ships) {
		now1 += Math.max(0,ship.HP);
		max1 += Math.max(0,ship.HPprev);
	}
	if (CHDATA.fleets.combined) {
		for (let ship of FLEETS1[1].ships) {
			now1 += Math.max(0,ship.HP);
			max1 += Math.max(0,ship.HPprev);
		}
	}
	for (var i=0; i<fleet2.length; i++) {
		now2 += Math.max(0,fleet2[i].hp);
		max2 += Math.max(0,fleet2[i].hpmax);
	}
	var hptarget1 = 1-(now2/max2), hptarget2 = 1-(now1/max1);
	resultBar1.g.alpha = 0;
	resultBar1.g.x = -20;
	resultBar1.barFront.x = 0;
	resultBar1.timer = 0;
	stage.addChild(resultBar1.g);
	updates.push([function() {
		if (resultBar1.g.x < 0) { resultBar1.g.x += 2; resultBar1.g.alpha += .1; }
		else resultBar1.g.alpha = 1;
		resultBar1.barFront.x = 240*hptarget1*resultBar1.timer/50;
		return (++resultBar1.timer > 50);
	},[]]);
	resultBar2.g.alpha = 0;
	resultBar2.g.x = 20;
	resultBar2.barFront.x = 0;
	resultBar2.timer = 0;
	stage.addChild(resultBar2.g);
	updates.push([function() {
		if (resultBar2.g.x > 0) { resultBar2.g.x -= 2; resultBar2.g.alpha += .1; }
		else resultBar2.g.alpha = 1;
		resultBar2.barFront.x = 240*hptarget2*resultBar2.timer/50;
		return (++resultBar2.timer > 50);
	},[]]);
	
	addTimeout(function() {
		updates.push([function() {
			resultBar2.g.x += 20;
			for (let ship of fleet2) ship.graphic.x += 20;
			return (resultBar2.g.x >= 500);
		},[]]);
	},1300);
	
	var rlaurel;
	addTimeout(function() {
		rlaurel = getFromPool('resultlaurel','assets/maps/resultlaurel.png');
		rlaurel.pivot.set(121,121);
		rlaurel.position.set(592,240);
		rlaurel.alpha = 0;
		rlaurel.scale.set(2);
		stage.addChild(rlaurel);
		updates.push([function() {
			rlaurel.alpha += .05;
			rlaurel.scale.set(rlaurel.scale.x-.05);
			if (rlaurel.alpha >= 1) {
				rlaurel.alpha = 1;
				rlaurel.scale.set(1);
				return true;
			}
		},[]]);
	}, 1700);
	
	var rgraphic, mvpicon;
	addTimeout(function() {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		var rsize;
		switch(rank) {
			case 'S':
				rsize = 240;
				rgraphic = getFromPool('rankS','assets/maps/rankS.png');
				SM.playBGM(3001,null,true);
				break;
			case 'A':
				rsize = 140
				rgraphic = getFromPool('rankA','assets/maps/rankA.png');
				SM.playBGM(3002,null,true);
				break;
			case 'B':
				rsize = 140;
				rgraphic = getFromPool('rankB','assets/maps/rankB.png');
				SM.playBGM(3003,null,true);
				break;
			case 'C':
				rsize = 140;
				rgraphic = getFromPool('rankC','assets/maps/rankC.png');
				SM.playBGM(3004,null,true);
				break;
			case 'D':
				rsize = 140;
				rgraphic = getFromPool('rankD','assets/maps/rankD.png');
				SM.playBGM(3004,null,true);
				break;
			case 'E':
				rsize = 140;
				rgraphic = getFromPool('rankE','assets/maps/rankE.png');
				SM.playBGM(3004,null,true);
				break;
		}
		rgraphic.position.set(592,238);
		rgraphic.pivot.set(121,121);
		rgraphic.size = rsize+300;
		rgraphic.scale.set(rgraphic.size/242);
		rgraphic.alpha = 0;
		stage.addChild(rgraphic);
		updates.push([function() {
			rgraphic.alpha = Math.min(1,rgraphic.alpha+.05);
			rgraphic.size -= 15;
			rgraphic.scale.set(rgraphic.size/242);
			return (rgraphic.size <= rsize);
		},[]]);
		
		var mvpindex = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.mvpDay : CHDATA.temp.MVP;
		mvpicon = getFromPool('mvp','assets/stats/MVP.png');
		mvpicon.alpha = 0;
		mvpicon.position.set(400,191+45*mvpindex);
		stage.addChild(mvpicon);
		updates.push([function() {
			mvpicon.alpha += .025;
			if (mvpicon.alpha >= 1) {
				mvpicon.alpha = 1;
				return true;
			}
		},[]]);
		
	},2000);
	
	addTimeout(function() {
		SCREENCLICKFUNCTION = function() {
			SCREENCLICKFUNCTION = screenClickBlank;
			recycle(resultback);
			stage.removeChild(resultBar1.g);
			stage.removeChild(resultBar2.g);
			recycle(rgraphic);
			recycle(mvpicon);
			recycle(rlaurel);
			for (let ship of fleet1) stage.removeChild(ship.graphic);
			for (let ship of fleet2) stage.removeChild(ship.graphic);
			if (CHDATA.fleets.combined) for (let ship of fleet1C) stage.removeChild(ship.graphic);
			addTimeout(function() {
				updates.push([function() {
					shutterTop.alpha-=.1;
					shutterBottom.alpha-=.1;
					return (shutterTop.alpha <= 0);
				},[]]);
			}, 100);
			addTimeout(function() { SM.fadeBGM(); ecomplete = true; }, 266);
		}
	},2000);
}

function FCFSelect() {
	var retreater, escorter;
	if (FLEETS1[0].ships[0].hasFCF && FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP > .25) {
		var d = getFCFShips(FLEETS1[0].ships,FLEETS1[1].ships);
		retreater = d[0]; escorter = d[1];
	}
	if (!(retreater && escorter)) {
		addTimeout(function() { ecomplete = true; }, 1);
		return;
	}
	
	stage.addChild(mapFCFyesbutton[1]);
	stage.addChild(mapFCFyesbutton[0]);
	stage.addChild(mapFCFnobutton[1]);
	stage.addChild(mapFCFnobutton[0]);
	mapFCFyesbutton[0].position.set(201,301); 
	mapFCFyesbutton[1].position.set(201,301); 
	mapFCFnobutton[0].position.set(419,301); 
	mapFCFnobutton[1].position.set(419,301);
	mapFCFyesbutton[0].interactive = mapFCFnobutton[0].interactive = true;
	
	var retreaterG = (retreater.isescort)? fleet1C[retreater.id].graphic : fleet1[retreater.id].graphic;
	var escorterG = (escorter.isescort)? fleet1C[escorter.id].graphic : fleet1[escorter.id].graphic;
	stage.removeChild(retreaterG); stage.addChild(retreaterG);
	stage.removeChild(escorterG); stage.addChild(escorterG);
	retreaterG.position.set(230,180);
	escorterG.position.set(230,230);
	retreaterG.removeChild(retreaterG.mask); escorterG.removeChild(escorterG.mask);
	retreaterG.mask = null; escorterG.mask = null;
	
	var afterSelect = function() {
		if (FCFSELECT) {
			retreater.retreated = escorter.retreated = true;
			retreater.morale = escorter.morale = 0;
			retreater.fuelleft = escorter.fuelleft = 0;
		}
	
		mapFCFyesbutton[0].interactive = mapFCFnobutton[0].interactive = false;
		mapFCFyesbutton[0].alpha = mapFCFnobutton[0].alpha = 1;
		mapFCFyesbutton[1].alpha = mapFCFnobutton[1].alpha = 0;
		updates.push([function() {
			mapFCFyesbutton[0].x -= 15;
			mapFCFnobutton[0].x += 15;
			if (retreaterG.alpha > 0) retreaterG.alpha -= .05;
			if (escorterG.alpha > 0) escorterG.alpha -= .05;
			return (mapFCFnobutton[0].x >= 800);
		},[]]);
		
		addTimeout(function() {
			ecomplete = true;
			stage.removeChild(mapFCFyesbutton[0]); stage.removeChild(mapFCFyesbutton[1]); 
			stage.removeChild(mapFCFnobutton[0]); stage.removeChild(mapFCFnobutton[1]); 
			stage.removeChild(retreaterG); stage.removeChild(escorterG); 
		}, 500);
	};
	
	mapFCFyesbutton[0].callback = mapFCFnobutton[0].callback = afterSelect;
}

function continueSelect() {
	if (FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP <= .25) {
		if (!FLEETS1[0].ships[0].repairs || !FLEETS1[0].ships[0].repairs.length) {
			eventqueue.push([endMap,[]]);
			addTimeout(function() { ecomplete = true; }, 1);
			return;
		}
	}
	
	stage.addChild(mapcontinuebutton[1]);
	stage.addChild(mapcontinuebutton[0]);
	stage.addChild(mapretreatbutton[1]);
	stage.addChild(mapretreatbutton[0]);
	mapcontinuebutton[0].position.set(201,162); 
	mapcontinuebutton[1].position.set(201,162); 
	mapretreatbutton[0].position.set(412,161); 
	mapretreatbutton[1].position.set(412,161);
	var afterSelect = function() {
		if (CONTINUESELECT) eventqueue.push([prepMap,[]]);
		else eventqueue.push([endMap,[]]);
	
		mapcontinuebutton[0].interactive = mapretreatbutton[0].interactive = false;
		mapcontinuebutton[0].alpha = mapretreatbutton[0].alpha = 1;
		mapcontinuebutton[1].alpha = mapretreatbutton[1].alpha = 0;
		updates.push([function() {
			mapcontinuebutton[0].x -= 15;
			mapretreatbutton[0].x += 15;
			return (mapretreatbutton[0].x >= 800);
		},[]]);
		
		addTimeout(function() {
			ecomplete = true;
			stage.removeChild(mapcontinuebutton[0]); stage.removeChild(mapcontinuebutton[1]); 
			stage.removeChild(mapretreatbutton[0]); stage.removeChild(mapretreatbutton[1]);
			mapcontinuebutton[0].interactive = mapretreatbutton[0].interactive = true;
		}, 500);
	};
	
	mapcontinuebutton[0].callback = mapretreatbutton[0].callback = afterSelect;
}

function shuttersSelect() {
	shutterTop.alpha = shutterBottom.alpha = 1;
	updates.push([closeShutters,[]]);
	SM.play('shutters');
	
	mapNBnobutton[0].position.set(226,188); mapNBnobutton[1].position.set(207,170);
	mapNByesbutton[0].position.set(441,188); mapNByesbutton[1].position.set(422,170);
	mapNByesbutton[0].interactive = mapNBnobutton[0].interactive = true;
	
	addTimeout(function() {
		stage.addChild(mapNBnobutton[0]); stage.addChild(mapNBnobutton[1]); 
		stage.addChild(mapNByesbutton[0]); stage.addChild(mapNByesbutton[1]);
		stage.removeChild(bg);
		stage.addChildAt(bg2,0);
	}, 500);
	
	var afterNBSelect = function() {
		mapNBnobutton[0].interactive = mapNByesbutton[0].interactive = false;
		mapNBnobutton[0].alpha = mapNByesbutton[0].alpha = 1;
		mapNBnobutton[1].alpha = mapNByesbutton[1].alpha = 0;
		updates.push([function() {
			mapNBnobutton[0].x -= 15;
			mapNByesbutton[0].x += 15;
			return (mapNByesbutton[0].x >= 800);
		},[]]);
		if (NBSELECT==1) {
			addTimeout(function() {
				updates.push([openShutters,[]]);
				SM.play('shutters');
			}, 700);
			addTimeout(function(){ ecomplete = true; }, 1700);
		} else {
			rollBackNightBattle();
			for (; e < eventqueue.length; e++) {
				if (eventqueue[e][0] == shuttersPostbattle) { eventqueue[e][1] = [true]; break; }
			}
			SM.fadeBGM();
			addTimeout(function(){
				mapNByesbutton[0].interactive = mapNBnobutton[0].interactive = true;
				stage.removeChild(mapNBnobutton[0]); stage.removeChild(mapNBnobutton[1]); 
				stage.removeChild(mapNByesbutton[0]); stage.removeChild(mapNByesbutton[1]);
				ecomplete = true;
			}, 1000);
		}
	};
	
	mapNBnobutton[0].callback = afterNBSelect;
	mapNByesbutton[0].callback = afterNBSelect;
}

function rollBackNightBattle() {
	for (var i=0; i<fleet1.length; i++) { //roll back HP to pre-NB
		FLEETS1[0].ships[i].HP = fleet1[i].hp;
		if (FLEETS1[0].ships[i].HP/FLEETS1[0].ships[i].HPmax > .25) FLEETS1[0].ships[i].protection = true;
		if (FLEETS1[0].ships[i].repairs) FLEETS1[0].ships[i].repairs = CHDATA.temp.repairsDay[i].slice();
	}
	for (var i=0; i<fleet1C.length; i++) {
		FLEETS1[1].ships[i].HP = fleet1C[i].hp;
		if (FLEETS1[1].ships[i].HP/FLEETS1[1].ships[i].HPmax > .25) FLEETS1[1].ships[i].protection = true;
		if (FLEETS1[1].ships[i].repairs) FLEETS1[1].ships[i].repairs = CHDATA.temp.repairsDayC[i].slice();
	}
}

function chUIRemoveSunk() {
	var found = false;
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		var sid = CHDATA.fleets[1][i];
		if (!sid) continue;
		var ship = CHDATA.ships[sid];
		if (ship.HP[0] <= 0) {
			ship.disabled = true;
			for (var j=0; j<ship.items.length; j++) {
				if (ship.items[j] == -1) continue;
				CHDATA.gears['x'+ship.items[j]].disabled = true;
			}
			chTableRemoveShip(1,i+1);
			found = true;
		}
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			var sid = CHDATA.fleets[2][i];
			if (!sid) continue;
			var ship = CHDATA.ships[sid];
			if (ship.HP[0] <= 0) {
				ship.disabled = true;
				for (var j=0; j<ship.items.length; j++) {
					if (ship.items[j] == -1) continue;
					CHDATA.gears['x'+ship.items[j]].disabled = true;
				}
				chTableRemoveShip(2,i+1);
				found = true;
			}
		}
	}
	if (found) {
		DIALOGSORT = null;
		chFillDialogShip(1);
	}
}

function pushShipStatusToUI() {
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		chPushHP(1,i+1,FLEETS1[0].ships[i].HP);
		chPushResupply(1,i+1,FLEETS1[0].ships[i].fuelleft,FLEETS1[0].ships[i].ammoleft,FLEETS1[0].ships[i].planecount);
		chPushMorale(1,i+1,FLEETS1[0].ships[i].morale);
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			chPushHP(2,i+1,FLEETS1[1].ships[i].HP);
			chPushResupply(2,i+1,FLEETS1[1].ships[i].fuelleft,FLEETS1[1].ships[i].ammoleft,FLEETS1[1].ships[i].planecount);
			chPushMorale(2,i+1,FLEETS1[1].ships[i].morale);
		}
	}
	if (CHDATA.fleets.supportN && FLEETS1S[0]) {
		for (var i=0; i<FLEETS1S[0].ships.length; i++) {
			chPushResupply(3,i+1,FLEETS1S[0].ships[i].fuelleft,FLEETS1S[0].ships[i].ammoleft,FLEETS1S[0].ships[i].planecount);
			chPushMorale(3,i+1,FLEETS1S[0].ships[i].morale);
		}
	}
	if (CHDATA.fleets.supportB && FLEETS1S[1]) {
		for (var i=0; i<FLEETS1S[1].ships.length; i++) {
			chPushResupply(4,i+1,FLEETS1S[1].ships[i].fuelleft,FLEETS1S[1].ships[i].ammoleft,FLEETS1S[1].ships[i].planecount);
			chPushMorale(4,i+1,FLEETS1S[1].ships[i].morale);
		}
	}
}

function chUpdateMorale() {
	var results = CHDATA.temp;
	var rank = (!results.NBonly && !NBSELECT)? results.rankDay : results.rank;
	var mvp = (!results.NBonly && !NBSELECT)? results.mvpDay : results.MVP;
	var didNB = (!results.NBonly && NBSELECT);
	if (!CHDATA.fleets.combined) {
		updateMorale(FLEETS1[0].ships,rank,mvp,results.NBonly,didNB);
	} else {
		var mvpc = (!results.NBonly && !NBSELECT)? results.mvpDayC : results.MVPC;
		console.log('ESCORT MVP: '+mvpc);
		updateMorale(FLEETS1[0].ships,rank,((didNB)? 0 : mvp),results.NBonly,didNB);
		updateMorale(FLEETS1[1].ships,rank,mvpc,results.NBonly,didNB);
	}
}

function chUpdateSupply() {
	var results = CHDATA.temp;
	var base = (results.landbomb)? .5 : 2;
	var didNB = (results.rankDay && NBSELECT);
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		var ship = FLEETS1[0].ships[i];
		if (ship.retreated) continue;
		ship.fuelleft -= base;
		if (!results.noammo) ship.ammoleft -= base + 1*didNB;
		if (ship.fuelleft < 0) ship.fuelleft = 0;
		if (ship.ammoleft < 0) ship.ammoleft = 0;
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			var ship = FLEETS1[1].ships[i];
			if (ship.retreated) continue;
			ship.fuelleft -= base;
			if (!results.noammo) ship.ammoleft -= base + 1*didNB;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
		}
	}
}

function chReturnSortie() {
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		if (!FLEETS1[0].supportType) FLEETS1[0].ships[i].morale -= 15;
		if (FLEETS1[0].ships[i].morale < 49) FLEETS1[0].ships[i].morale = 49;
	}
	if (CHDATA.fleets.combined && FLEETS1[1]) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			if (!FLEETS1[1].supportType) FLEETS1[1].ships[i].morale -= 15;
			if (FLEETS1[1].ships[i].morale < 49) FLEETS1[1].ships[i].morale = 49;
		}
	}
	if (CHDATA.fleets.supportN && FLEETS1S[0]) {
		var moralecost = 1 + Math.floor(5*Math.random());
		for (var i=0; i<FLEETS1S[0].ships.length; i++) {
			var ship = FLEETS1S[0].ships[i];
			ship.fuelleft -= 5;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (FLEETS1S[0].supportType == 1) ship.ammoleft -= 4;
			else ship.ammoleft -= 8;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.morale -= moralecost;
			if (ship.morale < 49) ship.morale = 49;
		}
	}
	if (CHDATA.fleets.supportB && FLEETS1S[1]) {
		var moralecost = 1 + Math.floor(10*Math.random());
		for (var i=0; i<FLEETS1S[1].ships.length; i++) {
			var ship = FLEETS1S[1].ships[i];
			ship.fuelleft -= 5;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (FLEETS1S[1].supportType == 1) ship.ammoleft -= 4;
			else ship.ammoleft -= 8;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.morale -= moralecost;
			if (ship.morale < 49) ship.morale = 49;
		}
	}
}

function chUIUpdateResources() {
	if (!CHDATA.event.resources) return;
	$('#resfuel').text(CHDATA.event.resources.fuel);
	$('#resammo').text(CHDATA.event.resources.ammo);
	$('#ressteel').text(CHDATA.event.resources.steel);
	$('#resbaux').text(CHDATA.event.resources.baux);
}