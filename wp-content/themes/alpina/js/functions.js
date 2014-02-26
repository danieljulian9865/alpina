
$(function(){
	// Menu
	$(".item1").hover(function(){
		
		$(this).stop(true).animate({top:"-2px"},{duration:50});
	}, function() {
		$(this).stop(true).animate({top:"-9px"},{duration:50});
	});
	
});


 function abrircontacto()
{
	$(".contactoformulario").animate({top:"0px"},{duration:500});
}

 $(function() {
	if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
		});
	}
});


