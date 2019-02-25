$(document).ready(function(){
    const layerOne = $('.header-layer-1');
    const layerTwo = $('.header-layer-2');
    const title = $('.header-title');

	$('header').mousemove(function(e) {
		const pageX = e.clientX;
		const pageY = e.clientY;		
  	    layerOne.css({ transform: 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)'});  	
        layerTwo.css({ transform: 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)'});
        title.css({ transform: 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)'});		
    });
    
    $(window).scroll(function() {
        var st = $(this).scrollTop();

        title.css({ transform: 'translateX(0%) translateY(' + -st / 3 + '%)'});
        layerOne.css({ transform: 'translateX(0%) translateY(' + -st / 40 + '%)'});
        layerTwo.css({ transform: 'translateX(0%) translateY(' + -st / 50 + '%)'});
    });

    AOS.init({
        easing: 'ease-in-out-sine'
      });
 });