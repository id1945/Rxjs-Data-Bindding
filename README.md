# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Clone
````
git clone https://github.com/id1945/Rxjs-Data-Bindding.git
npm install
npm start
````

```html
<first-app></first-app>
<hr/>
<second-app></second-app>
```

```javascript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Service {
    private subject = new Subject < any > ();
    //private subject = new BehaviorSubject<boolean>(false);

    sendData(event) {
        this.subject.next(event);
    }

    get responseData() {
        return this.subject.asObservable();
    }
}

import { Component } from '@angular/core';
import { Service } from '../bindding.service';

@Component({
  selector: 'first-app',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private service: Service) { }

  onKeypress(event: any) {
    this.service.sendData(event.target.value);
  }
}

import { Component } from '@angular/core';
import { Service } from '../bindding.service';

@Component({
  selector: 'second-app',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  content: string = '';

  constructor(private service: Service) {
    this.service.responseData.forEach(event => this.content = event);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';
import { SecondComponent } from './second-component/second.component';
import { Service } from './bindding.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , FirstComponent, SecondComponent],
  bootstrap:    [ AppComponent ],
  providers: [Service]
})
export class AppModule { }
```

[https://giai-ma.blogspot.com/2018/11/rxjs-bindding-data.html](https://giai-ma.blogspot.com/2018/11/rxjs-bindding-data.html)
