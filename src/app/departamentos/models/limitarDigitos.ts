import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[app-limitador]'
})
export class LimitadorDigitos {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').substr(0, 4); // Remove caracteres não numéricos e limita a quatro dígitos
    input.value = value;
  }
}
