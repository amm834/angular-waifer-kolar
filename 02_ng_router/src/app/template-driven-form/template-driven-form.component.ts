import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  languages: string[] = ['HTML', 'CSS', 'JS', 'PHP', 'Deno', 'Node', 'Vue']

  constructor() {
  }

  ngOnInit(): void {
  }

  sendData(formData: string[]) {
    console.log(formData)
  }


}
