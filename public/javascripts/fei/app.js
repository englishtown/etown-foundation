$(document).ready(function()
{


  $('.social_quiz_progressbar_1').click(function() 
  {
    $('.social_quiz_progressbar_1').resetProgressBar();
    $('.social_quiz_progressbar_1').progressBar(100,100);

    return false;
  });

  $('.WhiteSwitchButton22px_off').click(function() 
  {
    toogleWhiteSwitchButton22px( $(this) );
    return false;
  });
  $('.WhiteSwitchButton22px_on').click(function() 
  {
    toogleWhiteSwitchButton22px( $(this) );
    return false;
  });

  //tgl003
  $(".help_btn").toggleImgButton();

  //tgl004
  $(".max_min_btn23px").toggleImgButton();
});