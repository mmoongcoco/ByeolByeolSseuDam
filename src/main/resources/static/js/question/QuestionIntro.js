$(function(){ 

    $("#launcher").click(function(){
      $(".modal").fadeIn();
    });
    
    $(".modal_content").click(function(){
      $(".modal").fadeOut();
    });
    
  });