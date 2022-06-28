function leapYear(year) {
    if (year%400===0 || year%100===0 || year%4===0){
        return true;
    } else {
        return false;
    }
}
alert(leapYear(2022));