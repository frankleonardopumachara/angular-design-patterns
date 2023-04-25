import {Injectable} from '@angular/core'
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs'
import {ListItem} from './list-item.model'
import {ListService} from './list.service'

@Injectable()
export class ListPresenter {

  private filter$ = new BehaviorSubject<string>('')
  private sortBy$ = new BehaviorSubject<'asc' | 'desc' | 'none'>('none')

  constructor(
    private readonly service: ListService,
  ) {
  }

  getItems$(): Observable<ListItem[]> {
    return combineLatest([
      this.service.getItems$(),
      this.filter$,
      this.sortBy$,
    ])
      .pipe(
        map(([items, filter, sortBy]) => this.filterAndSortItems(items, filter, sortBy)),
      )
  }

  private filterAndSortItems(items: ListItem[], filter: string, sortBy: string): ListItem[] {

    return items
      .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
      .sort((itemA, itemB) => {
        if (sortBy === 'asc') {
          return itemA.name.toLowerCase().localeCompare(itemB.name.toLowerCase())
        } else {
          return itemB.name.toLowerCase().localeCompare(itemA.name.toLowerCase())
        }
      })
  }

  public setFilter(filter: string) {
    this.filter$.next(filter)
  }

  public setSortBy() {
    const currentSort = this.sortBy$.value
    switch (currentSort) {
      case 'asc':
      case 'none':
        this.sortBy$.next('desc')
        break
      case 'desc':
        this.sortBy$.next('asc')
        break
    }
  }

  public create(name: string) {
    this.service.create(name)
  }
}
