using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

public class DeliveryHub : Hub
{
    // Método para receber a localização do entregador
    public async Task SendDriverLocation(string driverId, double latitude, double longitude)
    {
        // Lógica para processar ou armazenar a localização (se necessário)

        // Enviar a localização para todos os clientes consumidores conectados
        // Neste caso, estamos enviando para todos os clientes conectados, mas
        // você pode personalizar para enviar apenas para um cliente específico, se necessário.
        await Clients.All.SendAsync("ReceiveDriverLocation", driverId, latitude, longitude);
    }
}
