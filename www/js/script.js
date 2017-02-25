$(document).ready(function(){






/*Range*/
if ($("#range_start").attr("id")) {
var $range = $("#example_id"),
    $input_from = $("#range_start"),
    $input_to = $("#range_end"),
    instance,
    min = 0,
    max = 30000;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 12590,
    to: 26590,
    onStart: function (data) {
        $input_from.prop("value", data.from);
        $input_to.prop("value", data.to);
    },
    onChange: function (data) {
        $input_from.prop("value", data.from);
        $input_to.prop("value", data.to);
    }
});

instance = $range.data("ionRangeSlider");

$input_from.on("change keyup", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    } else if (isNaN(val)){
        val = min;
    }
        
    instance.update({
        from: val
    });
});

$input_to.on("change keyup", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    } else if (isNaN(val)){
        val = min;
    }
    
    instance.update({
        to: val
    });
});
}





/*button show more*/
$(".show-more button").click(function(){
    $(this).hide();
    $(".cat-content .load-wrap").addClass("visible");
});




/*disable select input*/
$('#select-beast-selectized').prop('disabled', true);




// Plus/Minus

$('.count-minus').click(function(e) {
   e.preventDefault();
   $( this ).next().val(function(i, oldval) {
      if (oldval > 1)
         return --oldval;
         return 1;
   });
});

$('.count-plus').click(function(e) {
   e.preventDefault();
   $( this ).prev().val(function(i, oldval) {
      if (oldval < 999)
         return ++oldval;
      return 999;
   });
});
/*del*/
$('.order-item .del').click(function(e) {
   e.preventDefault();
   var hidden = $( this ).parent().parent();
   hidden.hide('slow', function(){
        hidden.detach();
   });
});

var orderHeight = $(".order-left").height();
$(".order-right").css("min-height", orderHeight + "px");




function splitTo( arr, n) {
  var plen = n;

  return arr.reduce( function( p, c, i, a) {
    if(i%plen === 0) p.push([]);
    p[p.length-1][i] = c;
    return p;
  }, []);
}
function eqHeight(colsInRow){
  var cols = $(".catalog .cat-products .prod-description");
  var colsArr = [];
  var colHeight = [];
  cols.each(function(){
    $(this).css("height", "auto");
    colsArr.push($(this));
    colHeight.push($(this).height());
  })
  var result = splitTo( colsArr, colsInRow);
  var heightArr = splitTo(colHeight, colsInRow);

  var compactArray = [];
  var compactHeight = [];
  for (var i = 0; i < result.length; i++) {
    compactArray = result[i].filter(function (item) {
      return item !== undefined;
    });
    compactHeight = heightArr[i].filter(function (item) {
      return item !== undefined;
    });
    for (var j = 0; j < compactArray.length; j++) {
      compactArray[j].height(Math.max.apply(null, compactHeight));
    }
  }
};

/*DROPDOWN MENU*/



$(".head-3 li a").click(function(e){
  e.preventDefault();
  $('.head-3 .navbar-toggle').click();
  var text = $(this).clone().children().remove().end().text();
  $(".head-3-current").text(text);
  var number = $(this).attr("data-target");
  $(".h3-dropdown-menu").slideDown();
  var collapse = $(".h3-dropdown-menu .menu-wrap[data-dest=" + number + "]");
   $(".h3-dropdown-menu .menu-wrap").hide().css("opacity", 0);
  collapse.show().css("opacity", 1);
});



$(window).resize(function(){
  if (window.matchMedia('(max-width: 1200px) and (min-width: 768px)').matches){
    eqHeight(3);
  }
  if (window.matchMedia('(min-width: 1200px)').matches){
    eqHeight(4);
  }
  if (window.matchMedia('(max-width: 768px)').matches){
    eqHeight(1);
    $(".menu-half .collapse.in, .filter-wrap .collapse.in").removeClass("in");
  }
  if (window.matchMedia('(min-width: 768px)').matches){
     $(".menu-half .collapse, .filter-wrap.collapse").addClass("in");   
  }
});



if (window.matchMedia('(max-width: 1200px) and (min-width: 768px)').matches){
  eqHeight(3);
}
if (window.matchMedia('(min-width: 1200px)').matches){
  eqHeight(4);
}
if (window.matchMedia('(max-width: 768px)').matches){
  eqHeight(1);

  $(".menu-half .collapse.in, .filter-wrap.collapse.in").removeClass("in");
}

if (window.matchMedia('(min-width: 768px)').matches){

  var fade;
  $(".head-3 .container").mouseenter(function(){
    $(".h3-dropdown-menu").slideDown(150);
    }).mouseleave(function(e){
      $(".h3-dropdown-menu").slideUp(150);
    });
  $(".head-3 .collapse li a").hover(function(){
    var number = $(this).attr("data-target");
    fade = $(".h3-dropdown-menu .menu-wrap[data-dest=" + number + "]");
    fade.show();
    $(".h3-dropdown-menu .menu-wrap").not(fade).hide();
    var a = $(".h3-dropdown-menu .menu-wrap").hover(function(){
      // $(".h3-dropdown-menu").addClass("visible");
      fade.addClass("visible");
      fade.css("opacity", "1");
    }, function(){
      // $(".h3-dropdown-menu").removeClass("visible");
      fade.removeClass("visible");
    })
    fade.fadeTo("fast", 1);
    }, function(){
      $(".h3-dropdown-menu .menu-wrap").hide();
      fade.css("opacity", "0");
    });


    $(".menu-half .collapse, .filter-wrap.collapse").addClass("in");

}
});





