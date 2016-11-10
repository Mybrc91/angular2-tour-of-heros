import { Directive, ElementRef, Renderer , HostListener , Input} from '@angular/core';
@Directive({ selector: '[highlight]' })
/** Highlight the attached element or an InputElement in blue */
export class HighlightDirective {
   private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input('highlight') highlightColor: string;

  @Input() set defaultColor(colorName: string){
  this._defaultColor = colorName || this._defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}