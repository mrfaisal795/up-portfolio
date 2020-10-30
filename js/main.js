$(document).ready(function () {
					// init Isotope
				var $grid = $('.grid').isotope({
				  // options
				});
				// filter items on button click
				$('.filters').on( 'click', 'li', function() {
				  var filterValue = $(this).attr('data-filter');
				  $grid.isotope({ filter: filterValue });
				});

				$('.filters').on( 'click', 'li', function() {
				  $(this).addClass('active').siblings().removeClass('active');
				});

				// wow!!

				new WOW().init();

			// Typed Js
			    var typed = new Typed('#typed', {
			        // Waits 1000ms after typing "First"
			        strings: ["WEB-DESIGNER~","GRAPHICS-DESIGNER~"],
			        typeSpeed: 130,
			        backSpeed: 100,
			        loop: true,
			        showCursor: true,

			        
			    });
			    


			    $('.ete').on( 'click', 'li', function() {
				  $(this).addClass('active').siblings().removeClass('active');
				});
				$('nav').on( 'click', 'nav-item', function() {
					$(this).addClass('actie').siblings().removeClass('actie');
				  });


});	