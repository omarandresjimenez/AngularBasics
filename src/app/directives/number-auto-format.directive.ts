import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appAutoformatnumber]'
})
export class AutoFormatNumberDirective implements OnChanges {
  @Input('appAutoformatnumber') value: number;
  constructor(private el: ElementRef) {
   }

  public ngOnChanges() {
      this.format();
  }

  private format() {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
      this.el.nativeElement.value = formatter.format(this.value);
  }
}
