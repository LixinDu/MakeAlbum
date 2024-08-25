import { Component,inject} from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoInfo } from '../photo-info';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PhotoComponent],
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  photoService: PhotoService = inject(PhotoService);
  photoInfoList: PhotoInfo[] = [];
  filteredPhotoInfoList: PhotoInfo[] = [];

  constructor() {
    this.photoInfoList = this.photoService.getAllPhotoInfo();
    this.filteredPhotoInfoList = this.photoInfoList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPhotoInfoList = this.photoInfoList;
      return;
    }
    this.filteredPhotoInfoList = this.photoInfoList.filter((photoInfo) =>
      photoInfo?.year == Number(text));
  }
}
