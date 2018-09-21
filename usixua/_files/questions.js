
var counter1 = 182;
    var counter2 = 292;
   
        
        function progressDemo() {
          counter1=counter1+55;
         
          document.getElementById( 'numbers2_1' ).innerHTML=counter1;
            /*if( counter1 >= 116223 ) {
           clearInterval( timer );
            document.getElementById( 'numbers2_1' ).innerHTML="116,223";
           }*/
          }
          function progressDemo2() {
          counter2=counter2+55;
          document.getElementById( 'numbers3_2' ).innerHTML=counter2;
         
             /*if( counter2 >= 82241 ) {
           clearInterval( timer2 );
            document.getElementById( 'numbers3_2' ).innerHTML="82,241";
            }*/
            
          }
          
         

        
        var timer = setInterval(progressDemo, 2000 );
        var timer2 = setInterval(progressDemo2, 2000 );
         
       
   



$(document).ready(function() {

a=0;
$(".amazonbut").click(function(){
  a=1;
  $(".choose").hide();
  $(".amazon1").show();
});
$(".walmartbut").click(function(){
  a=2;
  $(".choose").hide();
  $(".walmart1").show();
});

$(".walmart1 a").click(function(){
  
  $(".walmart1").hide();
  $(".walmart2").show();
});
$(".amazon1 a").click(function(){
  
  $(".amazon1").hide();
  $(".amazon2").show();
});

$(".walmart2 a").click(function(){
  
  $(".walmart2").hide();
  $(".walmart3").show();
});
$(".amazon2 a").click(function(){
  
  $(".amazon2").hide();
  $(".amazon3").show();
});

 


$(".amazon3 a").click(function(){

  startCheck();

});

$(".walmart4 a").click(function(){

  startCheck();

});


  $('#questionWrapper .question').first().show(); //show first questionblock

 /* $("#questionWrapper .answer" ).click(function( event ) {
    event.preventDefault();
    if ($(this).attr('class') == 'answer cannotContinue' ) {
      alert('Вибачте, вам повинно бути 16 або більше для участі в опитуванні. ');
      return;
    }
    else {
      $(this).parent('.question').fadeOut(200);
      if ($(this).parent().next('.question').length) {
        $(this).parent().next('.question').delay(200).fadeIn();
      }
      else {
        startCheck();
      }
    }
  }); */
});

function startCheck() {
    var overlay = $('.overlay-checker'),
        points = $('.overlay-checker-points > li');

    // Initially, hide all the points so we can show them one by one
    points.hide();

    // Fade in the overlay
    overlay.fadeIn();

    // Loop points.lenght times (so through every point)
    for (i = 0; i < points.length; i++) {
      setTimeout(function () {
        $('.overlay-checker-points').find(':hidden').first().fadeIn();
      }, 1500 * (i + 1));
    }

    // After all items have been faded in, redirect
    setTimeout(function () {
   //   window.location = $('.redirectNow').attr('href');

   document.location.href="http://trackb.space/click.php?lp=1"


    }, 1500 * points.length + 2000);
}

function toggleDiv(target) {
  $(target).toggle();
}
