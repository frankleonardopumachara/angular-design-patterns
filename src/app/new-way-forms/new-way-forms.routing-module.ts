import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {PageComponent} from './page/page.component'
import {MyFormComponent} from './my-form/my-form.component'

const routes: Routes = [
  {
    path: 'my-page',
    component: PageComponent,
    children: [
      {
        path: ':id',
        component: MyFormComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewWayFormsRoutingModule {

}
