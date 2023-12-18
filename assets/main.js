const myCavans = document.getElementById('myCanvas')

myCavans.width = window.innerWidth;
myCavans.height = window.innerHeight;

const ctx = myCavans.getContext('2d')

ctx.fillStyle = 'white';


console.log(ctx);

ctx.shadowColor = "black";
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 10;


ctx.shadowColor = "black";
ctx.shadowOffsetX = 25;
ctx.shadowBlur = 10;


ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(120, 190, 20, 30, Math.PI * 0, 0, Math.PI, true);
ctx.fill();

//puttinn
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(200, 100, 20, 30, Math.PI * 0, 0, Math.PI, true);
ctx.fill();


ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(160, 190, 20, 30, Math.PI * 0, 0, Math.PI, true);
ctx.fill();

ctx.lineWidth = 15;
ctx.fillStyle = 'red';
ctx.fillRect(100, 190, 40, 130);


ctx.fillStyle = 'blue';
ctx.fillRect(140, 190, 40, 130);


//puttinn
ctx.fillStyle = 'red';
ctx.fillRect(180, 100, 40, 220);


ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(240, 190, 20, 30, Math.PI * 0, 0, Math.PI, true);
ctx.fill();


ctx.fillStyle = 'blue';
ctx.fillRect(220, 190, 40, 130);


ctx.fillStyle = "red";
ctx.beginPath();
ctx.ellipse(260, 270, 50, 30, Math.PI * 0.50, 0, Math.PI, true);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 500, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.lineTo(450, 20);
ctx.stroke();



class Controller {

}

class praticle {

}


