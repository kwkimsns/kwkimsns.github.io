$(document).ready(function(){

    // 메거진

    var con_ww = $('.magaine').width();
    
    $('.btn_right').click(function(){

        $('#sec02_mask').animate({
            left : -con_ww - 20,
        },2000,function(){

            $('#sec02_mask').css({
                left:0,
            }).find('.magaine').first().appendTo('#sec02_mask');

        });

    });


    function slide (){

        si = setInterval(function(){
            $('.btn_right').trigger('click');
        },2000);

    }

    slide();

    $('#sec02_mask').hover(function(){

        clearInterval(si);

    },function(){

        slide();

    });



    // 프로모션


    var pro_ww = $('.promotion').width();
    
    $('.btn_right').click(function(){

        $('#sec05_mask').animate({
            left : -pro_ww - 20,
        },2000,function(){

            $('#sec05_mask').css({
                left:0,
            }).find('.promotion').first().appendTo('#sec05_mask');

        });

    });


    function slide01 (){

        si = setInterval(function(){
            $('.btn_right').trigger('click');
        },2000);

    }

    slide01();

    $('#sec05_mask').hover(function(){

        clearInterval(si01);

    },function(){

        slide01();

    });





    // 메뉴바 슬라이드 고정 이벤트 
    
    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if( sct >= 100 ){
            $('header').css({
                height : 80,
                padding : '17px 0 0 180px',
            });

            $('.sub_menu').css({
                top : 80,
            });


        }else if( sct < 100 ){
            $('header').css({
                height : 150,
                padding : '57px 0 0 180px',
            });

            $('.sub_menu').css({
                top : 150,
            });
        }
        



    });
      


































});//end