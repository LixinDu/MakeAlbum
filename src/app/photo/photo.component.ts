import { Component, Input } from '@angular/core';
import { PhotoInfo } from '../photo-info';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './photo.component.html', 
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  @Input() photoInfo!: PhotoInfo;
 
}
