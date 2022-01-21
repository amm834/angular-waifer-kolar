import {Injectable} from '@angular/core';
import {Image} from "../gallery/image-list/helper/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = [];
  totalImage = 4;

  constructor() {
    for (let i = 1; i <= this.totalImage; i++) {
      this.images.push(
        new Image(i,
          `assets/images/sm-${i}.jpg`,
          `assets/images/lg-${i}.jpg`,
          `Description ${i}`,
          `Title ${i}`
        )
      )
    }
  }

  getImages() {
    return this.images;
  }
}
