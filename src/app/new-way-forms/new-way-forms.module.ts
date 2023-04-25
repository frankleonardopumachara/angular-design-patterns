import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MyFormComponent} from './my-form/my-form.component'
import {ReactiveFormsModule} from '@angular/forms'
import {PageComponent} from './page/page.component'
import {NewWayFormsRoutingModule} from './new-way-forms.routing-module'


@NgModule({
  declarations: [
    MyFormComponent,
    PageComponent,
  ],
  imports: [
    NewWayFormsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MyFormComponent,
  ]
})
export class NewWayFormsModule {
}
