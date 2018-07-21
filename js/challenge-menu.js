$('#dialogmainmenu').dialog({
	autoOpen:false,
	width:800,
	height:600,
	draggable: false,
	resizable: false,
	modal:true,
	closeOnEscape:false,
});

$('#dialogreward').dialog({
	autoOpen:false,
	width:380,
	height:330,
	draggable: false,
	resizable: false,
	modal:true,
});

function chOpenMenu(allowclose) {
	if (!allowclose) $(".ui-dialog-titlebar").hide();

	$('#dialogmainmenu').dialog('open');
	
	var foundfile = false;
	for (var key in localStorage) {
		if (key.indexOf('ch_basic') == 0) {
			foundfile = true;
		}
	}
	// foundfile = false; //testing
	
	if (!foundfile) {
		$('#menufileselect').hide();
		$('#menuevents').show();
	} else {
		chMenuShowFiles();
		$('#menufileselect').show();
		$('#menuevents').hide();
	}
	$('#menuloadfile').hide();
	$('#menusettings').hide();
	$('#menufiledeleteprompt').hide();
	
	$('#fileKC3').val('');
}

function chMenuShowFiles() {
	var nums = [];
	for (var key in localStorage) {
		if (key.indexOf('ch_basic') != 0) continue;
		var num = key.substr(8);
		if ($('#chfile'+num).length) {
			if (num == localStorage.ch_file) {
				$('#chfile'+num).html('');
			} else {
				$('#chfile'+num+' div.menufiledelete').show();
				continue;
			}
		}
		var data = JSON.parse(localStorage[key]);
		nums.push({ num: parseInt(num), data: data });
	}
	nums.sort(function(a,b) { return a.data.event.createtime - b.data.event.createtime; });
	for (var k=0; k<nums.length; k++) {
		var num = nums[k].num, key = 'ch_basic'+nums[k];
		var data = nums[k].data;
		var mdata = MAPDATA[data.event.world];
		var tr = $('#chfile'+num);
		if (tr.length <= 0) {
			tr = $('<tr id="chfile'+num+'" class="chfile" onclick="chMenuLoadFile('+num+')"></tr>');
			$('#tfileselect').append(tr);
		}
		var td = $('<td style="display:block"></td>');
		td.append($('<img src="'+mdata.bannerImg+'" style="opacity:.25;position:absolute" />'));
		var divMain = $('<div style="position:absolute;margin-left:20px"></div>');
		td.append(divMain);
		divMain.append($('<span>'+mdata.name+': '+data.player.name+' - HQ '+data.player.level+/*' - '+(new Date(data.event.lasttime)).toLocaleString()+*/'</span><br>'));
		var progress = 0, total = 0;
		var medals = [];
		for (var mapnum in mdata.maps) total++;
		for (var mapnum in data.event.maps) {
			var nowhp = data.event.maps[mapnum].hp;
			var maxhp = getMapHP(data.event.world,mapnum,data.event.maps[mapnum].diff) || 0;
			if (!maxhp) continue;
			progress += (maxhp-nowhp)/maxhp/total;
			if (nowhp <= 0) medals[mapnum-1] = data.event.maps[mapnum].diff;
		}
		var divMedal = $('<div style="height:50px"></div>');
		var divBar = $('<div style="width:420px;height:20px;float:left"></div>');
		for (var i=0; i<medals.length; i++) {
			var div = $('<div style="width:50px;height:50px;float:left"></div>');
			divMedal.append(div);
			if (!medals[i]) continue;
			div.append($('<img src="assets/maps/medal'+medals[i]+'.png" style="height:40px;margin-top:8px" />'));
		}
		divMain.append(divMedal);
		divBar.append($('<div style="width:400px;height:10px;position:absolute;border:1px solid black;background-color:white;border-radius:5px"></div>'));
		divBar.append($('<div style="width:'+(progress*400)+'px;height:10px;position:absolute;margin-left:1px;margin-top:1px;background-color:green;border-radius:4px"></div>'));
		var divProgress = $('<div></div>');
		divProgress.append(divBar);
		divProgress.append($('<div style="float:left;margin-top:-5px"><span>'+Math.floor(progress*100)+'%</span></div>'));
		divMain.append(divProgress);
		var divDelete = $('<div class="menufiledelete" onclick="chMenuClickedDeleteFile(this,'+num+');event.stopPropagation()">&#10006;</div>');
		td.append(divDelete);
		if (num == localStorage.ch_file) divDelete.hide();
		tr.append(td);
	}
}

function chMenuLoadFile(file) {
	$('#dialogmainmenu').dialog('close');
	if (file == localStorage.ch_file) return;
	chSave();
	chLoadFile(file);
}

var DELETEFILE = 0;
function chMenuClickedDeleteFile(caller,file) {
	if (file == localStorage.ch_file) return;
	DELETEFILE = file;
	$('#menufiledeleteprompt').show();
	var c = $(caller).offset();
	$('#menufiledeleteprompt').offset({top: c.top-2, left: c.left-737});
}

function chMenuDeleteFile() {
	delete localStorage['ch_basic'+DELETEFILE];
	delete localStorage['ch_data'+DELETEFILE];
	$('#chfile'+DELETEFILE).remove();
	$('#menufiledeleteprompt').hide();
}

function chMenuSelectedEvent(eventnum) {
	EVENTNUM = eventnum;
	$('#menucurbanner').attr('src',MAPDATA[EVENTNUM].bannerImg);
	chMenuDefaultSettings();
	$('#menuevents').hide();
	$('#menuloadfile').show();
	$('#menusettings').hide();
	$(".ui-dialog-titlebar").hide();
}

function chMenuBackEvent() {
	$('#menuevents').show();
	$('#menuloadfile').hide();
	$('#menusettings').hide();
	$('#fileKC3').val('');
	$('#menufinfo').hide();
}

function chMenuDefaultSettings() {
	$('#menusships').prop('checked',true);
	$('#menusequips').prop('checked',true);
	
	var eventdate = MAPDATA[EVENTNUM].date;
	var mechanicdate = 0;
	$('#menusmechanics option').each(function() {
		if ($(this).val() <= eventdate) mechanicdate = $(this).val();
	});
	$('#menusmechanics').val(mechanicdate);
	
	$('#menusdiff option[value="1"]').prop('disabled',(MAPDATA[EVENTNUM].diffMode != 1));
	$('#menusdiff').val(MAPDATA[EVENTNUM].diffMode);
	
	$('#menuslock').prop('checked',false);
}

function chMenuExtractSettings() {
	CHDATA.config = {};
	CHDATA.config.disableships = $('#menusships').prop('checked');
	CHDATA.config.disableequips = $('#menusequips').prop('checked');
	CHDATA.config.mechanicsdate = $('#menusmechanics').val();
	CHDATA.config.diffmode = parseInt($('#menusdiff').val());
	CHDATA.config.disablelock = $('#menuslock').prop('checked');
}

function chMenuDone() {
	var filenum = 1;
	for (; filenum<1000; filenum++) {
		if (!localStorage['ch_basic'+filenum]) break;
	}
	if (filenum >= 1000) return;
	localStorage.ch_file = FILE = filenum;
	
	$('#dialogmainmenu').dialog('close');
	$(".ui-dialog-titlebar").show();
	chMenuExtractSettings();
	chProcessKC3File2();
	InitUI();
	if (MAPDATA[EVENTNUM].initReward) {
		chAddReward(MAPDATA[EVENTNUM].initReward);
		chShowReward(MAPDATA[EVENTNUM].initReward);
	}
	chSave();
}

function chAddReward(data) {
	if (!data.ships) return;
	for (var i=0; i<data.ships.length; i++) {
		var mid = data.ships[i];
		if (!SHIPDATA[mid]) continue;
		for (var j=0; j<100; j++) {
			var sid = 'x'+(90000+j);
			if (CHDATA.ships[sid]) continue;
			var sdata = SHIPDATA[mid];
			var lvl = 20;
			var newship = {
				HP: [sdata.HP,sdata.HP],
				LVL: lvl,
				FP: sdata.FP,
				TP: sdata.TP,
				AA: sdata.AA,
				AR: sdata.AR,
				EV: sdata.EVbase + Math.floor((sdata.EV-sdata.EVbase)*lvl/99),
				LOS: sdata.LOSbase + Math.floor((sdata.LOS-sdata.LOSbase)*lvl/99),
				ASW: sdata.ASWbase + Math.floor((sdata.ASW-sdata.ASWbase)*lvl/99),
				LUK: sdata.LUK,
				RNG: sdata.RNG,
				ammo: 10,
				fuel: 10,
				items: [-1,-1,-1,-1,-1],
				masterId: mid,
				morale: 49,
				planes: sdata.SLOTS.slice(),
			};
			CHDATA.ships[sid] = newship;
			break;
		}
	}
	DIALOGSORT = null;
	chFillDialogShip(1);
}

function chShowReward(data,tracker) {
	if (tracker === undefined) tracker = 0;
	if (!data.ships) return;
	$('#dialogreward').dialog('open');
	$('#rewardshine').css('animation','spin 5s linear infinite');
	$('#rewardship').attr('src','assets/icons/'+SHIPDATA[data.ships[tracker]].image);
	$('#rewardship').css('animation','appear 1s linear 1');
	tracker++;
	if (tracker < data.ships.length) {
		$('#dialogreward').dialog('option','close',function() {
			setTimeout(function() { chShowReward(data,tracker); }, 1);
		});
	} else {
		$('#dialogreward').dialog('option','close',function() {
			$('#rewardshine').css('animation','');
			$('#rewardship').css('animation','');
		});
	}
}