import {Component, OnInit} from '@angular/core';

@Component({
  // selector:'[app-servers]', //as attribute
  // selector:'.app-servers', //as class
  selector: 'app-servers', //as element
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isNewServerPossible = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'demoInfo';
  isServerCreated = false;
  servers= ['TestServer 1', 'TestServer 2', 'TestServer 3'];

  constructor() {
    setTimeout(() => {
      this.isNewServerPossible = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreatedServer() {
    this.serverCreationStatus = 'Server was Created!! and Server Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.isServerCreated = true;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
