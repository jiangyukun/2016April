var houseSource = {
    getAreaType: function (obj) {
        var TypeID = $(obj).val();
        var BindNextControlID = "";
        var BindCitiesID = "";
        if ($(obj).attr("ID") == "Country_Param") {
            BindNextControlID = "Province_Param";
            BindCitiesID = "City_Param";

            $("#Province_Param").html("<option value=\"\">-- 州/省 --</option>");
            $("#City_Param").html("<option value=\"\">-- 城市 --</option>");
        }
        else if ($(obj).attr("ID") == "Province_Param") {
            BindNextControlID = "City_Param";

            $("#City_Param").html("<option value=\"\">-- 城市 --</option>");
        }
        else if ($(obj).attr("ID") == "City_Param") {
            BindNextControlID = "";
        }

        $.post("/ashx/GetAreaType.ashx", { "id": TypeID }, function (data) {
            if (data != null && data != "") {
                if (data.status == 0) {
                    //$("#" + BindNextControlID).html("<option value=\"\">请选择</option>");
                    for (var i = 0; i < data.results.length; i++) {
                        $("#" + BindNextControlID).append("<option value=\"" + data.results[i].id + "\">" + data.results[i].name + "</option>");
                    }
                }
            }
        }, "json");

        $.post("/ashx/GetCitiesHandler.ashx", { "id": TypeID }, function (data) {
            if (data != null && data != "") {
                if (data.status == 0) {
                    for (var i = 0; i < data.results.length; i++) {
                        $("#" + BindCitiesID).append("<option value=\"" + data.results[i].id + "\">" + data.results[i].name + "</option>");
                    }
                }
            }
        }, "json");

        //if (TypeID == 1) {
        //    $("#hotCity").val = "热点城市： <a href='index.aspx?Country=1&Province=&City=71' >洛杉矶</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='index.aspx?Country=1&Province=&City=84' >波士顿</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='index.aspx?Country=1&Province=&City=85' >芝加哥</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='index.aspx?Country=1&Province=&City=97' >亚特兰大</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='index.aspx?Country=1&Province=&City=301' >纽约</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href='index.aspx?Country=1&Province=&City=69' >尔湾</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        //}
    }
}