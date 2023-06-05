import { Component, OnDestroy } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Location, NgOptimizedImage } from '@angular/common';
import { filter } from 'rxjs';
import { event } from 'jquery';
import { AuthService } from 'src/app/lib/login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnDestroy{
  routePath!: string;

  constructor(private router: Router, private authService: AuthService) {
    this.routePath = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.routePath = event.url;
        console.log(this.routePath)
      }
    });
    
  }
  
  ngOnDestroy(): void {
    this.router.ngOnDestroy()
  }
  onclick(){
    this.authService.doLogout()
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
}
}
