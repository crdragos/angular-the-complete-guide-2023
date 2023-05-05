import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../models/ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {

  }

  ngOnInit(): void {
  }

  onAddPressed(): void {
    const ingredient: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.addIngredientEvent.emit(ingredient);
  }
}
