


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








//	Functions reimplemented

function parentClassSelector(el, className) {
	while (el = el.parentElement) {
		if (new RegExp('(\\s|^)' + className + '(\\s|$)').test(el.className))
			return el;
	};
}

function toggleClassName(el, className, state) {
	if (!el) return;
	el.classList.remove(className);
	if (state) el.className += ' '+className;
}
