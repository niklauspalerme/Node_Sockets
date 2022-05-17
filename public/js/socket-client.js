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
    console.log('Conect to the server');
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
})

socket.on('disconnect', () =>{
    console.log('Desconect to the server');
    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
})


btnEnviar.addEventListener('click', () =>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 'XXXXXXX',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload);

})