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