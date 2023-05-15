import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Assignment - 01';

  count = 0;
  increment_counter(): void {
    this.count++;
  }

  displayVal: string = '';
  array: string[] = [];

  add_data() {
    this.array.push(this.displayVal);
    this.displayVal = '';
  }
}
