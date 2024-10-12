const WebSocket = require('ws');

// Substitua pelo ID da ordem que você deseja usar
const idOrder = '6c2f9b75-5711-4bbe-ab99-90539cdc9ef4';

const ws = new WebSocket(`wss://8552-187-108-255-14.ngrok-free.app/WebSocketTrackingDelivery/ws/${idOrder}`);

ws.on('open', function open() {
    console.log('Conectado ao WebSocket');

    setInterval(() => {
        const locationData = {
            idOrder: idOrder, // Inclua o idOrder na mensagem
            driverId: 'driver123',
            latitude: (Math.random() * 180 - 90).toFixed(6),
            longitude: (Math.random() * 360 - 180).toFixed(6),
        };

        ws.send(JSON.stringify(locationData));
        console.log(`Enviado: ${JSON.stringify(locationData)}`);
    }, 2000);
});


ws.on('error', function error(err) {
    console.error('Erro no WebSocket:', err);
});

ws.on('close', function close(code, reason) {
    console.log(`Conexão fechada: ${code} - ${reason}`);
});