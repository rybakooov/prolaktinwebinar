$(document).ready(function(){
  

  $(document).on('click', '[data-webinarpopup=""]', function(){
    $('#webinarPopup').fadeIn().css('display', 'flex');
  })

  $(document).on('click', '.webinarPopup-content__close', function(){
    $(this).closest('#webinarPopup').fadeOut();
  })
  
  $(document).on('click', '.webinarPopup', function(e){
    if(this == e.target){
      $(this).fadeOut();
    }
    
  })


});