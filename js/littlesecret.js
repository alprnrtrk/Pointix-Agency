keyboardJS.bind('a + e > space', (e) => {
    e.preventRepeat();
    $("body > *").remove();
    $("body").css({"display": "flex", "align-items":"center", "justify-content":"center"});
    $("body").append('<a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn btn--gradient btn--small"> What Happend ?!? </a>');
});