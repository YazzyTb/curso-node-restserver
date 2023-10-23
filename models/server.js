const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios'
        
        //Midlewares
        this.middlewares()

        //Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json()) 

        //directorio publico
        this.app.use (express.static('public'))
    }


    routes(){

       this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('servidor corriendo en puerto', this.port)
        })
    }

}

module.exports = Server;
