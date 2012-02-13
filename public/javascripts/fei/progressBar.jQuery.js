// JavaScript Document

(function($){
	$.fn.progressBar = function( loaded, total ) 
	{
		var barw = ( loaded / total ) * $(this).width();
		$(this).children('#bar').animate( { width: barw }, 5000, function() { });
	};
	$.fn.resetProgressBar = function( loaded, total ) 
	{
		$(this).children('#bar').css( 'width','0px' );
	};
})(jQuery);