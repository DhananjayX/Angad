import {Component, Output,EventEmitter} from '@angular/core';
import {ToyComponent} from './toy.component';
import {Toy} from '../../models/toy';
import { ToyService } from '../../services/toyService';

@Component({
    selector:"toy-container",
    template:`<div class="toyconmain"> 
                    
                    <div class="cntHdr"> 
                        
                        <div class="cntinfo">Toy count : {{toycollection.length}}</div>
                        <div class="cntinfo" (click) = 'addSampleToy()'>Add sample toy</div>
                    </div>
                    <div> 
                                                       
                            <toy *ngFor='let ty of toycollection' name={{ty.Name}} (toyCLickOut) = "clicksignFromChild($event)" globalCartCountChild = {{globalCartCount}} > </toy> 
                            
                    </div>
    
               </div>`,
    styles:['.toyconmain{background-color:#424658;min-height:100%;}.cntinfo{line-height:30px;verticle-align:middle;height:30px;display:inline-block;background-color:#7F2545;border-radius:7px;margin:5px;padding-left:7px;padding-right:6px;}.cntHdr{height:50px;line-height:50px;verticle-align:middle;background-color:#25805F;}'],
    providers:[ToyService]
})
export  class ToyContainerComponent
{
    toycollection: Toy[] ;
    globalCartCount:number=0;

     @Output()
     globalCartCountEmit = new EventEmitter<number>();

    constructor(toysrv:ToyService)
    {
            this.toycollection = toysrv.getToys();  

    }

   clicksignFromChild( inrdcr:number)
   {
        this.globalCartCount = this.globalCartCount + inrdcr;
        console.log("from parent")
        this.globalCartCountEmit.emit(this.globalCartCount);
   }

   addSampleToy()
   {
        this.toycollection.push({"color":"red","imgSrc":"","Name":"Sample","Price":20.0},);

   }
  
}