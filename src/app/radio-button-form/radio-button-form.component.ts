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
    </form>
  `,
})
export class RadioButtonFormComponent {

  form = new FormGroup({
    console: new FormControl()
  })
}
