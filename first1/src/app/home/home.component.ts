import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = "Home page"

  constructor(private router:Router) { }

  onSecond(){
    this.router.navigateByUrl("second")

  }

  ngOnInit() {
  }

}
