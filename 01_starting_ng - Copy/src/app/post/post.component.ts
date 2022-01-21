import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private id: number | undefined;
  private queryParams: any;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.id = this.activatedRoute.snapshot.params['id']
    // get named parameter
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id']
        console.log('Post id is ' + this.id)
      }
    )

    // get url query string
    this.activatedRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.queryParams = queryParams;
        console.log(this.queryParams)
      }
    )
  }

  ngOnInit(): void {
  }

}
