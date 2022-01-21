import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../helper/image";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: Image | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  onImageSelected(image: Image) {
    console.log(image)
  }

}