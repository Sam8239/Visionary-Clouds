
(function ($) {
	'use strict';

	jQuery(document).ready(function () {


		// Isotope Portfolio
		var iso = $grid.data('isotope');
		// var $filterCount = $('.filter-count');

		// bind filter button click
		$('.filters-button-group .button').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			// use filterFn if matches value
			$grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$('.filters-button-group').each(function (i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', 'button', function () {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
			});
		});


		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});


		//when filter button clicked
		$(".filters-button-group").click(function () {
			$(this).data('clicked', true);

			loadMore(initShow);
		});


		$(function () {
			$('.effect-fly .grid-item ').each(function () { $(this).hoverdir(); });
		});


	});
})(jQuery);

var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	layoutMode: 'masonry',
	transformsEnabled: true,
	transitionDuration: "700ms",
	resize: true,
	fitWidth: true,
	columnWidth: '.grid-sizer',
});