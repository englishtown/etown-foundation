// JavaScript Document

(function($){
	$.fn.toggleImgButton = function() 
	{
		$(this).click( function()
		{
			if ( $(this).children( "img" ).attr( "class" ) == "off" )
			{
				$(this).children( "img" ).removeClass( "off" );
				$(this).children( "img" ).addClass( "on" );
			}
			else
			{
				$(this).children( "img" ).removeClass( "on" );
				$(this).children( "img" ).addClass( "off" );
			}
			return false;
		});
	};
})(jQuery);