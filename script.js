
const botaoSim = document.getElementById('botaosim');
const botaoNao = document.getElementById('botaonao');

botaoSim.addEventListener('click', function() {
    window.location.href = "pagina2.html";
});

botaoNao.addEventListener('mouseover', function() {
  
    const larguraJanela = window.innerWidth - 150;
    const alturaJanela = window.innerHeight - 80;

  
    const novaPosicaoX = Math.floor(Math.random() * larguraJanela);
    const novaPosicaoY = Math.floor(Math.random() * alturaJanela);

   
    botaoNao.style.position = 'fixed';
    botaoNao.style.left = `${novaPosicaoX}px`;
    botaoNao.style.top = `${novaPosicaoY}px`;
});

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

// 1. Clique no Card 1 (Carta) -> Leva para a pagina_carta.html
card1.addEventListener('click', function() {
    window.location.href = "pagina_carta.html";
});

// 2. Clique no Card 2 (Rosa) -> Leva para a pagina_rosa.html
card2.addEventListener('click', function() {
    window.location.href = "pagina_rosa.html";
});

// 3. Clique no Card 3 (Música) -> Leva para a pagina_musica.html
card3.addEventListener('click', function() {
    window.location.href = "pagina_musica.html";
});

// 4. Clique no Card 4 (Alianças) -> Leva para a pagina_aliancas.html
card4.addEventListener('click', function() {
    window.location.href = "pagina_aliancas.html";
});
