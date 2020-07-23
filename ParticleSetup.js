var canvas = document.getElementById('mainCanvas'),
    context = canvas.getContext('2d');

// set up all constants
var screenWidth = canvas.clientWidth;
var screenHeight = canvas.clientHeight;

drawParticle(context, Math.random() * screenWidth, Math.random() * screenHeight, 5); // testing

function drawParticle(ctx, x, y, radius, color = "blue") {
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}