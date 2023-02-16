#  Bem-vindos ao Tutor Mundi

Esse repositório tem como objetivo criar uma API que armazena as avaliações de um usuário sobre o seu tutor após o fim da aula. Para isso, foram utilizados alguns conceitos de **Express**, **Node**, **PostgresSQL** e o básico de **Typescript**.

## Estrutura do banco de dados:
Essa aplicação está conectada diretamente a um banco de dados SQL que possui 1 entidade: **stars**.

## Rotas

### Post /stars

body: {
star: number
}

Essa rota tem como objetivo cadastrar a nota de uma avaliação.

**Possíveis erros:**

**422:**   A entidade body não seguiu o padrão requerido.
**500:** Erro no banco de dados.
 


