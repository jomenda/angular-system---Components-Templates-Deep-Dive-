import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
  // @HostBinding('class') className = 'control'; - Only used for backward compatibility.
  // @HostListener('(click)') onClick() {
  //   console.log('Control clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
  }
}
