$('.fadeIn')
	.hide()
	.slideDown(1500);


(function($, window, document, undefined) {

	$.fn.parallax = function ( options ) {

		// zakladni nastaveni
		var settings = $.extend ({

		}, options);

		// ulozime si jquery verzi okna
		var $win = $(window);

		// vraceni objektu pro chaining [tatum]
		return this.each( function() {

			var element = $(this);

			$win.on('scroll', function() {
				var bgTop  = element.offset().top,
					winTop = $win.scrollTop(),
					bgPositionLeft = element.css('backgroundPositionX');

					console.log( bgTop, winTop, Math.floor ( (bgTop - winTop) * 0.1 ) );
			});

		});

	}


	// Scroll Animation
	// 

	var menu = $('.menu'),
		menuLinks = menu.find('a');

	menuLinks.on('click', function(event){
		$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000)
		event.preventDefault();
	});

})(jQuery, window, document);