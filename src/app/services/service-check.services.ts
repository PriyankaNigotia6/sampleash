import { AppServices } from "./app.services";
import { Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class CheckServices{
    serviceEventEmmiter = new EventEmitter<string>();

    constructor(private appServices: AppServices){

    }

    logFromServiceCheck(Message){

       return this.appServices.logConsole( Message + "Via Aother Service!!" );

    }
}