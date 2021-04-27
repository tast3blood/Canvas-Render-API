var view = document.getElementById('view');
var ctx = view.getContext('2d');



ctx.beginPath();
ctx.arc(90, 90, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

