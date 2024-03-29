$(document).ready(function(){
  
  $('.js-scroll-trigger').on('click', function(event) {
    
    $('.js-scroll-trigger').removeClass('active');
    $(this).addClass('active');
    
    if (this.hash !== "") {
      
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });

});
