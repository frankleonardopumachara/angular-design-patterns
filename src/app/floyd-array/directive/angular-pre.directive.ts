import {Directive, ElementRef, HostListener, Input} from '@angular/core'

@Directive({
  selector: '[AngularPre]'
})
export class AngularPreDirective {

  @Input()
  highlightColor: string = 'black'

  constructor(private el: ElementRef) {
    el.nativeElement.style.border = '1px solid black'
    el.nativeElement.style.backgroundColor = this.highlightColor
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null)
  }

  highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color
  }
}

