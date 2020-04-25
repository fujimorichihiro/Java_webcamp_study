$(function(){
    $('button').on('click', function(){  //botton要素がクリックされたとき処理を実行
        $('ul').children().css('color','red'); //ul要素の子要素
    });
});// box1の中でクリックされた要素がスライドする。