import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatnumber]'
})
export class FormatNumberDirective {
    @Input('appFormatnumber') formatnumber: string;
  constructor(private el: ElementRef) {
   }

   @HostListener('keydown', ['$event']) onKeyDown(evt: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    if ((evt.keyCode < 48 || evt.keyCode > 57) && (evt.keyCode !== 8 && evt.keyCode !== 46)) {
        evt.preventDefault();
    }
  }

  @HostListener('blur') OnBlur() {
      this.format();
    }


  private format() {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
      this.el.nativeElement.value = isNaN(this.el.nativeElement.value) ?
      this.el.nativeElement.value : formatter.format(this.el.nativeElement.value);
  }
}
