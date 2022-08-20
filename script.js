$(document).ready(function(){
    var count_group = $(".step4 .item").length;
    var active = 0;
    var begin = true;
    function Load(){
        if(begin){
            begin = false;
        }else{
            $('#item_'+(active - 2 < -1 ? count_group - 2 : active - 2 < 0 ? count_group -1 : active - 2)).removeClass('hide_item');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('item_active');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide_item');
        }

        $('#item_'+active).removeClass('hide_item');
        $('#item_'+active).addClass('item_active');

        $('.dots-page div').removeClass('active');
        $('#dot_'+active).addClass('active');
    }
    setTimeout(Load, 14010);
    $('#next').on('click', function(){
      active = active + 1 >= count_group ? 0 : active + 1;
      Load();
    })
        $('#prev').on('click', function(){
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        })
    });