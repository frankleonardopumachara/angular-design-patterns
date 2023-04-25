import {Component} from '@angular/core'
import {FloydArrayService} from './services/floyd-array.service'

@Component({
  selector: 'app-root',
  template: `
      <p>
          <input #checkbox type="checkbox" value="even">Even?<br>
          <input #rows type="text" name="rows">
          <button (click)="onClick(+rows.value, checkbox.checked)">CLICK</button>
      </p>
      <pre AngularPre [highlightColor]="color">
      {{floydString | paragraph: 'jeje'}}
      </pre>
  `,
})
export class FloydArrayAppComponent {

  floydString: string = ''
  color: 'yellow' | 'red' = 'red'

  constructor(
    private readonly floydArrayService: FloydArrayService) {
  }

  onClick(rows: number, checked: boolean) {
    if (checked) {
      this.floydString = this.floydArrayService.evenFloydTriangle(rows)
    } else {
      this.floydString = this.floydArrayService.floydTriangle(rows)
    }
  }
}
