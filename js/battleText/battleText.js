var API = (window.location.hash.length > 5) ? JSON.parse(decodeURIComponent(window.location.hash.substr(1))) : window.opener.API;
var player = new FLEET();
var world = API.world;
var map = API.mapnum;
var combined = API.combined;
var startData = (API.battles[0].data.api_nowhps || API.battles[0].data.api_f_nowhps) ? API.battles[0].data : API.battles[0].yasen;

var isPvP = (world == 0);
var tabs = $('#tabNodes');
var tabPanel = $('.mdl-tabs');
var exportList = $('#export ul'); 
addTab = function(node, first) {
	var battleLink = 'battle-' + node;
	tabs.append(() => {
		return $('<a>').attr('href', '#' + battleLink).text(node).addClass('mdl-tabs__tab lbas');
	});

	tabPanel.append(() => {
		return $('<div>').attr('id', battleLink).html('<table data-tableexport-display="always"></table>').addClass('mdl-tabs__panel');
	});
	
	exportList.append(() => {
		return $('<li>').append(() => {
			return $('<a>')
			.click(() => {
				exportBattle(node);
				})
			.html('Battle Node ' + node);
		});
	});
};

processPVP = function(battle) {
	addTab("PVP");
	var PvP = new BATTLE(player, battle, "PVP", true);
	PvP.startBattle();

};

processSortie = function(battles) {
	battles.forEach(function(b) {
		addTab(getNodeLetter(world, map, b.node));
		var battle = new BATTLE(player, b, getNodeLetter(world, map, b.node), false, isBossNode(world, map, b.node));
		battle.startBattle();
	});

};

processText = function() {
	
	var hpsMain = startData.api_f_nowhps || startData.api_nowhps.slice(1, 7);
	let hpmMain = startData.api_f_maxhps || startData.api_maxhps.slice(1, 7);
	if (combined) {
		var hpsEscort = startData.api_f_nowhps_combined || startData.api_nowhps_combined.slice(1, 7);
		var hpmEscort = startData.api_f_maxhps_combined || startData.api_maxhps_combined.slice(1, 7);
		player.addCombinedFleet(API.fleet1, API.fleet2, hpsMain, hpmMain, hpsEscort, hpmEscort, API.combined);
	} else {
		player.addFleet(API['fleet' + API.fleetnum], hpsMain, hpmMain);
	}
	if (API.support1 && API.support1 > 0)
		player.addSupport(API['fleet' + API.support1]);
	if (API.support2 && API.support2 > 0)
		player.addSupport(API['fleet' + API.support2], true);

	if (API.battles) {
		if (isPvP) {
			processPVP(API.battles[0]);
		} else {
			processSortie(API.battles);
		}
		$(".mdl-tabs__tab:first").addClass('is-active');
		$(".mdl-tabs__panel:first").addClass('is-active');
		$("#saveAll a").click(() => {
			exportBattle('all');
		});
	}

	/*
	var startData = API.battles[0].data;

	if (combined)
	player.addCombinedFleet(API.fleet1, API.fleet2, startData.api_nowhps.slice(1, 7), startData.api_nowhps_combined.slice(1, 7));
	else
	player.addFleet(API['fleet' + API.fleetnum], startData.api_nowhps.slice(1, 7));
	if (API.support1 > 0)
	player.addSupport(API['fleet' + API.support1]);
	if (API.support2 > 0)
	player.addSupport(API['fleet' + API.support2], true);*/

	//getTextRow("FLEET_COMPOSITION",[player.mainFleet]));

};

setTitle = function() {
	var title = document.createElement('title');
	title.innerText = (isPvP) ? getText("PVP_TITLE", [API.id]) : getText("SORTIE_TITLE", [API.id, getMapName(world, map)]);
	document.head.appendChild(title);
};

$(document).ready(function(){
    $(this).scrollTop(0);
});

$('input[type=radio][name=lang]').change(function() {
	setLanguage($(this).val());
	window.location.reload();
});

$('#btnAlign').click(function() {
	localStorage.replay_log_noAlign = +!+localStorage.replay_log_noAlign;
	window.location.reload();
});

window.onhashchange = function() {
	window.location.reload();
}


var TEXTDATA, LANG_SHIP_NAME;
function setLanguage(language) {
	switch (language) {
		case 'JP':
			TEXTDATA = TEXTDATA_JP;
			LANG_SHIP_NAME = 'JP';
			break;
		case 'CN':
			TEXTDATA = TEXTDATA_CN;
			LANG_SHIP_NAME = 'JP';
			break;
		case 'EN':
		default:
			TEXTDATA = TEXTDATA_EN;
			LANG_SHIP_NAME = 'EN';
			break;
	}
	localStorage.replay_log_lang = language;
	$('input[value='+language+']').prop('checked',true);
}

setLanguage(localStorage.replay_log_lang);
setTitle();
processText();

