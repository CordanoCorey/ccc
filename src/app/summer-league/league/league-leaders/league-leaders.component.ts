import { Component, OnInit, Input } from '@angular/core';
import { SmartComponent } from '@caiu/library';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ccc-league-leaders',
  templateUrl: './league-leaders.component.html',
  styleUrls: ['./league-leaders.component.scss']
})
export class LeagueLeadersComponent extends SmartComponent implements OnInit {
  _statCategoryId = 0;

  constructor(public store: Store<any>) {
    super(store);
  }

  @Input()
  set statCategoryId(value: number) {
    this._statCategoryId = value;
  }

  get statCategoryId(): number {
    return this._statCategoryId;
  }

  ngOnInit() {}
}
