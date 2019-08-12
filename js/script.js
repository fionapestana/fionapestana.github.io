/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	$(".square2").hover(function(){
		$(".please").fadeToggle();
	});

	$(".square2").mouseenter(function(){
		var audiofile = $(this).attr("data-sound");

		$("#playsound").attr("src", audiofile);
		$("#playsound").get(0).play();
	});

	$(".square2").mouseleave(function(){
		$("#playsound").get(0).pause();
	});

	//Everything needed to 1) show the caption
	//and 2) let the sound play when rolling over
	//the image of Owen.

	$(".square3").hover(function(){
		$(".thanks").fadeToggle();
	});

	$(".square3").mouseenter(function(){
		var audiofile = $(this).attr("data-sound");

		$("#playsound").attr("src", audiofile);
		$("#playsound").get(0).play();
	});

	$(".square3").mouseleave(function(){
		$("#playsound").get(0).pause();
	});

	//Everything needed to 1) show the caption
	//and 2) let the sound play when rolling over
	//the image of Claudia.

	$(".square4").hover(function(){
		$(".yeah").fadeToggle();
	});

	$(".square4").mouseenter(function(){
		var audiofile = $(this).attr("data-sound");

		$("#playsound").attr("src", audiofile);
		$("#playsound").get(0).play();
	});

	$(".square4").mouseleave(function(){
		$("#playsound").get(0).pause();
	});

	//Everything needed to 1) show the caption
	//and 2) let the sound play when rolling over
	//the image of Amy.

	$(".square5").hover(function(){
		$(".okay").fadeToggle();
	});

	$(".square5").mouseenter(function(){
		var audiofile = $(this).attr("data-sound");

		$("#playsound").attr("src", audiofile);
		$("#playsound").get(0).play();
	});

	$(".square5").mouseleave(function(){
		$("#playsound").get(0).pause();
	});

	//Everything needed to 1) show the caption
	//and 2) let the sound play when rolling over
	//the image of Scott.

	$(".square6").hover(function(){
		$(".cool").fadeToggle();
	});

	$(".square6").mouseenter(function(){
		var audiofile = $(this).attr("data-sound");

		$("#playsound").attr("src", audiofile);
		$("#playsound").get(0).play();
	});

	$(".square6").mouseleave(function(){
		$("#playsound").get(0).pause();
	});

	//Everything needed to 1) show the caption
	//and 2) let the sound play when rolling over
	//the image of David.

	

});//end document.ready block


