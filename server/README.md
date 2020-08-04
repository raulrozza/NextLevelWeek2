# REST API do Proffy

Esta API tem como objetivo cadastrar e listar os professores, com suas determinadas aulas, e também registrar e mostrar o total de possíveis conexões realizadas entre professores e alunos.

Através da API, é possível cadastrar novas aulas, contendo informações como a matéria a ser lecionada e os horários disponíveis, e então checar se uma matéria que você tem interesse está disponível em um determinado dia e horário.

Também é possível registrar conexões entre alunos e professores, e checar o total destas conexões.

## 1. Endpoints

A API disponibiliza certas rotas para criação e obtenção de dados:

### 1.1. Classes

#### GET

**'/classes':** Retorna todas as aulas cadastradas na aplicação.  Requer três filtros.

- **Parâmetros:** Matéria, dia da semana e horário que a aula deve ser lecionada, no seguinte formato:
```
  {
    subject: STRING - Matéria de interesse
    weekday: NUMBER - Dia da semana, em número inteiro de 0 a 6.
    time: STRING - Horário de interesse, no formato "HH:MM"
  }
```
- **Retorno:** Um vetor de objetos. Cada objeto tem o seguinte formato:
```
  {
    id: INT - Identificador da aula
    user_id: INT - Identificador do professor
    name: STRING - O nome do professor
    avatar: STRING - URL da imagem do professor
    bio: STRING - Breve descrição do professor
    whatsapp: STRING - Número de whatsapp do professor
    subject: STRING - A matéria lecionada
    cost: INT - Valor hora da aula.
  }
```

#### POST

**'/classes':** Cria uma nova aula, cadastrando também o professor.

- **Corpo da Requisição:** As informações da aula:
```
  {
    name: STRING - O nome do professor
    avatar: STRING - URL da imagem do professor
    bio: STRING - Breve descrição do professor
    whatsapp: STRING - Número de whatsapp do professor
    subject: STRING - A matéria a ser lecionada
    cost: INT - Valor hora da aula.
    schedule: ARRAY - Um vetor de horários disponíveis para a aula, no seguinte formato:
        {
            weekday: INT - Dia da semana, em número inteiro de 0 a 6.
            from: STRING - Horário de início da aula, no formato "HH:MM".
            to: STRING - Horário de término da aula, no formato "HH:MM".
        }
  }
```
- **Retorno:** Código 201 de criação.


### 1.2. Connections

#### GET

**'/connections':** Retorna o total de possíveis conexões já realizadas pela plataforma.

- **Parâmetros:** Nenhum.
- **Retorno:** Um objeto com o total de conexões, no seguinte formato:
```
  {
    total: NUMBER - Total de conexões realizadas.
  }
```

#### POST

**'/connections':** Cria uma nova conexão.

- **Corpo:** O identificador do professor a ser contactado:
```
  {
    user_id: STRING - Identificador do professor
  }
```
- **Retorno:** Código 201 de criação efetuada.

### 1.3. Erros

Sempre que uma requisição resultar em um erro, a API retornará um código de error, juntamente com um JSON no seguinte formato:
```
  {
    message: STRING - Descritor do erro ocorrido
  }
```

## 2. Variáveis de Ambiente

A aplicação utiliza uma variável de ambiente para rodar em ambiente de desenvolvimento. Por isso, considere criar um arquivo *.env* com as seguintes informações na hora de testar:

- PORT: A variável que define qual porta o servidor ficará ouvindo. Só deve ser preenchida em ambientes locais, pois em produção o servidor irá configurar esta variável automaticamente na maioria dos casos.


## 3. Bibliotecas Utilizadas:

As seguintes bibliotecas foram utilizadas na aplicação:

- **[Express.js](https://expressjs.com/pt-br/):** Express é o *framework* utilizado para construir a aplicação, desde infraestrutura básica como gerenciamento de rotas, até cabeçalhos e *middlewares*.
- **[Cors.js](https://expressjs.com/en/resources/middleware/cors.html):** Este é um *middleware* para express que abstrai as configurações de Cross-Origin Resource Sharing, fazendo com que em vez de mexer diretamente nos cabeçalos das requisições, você possa passar os endereços dos clientes autorizados e deixar o *middleware* fazer seu trabalho.
- **[Knex](http://knexjs.org/):** Um construtor de *queries* SQL para Node.js, o Knex é utilizado para criar e gerenciar o nosso banco de dados relacional.
- **[SQLite](https://www.sqlite.org/index.html):** Uma forma simples e fácil de criar uma base de dados na aplicação, o SQLite permite criar um banco SQL dentro de um pequeno arquivo binário, e gerenciá-lo localmente. Perfeito para aplicações pequenas e/ou de teste, como esta.
- **[Dotenv](https://www.npmjs.com/package/dotenv):** Biblioteca que permite carregar variáveis de ambiente na nossa aplicação.
