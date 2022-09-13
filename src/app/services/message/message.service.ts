import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  error404: string = "No match found";
  constructor() { }

  add(message:string){
    this.messages.push(message);
  }

  clear(){
    this.messages = []
  }
}
