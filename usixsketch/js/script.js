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
				 
			 
	 





$(document).ready(function(){
//	$(".fon1").hide();
 //	$(".amazon5").show();



	$(".right .txt2").click(function(){
		$(".fon1").hide();
		$(".walmart1").show();
	});
	

	$(".left .txt2").click(function(){
		$(".fon1").hide();
		$(".amazon1").show();
	});

	


	a1=0;
	a2=0;

	a3=0;
	a4=0;
	$(".amazon1 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(".button1").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		$(this).css({"background":"#50e3c2"});
		a1=1;
	});
	$(".button1").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a1==1) {
			$(".amazon1").hide();
			$(".amazon2").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});
	$(".amazon2 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(".button2").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		$(this).css({"background":"#50e3c2"});
		a2=1;
	});
	$(".button2").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a2==1) {
			$(".amazon2").hide();
			$(".amazon3").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});

/*	$(".amazon3 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(".button3").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		$(this).css({"background":"#50e3c2"});
		a3=1;
	});
	$(".button3").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a3==1) {
			$(".amazon3").hide();
			$(".amazon4").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});

	$(".amazon4 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(".button4").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		$(this).css({"background":"#50e3c2"});
		a3=1;
	});
	$(".button4").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a4==1) {
			$(".amazon4").hide();
			$(".amazon5").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});


*/



	$(".amazon3 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(this).css({"background":"#50e3c2"});
		$(".button3").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		a4=1;
	});
	$(".button3").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a4==1) {
			$(".amazon3").hide();
		$(".amazon5").show();

		function amaz4(){
 				$(".amazon5").hide();
				$(".amazon6").slideDown();
 			}
 			setTimeout(amaz4,4000);

 		function dothide(){
 			$(".dot1").hide()
 			$(".dot2").hide()
 			$(".dot3").hide()
 		}
 		function dot1(){
 			$(".dot1").show()
 		}
 		function dot2(){
 			$(".dot2").show()
 		}
 		function dot3(){
 			$(".dot3").show()
 		}
 		setTimeout(dot1,500);
 		setTimeout(dot2,1000);
 		setTimeout(dot3,1500);

 		setTimeout(dothide,2000);


 		setTimeout(dot1,2500);
 		setTimeout(dot2,3000);
 		setTimeout(dot3,3500);

		} else {
			alert("Error! Choose the answer!")
		}
	});

















$(".walmart1 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(this).css({"background":"#50e3c2"});
		$(".button1q").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		a1=1;
	});
	$(".button1q").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a1==1) {
			$(".walmart1").hide();
			$(".walmart2").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});


$(".walmart2 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(this).css({"background":"#50e3c2"});
		$(".button2q").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		a2=1;
	});
	$(".button2q").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a2==1) {
			$(".walmart2").hide();
			$(".walmart3").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});


$(".walmart3 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(this).css({"background":"#50e3c2"});
		$(".button3q").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		a3=1;
	});
	$(".button3q").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a3==1) {
			$(".walmart3").hide();
			$(".walmart4").show();
		} else {
			alert("Error! Choose the answer!")
		}
	});


	$(".walmart4 .buts").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();
		$(".buts").css({"background":"#a2cdff"});
		$(this).css({"background":"#50e3c2"});
		$(".button4q").css({"background":"linear-gradient(to top, #ffed9e, #ff9e00)"});
		a4=1;
	});
	$(".button4q").click(function(){
		//$(".amazon1").hide();
		//$(".amazon2").show();

		if (a4==1) {
			$(".walmart4").hide();
		$(".walmart5").show();

		function walm4(){
 				$(".walmart5").hide();
				$(".walmart6").slideDown();
 			}
 			setTimeout(walm4,5000);

 		function dot1(){
 			$(".dot1").show()
 		}
 		function dot2(){
 			$(".dot2").show()
 		}
 		function dot3(){
 			$(".dot3").show()
 		}
 		setTimeout(dot1,1000);
 		setTimeout(dot2,2000);
 		setTimeout(dot3,3000);



		} else {
			alert("Error! Choose the answer!")
		}
	});














	 
 
 
});			