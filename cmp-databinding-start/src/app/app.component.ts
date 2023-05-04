import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'Just a test server'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverDetails: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverDetails.name,
      content: serverDetails.content,
    });
  }

  onBlueprintAdded(blueprintDetails: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintDetails.name,
      content: blueprintDetails.content,
    });
  }

  onIntervalFired(value: number) {
    if (value % 2 === 1) {
      this.oddNumbers.push(value);
    } else {
      this.evenNumbers.push(value);
    }
  }
}
