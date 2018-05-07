import {Component, Input,Output,EventEmitter} from '@angular/core';
import { ToyService } from '../../services/toyService';


@Component({
    selector:"toy",
    template:`<div class="toyroot"> 
                <div> Toy-Name = {{name | uppercase}} </div>
                <div style ="margin-top:10px;"> 
                    <span> Add to cart : </span>
                    <input class="circle" type="button" value="+" (click) = "toyclick(1)" /> 
                    <input class="circle" type="button" value="-" (click) = "toyclick(-1)" [disabled]='currentCount==0' /> 
                </div>
                <div class="btm">
                    <div class="cntinfo">  Local cart total :{{currentCount}}   </div>
                    <div class="cntinfo"> globalc cart count : {{globalCartCountChild}} </div>
                </div>
                <div style="font-style:italic;font-size:9px;">time :{{srvTime| date:'yyyy-MM-dd HH:mm:ss'}}</div>
              </div> 
               `,
    styles:['.btm{margin-top:70px;;background-color:white;} .cntinfo{line-height:30px;verticle-align:middle;height:30px;display:inline-block;background-color:#7F2545;border-radius:7px;margin:5px;padding-left:7px;padding-right:6px;}.toyroot{height:250px;width:270px;border:1px solid white;display:inline-block; margin:10px; padding:5px; background-color:#267380;border-radius:7px;}   '],
    providers:[ToyService]
})
export  class ToyComponent 
{
    srvTime:Date;
    constructor(tysrv:ToyService)
    {
        this.srvTime=    tysrv.timestamp;

    }
    @Input()
    name:string ;

    @Input()
    globalCartCountChild:number;;

    price:number = 0.0;
    soldCount:number=100;
    imgSrc:string="";   
    currentCount:number=0;

    @Output() toyCLickOut = new EventEmitter<number>();

    toyclick(ic:number)
    {
            console.log("toy clicked " + ic);
            if((this.currentCount + ic)>=0)
               { this.currentCount = this.currentCount + ic;
                 this.toyclickEmit(ic);
               }
    }


    toyclickEmit(cnt:number)
    {
        this.toyCLickOut.emit(cnt);

    }
        
    

}