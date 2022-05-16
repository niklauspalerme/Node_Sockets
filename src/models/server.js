/////////////////////////////////////////////////////////////
// Imports & Requeriments


const express = require('express');
const cors = require('cors');


/////////////////////////////////////////////////////////////
// Clases


class Server {

    constructor() {
        this.app    = express();

        //Propiedades del socket
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );

        this.paths = {};

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        
        // this.app.use( this.paths.auth, require('../routes/auth'));
        
    }


    listen( port ) {
        this.server.listen( port, () => {
            console.log('Servidor corriendo en puerto', port );
        });
    }

}

/////////////////////////////////////////////////////////////
// Exports


module.exports = Server;