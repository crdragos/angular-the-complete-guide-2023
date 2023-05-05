import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selectedFeature: EventEmitter<string> = new EventEmitter<string>();

  onSelect(feature: string): void {
    this.selectedFeature.emit(feature);
  }

}
