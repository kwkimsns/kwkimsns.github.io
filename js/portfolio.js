$(document).ready(function(){



    // 메뉴바 섹션 이동
    $('#home').click(function(){
        $('html,body').stop().animate({
            scrollTop : 0,
        },500);
    });

    $('#portfolio').click(function(){
        $('html,body').stop().animate({
            scrollTop : 1790,
        },500);
    });

    $('#about').click(function(){
        $('html,body').stop().animate({
            scrollTop : 566,
        },500);
    });

    $('#skills').click(function(){
        $('html,body').stop().animate({
            scrollTop : 1284,
        },500);
    });

    $('#contact').click(function(){
        $('html,body').stop().animate({
            scrollTop : 2769,
        },500);
    });



    // header 고정
    $(window).scroll(function(){

        sct = $(window).scrollTop();

        // console.log(sct);

        
    
    
        // 스크롤 header 고정 이벤트
        if( sct >= 100 ){
            $('header').css({
                position : 'fixed',
                top : 0,
                left : 0,
                zIndex : 99,
                width : 1920,
                backgroundColor : 'rgba(34,35,40,1)',
                fontWeight : 100,
            });

            $('header a').css({
                color : 'white',
            });
        
            
        }else if( sct < 100 ){
            $('header').css({
                position : 'relative',
                height : 80,
                backgroundColor : 'rgba(000,000,000,0)',
                fontWeight : 900,
                width : 1629,
            });

            $('header a').css({
                color : '#222328',
            });

              
        }
        
         // footer 정보 이벤트
         if( sct > 2232 ){
            $('.f_info').animate({
                marginTop : 40,
                opacity : 1,
            },500);
        }


    

    
    

        // 화살표 스크롤 이벤트
        if( sct > 966 && sct < 1291){

            $('.icon01').animate({
                top : 90,
                opacity : 1, 
            },1000,'easeOutBounce');
        }



        // about
        if( sct > 245 && sct < 590 ){

            $('.container02 h1').animate({
                bottom : 110,
                opacity : 1,
            },1000);
        }

        // skill
        if( sct > 966 && sct < 1291){

            $('.container03 h1').animate({
                right : 26,
                opacity : 1, 
            },1000);
        }

        // web renewal
        if( sct > 1300 ){

            $('.sec04 h1').animate({
                top : 80,
                opacity : 1, 
            },1000);
        }


        // about 속 프로필 이벤트
        if( sct >= 300 && sct < 400 ){
            $('.box0203 h3').css({
                opacity : 1,
            });


            // profile
            setTimeout(function(){
                $('.pro_text01').animate({
                    top : 70,
                    opacity : 1,
                },1000);
    
            },500);
            

            setTimeout(function(){

                $('.pro_text02').animate({
                bottom : 25,
                opacity : 1,
    
                },1000);

            },1000)
            

            // experience
        }else if( sct >= 450 && sct < 550){
            $('.box0204 h3').css({
                opacity : 1,
            });


            setInterval(function(){
                $('#date').animate({
                    bottom : 52,
                    opacity : 1,
                },1000);
    
                $('#experience').animate({
                    bottom : 30,
                    opacity : 1,
        
                },1000);
            },500);
        }    


       


    });






    // 메뉴바 호버
    $('#menu li').hover(function(){

        if( sct >= 100 ){
            $('a',this).css({
                color : '#717172',
            });

        }else if( sct < 100 ){
            $('a',this).css({
                color : '#717172',
            });
        } 
        
        
    },function(){

        if( sct >= 100 ){
            $('a',this).css({
                color : 'white',
            });

        }else if( sct < 100 ){
            $('a',this).css({
                color : '#222328',
            });
    
        }
    });


    

    // 팝업 이벤트

    // 첫번쨰
    $('.view01').click(function(){

        $('.show_box01').fadeIn(500);

    });

    $('.show_box01').click(function(){

        $('.show_box01').fadeOut();
    });

    $('.concept01').click(function(){
        $('.show_box01').fadeIn(500);
    });


    // 두번째
    $('.view02').click(function(){

        $('.show_box02').fadeIn(500);

    });

    $('.show_box02').click(function(){

        $('.show_box02').fadeOut();
    });

    $('.concept02').click(function(){

        $('.show_box02').fadeIn(500);

    });




    // 세번쨰
    $('.view03').click(function(){

        $('.show_box03').fadeIn(500);

    });

    $('.show_box03').click(function(){

        $('.show_box03').fadeOut();
    });

    $('.concept03').click(function(){

        $('.show_box03').fadeIn(500);

    });


  


    // 주소복사
    var copyBtn = document.querySelector('#copy_btn');

    copyBtn.addEventListener('click', function () {

    var copy_url = jQuery('#url_field').val();

    navigator.clipboard.writeText(copy_url).then(() => { alert(`주소를 복사하였습니다!`); return false; });

    }, false);

    

































});//end