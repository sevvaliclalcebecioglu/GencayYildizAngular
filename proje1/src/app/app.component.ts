import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //templateUrl: './app.component.html',
    template: `<p>merhaba</p>
  <hr>
  <div style="background-color: aqua;">
  <app-home></app-home>
  </div>`,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'proje1';
}
