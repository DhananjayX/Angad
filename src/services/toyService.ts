import {Injectable} from '@angular/core';
import {Toy} from '../models/toy';
import { logger } from './logger';

@Injectable()
export class ToyService{

    public timestamp:Date;
    getToys():Toy[]
    {

        this.lgr.log("getting toys..");
        
        return [
            {"color":"red","imgSrc":"","Name":"Book","Price":200.0},           
            {"color":"blue","imgSrc":"","Name":"Mouse","Price":10.0}            
        ]
    }
    constructor(private lgr:logger)
    {
            this.timestamp = new Date();

    }

}