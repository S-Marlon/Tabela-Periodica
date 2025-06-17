# Tabela Periódica Interativa
Este projeto consiste em uma tabela periódica interativa construída utilizando HTML, CSS e JavaScript, com os dados dos elementos armazenados em um arquivo JSON.

### Funcionalidades
- Visualização em Grid: A tabela periódica é exibida em um layout de grid responsivo.
- Dados dos Elementos: Ao interagir com um elemento (atualmente apenas exibição), informações básicas como símbolo e número atômico são mostradas.
- Dados via JSON: Os dados de todos os 118 elementos são carregados dinamicamente de um arquivo data.json.

### Tecnologias Utilizadas
- HTML: `Estrutura da página web.`
- CSS: `Estilização e layout da tabela periódica.`
- JavaScript: `Interatividade e carregamento dinâmico dos dados.`
- JSON: `Formato para armazenar os dados dos elementos.`

### Como Usar

Clone o repositório:

```Bash
git clone https://docs.github.com/S-Marlon/Tabela-Periodica
```

Abra o arquivo index.html no seu navegador:
O arquivo index.html é o ponto de entrada da aplicação. Ao abri-lo, a tabela periódica será carregada.

# Estrutura de Arquivos

```bash 
tabela-periodica/
├── _js/
|    └── script.js     # Arquivo JavaScript para a lógica da aplicação
├── _css/
|    └── style.css     # Arquivo CSS para a estilização  
├── data.json          # Arquivo contendo os dados dos elementos
├── index.html         # Arquivo HTML principal
└── README.md          # Este arquivo
````
### Próximos Passos (Melhorias Futuras)
- <b>Informações Detalhadas:</b> Adicionar mais informações sobre cada elemento (massa atômica, estado físico, etc.) que sejam exibidas ao interagir com o elemento (por exemplo, ao passar o mouse ou clicar).
- <b>Organização por Grupos/Blocos:</b> Implementar visualizações ou filtros para destacar diferentes grupos (metais alcalinos, gases nobres, etc.) ou blocos da tabela periódica.
- <b>Responsividade Aprimorada:</b> Garantir que a tabela periódica se adapte bem a diferentes tamanhos de tela e dispositivos.
- <b>Busca e Filtro:</b> Adicionar funcionalidades de busca por nome ou símbolo e filtros por propriedades dos elementos.
- <b>Estilização Avançada:</b> Melhorar a estética da tabela periódica com CSS mais elaborado.
