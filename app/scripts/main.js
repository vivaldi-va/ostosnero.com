
$(function() {
	FastClick.attach(document.body);
});

$('#menu-dropdown-button').click(function(e) {
	$('#top').toggleClass('open');
});