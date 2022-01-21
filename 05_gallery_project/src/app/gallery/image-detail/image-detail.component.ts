import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../image-list/helper/image";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input() selectedImage: Image | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
