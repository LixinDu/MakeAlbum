import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule,RouterLink,RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Albums';
}
