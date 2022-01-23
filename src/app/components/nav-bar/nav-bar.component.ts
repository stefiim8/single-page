import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  routes = [
    {
      label: "Home",
      path: '/home'
    },
    {
      label: "Decide",
      path: '/decide'
    }
  ];
  currentRoute;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.url){
        this.currentRoute = event.url;
      }
      
    });
  }

}
