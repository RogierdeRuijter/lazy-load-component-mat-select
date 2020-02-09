import { Component, OnInit, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
class NoNameNeeded { }

