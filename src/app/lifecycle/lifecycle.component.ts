import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void{
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }
}
