import { Component } from '@angular/core';
import { Service } from '../bindding.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  content: string = '';

  constructor(private service: Service) {
    this.service.responseData.forEach(event => this.content = event);
  }

}
