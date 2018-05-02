import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngadComponent } from './components/angad.component';
import {ToyContainerComponent} from './components/toys/toysContainer.component';
import {ToyComponent} from './components/toys/toy.component';

@NgModule({
  declarations: [
    AngadComponent ,
    ToyContainerComponent ,
    ToyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AngadComponent]
})
export class AngadModule { }
