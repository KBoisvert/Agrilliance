$(document).ready(function(){

	$('#range').on("change", function() {
		$('.output').val(this.value);
		}).trigger("change");

	// placeholder du menu select
	$('select').change(function() {
	 if ($(this).children('option:first-child').is(':selected')) {
	   $(this).addClass('placeholder');
	 } else {
	  $(this).removeClass('placeholder');
	 }
	});



});
