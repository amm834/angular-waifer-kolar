import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostEditGuardInterface} from "../post-edit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, PostEditGuardInterface {
  private id: number | undefined;
  private queryParams: any;
  public canExit: boolean | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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

  goToHome() {
    this.router.navigate([''])
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.canExit) {
      return confirm('Are you sure to leave from this page')
    }

    return this.canExit;
  }

}
