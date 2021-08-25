import express from "express";
import http from "http";
import productRoutes from "../routes/productRoutes.js";
import userRoutes from "../routes/userRoutes.js";

class Server {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = process.env.PORT;
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("api is up...");
    });

    this.app.use("/api/products", productRoutes);
    this.app.use('/api/users', userRoutes);
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.json());
  }

  execute() {
    // Inicializar Server
    this.middlewares();
    this.routes();

    this.app.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

export default Server;
