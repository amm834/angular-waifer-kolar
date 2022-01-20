import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      username: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('[\\w\\s\\-]+')
        ]
      )),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      language: new FormControl('', Validators.required)
    })
  }

  sendData(data: string[]) {
    console.log(data)
  }

}
