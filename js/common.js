$(document).ready(function() {
    
    var windowW = $("html").width();

  if (windowW > 1000){
    $(".main_menu_left_top").mouseover(function(event) {
        $(".ocbilt").animate({
            left: "20%"
          }, 300 );
        $(".ocbtlt").animate({
            top: "35%"
          }, 250 );        
    });
    $(".main_menu_left_top").mouseleave(function(event) {
        $(".ocbilt").animate({
            left: "40%"
          }, 300 );
        $(".ocbtlt").animate({
            top: "100%"
          }, 250 );
    });

    $(".main_menu_right_top").mouseover(function(event) {
        $(".ocbirt").animate({
            left: "20%"
          }, 300 );
        $(".ocbtrt").animate({
            top: "35%"
          }, 250 );        
    });
    $(".main_menu_right_top").mouseleave(function(event) {
        $(".ocbirt").animate({
            left: "40%"
          }, 300 );
        $(".ocbtrt").animate({
            top: "100%"
          }, 250 );
    });

    $(".main_menu_left_bottom").mouseover(function(event) {
    	$(".ocbtlb").css("display","block");
        $(".ocbilb").animate({
            left: "20%"
          }, 300 );
        $(".ocbtlb").animate({
            bottom: "35%"
          }, 250 );        
    });
    $(".main_menu_left_bottom").mouseleave(function(event) {
        $(".ocbilb").animate({
            left: "40%"
          }, 300 );
        $(".ocbtlb").animate({
            bottom: "100%"
          }, 250 );
    	$(".ocbtlb").css("display","none");
    });

    $(".main_menu_right_bottom").mouseover(function(event) {
    	$(".ocbtrb").css("display","block");
        $(".ocbirb").animate({
            left: "20%"
          }, 300 );
        $(".ocbtrb").animate({
            bottom: "35%"
          }, 250 );        
    });
    $(".main_menu_right_bottom").mouseleave(function(event) {
        $(".ocbirb").animate({
            left: "40%"
          }, 300 );
        $(".ocbtrb").animate({
            bottom: "100%"
          }, 250 );
    	$(".ocbtrb").css("display","none");
    });
  }
});