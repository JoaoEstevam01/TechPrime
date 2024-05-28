//Mudar de cor/Alerta na tela
var btn = document.querySelector('.button');

btn.onmouseover = function(e){
    var x = e.clientX - btn.getBoundingClientRect().left;
    var y = e.clientY - btn.getBoundingClientRect().top;

    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px')
}