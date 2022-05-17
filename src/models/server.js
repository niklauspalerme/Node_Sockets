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

        //Manejo de Eventos de Sockets
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

    sockets(){
        this.io.on('connection', socket => {
            console.log("Client Online");
        });
    }


    listen( port ) {

        //Escuchamos aqui el socket
        this.server.listen( port, () => {
            console.log('Servidor corriendo en puerto', port );
        });
    }

}

/////////////////////////////////////////////////////////////
// Exports


module.exports = Server;

//Sockect --> http://localhost:8080/socket.io/socket.io.js