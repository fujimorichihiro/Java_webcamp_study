$(function() {
 
  $('#back a').on('click',function(){ //id(back)内のaタグに
    $('body, html').animate({ //bodyもしくはhtml
      scrollTop:0 //スクロール位置を指定、0だと最上部
    }, 800);
      return false;
  });
 
});