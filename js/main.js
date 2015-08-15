$("#one, #two, #four, #five").click(function(){
    $("#three").css("display", "inline-block");
    $("#two").css("border", "0");
});

$("#logo").click(function(){
	$("#three").css("display", "hidden");
});


$('.nav-button').on('click', function(){
	if($(window).width() < 768 ){
	    $(".navbar-toggle").click();
	}
});

$('#logo').on('click', function(){
	$('.nav-button').removeClass('active');
})