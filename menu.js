function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

$(document).ready(function(){
  $('.button-menu').hide();
  $('.menu').click(function(){
    $('.button-menu').toggle();
  })
  $('.button-menu li').click(function(){
    $('.button-menu').toggle();
  })
  $('.left-customer p').hide();
  $('#para2').show();
  $('.left-customer img').click(function(){
    $('.left-customer img').removeClass('enlarge');
    $(this).toggleClass('enlarge');
    var checked = $('.enlarge').attr('para-id')
    $('.left-customer p').hide();
    $(checked).show();
  })
})
