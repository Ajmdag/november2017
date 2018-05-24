$('.banner-slider').slick({
	arrows: true,
	dots: true,
	prevArrow: '<i class="icon-arrow prev-arrow"></i>',
	nextArrow: '<i class="icon-arrow"></i>',
});


$('.tabs a').click(function() {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide');
	$(this).parent().addClass('active');
	return false;
});


// $('.tabs a').click(function() {
// 	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
// 	$(this).parent().siblings().removeClass('active');
// 	var id = $(this).attr('href');
// 	$(id).removeClass('hide');
// 	$(this).parent().addClass('active');
// 	return false;
// });