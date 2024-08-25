import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoComponent } from '../photo/photo.component';
import { CommonModule } from '@angular/common';
import { PhotoInfo } from '../photo-info';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [CommonModule,PhotoComponent],
  templateUrl: './photo-details.component.html', 
  styleUrls: ['./photo-details.component.css'],
})

export class PhotoDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  photoService = inject(PhotoService);
  photoInfo: PhotoInfo | undefined;

  constructor() {
    const photoInfoId = Number(this.route.snapshot.params['id']);
    this.photoInfo = this.photoService.getPhotoInfoById(photoInfoId);
  }
}
