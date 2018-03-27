;(function($, window, document, undefined) {

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

})(jQuery, window, document);