# Página de pedido de empréstimos

O projeto foi iniciado utilizando [Create React App](https://github.com/facebook/create-react-app) e possui os scripts padrão da ferramenta para rodá-lo localmente. 
A parte de persistência de dados e backend faz uso dos endpoints da [MockAPI](https://mockapi.io/).

## Um pouco mais sobre o projeto

O projeto possui duas rotas principais acessíveis inicialmente:
- `/` - que leva à página inicial do mesmo
- `pedidos`- que lista todos os pedidos salvos no banco de dados
Todas as outras rotas são protegidas e vão direcionar o usuário à página inicial (no caso de tentativa de acessar o formulário sem iniciar corretamente a jornada na página inicial) ou à página de "erro" caso a tentativa seja de acessar os dados de alguma das entradas salvas sem antes passar pela página com todos as entradas.

## Para rodar o projeto

No diretório do projeto:

### `npm start`

Roda ele localmente no endereço [http://localhost:3000](http://localhost:3000).


### `npm test`

Apesar da existência do script não foram implementados testes ainda ao projeto.

### `npm run build`

Opção de build para deploy.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


## Melhorias e alterações para próximas atualizações

- Melhor componentização dos elementos do formulário
- Implementação de validação do input de data
- Implementação de validação do input de valor
- Implementação de validação do input de parcelas
- Refatoração da folha de estilos
- Padronização do nome de classes
- Reformulação dos estilos mobile

