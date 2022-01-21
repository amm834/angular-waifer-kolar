import {Component, OnInit} from '@angular/core';
import {Image} from "./helper/image";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  totalImage = 4;

  constructor() {
  }

  ngOnInit(): void {
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

}
