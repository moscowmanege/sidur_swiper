$(function() {

	var swiperH = new Swiper('.swiper-container-h', {
			nextButton: '.right',
			prevButton: '.left',
			keyboardControl: true,
			spaceBetween: 0,
			loop: true,
			initialSlide: 0,
			speed: 600,
			longSwipesRatio: 0.2,
	});

	var swiperV = new Swiper('.swiper-container-v', {
			nextButton: '.down',
			prevButton: '.up',
			runCallbacksOnInit: false,
			keyboardControl: true,
			direction: 'vertical',
			loop: true,
			initialSlide: 0,
			speed: 600,
			longSwipesRatio: 0.2,
			spaceBetween: 0,
			onSlideChangeEnd: function(swiper) {
				swiperV.forEach(function(item, index) {
					item.slideTo(swiper.activeIndex, 0, false);
				});
			}
	});

	// $(document).on('contextmenu', function(e) {
	// 	e.preventDefault();
	// });
});