import { Component, OnInit } from '@angular/core';
import { calculateAge } from '../../shared/utils';

@Component({
  selector: 'ccc-summer-league-signup',
  templateUrl: './summer-league-signup.component.html',
  styleUrls: ['./summer-league-signup.component.scss']
})
export class SummerLeagueSignupComponent implements OnInit {

  age = 0;

  constructor() { }

  get startDate(): Date {
    return new Date(2007, 0, 1);
  }

  ngOnInit() {
  }

  changeBirthDate(value: Date) {
    this.setAge(new Date(value));
  }

  setAge(birthDate: Date) {
    this.age = calculateAge(birthDate);
  }

}
