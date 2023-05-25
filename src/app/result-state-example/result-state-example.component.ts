import {Component, Injectable, OnInit} from '@angular/core'
import {ResultState} from '../table-and-filter-mvp/result-state'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

interface Post {
  id: number
  name: string
}

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpClient,) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080')
  }
}


@Component({
  selector: 'result-state-example',
  template: `
    <ng-template *ngIf="postResult$.state$ | async as postsResult">
      <p *ngIf="postsResult.loading">Loading...</p>
      <p *ngIf="postsResult.error">Error...!</p>
      <p *ngIf="postsResult.result">{{ postsResult.result }}</p>
    </ng-template>
  `,
})
export class ResultStateExampleComponent implements OnInit {

  postResult$ = new ResultState<Post[]>()

  constructor(private readonly postsService: PostsService,) {
  }

  ngOnInit(): void {
    this.postResult$.loadingState()
    this.postsService.getPosts()
    .pipe()
    .subscribe({
      next: (posts) => this.postResult$.successState(posts),
      error: (err) => this.postResult$.errorState(err)
    })
  }
}
