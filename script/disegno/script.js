function drawStar() {
    let c = document.getElementById("foglio");
    var w = c.width;
    var h = c.height;
    let ctx = c.getContext("2d");
    ctx.strokeStyle = "#0bf7ff";
    ctx.lineWidth = 5;
    ctx.moveTo(h/2, w/4*.8);
    ctx.lineTo(h/10*7, w/10*7);
    ctx.lineTo(h/10*2.5, w/10*4);
    ctx.lineTo(h/10*7.5, w/10*4);
    ctx.lineTo(h/10*3, w/10*7);
    ctx.lineTo(h/2, w/4*.8);
    ctx.stroke();
}

function drawCircle() {
    let c = document.getElementById("foglio2");
    var w = c.width;
    var h = c.height;
    let ctx = c.getContext("2d");
    ctx.strokeStyle = "#0bf7ff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(w/2, h/2, 100, 0, 2 * Math.PI);
    ctx.stroke();
}

function cancella() {
    let c = document.getElementById("foglio");
    var w = c.width;
    var h = c.height;
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, w, h);
}
