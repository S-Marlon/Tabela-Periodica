document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Seleciona todas as divs com a classe 'elemento'
            const elementosDivs = document.querySelectorAll('div.elemento');

            // Itera sobre as divs com a classe 'elemento'
            elementosDivs.forEach((elementoDiv, index) => {
                // Verifica se existe um elemento correspondente nos dados JSON
                if (data[index]) {
                    const elemento = data[index];
                    elementoDiv.innerHTML = `
                        <span class="simbolo">${elemento.simbolo}</span>
                        <div class="numero">${elemento.numero_atomico}</div>
                    `;
                    elementoDiv.addEventListener('click', function() {
                    const numeroAtomico = elemento.numero_atomico;
                        mostrarelemento(numeroAtomico);
                });
                     elementoDiv.classList.add(elemento.grupo_funcional.toLowerCase().replace(/ /g, '-'));
                     

                } else {
                    console.warn(`Não há dados correspondentes no JSON para a div 'elemento' no índice ${index}.`);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});


function mostrarelemento(numeroAtomicoClicado) {
    console.log(numeroAtomicoClicado);

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Encontra o elemento no array 'data' cujo 'numero_atomico' corresponde ao clicado
            const elemento = data.find(elemento => elemento.numero_atomico === parseInt(numeroAtomicoClicado));

            if (elemento) {
                const nomeElemento = document.getElementById("elemento-nome");
                const simboloElemento = document.getElementById("elemento-simbolo");
                const numeroAtomicoElemento = document.getElementById("elemento-numero-atomico");
                const massaAtomicaElemento = document.getElementById("elemento-massa-atomica");
                const periodoElemento = document.getElementById("elemento-periodo");
                const grupoElemento = document.getElementById("elemento-grupo");
                const blocoElemento = document.getElementById("elemento-bloco");
                const estadoFisicoElemento = document.getElementById("elemento-estado-fisico");
                const configuracaoEletronicaElemento = document.getElementById("elemento-configuracao-eletronica");
                const grupoFuncionalElemento = document.getElementById("elemento-grupo-funcional");

                nomeElemento.textContent = elemento.nome;
                simboloElemento.textContent = elemento.simbolo;
                numeroAtomicoElemento.textContent = elemento.numero_atomico;
                massaAtomicaElemento.textContent = elemento.massa_atomica;
                periodoElemento.textContent = elemento.periodo;
                grupoElemento.textContent = elemento.grupo !== null ? elemento.grupo : '-'; // Trata o caso de grupo ser null
                blocoElemento.textContent = elemento.bloco;
                estadoFisicoElemento.textContent = elemento.estado_fisico;
                configuracaoEletronicaElemento.textContent = elemento.configuracao_eletronica;
                grupoFuncionalElemento.textContent = elemento.grupo_funcional;
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}