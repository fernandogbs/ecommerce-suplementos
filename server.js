require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware para JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

// Rotas
app.use("/api/products", require("./routes/products"));

// Porta do Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
