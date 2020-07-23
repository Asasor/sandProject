var canvas = document.getElementById('mainCanvas'),
    context = canvas.getContext('2d');

function drawParticle(ctx, x, y, radius) {
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillstyle = "blue";
    ctx.fill();
}