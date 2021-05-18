export default async function videoDisclaimer() {
	let wrapper = document.querySelector('.video-disclaimer__wrapper');
	let video = document.querySelector('.video-disclaimer__video');
  let controls = document.querySelector('.video-disclaimer__controls');
  let nextButton = document.querySelector('.slider__button-next');

	function playPause() {
		// Play the video
		if (video.paused) {
			video.play();
			controls.classList.replace('video-disclaimer__controls--paused','video-disclaimer__controls--playing');
		}
		// Pause the video
		else {
			video.pause();
			controls.classList.replace('video-disclaimer__controls--playing','video-disclaimer__controls--paused');
		}
	}
  
  // Toggle Play/Pause
	wrapper.addEventListener('click', function() {
		playPause();
	});
  
  // Stop video when next button clicked
	nextButton.addEventListener('click', function() {
    video.pause();
    controls.classList.remove('video-disclaimer__controls--playing');
    controls.classList.add('video-disclaimer__controls--paused');
    
    video.currentTime = 0;
	});
  
  // Keyboard Controls
	wrapper.addEventListener('keydown', function(e) {
		// space bar (play/pause)
		if (e.which === 32) {
			playPause();
		}
		
		// left arrow (skip back 5 seconds)
		else if (e.which === 37) {
			video.currentTime = video.currentTime - 5;
		}
		
		// right arrow (skip forward 5 seconds)
		else if (e.which === 39) {
			video.currentTime = video.currentTime + 5;
		}
	});
	
}