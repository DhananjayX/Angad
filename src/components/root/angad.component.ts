import {Component} from '@angular/core';

import {ToyContainerComponent} from '../toys/toysContainer.component';

@Component({
            selector:'angad',
            template:`
                        <div class="root">
                            <div class='hdrParent'>
                                <h2 class="inlblock">{{appHeader}} </h2>  
                                <div class="right div inlblock">
                                        <div class="clsCart inlblock">Cart  
                                                <div class="gblnbr circle inlblock">{{globalCartCount}} </div>
                                         </div>
                                </div>
                            </div>
                            <div class="bdy">  
                                <toy-container (globalCartCountEmit) = "globalCartCountChange($event)"> </toy-container> 
                            </div>
                        </div>`,
            styles:['.gblnbr{position:relative;top:-20px;left:-18px; background-color:#7F2545; width:30px; height:30px; line-height:30px;vertical-align:middle;text-align: center;} .clsCart{position:relative; top:23px;} .bdy{color:white;height:100%; } .root{height:100%;opacity: 1.0;} .hdrParent{border:1px solid; height:75px;padding:5px;background-color:#267380;color:white;border-radius:1px;padding-left:12px;}']
                       
        })
export  class AngadComponent
{
    appHeader:string = "My  Toy Store";
    globalCartCount:number=0;

    globalCartCountChange(gblcnt:number)
    {
            this.globalCartCount = gblcnt;
    }

}