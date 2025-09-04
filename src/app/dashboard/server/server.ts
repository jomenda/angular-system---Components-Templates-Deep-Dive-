import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-server',
  imports: [],
  templateUrl: './server.html',
  styleUrl: './server.css'
})
export class Server {
 currentStatus = signal<string>('online');
}
