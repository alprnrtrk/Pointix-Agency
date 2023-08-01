$("[data-role]").on("click", function () {
    let dataRole = $(this).attr("data-role");

    if (dataRole == "toggler") {
        let dataTarget = $(this).attr("data-target");

        $(this).toggleClass("active");
        $(dataTarget).toggleClass("active");
    }
})

$(window).scroll(function () {
    if ($(".navbar").offset().top != 0) {
        $(".navbar").addClass("active");
    }
    else {
        $(".navbar").removeClass("active");
    }
})

$(".navbar-collapse").on('mousewheel', function(event) {

  });

$(document).ready(function () {
    $(".navbar-collapse").css("padding-top", $(".navbar").outerHeight() + 20);

    $(".navbar-collapse  .navbar-collapse__each .dotted li").each(function(){
        $(this).find("a").attr("onmouseover", "this.style.color='"+ $(this).attr("data-color") +"'");
        $(this).find("a").attr("onmouseout", "this.style.color=''");

        $(this).find("a").before("<span style=background-color:"+ $(this).attr("data-color") +";></span>");
    })
})