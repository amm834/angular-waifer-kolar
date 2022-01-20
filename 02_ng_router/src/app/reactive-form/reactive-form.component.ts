import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  languages: string[] = ['HTML', 'CSS', 'JS', 'PHP', 'Deno', 'Node', 'Vue']

  formData: any;

  constructor() {
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      username: new FormControl('username'),
      email: new FormControl('email'),
      password: new FormControl('password'),
      language: new FormControl('language')
    })
  }

  sendData(data: string[]) {
    console.log(data)
  }

}
