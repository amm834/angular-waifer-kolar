import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterviewchecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanged')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestory started')
  }

  ngOnInit(): void {
    console.log('ngOnInit started')
  }


}
