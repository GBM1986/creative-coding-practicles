const myCavans = document.getElementById('myCanvas')

myCavans.width = window.innerWidth;
myCavans.height = window.innerHeight;

const ctx = myCavans.getContext('2d')

ctx.fillStyle = 'white';


console.log(ctx);


ctx.lineWidth = 5;
ctx.fillStyle = 'red';
ctx.fillRect(130, 190, 40, 60);

ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 40, 60);


class Controller {

}

class praticle {

}