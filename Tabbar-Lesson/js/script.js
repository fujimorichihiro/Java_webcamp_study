$('#tab-contents .tab[id != "tab1"]').hide();
 
$('#tab-menu a').on('click', function() {
  $("#tab-contents .tab").hide(); //隠す
  $("#tab-menu .active").removeClass("active"); //activeclaassを取り消す
  $(this).addClass("active"); //cliskされたthisにactiveclassと追加する
  $($(this).attr("href")).show(); //
  return false;
});