$(document).ready(function(){
var target;
$('body').on('click','.startCounter',function(event){
	event.preventDefault();
	$(this).removeClass('active');
	$(this).parent().next().children('.pauseCounter').addClass('active');
	clearInterval(timeCounter);
    target = $(this);
	console.log(target);
	var counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
	var counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
	var totalSeconds = (counterMinutes * 60) + counterSeconds;
	
	function totalTime() {
		if(totalSeconds>0){
		console.log(totalSeconds);		
		counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
	    counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
	    totalSeconds = (counterMinutes * 60) + counterSeconds;		
		totalSeconds--;	
		$(target).parent().siblings().children('.counterMinutes').val(Math.floor(totalSeconds/60));	
		$(target).parent().siblings().children('.counterSeconds').val(totalSeconds%60);	
		}
	    else if(totalSeconds<1){	
	    	$(target).removeClass("active");
	    	$(target).parent().siblings().children().removeClass("active"); 	    	    	
    		target = $(target).parent().parent().parent().next().find('.startCounter');
    		$(target).parent().siblings().children('.pauseCounter').addClass('active');	
	 		counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
			counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
			totalSeconds = (counterMinutes * 60) + counterSeconds; 
			$(target).parent().siblings().children('.counterMinutes').val(Math.floor(totalSeconds/60));	
			$(target).parent().siblings().children('.counterSeconds').val(totalSeconds%60);									
   		} 
	}
var timeCounter = setInterval(totalTime, 1000);

$(".pauseCounter").click(function(event){
	event.preventDefault();
	clearInterval(timeCounter);
	$(this).removeClass('active');
	$(this).parent().siblings().children('.startCounter').addClass("active");
});
});

$('body').on('click', '#startSequence', function(event){
	$(this).hide();
	$('#pauseSequence').show();
	target = $('.startCounter:visible');
	event.preventDefault();
	$(target).removeClass('active');
	$(target).parent().next().children('.pauseCounter').addClass('active');
	clearInterval(timeCounter);
	console.log(target);
	var counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
	var counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
	var totalSeconds = (counterMinutes * 60) + counterSeconds;
	
	function totalTime() {
		if(totalSeconds>0){
			console.log(totalSeconds);		
			counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
		    counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
		    totalSeconds = (counterMinutes * 60) + counterSeconds;		
			totalSeconds--;	
			$(target).parent().siblings().children('.counterMinutes').val(Math.floor(totalSeconds/60));	
			$(target).parent().siblings().children('.counterSeconds').val(totalSeconds%60);	
		}
	    else if(totalSeconds<1){	
	    	$(target).removeClass("active");
	    	$(target).parent().siblings().children().removeClass("active"); 	    	    	
    		target = $(target).parent().parent().parent().next().find('.startCounter');
    		$(target).parent().siblings().children('.pauseCounter').addClass('active');	
	 		counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
			counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
			totalSeconds = (counterMinutes * 60) + counterSeconds; 
			$(target).parent().siblings().children('.counterMinutes').val(Math.floor(totalSeconds/60));	
			$(target).parent().siblings().children('.counterSeconds').val(totalSeconds%60);									
   		} 
	}
var timeCounter = setInterval(totalTime, 1000);

$(".pauseCounter").click(function(event){
	event.preventDefault();
	clearInterval(timeCounter);
	$(this).removeClass('active');
	$(this).parent().siblings().children('.startCounter').addClass("active");
});

$("#pauseSequence").click(function(event){
	event.preventDefault();
	$(this).hide();
	$('#startSequence').show();	
	clearInterval(timeCounter);
});
	console.log(target);
});


$('.startCounter.active').clone().appendTo("#tra");	


$('#newCounter').click(function(event){
	event.preventDefault();
	$row = $('<div class="row"></div>');
	$form = $('<form class="counterForm form-inline"></form>');
 	$form.append('<div class="form-group col-md-4"> <input type="text" class="routine form-control"  value="activity..."  /></div> ');	
 	$form.append(' <div class="form-group col-md-4"> <input type="text" class="counterMinutes form-control"  value="0"  /></div>');
	$form.append(' <div class="form-group col-md-4"> <input type="text" class="counterSeconds form-control" value="0" /></div>'); 	
	$form.append(' <div class="form-group col-md-12"><input type = "submit" class="startCounter form-control" value="start" /></div>');
 	$form.append(' <div class="form-group col-md-12"><input type = "submit" class="pauseCounter form-control btn btn-warning" value="pause" /></div>');
 	$('#clock').append($row);
 	$($row).append($form); 	 	
});

});