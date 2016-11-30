$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width() < 1000) {
            $('nav ul').hide();
            //$('nav ul ul').hide();
        }
        if($(window).width() > 1000) {
            $('nav ul').show();
        }
    });
    $('.menu').click(function(){
        $('nav ul').slideToggle(500);

    });
    $('.bg-transparent').delay(1000).fadeIn(1000);

    $(function() {
        $('nav ul ul li a').click(function() {
            var target = this.hash,
                $top = $(target);
            $('html,body').stop().animate({
                'scrollTop': $top.offset().top + 1
            }, 900);
            $('nav ul ul li a').removeClass('active');
            $(this).addClass('active');
            if($(window).width() < 1000) {
                $('nav ul').hide();
            }
        });
    });

    $(function() {
        $("a[href*='http://']:not([href*='"+location.hostname+"'])").click(function() {
            window.open(this.href);
            return false;
        });
    });
    $('.fancybox').fancybox({
        helpers : {
            title : { type : 'over' }
        },
        beforeShow : function() {
            this.title = (this.title ? '<div class="title-box">' + this.title + '</div>' : '') + '<div class="counter">' +  (this.index + 1) + ' of ' + this.group.length + '</div>';
        },
        maxWidth	: 1300,
        maxHeight	: 1000,
        fitToView	: true,
        width		: '90%',
        height		: '90%',
        autoSize	: true,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none',
        margin      : 0,
        padding     : 0
    });
    $('.fancybox-media').fancybox({
        maxWidth	: 1300,
        maxHeight	: 740,
        fitToView	: true,
        width		: '90%',
        height		: '90%',
        autoSize	: true,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none',
        margin      : 0,
        padding     : 0,
        type: 'iframe',
        helpers : {
            media : {}
        }
    });
    $('.reason').hover(function(){
        $(this).children('.item').fadeToggle(1000);
    });
    $('map[name=Map] area').on({
        'mouseenter':function(){
            $('.tip-window').hide();
            var maplink = $(this).attr('id');
            var i, x = [], y = [];
            var c = $(this).attr('coords').split(',');
            for (i=0; i < c.length; i++){
                x.push( c[i++] );
                y.push( c[i] );
            }
            var t = y.sort(num)[0];
            var l = x.sort(num)[0];
            var tr = +t + +50;
            var lr = l - 0;
            $('.'+maplink).show().css('top',tr+'px');
            $('.'+maplink).show().css('left',lr+'px');
            function num(a, b){ return (a-b); }
        },'mouseleave':function(){
            $('.tip-window').hide();
        }, 'click':function(){
            event.preventDefault();
        }
    });

});