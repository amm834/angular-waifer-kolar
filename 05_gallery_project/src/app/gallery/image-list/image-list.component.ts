import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Image} from "./helper/image";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  @Output() sendImage = new EventEmitter<Image>();

  constructor(
    private imageService: ImageService
  ) {
  }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  onImageSelected(image: Image) {
    this.sendImage.emit(image);
  }

}
