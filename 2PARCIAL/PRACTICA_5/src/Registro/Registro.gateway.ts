import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { RegistroService } from './Registro.service';
import { Server, Socket } from 'socket.io';
import { CreateRegistroInput } from './dto/Registro.dto.';

@WebSocketGateway({ cors: true })
export class RegistroGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly RegistroService: RegistroService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.RegistroService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.RegistroService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.RegistroService.removeClient(client.id);
    this.wss.emit('clients-updated', this.RegistroService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async onMessageFromClient(client: Socket, payload: CreateRegistroInput): Promise<void> {
    const registro = await this.RegistroService.create(payload);
    this.wss.emit('message-from-server', {
      fullName: this.RegistroService.getUserfullName(client.id),
      message: registro,
    });
  }
}
