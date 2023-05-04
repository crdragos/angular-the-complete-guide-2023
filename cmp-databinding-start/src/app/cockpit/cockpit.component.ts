import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output()
  serverCreated: EventEmitter<{ name: string, content: string }> = new EventEmitter();

  @Output()
  blueprintCreated: EventEmitter<{ name: string, content: string }> = new EventEmitter();

  constructor() {
  }

  //called once the component is initialized
  ngOnInit(): void {
  }

  //called after a bound input property changes
  ngOnChanges(changes: SimpleChanges): void {
  }

  onAddServer(nameInputElement: HTMLInputElement) {
    this.serverCreated.emit({name: nameInputElement.value, content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInputElement: HTMLInputElement) {
    this.blueprintCreated.emit({name: nameInputElement.value, content: this.serverContentInput.nativeElement.value});
  }

}
