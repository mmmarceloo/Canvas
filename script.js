// Initial Data

let currentColor = 'black';
let canDraw = false;
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');   // seleciona o contexto, no caso a tela de desenho
let mouseX = 0;
let mouseY = 0;
// Events

document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent)
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click',clearScreen);



// Functions

function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');

}
function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }
}
function mouseUpEvent(){
    canDraw = false;
}

function draw(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();    //começa o processo de desenhar nesse pixel
    ctx.lineWidth = 5;  // linha com 5 px
    ctx.lineJoin = "round"; // estilo arrendodado desse ponto
    ctx.moveTo(mouseX, mouseY); // mover o cursor
    ctx.lineTo(pointX, pointY); // ate onde a linha tem q ir
    ctx.closePath(); // termina o processo de desenho
    ctx.strokeStyle = currentColor;             //cor
    ctx.stroke();   // finaliza o comando preenchendo a linha com todo o conteudo           

    mouseX = pointX;
    mouseY = pointY;

}
function clearScreen(){
    ctx.setTransform(1,0,0,1,0,0) // avançado, nao entendi muito bem kkk
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height); // limpa o canvas

}   