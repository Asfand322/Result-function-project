function submit() {
    var a = +(document.getElementById('r1').value);
    var b = +(document.getElementById('r2').value);
    var c = +(document.getElementById('r3').value);
    var d = +(document.getElementById('r4').value);
    var e = +(document.getElementById('r5').value);
    res = a + b + c + d + e
    perc = res / 500 * 100
    document.getElementById('p1').innerHTML = "Total Marks:" + res;
    document.getElementById('p2').innerHTML = "Percentage:" + perc;
    if (perc>90) {
        document.getElementById('p3').innerHTML = " Congratulations You got A grade"
    }
    else if (perc>80) {
        document.getElementById('p3').innerHTML = "you got B grade"
    }
    else if (perc>70) {
        document.getElementById('p3').innerHTML = "you got B+ grade"
    }
    else if (perc>60) {
        document.getElementById('p3').innerHTML = "you got C grade, need some improvement"
    }
    else {
        document.getElementById('p3').innerHTML = " Sorry you are fail"
}
}