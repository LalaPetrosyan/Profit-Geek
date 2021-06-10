(function() {
	$('.rev_slider_project').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
})

$('.autoplay').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 3000,
	dots:true,
	responsive: [
		{
			breakpoint: 400,
			settings: {
				arrows: false,
				dots:false,

			}
		}

	]
});
// Slider News //
$(function() {
	$('.rev_slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					arrows: false,
					slidesToScroll: 1,
				}
			}
		]
	});
})
// Slider News //


// Slider Project_1 //
$(function() {
	$('.rev_slider_project').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});
})
// Slider New_latest //
$('.rev_slider_new_latest').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});
// Slider New_latest //

// Modal Paje News //
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
// 	myInput.focus()
// })
// Modal Paje News //

// CHECKBOXS  //
$(function () {
	$("input[name='condition_1']").click(function () {
		if ($(this).is(':checked')) {
			$("input[name='condition_1']").not(this).prop('checked', false);
		}
	});
})
$(function () {
	$("input[name='soglasi']").click(function () {
		if ($(this).is(':checked')) {
			$("input[name='soglasi']").not(this).prop('checked', false);
		}
	});
})

// CHECKBOXS  //

//  range //

$(document).ready(function(){
	$("#rangenumber1").keypress(function() {
		if (this.value.length == 6) {
			return false;
		}
	})
});
$(document).ready(function(){
	$("#rangenumber2").keypress(function() {
		if (this.value.length == 7) {
			return false;
		}
	})
});
$(document).ready(function(){
	$("#rangenumber3").keypress(function() {
		if (this.value.length == 9) {
			return false;
		}
	})
});

//  range //

// Plus Minus //
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});
// Plus Minus //

// News_user_ads Carousel //


$('.rev_slider_user_ads_max').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.rev_slider_user_ads_min'
});
$('.rev_slider_user_ads_min').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.rev_slider_user_ads_max',
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	focusOnSelect: true
});

// News_user_ads Carousel //


var count = 1;
var countEl = document.getElementById("count");
function plus(){
	count++;
	countEl.value = count;
}
function minus(){
	if (count > 1) {
		count--;
		countEl.value = count;
	}
}

// Countdown //

function  countdown(dateEnd) {
	var  timer, days, hours, minutes, seconds;

	dateEnd = new Date(dateEnd);
	dateEnd = dateEnd.getTime();

	if (isNaN(dateEnd)) {
		return;
	}

	timer = setInterval(calculate, 1000);

	function calculate() {
		var dateStart = new Date();
		var dateStart = new Date(dateStart.getUTCFullYear(),
			dateStart.getUTCMonth(),
			dateStart.getUTCDate(),
			dateStart.getUTCHours(),
			dateStart.getUTCMinutes(),
			dateStart.getUTCSeconds());
		var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

		if (timeRemaining >= 0) {
			days = parseInt(timeRemaining / 86400);
			timeRemaining = (timeRemaining % 86400);
			hours = parseInt(timeRemaining / 3600);
			timeRemaining = (timeRemaining % 3600);
			minutes = parseInt(timeRemaining / 60);
			timeRemaining = (timeRemaining % 60);
			seconds = parseInt(timeRemaining);

			// document.getElementById("days").innerHTML = parseInt(days, 2);
			// document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
			// document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
			// document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

			let days_ = document.getElementById("days")
			let hours_ = document.getElementById("hours")
			let minutes_ = document.getElementById("minutes")
			let seconds_ = document.getElementById("seconds")

			if (days_ && hours_ && minutes_ && seconds_) {
				days_.innerHTML = parseInt(days, 10);
				hours_.innerHTML = ("0" + hours).slice(-2);
				minutes_.innerHTML = ("0" + minutes).slice(-2);
				seconds_.innerHTML = ("0" + seconds).slice(-2);
			}

		} else {
			return;
		}
	}

	function display(days, hours, minutes, seconds) {}
}

countdown ('06/28/2021 02:00:00 AM');

// Countdown //

let reply = document.querySelectorAll('.modal_wrapper #btn_reply');
let row_reply = document.querySelectorAll('.modal_wrapper #row_reply');

if (reply && row_reply) {
	reply.forEach((el, i) => {
		el.addEventListener('click', () => {
			row_reply[i].classList.toggle('d-flex')
			if(!row_reply[i].classList.contains('d-flex')) {
				el.querySelector('.row_1_text_end_btn').innerText = 'Ответить'
			}
			else {
				el.querySelector('.row_1_text_end_btn').innerText = 'Скрыть ответа'
			}
		})
	})
}
// btn-reply //
	let btn_more = document.querySelectorAll('.dropdown_p');
	let text_more = document.querySelectorAll('.more');

	if(btn_more && text_more) {
		btn_more.forEach((el, i) => {
			el.addEventListener('click', () => {
				text_more[i].classList.toggle('d-inline')
				if(!text_more[i].classList.contains('d-inline')) {
					el.querySelector('.p_btn').innerHTML = 'Подробное';
				}
				else {
					el.querySelector('.p_btn').innerHTML = 'Скрыть';
				}
			})
		})
	}


	let btn_more1 = document.querySelectorAll('.dropdown_p1');
	let text_more1 = document.querySelectorAll('.more1');

	if(btn_more1 && text_more1) {
		btn_more1.forEach((el, i) => {
			el.addEventListener('click', () => {
				text_more1[i].classList.toggle('d-inline')
				if(!text_more1[i].classList.contains('d-inline')) {
					el.querySelector('.p_btn1').innerHTML = 'Подробное';
				}
				else {
					el.querySelector('.p_btn1').innerHTML = 'Скрыть';
				}
			})
		})
	}

// btn-dropdown //

let modal_wrapper_dropdown = document.querySelectorAll('.modal_wrapper #dropdown');
let dropdown_text = document.querySelectorAll('.modal_wrapper .row_dropdown_text');	

if (modal_wrapper_dropdown && dropdown_text) {
	modal_wrapper_dropdown.forEach((el, i) => {
		el.addEventListener('click', ()  => {
			dropdown_text[i].classList.toggle('d-flex')     
			if (!dropdown_text[i].classList.contains('d-flex')) {
				el.querySelector('.dropdown_p').innerText = 'Просмостреть 5 ответов'
				el.querySelector('.icon_down i').classList.remove('rotate-180')
			} else {
				el.querySelector('.dropdown_p').innerText = 'Скрыть 5 ответа'
				el.querySelector('.icon_down i').classList.add('rotate-180')
			}
		})
	})
}
// btn-dropdown //
let slider_range = document.querySelector(".rang_row_14");
let value = document.querySelector('.value');
if(slider_range && value) { 
	value.textContent = slider_range.value + '%';
	slider_range.oninput = function () {
		value.textContent = this.value + '%';
	}
}

// btn-dropdown //
let slider_range1 = document.querySelector(".rang_row_15");
let value1 = document.querySelector('.value15');
if(slider_range1 && value1) {
	value1.textContent = slider_range1.value + '%';
	slider_range1.oninput = function () {
		value1.textContent = this.value + '%';
	}
}




// btn-dropdown //

function openNav() {
	document.getElementById("mySidenav").style.width = "450px";

	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

	function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.body.style.backgroundColor = "white";
}


// Investment range block
let input_number = document.querySelectorAll('.row_18_div .btn-row_18')
let input_range = document.querySelectorAll('.row_18_div .rang_row_18')
let profit = document.querySelectorAll('.row .row_18_p2 span')
let percent = 0

if (input_range) {
	input_range.forEach((el, i) => {
		el.addEventListener('change', () => {
			if (i === 0) {
				percent = 20
			} else if (i === 1) {
				percent = 50
			} else if (i === 3) {
				percent = 70
			}
			profit[i].innerText = input_number[i].value * percent / 100 + ' руб.'
		})
	})
}



