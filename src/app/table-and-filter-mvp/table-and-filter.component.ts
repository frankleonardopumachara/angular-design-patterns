import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {ListItem} from './list-item.model'
import {ListPresenter} from './list.presenter'
import {animate, query, stagger, style, transition, trigger} from '@angular/animations'

@Component({
  selector: 'app-root',
  template: `
    <div class="list-container">
      <form class="form" (submit)="create()">
        <input type="text" name="name" [(ngModel)]="name">
      </form>

      <br>

      <div class="list-header">
        <filters (filterChange)="onFilterChange($event)"></filters>
        <sort (sortChange)="onSortChange()"></sort>
      </div>

      <div class="list-body" *ngIf="items$ | async as items; else loading">
        <ul>
          <li *ngFor="let item of items; trackBy: trackById">
            {{item.name}}
          </li>
        </ul>
      </div>


      <ng-template #loading>Loading...</ng-template>
    </div>
  `,
  providers: [ListPresenter],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class TableAndFilterComponent implements OnInit {
  name = ''
  items$ = new Observable<ListItem[]>()

  constructor(public presenter: ListPresenter) {
  }

  ngOnInit() {
    this.items$ = this.presenter.getItems$()
  }

  onFilterChange(filter: string) {
    this.presenter.setFilter(filter)
  }

  onSortChange() {
    this.presenter.setSortBy()
  }

  trackById(index: number, item: ListItem): string {
    return item.id
  }

  create() {
    this.presenter.create(this.name)
    this.name = ''
  }
}
