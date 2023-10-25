  $zeroButton = $(".zero"),
  $firstButton = $(".first"),
  $secondButton = $(".second"),
  $thirdButton = $(".third"),
  $fourthButton = $(".fourth"),
  $fifthButton = $(".fifth"),
  $sixthButton = $(".sixth"),
  $seventhButton = $(".seventh"),
  $eighthButton = $(".eighth"),
  $ninthButton = $(".ninth"),
  $input = $("input"),
  $name = $(".name"),
  $more = $(".more"),
  $yourname = $(".yourname"),
  $reset = $(".reset"),
  $ctr = $(".container");

$zeroButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("one slider-one-active").removeClass("slider-zero-active");
  });
  e.preventDefault();
});

$firstButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("two slider-two-active").removeClass("slider-one-active");
  });
  e.preventDefault();
});

$secondButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("three slider-three-active").removeClass("slider-two-active");
  });
  e.preventDefault();
});

$thirdButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("four slider-four-active").removeClass("slider-three-active");
  });
  e.preventDefault();
});

$fourthButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("five slider-five-active").removeClass("slider-four-active");
  });
  e.preventDefault();
});

$fifthButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("six slider-six-active").removeClass("slider-five-active");
  });
  e.preventDefault();
});

$sixthButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("seven slider-seven-active").removeClass("slider-six-active");
  });
  e.preventDefault();
});

$seventhButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("eight slider-eight-active").removeClass("slider-seven-active");
  });
  e.preventDefault();
});

$eighthButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("nine slider-nine-active").removeClass("slider-eight-active");
  });
  e.preventDefault();
});

$ninthButton.on("click", function(e){
  $(this).text("Сохранение...").delay(900).queue(function(){
    $ctr.addClass("full slider-full-active").removeClass("slider-nine-active");
  });
  e.preventDefault();
});

$("label").on("click", function(){
  $(this).children("input").prop("checked", "true");
  $("label").css("transform", "scale(1.0)");
  $(this).css("transform", "scale(1.2)");
});

$(document).mousemove(function(e){
  $(".bg").css("transform", "translate(" + e.pageX * 0.1 + "px, " + e.pageY * 0.1 + "px)");
});