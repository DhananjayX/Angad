import {Component} from '@angular/core';

@Component({
    selector:"toy",
    template:`<div class="toyroot"> </div>`,
    styles:['.toyroot{height:210px;width:270px;border:1px solid white;background-color:#267380;border-radius:3px;}   ']
})
export  class ToyComponent 
{
    name:string = "Default Nae";
    price:number = 0.0;
    soldCount:number=100;
    imgSrc:string="";

    

}