import {Component, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'sort',
  template: `
    <div class="">
      <button (click)="sortChange.emit()">Ordenar</button>
    </div>
  `
})
export class SortComponent {

  @Output() sortChange = new EventEmitter()
}
