
$('.pc-banner').bgSwitcher({
    images: ['img/banner01.jpg','img/banner02.jpg'], // 切替背景画像を指定
  interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 1000, // エフェクトの時間を指定します。
    easing: "swing" // エフェクトのイージングをlinear,swingから指定
});

$('.sp-banner').bgSwitcher({
    images: ['img/banner01-s.jpg','img/banner02-s.jpg'], // 切替背景画像を指定
  interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 1000, // エフェクトの時間を指定します。
    easing: "swing" // エフェクトのイージングをlinear,swingから指定
});

// beijingtu guding 
    var gdh1 = $(document).scrollTop();
    var gdh2 = $(document).height() - $(window).height();
    var bannerdiv3 = $('.banner > div:eq(2)');
    
    if(gdh1 > 0 && gdh1 < gdh2) {
        bannerdiv3.addClass("spb1");
    } else {
        bannerdiv3.removeClass("spb1");
    }

$(window).scroll(function(){

    gdh1 = $(document).scrollTop();
    gdh2 = $(document).height() - $(window).height();

    if(gdh1 > 0 && gdh1 < gdh2) {
        bannerdiv3.addClass("spb1");
    } else {
        bannerdiv3.removeClass("spb1");
    }
});