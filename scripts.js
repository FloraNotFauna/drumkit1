function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('pressed');
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return; //if no audio return

	key.classList.add('pressed');
	audio.currentTime = 0; //rewind to start
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);