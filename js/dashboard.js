$(".alert").addClass("in").fadeOut(4500);
$(".dropdown").collapse("hide");
/* swap open/close side menu icons */
$('[data-toggle=collapse]').click(function(){
    // toggle icon
    $(this).find("i").toggleClass("glyphicon-menu-right glyphicon-menu-down");
});



