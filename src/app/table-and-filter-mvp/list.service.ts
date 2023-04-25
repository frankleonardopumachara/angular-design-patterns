import {Injectable} from '@angular/core'
import {BehaviorSubject, map, Observable, of} from 'rxjs'
import {v4 as uuid} from 'uuid'
import {ListItem} from './list-item.model'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private items = new BehaviorSubject<ListItem[]>([])

  getItems$(): Observable<ListItem[]> {
    return this.items
      .asObservable()
      .pipe(
        map((items) => items.map(item => new ListItem(item.name)))
      )
  }

  create(name: string): void {
    this.items.next([...this.items.value, new ListItem(name)])
  }
}
