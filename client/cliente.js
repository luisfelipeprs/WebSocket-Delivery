const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:5068/');

ws.on('open', function open() {
    console.log('Conectado ao WebSocket');
});

ws.on('message', function incoming(data) {
    const locationData = JSON.parse(data);
    console.log(`Recebido: Entregador ${locationData.driverId}, Latitude: ${locationData.latitude}, Longitude: ${locationData.longitude}`);
});

ws.on('error', function error(err) {
    console.error('Erro no WebSocket:', err);
});
