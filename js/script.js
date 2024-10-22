document.querySelector('.seta-voltar').addEventListener('click', function() {
    const nav = document.querySelector('nav.navegacao');
    
    // Alterna a largura e a classe
    if (nav.classList.contains('reduzido')) {
      nav.classList.remove('reduzido');
    } else {
      nav.classList.add('reduzido');
    }
  });
