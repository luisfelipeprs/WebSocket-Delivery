// server.js
const WebSocket = require('ws');

// Cria o servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Armazena os clientes conectados
let clients = [];

wss.on('connection', (ws) => {
    console.log('Novo cliente conectado');

    // Armazena os clientes conectados
    clients.push(ws);

    // Evento quando o servidor recebe uma mensagem (do entregador)
    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);

        // Enviar a mensagem recebida para todos os clientes conectados (consumidores)
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Remove o cliente da lista quando ele desconectar
    ws.on('close', () => {
        console.log('Cliente desconectado');
        clients = clients.filter((client) => client !== ws);
    });
});

console.log('Servidor WebSocket rodando na porta 8080');
