$(window).scroll(function() {
  /* irrelevant to question
  if ($(this).scrollTop()) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
  */
});

$('#toTop').fadeIn()
.click(function() {
  $(".menu").animate({
    scrollTop: 0
  }, 1000);
  /* if you want the body to scroll to the top AS WELL
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
  */
});