import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  username: string = '';

  servers: string[] = ['First server', 'Second Server', 'Third Server'];

  displayDetails: boolean = false;
  displayDetailsLabel: string;
  displayDetailsClicks: string[];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
    this.displayDetailsLabel = 'Display details';
    this.displayDetails = false;
    this.displayDetailsClicks = [];
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverName = '';
  }

  onResetUsername(): void {
    this.username = '';
  }

  isResetUsernameEnabled(): boolean {
    return this.username.length > 0;
  }

  onUpdateServerName($event: Event): void {
    this.serverName = (<HTMLInputElement>$event.target).value;
    console.log(this.serverName);
  }

  onDisplayDetails(): void {
    this.displayDetails = !this.displayDetails;
    this.displayDetailsLabel = this.displayDetails ? 'Hide Details' : 'Display Details';
    this.displayDetailsClicks.push(Date.now().toString());
  }

  getBackgroundColor(index: number): string {
    return index >= 4 ? 'blue' : 'transparent';
  }

}
