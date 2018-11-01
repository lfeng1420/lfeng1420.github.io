;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			autoHeight: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var randomSubtitle = function () {
		var subTitle = document.getElementById("subtitle");
		if (subTitle === null)
		{
			return;
		}

		var arrContent = new Array(
			"放春周游忘三千里，昆明送湖见面雨 ♫", 
			"我在等你，等下完这场雨 ♬", 
			"小白笑 小白哭 小白唱 小白在跳 ♪",
			"床前的明月光，安娜在轻轻唱 ♫",
			"满城涓涤，净此生的别离 ♬",
			"我要的不是再见，再见时请勿想念 ♪", 
			"落叶倦，诗一样画风浓烈 ♬", 
			"你身后孤心已决，把皓月剪成飞雪 ♫",
		);
		var index = Math.floor(Math.random() * arrContent.length);
		subTitle.innerHTML += "<br>" + arrContent[index];
	};

	
	$(function(){
		testimonialCarousel();
		contentWayPoint();
		randomSubtitle();
	});


}());