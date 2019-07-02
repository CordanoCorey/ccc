import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { MenuItem } from '../models';

@Component({
  selector: 'ccc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() isMobile = false;
  @Input() menuItems: MenuItem[] = [];

  constructor() {}

  get paddingLeft(): number {
    return this.isMobile ? 40 : 160;
  }

  ngOnInit() {}
}
