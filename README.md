# Projeto iniciado com Create React App
Projeto referente a última etapa para vaga de Front End júnior da empresa Cyber Gênios.

# Tecnologias usadas
## CRA -> Create React App
Trata-se de uma ferramenta mantida e criada pelo Facebook que serve para inicializar um
projeto React todo configurado para que não seja necessário a configuração de Babel,
Webpack, louders, etc.

## Gerenciador de pacotes Yarn
Foi usado Yarn para criação e gerenciamento dos pacotes usados na aplicação.

## Editor config e ESlint
São ferramentas que servem para padronização do código, com por exemplo, colocar ';'
ao final de cada linha de código, usar '' ao invés de "" e gerenciar algumas regras.

## Styled-components -> ferramenta de estilização
É uma ferramenta que chamamos de css in js, ou seja, css dentro do javascript.
Facilita a legibilidade, tem scoped por padrão, trabalha com props, dá para reutilizar
os componentes em outros pontos da aplicação.

## Styled-components -> ThemeProvider
Usando o themeProvider facilita o desenvolvimento do projeto que ultiliza um styleguide
e também facilita a manutenção do código, em caso de modificações muito grandes (e até mesmo
pequenas) basta modificar os elementos lá no arquivo de theme onde está centralizado todas
as informações de estilo.

## Componentização
O projeto está dividido em um componente pai, e outros três filhos. Cada componente encontra-se
em uma pasta nomeada com dois arquivos, um index.js que representa a lógica e estruturação da
página e um styled.js onde ficam as estilizações daquele componente. Foi criado um arquivo de estilo
global onde coloquei estilos default entre os arquivos.

## Hooks
Foram ultilizados os React Hooks na renderização do menu quando está no estilo mobile ou desktop.
Foi necessário o uso do useState que é um hook de estado que retorna um array com duas posições, na
primeira posição está o valor do estado e na segunda uma função que modifica este valor na primeira
posição do array. O estado inicia como false e de acordo com o clique do usuário este valor vai alternando
entre true e false (aberto ou fechado).
