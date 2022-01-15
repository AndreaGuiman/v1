import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test: Test = {
    id: 1,
    user: 'test-angular',
    password: 'test-angular'
  };

  constructor() {
    console.log(this.test); 
  }

  ngOnInit(): void {
  }

}
