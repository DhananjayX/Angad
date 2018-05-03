import {Component} from '@angular/core';
import {ToyComponent} from './toy.component';

@Component({
    selector:"toy-container",
    template:`<div> <div> container of toys .. </div>
                    <div> Global count : {{globalCount}} </div>
                    <div> 
                            <toy name='Cat' (toyCLickOut) = "clicksignFromChild($event)" > </toy> 
                            <toy name='Lego'(toyCLickOut) = "clicksignFromChild($event)" > </toy> 
                            <toy name='Castle'(toyCLickOut) = "clicksignFromChild($event)" > </toy> 
                    </div>
    
               </div>`,
    styles:['']
})
export  class ToyContainerComponent
{
   toycollection:ToyComponent[] ;
    globalCount:number=0;

   clicksignFromChild( inrdcr:number)
   {
        this.globalCount = this.globalCount + inrdcr;
        console.log("from parent")
   }
  
}