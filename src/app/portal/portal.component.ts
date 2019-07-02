import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../shared/models';
import { build } from '../shared/utils';

@Component({
  selector: 'ccc-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  navbarMenuItems: MenuItem[] = [
    build(MenuItem, { routerLink: '/summer-league', label: 'Summer League' }),
    build(MenuItem, { routerLink: '/contact', label: 'Contact Us' })
  ];

  sidenavMenuItems: MenuItem[] = [
    build(MenuItem, {
      routerLink: '/contact',
      label: 'Contact Us',
      matIcon: 'info'
    }),
    build(MenuItem, {
      externalLink: '/assets/pdf/summer-league-rules.pdf',
      label: 'Summer League Rules',
      matIcon: 'picture_as_pdf'
    }),
    build(MenuItem, {
      externalLink: '/assets/pdf/summer-league-sponsorship-form.pdf',
      label: 'Summer League Sponsorship Form',
      matIcon: 'picture_as_pdf'
    })
  ];
  constructor() {}

  ngOnInit() {}
}
