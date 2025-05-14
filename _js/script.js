function alterarImagem(objeto, caminhoNovaImagem){
    
    document.getElementById("modali").src = "_img/H.png"; 
    
}		

function alterarImagem1(objeto, caminhoNovaImagem){
    document.getElementById("modali").src = "_img/Helio.PNG"; 
    
}		

function alterarImagem2(objeto, caminhoNovaImagem){
    document.getElementById("modali").src = "_img/Berilio.PNG"; 
    
}		

function alterarImagem3(objeto, caminhoNovaImagem){
    document.getElementById("modali").src = "_img/Litio.PNG"; 
}		



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
                        ${elemento.simbolo}
                        <div class="numero">${elemento.numero_atomico}</div>
                    `;
                } else {
                    console.warn(`Não há dados correspondentes no JSON para a div 'elemento' no índice ${index}.`);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});