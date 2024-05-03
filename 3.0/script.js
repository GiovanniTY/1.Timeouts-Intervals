document.addEventListener('DOMContentLoaded', function() {
    // Crea un div e aggiungi la classe 'taupes'
    const div = document.createElement('div');
    div.classList.add('taupes');

    // Aggiungi il div al body del documento
    document.body.appendChild(div);

    // Crea un div per il punteggio e aggiungi la classe 'points'
    let score = document.createElement('div');
    score.classList.add('points');

    // Aggiungi il div del punteggio al body del documento
    document.body.appendChild(score);

    for (let i = 0; i < 12; i++) {
        // Clona il div principale
        let clonedDiv = div.cloneNode(true);
        
        // Aggiungi la copia al documento
        document.body.appendChild(clonedDiv);
    }
});
