$(function() {
    const info_box = $('#info-box');
    const info_side = $('#info-side');
    $("path, circle").hover(function(e) {
        info_box.css('display','block');
        const show_data = $(this).data('info');
        info_box.html(show_data);
        //info_side.html(show_data);
    }
);
    
    $("path, circle").mouseleave(function(e) {
        info_box.css('display','none');
    });

    $("path, circle").mousedown(function(e) {
        const show_data = $(this).data('info');
        info_side.html(show_data);
    });

    
    $(document).mousemove(function(e) {
        info_box.css('top',e.pageY-info_box.height()-30);
        info_box.css('left',e.pageX-(info_box.width())/2);
    }).mouseover();




});


