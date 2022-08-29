import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl:`../testing/testing.component.html`,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }
  name = "parthiban"

  ngOnInit(): void {
  }

}
