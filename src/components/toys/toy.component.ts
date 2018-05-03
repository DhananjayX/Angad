import {Component, Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector:"toy",
    template:`<div class="toyroot"> 
                <div> Toy-Name = {{name}} </div>
                <div style ="margin-top:10px;"> 
                    <span> Add to cart : </span>
                    <input type="button" value="+" (click) = "toyclick(1)" /> 
                    <input type="button" value="-" (click) = "toyclick(-1)" [disabled]='currentCount==0' /> 
                    <span style="color:black;margin-left:25px;">  total :{{currentCount}}   </span>
                </div>
                
              </div>  `,
    styles:['.toyroot{height:210px;width:270px;border:1px solid white;display:inline-block; margin:10px; padding:5px; background-color:#267380;border-radius:7px;}   ']
})
export  class ToyComponent 
{
    @Input()
    name:string = "Default Nae";

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