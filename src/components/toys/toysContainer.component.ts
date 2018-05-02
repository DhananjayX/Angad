import {Component} from '@angular/core';
import {ToyComponent} from './toy.component';

@Component({
    selector:"toy-container",
    template:`<div> <div> container of toys .. </div>
                    <div> <toy> </toy> </div>
    
               </div>`,
    styles:['']
})
export  class ToyContainerComponent
{
   toycollection:ToyComponent[] ;
  
}