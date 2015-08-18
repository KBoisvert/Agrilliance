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



	$(function() {
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 75, 300 ],
		  slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	  });

});
