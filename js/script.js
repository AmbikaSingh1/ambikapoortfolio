$(document).ready(function(){
    $(".mobile-nav-toggle1").toggle();
    $(".mobile-nav-toggle").click(function(){
        $(".nav").toggle();
        $(".nav").css("width","50%");
        $(".mobile-nav-toggle").toggle();
        $(".mobile-nav-toggle1").toggle();
        
    });
    $(".mobile-nav-toggle1").click(function(){
        $(".nav").toggle();
        $(".nav").css("width","50%");
        $(".mobile-nav-toggle1").toggle();
        $(".mobile-nav-toggle").toggle();
    });

});
/*$(document).ready(function(){
    $(".text h3").slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000) .slideUp(2000)
    .slideDown(2000);
});*/
 function myfunction(){
    $(".text h3").slideUp(2000)
    .slideDown(2000) ;
} 
setInterval(myfunction,4000);


