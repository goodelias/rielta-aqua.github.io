$(function () {
	$(window).scroll(function() {
        $('#learn .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('#mail .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.skill-knowing').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.skill-free').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.skill-change').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('#mail .input').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.btn-form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
})