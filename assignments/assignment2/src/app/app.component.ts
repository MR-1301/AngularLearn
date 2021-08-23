import {Component} from '@angular/core';
import {isEmpty} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isEmpty = true;

  toggleButton(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 0)
      this.isEmpty = false;
    else
      this.isEmpty = true;
  }

  resetString() {
    this.username = '';
    this.isEmpty = true;
  }
}
