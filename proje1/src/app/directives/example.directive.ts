import { Directive, ElementRef } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appExample]', // Uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır.

  //- selector özelliği köşeli parantez içerisinde yazılıyorsa bu attribute olarak kullanılacağı anlamına gelmektedir. Yok eğer . ile yazılıyorsa bu da class olarak ilgili directive'in kullanılacağı anlamına gelmektedir.
  standalone: true
})
export class ExampleDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.backgroundColor="red";
    $(element.nativeElement).fadeOut().
    fadeIn();
   }

}
