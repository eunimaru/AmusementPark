$(function() {
  $("button").click(function(event){
  var heightInput=parseInt($("input#height").val());
  console.log (heightInput);
$(".clearcl").hide();
  if (heightInput>=60){
    $(".ridesover").show();
  }
    else {
      $(".ridesunder").show();
    }
    event.preventDefault();
  });
});
