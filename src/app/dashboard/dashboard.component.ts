import { Component, OnInit } from '@angular/core';
import { User }    from '../loginForm/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  model = new User('',''); 
  
  ngOnInit() {
  }

}
