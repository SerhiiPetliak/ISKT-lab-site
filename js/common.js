$(document).ready(function() {
    
    var windowW = $("html").width();

  if (windowW > 1000){
    $(".main_menu_left_top").mouseover(function(event) {
        $(".ocbilt").animate({
            left: "20%"
          }, 300 );
        $(".ocbtlt").animate({
            top: "32%"
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
            top: "32%"
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
            bottom: "32%"
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
            bottom: "32%"
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
/* Вызов страницы в левой части экрана*/
    $(".main_menu_left_top").click(function(){
      $(".about_us_block").animate({
            left: "2%"
          }, 300 );
    });
    $(".aub_close").click(function(){
      $(".about_us_block").animate({
            left: "-100%"
          }, 300 );
    });

    $(".main_menu_right_top").click(function(){
      $(".our_command_block").animate({
            top: "2%"
          }, 300 );
    });
    $(".acb_close").click(function(){
      $(".our_command_block").animate({
            top: "-100%"
          }, 300 );
    });

    $(".main_menu_left_bottom").click(function(){
      $(".documents_block").animate({
            right: "2%"
          }, 300 );
    });
    $(".db_close").click(function(){
      $(".documents_block").animate({
            right: "-100%"
          }, 300 );
    });

    $(".main_menu_right_bottom").click(function(){
      $(".contacts_block").animate({
            bottom: "2%"
          }, 300 );
    });
    $(".cb_close").click(function(){
      $(".contacts_block").animate({
            bottom: "-100%"
          }, 300 );
    });
}else{
    /* Вызов страницы в левой части экрана*/
    $(".main_menu_left_top").click(function(){
      $(".about_us_block").animate({
            left: "0%"
          }, 300 );
    });
    $(".aub_close").click(function(){
      $(".about_us_block").animate({
            left: "-100%"
          }, 300 );
    });

    $(".main_menu_right_bottom").click(function(){
      $(".contacts_block").animate({
            bottom: "0%"
          }, 300 );
    });
    $(".cb_close").click(function(){
      $(".contacts_block").animate({
            bottom: "-100%"
          }, 300 );
    });

    $(".main_menu_left_bottom").click(function(){
      $(".documents_block").animate({
            right: "2%"
          }, 300 );
    });
    $(".db_close").click(function(){
      $(".documents_block").animate({
            right: "-100%"
          }, 300 );
    });

    $(".main_menu_right_top").click(function(){
      $(".our_command_block").animate({
            top: "2%"
          }, 300 );
    });
    $(".acb_close").click(function(){
      $(".our_command_block").animate({
            top: "-100%"
          }, 300 );
    });
}
});