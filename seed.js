require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

// Dados iniciais
const seedProducts = [
  {
    nome: "Whey Protein Isolado",
    descricao: "Proteína de alta qualidade com baixo teor de gordura e carboidratos.",
    preco: 150,
    estoque: 25,
    categoria: "Proteínas",
  },
  {
    nome: "Creatina Monohidratada",
    descricao: "Suplemento para ganho de força e energia muscular.",
    preco: 80,
    estoque: 50,
    categoria: "Performance",
  },
  {
    nome: "BCAA 2:1:1",
    descricao: "Aminoácidos essenciais para recuperação muscular.",
    preco: 120,
    estoque: 40,
    categoria: "Aminoácidos",
  },
  {
    nome: "Multivitamínico",
    descricao: "Complexo de vitaminas e minerais para o suporte diário.",
    preco: 60,
    estoque: 100,
    categoria: "Vitaminas",
  },
];

// Inserir dados no banco
const seedDB = async () => {
  try {
    await Product.deleteMany(); // Remove todos os produtos existentes
    console.log("Produtos antigos removidos.");

    await Product.insertMany(seedProducts);
    console.log("Produtos inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir os produtos:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Executar a seed
seedDB();
