(function ($) {
	"use strict";
	
var facebook_page_username = 'themeix';
var twitter_username = 'themeix';
var twitter_widget_id = '428888163344326656';
var number_of_tweet = 4; 
	
	
  // instafeed
var feed = new Instafeed({
    get: 'user',
    userId: 5629972527,
    accessToken:'5629972527.8f4c5bf.c1b363769f2e4b229b92dde548feaca2',
    template: '<div class="item"><a href="{{link}}"><img src="{{image}}" /></a></div>',
    limit : '9',
    resolution  : 'low_resolution',   
    after: function(){

    	 $('.instagram-carousel').owlCarousel({

             loop       : true,
             autoplay   : true,
             responsive : {

             	0: {

             		items : 1
             	},

             	480 : {

             		items : 2
             	},

             	768 : {

             		items : 4
             	},

             	992: {
             		items:6
             	}
             }
        });
    }

});


feed.run();


 function scrollTop(){

     $(".scroll-to-top a").on("click", function(e){
           var topTarget = $("body,html");
           topTarget.animate({scrollTop:0},800,"easeOutCubic");
           e.preventDefault();
     });
 }

 scrollTop();


 
    function twitter() {
        if ($('.widget-twitter').length) {
            var twitter_block = '<a class="twitter-timeline"  href="https://twitter.com/'+twitter_username+'" data-widget-id="'+twitter_widget_id+'" data-link-color="#E81C4F" data-chrome="nofooter noscrollbar" data-tweet-limit="'+number_of_tweet+'">Tweets by '+twitter_username+'</a> ';
            twitter_block += "<script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>";
            $('.widget-twitter').append(twitter_block);
        }
    }

twitter();

})(jQuery);

}(jQuery));