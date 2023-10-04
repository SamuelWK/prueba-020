import { Component, OnInit } from '@angular/core';
import { getIsSearching } from '@store/reducers/index.state';
import { Store, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SetInputStatus } from '@store/actions/ui.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'prueba-o2o';

  constructor(private store: Store){}

  selectFilteredValues = pipe(
    select(getIsSearching),
    filter(val => val !== undefined)
  );

  ngOnInit(): void {
    this.store.subscribe(res => {
      console.log(res)
    })

  }

  setOpen() {
    this.store.dispatch(new SetInputStatus(true));
  }

}
