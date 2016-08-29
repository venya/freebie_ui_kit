


// Set handlers for .switch
$('.switch input').change( function(e){
	$(this).parent('.switch').toggleClass('switch_on', this.checked);
});


// Set handlers for .checkbox
$('.checkbox__input').change( function(e){
	$(this).parent('.checkbox').toggleClass('checkbox_on', this.checked);
});


// Set handlers for .radio and sync current state
function sync_radios() {
	$('.radio__input').each(function(){
		$(this).parent('.radio').toggleClass('radio_on', this.checked);
	})
}
sync_radios();
$('.radio input').change(sync_radios);


// Set handler for .select opening
$('.select__caret').click(function() {
	$(this).parent('.select').toggleClass('select_open');
})



// Video player
$('.player__play').click(function() {
	var video = $('.player__video').get(0);
	$(this).toggleClass('player__pause');
	video.paused? video.play() : video.pause();
});

$('.player__mute').click(function() {
	$(this).toggleClass('player__muted');
	var video = $('.player__video').get(0);
	video.muted = !video.muted;
});

$('.player__full-screen').click(function() {
	var video = $('.player__video').get(0);
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
});
