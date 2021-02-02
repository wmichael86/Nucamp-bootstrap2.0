//Reserve button jquery code

$(function () {

    // Adding a Button click event listener 
   $("#reserveButton").click(function(){
        // showing Modal
        $("#reserveModal").modal("show");
   });
});


// Login Modal Jquery code

$(function () {

    // Adding a Button click event listener 
   $("#loginButton").click(function(){
        // showing Modal
        $("#loginModal").modal("show");
   });
});
    
    
    
    
    
    $(function() {
        $(".carousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause"); 
            }
        });
    });