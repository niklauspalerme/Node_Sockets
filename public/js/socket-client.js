////////////////////////////////////////////////////////////
// HTML Reference

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


////////////////////////////////////////////////////////////
// Variables from Back-End

const socket = io();


////////////////////////////////////////////////////////////
// Events

// on -> Es para escucha eventos
// emit -> Emitir un evento

socket.on('connect', ()=>{
    console.log('Connect to the server');
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
})

socket.on('disconnect', () =>{
    console.log('Desconect to the server');
    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
})


socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})


btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});