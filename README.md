# **E-commerce de Suplementos - API**

## Descrição

Este projeto é uma API para um e-commerce de suplementos, permitindo o gerenciamento de produtos.

---

## Funcionalidades

- **Criar** um novo produto.
- **Listar** todos os produtos disponíveis.
- **Buscar** um produto específico pelo ID.
- **Atualizar** os dados de um produto existente.
- **Deletar** um produto.

---

## Instalação

### Pré-requisitos

- **Node.js**
- **MongoDB**: Um banco de dados MongoDB (pode ser local ou no MongoDB Atlas).

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/ecommerce-api.git
   cd ecommerce-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte variável de ambiente:

   ```env
   MONGO_URI=mongodb://<usuário>:<senha>@<cluster>.mongodb.net/ecommerce?retryWrites=true&w=majority
   ```

   Se estiver utilizando o MongoDB local, a URI será algo como:

   ```env
   MONGO_URI=mongodb://localhost:27017/ecommerce
   ```

---

## Uso

### 1. **Rodando o Servidor**

Para iniciar o servidor da API, execute o comando:

```bash
node server.js
```

Isso irá rodar o servidor na porta `3000` por padrão, e a API estará disponível em:

```
http://localhost:3000
```

### 2. **Endpoints da API**

#### **POST** `/api/products`

Cria um novo produto.

- **Body (JSON)**:

  ```json
  {
    "name": "Whey Protein Isolado",
    "description": "Proteína de alta qualidade com baixo teor de gordura e carboidratos.",
    "price": 150,
    "stock": 25,
    "category": "Proteínas"
  }
  ```

- **Resposta** (200 OK):

  ```json
  {
    "_id": "648d6c23d4522cba56ef1205",
    "name": "Whey Protein Isolado",
    "description": "Proteína de alta qualidade com baixo teor de gordura e carboidratos.",
    "price": 150,
    "stock": 25,
    "category": "Proteínas",
    "createdAt": "2024-11-23T20:11:00.547Z",
    "__v": 0
  }
  ```

#### **GET** `/api/products`

Lista todos os produtos.

- **Resposta** (200 OK):

  ```json
  [
    {
      "_id": "648d6c23d4522cba56ef1205",
      "name": "Whey Protein Isolado",
      "description": "Proteína de alta qualidade com baixo teor de gordura e carboidratos.",
      "price": 150,
      "stock": 25,
      "category": "Proteínas",
      "createdAt": "2024-11-23T20:11:00.547Z",
      "__v": 0
    }
  ]
  ```

#### **GET** `/api/products/:id`

Busca um produto específico pelo ID.

- **Resposta** (200 OK):

  ```json
  {
    "_id": "648d6c23d4522cba56ef1205",
    "name": "Whey Protein Isolado",
    "description": "Proteína de alta qualidade com baixo teor de gordura e carboidratos.",
    "price": 150,
    "stock": 25,
    "category": "Proteínas",
    "createdAt": "2024-11-23T20:11:00.547Z",
    "__v": 0
  }
  ```

#### **PUT** `/api/products/:id`

Atualiza um produto específico.

- **Body (JSON)**:

  ```json
  {
    "price": 140,
    "stock": 20,
    "category": "Aminoácidos"
  }
  ```

- **Resposta** (200 OK):

  ```json
  {
    "_id": "648d6c23d4522cba56ef1205",
    "name": "Whey Protein Isolado",
    "description": "Proteína de alta qualidade com baixo teor de gordura e carboidratos.",
    "price": 140,
    "stock": 20,
    "category": "Aminoácidos",
    "createdAt": "2024-11-23T20:11:00.547Z",
    "__v": 0
  }
  ```

#### **DELETE** `/api/products/:id`

Deleta um produto específico.

- **Resposta** (200 OK):

  ```json
  {
    "message": "Produto deletado com sucesso"
  }
  ```

---

## Populando o Banco de Dados com Produtos de Exemplo

Para facilitar o teste e a inicialização do banco de dados com dados de exemplo, você pode usar o script `seed.js`. Este script insere produtos predefinidos no banco de dados.

### 1. **Rodando o Script `seed.js`**

1. **Executar o script diretamente**:

   Execute o comando abaixo para rodar o script que irá popular o banco de dados com produtos de exemplo:

   ```bash
   node seed.js
   ```
