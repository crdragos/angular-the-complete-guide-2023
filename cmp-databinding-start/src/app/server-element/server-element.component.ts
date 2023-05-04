import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };

  @ViewChild('heading', {static: true}) header: ElementRef;

  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
    console.log(`constructor called`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit called`);
    console.log(`text content: ${this.header.nativeElement.textContent}`);
    console.log(`content paragraph: ${this.contentParagraph.nativeElement.textContent}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges called`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked called`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called`);
    console.log(`content paragraph: ${this.contentParagraph.nativeElement.textContent}`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`);
    console.log(`text content: ${this.header.nativeElement.textContent}`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck called`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy called`);
  }

}
