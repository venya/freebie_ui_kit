


// Set handlers for .switch
$('.switch input').click( function(e){
	$(this).parent('.switch').toggleClass('switch_on');
})