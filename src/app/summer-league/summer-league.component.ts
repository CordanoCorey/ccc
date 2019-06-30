import { Component, OnInit } from '@angular/core';
import { SmartComponent } from '@caiu/library';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isMobileSelector } from '../shared/selectors';

@Component({
  selector: 'ccc-summer-league',
  templateUrl: './summer-league.component.html',
  styleUrls: ['./summer-league.component.scss']
})
export class SummerLeagueComponent extends SmartComponent implements OnInit {
  isMobile = false;
  isMobile$: Observable<boolean>;

  constructor(public store: Store<any>) {
    super(store);
    this.isMobile$ = isMobileSelector(store);
  }

  get cols(): number {
    return this.isMobile ? 1 : 3;
  }

  ngOnInit() {
    this.sync(['isMobile']);
  }
}
