$(document).scroll(function () {
	var scrollHeigt = $(document).scrollTop();

	if (scrollHeigt > 200) {
		$('header').removeClass('dsc-transparent').fadeIn();
	} else {
		$('header').addClass('dsc-transparent');
	}
})