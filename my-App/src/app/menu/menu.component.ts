import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mList = [
    { name: 'Home', path: 'home' },
    { name: 'Education', path: 'education' },
    { name: 'Contact', path: 'contact' }
  ];

  constructor(private router: Router) {}

  navi(item) {
    this.router.navigateByUrl(item.path);
  }
  ngOnInit() {}
}
