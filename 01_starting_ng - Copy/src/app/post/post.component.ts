import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // private id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.id = this.activatedRoute.snapshot.params['id']
    // console.log(this.id)
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params['id'])
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}
