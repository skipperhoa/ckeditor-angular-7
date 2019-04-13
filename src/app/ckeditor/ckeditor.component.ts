import {Component} from '@angular/core';

@Component({
    selector:"box-ckeditor",
    templateUrl:"./ckeditor.component.html",
    styleUrls:['./ckeditor.component.css']
})

export class CkeditorComponent{
   
    public editorValue: string = '';
    constructor(){

    }
  
    onSubmit(){

        /**
         * YOU CAN WRITE EVENT
         * RESTFUL API IN LARAVEL 
         * YOU CAN SEEN MORE:http://hoanguyenit.com/login-state-in-angular-7-+-laravel-5-4.html
         */
        console.log(this.editorValue);
    }
}