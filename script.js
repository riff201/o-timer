$(document).ready(function(){
var inputMinutes = $('.counterForm').eq(0).children()[1];
var getMinutes = $(inputMinutes).children().val();
console.log(getMinutes);

$('body').on('click', '#startSequence', function(event){
	$(this).hide();
	$('#pauseSequence').show();
	target = $('.currentCounter');
	event.preventDefault();
	$(target).removeClass('currentCounter');
	$(target).parent().next().children('.pauseCounter').addClass('currentCounter');
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
	    	$(target).removeClass("currentCounter");
	    	$(target).parent().siblings().children().removeClass("currentCounter"); 	    	    	
    		target = $(target).parent().parent().parent().next().find('.startCounter');
    		$(target).parent().siblings().children('.pauseCounter').addClass('currentCounter');	
	 		counterMinutes = parseInt($(target).parent().siblings().children('.counterMinutes').val());
			counterSeconds = parseInt($(target).parent().siblings().children('.counterSeconds').val());	
			totalSeconds = (counterMinutes * 60) + counterSeconds; 
			$(target).parent().siblings().children('.counterMinutes').val(Math.floor(totalSeconds/60));	
			$(target).parent().siblings().children('.counterSeconds').val(totalSeconds%60);
			if(!target.length){
				var repeatDecrement = parseInt($('#repeatSequence').val()-1);
				if(repeatDecrement<0){
					repeatDecrement = 0;
				}
				$("#repeatSequence").val(repeatDecrement);
				if(repeatDecrement<1){
					$('#pauseSequence').html("Finished").prop('disabled', true);
				}
			}									
   		} 
	}
var timeCounter = setInterval(totalTime, 1000);

$(".pauseCounter").click(function(event){
	event.preventDefault();
	clearInterval(timeCounter);
	$(this).removeClass('currentCounter');
	$(this).parent().siblings().children('.startCounter').addClass("currentCounter");
});

$("#pauseSequence").click(function(event){
	event.preventDefault();
	$(this).hide();
	$('#startSequence').show();	
	clearInterval(timeCounter);
});
	console.log(target);
});

$('#newCounter').click(function(event){
	event.preventDefault();
	$row = $('<div class="row"></div>');
	$form = $('<form class="counterForm form-inline"></form>');
 	$form.append('<div class="form-group col-md-8"> <input type="text" class="routine form-control"  value="activity..."  /></div> ');	
 	$form.append(' <div class="form-group col-md-2"> <input type="text" class="counterMinutes form-control"  value="4"  /></div>');
	$form.append(' <div class="form-group col-md-2"> <input type="text" class="counterSeconds form-control" value="0" /></div>'); 	
	$form.append(' <div class="form-group"> <input type = "hidden" class="startCounter"/></div>');
	$form.append(' <div class="form-group"> <input type = "hidden" class="pauseCounter"/></div>');	
 	$('#clock').append($row);
 	$($row).append($form); 	 	
});

});