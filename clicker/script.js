let score = 0;
let runsub = false;
let runmin = false;
let runfam = false;
let rungold = false;
let subway = document.getElementById("subway");
let subbutton = document.getElementById("subbutton");
let runned = false;
let clicking = 1;

function add2() {
    score += 2
    document.getElementById('display').innerHTML = "Score: " + score;
}

function add20() {
    score += 20
    document.getElementById('display').innerHTML = "Score: " + score;
}

function add50() {
    score += 50
    document.getElementById('display').innerHTML = "Score: " + score;
}

function checkscore() {
    if (score > 9 && !runsub) {
        subbutton.style.display = "block";
        document.getElementById("subbutton").disabled = false;
    }

    if (score < 9) {
        document.getElementById("subbutton").disabled = true;
    }

    if (score > 199 && !runmin) {
        jumpbtn.style.display = "block";
        document.getElementById("jumpbtn").disabled = false;
    }

    if (score < 199) {
        document.getElementById("jumpbtn").disabled = true;
    }

    if (score > 799 && !runfam) {
        familyguybtn.style.display = "block";
        document.getElementById("familyguybtn").disabled = false;
    }

    if (score < 799) {
        document.getElementById("familyguybtn").disabled = true;
    }

    if (score > 999 && !rungold) {
        betterbtn.style.display = "block";
        document.getElementById("betterbtn").disabled = false;
    }

    if (score < 999) {
        document.getElementById("betterbtn").disabled = true;
    }

}


function clicked() {
    score += clicking;
    document.getElementById('display').innerHTML = "Score: " + score;
}

function admin() {
    let input = document.getElementById('admininput').value;
    let valuehacker = parseInt(document.getElementById('valuehacker').value);

    if (input === "freeadmin") {
        score += valuehacker;
        document.getElementById('display').innerHTML = "Score: " + score;
    }
}


setInterval(checkscore, 100);

function sub() {
    if (!runsub) {
        setInterval(add2, 1000);
        subway.style.visibility = "visible";
        subway.load();  // Falls das Video nicht startet
        subway.play();
        score -= 10;
        document.getElementById('display').innerHTML = "Score: " + score;
        document.getElementById("subway").muted = false;
        document.getElementById("subbutton").disabled = true;
        runsub = true
    }
}

function min() {
    if (!runmin) {
        setInterval(add20, 1000);
        jumpnrun.style.visibility = "visible";
        jumpnrun.load();  // Falls das Video nicht startet
        jumpnrun.play();
        score -= 200;
        document.getElementById('display').innerHTML = "Score: " + score;
        document.getElementById("jumpbtn").disabled = true;
        document.getElementById("jumpnrun").muted = false;
        runmin = true
    }
}

function fam() {
    if (!runfam) {
        setInterval(add50, 1000);
        familyguy.style.visibility = "visible";
        familyguy.load();  // Falls das Video nicht startet
        familyguy.play();
        score -= 800;
        document.getElementById('display').innerHTML = "Score: " + score;
        document.getElementById("familyguybtn").disabled = true;
        document.getElementById("subway").muted = true;
        document.getElementById("familyguy").muted = false;
        runfam = true
    }
}

function goldbtn() {
    score -= 1000
    clicking = 5
    document.getElementById("betterbtn").disabled = true;
    document.getElementById('display').innerHTML = "Score: " + score;
    rungold = true
}