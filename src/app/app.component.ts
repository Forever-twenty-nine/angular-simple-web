import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { FtnHeaderComponent, 
         FtnFooterComponent, 
         FtnHeroComponent, 
         FtnBrandsComponent, 
         FtnBenefitsComponent} from '../../../angular-library/dist/ftn-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            FtnHeaderComponent, 
            FtnFooterComponent, 
            FtnHeroComponent,
            FtnBrandsComponent,
            FtnBenefitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-simple-web';
  imgsrc = 'src/assets/images/brand.png';
  cabecera = "header";
}