let filtroSelecionado = null;

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
                    const elementoBuscado = elemento.numero_atomico;
                        mostrarelemento(elementoBuscado);
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


// nome, símbolo ou número atômico

function mostrarelemento(elementoMostrar) {
    
    console.log(elementoMostrar);

    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            let elemento = null
            
            // realiza a busca pelo numero atomico
            if(elementoMostrar !== undefined && elementoMostrar !== null){
                const numeroAtomicoBusca = parseInt(elementoMostrar);
            if (!isNaN(numeroAtomicoBusca)) { // Check if parsing to integer was successful
                elemento = data.find(item => item.numero_atomico === numeroAtomicoBusca);
            }}

            // realiza a busca pelo nome
            if (!elemento && elementoMostrar !== undefined && elementoMostrar !== null) {
            const nomeBusca = String(elementoMostrar).toLowerCase(); 
            elemento = data.find(item => item.nome.toLowerCase() === nomeBusca);
            }

            // realiza a busca pelo simbolo
            if (!elemento && elementoMostrar !== undefined && elementoMostrar !== null) {
            const simboloBusca = String(elementoMostrar).toLowerCase(); 
            elemento = data.find(item => item.simbolo.toLowerCase() === simboloBusca);
            }
            // Encontra o elemento no array 'data' cujo 'numero_atomico' corresponde ao clicado

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

document.getElementById("atomic-number").addEventListener("keyup", function(event) {
   buscaNumeroAtomico();
});

document.getElementById("atomic-number").addEventListener("focusout", function(event) {
     buscaNumeroAtomico();
});

function buscaNumeroAtomico() {
    const inputBusca = document.getElementById("atomic-number");
    const valorBusca = inputBusca.value.trim();
    if (valorBusca) {
        mostrarelemento(valorBusca);
    } else {
        console.warn("O campo de busca está vazio.");
    }
}

document.getElementById("symbol").addEventListener("keyup", function(event) {
   buscaSimbolo()
})
document.getElementById("symbol").addEventListener("focusout", function(event) {
   buscaSimbolo()
})

function buscaSimbolo() {
     const inputBusca = document.getElementById("symbol");
    const valorBusca = inputBusca.value.trim();
    if (valorBusca) {
        mostrarelemento(valorBusca);
    } else {
        console.warn("O campo de busca está vazio.");
    }
}

document.getElementById("elename").addEventListener("keyup", function(event) {
   buscaNome()
})
document.getElementById("elename").addEventListener("focusout", function(event) {
   buscaNome()
})

function buscaNome() {
     const inputBusca = document.getElementById("elename");
    const valorBusca = inputBusca.value.trim();
    if (valorBusca) {
        mostrarelemento(valorBusca);
    } else {
        console.warn("O campo de busca está vazio.");
    }
}




function setTemperatura(graus) {
    console.log(graus);
    let temperatura = graus;
    document.querySelector('#escala-calor').value = temperatura;
    document.querySelector("#temperatura-visor").value = temperatura ;

   

     


// graus = Number(graus);

// if (isNaN(graus)) {
//     console.error("Valor inválido para temperatura:", graus);
//     return;
// }

//      console.log(graus);
//     // Define a temperatura no elemento de escala de calor

//     document.querySelectorAll('#escala-calor').values = graus;
//     temperatura.value = graus + ' °C';
    
}

fetch('phases.json')
  .then(response => response.json())
  .then(data => {
    const elementsData = data.elements_phases;

    // Exemplo: Como encontrar o hidrogênio pelo número atômico
    const hydrogen = elementsData.find(el => el.atomic_number === 92);
    if (hydrogen) {
      console.log(`Ponto de Fusão do Hidrogênio: ${hydrogen.melting_point_C}°C`);
      console.log(`Ponto de Ebulição do Hidrogênio: ${hydrogen.boiling_point_C}°C`);
      console.log(`Início do Plasma do Hidrogênio: ${hydrogen.plasma_start_C}°C`);
    }

    // Você pode agora integrar isso à sua lógica de pesquisa na tabela periódica
  })
  .catch(error => console.error('Erro ao carregar dados:', error));


function enviarPaiText(input, event) {
    event.stopPropagation();
    var textoPai = input.parentElement.textContent.trim();
    setOpacity(textoPai);
}

function unsetOpacity() {
    if (!filtroSelecionado) {
        document.querySelectorAll('.elemento').forEach(el => {
            el.style.opacity = "1";
        });
        document.querySelectorAll('.close').forEach(el => el.style.display = "none");
    }
}

//  funcionou o hover, mas apos o click ele não reseta mais
function setOpacity(ref,type) {
    ref = ref.trim().toLowerCase().replace(/ /g, '-').replace( 'ã' , 'a' ).replace( 'á' , 'a' ) // Normaliza a referência
    if (ref === "" || ref === undefined || ref === null || ref === "todos" || ref === "x") {
         document.querySelectorAll('.close').forEach(el => el.style.display = "none");
        return document.querySelectorAll('.elemento').forEach(el => {
            el.style.opacity = "1"; // Reseta a opacidade para 100% se não houver referência
        });
     }

    
    if (type === "hover") {

        document.querySelectorAll('.elemento').forEach(el => {
        console.log(el.classList);
        console.log(ref);
        
         if (!el.classList.contains(ref)) {
             el.style.opacity = "0.5";
         } else {
             el.style.opacity = "1";
         }

        })        
        
        
    }else if (type === "click") {
        filtroSelecionado = ref; // Marca o filtro como ativo

        document.querySelectorAll('.close').forEach(el => el.style.display = "inline-block");

        document.querySelectorAll('.elemento').forEach(el => {
        console.log(el.classList);
        console.log(ref);
        
         if (!el.classList.contains(ref)) {
             el.style.opacity = "0.5";
         } else {
             el.style.opacity = "1";
         }
        });
    } else {
        filtroSelecionado = null; // Nenhum filtro ativo
    } 
}



// // Variável global para controlar o filtro ativo


// function setOpacity(ref) {
//     filtroSelecionado = ref; // Marca o filtro como ativo
//     document.querySelectorAll('.close').forEach(el => el.style.display = "inline-block");

//     ref = ref.trim().toLowerCase().replace(/ /g, '-').replace('ã', 'a').replace('á', 'a');
//     if (!ref || ref === "todos" || ref === "x") {
//         document.querySelectorAll('.close').forEach(el => el.style.display = "none");
//         document.querySelectorAll('.elemento').forEach(el => el.style.opacity = "1");
//         filtroSelecionado = null; // Nenhum filtro ativo
//         return;
//     }

//     document.querySelectorAll('.elemento').forEach(el => {
//         if (!el.classList.contains(ref)) {
//             el.style.opacity = "0.5";
//         } else {
//             el.style.opacity = "1";
//         }
//     });
// }

// function unsetOpacity(ref) {
//     // Só reseta se NÃO houver filtro ativo
//     if (!filtroSelecionado) {
//         document.querySelectorAll('.elemento').forEach(el => {
//             el.style.opacity = "1";
//         });
//         document.querySelectorAll('.close').forEach(el => el.style.display = "none");
//     }
// }

// // Se quiser limpar o filtro ao clicar no botão X:
// function limparFiltro() {
//     filtroSelecionado = null;
//     unsetOpacity();
// }

