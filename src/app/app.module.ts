import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {FloydArrayAppComponent} from './floyd-array/floyd-array-app.component'
import {AngularPreDirective} from './floyd-array/directive/angular-pre.directive'
import {ParagraphPipe} from './floyd-array/pipes/paragraphpipe.pipe'
import {RadioButtonFormComponent} from './radio-button-form/radio-button-form.component'
import {RadioButtonModule} from 'primeng/radiobutton'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CalendarFormComponent} from './calendar-form/calendar-form.component'
import {CalendarModule} from 'primeng/calendar'
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'
import {TimeoutsComponent} from './stability-patterns/timeouts.component'
import {HttpClientModule} from '@angular/common/http'
import {TableAndFilterComponent} from './table-and-filter-mvp/table-and-filter.component'
import {FilterComponent} from './table-and-filter-mvp/filter.component'
import {SortComponent} from './table-and-filter-mvp/sort.component'
import {NewWayFormsModule} from './new-way-forms/new-way-forms.module'
import {AppComponent} from './app.component'
import {TableModule} from 'primeng/table'
import {UnsortDirective} from './unsort.directive'
import {ResultStateExampleComponent} from './result-state-example/result-state-example.component'

@NgModule({
  declarations: [
    FloydArrayAppComponent,
    AngularPreDirective,
    ParagraphPipe,
    RadioButtonFormComponent,
    CalendarFormComponent,
    TimeoutsComponent,
    TableAndFilterComponent,
    FilterComponent,
    SortComponent,
    AppComponent,
    UnsortDirective,
    ResultStateExampleComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
    NewWayFormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
