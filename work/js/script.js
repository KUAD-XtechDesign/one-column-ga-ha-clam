$(function(){
  
    $(".img_button").on("click",function(){
      $(this).siblings(".content").fadeIn(1000);
    })
  
    $(".close_button").on("click",function(){
      $(this).parent(".content").fadeOut(500);
    })
  
  });