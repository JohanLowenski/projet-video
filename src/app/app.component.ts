import { Component } from '@angular/core';
import { BodyPageComponent } from './body-page/body-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BodyPageComponent],
})
export class AppComponent {
  title = 'projet-video';
}
