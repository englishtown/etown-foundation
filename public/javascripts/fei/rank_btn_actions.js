// TODO: Remove all path references, convert all paths references into style classes
// NOTE: all broken references should be fixed

// JavaScript Document
function toogleBtn( target, behaviour )
{ 

	var radioTarget = "";
	
	if ( $(target).children('.off').length > 0 )
	{
		//replace the img src
		if ( $(target).attr( 'id' ) == "individual" )
		{
			$( $(target).children('.off').children('.icon').children('img')[0] ).attr('src', '/images/fei/icons/individual_ranking_on.png');
			radioTarget = "#team";
		}
		else
		{
			$( $(target).children('.off').children('.icon').children('img')[0] ).attr('src', '/images/fei/icons/team_ranking_on.png');
			radioTarget = "#individual";
		}
		
		//toogle font class
		$(target).children('.off').toggleClass('on');
		$(target).children('.off').toggleClass('off');
	}
	else
	{
		//replace the img src
		if ( $(target).attr( 'id' ) == "individual" )
		{
			$( $(target).children('.on').children('.icon').children('img')[0] ).attr('src', '/images/fei/icons/individual_ranking_off.png');
			radioTarget = "#team";
		}
		else
		{
			$( $(target).children('.on').children('.icon').children('img')[0] ).attr('src', '/images/fei/icons/team_ranking_off.png');
			radioTarget = "#individual";
		}
		
		//toogle font class
		$(target).children('.on').toggleClass('off');
		$(target).children('.on').toggleClass('on');
	}
	
	//if its a 2 btn radio component, toogle the other btn.
	if ( behaviour == "radio" )
	{
		toogleBtn( $(radioTarget), "single" );
	}
}