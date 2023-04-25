import {Component, OnInit} from '@angular/core'
import {catchError, EMPTY, map, of} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.init()
  }

  init() {
    return of(2, 4, 6)
    .pipe(
      map(i => {
        if (i === 6) throw 'Error'
        return i
      }),
      catchError(err => EMPTY)
    )
  }
}
