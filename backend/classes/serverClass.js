import express from 'express'
import http from 'http'


class Server { 
    constructor() {
        this.app  = express();
        this.server = http.createServer( this.app );   
        this.port = process.env.PORT;
    }

    
    middlewares() {
        // Desplegar el directorio público
     this.app.use(express.json())
    }

    routes(){

        this.app.get('/',(req,res) => {
            res.send("api is up...")
        })
    }


    

    execute() {
        // Inicializar Server
        this.middlewares();
        this.routes()

        this.app.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }
}

export default Server