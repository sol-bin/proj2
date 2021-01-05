$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : false,
        dots : true,
        autoplay : true,
        autoplaySpeed : 5000,
        pauseOnHover : true
      });

      $(function(){
        var slide;
        slide = setInterval(function(){
          $('#slide .container > div:first-child').animate({
              'margin-left':'-360px'},600,function(){
                $('#slide .container').append(
                    $('#slide .container > div:first-child'));
                $('#slide .container > div:last-child').css({'margin-left':0})
              });
          
        },2000)//slide end
    }) //jq end
})