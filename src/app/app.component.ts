import { Component } from '@angular/core';
import { Person } from './person';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  p=new Person();
  title = 'newproject';
  onSubmit(x:NgForm){
    console.log(x.value)
  }
}
