import {Component} from '@angular/core';

import {ToyContainerComponent} from '../toys/toysContainer.component';

@Component({
            selector:'angad',
            template:`
                        <div class="root">
                            <div class='hdrParent'>
                            <h2>{{appHeader}} </h2>   
                            
                            <div>  
                            <toy-container> </toy-container> </div>
                        </div>
            </div>`,
            styles:['.root{height:100%;background-color:#803225;opacity: 0.93;} .hdrParent{border:1px solid; height:55px;padding:5px;background-color:#267380;color:white;border-radius:5px;}']
                       
        })
export  class AngadComponent
{
    appHeader:string = "My  Toy Store";

}