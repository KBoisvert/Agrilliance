$(document).ready(function(){

//Quantité de produit disponible
$(function(){
	var $amountqty = $("#amount-qty"); //cache the price input
	var $rangeqty = $(".element-qty"); //cache the div for the price range

	$rangeqty.slider({range: false, min: 0, max: 100, values: [0], 
	slide: function(event, ui){ //when slider use utdate amount element
					$amountqty.val(ui.values[0]);
	}
	});

	//labels
	$rangeqty.slider('pips', {  
		first: 'label',  
		last: 'label',  
		rest: 'label',  
		step: 10,
		prefix: "",  
		suffix: "" 
	});
	//nombre flottant
	$rangeqty.slider('float', {  
		handle: true,  
		pips: false,   
		prefix: "",  
		suffix: ""  
	});

	$amountqty // set initial value of amount
		.val($rangeqty.slider('values', 0) //add $
		);
});

//Valeur de la quantitée
$(function(){
	var $amountunit = $("#amount-unit"); //cache the price input
	var $rangeunit = $(".element-unit"); //cache the div for the price range

	$rangeunit.slider({range: false, min: 1, max: 3, 

	});

	$rangeunit.slider('pips', {  
		first: 'label',  
		last: 'label',  
		rest: 'label',  
		labels: ['kg', 'oz', 'lbs'],
		prefix: "",  
		suffix: "" 
	});
	//nombre flottant
	$rangeunit.slider('float', {  
		handle: true,  
		pips: true,  
		labels: ['kg', 'oz', 'lbs'],  
		prefix: "",  
		suffix: ""  
	});

});
//Prix
$(function(){
	var $amountprice = $("#amount-price"); //cache the price input
	var $rangeprice = $(".element-price"); //cache the div for the price range

	$rangeprice.slider({range: true, min: 0, max: 100, values: [10,90], 
	slide: function(event, ui){ //when slider use utdate amount element
					$amountprice.val(ui.values[0] + ' - ' + ui.values[1]);
	}
	});

	//labels
	$rangeprice.slider('pips', {  
		first: 'label',  
		last: 'label',  
		rest: 'label',  
		step: 10,
		prefix: "",  
		suffix: "" 
	});
	//nombre flottant
	$rangeprice.slider('float', {  
		handle: true,  
		pips: false,  
		//labels: ['label1', 'label2'],  
		prefix: "$",  
		suffix: ""  
	});

	$amountprice // set initial value of amount
		.val($rangeprice.slider('values', 0) //add $
		+ ' -  ' + $rangeprice.slider('values', 1));
});
//Valeur du prix
	$(function(){
		var $amountunitprice = $("#amount-unit-price"); //cache the price input
		var $rangeunitprice = $(".element-unit-price"); //cache the div for the price range

		$rangeunitprice.slider({range: false, min: 1, max: 3, 

		});

		$rangeunitprice.slider('pips', {  
			first: 'label',  
			last: 'label',  
			rest: 'label',  
			labels: ['kg', 'oz', 'lbs'],
			prefix: "",  
			suffix: "" 
		});
		//nombre flottant
		$rangeunitprice.slider('float', {  
			handle: true,  
			pips: true,  
			labels: ['kg', 'oz', 'lbs'],  
			prefix: "",  
			suffix: ""  
		});

	});

$('#amount-qty, #amount-unit, #amount-price, #amount-unit-price').hide();


//Range and date function
//qty
/*	$(function(){
		var $amount = $("#amount-qty"); //cache the price input
		var $range = $(".element1"); //cache the div for the price range

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
	});*/
//unit
/*	$(function(){
		var $amount = $("#amount-unit"); //cache the price input
		var $range = $("#unit-range"); //cache the div for the price range
	  var texts = [
		  ' ',
		  'Lbs',
		  'Kg',
		  'Oz',
		  ' '
	  ];

		$("#unit-range").slider({ // turn price-range input into a slider
			range: false, //if it's a range it get 2 handles
			min: 0, //min value
			max: 5, //max value
			step: 1,
			values: [0], //Value to use when the page load
			slide: function(event, ui){ //when slider use utdate amount element
				$amount.val(ui.values[0]/* + ' - ' + ui.values[1]*/  /*);
		
		}
		});
		$amount // set initial value of amount
			.val($range.slider('values', 0) //add $
			+ ' -  ' + $range.slider('values', 1));
	});*/
//price
/*
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
*/

//DATE calendrier
$(function(){
		$("#availability1").datepicker(); // Turn input tu JQUI date picker
	});
$(function(){
		$("#availability2").datepicker(); // Turn input tu JQUI date picker
	});
// placeholder du menu select
		$('select').change(function() {
		 if ($(this).children('option:first-child').is(':selected')) {
		   $(this).addClass('placeholder');
		 } else {
		  $(this).removeClass('placeholder');
		 }
		});

/*  Plugin utilisé pour le slider : https://github.com/simeydotme/jQuery-ui-Slider-Pips  */
/*
$('.element1').slider({range: true, min: 0, max: 100, values: [10,90]});
//labels
$('.element1').slider('pips', {  
    first: 'label',  
    last: 'label',  
    rest: 'label',  
    step: 10,
    prefix: "",  
    suffix: "" 
});
//nombre flottant
$('.element1').slider('float', {  
    handle: true,  
    pips: false,  
    //labels: ['label1', 'label2'],  
    prefix: "",  
    suffix: ""  
});*/
/*
$('.element2').slider({min: 1, max: 3});
$('.element2').slider('pips', {  
    first: 'label',  
    last: 'label',  
    rest: 'label',  
    labels: ['kg', 'oz', 'lbs'],
    prefix: "",  
    suffix: "" 
});
//nombre flottant
$('.element2').slider('float', {  
    handle: true,  
    pips: true,  
    labels: ['kg', 'oz', 'lbs'],  
    prefix: "",  
    suffix: ""  
});*/

});
