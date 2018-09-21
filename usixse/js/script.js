var counter1 = 163;
		var counter2 = 148;
	 
				
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

	$(".fon1 .amazonbut").click(function(){

		$(".fon1").hide();
		$(".amazon1").show();
	});

	$(".fon1 .walmartbut").click(function(){

		$(".fon1").hide();
		$(".walmart1").show();
	});
	 
	$(".amazon1 .btn").click(function(){
	
		if ($(".checkbox2").is(':checked')) {
			
			$(".amazon1").hide();
			$(".amazon2").show();

		}

		else{
			alert("Error! Make a choice");
		}

	});
 
	$(".amazon2 .btn").click(function(){
	
		if ($(".checkbox3").is(':checked')) {
			
			$(".amazon2").hide();
			$(".amazon3").show();

		}

		else{
			alert("Error! Make a choice");
		}

	});
 
/*	$(".amazon3 .btn").click(function(){
	
		if ($(".checkbox4").is(':checked')) {
			
			$(".amazon3").hide();
			$(".amazon4").show();

		}

		else{
			alert("Error! Make a choice");
		}

	});
*/
	$(".amazon3 .btn").click(function(){

		if ($(".checkbox4").is(':checked')) {

		$(".amazon3").hide();
		//$("#q3").show();
					$(".amazon5").show();
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

						function amaz4(){
			 				$(".amazon5").hide();
					$(".amazon6").show();
			 			}
			 			setTimeout(amaz4,5000);

			 		  


		}

		else{
			alert("Error! Make a choice");
		}
	});


	$(".walmart1 .btn").click(function(){

		if ($(".checkbox6").is(':checked')) {


			$(".walmart1").hide();
			$(".walmart2").show();

		}

		else{
			alert("Error! Make a choice");
		}
	});




	$(".walmart2 .btn").click(function(){

		if ($(".checkbox7").is(':checked')) {


			$(".walmart2").hide();
			$(".walmart3").show();

		}

		else{
			alert("Error! Make a choice");
		}
	});

	$(".walmart3 .btn").click(function(){

		if ($(".checkbox8").is(':checked')) {


			$(".walmart3").hide();
			$(".walmart4").show();

		}

		else{
			alert("Error! Make a choice");
		}
	});





	$(".walmart4 .btn").click(function(){
		if ($(".checkbox9").is(':checked')) {



		$(".walmart4").hide();
		$(".walmart5").show();
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

			function walm4(){
 				$(".walmart5").hide();
		$(".walmart6").show();
 			}
 			setTimeout(walm4,5000);

 			}

		else{
			alert("Error! Make a choice");
		}


	});


 



 

		






});