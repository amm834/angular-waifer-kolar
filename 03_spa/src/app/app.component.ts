import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  tasks: string[] = [];
  task: string = '';
  error: string = '';

  addTask(): void {
    if (this.task === '') {
      this.error = 'Please enter your task';
      return;
    }
    this.tasks.push(this.task);
    this.task = '';
    this.error = '';
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
