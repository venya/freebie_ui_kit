


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
$('.player__controls').click(function(e) {
	var video = $(this).parent('.player').find('video').get(0);
	console.log(video);
	video.paused? video.play() : video.pause();
});