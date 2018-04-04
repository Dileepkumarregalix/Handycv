

// left nav right arrow
$(function(){
    $(".nav-pills .collapse").on("hide.bs.collapse", function() {                   
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $('.nav-pills .collapse').on("show.bs.collapse", function() {                        
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");        
    });
})    

// responsive menu
$("#h-btn").on("click",function(){
	$("body").addClass("r-trans");
	$("body").append('<div class="r-layer"></div>');
});
$("#r-close").on("click",function(){
	$("body").removeClass("r-trans");
	$(".r-layer","body").remove();
});


