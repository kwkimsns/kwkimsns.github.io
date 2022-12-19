$(document).ready(function(){


    $('#in_header').hover(function(){

        $('#logo').attr({
            src:'img/logo_color.png'
        });

    });


    $('#arrow_bottom').click(function(){

        $('#news_wrap').animate({
            top: -50,
        },1000,function(){
            $('#news_wrap').css({
                top: 0,
            }).find('.news_move').eq(0).appendTo('#news_wrap');
        });

    });

    setInterval(function(){
        $('#arrow_bottom').trigger('click');
    },3000);


    $('#arrow_top').click(function(){

        $('#news_wrap').animate({
            top: -50,
        },1000,function(){
            $('#news_wrap').css({
                top: 0,
            }).find('.news_move').eq(0).prependTo('#news_wrap');
        });

    });

    

    // 메인 사진 이미지 슬라이드 이벤트

    var sec01_ww = $(window).width();


    $('.circle').each(function(index){
        $(this).attr('data-index',index);
    });

    var i = 0;


    $('#sec01_right').click(function(){


        sec01_ww = $(window).width();


        i++;

        if( i > 2){
            i = 0;
        }

        $('#sec01_img_wrap').animate({
            left : -sec01_ww ,
        },1000,function(){
            $('#sec01_img_wrap').css({
                left : 0,
            }).find('.sec01_img_con').first().appendTo('#sec01_img_wrap');
        });

    });


    setInterval(function(){

        $('#sec01_right').trigger('click');

    },5000);
    

        


    // $('.circle').click(function(){

    //     i = $('#circle').attr('data-index');

    //     $('#sec01_img)wrap').animate({
    //         left : -sec01_ww * i,
    //     },1000);

    //     $('.circle').removeClass('active');
    //     $('.circle').eq(i).addClass('active');
        
    // });


    // 라운드 버튼 1
    $('#circle_first').click(function(){

        $('#sec01_img_wrap').animate({
            left : 0,
        });

        $('.circle').removeClass('circle_active');
        $(this).addClass('circle_active');
    });


    // 라운드 버튼 2
    $('#circle_middle').click(function(){

        $('#sec01_img_wrap').animate({
            left : -sec01_ww,
        });

        $('.circle').removeClass('circle_active');
        $(this).addClass('circle_active');

    });


    // 라운드 버튼 3
    $('#circle_last').click(function(){

        $('#sec01_img_wrap').animate({
            left : -sec01_ww*2,
        });

        $('.circle').removeClass('circle_active');
        $(this).addClass('circle_active');
        
    });



    // top 버튼 스크롤 이벤트 
    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if( sct > 100 ){

            $('#top_btn').css({
                opacity : 1,
            });
        }

    });

    $('#top_btn').click(function(){
        $('html,body').animate({
            scrollTop : 0,
        },500);
    });
   





});//end
