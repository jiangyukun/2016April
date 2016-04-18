//本息还款的月还款额(参数: 年利率/贷款总额/贷款总月份)
function getMonthMoney(lilv, total, month) {
    var lilv_month = lilv / 12;//月利率
    return total * lilv_month * Math.pow(1 + lilv_month, month) / (Math.pow(1 + lilv_month, month) - 1);
}
//计算投资回报率
function getROI(total, rent) {
    return 100 * (rent * 12) / total;        // 计算购入再出租的投资回报率=月租金×12(个月)/售价
}

//购房能力评估
function getAbility(cash, mIn, mOut, months) {
    var pm = mIn - mOut;
    var monthRate = 4.9 / 100 / 12;////固定值月利率=年利率/12，当前利率标准
    var r = 1 + monthRate;
    var a = pm * (Math.pow(r, months) - 1);
    var b = monthRate * Math.pow(r, months);
    var loan = a / b;
    return loan;
}

function btnROI_onClick() {
    var total = document.getElementById("t_Total").value;
    total = total * 10000;//单位与万元转换成元
    var rent = document.getElementById("t_Rent").value;
    document.getElementById("t_ROI").value = getROI(total, rent);
}

function btnDaiKuan_onClick() {
    var price = document.getElementById("d_price").value;//这个没有用

    var loan = document.getElementById("d_loan").value * 10000;
    var months = document.getElementById("d_months").value;
    var rate = document.getElementById("d_rate").value / 100;
    var pm = getMonthMoney(rate, loan, months);

    document.getElementById("d_pm").value = FormatNum(pm);
    document.getElementById("d_total").value = FormatNum(pm * months / 10000);
    document.getElementById("d_intests").value = FormatNum(pm * months - loan);
}

function getSelectValue(selID) {
    var myselect = document.getElementById(selID);
    var index = myselect.selectedIndex;             // selectedIndex代表的是你所选中项的index
    return myselect.options[index].value;
}

function btnAblity_onClick() {
    var cash = document.getElementById("g_cash").value;

    var mIn = document.getElementById("g_mIn").value;
    var mOut = document.getElementById("g_mOut").value;

    var months = getSelectValue("g_months");

    var area = document.getElementById("g_area").value;
    var loan = getAbility(cash, mIn, mOut, months);

    var total = Number(loan) + Number(cash);

    document.getElementById("g_total").value = FormatNum(total / 10000);
    document.getElementById("g_price").value = FormatNum(total / area);
}

function FormatNum(num) {
    return num.toFixed(2);
}