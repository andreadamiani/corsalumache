var timer;
var contatore=0;

$(document).ready(function()  {

	$('#reset').on("click", reset);
	$('#start').on("click", start);
	
});

function reset() {
$('.lumacadiv').css('width', '0px');
$('.led').removeClass('acceso');
clearInterval(timer);
contatore=0;
}

function estrailumaca() {
return Math.floor(Math.random()*3+1);

}

function gioca() {
var lumaca=estrailumaca();
var lumacaid="#lumaca"+lumaca;
 
if ($(lumacaid).innerWidth() > ($('body').innerWidth() * 0.58) ) { 
	$('.led').removeClass('acceso');
	clearInterval(timer);
	var ledid="#led"+lumaca;
	$(ledid).addClass('acceso');
	if (contatore<1) {
	alert("Ha vinto la lumaca " + lumaca + "°!");
	} else { alert("Premi il tasto RESET!"); }
	contatore=contatore+1;

} else if (contatore<1) {
$(lumacaid).css("width",$(lumacaid).innerWidth()+10);
$('.led').removeClass('acceso');
var ledid="#led"+lumaca;
$(ledid).addClass('acceso');
}}



function start() {
timer = setInterval(gioca, 40);
}
