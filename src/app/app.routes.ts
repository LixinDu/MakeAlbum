import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title: 'Album'
    },
    {
        path:'photo-details/:id',
        component:PhotoDetailsComponent,
        title: 'Photo details',
    },
];
