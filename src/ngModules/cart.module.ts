//import {AngadModule} from './angad.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CartComponent} from '../components/cart/cart.component';


@NgModule({
declarations:[CartComponent],
imports:[BrowserModule]

})
export class CartModule
{}