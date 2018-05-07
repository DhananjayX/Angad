import {Component} from '@angular/core';
import {ToyComponent} from './toy.component';
import {Toy} from '../../models/toy';
import { ToyService } from '../../services/toyService';

@Component({
    selector:"toy-container",
    template:`<div> 
                    
                    <div class="cntHdr"> 
                        <div class="cntinfo">Cart count : {{globalCartCount}}</div>
                        <div class="cntinfo">Toy count : {{toycollection.length}}</div>
                        <div class="cntinfo" (click) = 'addSampleToy()'>Add sample toy</div>
                    </div>
                    <div> 
                                                       
                            <toy *ngFor='let ty of toycollection' name={{ty.Name}} (toyCLickOut) = "clicksignFromChild($event)" globalCartCountChild = {{globalCartCount}} > </toy> 
                            
                    </div>
    
               </div>`,
    styles:['.cntinfo{line-height:30px;verticle-align:middle;height:30px;display:inline-block;background-color:#7F2545;border-radius:7px;margin:5px;padding-left:7px;padding-right:6px;}.cntHdr{height:50px;line-height:50px;verticle-align:middle;background-color:#25805F;}'],
    providers:[ToyService]
})
export  class ToyContainerComponent
{
    toycollection: Toy[] ;
    globalCartCount:number=0;

    constructor(toysrv:ToyService)
    {
            this.toycollection = toysrv.getToys();  

    }

   clicksignFromChild( inrdcr:number)
   {
        this.globalCartCount = this.globalCartCount + inrdcr;
        console.log("from parent")
   }

   addSampleToy()
   {
        this.toycollection.push({"color":"red","imgSrc":"","Name":"Sample","Price":20.0},);

   }
  
}