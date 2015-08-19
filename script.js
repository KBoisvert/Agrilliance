$(document).ready(function(){

	/*$('#range').on("change", function() {
		$('.output').val(this.value);
		}).trigger("change");*/

//Range and date function
//qty
	$(function(){
		var $amount = $("#amount-qty"); //cache the price input
		var $range = $("#qty-range"); //cache the div for the price range

		$("#qty-range").slider({ // turn price-range input into a slider
			range: true, //if it's a range it get 2 handles
			min: 0, //min value
			max: 100, //max value
			values: [10,90], //Value to use when the page load
			slide: function(event, ui){ //when slider use utdate amount element
				$amount.val(ui.values[0] + ' - ' + ui.values[1]);
		}
		});
		$amount // set initial value of amount
			.val($range.slider('values', 0) //add $
			+ ' -  ' + $range.slider('values', 1));
	});
//price
	$(function(){
		var $amount = $("#amount-price"); //cache the price input
		var $range = $("#price-range"); //cache the div for the price range

		$("#price-range").slider({ // turn price-range input into a slider
			range: true, //if it's a range it get 2 handles
			min: 0, //min value
			max: 100, //max value
			values: [10,90], //Value to use when the page load
			slide: function(event, ui){ //when slider use utdate amount element
				$amount.val("$" + ui.values[0] + '- $' + ui.values[1]);
		}
		});
		$amount // set initial value of amount
			.val('$' + $range.slider('values', 0) //add $
			+ ' - $' + $range.slider('values', 1));
	});

$(function(){
		$("#availability").datepicker(); // Turn input tu JQUI date picker
	});
// placeholder du menu select
		$('select').change(function() {
		 if ($(this).children('option:first-child').is(':selected')) {
		   $(this).addClass('placeholder');
		 } else {
		  $(this).removeClass('placeholder');
		 }
		});

});
