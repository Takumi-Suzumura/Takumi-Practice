//iの初期値
var i = 1; 

//数字を表示したい
function number_write() {
    document.getElementById('number').textContent = i;
}

//fizzボタンの処理
function fizz() {
    if (i % 3 === 0 && !(i % 15 === 0)) {
        i = ++i;
        document.getElementById('number').textContent = i; 
    } else {
        document.getElementById('number').textContent = "ざんねん！ きみ の たたかい は ここで おわってしまった。";
        i = 1;
    }
}

//Buzzボタンの処理
function buzz() {
    if (i % 5 === 0 && !(i % 15 === 0) && !(i === 100)) {
        i = ++i;
        document.getElementById('number').textContent = i; 
    } else if (i === 100){     
        document.getElementById('number').textContent = "おめでとうなの！ きみ の かちだにゃ。くやしーの。ぐすん(´；ω；｀)";
        i = 1;
    } else {
        document.getElementById('number').textContent = "ざんねん！ きみ の たたかい は ここで おわってしまった。";
        i = 1;
    }
}

//fizzbuzzボタンの処理
function fizzbuzz() {
    if (i % 3 === 0 && i % 5 === 0) {
        i = ++i;
        document.getElementById('number').textContent = i; 
    } else {
        document.getElementById('number').textContent = "ざんねん！ きみ の たたかい は ここで おわってしまった。";
        i = 1;
    }
}

//numberボタンの処理
function number() {
    if (i % 3 === 0) {
        document.getElementById('number').textContent = "ざんねん！ きみ の たたかい は ここで おわってしまった。";
        i = 1;
    } else if (i % 5 === 0) {
        document.getElementById('number').textContent = "ざんねん！ きみ の たたかい は ここで おわってしまった。";
        i = 1;
    } else if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById('number').textContent = "ざんねん！ きみ の たたかい は ここで おわってしまった。";
        i = 1;
    } else {
        i = ++i;
        document.getElementById('number').textContent = i; 
    }
}



    
   

    






