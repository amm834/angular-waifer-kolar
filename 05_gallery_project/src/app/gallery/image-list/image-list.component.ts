import {Component, OnInit} from '@angular/core';
import {Image} from "./helper/image";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  selectedImage: Image | undefined;

  constructor(
    private imageService: ImageService
  ) {
  }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  onImageSelected(image: Image) {
    this.selectedImage = image;
  }
}
