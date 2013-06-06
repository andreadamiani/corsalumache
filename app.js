var timer;

$(document).ready(function()  {
	$('#reset').on("click", reset);
	$('#start').on("click", start);
	
});

function reset() {
$('.lumaca').css('width', '44px');
$('.led').removeClass('acceso');
clearInterval(timer);
}

function estrailumaca() {
return Math.floor(Math.random()*3+1);

}

function gioca() {
var lumaca=estrailumaca();
var lumacaid="#lumaca"+lumaca;
$(lumacaid).css("width",$(lumacaid).innerWidth()+10);
$('.led').removeClass('acceso');
var ledid="#led"+lumaca;
$(ledid).addClass('acceso');
if  ($(lumacaid).innerWidth() > ($('body').innerWidth() * 0.64) ) { 
	clearInterval(timer);
	alert("Ha vinto la lumaca numero " + lumaca + "!");

}

}

function start() {
timer = setInterval(gioca, 40);
}

