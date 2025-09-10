import { Component } from '@angular/core';
import { Header } from './header/header';
import { Server } from './dashboard/server/server';
import { Traffic } from './dashboard/traffic/traffic';
import { SupportTickets } from './dashboard/support-tickets/support-tickets';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, Server, Traffic, SupportTickets, DashboardItem],
})
export class AppComponent {}
