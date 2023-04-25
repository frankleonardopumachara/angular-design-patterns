import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  firstName = new FormControl('', Validators.required)
  lastName = new FormControl('', Validators.required)
  email = new FormControl('', Validators.required)
  tel = new FormControl('', Validators.required)
  companyName = new FormControl('', Validators.required)

  clientForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    tel: this.tel,
    companyName: this.companyName
  })

  constructor(
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!
  }

  save() {
    console.log(this.clientForm.value)
  }
}
