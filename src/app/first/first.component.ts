import { Component } from '@angular/core';
import { Service } from '../bindding.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private service: Service) { }

  onKeypress(event: any) {
    this.service.sendData(event.target.value);
  }

}
