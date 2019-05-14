// Business logic:

var maembe = function(name) {
  return name;
 };
 


// Front-end logic
$(document).ready(function(){
	$("#work1").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#ris").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work3").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#rispa").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work5").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work6").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work7").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	$("#work8").hover(function() {
		$(this).animate({opacity: 0.5}, 500);
	}, function() {
		$(this).animate({opacity: 1.0}, 500);
	});
	// mouseOver display hidden div
	$('.description-wwd').mouseover(function() {
		$(this).children(".icon-wwd").hide();
		$(this).children(".textwwd").show();
	}).mouseout(function() {
		$(this).children(".icon-wwd").show();
		$(this).children(".textwwd").hide();
	});
// form thank you user message
	$("form#fomu").submit(function(event) {
		event.preventDefault();
		var jina = $("#name").val();
		var maili = $("#email").val();
		var result = maembe("Thank you " + jina + " of email address: " +  maili + " for your message. Your feedback is appreciated");
		$("#matokeo").text(result);
		document.getElementById("fomu").reset();
	}); 
});


