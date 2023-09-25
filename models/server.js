const express = require('express')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        //Midlewares
        this.middlewares()

        //Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //directorio publico
        this.app.use (express.static('public'))
    }


    routes(){

        this.app.get('/api', (req, res) => {
            res.send('Hello World')
          })
          
    }
    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('servidor corriendo en puerto', this.port)
        })
    }

}

module.exports = Server;