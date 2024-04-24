$('.book').on('click touchend', function(event){
  event.preventDefault(); // Prevent default click or touch behavior
  toggleFlip();
});

// Function to toggle flip class and control video playback
function toggleFlip() {
  $('.p').toggleClass('flip');
  if ($('.p4').hasClass('flip')) {
    // Start playing the video when the book is open
    $('.p4 video').get(0).play();
    // Listen for transitionend event to ensure the page is fully flipped open
    $('.p4').one('transitionend', function() {
      $('.p4 video').get(0).play();
    });
  } else {
    // Pause the video if the book is closed
    $('.p4 video').get(0).pause();
  }
}
