$(document).ready(function(){
	$("div.developer").hover(function(){
    $("div.myblog,div.galery,div.product,div.mobile,div.contact").css({
		'-webkit-transform':'rotate(360deg)',
		'-moz-transform':'rotate(360deg)',
		'-o-transform':'rotate(360deg)',
		'-ms-transform':'rotate(360deg)'
	});
  },function(){
    $("div.myblog,div.galery,div.product,div.mobile,div.contact").css({
		'-webkit-transform':'rotate(-360deg)',
		'-moz-transform':'rotate(-360deg)',
		'-o-transform':'rotate(-360deg)',
		'-ms-transform':'rotate(-360deg)'
	});
 	});




	$("div.myblog").hover(function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(341deg)',
		'-moz-transform':'rotate(341deg)',
		'-o-transform':'rotate(341deg)',
		'-ms-transform':'rotate(341deg)'
	});
    },function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(-341deg)',
		'-moz-transform':'rotate(-341deg)',
		'-o-transform':'rotate(-341deg)',
		'-ms-transform':'rotate(-341deg)'
	});
	});



	$("div.galery").hover(function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(275deg)',
		'-moz-transform':'rotate(275deg)',
		'-o-transform':'rotate(275deg)',
		'-ms-transform':'rotate(275deg)'
	});
    },function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(-341deg)',
		'-moz-transform':'rotate(-341deg)',
		'-ms-transform':'rotate(-341deg)',
		'-o-transform':'rotate(-341deg)'
	});
	});




	$("div.product").hover(function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(185deg)',
		'-moz-transform':'rotate(185deg)',
		'-o-transform':'rotate(185deg)',
		'-ms-transform':'rotate(185deg)'
	});
    },function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(-360deg)',
		'-moz-transform':'rotate(-360deg)',
		'-o-transform':'rotate(-360deg)',
		'-ms-transform':'rotate(-360deg)'
	});
	});




	$("div.contact").hover(function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(140deg)',
		'-moz-transform':'rotate(140deg)',
		'-o-transform':'rotate(140deg)',
		'-ms-transform':'rotate(140deg)'
	});
    },function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(-140deg)',
		'-moz-transform':'rotate(-140deg)',
		'-ms-transform':'rotate(-140deg)',
		'-o-transform':'rotate(-140deg)'
	});
	});




	$("div.mobile").hover(function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(50deg)',
		'-moz-transform':'rotate(50deg)',
		'-ms-transform':'rotate(50deg)',
		'-o-transform':'rotate(50deg)'
	});
    },function(){
    $("div.aghrabe").css({
		'-webkit-transform':'rotate(-50deg)',
		'-moz-transform':'rotate(-50deg)',
		'-ms-transform':'rotate(-50deg)',
		'-o-transform':'rotate(-50deg)'
	});
	});
});
