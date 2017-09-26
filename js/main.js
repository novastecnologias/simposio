$(function() {
	$(".button-collapse").sideNav();
	$(".parallax").parallax();
	$(".modal").modal();
});

$("#nav-mobile").click(function() {
	setTimeout(function() {
		$("button-collapse").sideNav("hide");
	},200);
});
