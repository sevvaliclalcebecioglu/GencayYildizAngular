import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //templateUrl: './app.component.html',
    template: `
   <div appExample>
    merhaba
   </div>
    `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'proje1';
  name: string;
}
