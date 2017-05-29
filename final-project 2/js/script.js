/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

/* Photo hover */

	$('.photo img').mouseenter(function(){
		var bag = $(this).attr("newpic");
		$(this).attr("src", bag);

	});

	$('.photo img').mouseleave(function(){
		var bag = $(this).attr("ogpic");
		$(this).attr("src", bag);

	});


/* Question */

	var colors = ["#DCF0EC",  "#F9E1E8", "#f4eae3"];
	// gray: "#E4E7E6"
	var questions = ["WHY DO YOU WORK AT...", "WHAT DO YOU DO AT...", "WHAT'S DIFFERENT ABOUT WORKING AT..."];
	var graceq = ["media/gwhy.mp3", "media/gwhat.mp3", "media/ghard.mp3"];
	var emelynq = ["media/ewhy.mp3", "media/ewhat.mp3", "media/ehard.mp3"];
	var natalieq = ["media/nwhy.mp3", "media/nwhat.mp3", "media/nhard.mp3"];
	var counter = 0; // array with counter to click through different colors

	$('#question').click(function(){
		
		counter ++;
		console.log("question");
		console.log(counter);
		var bag = counter%3;
		//console.log(bag);
		$(this).css({"background-color":colors[bag]});
		document.getElementById("q").innerHTML = questions[bag];

	});

/* Photo click = play sound */
 
	$("#grace").click(function(){

		var bag = counter%3;
		var myaudio = graceq[bag];
		$('#mysound').attr('src', myaudio);
		$('#mysound').get(0).play();

	});


	$("#emelyn").click(function(){
	
		var bag = counter%3;
		var myaudio = emelynq[bag];
		$('#mysound').attr('src', myaudio);
		$('#mysound').get(0).play();

	});


	$("#natalie").click(function(){
	
		var bag = counter%3;
		var myaudio = natalieq[bag];
		$('#mysound').attr('src', myaudio);
		$('#mysound').get(0).play();

	});

/* Interview toggle */

	$('#interviews h3').click(function(){

		var bag = $(this).attr("interview");
		$(bag).toggle();

	});
	

}); //end document.ready block
