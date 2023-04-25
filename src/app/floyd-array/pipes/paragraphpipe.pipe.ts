import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'paragraph'
})
export class ParagraphPipe implements PipeTransform {
  transform(value: string, symbol: string): string {
    return value.replace(
      new RegExp('\n\r', 'g'),
      symbol + '\n\r'
    )
  }
}
