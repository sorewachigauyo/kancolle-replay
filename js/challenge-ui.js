var CHDATA = {};
var FILE = 1;
var EVENTNUM = 27;
var DIALOGSLOTSEL = -1;
var DIALOGITEMSEL = -1;
var DIALOGFLEETSEL = 1;
var DIALOGSORT = -1;
var ITEMNODES = [];
const CHITEMSMAX = 5; //also used as ex slot index

var MECHANICDATES = {
	flagProtect: '2013-08-25',
	aswSynergy: '2014-02-26',
	artillerySpotting: '2014-04-23',
	fitGun: '2014-07-28',
	APmod: '2014-10-10',
	improvement: '2014-10-24',
	AACI: '2014-11-14',
	fixFleetAA: '2015-06-26',
	proficiency: '2015-08-10',
	OASW: '2016-06-30',
	engineSynergy: '2017-01-10',
	shellingSoftCap: '2017-03-17',
	CVCI: '2017-09-12',
	destroyerNBCI: '2017-10-25',
	aswSoftCap: '2017-11-10',
	LBASBuff: '2017-11-17',
	equipBonus: '2017-12-22',
	installRevamp: '2018-08-17',
	specialAttacks: '2018-09-08',
	echelonBuff: '2019-02-27',
	aaResist: '2019-03-22',
	zuiunCI: '2019-03-27',
	divebomberInstall: '2019-03-27',
};

var MECHANICDATESOTHER = {
	luckMod: '2013-12-24',
	marriage: '2014-02-14',
	marriage155: '2015-12-08',
	marriage165: '2017-07-31',
	hpMod: '2017-09-29',
	marriage175: '2018-08-17',
};

SHIPDATA[5001] = {
	name: 'Base 1',
	image: 'LBAS1.png',
	type: 'LandBase',
	SLOTS: [18,18,18,18],
	fuel: 0,
	ammo: 0,
}
SHIPDATA[5002] = {
	name: 'Base 2',
	image: 'LBAS2.png',
	type: 'LandBase',
	SLOTS: [18,18,18,18],
	fuel: 0,
	ammo: 0,
}
SHIPDATA[5003] = {
	name: 'Base 3',
	image: 'LBAS3.png',
	type: 'LandBase',
	SLOTS: [18,18,18,18],
	fuel: 0,
	ammo: 0,
}

$('#shipselectdialog').dialog({autoOpen:false,width:400,height:600,modal:true,open:function() {$(this).scrollTop(0);}});
$('#dialogselequip').dialog({autoOpen:false,width:400,height:600,modal:true,open:function() {$(this).scrollTop(0);} });

function chCreateFleetTable(root,num,name,noheader) {
	var divWrap = $('<div class="ftwrap"></div>');
	$(root).append(divWrap);
	if (!noheader) {
		divWrap.append('<div class="ftinfo" style="width:125px">'+name+'</div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Air Power" src="assets/stats/ac.png"/><span id="fleetap'+num+'"></span></div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Effective LoS" src="assets/stats/los3.png"/><span id="fleetefflos'+num+'"></span></div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Fleet Speed" src="assets/stats/sp.png"/><span id="fleetspd'+num+'"></span></div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Transport Load-Off" src="assets/items/25.png" style="margin-top:-6px"/><span id="fleettransport'+num+'"></span></div>');
		divWrap.append('<br style="clear:both"/>');
	}
	let numShips = (num == 1)? 7 : 6;
	for (var i=1; i<=numShips; i++) {
		var table = $('<table class="t2" id="fleet'+num+i+'"></table>');
		table.append($('<tr class="t2show"><td colspan="4"><div style="text-align:center"><div class="t2name" id="fleetname'+num+i+'" onclick="chDialogShip('+num+','+i+')">Slot '+i+'</div></div></td></tr>'));
		table.append($('<tr class="t2show"><td colspan="4"><img src="assets/icons/Kblank.png" class="t2portrait" id="fleetimg'+num+i+'"/><img id="fleetlock'+num+i+'" src="" class="t2lock"/></td></tr>'));
		var tr = $('<tr></tr>');
		tr.append($('<td><span>Lv. </span><span class="t2lvlnum" id="fleetlvl'+num+i+'"></span></td>'));
		tr.append($('<td><div class="t2morale" id="fleetmorale'+num+i+'" onclick="chClickMorale('+num+','+i+')"><span></span></div></td>'));
		var td = $('<td colspan="2" class="t2hpcell" onclick="chRepairOne('+num+','+i+')" onmouseover="chPreviewRepair('+num+','+i+');chShowHoverBox(\'hbRepair\',this)" onmouseout="chHideHoverBox(\'hbRepair\')"></td>');
		td.append($('<div style="float:right"><span id="fleethp'+num+i+'"></span><div class="t2hpouter"><div class="t2hpinner" id="fleethbar'+num+i+'"></div></div></div>'));
		tr.append(td);
		table.append(tr);
		tr = $('<tr></tr>');
		var stats = ['fp','tp','aa','ar'];
		for (var j=0; j<4; j++)
			tr.append($('<td><div class="t2stat"><img src="assets/stats/'+stats[j]+'.png"/><span id="fleet'+stats[j]+num+i+'"></span></div></td>'));
		table.append(tr);
		tr = $('<tr></tr>');
		stats = ['ev','los','asw','lk'];
		for (var j=0; j<4; j++)
			tr.append($('<td><div class="t2stat"><img src="assets/stats/'+stats[j]+'.png"/><span id="fleet'+stats[j]+num+i+'"></span></div></td>'));
		table.append(tr);
		tr = $('<tr></tr>');
		tr.append($('<td colspan="2"><div class="t2stat"><img src="assets/stats/rn.png"/><span id="fleetrn'+num+i+'"></span></div></td>'));
		tr.append($('<td colspan="2"><div class="t2stat"><img src="assets/stats/sp.png"/><span id="fleetsp'+num+i+'"></span></div></td>'));
		table.append(tr);
		for (var j=1; j<=CHITEMSMAX+1; j++) {
			var tr = $('<tr></tr>');
			var td = $('<td colspan="4" onclick="chDialogItem('+num+','+j+','+i+')"></td>');
			var dclass = (j == CHITEMSMAX+1)? 't2equipex t2equip' : 't2equip';
			var dstyle = (j <= 4)? '' : ' style="display:none"';
			var div = $('<div id="fleeteq'+num+j+i+'" class="'+dclass+'"'+dstyle+'></div>');
			div.append($('<img src="assets/items/empty.png" id="fleeteqi'+num+j+i+'"/>'));
			div.append($('<span class="t2slotnum" id="fleeteqs'+num+j+i+'"></span>'));
			div.append($('<span class="t2imprnum" id="fleeteqimpr'+num+j+i+'"></span>'));
			div.append($('<span id="fleeteqn'+num+j+i+'"></span>'));
			td.append(div); tr.append(td); table.append(tr);
		}
		tr = $('<tr class="t2unequiprow"></tr>');
		tr.append($('<div title="Unequip All" onclick="chUnequipAllShip('+num+', '+i+')">&#x1F5D9;</div>'));
		table.append(tr);
		tr = $('<tr class="t2supplyrow" onclick="chResupplyOne('+num+','+i+')" onmouseover="if ($(this).css(\'visibility\')!=\'hidden\') {chPreviewResupply('+num+','+i+');chShowHoverBox(\'hbResupply\',this)}" onmouseout="chHideHoverBox(\'hbResupply\')"></tr>');
		tr.append($('<td colspan="2"><img src="assets/stats/fuel.png"/><div class="t2resouter"></div><div id="fuelbar'+num+i+'" class="t2resinner" style="background-color:#00CC00"></div></td>'));
		tr.append($('<td colspan="2"><img src="assets/stats/ammo.png"/><div class="t2resouter"></div><div id="ammobar'+num+i+'" class="t2resinner" style="background-color:#999900"></div></td>'));
		table.append(tr);
		divWrap.append(table);
		
		chAddDragShip(num,i);
		for (let j=1; j<=CHITEMSMAX; j++) chAddDragEquip(num,i,j);
		
		if (i == 7) table.hide();
	}
	divWrap.append('<br style="clear:both"/>');
	divWrap.append('<select class="presetSelect" id="presets' + num + '" name="presets' + num + '" style="width:150px" tabIndex="-1"></select>');
	divWrap.append('<button id="presetLoad' + num + '" onclick="chLoadFleetPreset(' + num + ', true)" tabIndex="-1">Load Preset (With Equips)</button>');
	divWrap.append('<button id="presetLoadN' + num + '" onclick="chLoadFleetPreset(' + num + ', false)" tabIndex="-1">Load Preset (Ships Only)</button>');
	divWrap.append('<button id="presetSave' + num + '" onclick="chSaveFleetPreset(' + num + ')" style="margin-left:10px" tabIndex="-1">Save Preset</button>');
	divWrap.append('<button id="presetDelete' + num + '" onclick="chDeleteFleetPreset(' + num + ')" tabIndex="-1">Delete Preset</button>');
}
function chCreateFleetTableLBAS(root,num) {
	var divWrap = $('<div class="ftwrap"></div>');
	$(root).append(divWrap);
	for (var i=1; i<=6; i++) {
		var table = $('<table class="t2" id="fleet'+num+i+'"></table>');
		if (i >= 4) { divWrap.append(table); continue; }
		table.append($('<tr class="t2show"><td colspan="4"><div style="text-align:center"><div class="t2name" id="fleetname'+num+i+'">Base '+i+'</div></div></td></tr>'));
		table.append($('<tr class="t2show"><td colspan="4"><img src="assets/icons/LBAS'+i+'.png" class="t2portrait" id="fleetimg'+num+i+'"/></td></tr>'));
		var tr = $('<tr></tr>');
		tr.append($('<td colspan="2"><div class="t2stat"><img src="assets/stats/rn.png"/><span id="fleetlbrn'+num+i+'"></span></div></td>'));
		tr.append($('<td colspan="1"><div class="t2stat"><img title="Sortie Air Power" src="assets/stats/ac.png"/><span id="fleetlbac'+num+i+'"></span></div></td>'));
		tr.append($('<td colspan="1"><div class="t2stat"><img title="Intercept Air Power" src="assets/stats/divebomb.png"/><span id="fleetlbab'+num+i+'"></span></div></td>'));
		table.append(tr);
		for (var j=1; j<=4; j++) {
			var tr = $('<tr></tr>');
			var td = $('<td colspan="4" onclick="chDialogItem('+num+','+j+','+i+')"></td>');
			var div = $('<div id="fleeteq'+num+j+i+'" class="t2equip"></div>');
			div.append($('<img id="fleeteqi'+num+j+i+'"/>'));
			div.append($('<span class="t2slotnum" id="fleeteqs'+num+j+i+'"></span>'));
			div.append($('<span class="t2imprnum" id="fleeteqimpr'+num+j+i+'"></span>'));
			div.append($('<span id="fleeteqn'+num+j+i+'"></span>'));
			td.append(div); tr.append(td); table.append(tr);
		}
		tr = $('<tr class="t2supplyrow" onclick="chResupplyOne('+num+','+i+')" onmouseover="if ($(this).css(\'visibility\')!=\'hidden\') {chPreviewResupply('+num+','+i+');chShowHoverBox(\'hbResupply\',this)}" onmouseout="chHideHoverBox(\'hbResupply\')"></tr>');
		tr.append($('<td colspan="4"><img src="assets/stats/baux.png"/></td>'));
		table.append(tr);
		divWrap.append(table);
		
		for (let j=1; j<=CHITEMSMAX; j++) chAddDragEquip(num,i,j);
	}
}
chCreateFleetTable('#mainfleetspace',1,'Main Fleet');
chCreateFleetTable('#escortfleetspace',2,'Escort Fleet',true);
chCreateFleetTable('#supportfleetspace1',3,'Normal Support');
chCreateFleetTable('#supportfleetspace2',4,'Boss Support');
chCreateFleetTableLBAS('#lbasspace',5,'Land Base');

function chAddDragShip(fleetnum,slot) {
	let imgPortrait = $('#fleetimg'+fleetnum+slot);
	imgPortrait.on('dragstart',function(event) {
		DIALOGFLEETSEL = fleetnum;
		DIALOGSLOTSEL = slot;
		DIALOGITEMSEL = null;
	});
	imgPortrait.on('dragover',function(event) {
		if (DIALOGFLEETSEL == fleetnum && DIALOGSLOTSEL != slot && DIALOGITEMSEL == null) {
			event.originalEvent.preventDefault();
		}
	});
	imgPortrait.on('drop',function(event) {
		event.originalEvent.preventDefault();
		let sid = CHDATA.fleets[DIALOGFLEETSEL][DIALOGSLOTSEL-1];
		if (sid) chTableSetShip(sid,fleetnum,slot);
	});
	imgPortrait.on('dragend',function(event) {
		DIALOGFLEETSEL = DIALOGSLOTSEL = null;
	});
}
function chAddDragEquip(fleetnum,shipslot,eqslot) {
	let imgEq = $('#fleeteqi'+fleetnum+eqslot+shipslot);
	imgEq.on('dragstart',function(event) {
		DIALOGFLEETSEL = fleetnum;
		DIALOGSLOTSEL = shipslot;
		DIALOGITEMSEL = eqslot;
	});
	imgEq.on('dragover',function(event) {
		if (DIALOGFLEETSEL == fleetnum && DIALOGSLOTSEL == shipslot && DIALOGITEMSEL != eqslot) {
			let sid = CHDATA.fleets[DIALOGFLEETSEL][DIALOGSLOTSEL-1];
			if (eqslot > SHIPDATA[CHDATA.ships[sid].masterId].SLOTS.length) return;
			if (DIALOGITEMSEL > SHIPDATA[CHDATA.ships[sid].masterId].SLOTS.length) return;
			event.originalEvent.preventDefault();
		}
	});
	imgEq.on('drop',function(event) {
		event.originalEvent.preventDefault();
		let sid = CHDATA.fleets[DIALOGFLEETSEL][DIALOGSLOTSEL-1];
		if (sid) {
			let eqid1 = CHDATA.ships[sid].items[DIALOGITEMSEL-1];
			let eqid2 = CHDATA.ships[sid].items[eqslot-1];
			chTableSetEquip(eqid1,DIALOGFLEETSEL,DIALOGSLOTSEL,eqslot);
			chShipEquipItem(sid,-1,DIALOGITEMSEL-1);
			chShipEquipItem(sid,eqid1,eqslot-1);
			chTableSetEquip(eqid2,DIALOGFLEETSEL,DIALOGSLOTSEL,DIALOGITEMSEL);
			chShipEquipItem(sid,eqid2,DIALOGITEMSEL-1);
			chTableSetShip(sid, DIALOGFLEETSEL, DIALOGSLOTSEL);
		}
	});
	imgEq.on('dragend',function(event) {
		DIALOGFLEETSEL = DIALOGSLOTSEL = DIALOGITEMSEL = null;
	});
}

$('#tabsupportN').attr('value',1);
$('#tabsupportB').attr('value',1);
$('#tabLBAS').attr('value',1);

function chClickedTab(tab) {
	var id = $(tab).attr('id');
	$(tab).attr('value',null);
	if (id != 'tabmain') {
		$('#tabmain').attr('value',1);
		$('#mainfleetspacewrap').hide();
	} else {
		$('#mainfleetspacewrap').show();
	}
	if (id != 'tabsupportN') {
		$('#tabsupportN').attr('value',1);
		$('#supportfleetspace1wrap').hide();
	} else {
		$('#supportfleetspace1wrap').show();
	}
	if (id != 'tabsupportB') {
		$('#tabsupportB').attr('value',1);
		$('#supportfleetspace2wrap').hide();
	} else {
		$('#supportfleetspace2wrap').show();
	}
	if (id != 'tabLBAS') {
		$('#tabLBAS').attr('value',1);
		$('#lbasspacewrap').hide();
	} else {
		$('#lbasspacewrap').show();
	}
}

function chFillDialogShip(sortmethod) {
	if (sortmethod == DIALOGSORT) return;
	var table = $('#shipselecttable');
	table.html('');
	var ships = [];
	for (var sid in CHDATA.ships) {
		if (CHDATA.ships[sid].disabled) continue; //don't allow unreleased ships
		ships.push(sid);
	}
	switch (sortmethod) {
		case 1: //level
			ships.sort(function(a,b) { return (CHDATA.ships[a].LVL > CHDATA.ships[b].LVL)? -1:1; }); break;
		case 2: //mid
			ships.sort(function(a,b) { return (CHDATA.ships[a].masterId < CHDATA.ships[b].masterId)? -1:1; }); break;
		case 3: //name
			ships.sort(function(a,b) { return (SHIPDATA[CHDATA.ships[a].masterId].name < SHIPDATA[CHDATA.ships[b].masterId].name)? -1:1; }); break;
		default: //id
			break;
	}
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		var shipd = SHIPDATA[ship.masterId];
		var tr = $('<tr id="ss'+ships[i]+'" onclick="chTableSetShip(\''+ships[i]+'\',DIALOGFLEETSEL,DIALOGSLOTSEL);chDialogShipClose()"></tr>');
		tr.append($('<td class="left" style="width:40px">'+ship.LVL+'</td>'));
		tr.append($('<td style="width:120px">'+shipd.name+'</td>'));
		tr.append($('<td style="width:40px">'+shipd.type+'</td>'));
		var htmllock = (ship.lock)? '<img src="assets/maps/lock'+ship.lock+'.png" style="position:absolute;margin-left:30px;margin-top:-3px"/>' : '';
		tr.append($('<td class="right">'+htmllock+'<img src="assets/icons/'+shipd.image+'" /></td>'));
		table.append(tr);
	}
	
	DIALOGSORT = sortmethod;
}

function chFilterDialogShip(types) {
	var sidnow = CHDATA.fleets[DIALOGFLEETSEL][DIALOGSLOTSEL-1];
	$('#shipselecttable tr').each(function() {
		var sid = $(this).attr('id').replace('ss','');
		if (sid == sidnow
			|| types && types.indexOf(SHIPDATA[CHDATA.ships[sid].masterId].type) == -1
			|| !chCanJoinFleet(sid,DIALOGFLEETSEL,DIALOGSLOTSEL)) $(this).hide();
		else $(this).show();
	});
	if (sidnow) {
		for (var fleetnum in CHDATA.fleets)  {
			if (!parseInt(fleetnum)) continue
			if (fleetnum == DIALOGFLEETSEL) continue;
			for (var i=0; i<CHDATA.fleets[fleetnum].length; i++) {
				if (!CHDATA.fleets[fleetnum][i]) continue;
				var tr = $('#ss'+CHDATA.fleets[fleetnum][i]);
				if (tr.css('display')=='none') continue;
				if (!chCanJoinFleet(sidnow,fleetnum,i+1)) tr.hide();
			}
		}
	}
}

function chCanJoinFleet(sid,fleet,slot) {
	for (var i=0; i<CHDATA.fleets[fleet].length; i++) {
		if (slot == i+1) continue;
		var sid2 = CHDATA.fleets[fleet][i];
		if (!sid2) continue;
		if (sid == sid2) return true;
		if (sameShip(CHDATA.ships[sid].masterId,CHDATA.ships[sid2].masterId)) return false;
	}
	return true;
}

function chDialogShip(fleet,slot) {
	DIALOGFLEETSEL = fleet;
	DIALOGSLOTSEL = slot;
	$('#shipselectdialog').dialog('open');
	chFillDialogShip(1);
	chFilterDialogShip();
}

function chDialogShipClose() {
	$('#shipselectdialog').dialog('close');
}

function chDialogItemInit() {
	$('#equipfilters').append('<img id="itemfilter1" class="itemfilter" src="assets/items/1.png" onclick="chDialogItemFilter(1)"/>');
	$('#equipfilters').append('<img id="itemfilter13" class="itemfilter" src="assets/items/2.png" onclick="chDialogItemFilter(13)"/>');
	$('#equipfilters').append('<img id="itemfilter14" class="itemfilter" src="assets/items/3.png" onclick="chDialogItemFilter(14)"/>');
	$('#equipfilters').append('<img id="itemfilter2" class="itemfilter" src="assets/items/4.png" onclick="chDialogItemFilter(2)"/>');
	$('#equipfilters').append('<img id="itemfilter3" class="itemfilter" src="assets/items/5.png" onclick="chDialogItemFilter(3)"/>');
	$('#equipfilters').append('<img id="itemfilter4" class="itemfilter" src="assets/items/10.png" onclick="chDialogItemFilter(4)"/>');
	$('#equipfilters').append('<img id="itemfilter5" class="itemfilter" src="assets/items/6.png" onclick="chDialogItemFilter(5)"/>');
	$('#equipfilters').append('<img id="itemfilter6" class="itemfilter" src="assets/items/7.png" onclick="chDialogItemFilter(6)"/>');
	$('#equipfilters').append('<img id="itemfilter7" class="itemfilter" src="assets/items/8.png" onclick="chDialogItemFilter(7)"/>');
	$('#equipfilters').append('<img id="itemfilter8" class="itemfilter" src="assets/items/9.png" onclick="chDialogItemFilter(8)"/>');
	$('#equipfilters').append('<img id="itemfilter9" class="itemfilter" src="assets/items/11.png" onclick="chDialogItemFilter(9)"/>');
	$('#equipfilters').append('<img id="itemfilter10" class="itemfilter" src="assets/items/17.png" onclick="chDialogItemFilter(10)"/>');
	$('#equipfilters').append('<img id="itemfilter11" class="itemfilter" src="assets/items/13.png" onclick="chDialogItemFilter(11)"/>');
	$('#equipfilters').append('<img id="itemfilter15" class="itemfilter" src="assets/items/15.png" onclick="chDialogItemFilter(15)"/>');
	$('#equipfilters').append('<img id="itemfilter16" class="itemfilter" src="assets/items/19.png" onclick="chDialogItemFilter(16)"/>');
	$('#equipfilters').append('<img id="itemfilter17" class="itemfilter" src="assets/items/24.png" onclick="chDialogItemFilter(17)"/>');
	$('#equipfilters').append('<img id="itemfilter12" class="itemfilter" src="assets/items/25.png" onclick="chDialogItemFilter(12)"/>');

	var table = $('#equipselecttable');
	var STATS = ['DIVEBOMB','FP','TP','AA','AR','ACC','EV','ASW','LOS'];
	var itemids = [];
	for (var itemid in CHDATA.gears) itemids.push(itemid);
	itemids.sort(function(a,b) {
		var eqid1 = CHDATA.gears[a].masterId;
		var equip1 = EQDATA[eqid1];
		if (equip1 == undefined) return 1;
		var eqid2 = CHDATA.gears[b].masterId;
		var equip2 = EQDATA[eqid2];
		if (equip2 == undefined) return 1;
		if (equip1.type != equip2.type) return (equip1.type < equip2.type)? -1:1;
		return (eqid1 <= eqid2)? -1:1;
	});
	for (var i=0; i<itemids.length; i++) {
		var itemid = itemids[i];
		var eqid = CHDATA.gears[itemid].masterId;
		var equip = EQDATA[eqid];
		//if (types.indexOf(equip.type)==-1) continue;
		//var shiptype = SHIPDATA[CHDATA.ships[CHDATA.fleets[1][DIALOGSLOTSEL-1]].masterId].type;
		//if (EQTDATA[equip.type].canequip.indexOf(shiptype) == -1) continue;
		var tr = $('<tr id="'+itemid+'" value="'+itemid+'"></tr>');
		// tr.append('<td class="left" onclick="dSetEquip('+eqid+')"><img src="assets/items/'+EQTDATA[equip.type].image+'.png"/></td>');
		// var td = $('<td onclick="dSetEquip('+itemid+')"></td>');
		// td.append('<span>'+equip.name+'</span><br>');
		// for (var j=0; j<STATS.length; j++) {
			// if (equip[STATS[j]]) td.append('<span><img class="imgstat" src="assets/stats/'+STATS[j].toLowerCase()+'.png"/>'+equip[STATS[j]]+'</span>');
		// }
		// tr.append(td);
		table.append(tr);
	}
}

function chDialogShowItems(shipmid,types) {
	var STATS = ['DIVEBOMB','FP','TP','AA','AR','ACC','EV','ASW','LOS'];
	var shiptype = SHIPDATA[shipmid].type;
	$('#equipselecttable tr').each(function() {
		var include = true;
		var itemid = this.id;
		var item = CHDATA.gears[itemid];
		var eqid = item.masterId;
		var equip = EQDATA[eqid];
		if (item.disabled) include = false;
		if (include && types.indexOf(equip.type)==-1) include = false;
		if (include && EQTDATA[equip.type].cannotequipS && EQTDATA[equip.type].cannotequipS.indexOf(shipmid) != -1) include = false;
		if (include && EQTDATA[equip.type].canequip.indexOf(shiptype) == -1 && (!EQTDATA[equip.type].canequipS||EQTDATA[equip.type].canequipS.indexOf(shipmid) == -1)) include = false;
		if (include && DIALOGITEMSEL == CHITEMSMAX+1) {
			let found = false;
			let dateC = (MAPDATA[WORLD].date > CHDATA.config.mechanicsdate)? MAPDATA[WORLD].date : CHDATA.config.mechanicsdate;
			for (let date in EXPANSIONSLOTDATA) {
				if (date > dateC) continue;
				if (EXPANSIONSLOTDATA[date].types && EXPANSIONSLOTDATA[date].types.indexOf(equip.type) != -1) { found = true; break; }
				if (EXPANSIONSLOTDATA[date].special && EXPANSIONSLOTDATA[date].special.indexOf(eqid) != -1) { found = true; break; }
				if (EXPANSIONSLOTDATA[date].specialS && EXPANSIONSLOTDATA[date].specialS[eqid] && EXPANSIONSLOTDATA[date].specialS[eqid].indexOf(shipmid) != -1) { found = true; break; }
			}
			if (!found) include = false;
		}
		
		if (include) {
			$(this).css('display','');
			if (!this.innerHTML) {
				var tr = $(this);
				
				tr.append('<td class="left" onclick="chSetEquip(\''+itemid+'\')"><img src="assets/items/'+EQTDATA[equip.type].image+'.png"/></td>');
				var td = $('<td onclick="chSetEquip(\''+itemid+'\')"></td>');
				td.append('<div style="position:absolute;z-index:1;margin-top:-10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:300px">'+equip.name+'</div><br>');
				var div = $('<div style="position:absolute;z-index:1;margin-top:-10px"></div>');
				for (var j=0; j<STATS.length; j++) {
					if (equip[STATS[j]]) div.append('<span><img class="imgstat" src="assets/stats/'+STATS[j].toLowerCase()+'.png"/>'+equip[STATS[j]]+'</span>');
				}
				td.append(div);
				if (CHDATA.config.mechanics.proficiency && item.ace>0) td.append($('<div style="position:absolute;margin-left:-5px;margin-top:-20px"><img src="assets/stats/prof'+item.ace+'.png" /></div>'));
				if (chAllowImprovement(eqid) && item.stars>0) td.append($('<div style="position:absolute;margin-left:-30px;margin-top:-1px;font-weight:bold;color:#45A9A5">+'+item.stars+'</div>'));
				tr.append(td);
				
				td.append('<img id="'+this.id+'bgimg" class="equipbgimg" />');
			}
			if (item.heldBy) { 
				$('#'+this.id+'bgimg').attr('src','assets/icons/'+SHIPDATA[CHDATA.ships[item.heldBy].masterId].image);
			} else {
				$('#'+this.id+'bgimg').attr('src',null);
			}
		} else {
			$(this).css('display','none');
		}
	});
}

function chDialogItem(fleet,eqnum,slot) {
	var shipid = CHDATA.fleets[fleet][slot-1];
	if (shipid <= 0) return;
	if (shipid && SHIPDATA[CHDATA.ships[shipid].masterId].SLOTS.length < eqnum && eqnum != CHITEMSMAX+1) return;
	if (eqnum == CHITEMSMAX+1 && !CHDATA.ships[shipid].ex) return;
	DIALOGFLEETSEL = fleet;
	DIALOGSLOTSEL = slot;
	DIALOGITEMSEL = eqnum;
	$('#dialogselequip').dialog('open');
	var defcat;
	if (eqnum == CHITEMSMAX+1) {
		defcat = 12;
	} else {
		switch(SHIPDATA[CHDATA.ships[shipid].masterId].type) {
			case 'CVL': case 'CV': case 'CVB': case 'LHA': defcat = 5; break;
			case 'CL': case 'CLT': case 'CT': case 'CA': case 'CAV': defcat = 13; break;
			case 'FBB': case 'BB': case 'BBV': defcat = 14; break;
			case 'SS': case 'SSV': defcat = 3; break;
			case 'LandBase': defcat = 6; break;
			default: defcat = 1; break;
		}
	}
	chDialogItemFilter(defcat);
}

function chDialogItemFilter(category) {
	var mid = CHDATA.ships[CHDATA.fleets[DIALOGFLEETSEL][DIALOGSLOTSEL-1]].masterId;
	var types;
	switch (category) {
		default: case 1: types=[MAINGUNS,MAINGUNSAA]; break;
		case 13: types=[MAINGUNM]; break;
		case 14: types=[MAINGUNL,MAINGUNXL]; break;
		case 2: types=[SECGUN,SECGUNAA]; break;
		case 3: types=[TORPEDO,TORPEDOSS,MIDGETSUB]; break;
		case 4: types=[SEAPLANE,SEAPLANEBOMBER,SEAPLANEFIGHTER,FLYINGBOAT]; break;
		case 5: types=[FIGHTER,INTERCEPTOR]; break;
		case 6: types=[DIVEBOMBER,LANDBOMBER]; break;
		case 7: types=[TORPBOMBER]; break;
		case 8: types=[CARRIERSCOUT,AUTOGYRO,ASWPLANE,JETBOMBER,JETSCOUT,CARRIERSCOUT2,LANDSCOUT]; break;
		case 9: types=[RADARS,RADARL,RADARXL]; break;
		case 10: types=[DEPTHCHARGE,SONARS,SONARL]; break;
		case 11: types=[APSHELL,TYPE3SHELL]; break;
		case 15: types=[AAGUN]; break;
		case 16: types=[ENGINE]; break;
		case 17: types=[SEARCHLIGHTS,SEARCHLIGHTL,STARSHELL,PICKET]; break;
		case 12: types=[BULGEM,BULGEL,AAFD,LANDINGCRAFT,LANDINGTANK,WG42,SRF,FCF,DRUM,SCAMP,REPAIR,SUBRADAR,TRANSPORTITEM,RATION,OILDRUM]; break;
	}
	chDialogShowItems(mid,types);
	
	$('.itemfilter').each(function() { $(this).css('background-color',''); });
	$('#itemfilter'+category).css('background-color','#78BEB5');
}

function chSetEquip(itemid) {
	if (itemid!=-1) itemid = parseInt(itemid.substr(1));
	chTableSetEquip(itemid,DIALOGFLEETSEL,DIALOGSLOTSEL,DIALOGITEMSEL);
	var shipid = CHDATA.fleets[DIALOGFLEETSEL][DIALOGSLOTSEL-1];
	
	var item = CHDATA.gears['x'+itemid];
	
	if (item && item.heldBy) {
		var oldship = CHDATA.ships[item.heldBy];
		var fleetnum, otherslot;
		for (fleetnum in CHDATA.fleets) {
			if (!parseInt(fleetnum)) continue;
			otherslot = CHDATA.fleets[fleetnum].indexOf(item.heldBy);
			if (otherslot != -1) break;
		}
		chShipEquipItem(item.heldBy,-1,oldship.items.indexOf(itemid));
		// console.log(fleetnum+' '+otherslot);
		if (otherslot != -1) chTableSetShip(CHDATA.fleets[fleetnum][otherslot], fleetnum, otherslot+1);
	}
	chShipEquipItem(shipid,itemid,DIALOGITEMSEL-1);
	chTableSetShip(shipid, DIALOGFLEETSEL, DIALOGSLOTSEL);
	
	
	$('#dialogselequip').dialog('close');
	
	if (item && DIALOGFLEETSEL == 5) { //LBAS only
		var type = EQDATA[item.masterId].type;
		var num = (type == SEAPLANE || type == CARRIERSCOUT || type == FLYINGBOAT || type == LANDSCOUT)? 4 : (MAPDATA[WORLD].lbasSlotCount || 18);
		CHDATA.event.resources.baux += num * LBASDATA[item.masterId].cost;
		chUIUpdateResources();
	}
}

function chShipEquipItem(shipid,itemid,slot) {
	var stats = ['FP','TP','AA','AR','ASW','LOS','EV','ACC','LUK'];
	var ship = CHDATA.ships[shipid];
	var olditemid = ship.items[slot];
	if (olditemid > 0) {
		var oldeqd = EQDATA[CHDATA.gears['x'+olditemid].masterId];
		if (oldeqd == undefined) return;
		for (var i=0; i<stats.length; i++) {
			if (oldeqd[stats[i]]) ship[stats[i]]-=oldeqd[stats[i]];
		}
		CHDATA.gears['x'+olditemid].heldBy = null;
	}
	
	if (itemid > 0) {
		var neweqd = EQDATA[CHDATA.gears['x'+itemid].masterId];
		for (var i=0; i<stats.length; i++) {
			if (neweqd[stats[i]]) ship[stats[i]]+=neweqd[stats[i]];
		}
		CHDATA.gears['x'+itemid].heldBy = shipid;
		
		if (shipid[0] == 'z') {
			let num = chGetLBASNumPlanes(CHDATA.gears['x'+itemid]);
			SHIPDATA[ship.masterId].SLOTS[slot] = ship.planes[slot] = num;
		}
	}
	
	if (CHDATA.config.mechanics.equipBonus) {
		let eqids = [];
		for (let iid of ship.items) {
			if (iid <= 0) eqids.push(0);
			else eqids.push(CHDATA.gears['x'+iid].masterId);
		}
		let bonusesInit = getBonusStats(ship.masterId,eqids);
		eqids[slot] = (itemid <= 0)? 0 : CHDATA.gears['x'+itemid].masterId;
		let bonusesAfter = getBonusStats(ship.masterId,eqids);
		
		for (let key in bonusesInit) bonusesAfter[key] = (bonusesAfter[key] || 0) - (bonusesInit[key] || 0);
		for (let key in bonusesAfter) ship[key] += bonusesAfter[key];
	}
	
	ship.items[slot] = itemid;
	
	ship.RNG = SHIPDATA[ship.masterId].RNG || 1;
	var hasTurbine = false, hasBoiler = false;
	for (let item of ship.items) {
		if (item < 0 || !item) continue;
		if (!EQDATA[CHDATA.gears['x'+item].masterId]) continue;
		if (EQDATA[CHDATA.gears['x'+item].masterId].RNG > ship.RNG) ship.RNG = EQDATA[CHDATA.gears['x'+item].masterId].RNG;
		
		if (CHDATA.config.mechanics.engineSynergy) {
			if (CHDATA.gears['x'+item].masterId == 33) hasTurbine = true;
			else if (EQDATA[CHDATA.gears['x'+item].masterId].type == ENGINE) hasBoiler = true;
		}
	}
	if (hasTurbine && hasBoiler) {
		ship.SPD = SHIPDATA[ship.masterId].SPD + 5;
	} else if (ship.SPD != undefined) {
		delete ship.SPD;
	}
}

function chGetLBASNumPlanes(item) {
	if (!EQDATA[item.masterId]) return (MAPDATA[WORLD].lbasSlotCount || 18);
	let type = EQDATA[item.masterId].type;
	let num = (type == SEAPLANE || type == CARRIERSCOUT || type == FLYINGBOAT || type == LANDSCOUT)? 4 : (MAPDATA[WORLD].lbasSlotCount || 18);
	return num;
}

//------------------------

function chLoadKC3File() {
	var files = document.getElementById('fileKC3').files;
	var reader = new FileReader();
	reader.readAsText(files[0]);
	reader.addEventListener('loadend',function() { chProcessKC3File(reader); });
	console.log('LOAD');
}

function getEvasion(ship, level){
	return ship.EVbase + Math.floor((ship.EV - ship.EVbase) * (level/99));
}

function getASW(ship, level){
	return ship.ASWbase + Math.floor((ship.ASW - ship.ASWbase) * (level/99));
}

function getLOS(ship, level){
	return ship.LOSbase + Math.floor((ship.LOS - ship.LOSbase) * (level/99));
}

function chProcessImportOther(ships,equipments,name,level){
	CHDATA = {};
	CHDATA.kcdata = {};
	CHDATA.kcdata.player = {};
	CHDATA.kcdata.player.name = name;
	CHDATA.kcdata.player.level = level;

	CHDATA.kcdata.gears = {};
	var equip = {};
	var id = 1;
	for (let equipment of equipments){
		equip = {};
		equip.itemId = id;
		equip.masterId = equipment.api_slotitem_id;
		if (!EQDATA[equip.masterId]) continue;
		equip.stars = equipment.api_level;
		equip.lock = 1;
		
		if(EQTDATA[EQDATA[equip.masterId].type].isPlane && EQDATA[equip.masterId].type != AUTOGYRO && EQDATA[equip.masterId].type != ASWPLANE){
			equip.ace = 7;
		}

		CHDATA.kcdata.gears["x"+id++] = equip;
	}

	CHDATA.kcdata.ships = {};
	var ship = {};
	id = 1;
	for (let ship_data of ships){
		ship = {
			hp: [],
			fp: [],
			tp: [],
			aa: [],
			ar: [],
			ev: [],
			as: [],
			ls: [],
			lk: [],
		};
		
		ship.rosterId = id;
		ship.masterId = ship_data.api_ship_id;
		ship.level = ship_data.api_lv;
		ship.mod = ship_data.api_kyouka

		var ship_base_data = SHIPDATA[ship.masterId];
		if (!ship_base_data) continue;

		// HP = Base HP + Marriage HP + HP Mod
		if(ship.level > 99){
			let HPmarriage = [4,4,4,5,6,7,7,8,8,9][Math.floor(ship_base_data.HP/10)] || 9;
			ship.hp[0] = ship.hp[1] = ship_base_data.HP + (HPmarriage || 0) + ship.mod[5];
		}else{
			ship.hp[0] = ship.hp[1] = ship_base_data.HP + ship.mod[5];
		}

		ship.fp[0] = ship_base_data.FPbase + ship.mod[0];
		ship.fp[1] = ship_base_data.FP;

		ship.tp[0] = ship_base_data.TPbase + ship.mod[1];
		ship.tp[1] = ship_base_data.TP;

		ship.aa[0] = ship_base_data.AAbase + ship.mod[2];
		ship.aa[1] = ship_base_data.AA;

		ship.ar[0] = ship_base_data.ARbase + ship.mod[3];
		ship.ar[1] = ship_base_data.AR;

		ship.ev[0] = getEvasion(ship_base_data, ship.level);
		ship.ev[1] = ship_base_data.EV;

		ship.as[0] = getASW(ship_base_data, ship.level) + ship.mod[6];
		ship.as[1] = ship_base_data.ASW;

		ship.ls[0] = getLOS(ship_base_data, ship.level);
		ship.ls[1] = ship_base_data.LOS;

		ship.lk[0] = ship_base_data.LUK + ship.mod[4];
		ship.lk[1] = ship_base_data.LUKmax;

		ship.range = ship_base_data.RNG;
		ship.speed = ship_base_data.SPD;

		ship.items = [-1, -1, -1, -1, -1];
		ship.slots = ship_base_data.SLOTS;
		ship.slotnum = ship_base_data.SLOTS.length;

		ship.fuel = ship_base_data.fuel;
		ship.ammo = ship_base_data.ammo;

		ship.morale = 49;

		CHDATA.kcdata.ships["x"+id++] = ship;
	}
	
	$('#menusdone').prop('disabled',false);
	$('#menufname').text(CHDATA.kcdata.player.name);
	$('#menufhq').text(CHDATA.kcdata.player.level);
	$('#menufinfo').show();
	$('#menusettings').show();
}

function chProcessKC3File(reader){
	CHDATA = {};
	CHDATA.kcdata = JSON.parse(reader.result);
	$('#menusdone').prop('disabled',false);
	$('#menufrank').text(CHDATA.kcdata.player.rank);
	$('#menufname').text(CHDATA.kcdata.player.name);
	$('#menufhq').text(CHDATA.kcdata.player.level);
	if (CHDATA.kcdata.player.lastPortTime)
		$('#menufdate').text((new Date(CHDATA.kcdata.player.lastPortTime*1000)).toISOString().slice(0,10));
	$('#menufinfo').show();
	$('#menusettings').show();
}

function chProcessKC3File2() {
	var kcdata = CHDATA.kcdata;
	delete CHDATA.kcdata;
	
	CHDATA.player = {
		name: kcdata.player.name,
		rank: kcdata.player.rank,
		level: kcdata.player.level,
		lastPortTime: kcdata.player.lastPortTime,
	};
	CHDATA.gears = kcdata.gears;
	CHDATA.ships = {};
	CHDATA.event = { createtime:Date.now(), lasttime:0, maps:{}, world:EVENTNUM, mapnum:1, unlocked:1, resources: { fuel: 0, ammo: 0, steel: 0, baux: 0 } };
	if (MAPDATA[EVENTNUM].unlockDefault) CHDATA.event.unlocked = MAPDATA[EVENTNUM].unlockDefault;
	else if (CHDATA.config.unlockAll) {
		for (let n=1; n<100; n++) {
			if (!MAPDATA[EVENTNUM].maps[n]) { CHDATA.event.unlocked = n-1; break; }
		}
	}
	CHDATA.fleets = {1:[null,null,null,null,null,null],2:[null,null,null,null,null,null],3:[null,null,null,null,null,null],4:[null,null,null,null,null,null],combined:0};
	if (MAPDATA[EVENTNUM].allowFleets.indexOf(7) != -1) CHDATA.fleets[1].push(null);
	if (!CHDATA.config) CHDATA.config = {};
	CHDATA.config.mechanics = {};
	var mechanicsdate = CHDATA.config.mechanicsdate || MAPDATA[CHDATA.event.world].date;
	for (var mechanic in MECHANICDATES) {
		CHDATA.config.mechanics[mechanic] = (MECHANICDATES[mechanic] <= mechanicsdate);
	}
	let dataDate = (CHDATA.config.mechanicsdate < MAPDATA[EVENTNUM].date)? MAPDATA[EVENTNUM].date : CHDATA.config.mechanicsdate;
	setShipDataDate(dataDate);
	setEquipDataDate(dataDate);
	CHDATA.config.shelldmgbase = (CHDATA.config.mechanics.shellingSoftCap)? 180 : 150;
	CHDATA.config.aswdmgbase = (CHDATA.config.mechanics.aswSoftCap)? 150 : 100;
	
	for (var mapnum in MAPDATA[EVENTNUM].maps) {
		CHDATA.event.maps[mapnum] = { visited:[], hp:null };
		if (CHDATA.config.diffmode == 1) {
			CHDATA.event.maps[mapnum].hp = getMapHP(EVENTNUM,mapnum,2);
			CHDATA.event.maps[mapnum].diff = 2;
		}
		if (MAPDATA[EVENTNUM].maps[mapnum].parts) {
			mapChangePart(EVENTNUM,mapnum,1);
			CHDATA.event.maps[mapnum].part = 1;
		}
	}
	var stats = ['FP','TP','AA','AR','EV','ASW','LOS'];
	for (var sid in kcdata.ships) {
		var shipO = kcdata.ships[sid];
		var shipd = SHIPDATA[shipO.masterId];
		if (!shipd || !shipd.SLOTS) continue;
		var shipN = CHDATA.ships[sid] = {};
		shipN.masterId = shipO.masterId;
		shipN.LVL = shipO.level;
		shipN.HP = [shipO.hp[1],shipO.hp[1]];
		shipN.FP = shipO.fp[0];
		shipN.TP = shipO.tp[0];
		shipN.AA = shipO.aa[0];
		shipN.AR = shipO.ar[0];
		shipN.LUK = shipO.lk[0];
		shipN.EV = shipO.ev[0];
		shipN.ASW = shipO.as[0];
		shipN.LOS = shipO.ls[0];
		shipN.RNG = shipO.range;
		shipN.items = shipO.items;
		for (let i=shipN.items.length; i<CHITEMSMAX; i++) shipN.items.push(-1);
		shipN.items[CHITEMSMAX] = shipO.ex_item || -1;
		if (shipO.ex_item != 0 && CHDATA.config.mechanicsdate >= '2015-08-10') shipN.ex = 1;
		shipN.planes = shipd.SLOTS;
		shipN.fuel = 10;
		shipN.ammo = 10;
		shipN.morale = 49;
		
		if (dataDate < MECHANICDATESOTHER.luckMod) {
			shipN.LUK = shipd.LUK;
		}
		if (dataDate < MECHANICDATESOTHER.marriage) {
			if (shipN.LVL > 99) {
				shipN.LVL = 99;
				// let hpPlus = [4,4,4,5,6,7,7,8,8,9][Math.floor(shipd.HP/10)] || 9;
				// hpPlus = Math.min(hpPlus,shipd.HPmax - shipd.HP);
				if (shipN.LUK - shipd.LUK <= 6) shipN.LUK = shipd.LUK;
			}
			shipN.HP[0] = shipN.HP[1] = shipd.HP; //assumes no HP mod possible
		} else if (dataDate < MECHANICDATESOTHER.marriage155) {
			if (shipN.LVL > 150) shipN.LVL = 150;
		} else if (dataDate < MECHANICDATESOTHER.marriage165) {
			if (shipN.LVL > 155) shipN.LVL = 155;
		} else if (dataDate < MECHANICDATESOTHER.marriage175) {
			if (shipN.LVL > 165) shipN.LVL = 165;
		}
		if (dataDate < MECHANICDATESOTHER.hpMod) {
			if (shipN.LVL <= 99) shipN.HP[0] = shipN.HP[1] = shipd.HP;
		} else if (shipN.HP[0] - shipd.HP > 2) {
			if (shipN.LVL <= 99) shipN.HP[0] = shipN.HP[1] = shipd.HP + 2;
		}
		
		//remove bonus stats/other unsupported stat changes + update for marriage level change
		for (let stat of stats) {
			let num = shipN[stat];
			for (let item of shipN.items) {
				if (item <= 0) continue;
				let eqdata = EQDATA[CHDATA.gears['x'+item].masterId];
				if (!eqdata) {
					CHDATA.gears['x'+item].heldBy = null;
					shipN.items[shipN.items.indexOf(item)] = -1;
					continue;
				}
				num -= eqdata[stat] || 0;
			}
			let numC;
			if (stat == 'ASW') numC = Math.floor(shipd.ASWbase + (shipd.ASW - shipd.ASWbase)*shipN.LVL/99);
			else if (stat == 'LOS') numC = Math.floor(shipd.LOSbase + (shipd.LOS - shipd.LOSbase)*shipN.LVL/99);
			else if (stat == 'EV') numC = Math.floor(shipd.EVbase + (shipd.EV - shipd.EVbase)*shipN.LVL/99);
			else numC = shipd[stat];
			if (num != numC) {
				if (num > numC) console.log(stat + ' ' + num + ' ' + numC + ' ' + shipd.name);
				shipN[stat] = Math.min(num,numC) + (shipN[stat]-num);
				// if (stat == 'ASW' && dataDate >= MECHANICDATESOTHER.hpMod && num - numC > 0 && num - numC <= 9) {
					// shipN[stat] += num - numC;
					// console.log('guess ASW modded' + ' ' + (num-numC));
				// }
			}
		}
		
		if (CHDATA.config.mechanics.equipBonus) { //re-add if enabled
			let eqids = [];
			for (let item of shipN.items) eqids.push((item<=0)? 0 : CHDATA.gears['x'+item].masterId);
			let bonusStats = getBonusStats(shipN.masterId,eqids);
			for (let key in bonusStats) shipN[key] += bonusStats[key];
		}
		
		let disableMore = MAPDATA[EVENTNUM].disableMore && MAPDATA[EVENTNUM].disableMore.ships && MAPDATA[EVENTNUM].disableMore.ships.indexOf(getBaseId(shipN.masterId)) != -1;
		if (CHDATA.config.disableships && (shipd.added > MAPDATA[CHDATA.event.world].date || disableMore)) {
			for (var i=0; i<shipN.items.length; i++) {
				if (shipN.items[i] <= 0) continue;
				if (!EQDATA[CHDATA.gears['x'+shipN.items[i]].masterId]) {
					CHDATA.gears['x'+shipN.items[i]].heldBy = null;
					shipN.items[i] = -1;
					chEmergencyResetStats(shipN,shipO);
					break;
				}
			}
			if (!chRevertShip(shipN,sid) || disableMore) {
				shipN.disabled = true;
				for (var i=0; i<shipN.items.length; i++) chShipEquipItem(sid,-1,i); //unequip items;
			}
		}
		
		chShipEquipItem(sid,-1,CHITEMSMAX); //unequip extra item if not allowed
		
		var shiptype = SHIPDATA[shipN.masterId].type;
		for (var i=0; i<shipN.items.length; i++) {
			if (shipN.items[i] <= 0) continue;
			// unequip items no longer equipable
			let eqdata = EQDATA[CHDATA.gears['x'+shipN.items[i]].masterId];
			if (!eqdata) continue;
			var eqtype = eqdata.type;
			if ((EQTDATA[eqtype].canequip.indexOf(shiptype) == -1 && (!EQTDATA[eqtype].canequipS||EQTDATA[eqtype].canequipS.indexOf(shipN.masterId)==-1)) || (EQTDATA[eqtype].cannotequipS && EQTDATA[eqtype].cannotequipS.indexOf(shipN.masterId)!=-1)) {
				chShipEquipItem(sid,-1,i);
				continue;
			}
			CHDATA.gears['x'+shipN.items[i]].heldBy = sid;
		}
	}
	
	for (var eqid in CHDATA.gears) {
		// if (!CHDATA.config.mechanics.improvement) CHDATA.gears[eqid].stars = 0;
		// if (!CHDATA.config.mechanics.proficiency) CHDATA.gears[eqid].ace = -1;
	
		var eqd = EQDATA[CHDATA.gears[eqid].masterId];
		if (!eqd) {
			if (CHDATA.gears[eqid].heldBy) {
				chEmergencyResetStats(CHDATA.ships[CHDATA.gears[eqid].heldBy],kcdata.ships[CHDATA.gears[eqid].heldBy]);
			}
			delete CHDATA.gears[eqid];
			continue;
		}
		if (CHDATA.config.disableequips && eqd.added > MAPDATA[CHDATA.event.world].date) {
			var item = CHDATA.gears[eqid];
			item.disabled = true;
			if (item.heldBy) {
				var slot = CHDATA.ships[item.heldBy].items.indexOf(parseInt(eqid.substr(1)));
				chShipEquipItem(item.heldBy,-1,slot);
			}
		}
		
		if (CHDATA.gears[eqid].ace >= 1) CHDATA.gears[eqid].ace = 7;
	}
	
	if (MAPDATA[CHDATA.event.world].allowLBAS) {
		for (var i=1; i<=3; i++) {
			var numPlanes = MAPDATA[CHDATA.event.world].lbasSlotCount || 18;
			var lb = {
				masterId: 5000+i,
				HP: [200,200],
				planes: [numPlanes,numPlanes,numPlanes,numPlanes],
				items: [-1,-1,-1,-1],
				disabled: true
			};
			CHDATA.ships['z'+i] = lb;
		}
		CHDATA.fleets[5] = ['z1','z2','z3'];
	}
	
}

function chEmergencyResetStats(shipN,shipO) {
	if (!shipN || !shipO) return;
	for (var i=0; i<shipN.items.length; i++) shipN.items[i] = -1;
	shipN.FP = shipO.fp[1];
	shipN.TP = shipO.tp[1];
	shipN.AA = shipO.aa[1];
	shipN.AR = shipO.ar[1];
	shipN.EV = shipO.ev[1];
	shipN.ASW = shipO.as[1];
	shipN.LOS = shipO.ls[1];
	shipN.RNG = SHIPDATA[shipN.masterId].RNG;
}

function chRevertShip(ship,sid) {
	var shipd = SHIPDATA[ship.masterId];
	var newshipd = SHIPDATA[ship.masterId], newmid = ship.masterId;
	if (newshipd.added <= MAPDATA[CHDATA.event.world].date) return true;
	do {
		if (!newshipd.prev) return false;
		newmid = newshipd.prev;
		newshipd = SHIPDATA[newshipd.prev];
	} while (newshipd.added > MAPDATA[CHDATA.event.world].date);
	
	ship.masterId = newmid;
	ship.HP = [newshipd.HP,newshipd.HP];
	var stats = ['FP','TP','AA','AR','LUK'];
	for (var i=0; i<stats.length; i++) {
		ship[stats[i]] -= (shipd[stats[i]] - newshipd[stats[i]]);
	}
	if (newshipd.SLOTS.length < shipd.SLOTS.length) {
		for (let i=newshipd.SLOTS.length; i<shipd.SLOTS.length; i++) {
			chShipEquipItem(sid,-1,i);
		}
	}
	stats = ['EV','ASW','LOS'];
	for (var i=0; i<stats.length; i++) {
		var base = newshipd[stats[i]+'base'], max = newshipd[stats[i]];
		ship[stats[i]] =  Math.floor(base + (max-base)*ship.LVL/99);
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] == -1) continue;
			var eqd = EQDATA[CHDATA.gears['x'+ship.items[j]].masterId];
			if (eqd) ship[stats[i]] += EQDATA[CHDATA.gears['x'+ship.items[j]].masterId][stats[i]] || 0;
		}
	}
	ship.RNG = newshipd.RNG;
	ship.planes = newshipd.SLOTS;
	
	return true;
}

function chSave() {
	if (!CHDATA.event) return;
	CHDATA.event.lasttime = Date.now();
	if (CHHPREGENTIMER.running) {
		CHDATA.event.regenCounter = CHHPREGENTIMER.counter;
	}
	if (CHDATA.temp && !CHDATA.temp.done) {
		chUpdateMorale();
		chUpdateSupply();
		chReturnSortie()
		pushShipStatusToUI();
		chUIRemoveSunk();
	} else if (ONSORTIE) {
		chReturnSortie();
		pushShipStatusToUI();
		chUIRemoveSunk();
	}
	delete CHDATA.temp;
	delete CHDATA.sortie;
	var basic = {}, data = {};
	basic.event = CHDATA.event;
	basic.config = CHDATA.config;
	basic.player = CHDATA.player;
	data.ships = CHDATA.ships;
	data.gears = CHDATA.gears;
	data.fleets = CHDATA.fleets;
	data.presets = CHDATA.presets;
	localStorage.setItem('ch_basic'+FILE,JSON.stringify(basic));
	localStorage.setItem('ch_data'+FILE,JSON.stringify(data));
	localStorage.setItem('ch_file',FILE);
}

function chDoStartChecks() {
	var errors = [];
	
	var mdata = MAPDATA[WORLD].maps[MAPNUM];
	//fleet type
	var fleetTypes = mdata.fleetTypes;
	var singleonly = (fleetTypes[0] == 0 && fleetTypes.length == 1);
	if (singleonly && CHDATA.fleets.combined) { errors.push('Single fleet is required.'); singleonly = true; }
	else if (fleetTypes.indexOf(0) == -1 && !CHDATA.fleets.combined) errors.push('Combined fleet is required.');
	else if (fleetTypes.indexOf(CHDATA.fleets.combined) == -1) errors.push('Combined fleet type is not allowed.'); //make this more specific?
	else if (CHDATA.fleets.sf && fleetTypes.indexOf(7) == -1) errors.push('Striking Force not allowed');
	
	//empty fleet
	var found = false;
	for (var i=0; i<CHDATA.fleets[1].length; i++) if (CHDATA.fleets[1][i]) { found = true; break; }
	if (!found) { errors.push('Main Fleet is empty.'); return errors; }
	if (!singleonly && CHDATA.fleets.combined) {
		found = false;
		for (var i=0; i<CHDATA.fleets[2].length; i++) if (CHDATA.fleets[2][i]) { found = true; break; }
		if (!found) { errors.push('Escort Fleet is empty.'); return errors; }
	}
	
	chDoStartChecksFleet(1,errors);
	
	var counts = chNewShipCount();
	var flag = null
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		if (!CHDATA.fleets[1][i]) continue;
		if (!flag) flag = CHDATA.fleets[1][i];
		let sdata = SHIPDATA[CHDATA.ships[CHDATA.fleets[1][i]].masterId];
		counts[sdata.type]++;
		if (sdata.type == 'CVL' && sdata.CVEtype) counts.CVE++;
		counts.ids.push(CHDATA.ships[CHDATA.fleets[1][i]].masterId);
		counts.total++;
	}
	if (CHDATA.fleets.combined) {
		var countsE = chNewShipCount();
		var flagE = null;
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			if (!CHDATA.fleets[2][i]) continue;
			if (!flagE) flagE = CHDATA.fleets[2][i];
			countsE[SHIPDATA[CHDATA.ships[CHDATA.fleets[2][i]].masterId].type]++;
			countsE.ids.push(CHDATA.ships[CHDATA.fleets[2][i]].masterId);
			countsE.total++;
		}
	}
	
	if (!singleonly && CHDATA.fleets.combined) {
		chDoStartChecksFleet(2,errors);
		
		if (CHDATA.fleets.combined == 1) {
			if (counts.BB + counts.BBV + counts.FBB > 2) errors.push('Main Fleet: Max 2 BB');
			if (counts.CV + counts.CVL + counts.CVB < 2) errors.push('Main Fleet: Min 2 carriers');
			if (counts.CV + counts.CVL + counts.CVB > 4) errors.push('Main Fleet: Max 4 carriers');
			if (['SS','SSV'].indexOf(SHIPDATA[CHDATA.ships[flag].masterId].type) != -1) errors.push('Main Fleet: Flagship cannot be SS(V)');
		} else if (CHDATA.fleets.combined == 2) {
			if (counts.CL + counts.CLT + counts.CA + counts.CAV + counts.FBB + counts.BB + counts.BBV < 2) errors.push('Main Fleet: Min 2 surface ships');
			var numCV = counts.CV + counts.CVB;
			if ((numCV && numCV + counts.CVL > 1) || (!numCV && counts.CVL > 2)) errors.push('Main Fleet: Max 1 CV or 2 CVL');
			if (counts.FBB + counts.BB + counts.BBV > 4) errors.push('Main Fleet: Max 4 (F)BB(V)');
			if (counts.CA + counts.CAV > 4) errors.push('Main Fleet: Max 4 CA(V)');
			if (['SS','SSV'].indexOf(SHIPDATA[CHDATA.ships[flag].masterId].type) != -1) errors.push('Main Fleet: Flagship cannot be SS(V)');
		} else if (CHDATA.fleets.combined == 3) {
			if (counts.DD < 4) errors.push('Main Fleet: Min 4 DD');
			if (counts.CLT) errors.push('Main Fleet: CLT not allowed');
			if (counts.CA) errors.push('Main Fleet: CA not allowed');
			if (counts.FBB + counts.BB) errors.push('Main Fleet: (F)BB not allowed');
			if (counts.CV+counts.CVB) errors.push('Main Fleet: CV(B) not allowed');
			if (counts.CVL > counts.CVE) errors.push('Main Fleet: Non-escort CVL not allowed');
			if (counts.SS+counts.SSV) errors.push('Main Fleet: SS(V) not allowed');
			if (counts.AR) errors.push('Main Fleet: AR not allowed');
		}
		
		if (CHDATA.fleets.combined == 1 || CHDATA.fleets.combined == 2) {
			if (countsE.CL != 1) errors.push('Escort Fleet: Must have exactly 1 CL');
			if (countsE.DD < 2) errors.push('Escort Fleet: Min 2 DD');
			if (countsE.CA + countsE.CAV > 2) errors.push('Escort Fleet: Max 2 CA(V)');
			if (countsE.FBB > 2) errors.push('Escort Fleet: Max 2 FBB');
			if (countsE.BB + countsE.BBV > 0) errors.push('Escort Fleet: BB(V) not allowed');
			if (countsE.CV + countsE.CVB > 0) errors.push('Escort Fleet: CV not allowed');
			if (countsE.CVL > 1) errors.push('Escort Fleet: Max 1 CVL');
			if (countsE.AV > 1) errors.push('Escort Fleet: Max 1 AV');
			if (['SS','SSV'].indexOf(SHIPDATA[CHDATA.ships[flagE].masterId].type) != -1) errors.push('Escort Fleet: Flagship cannot be SS(V)');
		} else if (CHDATA.fleets.combined == 3) {
			if (['CL','CT'].indexOf(SHIPDATA[CHDATA.ships[flagE].masterId].type) == -1) errors.push('Escort Fleet: Flagship must be CL/CT');
			if (countsE.CL + countsE.CT < 1) errors.push('Escort Fleet: Min 1 CL/CT');
			if (countsE.CL + countsE.CT > 2) errors.push('Escort Fleet: Max 2 CL/CT');
			if (countsE.DD < 3) errors.push('Escort Fleet: Min 3 DD');
			if (countsE.CA + countsE.CAV > 2) errors.push('Escort Fleet: Max 2 CA(V)');
			if (countsE.CLT) errors.push('Escort Fleet: CLT not allowed');
			if (countsE.FBB + countsE.BB + countsE.BBV) errors.push('Escort Fleet: (F)BB(V) not allowed');
			if (countsE.CV+countsE.CVB+countsE.CVL) errors.push('Escort Fleet: CV(L) not allowed');
			if (countsE.SS+countsE.SSV) errors.push('Escort Fleet: SS(V) not allowed');
			if (countsE.AV) errors.push('Escort Fleet: AV not allowed');
			if (countsE.AR) errors.push('Escort Fleet: AR not allowed');
			if (countsE.LHA) errors.push('Escort Fleet: LHA not allowed');
			if (countsE.AS) errors.push('Escort Fleet: AS not allowed');
			if (countsE.AO) errors.push('Escort Fleet: AO not allowed');
		}
	}
	
	if (MAPDATA[WORLD].lockSupport) {
		if (CHDATA.fleets.supportN) {
			for (var i=0; i<CHDATA.fleets[3].length; i++) {
				var ship = CHDATA.fleets[3][i];
				if (!ship) continue;
				if (CHDATA.ships[ship].lock) errors.push(SHIPDATA[CHDATA.ships[ship].masterId].name + ' is locked out of support.');
			}
		}
		if (CHDATA.fleets.supportB) {
			for (var i=0; i<CHDATA.fleets[4].length; i++) {
				var ship = CHDATA.fleets[4][i];
				if (!ship) continue;
				if (CHDATA.ships[ship].lock) errors.push(SHIPDATA[CHDATA.ships[ship].masterId].name + ' is locked out of support.');
			}
		}
	}
	
	if (WORLD == 20 && (CHDATA.fleets.supportN || CHDATA.fleets.supportB) && MAPDATA[WORLD].maps[MAPNUM].world != 5) { //special for classic
		errors.push('Support not allowed');
	}
	
	if (!CHDATA.event.maps[MAPNUM].routes) CHDATA.event.maps[MAPNUM].routes = [];
	if (MAPDATA[WORLD].maps[MAPNUM].additionalChecks) MAPDATA[WORLD].maps[MAPNUM].additionalChecks(counts,errors);
	
	return errors;
}

function chDoStartChecksFleet(fleetnum,errors) {
	var mdata = MAPDATA[WORLD].maps[MAPNUM];
	var first = true;
	for (var i=0; i<CHDATA.fleets[fleetnum].length; i++) {
		ship = CHDATA.ships[CHDATA.fleets[fleetnum][i]];
		if (!ship) continue;
		//flagship damaged
		if (first) {
			if (ship.HP[0]/ship.HP[1] <= .5) {
				if (fleetnum==1) errors.push('Flagship is damaged.');
				else errors.push('Escort flagship is damaged.');
			}
			first = false;
		}
		//ship lock
		if (CHDATA.event.maps[MAPNUM].diff > 1 && CHDATA.event.maps[MAPNUM].diff < 4 && mdata.checkLock && ship.lock && mdata.checkLock.indexOf(ship.lock) != -1)
			errors.push(SHIPDATA[ship.masterId].name + ' is locked to another map.');
		if (CHDATA.event.maps[MAPNUM].diff == 3 && mdata.checkLockHard && ship.lock && mdata.checkLockHard.indexOf(ship.lock) != -1)
			errors.push(SHIPDATA[ship.masterId].name + ' is locked to another map.');
		//empty item slots
		var noitem1 = 0, noitem2 = 0;
		for (var j=0; j<CHITEMSMAX; j++) {
			if (ship.items[j] == -1) {
				noitem2 = j+1;
				if (!noitem1) noitem1 = noitem2;
			} else if (noitem1) {
				if (noitem1 == noitem2) errors.push(SHIPDATA[ship.masterId].name + ' has no equip in slot ' + noitem1 + '.');
				else errors.push(SHIPDATA[ship.masterId].name + ' has no equip in slots ' + noitem1 + '-' + noitem2 + '.');
				break;
			}
		}
	}
}

function chStart() {
	var errors = chDoStartChecks();
	if (errors.length) {
		var errtext = '';
		for (var i=0; i<errors.length; i++) errtext += errors[i] + '<br>';
		$('#srtErrors').html(errtext);
		return;
	}
	
	for (var mechanic in MECHANICS) {
		MECHANICS[mechanic] = CHDATA.config.mechanics[mechanic];
	}

	chLoadMainFleet();
	if (CHDATA.fleets.combined) chLoadEscortFleet();
	else FLEETS1[1] = null;
	if (CHDATA.fleets.supportN) chLoadSupportFleetN();
	else FLEETS1S[0] = null;
	if (CHDATA.fleets.supportB) chLoadSupportFleetB();
	else FLEETS1S[1] = null;
	
	if (MAPDATA[CHDATA.event.world].allowLBAS) {
		var numBase = 0, numBaseMax = MAPDATA[WORLD].maps[MAPNUM].lbasSortie || MAPDATA[WORLD].maps[MAPNUM].lbas;
		for (var i=1; i<=3; i++) {
			chLoadLBAS(i);
			if (numBase < numBaseMax && CHDATA.fleets['lbas'+i] && LBAS[i-1].equips.length) {
				numBase++;
			} else {
				CHDATA.fleets['lbas'+i] = false;
				$('#btnLBAS'+i).css('opacity',.5);
			}
		}
		var fuel = 0, ammo = 0;
		for (var i=0; i<LBAS.length; i++) {
			if (i >= MAPDATA[WORLD].maps[MAPNUM].lbas) break;
			if (!CHDATA.fleets['lbas'+(i+1)]) continue;
			if (!LBAS[i]) continue;
			for (var j=0; j<LBAS[i].equips.length; j++) {
				var equip = LBAS[i].equips[j];
				if (equip.type == LANDBOMBER || equip.type == INTERCEPTOR) { fuel += 27; ammo += 12; }
				else if (equip.type == CARRIERSCOUT || equip.type == SEAPLANE || equip.type == FLYINGBOAT || equip.type == LANDSCOUT) { fuel += 4; ammo += 3; }
				else { fuel += 18; ammo += 11; }
			}
		}
		CHDATA.event.resources.fuel += fuel;
		CHDATA.event.resources.ammo += ammo;
		chUIUpdateResources();
	}
	
	MECHANICS.morale = true;
	MECHANICS.fixFleetAA = MAPDATA[WORLD].date >= MECHANICDATES.fixFleetAA;
	SHELLDMGBASE = CHDATA.config.shelldmgbase;
	ASWDMGBASE = CHDATA.config.aswdmgbase;
	toggleEchelon(CHDATA.config.mechanics.echelonBuff);
	if (WORLD >= 45) { //unknown when/if changed
		TTFCOMBINED1E.accbase = TTFCOMBINED2E.accbase = TTFCOMBINED3E.accbase = TTFCOMBINED4E.accbase = 50;
	} else {
		TTFCOMBINED1E.accbase = TTFCOMBINED2E.accbase = TTFCOMBINED3E.accbase = TTFCOMBINED4E.accbase = 75;
	}
	
	if (MAPDATA[CHDATA.event.world].ptImpSpecial == 2) { BREAKPTIMPS = true; NERFPTIMPS = false; }
	else if (MAPDATA[CHDATA.event.world].ptImpSpecial == 1) { BREAKPTIMPS = false; NERFPTIMPS = true; }
	else { BREAKPTIMPS = NERFPTIMPS = false; }
	
	if (MAPDATA[WORLD].subTargetSpecial == 1) { //CV can ASW
		BBVT.prototype.canASW = BBV.prototype.canASW = CAV.prototype.canASW;
		CVB.prototype.canASW = CV.prototype.canASW = CVL.prototype.canASW;
	} else if (MAPDATA[WORLD].subTargetSpecial == 2) { //BBV cannot ASW
		BBVT.prototype.canASW = BBV.prototype.canASW = Ship.prototype.canASW;
		CVB.prototype.canASW = CV.prototype.canASW = Ship.prototype.canASW;
	} else { //normal
		BBVT.prototype.canASW = BBV.prototype.canASW = CAV.prototype.canASW;
		CVB.prototype.canASW = CV.prototype.canASW = Ship.prototype.canASW;
	}
	
	$('#sortiespace').hide();
	$('#battlespace').show();
	$('#battlespace').css('animation','');
	$('#battlespace').css('animation','fadein 0.25s linear');
	chClickedTab('#tabmain');
	chBlockFleetUI();
	chPlayerStart();
}

function chGiveLock(fleetnum,slotnum,lock) {
	let sid = CHDATA.fleets[fleetnum][slotnum-1];
	if (!sid) return;
	if (CHDATA.ships[sid].lock) return;
	CHDATA.ships[sid].lock = lock;
	$('#fleetlock'+fleetnum+slotnum).attr('src','assets/maps/lock'+lock+'.png');
}

function chLoadMainFleet() {
	chTablePushUp(1);
	var data = chLoadFleet(CHDATA.fleets[1],1);
	CHSHIPCOUNT = data[1];
	FLEETS1[0] = new Fleet(0);
	FLEETS1[0].loadShips(data[0]);
	
	if (!CHDATA.config.disablelock) {
		var lock = MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLock;
		if (Array.isArray(lock)) lock = null;
		if (MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLockHard && CHDATA.event.maps[MAPNUM].diff == 3) lock = MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLockHard;
		if (lock && !MAPDATA[WORLD].maps[CHDATA.event.mapnum].lockSpecial) {
			for (var i=0; i<CHDATA.fleets[1].length; i++) {
				chGiveLock(1,i+1,lock);
			}
		}
	}
}

function chLoadEscortFleet() {
	chTablePushUp(2);
	var data = chLoadFleet(CHDATA.fleets[2],2);
	CHSHIPCOUNT.escort = data[1];
	CHSHIPCOUNT.speed = Math.min(CHSHIPCOUNT.speed,CHSHIPCOUNT.escort.speed);
	FLEETS1[1] = new Fleet(0,FLEETS1[0]);
	FLEETS1[1].loadShips(data[0]);
	
	if (!CHDATA.config.disablelock) {
		var lock = MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLock;
		if (Array.isArray(lock)) lock = null;
		if (MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLockHard && CHDATA.event.maps[MAPNUM].diff == 3) lock = MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLockHard;
		if (lock && !MAPDATA[WORLD].maps[CHDATA.event.mapnum].lockSpecial) {
			for (var i=0; i<CHDATA.fleets[2].length; i++) {
				chGiveLock(2,i+1,lock);
			}
		}
	}
}

function chLoadSupportFleetN() {
	chTablePushUp(3);
	var data = chLoadFleet(CHDATA.fleets[3],3);
	var type = chGetSupportType(data[1]);
	if (!type) return;
	FLEETS1S[0] = new Fleet(0);
	FLEETS1S[0].loadShips(data[0]);
	FLEETS1S[0].supportType = type;
}

function chLoadSupportFleetB() {
	chTablePushUp(4);
	var data = chLoadFleet(CHDATA.fleets[4],4);
	var type = chGetSupportType(data[1]);
	if (!type) return;
	FLEETS1S[1] = new Fleet(0);
	FLEETS1S[1].loadShips(data[0]);
	FLEETS1S[1].supportType = type;
	FLEETS1S[1].supportBoss = true;
}

function chGetSupportType(counts) {
	if (counts.DD < 2) return 0;
	if (CHDATA.config.mechanics.LBASBuff && counts.aCV >= 2) return 1;
	if (counts.aCV >= 3) return 1;
	if (counts.DD + counts.CL + counts.CLT >= 4) return 3;
	return 2;
}

function chLoadLBAS(num) {
	var base = CHDATA.ships['z'+num];
	var equips = [], improvs = [], profs = [];
	for (var j=0; j<base.items.length; j++) {
		if (base.items[j] <= 0) { continue; }
		var item = CHDATA.gears['x'+base.items[j]];
		equips.push(item.masterId);
		if (chAllowImprovement(item.masterId)) improvs.push(item.stars || 0);
		else improvs.push(0);
		if (CHDATA.config.mechanics.proficiency) profs.push(Math.max(0,item.ace) || 0);
		else profs.push(0);
	}
	LBAS[num-1] = new LandBase(equips,improvs,profs);
	LBAS[num-1].PLANESLOTS = base.planes.slice();
	LBAS[num-1].planecount = base.planes.slice();
}

function chNewShipCount() {
	return {DD:0,CL:0,CLT:0,CA:0,CAV:0,BB:0,FBB:0,BBV:0,AV:0,SS:0,SSV:0,CVL:0,CV:0,CVB:0,LHA:0,AS:0,AR:0,AO:0,CT:0,DE:0,total:0,ids:[],aBB:0,aCV:0,speed:10};
}

function chRefreshShipCountSortie() { //use in sortie only
	let countsA = [];
	let num = (CHDATA.fleets.combined)? 2 : 1;
	for (let n=0; n<num; n++) {
		let counts = countsA[n] = chNewShipCount();
		let fastPlus = true;
		for (let ship of FLEETS1[n].ships) {
			if (ship.retreated || ship.HP <= 0) continue
			counts[ship.type]++;
			counts.total++;
			if (['BB','FBB','BBV'].indexOf(ship.type) != -1) counts.aBB++;
			if (['CV','CVL','CVB'].indexOf(ship.type) != -1) counts.aCV++;
			counts.ids.push(ship.mid);
			if (ship.SPD < 15) fastPlus = false;
			if (ship.SPD == 5) counts.speed = 5;
		}
	}
	CHSHIPCOUNT = countsA[0];
	if (CHDATA.fleets.combined) {
		CHSHIPCOUNT.escort = countsA[1];
		CHSHIPCOUNT.speed = Math.min(CHSHIPCOUNT.speed,CHSHIPCOUNT.escort.speed);
	}
}

function chLoadFleet(sids,fleetnum) {
	var simships = [];
	var counts = chNewShipCount();
	let fastPlus = true;
	for (var i=0; i<sids.length; i++) {
		if (sids[i] <= 0) continue;
		var ship = CHDATA.ships[sids[i]];
		var shipd = SHIPDATA[ship.masterId];
		
		var ShipType = window[shipd.type];
		var simship = new ShipType(ship.masterId,shipd.name,0,ship.LVL,ship.HP[0],ship.FP,ship.TP,ship.AA,ship.AR,ship.EV,ship.ASW,ship.LOS,ship.LUK,ship.RNG,ship.planes);
		simship.maxHP = ship.HP[1];
		if (i!=0 && simship.HP/simship.maxHP <= .25) simship.protection = false;
		if (ship.SPD) simship.SPD = ship.SPD;
		simship.fuelleft = ship.fuel;
		simship.ammoleft = ship.ammo;
		simship.morale = ship.morale || 49;
		
		var equips = [], improvs = [0,0,0,0], profs = [0,0,0,0];
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) { continue; }
			var item = CHDATA.gears['x'+ship.items[j]];
			equips.push(item.masterId);
			//if event allows improve, set improvs[j]
			if (chAllowImprovement(item.masterId)) improvs[j] = item.stars || 0;
			if (CHDATA.config.mechanics.proficiency) profs[j] = Math.max(0,item.ace) || 0;
		}
		simship.loadEquips(equips,improvs,profs,false);
		
		simships.push(simship);
		counts[shipd.type]++;
		counts.total++;
		if (['BB','FBB','BBV'].indexOf(shipd.type) != -1) counts.aBB++;
		if (['CV','CVL','CVB'].indexOf(shipd.type) != -1) counts.aCV++;
		counts.ids.push(ship.masterId);
		if (!ship.SPD || ship.SPD < 15) fastPlus = false;
		if ((ship.SPD || shipd.SPD) == 5) counts.speed = 5;
	}
	if (fastPlus) counts.speed = 15;
	
	return [simships,counts];
}

function chFillTable(sids,fleet) {
	if (!parseInt(fleet)) return;
	for (var i=0; i<sids.length; i++) {
		chTableSetShip(sids[i], fleet, i+1);
	}
}

function chTableSetShip(sid,fleet,slot,noswap) {
	if (!sid) { chTableRemoveShip(fleet,slot); return; }
	var ship = CHDATA.ships[sid];
	var shipd = SHIPDATA[ship.masterId];
	$('#fleet'+fleet+slot+' tr').each(function() {
		$(this).css('visibility','visible');
	});
	$('#fleet'+fleet+slot+' td.t2hpcell').show();
	$('#fleetname'+fleet+slot).text(shipd.name);
	$('#fleetimg'+fleet+slot).attr('src','assets/icons/'+shipd.image);
	if (fleet != 5) $('#fleetimg'+fleet+slot).css('cursor','move');
	$('#fleetlvl'+fleet+slot).text(ship.LVL);
	if (ship.LVL > 99) $('#fleetlvl'+fleet+slot).css('font-size','11px');
	else $('#fleetlvl'+fleet+slot).css('font-size','14px');
	chFleetSetMorale(fleet,slot,ship.morale);
	$('#fleetfp'+fleet+slot).text(ship.FP);
	$('#fleettp'+fleet+slot).text(ship.TP);
	$('#fleetaa'+fleet+slot).text(ship.AA);
	$('#fleetar'+fleet+slot).text(ship.AR);
	$('#fleetev'+fleet+slot).text(ship.EV);
	$('#fleetlos'+fleet+slot).text(ship.LOS);
	$('#fleetasw'+fleet+slot).text(ship.ASW);
	$('#fleetlk'+fleet+slot).text(ship.LUK);
	$('#fleetrn'+fleet+slot).text(['','Short','Medium','Long','V. Long'][ship.RNG]);
	$('#fleetsp'+fleet+slot).text({0:'N/A',5:'Slow',10:'Fast',15:'Fast+',20:'Fastest'}[ship.SPD||shipd.SPD]);
	
	if (fleet == 5) { //LBAS only
		chLoadLBAS(slot);
		$('#fleetlbac'+fleet+slot).text(LBAS[slot-1].fleetAirPower(false,true));
		$('#fleetlbab'+fleet+slot).text(LBAS[slot-1].airPowerDefend());
		$('#fleetlbrn'+fleet+slot).text(getLBASRange(ship));
	}
	
	if (ship.lock) $('#fleetlock'+fleet+slot).attr('src','assets/maps/lock'+ship.lock+'.png');
	else $('#fleetlock'+fleet+slot).attr('src','');
	
	var oldsid = CHDATA.fleets[fleet][slot-1];
	CHDATA.fleets[fleet][slot-1] = sid;
	
	chFleetSetHP(fleet,slot,ship.HP[0]);
	if (ship.fuel === undefined) ship.fuel = 10;
	if (ship.ammo === undefined) ship.ammo = 10;
	chFleetSetResupply(fleet,slot,ship.fuel,ship.ammo,ship.planes,true);
	
	for (var i=0; i<CHITEMSMAX+1; i++) {
		chTableSetEquip(ship.items[i] || -1,fleet,slot,i+1);
		if (i == CHITEMSMAX) {
			if (!ship.ex) $('#fleeteq'+fleet+(i+1)+slot).attr('class','t2equipno');
			else $('#fleeteq'+fleet+(i+1)+slot).attr('class','t2equipex t2equip');
			continue;
		}
		if (shipd.SLOTS.length <= i) $('#fleeteq'+fleet+(i+1)+slot).attr('class','t2equipno');
		else $('#fleeteq'+fleet+(i+1)+slot).attr('class','t2equip');
	}
	
	//swap if needed
	if (!noswap) {
		var oldfleet, oldslot;
		for (var fleetnum in CHDATA.fleets) {
			if (!parseInt(fleetnum)) continue;
			for (var i=0; i<CHDATA.fleets[fleetnum].length; i++) {
				if (fleetnum == fleet && i == slot-1) continue;
				if (CHDATA.fleets[fleetnum][i] == sid) { oldfleet = fleetnum; oldslot = i+1; break; }
			}
			if (oldfleet) break;
		}
		if (oldfleet) chTableSetShip(oldsid,oldfleet,oldslot,true);
	}
	
	let foundEx = false, found5 = false;
	for (let shipid of CHDATA.fleets[fleet]) {
		if (!shipid) continue;
		if (CHDATA.ships[shipid].ex) foundEx = true;
		if (SHIPDATA[CHDATA.ships[shipid].masterId].SLOTS.length >= 5) found5 = true;
	}
	if (foundEx) {
		for (let i=1; i<=CHDATA.fleets[fleet].length; i++) $('#fleeteq'+fleet+(CHITEMSMAX+1)+i).show();
	} else {
		for (let i=1; i<=CHDATA.fleets[fleet].length; i++) $('#fleeteq'+fleet+(CHITEMSMAX+1)+i).hide();
	}
	if (found5) {
		for (let i=1; i<=CHDATA.fleets[fleet].length; i++) $('#fleeteq'+fleet+'5'+i).show();
	} else {
		for (let i=1; i<=CHDATA.fleets[fleet].length; i++) $('#fleeteq'+fleet+'5'+i).hide();
	}
	
	chUpdateFleetInfo(fleet);
}

function chTableRemoveShip(fleet,slot) {
	$('#fleetname'+fleet+slot).text('Slot '+slot);
	$('#fleetimg'+fleet+slot).attr('src','assets/icons/Kblank.png');
	$('#fleetlock'+fleet+slot).attr('src','');
	$('#fleet'+fleet+slot+' tr:not(.t2show)').each(function() {
		$(this).css('visibility','hidden');
	});
	$('#fleet'+fleet+slot+' td.t2hpcell').hide();
	$('#fleetimg'+fleet+slot).css('cursor','');
	
	CHDATA.fleets[fleet][slot-1] = null;
	chUpdateFleetInfo(fleet);
}

function chTablePushUp(fleet) {
	var emptyslot = 0;
	for (var i=0; i<CHDATA.fleets[fleet].length; i++) {
		if (!CHDATA.fleets[fleet][i]) {
			if (emptyslot==0) emptyslot = i+1;
		} else if (emptyslot) {
			chTableSetShip(CHDATA.fleets[fleet][i],fleet,emptyslot);
			emptyslot++;
		}
	}
}

function chTableSetEquip(itemid,fleet,shipslot,itemslot) {
	if (itemid == -1) {
		$('#fleeteqi'+fleet+itemslot+shipslot).css('cursor','');
		$('#fleeteqi'+fleet+itemslot+shipslot).attr('src','assets/items/empty.png');
		$('#fleeteqn'+fleet+itemslot+shipslot).text('');
		$('#fleeteqs'+fleet+itemslot+shipslot).text('');
		$('#fleeteqimpr'+fleet+itemslot+shipslot).text('');
		$('#fleeteq'+fleet+itemslot+shipslot).css('background-image','');
	} else {
		var item = CHDATA.gears['x'+itemid];
		var itemd = EQDATA[item.masterId];
		$('#fleeteqi'+fleet+itemslot+shipslot).attr('src','assets/items/'+EQTDATA[itemd.type].image+'.png');
		$('#fleeteqi'+fleet+itemslot+shipslot).css('cursor','move');
		$('#fleeteqn'+fleet+itemslot+shipslot).text(itemd.name);
		$('#fleeteqs'+fleet+itemslot+shipslot).text(CHDATA.ships[CHDATA.fleets[fleet][shipslot-1]].planes[itemslot-1]);
		if (chAllowImprovement(item.masterId) && item.stars>0) $('#fleeteqimpr'+fleet+itemslot+shipslot).text('+'+item.stars);
		else $('#fleeteqimpr'+fleet+itemslot+shipslot).text('');
		if (CHDATA.config.mechanics.proficiency && item.ace>0) $('#fleeteq'+fleet+itemslot+shipslot).css('background-image',"url('assets/stats/prof"+item.ace+".png')");
		else $('#fleeteq'+fleet+itemslot+shipslot).css('background-image','');
	}
}

function chUpdateFleetInfo(fleetnum) {
	// if (fleetnum != 1 && fleetnum != 2) return;
	if (fleetnum == 5) return;
	if (fleetnum == 2) fleetnum = 1;
	var ap = 0, spd = 'Fast';
	var ships = [];
	for (var i=0; i<CHDATA.fleets[fleetnum].length; i++) ships.push(CHDATA.ships[CHDATA.fleets[fleetnum][i]]);
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) ships.push(CHDATA.ships[CHDATA.fleets[2][i]]);
	}
	for (var i=0; i<ships.length; i++) {
		var ship = ships[i];
		if (!ship) continue;
		if ((ship.SPD || SHIPDATA[ship.masterId].SPD) == 5) spd = 'Slow';
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) continue;
			var eq = CHDATA.gears['x'+ship.items[j]];
			var eqd = EQDATA[eq.masterId];
			if ((EQTDATA[eqd.type].isfighter || EQTDATA[eqd.type].isdivebomber || EQTDATA[eqd.type].istorpbomber) && i<CHDATA.fleets[fleetnum].length) {
				var impr = (chAllowImprovement(eq.masterId) && eq.stars>0)? eq.stars : 0;
				var prof = (CHDATA.config.mechanics.proficiency && eq.ace>0)? eq.ace : 0;
				var eqo = new Equip(eq.masterId,impr,prof);
				ap += Math.floor(((eqd.AA||0)+impr*.2) * Math.sqrt(ship.planes[j]) + (eqo.APbonus||0));
			}
			
		}
	}
	var los1 = getELoS33(fleetnum,1,CHDATA.fleets.combined);
	$('#fleetap'+fleetnum).text(ap);
	$('#fleetefflos'+fleetnum).text(Math.floor(los1*10)/10);
	if (WORLD <= 27 && WORLD > 20) { //Summer14 and before only
		var losOld = testGetLoSOld(fleetnum,CHDATA.fleets.combined);
		$('#fleetefflos'+fleetnum).parent().attr('title','Old = '+(Math.floor(losOld*10)/10));
	} else {
		var los3 = getELoS33(fleetnum,3,CHDATA.fleets.combined), los4 = getELoS33(fleetnum,4,CHDATA.fleets.combined), los2 = getELoS33(fleetnum,2,CHDATA.fleets.combined);
		$('#fleetefflos'+fleetnum).parent().attr('title','C2 = '+(Math.floor(los2*10)/10)+', C3 = '+(Math.floor(los3*10)/10)+', C4 = '+(Math.floor(los4*10)/10));
	}
	$('#fleetspd'+fleetnum).text(spd);
	
	if (MAPDATA[CHDATA.event.world].transportCalc && WORLD != 20) {
		let tp = MAPDATA[CHDATA.event.world].transportCalc(ships);
		$('#fleettransport'+fleetnum).text(tp);
		$('#fleettransport'+fleetnum).attr('title', 'S: '+tp+' / A: '+MAPDATA[CHDATA.event.world].transportCalc(ships, 'A'));
		$('#fleettransport'+fleetnum).parent().show();
	} else {
		$('#fleettransport'+fleetnum).parent().hide();
	}
}

// function chTableTrySetShip(sid,slot) {
	
	// chTableSetShip(sid, slot);
// }



function chClickedCombine(num,first) {
	if (!first && CHDATA.fleets.sf) chClickedMakeSF();
	if (CHDATA.fleets.combined != num || (first && num != 0)) {
		CHDATA.fleets.combined = num;
		for (var i=1; i<=3; i++) {
			if (i==num) {
				$('#btncombine'+num).css('opacity',1);
				$('#btncombine'+num).css('background-color','#78BEB5');
			} else {
				$('#btncombine'+i).css('opacity',.5);
				$('#btncombine'+i).css('background-color','transparent');
			}
		}
		$('#escortfleetspace').show();
		$('#combineBG').show();
	} else {
		CHDATA.fleets.combined = 0;
		for (var i=1; i<=3; i++) {
			$('#btncombine'+i).css('opacity',.5);
			$('#btncombine'+i).css('background-color','transparent');
		}
		$('#escortfleetspace').hide();
		$('#combineBG').hide();
	}
	chUpdateFleetInfo(1);
}

function chClickedMakeSF() {
	if (CHDATA.fleets.combined) chClickedCombine(CHDATA.fleets.combined);
	if (!CHDATA.fleets.sf) {
		if (CHDATA.fleets.sfTemp) {
			let found = false;
			for (let i=1; i<=4; i++) {
				if (CHDATA.fleets[i].indexOf(CHDATA.fleets.sfTemp) != -1) {
					found = true; break;
				}
			}
			if (!found) chTableSetShip(CHDATA.fleets.sfTemp,1,7);
			CHDATA.fleets.sfTemp = null;
		}
		CHDATA.fleets.sf = true;
		chToggleShowSF(true);
	} else {
		CHDATA.fleets.sfTemp = CHDATA.fleets[1][6];
		chTableRemoveShip(1,7);
		CHDATA.fleets.sf = false;
		chToggleShowSF(false);
	}
	chUpdateFleetInfo(1);
}

function chToggleShowSF(show) {
	if (show) {
		$('#btncombineSF').css('opacity',1);
		$('#btncombineSF').css('background-color','#78BEB5');
		$('#fleet17').show();
	} else {
		$('#btncombineSF').css('opacity',.5);
		$('#btncombineSF').css('background-color','transparent');
		$('#fleet17').hide();
	}
}

//----------------sortie----------------
function chLoadSortieInfo(mapnum) {
	var world = CHDATA.event.world;
	if (!MAPDATA[world]) return;
	var mapdata = MAPDATA[world].maps[mapnum];
	if (!mapdata) return;
	var title = mapdata.name;
	if (mapdata.nameT) title += (mapnum <= CHDATA.event.unlocked)? ': '+mapdata.nameT : ': ???';
	$('#srtTitle').html(title);
	if (title.indexOf('<br>') != -1) $('#srtTitle').css('font-size','20px');
	else $('#srtTitle').css('font-size','24px');
	$('#srtMapImg').attr('src','assets/maps/'+world+'/'+mapnum+'m.png');
	if (mapnum > CHDATA.event.unlocked) {
		$('#srtMapImg').css('filter','blur(5px) grayscale(1)');
		$('#srtMapImg').css('-webkit-filter','blur(5px) grayscale(1)');
	} else {
		$('#srtMapImg').css('filter','');
		$('#srtMapImg').css('-webkit-filter','');
	}
	
	var diff = CHDATA.event.maps[mapnum].diff;
	var nowhp = CHDATA.event.maps[mapnum].hp, maxhp = getMapHP(world,mapnum,diff);
	if (nowhp === null || (CHDATA.config.diffmode == 1 && CHDATA.event.unlocked < mapnum)) {
		$('#srtHPText').text('???/???');
		$('#srtHPText').css('color','#FF6666');
		$('#srtHPBar').css('width','146px');
	} else if (nowhp > 0) {
		$('#srtHPText').text(nowhp + '/' + maxhp);
		$('#srtHPText').css('color','#FF6666');
		$('#srtHPBar').css('width',Math.ceil(146*nowhp/maxhp)+'px');
	} else {
		$('#srtHPText').text('CLEAR');
		$('#srtHPText').css('color','#66FF66');
		$('#srtHPBar').css('width','0');
	}
	if (mapdata.transport) {
		$('#srtHPBar').css('background-color','#00ff00');
		$('#srtHPBorder').attr('src','assets/bossbarTP.png');
	} else {
		$('#srtHPBar').css('background-color','red');
		$('#srtHPBorder').attr('src','assets/bossbar.png');
	}
	if (mapnum == CHDATA.event.unlocked && mapdata.hpRegenTick && nowhp > 0 && nowhp < maxhp) {
		$('#srtHPRegen').show();
	} else {
		$('#srtHPRegen').hide();
	}
	
	if (CHDATA.config.diffmode == 1) {
		$('#srtDiffTitle').text('HQ ' + CHDATA.player.level);
		$('#srtDiffTitle').css('color','#FFFF66');
		$('#srtDiffHard').hide();
		$('#srtDiffMed').hide();
		$('#srtDiffEasy').hide();
		$('#srtDiffCasual').hide();
		$('#srtDiffBack').hide();
		$('#srtDiffChange').hide();
		chRemoveSortieError(1);
		$('#srtStart').prop('disabled',(CHDATA.event.unlocked < mapnum));
	} else {
		switch(CHDATA.event.maps[mapnum].diff) {
			case 3:
				$('#srtDiffTitle').text('HARD');
				$('#srtDiffTitle').css('color','#FF6666');
				break;
			case 2:
				$('#srtDiffTitle').text('NORMAL');
				$('#srtDiffTitle').css('color','#FFFF66');
				break;
			case 1:
				$('#srtDiffTitle').text('EASY');
				$('#srtDiffTitle').css('color','#66FF66');
				break;
			case 4:
				$('#srtDiffTitle').text('CASUAL');
				$('#srtDiffTitle').css('color','#6666FF');
				break;
			default:
				$('#srtDiffTitle').text('');
				$('#srtDiffTitle').css('color','');
				break;
		}
		if (mapnum > CHDATA.event.unlocked) {
			$('#srtDiffHard').hide();
			$('#srtDiffMed').hide();
			$('#srtDiffEasy').hide();
			$('#srtDiffCasual').hide();
			$('#srtDiffBack').hide();
			$('#srtDiffChange').hide();
			chAddSortieError(1);
		} else if (!CHDATA.event.maps[mapnum].diff) {
			if (mapnum > 1 && CHDATA.event.maps[mapnum-1].diff <= 1 || MAPDATA[world].allowDiffs.indexOf(3) == -1) $('#srtDiffHard').hide();
			else $('#srtDiffHard').show();
			if (MAPDATA[world].allowDiffs.indexOf(2) == -1) $('#srtDiffMed').hide();
			else $('#srtDiffMed').show();
			if (MAPDATA[world].allowDiffs.indexOf(1) == -1) $('#srtDiffEasy').hide();
			else $('#srtDiffEasy').show();
			if (MAPDATA[world].allowDiffs.indexOf(4) == -1) $('#srtDiffCasual').hide();
			else $('#srtDiffCasual').show();
			$('#srtDiffBack').hide();
			$('#srtDiffChange').hide();
			chAddSortieError(1);
		} else {
			$('#srtDiffHard').hide();
			$('#srtDiffMed').hide();
			$('#srtDiffEasy').hide();
			$('#srtDiffCasual').hide();
			$('#srtDiffBack').hide();
			if (nowhp) $('#srtDiffChange').show();
			else $('#srtDiffChange').hide();
			chRemoveSortieError(1);
		}
	}
	
	if (!mapdata.fleetTypes) {
		$('#srtCombImg0').show();
		$('#srtCombImg1').hide();
		$('#srtCombImg2').hide();
		$('#srtCombImg3').hide();
	} else {
		for (var i=0; i<=3; i++) {
			if (mapdata.fleetTypes.indexOf(i) != -1) $('#srtCombImg'+i).show();
			else $('#srtCombImg'+i).hide();
		}
		if (mapdata.fleetTypes.indexOf(7) != -1) {
			$('#srtCombImg7').show();
			$('#srtCombImg0').hide();
		} else {
			$('#srtCombImg7').hide();
		}
	}
	
	var showHardLock = (mapdata.giveLockHard || mapdata.checkLockHard) && (!CHDATA.event.maps[mapnum].diff || CHDATA.event.maps[mapnum].diff == 3);
	if (CHDATA.config.disablelock || !(mapdata.giveLock||mapdata.checkLock||showHardLock)) {
		$('#srtLock').hide();
	} else {
		$('#srtLock').show();
		$('#srtGiveLockMult').hide(); $('#srtLockImg').parent().show();
		if (Array.isArray(mapdata.giveLock)) {
			$('#srtGiveLockMult').show(); $('#srtLockImg').parent().hide();
			$('#srtGiveLockMult').html('');
			for (var i=0; i<mapdata.giveLock.length; i++) {
				$('#srtGiveLockMult').append('<div style="display:inline-block"><img src="assets/maps/lock'+mapdata.giveLock[i]+'.png" style="height:40px;vertical-align:middle"/></div>');
			}
		}
		else if (mapdata.giveLock) $('#srtLockImg').attr('src','assets/maps/lock'+mapdata.giveLock+'.png');
		else if (showHardLock) $('#srtLockImg').attr('src','assets/maps/lock'+mapdata.giveLockHard+'.png');
		else $('#srtLockImg').attr('src','');
		$('#srtNoLock').html('');
		if (mapdata.checkLock || showHardLock) {
			var locks = (showHardLock)? mapdata.checkLockHard : mapdata.checkLock;
			for (var i=0; i<locks.length; i++) {
				$('#srtNoLock').append('<div style="display:inline-block"><img src="assets/maps/lockno.png" style="position:absolute;height:40px"/><img src="assets/maps/lock'+locks[i]+'.png" style="height:40px;vertical-align:middle"/></div>');
			}
		}
	}
	
	var numLB = mapdata.lbas || 0;
	for (var i=1; i<=3; i++) {
		if (i <= numLB) {
			$('#btnLBAS'+i).show();
		} else {
			$('#btnLBAS'+i).hide();
		}
	}
	
	MAPNUM = CHDATA.event.mapnum = mapnum;
	if (MAPNUM <= 1) $('#srtLeft').hide();
	else $('#srtLeft').show();
	if (!MAPDATA[WORLD].maps[MAPNUM+1]) $('#srtRight').hide();
	else $('#srtRight').show();
}

function chClickedSortieLeft() {
	if (MAPNUM <= 1) return;
	$('#srtHPBar').css('animation','');
	chLoadSortieInfo(MAPNUM-1);
}

function chClickedSortieRight() {
	if (!MAPDATA[WORLD].maps[MAPNUM+1]) return;
	$('#srtHPBar').css('animation','');
	if (!CHDATA.event.maps[MAPNUM+1]) {
		CHDATA.event.maps[MAPNUM+1] = {
			visited: [],
			hp: null
		};
		if (MAPDATA[WORLD].maps[MAPNUM+1].parts) CHDATA.event.maps[MAPNUM+1].part = 1;
	}
	chLoadSortieInfo(MAPNUM+1);
}

function chSortieStartChangeDiff() {
	chAddSortieError(1);
	$('#srtDiffTitle').text('');
	let width = 146;
	if (WORLD >= 41 && CHDATA.event.maps[MAPNUM].diff == 3) width = Math.min(146, +$('#srtHPBar').css('width').replace('px','') + 36);
	$('#srtHPBar').css('width',width+'px');
	$('#srtHPBar').css('animation','');
	$('#srtHPBar').css('animation','fadein 0.5s ease 0s infinite alternate');
	
	if (MAPNUM > 1 && CHDATA.event.maps[MAPNUM-1].diff <= 1 || MAPDATA[WORLD].allowDiffs.indexOf(3) == -1) $('#srtDiffHard').hide();
	else $('#srtDiffHard').show();
	if (MAPDATA[WORLD].allowDiffs.indexOf(2) == -1) $('#srtDiffMed').hide();
	else $('#srtDiffMed').show();
	if (MAPDATA[WORLD].allowDiffs.indexOf(1) == -1) $('#srtDiffEasy').hide();
	else $('#srtDiffEasy').show();
	if (MAPDATA[WORLD].allowDiffs.indexOf(4) == -1) $('#srtDiffCasual').hide();
	else $('#srtDiffCasual').show();
	$('#srtDiffBack').show();
	$('#srtDiffChange').hide();
}

function chSortieEndChangeDiff() {
	chRemoveSortieError(1);
	$('#srtHPBar').css('animation','');
	$('#srtDiffHard').hide();
	$('#srtDiffMed').hide();
	$('#srtDiffEasy').hide();
	$('#srtDiffCasual').hide();
	$('#srtDiffBack').hide();
	$('#srtDiffChange').show();
	
	chLoadSortieInfo(CHDATA.event.mapnum);
}

function chSortieChangeDiff(diff) {
	let data = CHDATA.event.maps[CHDATA.event.mapnum];
	if (diff == data.diff) return;
	let diffNow = (data.diff == 4)? 0 : data.diff;
	if (WORLD >= 41 && data.diff && (diff == 4 || diff < diffNow)) {
		let hp = getMapHP(WORLD,CHDATA.event.mapnum,diff);
		data.hp = Math.min(hp, CHDATA.event.maps[CHDATA.event.mapnum].hp + Math.ceil(hp/4));
		data.diff = diff;
		return;
	}
	if (MAPDATA[WORLD].maps[MAPNUM].parts) {
		mapChangePart(WORLD,MAPNUM,1);
		CHDATA.event.maps[CHDATA.event.mapnum].part = 1;
	}
	CHDATA.event.maps[CHDATA.event.mapnum].diff = diff;
	CHDATA.event.maps[CHDATA.event.mapnum].hp = getMapHP(WORLD,CHDATA.event.mapnum,diff);
	if (diff == 3 && WORLD != 36) {
		delete CHDATA.event.maps[CHDATA.event.mapnum].debuff;
		delete CHDATA.event.maps[CHDATA.event.mapnum].debuffed;
		delete CHDATA.event.maps[CHDATA.event.mapnum].routes;
	}
}

var SORTIEERRORS = {
	1: "Choose a difficulty",
}
var SORTIEERRORLIST = [];
function chAddSortieError(error) {
	if (SORTIEERRORLIST.indexOf(error) != -1) return;
	
	SORTIEERRORLIST.push(error);
	
	$('#srtStart').prop('disabled',true);
	
	var errortext = '';
	for (var i=0; i<SORTIEERRORLIST.length; i++) {
		errortext += SORTIEERRORS[SORTIEERRORLIST[i]] + '\n';
	}
	$('#srtErrors').text(errortext);
}
function chRemoveSortieError(error) {
	SORTIEERRORLIST.splice(SORTIEERRORLIST.indexOf(error),1);
	
	if (SORTIEERRORLIST.length <= 0) $('#srtStart').prop('disabled',false);
	
	var errortext = '';
	for (var i=0; i<SORTIEERRORLIST.length; i++) {
		errortext += SORTIEERRORS[SORTIEERRORLIST[i]] + '\n';
	}
	$('#srtErrors').text(errortext);
}
$('#srtStart').prop('disabled',false);


function chAddSupportN() {
	if (!CHDATA.fleets.supportN) {
		CHDATA.fleets.supportN = true;
		$('#btnsupportN').css('opacity',1);
	} else {
		CHDATA.fleets.supportN = false;
		$('#btnsupportN').css('opacity',.5);
	}
}

function chAddSupportB() {
	if (!CHDATA.fleets.supportB) {
		CHDATA.fleets.supportB = true;
		$('#btnsupportB').css('opacity',1);
	} else {
		CHDATA.fleets.supportB = false;
		$('#btnsupportB').css('opacity',.5);
	}
}

function chAddLBAS(num) {
	if (MAPNUM > CHDATA.event.unlocked) return;
	var numBaseMax = MAPDATA[WORLD].maps[MAPNUM].lbasSortie || MAPDATA[WORLD].maps[MAPNUM].lbas;
	var numSelected = 0;
	for (var i=1; i<=MAPDATA[WORLD].maps[MAPNUM].lbas; i++) if (CHDATA.fleets['lbas'+i]) numSelected++;
	
	if (!CHDATA.fleets['lbas'+num] && numSelected < numBaseMax) {
		CHDATA.fleets['lbas'+num] = true;
		$('#btnLBAS'+num).css('opacity',1);
	} else {
		CHDATA.fleets['lbas'+num] = false;
		$('#btnLBAS'+num).css('opacity',.5);
	}
}

function chAddFriendFleet() {
	if (CHDATA.fleets.ff === 0) {
		chSetFriendFleet(1);
	} else if (CHDATA.fleets.ff === 1 && MAPDATA[WORLD].allowStrongFF) {
		chSetFriendFleet(2);
	} else {
		chSetFriendFleet(0);
	}
}

function chSetFriendFleet(num) {
	if (num == 1) {
		CHDATA.fleets.ff = 1;
		$('#btnFF').css('opacity',1);
		$('#imgFF').show();
		$('#imgFFStrong').hide();
	} else if (num == 2) {
		CHDATA.fleets.ff = 2;
		$('#btnFF').css('opacity',1);
		$('#imgFF').hide();
		$('#imgFFStrong').show();
	} else {
		CHDATA.fleets.ff = 0;
		$('#btnFF').css('opacity',.5);
		$('#imgFF').show();
		$('#imgFFStrong').hide();
	}
}


function chFleetSetHP(fleetnum,shipnum,hp) {
	var maxhp = CHDATA.ships[CHDATA.fleets[fleetnum][shipnum-1]].HP[1];
	hp = Math.max(0,Math.min(hp,maxhp));
	var percent = hp/maxhp;
	$('#fleethbar'+fleetnum+shipnum).css('width',Math.floor(65*percent)+'px');
	if (percent <= .25) $('#fleethbar'+fleetnum+shipnum).css('background-color','red');
	else if (percent <= .5) $('#fleethbar'+fleetnum+shipnum).css('background-color','orange');
	else if (percent <= .75) $('#fleethbar'+fleetnum+shipnum).css('background-color','yellow');
	else $('#fleethbar'+fleetnum+shipnum).css('background-color','limegreen');
	$('#fleethp'+fleetnum+shipnum).text(hp+'/'+maxhp);
}

function chFleetSetResupply(fleetnum,shipnum,fuel,ammo,planes,ignoreplanes) {
	$('#fuelbar'+fleetnum+shipnum).css('width',Math.floor(48*fuel/10));
	$('#ammobar'+fleetnum+shipnum).css('width',Math.floor(48*ammo/10));
	
	if (ignoreplanes) return;
	for (var i=0; i<planes.length; i++) {
		if (CHDATA.ships[CHDATA.fleets[fleetnum][shipnum-1]].items[i] <= 0) continue;
		$('#fleeteqs'+fleetnum+(i+1)+shipnum).text(planes[i]);
	}
	chUpdateFleetInfo(fleetnum);
}

function chFleetSetMorale(fleetnum,shipnum,morale) {
	$('#fleetmorale'+fleetnum+shipnum+' span').text(morale);
	if (morale >= 53) $('#fleetmorale'+fleetnum+shipnum).css('background-color','yellow');
	else $('#fleetmorale'+fleetnum+shipnum).css('background-color','white');
}

function chPushHP(fleetnum,shipnum,hp) {
	var sid = CHDATA.fleets[fleetnum][shipnum-1];
	var ship = CHDATA.ships[sid];
	if (!ship) return;
	ship.HP[0] = hp;
	chFleetSetHP(fleetnum,shipnum,hp);
}

function chPushResupply(fleetnum,shipnum,fuel,ammo,planes,skipEmpty) {
	var sid = CHDATA.fleets[fleetnum][shipnum-1];
	var ship = CHDATA.ships[sid];
	if (!ship) return;
	ship.fuel = fuel;
	ship.ammo = ammo;
	if (skipEmpty) {
		let planesSupply = SHIPDATA[ship.masterId].SLOTS.slice();
		let ind = 0;
		for (let i=0; i<planesSupply.length; i++) {
			if (ship.items[i] <= 0) continue;
			planesSupply[i] = planes[ind];
			if (++ind >= planes.length) break;
		}
		ship.planes = planesSupply;
	} else {
		ship.planes = planes.slice();
	}
	chFleetSetResupply(fleetnum,shipnum,fuel,ammo,ship.planes);
}

function chPushMorale(fleetnum,shipnum,morale) {
	var sid = CHDATA.fleets[fleetnum][shipnum-1];
	var ship = CHDATA.ships[sid];
	if (!ship) return;
	ship.morale = morale;
	chFleetSetMorale(fleetnum,shipnum,morale);
}

function chRepairAll() {
	var fleets = [1];
	if (CHDATA.fleets.combined) fleets.push(2);
	for (var i=0; i<fleets.length; i++) {
		for (var j=0; j<CHDATA.fleets[fleets[i]].length; j++) chRepairOne(fleets[i],j+1);
	}
}

function chRepairOne(fleetnum,shipnum) {
	var sid = CHDATA.fleets[fleetnum][shipnum-1];
	var ship = CHDATA.ships[sid];
	if (!ship) return;
	
	var cost = chGetRepairCost(ship);
	CHDATA.event.resources.fuel += cost.fuel;
	CHDATA.event.resources.steel += cost.steel;
	if (cost.steel) CHDATA.event.resources.bucket = CHDATA.event.resources.bucket+1 || 1;
	chUIUpdateResources();
	chPushHP(fleetnum,shipnum,ship.HP[1]);
}

function chResupplyAll() {
	var fleets = [1];
	if (CHDATA.fleets.combined) fleets.push(2);
	fleets.push(3);
	fleets.push(4);
	if (MAPDATA[WORLD].allowLBAS) fleets.push(5);
	for (var i=0; i<fleets.length; i++) {
		for (var j=0; j<CHDATA.fleets[fleets[i]].length; j++) chResupplyOne(fleets[i],j+1);
	}
}

function chResupplyOne(fleetnum,shipnum) {
	var sid = CHDATA.fleets[fleetnum][shipnum-1];
	var ship = CHDATA.ships[sid];
	if (!ship) return;
	
	var cost = chGetSupplyCost(ship);
	CHDATA.event.resources.fuel += cost.fuel;
	CHDATA.event.resources.ammo += cost.ammo;
	CHDATA.event.resources.baux += cost.baux;
	chUIUpdateResources();
	var shipd = SHIPDATA[ship.masterId];
	chPushResupply(fleetnum,shipnum,10,10,shipd.SLOTS);
}


function chShowHoverBox(name,element) {
	var offset = $(element).offset();
	$('#'+name).css('top',(offset.top-10)+'px');
	$('#'+name).css('left',(10+offset.left+$(element).width())+'px');
	$('#'+name).show();
}

function chHideHoverBox(name) {
	$('#'+name).hide();
}

function chPreviewRepair(fleetnum,shipnum) {
	var fuel = 0, steel = 0, buckets = 0, ships;
	if (fleetnum && shipnum) {
		ships = [CHDATA.fleets[fleetnum][shipnum-1]];
	} else {
		ships = CHDATA.fleets[1].slice();
		if (CHDATA.fleets.combined) ships.push.apply(ships,CHDATA.fleets[2]);
		ships.push.apply(ships,CHDATA.fleets[3]);
		ships.push.apply(ships,CHDATA.fleets[4]);
	}
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		if (!ship) continue;
		let cost = chGetRepairCost(ship);
		fuel += cost.fuel;
		steel += cost.steel;
		if (cost.steel) buckets += 1;
	}
	$('#hbRFuel').text(fuel);
	$('#hbRSteel').text(steel);
	$('#hbRBucket').text(buckets);
}

function chGetRepairCost(ship) {
	var shipd = SHIPDATA[ship.masterId];
	if (ship.HP[0] >= ship.HP[1]) return { fuel: 0, steel: 0 };
	return {
		fuel: Math.floor(.032*shipd.fuel*(ship.HP[1]-ship.HP[0])),
		steel: Math.floor(.06*shipd.fuel*(ship.HP[1]-ship.HP[0])),
	};
}

function chPreviewResupply(fleetnum,shipnum) {
	var fuel = 0, ammo = 0, baux = 0, ships;
	if (fleetnum && shipnum) {
		ships = [CHDATA.fleets[fleetnum][shipnum-1]];
	} else {
		ships = CHDATA.fleets[1].slice();
		if (CHDATA.fleets.combined) ships.push.apply(ships,CHDATA.fleets[2]);
		ships.push.apply(ships,CHDATA.fleets[3]);
		ships.push.apply(ships,CHDATA.fleets[4]);
		if (MAPDATA[WORLD].allowLBAS) ships.push.apply(ships,CHDATA.fleets[5]);
	}
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		if (!ship) continue;
		var shipd = SHIPDATA[ship.masterId];
		var cost = chGetSupplyCost(ship);
		fuel += cost.fuel;
		ammo += cost.ammo;
		baux += cost.baux;
	}
	$('#hbSFuel').text(fuel);
	$('#hbSAmmo').text(ammo);
	$('#hbSBaux').text(baux);
}

function chGetSupplyCost(ship) {
	var shipd = SHIPDATA[ship.masterId];
	var baux = 0;
	for (var j=0; j<ship.planes.length; j++) baux += 5*(shipd.SLOTS[j]-ship.planes[j]);
	var costs = {
		fuel: Math.round((10-ship.fuel)*shipd.fuel/10),
		ammo: Math.round((10-ship.ammo)*shipd.ammo/10),
		baux: baux,
	};
	if (ship.LVL > 99) {
		costs.fuel -= Math.floor(.15*costs.fuel);
		costs.ammo -= Math.floor(.15*costs.ammo);
	}
	if (ship.masterId > 5000) {
		for (var j=0; j<ship.planes.length; j++) costs.fuel += 3*(shipd.SLOTS[j]-ship.planes[j]);
	}
	return costs;
}

function chClickMorale(fleetnum,shipnum) {
	var ship = CHDATA.ships[CHDATA.fleets[fleetnum][shipnum-1]];
	ship.morale = Math.min(85,ship.morale+12);
	chFleetSetMorale(fleetnum,shipnum,ship.morale);
	var fuel = Math.floor(SHIPDATA[ship.masterId].fuel * .4);
	var ammo = Math.floor(SHIPDATA[ship.masterId].ammo * .4);
	CHDATA.event.resources.fuel += fuel;
	CHDATA.event.resources.ammo += ammo;
	chUIUpdateResources();
}

function chUnequipAllShip(fleet, shipslot){
	for (var i=0; i<CHITEMSMAX+1; i++) {
		chTableSetEquip(-1, fleet, shipslot, i);
		var shipid = CHDATA.fleets[fleet][shipslot-1];
		chShipEquipItem(shipid,-1,i);
	}
	chTableSetShip(shipid, fleet, shipslot);
}

function chBlockFleetUI() {
	var offset = $('#separator').offset();
	$('#noclick').css('height',(offset.top)+'px');
	$('#noclick').show();
}

$(window).resize(function() {
	if (ONSORTIE) chBlockFleetUI();
});


var CHHPREGENTIMER = {
	interval: null,
	counter: 0,
	running: false,

	start: function(mapnum,counterInit) {
		console.log(counterInit);
		if (CHDATA.event.maps[mapnum].hp <= 0) return;
		var regenTick = MAPDATA[WORLD].maps[mapnum].hpRegenTick;
		this.counter = Math.floor(counterInit % regenTick) || 0;
		var maxhp = getMapHP(WORLD,mapnum,CHDATA.event.maps[mapnum].diff);
		if (counterInit) CHDATA.event.maps[mapnum].hp += Math.floor(counterInit/regenTick);
		if (CHDATA.event.maps[mapnum].hp > maxhp) CHDATA.event.maps[mapnum].hp = maxhp;
		
		if (this.interval) this.stop();
		var self = this;
		this.running = true;
		var file = FILE;
		this.interval = setInterval(function() {
			if (file != FILE || !CHDATA.event || CHDATA.event.maps[mapnum].hp <= 0) {
				self.stop();
				return;
			}
			if (CHDATA.event.maps[mapnum].hp >= maxhp) {
				self.counter = 0;
			} else if (++self.counter >= regenTick) {
				var nowhp = CHDATA.event.maps[mapnum].hp += 1 * RATE;
				self.counter = 0;
				if (mapnum == MAPNUM) {
					$('#srtHPText').text(nowhp + '/' + maxhp);
					$('#srtHPBar').css('width',Math.ceil(146*nowhp/maxhp)+'px');
				}
			}
		},1000);
	},
	
	stop: function() {
		console.log('regen stop');
		clearInterval(this.interval);
		this.interval = null;
		this.running = false;
		return this.counter;
	}
};

function chAllowImprovement(eqid) {
	if (!CHDATA.config.mechanics.improvement) return false;
	let dataDate = (CHDATA.config.mechanicsdate < MAPDATA[WORLD].date)? MAPDATA[WORLD].date : CHDATA.config.mechanicsdate;
	for (let date in IMPROVEMENTHISTORY) {
		if (date > dataDate && IMPROVEMENTHISTORY[date].indexOf(eqid) != -1) return false;
	}
	return true;
}

//----presets-----
function chSaveFleetPreset(fleetnum){
	// initializing preset slots in localstorage if they aren't already there
	if (!CHDATA.presets) CHDATA.presets = {};

	// get preset slot and commit fleet to localstorage
	let presetSlot = +$('#presets' + fleetnum + ' option:selected').prop('value'), isNew = false;
	if (presetSlot == 0) {
		isNew = true;
		while ($('#presets1' + '_' + (++presetSlot)).length);
	}
	if(!CHDATA.presets[presetSlot]) CHDATA.presets[presetSlot] = {};
	let sidFirst;
	for (let sid of CHDATA.fleets[fleetnum]) if (sid) { sidFirst = sid; break }
	if (!sidFirst) return;
	CHDATA.presets[presetSlot].fleet = CHDATA.fleets[fleetnum].slice();

	// commit fleet equips to localstorage
	CHDATA.presets[presetSlot].equips = {};
	for(let i in CHDATA.presets[presetSlot].fleet){
		if(CHDATA.presets[presetSlot].fleet[i] != null){
			let equips = CHDATA.ships[CHDATA.presets[presetSlot].fleet[i]].items.slice();
			CHDATA.presets[presetSlot].equips[CHDATA.presets[presetSlot].fleet[i]] = equips;
		}
	}

	// update preset selection
	let name = SHIPDATA[CHDATA.ships[sidFirst].masterId].name;
	if (isNew) {
		chPresetAddSelect(presetSlot,name);
	} else {
		$('.presetSelect').each(function() {
			$(this).children('option[value="'+presetSlot+'"]').text(presetSlot + ' - ' + name);
		});
	}
	$('.presetSelect').val(presetSlot);
}

function chLoadFleetPreset(fleetnum,loadequips){
	// update ships localstorage
	let presetSlot = +$('#presets' + fleetnum + ' option:selected').prop('value');
	if (presetSlot == 0) return;
	if (!CHDATA.presets[presetSlot]) return;
	let fleetPreset = CHDATA.presets[presetSlot].fleet.slice();
	for(let i = 0; i < CHDATA.fleets[fleetnum].length; ++i){
		if (i >= 6 && !CHDATA.fleets.sf) break;
		CHDATA.fleets[fleetnum][i] = null;
		chTableSetShip(fleetPreset[i], fleetnum, i+1);
	}

	if(loadequips && CHDATA.presets[presetSlot].equips){
		DIALOGFLEETSEL = fleetnum;
		for(let i1 = 0; i1 < CHDATA.fleets[fleetnum].length; ++i1){
			let equips = CHDATA.presets[presetSlot].equips[CHDATA.fleets[fleetnum][i1]];
			if(equips != null){
				for(let j = 0; j < equips.length; ++j){
					if (equips[j] == CHDATA.ships[CHDATA.fleets[fleetnum][i1]].items[j]) continue;
					// update global variables to simulate equipments being selected through the item dialog
					DIALOGSLOTSEL = (i1 + 1);
					DIALOGITEMSEL = (j + 1);
					chSetEquip('x' + equips[j]);
				}
			}
		}
		// reset globals after use
		DIALOGFLEETSEL = DIALOGSLOTSEL = DIALOGITEMSEL = -1;
	}
}

function chDeleteFleetPreset(fleetnum){
	let presetSlot = +$('#presets' + fleetnum + ' option:selected').prop('value');
	if (presetSlot == 0) return;
	if(CHDATA.presets[presetSlot]) delete CHDATA.presets[presetSlot];
	$('.presetSelect').each(function() {
		$(this).children('option[value="'+presetSlot+'"]').remove();
		if ($(this).children().length <= 0) {
			chPresetAddSelect(1,'Empty Slot');
		}
		$(this).prop('selectedIndex', 0);
	});
}

function chInitPreset() {
	if(!CHDATA.presets) CHDATA.presets = {};

	$('.presetSelect').html('<option value="0">New Preset</option>');
	for (let n of Object.keys(CHDATA.presets).sort((a,b) => a-b)) {
		let sidFirst;
		for (let sid of CHDATA.presets[n].fleet) if (sid) { sidFirst = sid; break; }
		let name = SHIPDATA[CHDATA.ships[sidFirst].masterId].name;
		chPresetAddSelect(n,name);
	}
}

function chPresetAddSelect(num,name) {
	$('.presetSelect').each(function(idx) {
		$(this).append('<option id="' + $(this).attr('id') + '_' + num + '" value="' + num + '">' + num + ' - ' + name + '</option>');
	});
}
//---------

$('#inpSoundBGM').change(function() {
	($(this).prop('checked'))? SM.turnOnBGM() : SM.turnOffBGM();
});
$('#inpSoundSFX').change(function() {
	let isOn = $(this).prop('checked');
	($(this).prop('checked'))? SM.turnOnSFX() : SM.turnOffSFX();
});
$('#inpSoundVoice').change(function() {
	($(this).prop('checked'))? SM.turnOnVoice() : SM.turnOffVoice();
});