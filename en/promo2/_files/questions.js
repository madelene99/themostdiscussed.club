
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




 function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
        );
    }

 gart=getURLParameter('adid');
 gart1=getURLParameter('adsetname');
 gart2=getURLParameter('age');
 gart3=getURLParameter('gender');
 gart4=getURLParameter('placement');



 glink="http://mazl.trackidze.win/click";
//glink="count.php?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
//glink="count.php?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
 
 


//glink="http://track-c.onversion.club/876416d1-2a87-477a-a139-1e433dc9ba37?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
//glink="http://track-c.onversion.club/76b7c8e0-366b-4cba-a691-504aa86fa88d?adsetname="+gart1+"&placement="+gart4+"&age="+gart2+"&gender="+gart3+"&adid="+gart+"";
console.log(glink);   





a=0;
$(".amazonbut").click(function(){

  a=1;$(".hidesss").hide();
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
  $(".hidesss").hide();
  $(".amazon1").hide();
  $(".amazon2").show();
});

$(".walmart2 a").click(function(){
  
  $(".walmart2").hide();
  $(".walmart3").show();
});
$(".amazon2 a").click(function(){
  $(".hidesss").hide();
  $(".amazon2").hide();
  $(".amazon3").show();
});


$(".amazon3 a").click(function(){
  
  $(".amazon3").hide();
  $(".amazon4").show();
});

$(".amazon4 a").click(function(){
  
  $(".amazon4").hide();
  $(".amazon5").show();
});

$(".amazon5 a").click(function(){
  
  $(".amazon5").hide();
  $(".amazon6").show();
});

$(".amazon6 a").click(function(){
  
  $(".amazon6").hide();
  $(".amazon7").show();
});
$(".amazon7 a").click(function(){
  
  $(".amazon7").hide();
  $(".amazon8").show();
});
$(".amazon8 a").click(function(){
  
  $(".amazon8").hide();
  $(".amazon9").show();
});




 


$(".amazon9 a").click(function(){

  startCheck();

});

$(".walmart9 a").click(function(){

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

  // document.location.href="http://track-c.onversion.club/click/"
   document.location.href=glink;


    }, 1500 * points.length + 2000);
}

function toggleDiv(target) {
  $(target).toggle();
};
 $('#res').click(function () {

 

$('.vikno').show();
setTimeout(function(){ $('#v1').fadeIn(1500); }, 1500);
setTimeout(function(){ $('#v2').fadeIn(1500); }, 3000);
setTimeout(function(){ $('#v3').fadeIn(1500); }, 4500);
setTimeout(function(){ window.location.replace(glink);}, 6000);
//setTimeout(function(){ window.location.href = "http://stackoverflow.com";}, 6000);
});