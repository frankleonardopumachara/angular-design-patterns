import {Component, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'filters',
  template: `
    <div class="">
      <input type="text"
             [(ngModel)]="text"
             (input)="filterChange.emit(text)"
      >
    </div>
  `
})
export class FilterComponent {

  text = ''

  @Output()
  filterChange = new EventEmitter<string>()
}

