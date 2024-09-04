import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FtnHeaderComponent } from '../../../angular-library/projects/ftn-components/src/lib/components/ftn-header/ftn-header.component';
import { FtnFooterComponent } from '../../../angular-library/projects/ftn-components/src/lib/components/ftn-footer/ftn-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FtnHeaderComponent, FtnFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-simple-web';
  imgsrc = 'src/assets/images/brand.png';
  cabecera = "header";
}
