$(function() {
	$(".button-collapse").sideNav();
	$(".parallax").parallax();
	$(".modal").modal();
	$('.tooltipped').tooltip({delay: 50});
});

$("#nav-mobile").click(function() {
	setTimeout(function() {
		$("button-collapse").sideNav("hide");
	},200);
});
