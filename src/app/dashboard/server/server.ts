import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-server',
  imports: [],
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class Server {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  constructor() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }
}
