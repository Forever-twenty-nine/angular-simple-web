import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FtnHeaderComponent } from '../../../angular-library/projects/ftn-components/src/lib/components/ftn-header/ftn-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FtnHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-simple-web';
  imgsrc = 'src/assets/header.png';
  cabecera = "header";
}
