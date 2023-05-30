import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count: number) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    // use this when subscribe if you want to see the mapped data
    customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    }));

    this.intervalSubscription = customIntervalObservable.subscribe(count => {
      console.log(count);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('completed');
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
