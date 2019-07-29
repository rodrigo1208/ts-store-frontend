import { Component, OnInit } from '@angular/core';
import {SidenavButton} from './sidenav/sidenav.component';
import {Router} from '@angular/router';

@Component({
  selector: 'ts-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buttons: SidenavButton[] = [
    {
      icon: 'home',
      command: () => this.router.navigate([''])
    },
    {
      icon: 'layer-group',
      command: () => this.router.navigate(['/categoria'])
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
