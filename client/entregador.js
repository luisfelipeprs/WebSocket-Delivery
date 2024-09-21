const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:5068/');

ws.on('open', function open() {
    console.log('Conectado ao WebSocket');

    setInterval(() => {
        const locationData = {
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
