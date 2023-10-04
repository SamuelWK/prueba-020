import { Component, HostListener, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnDestroy {
  search = new FormControl();
  isEmpty = true;
  subscriptions: Array<any> = [];
  @Output() changeSearch = new EventEmitter<string>();

  constructor() {
    this.subscriptions.push(this.search.valueChanges.subscribe(res => {
      this.isEmpty = !res || res === "";
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  updateValue(value: Event) {
    this.changeSearch.emit((value.target as any).value);
  }

  clear() {
    this.search.setValue('');
    this.changeSearch.emit('')
  }
}
