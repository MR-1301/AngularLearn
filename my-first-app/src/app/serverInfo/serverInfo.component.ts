import {Component} from '@angular/core';

@Component({
  selector: 'app-serverInfo',
  templateUrl: './serverInfo.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class serverInfoComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return (this.serverStatus === 'offline') ? 'red' : 'green';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }
}
