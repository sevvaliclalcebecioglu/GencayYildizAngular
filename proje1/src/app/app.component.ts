import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //templateUrl: './app.component.html',
    template: `
   <!-- <h1>{{title}}</h1> => Text Interpolations-->

   //Property Binding
   <!--<input type="text" [value]="title">
   <app-home [pageName]="title"></app-home>-->
   <!--Kendi yaptığımız field'ıda bu şekilde kullanabilirim-->

   //Two-Way Data Binding
   <!--<input type="text" [(ngModel)]="name">-->

    `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'proje1';
  name: string;
}
