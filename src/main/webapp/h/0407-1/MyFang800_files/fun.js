$(function(){
    $(".select_showbox").toggle(function(){
        $(this).next().show();
    }, function(){
        $(this).next().hide();
    })
    $(".select_option li").click(function(){
        $(this).parent().hide();
        var thisLi = $(this).text();
        $(this).parent().siblings(".select_showbox").html(thisLi);
    })

    var windowH = window.innerHeight;
    var totalH = $('body').height;
    if(totalH < windowH) {
        $('body').height(windowH);
    }

    //全选
    $(".sourceBottom input").click(function () {
        if ($(this).prop("checked") == false) {
            $(".sourceList li").each(function () {
                $(this).children("input").prop("checked", false);
            })
        } else {
            $(".sourceList li").each(function () {
                $(this).children("input").prop("checked", true);
            })
        }
    });
    $(".amBottom input").click(function () {
        if ($(this).prop("checked") == false) {
            $(".agentMessage li").each(function () {
                $(this).find("input").prop("checked", false);
            })
        } else {
            $(".agentMessage li").each(function () {
                $(this).find("input").prop("checked", true);
            })
        }
    });
    $(".fa_div input.all").click(function () {
        if ($(this).prop("checked") == false) {
            $(this).parent().find("table td").each(function () {
                $(this).find("input").prop("checked", false);
            })
        } else {
            $(this).parent().find("table td").each(function () {
                $(this).find("input").prop("checked", true);
            })
        }
    });
    $(".facility li").each(function () {
        $(this).find("label.all").attr("for", "all" + $(this).index());
        $(this).find("input.all").attr("id", "all" + $(this).index());
    });    
    
})
    