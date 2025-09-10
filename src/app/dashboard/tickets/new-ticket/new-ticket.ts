import { Component } from '@angular/core';
import { Control } from '../../../shared/control/control';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-new-ticket',
  imports: [Control, Button],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {}
