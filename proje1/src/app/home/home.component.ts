import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  //templateUrl: './home.component.html',
  template: `
        <h1>{{pageName}}</h1>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() pageName: string; // @ınput yaptığım için dışardan değer alınabilir hale getirdim.
}
