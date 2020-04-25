$(function() {
 
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');//class属性の追加と削除
    $('#sp-menu').fadeToggle();//fadeinとfadeoutを交互に行う
    return false;
  });
 
 });