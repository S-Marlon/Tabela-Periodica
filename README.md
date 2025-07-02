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
|    └── ├── style.css           (arquivo principal, só importa os outros)
|        ├── reset.css           (reset ou normalização, se usar)
|        ├── layout.css          (grids, containers, estrutura geral)
|        ├── components.css      (elementos reutilizáveis: .element, .modal, .botoes-busca, etc)
|        ├── colors.css          (paleta de cores, classes de categorias)
|        ├── forms.css           (inputs, selects, ranges, botões)
|        └── responsive.css      (media queries)style.css     # Arquivo CSS para a estilização  
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


✨ Funcionalidades Principais

    Visualização Completa da Tabela Periódica: Exibe todos os 118 elementos da tabela, organizados por grupo e período.
    Pesquisa Dinâmica:
        Pesquise por nome, símbolo ou número atômico para elementos.
        Pesquise por fórmula química ou nome comum/IUPAC para compostos.
    Detalhes Abrangentes de Elementos: Ao clicar ou pesquisar um elemento, exibe informações como:
        Nome, Símbolo, Número Atômico, Massa Atômica.
        Grupo, Período, Bloco.
        Configuração Eletrônica.
        Estados de Oxidação Comuns.
        Breve descrição, usos e aplicações.
    Informações Detalhadas de Compostos/Ligações Comuns: Para as combinações mais pesquisadas, oferece:
        Fórmula Química e Nomenclatura (comum e/ou IUPAC).
        Tipo de Ligação (Iônica, Covalente - com indicação de polaridade).
        Descrição, usos e importância no dia a dia.
        Propriedades físicas básicas (ex: estado à temperatura ambiente, solubilidade).

🚀 Funcionalidades Avançadas (Para Estudantes Avançados)

Para tornar a ferramenta ainda mais útil para alunos do ensino médio e superior, foram incluídas (ou serão incluídas) as seguintes capacidades:

    Filtros Inteligentes:
        Por Tipo de Ligação: Filtre compostos iônicos, covalentes (polares/apolares).
        Por Função Química: Filtre por ácidos, bases, sais, óxidos, hidrocarbonetos, etc.
        Por Aplicação: Explore compostos usados em medicina, construção, alimentos, etc.
    Detalhes Estruturais de Compostos:
        Geometria Molecular: Indicação da forma 3D da molécula (ex: angular, tetraédrica).
        Hibridização: Informa a hibridização de átomos centrais em moléculas (sp3,sp2,sp).
        Eletronegatividade e Polaridade: Valores de eletronegatividade dos elementos e indicação da polaridade da ligação/molécula.
        Visualização 3D de Moléculas (Planejado): Integração com bibliotecas para renderizar modelos 3D de compostos, auxiliando na compreensão espacial.
        Imagem de Abre em uma nova janela
    Informações Complementares:
        Alotropia: Explicação de diferentes formas para o mesmo elemento (ex: grafite e diamante para o Carbono).
        Imagem de Graphite and diamond, allotropes of carbon, crystal structuresAbre em uma nova janela
        Graphite and diamond, allotropes of carbon, crystal structures
        Isótopos Comuns: Menção de isótopos relevantes e suas aplicações.
        Reatividade e Reações Típicas: Breves descrições de reações importantes.
    Ferramentas Interativas (Em desenvolvimento/Planejado):
        Calculadora de Massa Molar: Para qualquer fórmula química inserida.
        Tabela de Solubilidade: Interativa para consulta rápida.
        Sugestão de Compostos Relacionados: Ajuda a explorar temas conectados