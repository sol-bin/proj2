$(function(){
    $("#sec1 .lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : false,
        dots : true,
        autoplay : true,
        autoplaySpeed : 3000,//시간 (초)
        pauseOnHover : false//true 라고 하면 마우스를 오버 했을때 작동이 되지않고 그것이 싫으면
                            //false 라고 해 놓는다.
      });

      $("#sec2 .lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : true,
        dots : false,
        autoplay : true,
        autoplaySpeed : 3000,//시간 (초)
        pauseOnHover : false//true 라고 하면 마우스를 오버 했을때 작동이 되지않고 그것이 싫으면
                            //false 라고 해 놓는다.
      });




})