import { Component } from '@angular/core';
import { Header } from './header/header';
import { Server } from './dashboard/server/server';
import { Traffic } from './dashboard/traffic/traffic';
import { SupportTickets } from './dashboard/support-tickets/support-tickets';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, Server, Traffic, SupportTickets],
})
export class AppComponent {}
