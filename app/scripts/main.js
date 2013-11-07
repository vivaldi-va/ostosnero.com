

function heroImageScaling() {
	var mobile = 480,
		imgRatio = 1280/960,
		screenRatio = window.innerWidth/window.innerHeight,
		hero = $('#hero');

	console.log(imgRatio > screenRatio);
	if(window.innerWidth > mobile) {
		if(screenRatio > imgRatio) {
			hero.css({
				'-webkit-background-size': '100% auto',
				'background-size': '100% auto'
			});
		} else {
			hero.css({
				'-webkit-background-size': 'auto 100%',
				'background-size': 'auto 100%'
			});
		}
	}

}


$(function() {
	var height = window.innerHeight,
		topBar = 57,
		hero = $('#hero');

	hero.css({
		height: height-topBar + 'px'
	});

	heroImageScaling();

	FastClick.attach(document.body);


});

$('#menu-dropdown-button').click(function(e) {
	$('#top').toggleClass('open');
});


$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

