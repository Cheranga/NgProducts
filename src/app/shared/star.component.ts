import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prodapp-v2-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  starWidth: number;
  // This is an input parameter to this component. This value will be passed from the UI (e.x - from 'product-list' component)
  @Input() rating: number;

  // Define an event, so that the component which actually uses it can respond to it.
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnChanges(): void {
    this.starWidth = (this.rating * 86) / 5;
  }

  onClick():void{    
    this.ratingClicked.emit(this.rating);
  }

}
