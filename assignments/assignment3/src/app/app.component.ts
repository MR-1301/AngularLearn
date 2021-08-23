import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .greaterThan5 {
      color: white;
    }
  `]
})
export class AppComponent {
  content: string;
  toDisplay: boolean;
  clickInfo: number[];
  counter: number;

  constructor() {
    this.content = 'My Secret is: You Are Cute!! O:)';
    this.toDisplay = false;
    this.clickInfo = [];
    this.counter = 1;
  }

  changeDisplayStatus() {
    this.toDisplay = !this.toDisplay;
    this.clickInfo.push(this.counter);
    this.counter++;
  }

  getColor(click: number) {
    if (click >= 5)
      return 'blue';
    return 'white';
  }

  isGreaterThan5(click: number) {
    return click >= 5;
  }
}
