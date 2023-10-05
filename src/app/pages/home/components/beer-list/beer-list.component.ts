import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from '@models/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {
  @Input() list: Array<Beer> = [];
  @Output() selectedBeer = new EventEmitter<number>();

  selected(id: number){
    this.selectedBeer.emit(id);
  }
}
