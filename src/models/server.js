/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const express = require('express');
const cors = require('cors');


/////////////////////////////////////////////////////////////
// Clases


class Server {


    ////////////////////////////////
    //Constructor

    constructor() {

        this.app = express();

        //Path de las rutas
        this.path = {}


        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    ////////////////////////////////
    //Metodos


    middlewares = () => {

        //Directorio Publico
        this.app.use(express.static('src/public'));

        //CORS
        this.app.use(cors());


    }


    routes = () => {
    }

    listen = (port) => {

        this.app.listen(port, () => {
            console.log(`Server is listen the port ${port}`);
        })

    }

}


/////////////////////////////////////////////////////////////
// Exportamos


module.exports = Server