var CHDATA = {};
var FILE = 1;
var EVENTNUM = 27;
var DIALOGSLOTSEL = -1;
var DIALOGITEMSEL = -1;
var DIALOGFLEETSEL = 1;
var DIALOGSORT = -1;
var ITEMNODES = [];

var MECHANICDATES = {
	artillerySpotting: '2014-04-23',
	fitGun: '2014-07-28',
	improvement: '2014-10-24',
	AACI: '2014-11-14',
	proficiency: '2015-08-10',
	OASW: '2016-06-30',
	shellingSoftCap: '2017-03-17',
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
		divWrap.append('<div class="ftinfo" style="width:80px;display:none"><img title="Effective LoS" src="assets/stats/los3.png"/><span id="fleetefflos'+num+'"></span></div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Air Power" src="assets/stats/ac.png"/><span id="fleetap'+num+'"></span></div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Fleet Speed" src="assets/stats/sp.png"/><span id="fleetspd'+num+'"></span></div>');
		divWrap.append('<div class="ftinfo" style="width:80px"><img title="Transport Load-Off" src="assets/items/25.png" style="margin-top:-6px"/><span id="fleettransport'+num+'"></span></div>');
		divWrap.append('<br style="clear:both"/>');
	}
	for (var i=1; i<=6; i++) {
		var table = $('<table class="t2" id="fleet'+num+i+'"></table>');
		table.append($('<tr class="t2show"><td colspan="4"><div style="text-align:center"><div class="t2name" id="fleetname'+num+i+'" onclick="chDialogShip('+num+','+i+')">Slot '+num+'</div></div></td></tr>'));
		table.append($('<tr class="t2show"><td colspan="4"><img src="assets/icons/Kblank.png" class="t2portrait" id="fleetimg'+num+i+'"/><img id="fleetlock'+num+i+'" src="" style="position:absolute;margin-left:-130px;margin-top:-3px"/></td></tr>'));
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
		tr.append($('<td colspan="2"><img src="assets/stats/fuel.png"/><div class="t2resouter"></div><div id="fuelbar'+num+i+'" class="t2resinner" style="background-color:#00CC00"></div></td>'));
		tr.append($('<td colspan="2"><img src="assets/stats/ammo.png"/><div class="t2resouter"></div><div id="ammobar'+num+i+'" class="t2resinner" style="background-color:#999900"></div></td>'));
		table.append(tr);
		divWrap.append(table);
	}
}
function chCreateFleetTableLBAS(root,num) {
	var divWrap = $('<div class="ftwrap"></div>');
	$(root).append(divWrap);
	for (var i=1; i<=6; i++) {
		var table = $('<table class="t2" id="fleet'+num+i+'"></table>');
		if (i >= 4) { divWrap.append(table); continue; }
		table.append($('<tr class="t2show"><td colspan="4"><div style="text-align:center"><div class="t2name" id="fleetname'+num+i+'">Base '+i+'</div></div></td></tr>'));
		table.append($('<tr class="t2show"><td colspan="4"><img src="assets/icons/LBAS'+i+'.png" class="t2portrait" id="fleetimg'+num+i+'"/></td></tr>'));
		tr = $('<tr></tr>');
		tr.append($('<td colspan="2"><div class="t2stat"><img src="assets/stats/rn.png"/><span id="fleetlbrn'+num+i+'"></span></div></td>'));
		tr.append($('<td colspan="2"><div class="t2stat"><img src="assets/stats/ac.png"/><span id="fleetlbac'+num+i+'"></span></div></td>'));
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
	}
}
chCreateFleetTable('#mainfleetspace',1,'Main Fleet');
chCreateFleetTable('#escortfleetspace',2,'Escort Fleet',true);
chCreateFleetTable('#supportfleetspace1',3,'Normal Support');
chCreateFleetTable('#supportfleetspace2',4,'Boss Support');
chCreateFleetTableLBAS('#lbasspace',5,'Land Base');

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
			if (fleetnum == DIALOGFLEETSEL) continue;
			for (var i=0; i<6; i++) {
				if (!CHDATA.fleets[fleetnum][i]) continue;
				var tr = $('#ss'+CHDATA.fleets[fleetnum][i]);
				if (tr.css('display')=='none') continue;
				if (!chCanJoinFleet(sidnow,fleetnum,i+1)) tr.hide();
			}
		}
	}
}

function chCanJoinFleet(sid,fleet,slot) {
	for (var i=0; i<6; i++) {
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
				if (CHDATA.config.mechanics.improvement && item.stars>0) td.append($('<div style="position:absolute;margin-left:-30px;margin-top:-1px;font-weight:bold;color:#45A9A5">+'+item.stars+'</div>'));
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
	if (shipid && SHIPDATA[CHDATA.ships[shipid].masterId].SLOTS.length < eqnum) return;
	DIALOGFLEETSEL = fleet;
	DIALOGSLOTSEL = slot;
	DIALOGITEMSEL = eqnum;
	$('#dialogselequip').dialog('open');
	var defcat;
	switch(SHIPDATA[CHDATA.ships[shipid].masterId].type) {
		case 'CVL': case 'CV': case 'CVB': case 'LHA': defcat = 5; break;
		case 'CL': case 'CLT': case 'CT': case 'CA': case 'CAV': defcat = 13; break;
		case 'FBB': case 'BB': case 'BBV': defcat = 14; break;
		case 'SS': case 'SSV': defcat = 3; break;
		case 'LandBase': defcat = 6; break;
		default: defcat = 1; break;
	}
	chDialogItemFilter(defcat);
}

function chDialogItemFilter(category,frombutton) {
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
		case 8: types=[CARRIERSCOUT,AUTOGYRO,ASWPLANE,JETBOMBER]; break;
		case 9: types=[RADARS,RADARL,RADARXL]; break;
		case 10: types=[DEPTHCHARGE,SONARS,SONARL]; break;
		case 11: types=[APSHELL,TYPE3SHELL]; break;
		case 15: types=[AAGUN]; break;
		case 12: types=[BULGEM,BULGEL,LANDINGCRAFT,LANDINGTANK,SEARCHLIGHTS,SEARCHLIGHTL,STARSHELL,PICKET,WG42,SRF,FCF,DRUM,SCAMP,REPAIR]; break;
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
		var num = (type == SEAPLANE || type == CARRIERSCOUT || type == FLYINGBOAT)? 4 : (MAPDATA[WORLD].lbasSlotCount || 18);
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
	}
	
	ship.items[slot] = itemid;
}

//------------------------

function chLoadKC3File() {
	var files = document.getElementById('fileKC3').files;
	var reader = new FileReader();
	reader.readAsText(files[0]);
	reader.addEventListener('loadend',function() { chProcessKC3File(reader); });
	console.log('LOAD');
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
	
	CHDATA.player = kcdata.player;
	CHDATA.gears = kcdata.gears;
	CHDATA.ships = {};
	CHDATA.event = { createtime:Date.now(), lasttime:0, maps:{}, world:EVENTNUM, mapnum:1, unlocked:1, resources: { fuel: 0, ammo: 0, steel: 0, baux: 0 } };
	CHDATA.fleets = {1:[null,null,null,null,null,null],2:[null,null,null,null,null,null],3:[null,null,null,null,null,null],4:[null,null,null,null,null,null],combined:0};
	if (!CHDATA.config) CHDATA.config = {};
	CHDATA.config.mechanics = {};
	var mechanicsdate = CHDATA.config.mechanicsdate || MAPDATA[CHDATA.event.world].date;
	for (var mechanic in MECHANICDATES) {
		CHDATA.config.mechanics[mechanic] = (MECHANICDATES[mechanic] <= mechanicsdate);
	}
	CHDATA.config.shelldmgbase = (CHDATA.config.mechanics.shellingSoftCap)? 180 : 150;
	
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
		shipN.items[4] = shipO.ex_item || -1;
		shipN.planes = shipd.SLOTS;
		shipN.fuel = 10;
		shipN.ammo = 10;
		shipN.morale = 49;
		
		if (CHDATA.config.disableships && shipd.added >= MAPDATA[CHDATA.event.world].date) {
			for (var i=0; i<shipN.items.length; i++) {
				if (shipN.items[i] <= 0) continue;
				if (!EQDATA[CHDATA.gears['x'+shipN.items[i]].masterId]) {
					CHDATA.gears['x'+shipN.items[i]].heldBy = null;
					shipN.items[i] = -1;
					chEmergencyResetStats(shipN,shipO);
					break;
				}
			}
			if (!chRevertShip(shipN)) {
				shipN.disabled = true;
				for (var i=0; i<shipN.items.length; i++) chShipEquipItem(sid,-1,i); //unequip items;
			} else {
				// unequip items no longer equipable
				var shiptype = SHIPDATA[shipN.masterId].type;
				for (var i=0; i<shipN.items.length; i++) {
					if (shipN.items[i] == -1) continue;
					var eqtype = EQDATA[CHDATA.gears['x'+shipN.items[i]].masterId].type;
					if ((EQTDATA[eqtype].canequip.indexOf(shiptype) == -1 && (!EQTDATA[eqtype].canequipS||EQTDATA[eqtype].canequipS.indexOf(shipN.masterId)==-1)) || (EQTDATA[eqtype].cannotequipS && EQTDATA[eqtype].cannotequipS.indexOf(shipN.masterId)!=-1))
						chShipEquipItem(sid,-1,i);
				}
			}
		}
		
		chShipEquipItem(sid,-1,4); //unequip extra item if not allowed, currently not supported, add as option later
		
		for (var i=0; i<shipN.items.length; i++) {
			if (shipN.items[i] <= 0) continue;
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

function chRevertShip(ship) {
	var shipd = SHIPDATA[ship.masterId];
	var newshipd = SHIPDATA[ship.masterId], newmid = ship.masterId;
	do {
		if (!newshipd.prev) return false;
		newmid = newshipd.prev;
		newshipd = SHIPDATA[newshipd.prev];
	} while (newshipd.added >= MAPDATA[CHDATA.event.world].date);
	
	ship.masterId = newmid;
	ship.HP = [newshipd.HP,newshipd.HP];
	var stats = ['FP','TP','AA','AR','LUK'];
	for (var i=0; i<stats.length; i++) {
		ship[stats[i]] -= (shipd[stats[i]] - newshipd[stats[i]]);
	}
	stats = ['EV','ASW','LOS'];
	for (var i=0; i<stats.length; i++) {
		var base = newshipd[stats[i]+'base'], max = newshipd[stats[i]];
		ship[stats[i]] =  Math.floor(base + (max-base)*ship.LVL/99);
		for (var j=0; j<ship.items[j]; j++) {
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
	
	var counts = {DD:0,CL:0,CLT:0,CA:0,CAV:0,BB:0,FBB:0,BBV:0,AV:0,SS:0,SSV:0,CVL:0,CV:0,CVB:0,LHA:0,AS:0,AR:0,AO:0,CT:0,total:0,ids:[]};
	var flag = null
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		if (!CHDATA.fleets[1][i]) continue;
		if (!flag) flag = CHDATA.fleets[1][i];
		counts[SHIPDATA[CHDATA.ships[CHDATA.fleets[1][i]].masterId].type]++;
		counts.ids.push(CHDATA.ships[CHDATA.fleets[1][i]].masterId);
		counts.total++;
	}
	if (CHDATA.fleets.combined) {
		var countsE = {DD:0,CL:0,CLT:0,CA:0,CAV:0,BB:0,FBB:0,BBV:0,AV:0,SS:0,SSV:0,CVL:0,CV:0,CVB:0,LHA:0,AS:0,AR:0,AO:0,CT:0,total:0,ids:[]};
		var flagE = null;
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			if (!CHDATA.fleets[2][i]) continue;
			if (!flagE) flagE = CHDATA.fleets[2][i];
			countsE[SHIPDATA[CHDATA.ships[CHDATA.fleets[2][i]].masterId].type]++;
			countsE.ids.push(CHDATA.ships[CHDATA.fleets[1][i]].masterId);
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
			if (counts.CV+counts.CVB+counts.CVL) errors.push('Main Fleet: CV(L) not allowed');
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
			if (['CL','CT'].indexOf(SHIPDATA[CHDATA.ships[flag].masterId].type) != -1) errors.push('Escort Fleet: Flagship must be CL/CT');
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
		if (CHDATA.event.maps[MAPNUM].diff > 1 && mdata.checkLock && ship.lock && mdata.checkLock.indexOf(ship.lock) != -1)
			errors.push(SHIPDATA[ship.masterId].name + ' is locked to another map.');
		//empty item slots
		var noitem1 = 0, noitem2 = 0;
		for (var j=0; j<ship.items.length; j++) {
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

	chLoadMainFleet();
	if (CHDATA.fleets.combined) chLoadEscortFleet();
	else FLEETS1[1] = null;
	if (CHDATA.fleets.supportN) chLoadSupportFleetN();
	else FLEETS1S[0] = null;
	if (CHDATA.fleets.supportB) chLoadSupportFleetB();
	else FLEETS1S[1] = null;
	
	if (MAPDATA[CHDATA.event.world].allowLBAS) {
		for (var i=1; i<=3; i++) {
			if (i <= MAPDATA[CHDATA.event.world].maps[MAPNUM].lbas && CHDATA.fleets['lbas'+i]) {
				chLoadLBAS(i);
			} else {
				LBAS[i-1] = null;
				CHDATA.fleets['lbas'+i] = false;
			}
		}
		var fuel = 0, ammo = 0;
		for (var i=0; i<LBAS.length; i++) {
			if (!LBAS[i]) continue;
			for (var j=0; j<LBAS[i].equips.length; j++) {
				var equip = LBAS[i].equips[j];
				if (equip.type == LANDBOMBER || equip.type == INTERCEPTOR) { fuel += 27; ammo += 12; }
				else if (equip.type == CARRIERSCOUT || equip.type == SEAPLANE || equip.type == FLYINGBOAT) { fuel += 4; ammo += 3; }
				else { fuel += 18; ammo += 11; }
			}
		}
		CHDATA.event.resources.fuel += fuel;
		CHDATA.event.resources.ammo += ammo;
		chUIUpdateResources();
	}
	
	for (var mechanic in MECHANICS) {
		MECHANICS[mechanic] = CHDATA.config.mechanics[mechanic];
	}
	MECHANICS.morale = true;
	SHELLDMGBASE = CHDATA.config.shelldmgbase;
	if (MAPDATA[CHDATA.event.world].ptImpSpecial == 2) { BREAKPTIMPS = true; NERFPTIMPS = false; }
	else if (MAPDATA[CHDATA.event.world].ptImpSpecial == 1) { BREAKPTIMPS = false; NERFPTIMPS = true; }
	else { BREAKPTIMPS = NERFPTIMPS = false; }
	$('#sortiespace').hide();
	$('#battlespace').show();
	$('#battlespace').css('animation','');
	$('#battlespace').css('animation','fadein 0.25s linear');
	chClickedTab('#tabmain');
	chBlockFleetUI();
	chPlayerStart();
}

function chLoadMainFleet() {
	chTablePushUp(1);
	var data = chLoadFleet(CHDATA.fleets[1],1);
	CHSHIPCOUNT = data[1];
	FLEETS1[0] = new Fleet(0);
	FLEETS1[0].loadShips(data[0]);
	
	if (!CHDATA.config.disablelock) {
		var lock = MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLock;
		if (lock) {
			for (var i=0; i<CHDATA.fleets[1].length; i++) {
				if (!CHDATA.fleets[1][i]) continue;
				if (CHDATA.ships[CHDATA.fleets[1][i]].lock) continue;
				CHDATA.ships[CHDATA.fleets[1][i]].lock = lock;
				$('#fleetlock1'+(i+1)).attr('src','assets/maps/lock'+lock+'.png');
			}
		}
	}
}

function chLoadEscortFleet() {
	chTablePushUp(2);
	var data = chLoadFleet(CHDATA.fleets[2],2);
	CHSHIPCOUNT.escort = data[1];
	FLEETS1[1] = new Fleet(0,FLEETS1[0]);
	FLEETS1[1].loadShips(data[0]);
	
	if (!CHDATA.config.disablelock) {
		var lock = MAPDATA[WORLD].maps[CHDATA.event.mapnum].giveLock;
		if (lock) {
			for (var i=0; i<CHDATA.fleets[2].length; i++) {
				if (!CHDATA.fleets[2][i]) continue;
				if (CHDATA.ships[CHDATA.fleets[2][i]].lock) continue;
				CHDATA.ships[CHDATA.fleets[2][i]].lock = lock;
				$('#fleetlock2'+(i+1)).attr('src','assets/maps/lock'+lock+'.png');
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
	if (counts.aCV >= 3) return 1;
	if (counts.DD + counts.CL + counts.CLT >= 4) return 3;
	return 2;
}

function chLoadLBAS(num) {
	var base = CHDATA.ships['z'+num];
	var equips = [], improvs = [0,0,0,0], profs = [0,0,0,0];
	for (var j=0; j<base.items.length; j++) {
		if (base.items[j] <= 0) { continue; }
		var item = CHDATA.gears['x'+base.items[j]];
		equips.push(item.masterId);
		if (CHDATA.config.mechanics.improvement) improvs[j] = item.stars || 0;
		if (CHDATA.config.mechanics.proficiency) profs[j] = Math.max(0,item.ace) || 0;
	}
	LBAS[num-1] = new LandBase(equips,improvs,profs);
	LBAS[num-1].PLANESLOTS = base.planes.slice();
	LBAS[num-1].planecount = base.planes.slice();
}

function chLoadFleet(sids,fleetnum) {
	var simships = [];
	var counts = {DD:0,CL:0,CLT:0,CA:0,CAV:0,BB:0,FBB:0,BBV:0,AV:0,SS:0,SSV:0,CVL:0,CV:0,CVB:0,LHA:0,AS:0,AR:0,AO:0,CT:0,total:0,ids:[],aBB:0,aCV:0,speed:10};
	for (var i=0; i<sids.length; i++) {
		if (sids[i] <= 0) continue;
		var ship = CHDATA.ships[sids[i]];
		var shipd = SHIPDATA[ship.masterId];
		
		var ShipType = window[shipd.type];
		var simship = new ShipType(ship.masterId,shipd.name,0,ship.LVL,ship.HP[0],ship.FP,ship.TP,ship.AA,ship.AR,ship.EV,ship.ASW,ship.LOS,ship.LUK,ship.RNG,ship.planes);
		simship.maxHP = ship.HP[1];
		if (i!=0 && simship.HP/simship.maxHP <= .25) simship.protection = false;
		simship.fuelleft = ship.fuel;
		simship.ammoleft = ship.ammo;
		simship.morale = ship.morale || 49;
		
		var equips = [], improvs = [0,0,0,0], profs = [0,0,0,0];
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) { continue; }
			var item = CHDATA.gears['x'+ship.items[j]];
			equips.push(item.masterId);
			//if event allows improve, set improvs[j]
			if (CHDATA.config.mechanics.improvement) improvs[j] = item.stars || 0;
			if (CHDATA.config.mechanics.proficiency) profs[j] = Math.max(0,item.ace) || 0;
		}
		simship.loadEquips(equips,improvs,profs,false);
		
		simships.push(simship);
		counts[shipd.type]++;
		counts.total++;
		if (['BB','FBB','BBV'].indexOf(shipd.type) != -1) counts.aBB++;
		if (['CV','CVL','CVB'].indexOf(shipd.type) != -1) counts.aCV++;
		counts.ids.push(ship.masterId);
		if (shipd.SPD == 5) counts.speed = 5;
	}
	
	return [simships,counts];
}

function chFillTable(sids,fleet) {
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
	$('#fleetlvl'+fleet+slot).text(ship.LVL);
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
	$('#fleetsp'+fleet+slot).text({0:'N/A',5:'Slow',10:'Fast'}[shipd.SPD]);
	
	if (fleet == 5) { //LBAS only
		chLoadLBAS(slot);
		$('#fleetlbac'+fleet+slot).text(LBAS[slot-1].fleetAirPower());
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
	
	for (var i=0; i<4; i++) {
		chTableSetEquip(ship.items[i],fleet,slot,i+1);
		if (shipd.SLOTS.length <= i) $('#fleeteq'+fleet+(i+1)+slot).attr('class','t2equipno');
		else $('#fleeteq'+fleet+(i+1)+slot).attr('class','t2equip');
	}
	
	//swap if needed
	if (!noswap) {
		var oldfleet, oldslot;
		for (var fleetnum in CHDATA.fleets) {
			for (var i=0; i<CHDATA.fleets[fleetnum].length; i++) {
				if (fleetnum == fleet && i == slot-1) continue;
				if (CHDATA.fleets[fleetnum][i] == sid) { oldfleet = fleetnum; oldslot = i+1; break; }
			}
			if (oldfleet) break;
		}
		if (oldfleet) chTableSetShip(oldsid,oldfleet,oldslot,true);
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
	
	CHDATA.fleets[fleet][slot-1] = null;
	chUpdateFleetInfo(fleet);
}

function chTablePushUp(fleet) {
	var emptyslot = 0;
	for (var i=0; i<6; i++) {
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
		$('#fleeteqi'+fleet+itemslot+shipslot).hide();
		$('#fleeteqi'+fleet+itemslot+shipslot).attr('src',null);
		$('#fleeteqn'+fleet+itemslot+shipslot).text('');
		$('#fleeteqs'+fleet+itemslot+shipslot).text('');
		$('#fleeteqimpr'+fleet+itemslot+shipslot).text('');
		$('#fleeteq'+fleet+itemslot+shipslot).css('background-image','');
	} else {
		$('#fleeteqi'+fleet+itemslot+shipslot).show();
		var item = CHDATA.gears['x'+itemid];
		var itemd = EQDATA[item.masterId];
		$('#fleeteqi'+fleet+itemslot+shipslot).attr('src','assets/items/'+EQTDATA[itemd.type].image+'.png');
		$('#fleeteqn'+fleet+itemslot+shipslot).text(itemd.name);
		$('#fleeteqs'+fleet+itemslot+shipslot).text(CHDATA.ships[CHDATA.fleets[fleet][shipslot-1]].planes[itemslot-1]);
		if (CHDATA.config.mechanics.improvement && item.stars>0) $('#fleeteqimpr'+fleet+itemslot+shipslot).text('+'+item.stars);
		else $('#fleeteqimpr'+fleet+itemslot+shipslot).text('');
		if (CHDATA.config.mechanics.proficiency && item.ace>0) $('#fleeteq'+fleet+itemslot+shipslot).css('background-image',"url('assets/stats/prof"+item.ace+".png')");
		else $('#fleeteq'+fleet+itemslot+shipslot).css('background-image','');
	}
}

function chUpdateFleetInfo(fleetnum) {
	// if (fleetnum != 1 && fleetnum != 2) return;
	if (fleetnum == 2) fleetnum = 1;
	var ap = 0, los = 0, spd = 'Fast';
	var ships = [];
	for (var i=0; i<CHDATA.fleets[fleetnum].length; i++) ships.push(CHDATA.ships[CHDATA.fleets[fleetnum][i]]);
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) ships.push(CHDATA.ships[CHDATA.fleets[2][i]]);
	}
	for (var i=0; i<ships.length; i++) {
		var ship = ships[i];
		if (!ship) continue;
		if (SHIPDATA[ship.masterId].SPD == 5) spd = 'Slow';
		var shiplos = ship.LOS;
		for (var j=0; j<4; j++) {
			if (ship.items[j] <= 0) continue;
			var eq = CHDATA.gears['x'+ship.items[j]];
			var eqd = EQDATA[eq.masterId];
			if (EQTDATA[eqd.type].isfighter && eqd.AA && i<CHDATA.fleets[fleetnum].length) {
				var impr = (CHDATA.config.mechanics.improvement && eq.stars>0)? eq.stars : 0;
				var prof = (CHDATA.config.mechanics.proficiency && eq.ace>0)? eq.ace : 0;
				var eqo = new Equip(eq.masterId,impr,prof);
				ap += Math.floor((eqd.AA+impr*.2) * Math.sqrt(ship.planes[j]) + (eqo.APbonus||0));
			}
			
			if (eqd.LOS) {
				var mod;
				switch(eqd.type) {
					case DIVEBOMBER: mod = 1.04; break;
					case TORPBOMBER: mod = 1.37; break;
					case CARRIERSCOUT: mod = 1.66; break;
					case SEAPLANE: mod = 2; break;
					case SEAPLANEBOMBER: mod = 1.78; break;
					case RADARS: mod = 1; break;
					case RADARL: mod = .99; break;
					case SEARCHLIGHTS: case SEARCHLIGHTL: mod = .91; break;
					default: mod = 0; break;
				}
				los += mod * eqd.LOS;
				shiplos -= eqd.LOS;
			}
		}
		los += Math.sqrt(shiplos)*1.69;
	}
	los -= Math.ceil(CHDATA.player.level/5)*5 * .61;
	$('#fleetap'+fleetnum).text(ap);
	$('#fleetefflos'+fleetnum).text(Math.floor(los*10)/10);
	$('#fleetspd'+fleetnum).text(spd);
	
	if (MAPDATA[CHDATA.event.world].transportCalc) {
		let tp = MAPDATA[CHDATA.event.world].transportCalc(ships);
		$('#fleettransport'+fleetnum).text(tp);
	} else {
		$('#fleettransport'+fleetnum).parent().hide();
	}
}

// function chTableTrySetShip(sid,slot) {
	
	// chTableSetShip(sid, slot);
// }



function chClickedCombine(num,first) {
	if (CHDATA.fleets.combined != num || first) {
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
		$('#btncombine'+num).css('opacity',.5);
		$('#btncombine'+num).css('background-color','transparent');
		$('#escortfleetspace').hide();
		$('#combineBG').hide();
	}
	chUpdateFleetInfo(1);
}

//----------------sortie----------------
function chLoadSortieInfo(mapnum) {
	var world = CHDATA.event.world;
	if (!MAPDATA[world]) return;
	var mapdata = MAPDATA[world].maps[mapnum];
	if (!mapdata) return;
	var title = mapdata.name;
	if (mapdata.nameT) title += (mapnum <= CHDATA.event.unlocked)? ': '+mapdata.nameT : ': ???';
	$('#srtTitle').text(title);
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
	} else {
		$('#srtHPBar').css('background-color','red');
	}
	
	if (CHDATA.config.diffmode == 1) {
		$('#srtDiffTitle').text('HQ ' + CHDATA.player.level);
		$('#srtDiffTitle').css('color','#FFFF66');
		$('#srtStart').prop('disabled',(CHDATA.event.unlocked < mapnum));
		$('#srtDiffHard').hide();
		$('#srtDiffMed').hide();
		$('#srtDiffEasy').hide();
		$('#srtDiffBack').hide();
		$('#srtDiffChange').hide();
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
			default:
				$('#srtDiffTitle').text('');
				$('#srtDiffTitle').css('color','');
				break;
		}
		if (mapnum > CHDATA.event.unlocked) {
			$('#srtDiffHard').hide();
			$('#srtDiffMed').hide();
			$('#srtDiffEasy').hide();
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
			$('#srtDiffBack').hide();
			$('#srtDiffChange').hide();
			chAddSortieError(1);
		} else {
			$('#srtDiffHard').hide();
			$('#srtDiffMed').hide();
			$('#srtDiffEasy').hide();
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
	}
	
	if (CHDATA.config.disablelock || !(mapdata.giveLock||mapdata.checkLock)) {
		$('#srtLock').hide();
	} else {
		$('#srtLock').show();
		if (mapdata.giveLock) $('#srtLockImg').attr('src','assets/maps/lock'+mapdata.giveLock+'.png');
		else $('#srtLockImg').attr('src','');
		$('#srtNoLock').html('');
		if (mapdata.checkLock) {
			for (var i=0; i<mapdata.checkLock.length; i++) {
				$('#srtNoLock').append('<div style="display:inline-block"><img src="assets/maps/lockno.png" style="position:absolute;height:40px"/><img src="assets/maps/lock'+mapdata.checkLock[i]+'.png" style="height:40px;vertical-align:middle"/></div>');
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
	chLoadSortieInfo(MAPNUM+1);
}

function chSortieStartChangeDiff() {
	chAddSortieError(1);
	$('#srtDiffTitle').text('');
	$('#srtHPBar').css('width','146px');
	$('#srtHPBar').css('animation','');
	$('#srtHPBar').css('animation','fadein 0.5s ease 0s infinite alternate');
	
	if (MAPNUM > 1 && CHDATA.event.maps[MAPNUM-1].diff <= 1 || MAPDATA[WORLD].allowDiffs.indexOf(3) == -1) $('#srtDiffHard').hide();
	else $('#srtDiffHard').show();
	if (MAPDATA[WORLD].allowDiffs.indexOf(2) == -1) $('#srtDiffMed').hide();
	else $('#srtDiffMed').show();
	if (MAPDATA[WORLD].allowDiffs.indexOf(1) == -1) $('#srtDiffEasy').hide();
	else $('#srtDiffEasy').show();
	$('#srtDiffBack').show();
	$('#srtDiffChange').hide();
}

function chSortieEndChangeDiff() {
	chRemoveSortieError(1);
	$('#srtHPBar').css('animation','');
	$('#srtDiffHard').hide();
	$('#srtDiffMed').hide();
	$('#srtDiffEasy').hide();
	$('#srtDiffBack').hide();
	$('#srtDiffChange').show();
	
	chLoadSortieInfo(CHDATA.event.mapnum);
}

function chSortieChangeDiff(diff) {
	if (MAPDATA[WORLD].maps[MAPNUM].parts) {
		mapChangePart(WORLD,MAPNUM,1);
		CHDATA.event.maps[CHDATA.event.mapnum].part = 1;
	}
	if (MAPDATA[WORLD].maps[MAPNUM].extraLock){
		mapChangeLock(diff,WORLD,MAPNUM);
	}
	if (CHDATA.event.maps[CHDATA.event.mapnum].diff < diff && WORLD >= 35){
		delete CHDATA.event.maps[CHDATA.event.mapnum].debuff;
		delete CHDATA.event.maps[CHDATA.event.mapnum].debuffed;
		delete CHDATA.event.maps[CHDATA.event.mapnum].unlocked;
	}
	CHDATA.event.maps[CHDATA.event.mapnum].diff = diff;
	CHDATA.event.maps[CHDATA.event.mapnum].hp = getMapHP(WORLD,CHDATA.event.mapnum,diff);
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
	if (!CHDATA.fleets['lbas'+num]) {
		CHDATA.fleets['lbas'+num] = true;
		$('#btnLBAS'+num).css('opacity',1);
	} else {
		CHDATA.fleets['lbas'+num] = false;
		$('#btnLBAS'+num).css('opacity',.5);
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

function chPushResupply(fleetnum,shipnum,fuel,ammo,planes) {
	var sid = CHDATA.fleets[fleetnum][shipnum-1];
	var ship = CHDATA.ships[sid];
	if (!ship) return;
	ship.fuel = fuel;
	ship.ammo = ammo;
	ship.planes = planes.slice();
	chFleetSetResupply(fleetnum,shipnum,fuel,ammo,planes);
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
		if (cost.fuel && cost.steel) buckets += 1;
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
		fuel: Math.floor((10-ship.fuel)*shipd.fuel/10),
		ammo: Math.floor((10-ship.ammo)*shipd.ammo/10),
		baux: baux,
	};
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

function chBlockFleetUI() {
	var offset = $('#separator').offset();
	$('#noclick').css('height',(offset.top)+'px');
	$('#noclick').show();
}

$(window).resize(function() {
	if (ONSORTIE) chBlockFleetUI();
});