/////////////////////////////////////////////////////////////
// Imports & Requeriments


const express = require('express');
const cors = require('cors');
const {socketController} = require('../sockets/controller-sockets');


/////////////////////////////////////////////////////////////
// Class

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

        // Sockets
        this.sockets();
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

    sockets() {

        this.io.on('connection', socketController);

    }

    listen(port) {
        this.server.listen( port, () => {
            console.log('Servidor corriendo en puerto: ', port );
        });
    }

}


/////////////////////////////////////////////////////////////
// Exports


module.exports = Server;

//Sockect --> http://localhost:3030/socket.io/socket.io.js