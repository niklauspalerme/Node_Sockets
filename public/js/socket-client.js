////////////////////////////////////////////////////////////
// HTML Reference

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


const socket = io();


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