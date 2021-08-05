import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.sass']
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() isLoading = new BehaviorSubject<boolean>(true);
  constructor() { }
  

  ngOnInit() {
  }

}
