import {Component, OnInit} from '@angular/core';
import {Image} from "./image-list/helper/image";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  image: Image | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }


  getImage(image: Image) {
    this.image = image;
  }

}
