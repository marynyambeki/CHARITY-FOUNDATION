$(document).ready(function(){
    $('#tab0').click(function (event) {
        event.preventDefault();
        $(".para1").toggle();
    });
    $('#tab1').click(function (event) {
        event.preventDefault();
        $(".para2").toggle();
        $(".para1").hide();
    });
    $('#tab2').click(function (event) {
        event.preventDefault();
        $(".para3").toggle();
        $(".para2").hide();
    });
    $('#tab3').click(function (event) {
        event.preventDefault();
        $(".para4").toggle();
        $(".para3").hide();

    });
    $('#tab4').click(function (event) {
        event.preventDefault();
        $(".para5").toggle();
        $(".para4").hide();
    });
    $('#tab5').click(function (event) {
        event.preventDefault();
        $(".para6").toggle();
        $(".para5").hide();
    });
    
});

