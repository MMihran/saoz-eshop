/*DROPDOWN MENU*/
$(".head-3 .container").mouseenter(function(){
	$(".h3-dropdown-menu").slideDown(150);
}).mouseleave(function(e){
	$(".h3-dropdown-menu").slideUp(150);
});
var fade;
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
$(".head-3 li a").click(function(e){
	e.preventDefault();
});




/*Range*/
if ($("#range_start").attr("id")) {
console.log($("#range_start"));
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