

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

$('#quick-register-form').submit(function(e) {
	e.preventDefault();
	var email = $('#quick-register-form-email').val();

	location.replace('register.html' + '?email=' + email);

});

if(window.location.pathname === '/register.html') {

}

$('#reg-form').submit(function(e) {
	e.preventDefault();

	var data = {
			name: $('#reg-name').val(),
			email: $('#reg-email').val(),
			pass: $('#reg-pass').val()
		},
		button = $('#reg-form').find('[type="submit"]'),
		buttonText = button.html();

	function setButtonText(text) {
		button.html(text);
	}

	function setErrorText(text) {
		var errorElem = $('#reg-error-message');
		errorElem.html(text);
	}

	function addSpinner() {
		console.log(button);
		console.log(buttonText);
		button.html('<i class="fa fa-refresh fa-spin"></i>')
	}




	addSpinner();


	//console.log(data.params());

	$.ajax({
		url: 'http://localhost/avansera/api/register/',
		method: 'GET',
		dataType: 'jsonp',
		data: data
	})
		.done(function(status) {

			console.log(status);
			//var status = JSON.parse(status);
			if(!!status.success) {
				setButtonText("registration successful" + " " + '<i class="fa fa-check"></i>');
				button.attr('disabled', true);
			} else {
				setButtonText(buttonText);
				setErrorText(status.error);
			}
		})
		.fail(function(reason) {
			setButtonText(buttonText);
			console.log(reason);
		});
});
