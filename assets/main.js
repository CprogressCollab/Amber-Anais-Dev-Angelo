$(window).load(function(){
	testimonialowl();
	owlcarousel();
	imagecarousel();
	sidebartoggle();
	stickynav();
	onchangeinput();
});
$(document).ready(function(){
	onchangeinput();
	sidebartoggle();
});

/*
	Variable Functions ==========================================================
	*/
	function testimonialowl(){
		$('.banner-carousel').owlCarousel({
			loop:true,
			mouseDrag:false, 
			nav:true,
			

          autoplay : true,
          autoPlayTimeout: 3000,
          navText: ["<span class='left-nav'></span>", "<span class='right-nav'></span>"],

          	animateOut: 'fadeOut',
          responsiveClass:true,
          responsive:{
          	0:{
          		items:1,
          	},
          	992:{
          		items:1,
          	}


          }
      });
	}
	function owlcarousel(){
		$('.product-carousel').owlCarousel({
			loop:true,
			mouseDrag:true, 
			nav:true,
			
			stagePadding:30,
			margin:30,
          //autoplay : true,
          //autoPlayTimeout: 3000,
          navText: ["<span class='left-nav'></span>", "<span class='right-nav'></span>"],


          responsiveClass:true,
          responsive:{
          	0:{
          		items:1,
          	},
          	767:{
          		items:2,
          	},
          	991:{
          		items:3,
          	},
          	1199:{
          		items:4,
          	}


          }
      });
	}
	function imagecarousel(){
		$('.image-carousel').owlCarousel({
			loop:true,
			mouseDrag:true, 
			nav:true,
          //autoplay : true,
          //autoPlayTimeout: 3000,
          navText: ["<span class='left-nav'></span>", "<span class='right-nav'></span>"],

smartSpeed: 2500,
          responsiveClass:true,
          responsive:{

          	0:{
          		items:2,
          	},
          	767:{
          		items:4,
          	},
          	991:{
          		items:6,
          	},
          	1199:{
          		items:8,
          	}


          }
      });
	}
	function hide(){
		$('body').click(function() {
    // Hide all hidden content
    $('#mySidenav').hide();
});
	}

	function sidebartoggle(){
		var mouse_is_inside = false;

		$(document).ready(function()
		{
			$('#mySidenav').hover(function(){ 
				mouse_is_inside=true; 
			}, function(){ 
				mouse_is_inside=false; 
			});

			$("body").mouseup(function(){ 
				if(! mouse_is_inside) $('#mySidenav').css({"width": "0"});
			});
		});
	}
	function stickynav(){
		var $header_offset = $('header .menu-bar').offset().top;
		var $header_stick = $('header .menu-bar');
		$scroll_pos = $(window).scrollTop();
		$screen = $(window).innerWidth();
		if($scroll_pos >= $header_offset){
			$header_stick.addClass('sticky');
		}
		else{
			$header_stick.removeClass('sticky');
		}

		$(window).scroll(function() {
			var	$header_stick = $('header .menu-bar');
			$scroll_pos = $(window).scrollTop();
			if($scroll_pos >= $header_offset){
				$header_stick.addClass('sticky');
			}
			else{
				$header_stick.removeClass('sticky');
			}
		});
	}
	function onchangeinput(){
		 $(":input.cart__qty-input").on('change', function () {
   setTimeout(function(){ 
    location.reload();     
  }, 1000);

  });
	}

	function redirect(){
var retrievedObject = localStorage.getItem('Test'); 
var domain = '';
var theUrl = JSON.parse(retrievedObject)["pageurl"];
var url_dec = decodeURIComponent(theUrl);

if (document.referrer.includes('challenge')) {

if (url_dec.includes("checkout_url")) {

if (url_dec.includes(".myshopify.com")) { 

redirectURL = domain.concat((window.location['host']), "/account/login?checkout_url=https://", Shopify.shop, "/",);                                           
                  
                          }  
                          else
                          {                 
        
                          redirectURL = domain.concat((window.location['host']), "/account/login?checkout_url=https://", (window.location['host']), "/",);



}

 
var newCheckout = url_dec.replace(redirectURL, '');  

    
window.location.replace(newCheckout);
      
localStorage.removeItem("Test"); 

};

}

	}