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
        slide = setInterval(function(){// setInterval는 정해진 시간 동안자동으로 실행되게 하는것이다
          $('#slide .lazy > div:first-child').animate({
              'margin-left':'-360px'},600,function(){
                $('#slide .lazy').append(
                    $('#slide .lazy > div:first-child'));
                $('#slide .lazy > div:last-child').css({'margin-left':0})
              });
          
        },2000)//slide end
    }) //jq end
})