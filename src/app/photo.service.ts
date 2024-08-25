//ng g service housing
import { Injectable } from '@angular/core';
import { PhotoInfo } from './photo-info';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  //url = 'http://localhost:3000/locations';
  protected photoInfoList: PhotoInfo[]=[
    {
      id: 0,
      name: 'White Swan in Heart Shape',
      state: 'Austria',
      photo: '/assets/images/bird1.jpeg',
      year: 2023,
      month: 'July',
    },
    {
      id: 1,
      name: 'Hornbill Gives "kok" Calls',
      state: 'Austria',
      photo: '/assets/images/bird2.jpeg',
      year: 2024,
      month: 'June',
    },
    {
      id: 2,
      name: 'Pelican with Big Mouth',
      state: 'German',
      photo: '/assets/images/bird3.jpeg',
      year: 2022,
      month: 'Nov.',
    },
    {
      id: 3,
      name: 'Lotus Flower',
      state: 'China',
      photo: '/assets/images/flower1.jpeg',
      year: 2018,
      month: 'July',
    },
    {
      id: 4,
      name: 'Vienna Blue Rabbit',
      state: 'Austria',
      photo: '/assets/images/rabit.jpeg',
      year: 2022,
      month: 'Oct.',
    },
    {
      id: 5,
      name: 'Water Lily',
      state: 'China',
      photo: '/assets/images/flower2.jpeg',
      year: 2018,
      month: 'July',
    },
    {
      id: 6,
      name: 'Trollius Ircuticus',
      state: 'Austria',
      photo: '/assets/images/flower3.jpeg',
      year: 2024,
      month: 'June',
    },
    {
      id: 7,
      name: 'Hyacinthus orientalis',
      state: 'Netherlands',
      photo: '/assets/images/flower4.jpeg',
      year: 2023,
      month: 'April',
    },
    {
      id: 8,
      name: 'Magnolia',
      state: 'China',
      photo: '/assets/images/flower5.jpeg',
      year: 2018,
      month: 'March',
    },];
  
  constructor() { }
   
  //define some functions
  // async getAllHousingLocations(): Promise<HousingLocation[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }
  getAllPhotoInfo():PhotoInfo[]{
   return this.photoInfoList;
  }

  // async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return (await data.json()) ?? {};
  // }

  getPhotoInfoById(id: Number):PhotoInfo | undefined{
   // return the unique type HousingLocation or undefined
   return this.photoInfoList.find(
     photoInfo => photoInfo.id === id);
  }

}

