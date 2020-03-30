



//scroll fadeIn-------------------------------------
$(function (){
    console.log($(window).scrollTop());
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 900 && $(window).scrollTop() < 4500){
           
            $('#page_top').css('opacity', '1');
            $('#page_top').css('margin-top', '50px');
        }else{
            
            $('#page_top').css('opacity', '0');
            $('#page_top').css('margin-top', '0px');
        }
    });
});
//--------------------------------------------------


//ページ内でスクロール移動処理
$(function(){
   // #で始まるリンクをクリックしたら実行されます
   $('a[href^="#"]').click(function() {
   // スクロールの速度
   var speed = 400; // ミリ秒で記述
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({scrollTop:position}, speed, 'swing');
   return false;
   });
});


//パララックス効果
$(function() {
    //スクロールの位置を初期化
    // $('html,body').animate({ scrollTop: 0 }, '1');
    

    // var top = $('#item1').offset().top; //y座標の初期値を取得
    var top = $('#item2').offset().top; //y座標の初期値を取得
    // var top3 = $('#item3').offset().top; //y座標の初期値を取得
    // var top4 = $('#item4').offset().top; //y座標の初期値を取得
        $(window).scroll(function() {
        var value = $(this).scrollTop();  //スクロール値を取得
        // $('#scrollValue').text(value);

        // 取得したスクロール値を矩形のY座標値に指定
        // スクロール値を除算して移動距離に変化をつける
        // $('#item1').css('top', top + value / 2);
        $('#item2').css('top', top - value / 2);
        // $('#item3').css('top', top3 - value / 2);
        // $('#item4').css('top', top4 - value / 2);
    });
});



var num_cont_about = 'true'

//about　スクロールの効果
$(function (){
    console.log($(window).scrollTop());
    
    $('#item1 h1').animate({
        opacity: 1,
        top: 350
    }, 1000,'swing');

   
    $('#item2 .about_name p').animate({
        opacity: 1,
    }, 1000,'swing');

    $(window).scroll(function(){
        var value = $(this).scrollTop();  //スクロール値を取得
        //スクロール450px以上で表示 


        
        //index フェードイン
        if(value > 600){
            $('#about .about_text h1').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('#about .about_text h2').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('#about .about_text p').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('#about .about_img img').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');

            $('.menu_list').css('background-color','rgba(255, 255, 255,0.8)' );
        }

        if(value > 1200){
            $('.cafe_img img').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.cafe_text h1').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.cafe_text h2').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.cafe_text p').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.cafe_text h3 a').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
        }


        if(value > 2000){
            $('.drink_text h1').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.drink_text h2').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.drink_text p').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.drink_text h3 a').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.drink_img').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
        }

        if(value > 2700){
            $('#access_title h1').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('#access p').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            $('.access_map').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
            
        }





        //about

        if(value > 700 && num_cont_about){
            $('#item1 h1').animate({
                top: 450,
                opacity: 0
            }, 500,'swing');
            num_cont_about = false;
        }

        if(value < 700 && !num_cont_about){
            $('#item1 h1').animate({
                top: 350,
                opacity: 1
            }, 500,'swing');
            num_cont_about = true;
        }
        
        $('#scrollValue').text(value);



        //スクロールで文字を徐々に消す
        // $('#item2 .about_name p').css('opacity', 1 - value / 500);
        // $('.top_img').css('opacity', 1 - value / 500);
        // $('.top_img').css('top', 0 - value / 5);
        // $('.coffee_1').css('top', 1000 - value / 2);
        // $('.coffee_2').css('top', 1000 - value / 4);
        // $('.coffee_3').css('top', 1000 - value / 6);
    });
});





$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});