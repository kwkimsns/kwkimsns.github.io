$(document).ready(function(){

    var sec01_w = $('.sec01_con').width();
    var i = 0;

    $('#sec01_btn_right').click(function(){

        $('#sec01_con_wrap').animate({
            left : -sec01_w,
        },1000,function(){
            $('#sec01_con_wrap').css({
                left : 0,
            }).find('.sec01_con').first().appendTo('#sec01_con_wrap');

        });

    });


    function slide (){

       si = setInterval(function(){
            $('#sec01_btn_right').trigger('click');
            },3000);
    }

    slide();


    $('#sec01_con_wrap').hover(function(){

        clearInterval(si);

    },function(){

        slide();

    });


    $('.sec02_con_wrap').each(function(index){

        $(this).attr('data-index',index)

    });



    $('.sec02_con_wrap').hover(function(){
        

        $('.sec02_con_fix',this).transition({

            rotateY : '180deg',
            opacity : 0,

        },500);

        $('.sec02_con_hover',this).transition({

            rotateY : '360deg',
            opacity : 1,

        },500);

    },function(){

        $('.sec02_con_fix',this).transition({

            rotateY : '360deg',
            opacity : 1,

        },500);

        $('.sec02_con_hover',this).transition({

            rotateY : '180deg',
            opacity : 0,

        },500);

    });


    $('#pin').click(function(){

        $('.in_con02').removeClass('checked');
        $('#pin').addClass('checked');

    });

    $('#pay').click(function(){

        $('.in_con02').removeClass('checked');
        $('#pay').addClass('checked');

    });




































});//end