$(function () {
    $('.js-hamburger-menu').on('click', function () {
      $('.nav_list').slideToggle(500)
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });


//#nav_list_serviceをクリックすると、#service_topまでスクロールする。
$(function(){
    let intro_height= $("#intro_top").offset().top;
    let service_height= $("#service_top").offset().top;
    let contact_height= $("#contact_top").offset().top;

    $(".nav_list_intro").click(function(){
        $("html,body").animate({scrollTop: intro_height},600); //scroll変数の位置（高さ）までスクロールする。speed=600
    });

    $(".nav_list_service").click(function(){
        $("html,body").animate({scrollTop: service_height},600); //scroll変数の位置（高さ）までスクロールする。speed=600
    });

    $(".nav_list_contact").click(function(){
        $("html,body").animate({scrollTop: contact_height},600); //scroll変数の位置（高さ）までスクロールする。speed=600
    });
});

$('#nav_list_intro').click(function() {
    var targetOffset = $('#intro_top').offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000); // スクロールする時間（ミリ秒）
});

$(function(){
    $(".service_list").click(function(){
        let id = $(this).attr("id");                    //クリックした要素のidを取得する

        //背景色を変更する。他のリストをクリックされたら戻す。
        $(".service_list").removeClass("active");       //.service_listをクリックされたらactiveクラスを削除する
        $(this).addClass("active");                     //.クリックした要素にactiveクラスを付与する
        
        //サービスリストボタンがクリックされたら、下のボックスにテキストを表示する
        $(".service_text").removeClass("active");       //.service_listをクリックされたらactiveクラスを削除する
        $("#"+id+"_text").addClass("active");           //.クリックした要素にactiveクラスを付与する
    });
});

//ロード後自動的ににweb制作ボタンをクリックする
$(function(){
    function clickweb() {
        $("#web").click(); // 関数内でクリックする
    }
    clickweb(); // ロード後すぐに関数を呼び出す
});

$(function(){
    let cities = {
        hokkaido: ["札幌市","函館市","小樽市","旭川市","室蘭市","釧路市","帯広市","北見市","夕張市","岩見沢市","網走市","留萌市","苫小牧市","稚内市","美唄市","芦別市","江別市","赤平市","紋別市","士別市","名寄市","三笠市","根室市","千歳市","滝川市","砂川市","歌志内市","深川市","富良野市","登別市","恵庭市","伊達市","北広島市","石狩市","北斗市"],
        aomori: ["青森市","弘前市","八戸市","黒石市","五所川原市","十和田市","三沢市","むつ市","つがる市","平川市"],
        iwate: ["盛岡市","宮古市","大船渡市","花巻市","北上市","久慈市","遠野市","一関市","陸前高田市","釜石市","二戸市","八幡平市","奥州市","滝沢市"]
    };

    $("#prefecture").change(function(){
        let select_prefecture = $(this).val();

        $("#city").empty().append('<option value="">---</option>');

        if(select_prefecture && cities[select_prefecture]){
            $.each(cities[select_prefecture], function(index,city){
                $("#city").append("<option value=" + city + ">" + city + "</option>");
            });

            let defaultCity = cities[select_prefecture][0];
            $("#city").val(defaultCity);
        }
    });
});