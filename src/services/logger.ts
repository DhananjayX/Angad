import { Injectable } from "@angular/core";

@Injectable()
export class logger
{
    log(msg:string){console.log(msg)}
}