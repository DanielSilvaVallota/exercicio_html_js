const form = document.getElementById ('form-pai');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);

    let valido = campoA < campoB;

    if (valido) {
        alert ('Perfeito, você ganhou!');
        form.reset ()

    } else {
        alert ('Você perdeu, tente de novo!')
        form.reset ()

    }
    })
