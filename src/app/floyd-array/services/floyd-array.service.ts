import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FloydArrayService {

  private static startOfAlphabet = 97

  floydTriangle(rows: number): string {
    let floydString = ''
    let currentLetter = FloydArrayService.startOfAlphabet
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < i; j++) {
        floydString = floydString + String.fromCharCode(currentLetter) + ' '
        currentLetter++
      }
      floydString = floydString + '\n\r'
    }
    return floydString
  }

  evenFloydTriangle(rows: number): string {
    let currentLetter = FloydArrayService.startOfAlphabet
    let resultString = ''
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j <= (rows - i - 2); j++) {
        resultString += ''
      }
      for (let j = 0; j <= i; j++) {
        resultString += String.fromCharCode(currentLetter) + ''
        currentLetter++
      }
      resultString += '\n\r'
    }
    return resultString
  }
}
