import {Component} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <p-radioButton
        name="console"
        value="ps4"
        formControlName="console"
      >
      </p-radioButton>
      <p-radioButton
        name="console"
        value="ps1"
        formControlName="console"
      >
      </p-radioButton>

      <p-calendar formControlName="date"></p-calendar>

      <button (click)="onPrint()">Click me!</button>
    </form>
  `,
})
export class CalendarFormComponent {

  form = new FormGroup({
    console: new FormControl(),
    date: new FormControl()
  })

  onPrint() {
  }
}
