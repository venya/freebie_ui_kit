


//	Set click handlers for .switch components
document.querySelectorAll('.switch input').forEach( function(el) {
	el.onclick = function() {
		toggleClassName(parentClassSelector(el, 'switch'), 'switch_on', this.checked);
	}
} )

//	Set click handlers for .checkbox components
document.querySelectorAll('.checkbox input').forEach( function(el) {
	el.onclick = function() {
		toggleClassName(parentClassSelector(el, 'checkbox'), 'checkbox_on', this.checked);
	}
} )

//	Set click handlers for .radio components
function radio_sync() {
	document.querySelectorAll('.radio__input').forEach( function(el){
		toggleClassName(parentClassSelector(el, 'radio'), 'radio_on', el.checked);
	})
}
document.querySelectorAll('.radio__input').forEach( function(el){
	el.onclick = radio_sync;
})

// Set handler for .select opening
document.querySelectorAll('.select__caret').forEach( function(el) {
	el.onclick = function() {
		toggleClassName(parentClassSelector(el, 'select'), 'select_open');
	};
} )




// Video player controls
// 1. play/pause
document.querySelector('.player__play').onclick = function() {
	var video = document.querySelector('.player__video');
	toggleClassName(this, 'player__pause');
	video.paused? video.play() : video.pause();
};
// 2. mute/unmute
document.querySelector('.player__mute').onclick = function() {
	var video = document.querySelector('.player__video');
	toggleClassName(this, 'player__muted');
	video.muted = !video.muted;
};
// 3. full screen mode
document.querySelector('.player__full-screen').onclick = function() {
	var video = document.querySelector('.player__video');
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
};






//	Functions reimplemented


function hasClass(el, className) {
	return new RegExp('(\\s|^)' + className + '(\\s|$)').test(el.className);
}

function parentClassSelector(el, className) {
	while (el = el.parentElement) {
		if (hasClass(el, className))
			return el;
	};
}

function toggleClassName(el, className, state) {
	if (!el) return;
	if ("undefined" == typeof(state)) {
		state = !hasClass(el, className);
	}
	el.classList.remove(className);
	if (state) el.className += ' '+className;
}
