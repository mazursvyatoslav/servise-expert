$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('#navbar').addClass("sticky");
      $('.navbar-brand').addClass("sticky");
      $('#myNavbar ul li a').addClass("sticky");
      $('#registration').addClass("sticky");        
  }
  else{
      $('#navbar').removeClass("sticky");
      $('.navbar-brand').removeClass("sticky");
      $('#myNavbar ul li a').removeClass("sticky");
      $('#registration').removeClass("sticky");
  }});
