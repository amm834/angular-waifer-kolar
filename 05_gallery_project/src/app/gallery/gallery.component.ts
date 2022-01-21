import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  totalImage = 4;

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 1; i <= this.totalImage; i++) {
      this.images.push(`sm-${i}.jpg`);
    }
  }

}
