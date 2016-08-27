


// Set handlers for .switch
$('.switch input').click( function(e){
	$(this).parent('.switch').toggleClass('switch_on');
});

// Video player
$('.player__controls').click(function(e) {
	var video = $(this).parent('.player').find('video').get(0);
	console.log(video);
	video.paused? video.play() : video.pause();
});