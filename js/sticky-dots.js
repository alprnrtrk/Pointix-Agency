const elementsArray = [];
const proximityThreshold = 75;
const screenYMiddle = $(window).height() / 2;


$(document).ready(function () {

    $('.dot').each(function () {
        $(this).find("*").css("background-color", $(this).attr('data-color'));
    });

    $('.dot').each(function () {
        $(this).find("a").attr("onmouseover", "this.style.color='"+ $(this).attr("data-color") +"'");
        $(this).find("a").attr("onmouseout", "this.style.color=''");
        var elementId = $(this).attr('id');
        var elementOffset = $(this).offset().top;
        var elementData = {
            id: elementId,
            offsetTop: elementOffset
        };

        elementsArray.push(elementData);
    });
})


$(window).scroll(function () {


    var windowHeight = $(window).height();
    var middleOfScreen = windowHeight;

    var elementOffset = $('.sticky-dots').offset();
    var elementHeight = $('.sticky-dots').outerHeight();
    var elementMiddle = elementOffset.top + (elementHeight / 2);

    var status = false;

    if (elementMiddle <= (middleOfScreen + $(window).scrollTop()) && elementMiddle >= $(window).scrollTop()) {


        elementsArray.forEach(function (element, index) {
            let elementOffset = element.offsetTop;
            let middleYdistanse = $(window).height() / 2 + $(document).scrollTop();


            let distance = Math.abs(middleYdistanse - elementOffset);
            if (distance <= proximityThreshold) {
                
                if(element.id == elementsArray[0].id || element.id == elementsArray[elementsArray.length - 1].id){
                    status = true;
                }
                else{
                    $('.page-tracker').offset({ top: ($(window).height() / 2) + $(window).scrollTop()});
                    $('.page-tracker').offset({ left: $(".dot").find("a").offset().left - 30 });
                }

                $(".dot").not("#" + element.id).removeClass("active");
                $("#" + element.id).addClass("active");
                $(".dot").not("#" + element.id).find("a").css("color","");
                $("#" + element.id).find("a").css("color",""+$("#" + element.id).attr("data-color")+"");

                let testBox = document.querySelector(".dot *");
                pseudoBeforeHeight = parseInt(window.getComputedStyle(testBox, ':after').height);


                // $('.page-tracker').offset({ top: $("#" + element.id).offset().top - (($(".page-tracker").height() / 2) - pseudoBeforeHeight / 2)});
                $('.page-tracker').offset({ top: $("#" + element.id).offset().top - 9});
            }
        })
    }
});

$('.dot').on("mouseover", function(){
    $(".dot").removeClass("active");
    $(".dot").find("a").css("color","");
    $(this).find("a").css("color", $(this).attr("data-color"));
    $('.page-tracker').offset({ top: $(this).offset().top - 9});
}) 