# Sistema Cliente WebSocket com Node.js e Servidor ASP.NET

## Descrição

Este projeto é composto por dois componentes principais:
1. **Cliente (Node.js)**: Uma aplicação cliente que se conecta a um WebSocket e consome dados enviados pelo servidor.
2. **Servidor (ASP.NET)**: Um WebSocket desenvolvido em ASP.NET que transmite mensagens para os clientes conectados.

### Objetivo
O sistema foi desenvolvido para demonstrar como um cliente Node.js pode se conectar e consumir dados em tempo real de um servidor WebSocket feito em ASP.NET.

## Requisitos

### Cliente (Node.js)
- [Node.js](https://nodejs.org/en/) v14 ou superior
- Pacotes npm:
  - `ws` para WebSocket
  - `dotenv` para variáveis de ambiente (opcional)

### Servidor (ASP.NET)
- [.NET SDK](https://dotnet.microsoft.com/download) v6.0 ou superior
- ASP.NET Core Web API
- WebSocket protocol



## Como Configurar

### Servidor (ASP.NET)

1. **Clone o repositório** e navegue até a pasta do servidor:
    ```bash
    git clone https://github.com/luisfelipeprs/WebSocket-Delivery.git
    cd WebSocket-Delivery/WebSocketDelivery
    ```

2. **Instale as dependências** do projeto:
    ```bash
    dotnet restore
    ```

3. **Configure o WebSocket**:
   - O WebSocket foi configurado no arquivo `Program.cs`. Certifique-se de que a rota para o WebSocket está configurada corretamente.

4. **Execute o servidor**:
    ```bash
    dotnet run
    ```

    O servidor WebSocket estará disponível em `ws://localhost:5068/ws`.

### Cliente (Node.js)

1. **Navegue para a pasta do cliente** e instale as dependências:
    ```bash
    cd WebSocket-Delivery/client
    npm install
    ```

3. **Execute o cliente Entregador e o cliente Consumidor**:
    ```bash
    node cliente.js
    node entregador.js
    ```

    O cliente se conectará ao WebSocket e começará a consumir mensagens do servidor.



### WebSocket (Node.js)
- Se preferir, você pode usar o WebSocket feito em Node. Ele se encontra no arquivo `server.js`.

  **Execute o servidor com WebSocket feito em node com**:
    ```bash
    node server.js
    ```
